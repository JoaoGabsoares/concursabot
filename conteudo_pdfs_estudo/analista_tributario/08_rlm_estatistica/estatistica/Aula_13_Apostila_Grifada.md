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
arquivo_origem: Aula 13_Apostila_Grifada.txt
tipo_material: Curso Teórico Base
aula_numero: '13'
titulo_aula: Índice
---

# Índice

Índice
1)  Introdução - Testes de Hipóteses


)  Conceitos Fundamentais                                                                                                                                                                    4

3)  Tipos de Erros                                                                                                                                                                          13
)  Testes para Distribuições Uniformes                                                                                                                                                     24
..............................................................................................................................................................................................

)  Testes de Hipóteses para a Média                                                                                                                                                        27

6)  Testes de Hipóteses para Proporções                                                                                                                                                     47
..............................................................................................................................................................................................

)  Teste para Distribuição Binomial                                                                                                                                                        53

8)  Testes de Hipóteses para a Variância                                                                                                                                                    57
)  P-Valor                                                                                                                                                                                 67
..............................................................................................................................................................................................

)   Teste Qui-Quadrado                                                                                                                                                                    72

11)   Outros Testes não Paramétricos                                                                                                                                                        88
)   Questões Comentadas - Conceitos Fundamentais - FGV                                                                                                                                  104
..............................................................................................................................................................................................

)   Questões Comentadas - Tipos de Erros - FGV                                                                                                                                          105

14)   Questões Comentadas - Testes para a Média - FGV                                                                                                                                     115
)   Questões Comentadas - Testes para Proporções - FGV                                                                                                                                  140
..............................................................................................................................................................................................

)   Questões Comentadas - Teste para a Distribuição Binomial - FGV                                                                                                                      147

17)   Questões Comentadas - Testes de Hipóteses para a Variância - FGV                                                                                                                    153
..............................................................................................................................................................................................

)   Questões Comentadas - P-Valor - FGV                                                                                                                                                 157

19)   Questões Comentadas - Teste Qui-Quadrado - FGV                                                                                                                                      165
)   Lista de Questões - Conceitos Fundamentais - FGV                                                                                                                                    177
..............................................................................................................................................................................................

)   Lista de Questões - Tipos de Erros - FGV                                                                                                                                            179

22)   Lista de Questões - Testes para a Média - FGV                                                                                                                                       184
)   Lista de Questões - Testes para Proporções - FGV                                                                                                                                    193
..............................................................................................................................................................................................

)   Lista de Questões - Teste para a Distribuição Binomial - FGV                                                                                                                        197

25)   Lista de Questões - Testes de Hipóteses para a Variância - FGV                                                                                                                      201
)   Lista de Questões - P-Valor - FGV                                                                                                                                                   203
..............................................................................................................................................................................................

)   Lista de Questões - Teste Qui-Quadrado - FGV                                                                                                                                        208


---

Olá, amigo(a)!

Chegamos à cereja do bolo da Estatística Inferencial! Os testes de hipóteses são muito queridos pelas bancas
porque reúnem o conhecimento de quase toda a Estatística Inferencial e ainda exigem atenção especial na
hora da conclusão.

Preparado(a)?!

                                              Luana Brandão

                                Doutora em Engenharia de Produção (UFF)

                                        Auditora Fiscal da SEFAZ-RJ

                            Se tiver alguma dúvida, entre em contato comigo!

             professoraluanabrandao@gmail.com

             @professoraluanabrandao

                                                        “A direção é mais importante do que a velocidade.”

                                                                                            Edson Marques


---

                                  TESTE DE HIPÓTESES
Nesta aula, vamos aprender a testar suposições (que chamamos de hipóteses), a respeito de um parâmetro
populacional. Por exemplo, vamos supor que alguém afirme que a média de uma determinada população
seja igual a 2. Para testar essa hipótese, vamos extrair uma amostra, calcular a sua estatística (no caso, a
média amostral) e com base nela decidir se você concorda ou não com a pessoa.

Mas para que serve isso? Essa dinâmica ocorre na prática quando uma empresa adquire um lote grande de
determinado produto de seu fornecedor. O fornecedor irá informar as especificações do produto, por
exemplo, que a quantidade em cada recipiente é de 2L, em média.

Para verificar isso, a empresa seleciona uma amostra e calcula a média amostral. Se o resultado estiver
próximo desse valor (por exemplo, 1,95L) a empresa irá concordar que o lote atende a tal especificação e
aceitar o lote. Se o resultado estiver muito distante desse valor (por exemplo, 1L), a empresa irá discordar
da hipótese de que há 2L, em média, em cada recipiente e rejeitar o lote.

Mas e se o resultado for de 1,9L? Ou 1,8L? Ou seja, qual é o limite que vamos utilizar? Isso será objeto do
nosso estudo!

Conceitos Fundamentais

No exemplo que acabamos de ver, a suposição foi “a média populacional é 𝜇 = 2”. Essa suposição é chamada
de hipótese nula (ou hipótese de nulidade), denotada por 𝑯𝒐 .

Porém, a média populacional pode não ser essa, assim chamamos de hipótese alternativa, indicada por 𝑯𝟏
ou 𝑯𝑨 , uma suposição de que a hipótese nula é falsa. Ou seja, as hipóteses são mutuamente excludentes.

A hipótese alternativa para esse exemplo pode ser “a média populacional é 𝜇 ≠ 2”.

Podemos representar essas hipóteses como:

Hipótese Nula 𝐻𝑜 : 𝜇 = 2

Hipótese Alternativa 𝐻1 (ou 𝐻𝐴 ): 𝜇 ≠ 2

Para testar essas hipóteses, primeiro consideramos a hipótese nula como verdadeira e construímos um
intervalo de confiança em torno do parâmetro 𝜇 = 2. Veremos como esse intervalo será construído adiante,
dependendo da situação, mas para entendermos o processo como um todo, por ora, vamos supor que o
intervalo com 1 − 𝛼 = 95% de confiança tenha sido (1,8; 2,2).
Então, esses serão os limites que utilizaremos para concordar ou não com a hipótese nula. Se a média da
amostra observada estiver fora desse intervalo (𝑋̅ = 1, por exemplo), iremos rejeitar a hipótese nula. Senão
(𝑋̅ = 1,95, por exemplo), iremos aceitá-la, ou melhor, não a rejeitar.


---

Por isso, a região entre os extremos do intervalo é chamada de Região de Não Rejeição (RNR) e a região
externa ao intervalo é chamada de Região Crítica (RC).

Pontue-se que o intervalo é construído em torno do parâmetro indicado na hipótese nula, isto é,
considerando essa hipótese como verdadeira.

Dessa forma, a probabilidade associada à Região de Não Rejeição é 𝟏 − 𝜶 e corresponde à probabilidade de
não rejeitar a hipótese nula, sendo ela verdadeira.

Já a probabilidade associada à Região Crítica é 𝜶, e corresponde à probabilidade de rejeitar a hipótese nula,
sendo ela verdadeira.

A probabilidade 𝜶 é chamada de nível de significância. Ilustramos essas regiões no gráfico abaixo, em que
LSUP representa o limite superior do intervalo e LINF representa o limite inferior do intervalo de confiança.

                                                          𝑅𝑁𝑅
                                                          1−𝛼
                                             𝑅𝐶                    𝑅𝐶
                                             𝛼⁄                    𝛼⁄
                                               2                     2
                                                   LINF   𝜇     LSUP
                                              ̅ < 𝑳𝑰𝑵𝑭 ou 𝑿
Ou seja, vamos rejeitar a hipótese inicial se 𝑿           ̅ > 𝑳𝑺𝑼𝑷 e não a rejeitar, caso contrário, isto é, se
𝑳𝑰𝑵𝑭 ≤ 𝑿̅ ≤ 𝑳𝑺𝑼𝑷 .

                          Resultado do Teste na Região Crítica (RC) → Rejeitar 𝑯𝟎

                 Resultado do Teste na Região de Não Rejeição (RNR) → Não Rejeitar 𝑯𝟎

Por que “não rejeição”, em vez de “aceitação”?

Porque a rejeição é a decisão forte. Afinal, considerando a hipótese nula como verdadeira, construímos um
intervalo que engloba 1 − 𝛼 = 95% dos possíveis resultados, isto é, quase todos os valores. Em outras
palavras, se de fato a média populacional for 𝜇 = 2, a probabilidade de obter um valor fora do intervalo é
de apenas 𝛼 = 5%, isto é, muito pequena.

Por isso, quando o resultado do teste é de rejeição, dizemos que o teste é significante, ou que gerou
evidência estatística.

Caso contrário, o teste não é significante (não gera evidência estatística). Neste caso, não é correto dizer
que aceitamos a hipótese nula, apenas que não a rejeitamos.


---

É possível que a média populacional seja, de fato, 𝜇 = 2 e a média amostral observada tenha sido 𝑋̅ = 1.
Sim! É possível, mas é improvável.

Outra forma de decidir se vamos aceitar ou rejeitar a hipótese nula é calculando a estatística da amostra
(para o nosso exemplo, a média amostral) e construir um intervalo de confiança para essa estatística. Em
seguida, devemos rejeitar a hipótese nula se o intervalo construído não contemplar o parâmetro indicado
na hipótese nula e não a rejeitar, caso contrário.

Supondo a mesma hipótese nula do exemplo anterior 𝐻𝑜 : 𝜇 = 2, vamos supor que tenhamos calculado uma
média amostral 𝑋̅ = 1,95. Vamos considerar que, de acordo com o tamanho da amostra e com o nível de
confiança desejado, o intervalo de confiança construído a partir da média amostral 𝑋̅ = 1,95 seja
(1,85; 2,05). Como o parâmetro indicado na hipótese 𝐻𝑜 : 𝜇 = 2 está contemplado nesse intervalo de
confiança, então não rejeitamos a hipótese nula.

Por outro lado, se tivéssemos calculado uma média amostral 𝑋̅ = 1 e um intervalo de confiança (0,9; 1,1),
nesse caso, o parâmetro indicado na hipótese 𝐻𝑜 : 𝜇 = 2, não estaria contemplado no intervalo e, por isso,
rejeitaríamos a hipótese nula.

(CESPE/2019 – TJ-AM) A respeito dos testes de hipóteses, julgue o próximo item.
A hipótese nula (Ho) e a hipótese alternativa (Ha) são mutuamente excludentes.
Comentário:
A hipótese alternativa é a hipótese formulada supondo a hipótese nula como falsa. Portanto, são
mutuamente excludentes.
Gabarito: Certo.


(FGV/2019 – DPE-RJ – Adaptada) A respeito da formulação, execução, decisão e critérios de avaliação de
testes de hipóteses, julgue a afirmativa a seguir.
Tanto na rejeição quanto na aceitação, o teste de hipóteses é uma ferramenta da inferência que gera
evidência estatística.
Comentário:
Dizemos que o teste gera evidência estatística, apenas quando rejeitamos a hipótese nula, ou seja, o teste
não gera evidência estatística na aceitação. Logo, a afirmativa está incorreta.
Resposta: Errado


---

(FGV/2017 – Prefeitura de Salvador/BA) Suponha que se deseja testar se um determinado candidato tem
50% das intenções de voto. Assim, foram realizadas pesquisas em cinco regiões (A, B, C, D e E) e seus
respectivos intervalos de confiança foram calculados.
Sendo a letra de cada alternativa representante de cada região com seu respectivo intervalo de confiança, a
única região em que se pode rejeitar a hipótese de que o candidato detém 50% dos votos é
a) [45; 55].
b) [49,9; 59,9].
c) [40; 50]
d) [44,9; 49,9]
e) [0; 100]
Comentários:
Para que a hipótese nula seja rejeitada, o parâmetro nela indicado não pode estar contemplado no intervalo
de confiança construído a partir dos resultados da amostra. Dentre as alternativas, a única que não
contempla o parâmetro de 50% é a alternativa D.
Gabarito: D

Agora, vamos voltar ao exemplo do fabricante. Se estamos testando a quantidade média de produto em
cada recipiente, não temos por que rejeitar o lote se encontrarmos uma quantidade maior do que a
estipulada pelo fabricante. Então, nessa situação iremos rejeitar a hipótese nula (e o lote) apenas se a
quantidade encontrada for inferior a um limite mínimo.

Assim, as hipóteses para esse exemplo seriam:

Hipótese Nula 𝐻𝑜 : 𝜇 = 2

Hipótese Alternativa 𝐻1 (ou 𝐻𝐴 ): 𝜇 < 2

Nesse caso, toda a região crítica estará à esquerda do parâmetro 𝜇 = 2, como representado a seguir:

                                                    𝑅𝑁𝑅
                                                    1−𝛼
                                           𝑅𝐶
                                            𝛼
                                             LINF    𝜇


                                                                  ̅ < 𝑳𝑰𝑵𝑭 e não a rejeitar, caso contrário,
Assim, vamos rejeitar a hipótese nula caso o valor observado seja 𝑿
            ̅ ≥ 𝑳𝑰𝑵𝑭.
ou seja, se 𝑿


---

Como a região crítica está totalmente concentrada à esquerda, esse teste é chamado unilateral (ou
unicaudal ou monocaudal) à esquerda, enquanto o teste que vimos anteriormente é chamado bilateral ou
bicaudal.
Pontue-se que a hipótese nula desse mesmo teste pode ser descrita como 𝜇 ≥ 2:

Hipótese Nula 𝐻𝑜 : 𝜇 ≥ 2

Hipótese Alternativa 𝐻1 (ou 𝐻𝐴 ): 𝜇 < 2

Há também o teste unilateral (ou unicaudal ou monocaudal) à direita, em que a região crítica está
totalmente concentrada à direita, como representado a seguir:

                                                 𝑅𝑁𝑅
                                                 1−𝛼        𝑅𝐶
                                                             𝛼
                                                       𝜇   LSUP

Esse teste é utilizado, por exemplo, quando precisamos colocar uma peça dentro de uma outra. Se a peça
for menor do que a média estipulada (digamos, 𝜇 = 2 cm), não haverá problema, pois ela caberá dentro da
outra; porém, se ela for maior do que determinado limite, não será possível trabalhar com ela.
Nessa situação, o teste terá as seguintes hipóteses:

Hipótese Nula 𝐻𝑜 : 𝜇 = 2 (ou 𝜇 ≤ 2)

Hipótese Alternativa 𝐻1 (ou 𝐻𝐴 ): 𝜇 > 2

                                                                       ̅ > 𝑳𝑺𝑼𝑷 e não a rejeitar, caso
Nesse caso, vamos rejeitar a hipótese nula caso o valor observado seja 𝑿
                       ̅ ≤ 𝑳𝑺𝑼𝑷.
contrário, ou seja, se 𝑿

Nos testes unilaterais, as hipóteses alternativas podem ser chamadas de direcionais (pois supõem que o
parâmetro seja maior ou menor que determinado valor) e, nos bilaterais, de não direcionais (pois supõem
que o parâmetro é diferente de determinado valor).


---

                Teste bilateral (ou não direcional): Região Crítica dividida nos 2 extremos

                                        Hipótese Nula: 𝐻0 : 𝜃 = 𝜃0

                                  Hipótese Alternativa: 𝐻1 ou 𝐻𝐴 : 𝜃 ≠ 𝜃0

             Teste unilateral (ou direcional) à esquerda: Região Crítica somente à esquerda

                                        Hipótese Nula: 𝐻0 : 𝜃 = 𝜃0

                                  Hipótese Alternativa: 𝐻1 ou 𝐻𝐴 : 𝜃 < 𝜃0

                Teste unilateral (ou direcional) à direita: Região Crítica somente à direita

                                        Hipótese Nula: 𝐻0 : 𝜃 = 𝜃0

                                  Hipótese Alternativa: 𝐻1 ou 𝐻𝐴 : 𝜃 > 𝜃0

Podemos, ainda, classificar as hipóteses em simples ou compostas.

As hipóteses simples são aquelas que especificam o parâmetro da distribuição, com sinal de igualdade,
como 𝜇 = 2, por exemplo; enquanto as hipóteses compostas são aquelas que trazem alguma informação a
respeito da distribuição, porém sem especificar o parâmetro, isto é, sem o sinal de igualdade, como 𝜇 > 2
ou 𝜇 ≠ 2, por exemplo.

No quadro acima, as hipóteses nulas são simples e as hipóteses alternativas são compostas. Embora essa
situação seja bastante comum, ela não é obrigatória. Inclusive, já vimos que as hipóteses nulas unilaterais
podem ser descritas como 𝜇 ≤ 2 (quando a alternativa é 𝜇 > 2) ou 𝜇 ≥ 2 (quando a alternativa é 𝜇 < 2).
Nesses exemplos, ambas as hipóteses são compostas.

Ademais, existem casos em que as hipóteses alternativas são simples, por exemplo, 𝐻1 : 𝜇 = 1,5. Esse tipo
de situação ocorre quando há apenas duas possibilidades para o parâmetro, 𝜇 = 2 ou 𝜇 = 1,5, por exemplo.
Sendo assim, podemos formular a hipótese nula como 𝐻0 : 𝜇 = 2 e a hipótese alternativa 𝐻1 : 𝜇 = 1,5, em
que ambas são hipóteses simples.


---

(CESPE/2019 – TJ/AM) A respeito dos testes de hipóteses, julgue o próximo item.
A hipótese alternativa (Ha) é direcional em um teste unicaudal.
Comentário:
A hipótese alternativa pode ser classificada como direcional em testes unilaterais (ou unicaudais) e como
não direcional em testes bilaterais (também chamados de bicaudais).
Gabarito: Certo.


(FGV/2019 – DPE-RJ – Adaptada) A respeito da formulação, execução, decisão e critérios de avaliação de
testes de hipóteses, julgue a afirmativa a seguir.
A região crítica de um teste é limitada superiormente ou inferiormente ou em ambos os sentidos.
Comentário:
A Região Crítica (associada à rejeição) é limitada superiormente (isto é, apresenta um limite superior)
quando o teste é unilateral à esquerda. O limite superior da região crítica, nesse caso, é igual ao limite
inferior da Região de Não Rejeição.

                                             𝑅𝐶
                                                𝛼

Para testes unilaterais à direita, a região crítica é limitada inferiormente (isto é, apresenta limite inferior).
O limite inferior da região crítica, nesse caso, é igual ao limite superior da Região de Não Rejeição.

                                                           𝑅𝐶
                                                            𝛼

Já nos testes bilaterais, não há limite inferior para a região crítica à esquerda e nem limite superior para a
região crítica à direita. Por isso, não podemos dizer que a região crítica é limitada em ambos os sentidos.

                                           𝑅𝐶              𝑅𝐶
                                           𝛼⁄              𝛼⁄
                                             2               2

Resposta: Errado.


---

        Algumas questões não indicam claramente a hipótese nula e a alternativa, sendo
        necessário deduzi-las a partir do texto. Nesses casos, precisamos identificar a hipótese que
        se deseja comprovar e considerá-la como hipótese alternativa. Dessa forma, iremos
        concordar com essa hipótese somente se rejeitarmos a hipótese nula, ou seja, se o
        resultado do teste for estatisticamente significativo.

        Por exemplo, vamos considerar o seguinte trecho do enunciado de uma questão FGV/2014,
        referente a um teste da renda média dos cidadãos atendidos Defensoria Pública: "Deseja-
        se demonstrar, cabalmente, que, em média, os beneficiários ganham menos do que R$
        1.000 por mês."

        Se o objetivo é demonstrar cabalmente (comprovar) que a renda média dos beneficiários
        é menor do que R$ 1.000 por mês, essa deve ser a hipótese alternativa; e a hipótese nula
        deve ser o contrário, isto é, de que a renda média dos beneficiários é maior ou igual a R$
        1.000 por mês:

                                              𝐻𝑜 : 𝜇 ≥ 1000

                                              𝐻𝐴 : 𝜇 < 1000

(FGV/2014 – DPE/RJ) A Defensoria Pública tem como prioridade garantir o acesso à assistência jurídica a
todos aqueles que dela necessitam, mesmo que, por natural imprecisão de critérios, venha a prestar
eventual e involuntariamente serviços a indivíduos capazes de pagar. Para testar se um grupo de pessoas
merece receber assistência é fixada uma linha de corte igual a R$ 1.448,00, ou seja, dois salários mínimos
para a renda média (Rm). Considerando a prioridade da inclusão dos que de fato necessitam, as hipóteses
do teste devem ser:.
a) Ho: Rm = 1.448 contra Ha: Rm  1.448;
b) Ho: Rm  1.448 contra Ha: Rm < 1.448;
c) Ho: Rm < 1.448 contra Ha: Rm  1.448;
d) Ho: Rm  1.448 contra Ha: Rm > 1.448;
e) Ho: Rm  1.448 contra Ha: Rm = 1.448;


---

Comentário:
Nessa questão, precisamos interpretar o texto para encontrar as hipóteses nula e alternativa. O enunciado
informa que fará um teste para verificar se um grupo de pessoas merece receber assistência gratuita ou não,
considerando a renda média de referência de R$ 1.448,00.
O enunciado também informa que a prioridade é garantir a assistência a todos que precisam, ou seja, àqueles
que apresentam baixa renda média, mesmo que isso implique em prestar o serviço gratuito a alguns
indivíduos capazes de pagar, por erro.
Isso significa que o teste deve indicar que o serviço não deve ser prestado apenas em casos excepcionais,
em que a renda for realmente superior ao valor de referência. Em outras palavras, a renda maior que a
referência deve constar como hipótese alternativa, pois só iremos concordar com ela se o teste for
estatisticamente significativo.
Portanto, a hipótese nula é de que a renda é menor ou igual ao valor de referência e a hipótese alternativa
é de que a renda é maior que o valor de referência:
                                            𝐻0 : 𝑅𝑚 ≤ 1.448
                                            𝐻𝑎 : 𝑅𝑚 > 1.448
Gabarito: D.


---

                                      TIPOS DE ERROS
O nível de significância 𝜶 corresponde à probabilidade de rejeitarmos a hipótese nula, sendo ela verdadeira.

Mas essa situação não é desejável, certo? No mundo ideal, gostaríamos de aceitar a hipótese nula quando
ela for verdadeira e rejeitá-la quando ela for falsa.

Realmente, essa situação de rejeitar a hipótese nula quando ela é verdadeira é um erro, chamado de erro
tipo I. Essa situação pode ser chamada de falso positivo.

Normalmente, o nível de significância é pré-definido, mas ele pode diminuir quando o tamanho da amostra
aumenta, sem alterar os limites da Região de Não Rejeição. Também é possível diminuir o nível de
significância, sem alterar o tamanho da amostra, aumentando a Região de Não Rejeição.

Por outro lado, existe a possibilidade de não rejeitar a hipótese nula quando ela é falsa, que também é um
erro, chamado de erro tipo II, que pode ser chamada de falso negativo.

A probabilidade desse erro é indicada como 𝜷.

                    Erro tipo I (probabilidade 𝛼): rejeitar 𝐻0 dado que 𝐻0 é verdadeira

                    Erro tipo II (probabilidade 𝛽): não rejeitar 𝐻0 dado que 𝐻0 é falsa

Os erros correspondem aos respectivos eventos, ou seja, o erro tipo I é o evento de rejeitar a hipótese nula
quando esta é verdadeira e o erro tipo II é o evento de não rejeitar a hipótese nula quando esta é falsa. As
probabilidades desses eventos são, respectivamente, 𝛼 (isto é, o nível de significância) e 𝛽.

Nós vamos conviver com esses erros, ok? Sempre que o resultado estiver na Região de Não Rejeição, vamos
decidir não rejeitar a hipótese nula e sempre que o resultado estiver na Região Crítica, vamos rejeitar a
hipótese nula. Seguiremos essa regra, mesmo sabendo que existe um risco (𝛽 e 𝛼, respectivamente), de
estarmos tomando a decisão errada.

Nos gráficos que construímos para os testes de hipóteses, que têm como premissa a hipótese nula, podemos
identificar a região de rejeição, cuja probabilidade é α.


---

Considerando o exemplo em que a hipótese nula é 𝐻0 : 𝜇 = 2 e que vamos rejeitá-la se a média amostral
observada for 𝑋̅ < 1,9 (e não a rejeitar, caso contrário), a probabilidade do erro tipo I corresponde à região
à esquerda do limite crítico L = 1,9:

                                                        𝑅𝑁𝑅
                                                        1−𝛼
                                             𝑅𝐶
                                             𝛼
                                                          2
                                                  1,9

E onde fica a região de 𝛽? Ela não existe!

O erro tipo II é a probabilidade de aceitar a hipótese nula, sendo ela falsa. Ou seja, para visualizá-lo,
precisamos do gráfico construído com o verdadeiro parâmetro populacional, que é distinto do parâmetro
indicado na hipótese nula, já que estamos considerando que essa hipótese é falsa.

A distribuição verdadeira segue a mesma distribuição da hipótese nula, porém com um parâmetro
diferente. Apenas com base nessa distribuição verdadeira podemos visualizar a região do erro tipo II.

                                                                                              ̅ < 𝟏, 𝟗 e
Para ilustrar, vamos voltar ao nosso exemplo, em que rejeitamos a hipótese nula 𝐻0 : 𝜇 = 2 se 𝑿
                      ̅
não a rejeitamos se 𝑿 ≥ 𝟏, 𝟗. Vamos supor que a verdadeira média populacional seja 𝜇 = 1,5. (Essa
informação não costuma estar disponível na realidade; mas, algumas questões de prova a fornecem).

A região indicada por 𝛽 corresponde à probabilidade de obter um resultado na Região de Não Rejeição, no
caso 𝑋̅ ≥ 1,9, considerando que a média verdadeira é 𝜇 = 1,5:

                                                                    𝛽
                                                        𝜇 = 1,5   L: 1,9

Para que o valor de 𝛽 possa ser calculado, a questão também pode fornecer duas possibilidades para o
parâmetro, por exemplo, 𝐻0 : 𝜇 = 2 e 𝐻1 : 𝜇 = 1,5.


---

Nessa situação, embora não conheçamos o verdadeiro parâmetro, sabemos que, se a hipótese nula for falsa,
então a distribuição terá o parâmetro indicado na hipótese alternativa (𝜇 = 1,5). Assim, podemos calcular
a probabilidade do erro tipo II 𝛽, com base na distribuição com o parâmetro indicado na hipótese alternativa.

        Os erros não são complementares: 𝜶 + 𝜷 = 𝟏

        Eles pressupõem distribuições distintas e por isso pertencem a Espaços Amostrais
        diferentes. A rigor, a sua soma pode até ser maior que 1!

Os complementares dos erros correspondem a decisões corretas.

O complementar do erro tipo I corresponde à não rejeição da hipótese nula quando ela é verdadeira e tem
probabilidade igual a 𝟏 − 𝜶, chamada nível de confiança.

O complementar do erro tipo II corresponde à rejeição da hipótese nula quando ela é falsa e tem
probabilidade igual a 𝟏 − 𝜷, chamada poder do teste.


---

        Quando as probabilidades dos erros tipo I e II são mínimas (mais precisamente, quando a
        sua a combinação linear 𝑎. 𝛼 + 𝑏. 𝛽 é mínima, sendo 𝑎 e 𝑏 são constantes positivas), temos
        o chamado teste ótimo.

        Para esse teste, utilizamos a razão de verossimilhanças (RV):
                                                          𝑝0
                                                   𝑅𝑉 =
                                                          𝑝1


        Em que 𝑝 é a função de verossimilhança, ou seja, o produto das funções de probabilidade
        𝑓, aplicadas para cada resultado da amostra:

                    𝑝 = 𝐿(𝜃, 𝑥𝑖 ) = ∏𝑛𝑖=1 𝑓(𝜃, 𝑥𝑖 ) = 𝑓(𝜃, 𝑥1 ) × 𝑓(𝜃, 𝑥2 ) × … × 𝑓(𝜃, 𝑥𝑛 )

        Enquanto 𝑝0 considera o parâmetro 𝜃0 indicado na hipótese nula, 𝑝1 considera o
        parâmetro 𝜃1 indicado na hipótese alternativa.

        O teste irá rejeitar a hipótese nula quando a razão de verossimilhanças for menor do que
        uma constante 𝑘; não rejeitar a hipótese nula quando a razão for maior do que a
        constante; e será inconclusivo quando a razão for igual à constante:
              𝑝0                           𝑝0                           𝑝0
                < 𝑘 → 𝑟𝑒𝑗𝑒𝑖𝑡𝑎𝑟 𝐻0 ,          > 𝑘 → 𝑛ã𝑜 𝑟𝑒𝑗𝑒𝑖𝑡𝑎𝑟 𝐻0 ,         = 𝑘 → 𝑖𝑛𝑐𝑜𝑛𝑐𝑙𝑢𝑠𝑖𝑣𝑜
              𝑝1                           𝑝1                           𝑝1


        De modo geral, um teste ótimo irá rejeitar a hipótese nula quando a razão for pequena e
        não irá rejeitá-la quando a razão for grande.

(FCC/2019 – Secretaria de Manaus/AM) De um estudo, obtiveram-se informações de uma amostra aleatória
extraída de uma população. Em um teste de hipóteses, foram formuladas as hipóteses Hₒ (hipótese nula) e
Hₗ (hipótese alternativa) para analisar um parâmetro da população com base nos dados da amostra. O nível
de significância deste teste corresponde à probabilidade de
a) não rejeitar Hₒ, dado que Hₒ é falsa.
b) rejeitar Hₒ, dado que Hₒ é falsa
c) rejeitar Hₒ, dado que Hₒ é verdadeira


---

d) não rejeitar Hₒ, independente de Hₒ ser falsa ou verdadeira
e) rejeitar Hₒ, independente de Hₒ ser falsa ou verdadeira
Comentários:
O nível de significância (𝛼), ou seja, a probabilidade do erro tipo I, corresponde à probabilidade de rejeitar a
hipótese nula, sendo ela verdadeira.
Gabarito: C


(FGV/2013 – TJ-AM) A respeito do erro do tipo I, assinale a afirmativa correta.
a) é a probabilidade de se rejeitar a hipótese nula quando a mesma é verdadeira.
b) é a probabilidade de se rejeitar a hipótese nula quando a mesma é falsa.
c) é o nível de significância de um teste de hipóteses.
d) é o evento de rejeitar a hipótese nula quando esta é verdadeira.
e) é o evento de não rejeitar a hipótese nula quando esta é falsa.
Comentários:
O erro tipo I é o evento de rejeitar a hipótese nula quando ela é verdadeira, como indicado na alternativa D,
que é diferente da sua probabilidade.
As alternativas A e C confundem o evento erro tipo I com a sua probabilidade. Tanto a probabilidade de se
rejeitar a hipótese nula, quanto o nível de significância 𝛼 corresponde à probabilidade do erro tipo I.
A alternativa B define o poder do teste, que é a probabilidade de se rejeitar a hipótese nula, sendo ela falsa,
igual a 1 − 𝛽.
Já a alternativa E define o erro tipo II, que é o evento de não rejeitar a hipótese nula, sendo ela falsa.
Gabarito: D


(2018 – HCPA/RS) Considere as afirmações abaixo em relação ao erro em pesquisa.
I - O erro tipo I acontece quando a hipótese nula é rejeitada incorretamente.
II - Alfa define a probabilidade aceitável de falsos-positivos em um teste de hipótese.
III - O erro tipo II é igual a 1 menos alfa.
IV - O poder do estudo é igual a 1 menos beta.
Quais estão corretas?
a) Apenas I
b) Apenas IV
c) Apenas I e II
d) Apenas I, II e IV
e) Apenas II, III e IV
Comentários:


---

Em relação à afirmação I, o erro tipo I corresponde à rejeição da hipótese nula sendo ela verdadeira.
Portanto, a afirmação I está correta.
Em relação à afirmação II, 𝛼 representa a probabilidade do erro tipo I, definida como aceitável. Considerando
que um resultado positivo do teste é a rejeição da hipótese nula, 𝛼 representa “falsos-positivos”. Portanto,
a afirmação II está correta.
Em relação à afirmação III, a probabilidade do erro tipo II (𝛽) não é complementar de 𝛼. Portanto, a
afirmação III está incorreta.
Em relação à afirmação IV, o poder do teste é dado por 1 − 𝛽, portanto a afirmação IV está correta.
Gabarito: D

Função Potência

A função potência é a função que representa o poder do teste (1 − 𝛽), o qual corresponde à probabilidade
de rejeitar a hipótese nula, sendo ela falsa. Ela é descrita em função do parâmetro verdadeiro 𝜇1 , podendo
ser denotada por 𝜋:

                                                  𝜋(𝜇1 )

Quanto maior a diferença entre o parâmetro descrito na hipótese nula 𝜇𝑜 e o parâmetro verdadeiro 𝜇1 ,
maior será o poder do teste.

Para visualizar isso, vamos considerar o mesmo exemplo em que a hipótese nula é 𝝁𝒐 = 𝟐, a qual será
rejeitada se a média amostral observada for 𝑋̅ < 1,9. A seguir, temos duas curvas, a curva laranja supõe que
o parâmetro verdadeiro seja 𝝁𝟏 = 𝟏, 𝟓, como vimos antes, e a curva verde supõe que o parâmetro
verdadeiro seja 𝝁𝟏 = 𝟏, 𝟑.

                                                            𝛽

                                                           L: 1,9

Observe que a região correspondente a 𝛽 (𝑋̅ ≥ 1,9) relativa à curva verde é muito menor do que em relação
à curva laranja. Consequentemente, o poder do teste 1 − 𝛽 é muito maior se o parâmetro verdadeiro for
𝜇1 = 1,3 do que se for 𝜇1 = 1,5.


---

Nos testes unilaterais à esquerda, a hipótese alternativa indica um parâmetro menor do que o parâmetro
da hipótese nula (como no exemplo que acabamos de ver, 𝐻𝑎 : 𝜇 < 2). Nesse tipo de situação, quanto menor
for o verdadeiro parâmetro, maior o poder do teste. Assim, a função potência é estritamente decrescente,
isto é, ela apenas decresce:


                                            Teste à Esquerda


                                                   𝜋

                                                          𝜇1


Nos testes unilaterais à direita, a hipótese alternativa indica um parâmetro maior do que o parâmetro da
hipótese nula (por exemplo, 𝐻𝑎 : 𝜇 > 2). Nesse tipo de situação, quanto maior for o verdadeiro parâmetro,
maior o poder do teste. Assim, a função potência é estritamente crescente, isto é, ela apenas cresce:

                                             Teste à Direita


                                                  𝜋

                                                          𝜇1


Por fim, no teste bilateral, o parâmetro verdadeiro pode ser menor ou maior do que o parâmetro indicado
na hipótese nula (por exemplo, 𝐻𝑎 : 𝜇 ≠ 2). Nesses casos, se o parâmetro verdadeiro for inferior, então
quanto menor o verdadeiro parâmetro, maior o poder do teste; e se o parâmetro verdadeiro for superior,
então quanto maior o verdadeiro parâmetro, maior o poder do teste. Logo, a função potência é decrescente
para 𝜇1 < 𝜇𝑜 e crescente para 𝜇1 > 𝜇𝑜 , como ilustrado abaixo:


                                              Teste Bilateral

                                                   𝜋

                                                                    𝜇1


Portanto, em testes bilaterais, a função potência não é estritamente monótona, isto é, ela não apresenta
um único sentido (crescente ou decrescente).


---

Além da diferença entre os parâmetros, o poder do teste também é afetado por outros 2 fatores:

    o Tamanho da amostra 𝒏: quanto maior o tamanho da amostra, maior o poder do teste;
    o Nível de significância 𝜶: quanto maior o nível de significância, maior o poder do teste.

O aumento de cada um desses dois fatores diminui a região de não rejeição. Assim, a probabilidade de não
rejeitar a hipótese nula sendo ela falsa (𝛽) se torna menor e, consequentemente, o poder do teste (1 − 𝛽)
se torna maior.

Para o nosso exemplo, em que a hipótese alternativa é 𝜇 < 2, o aumento do tamanho da amostra 𝑛 e/ou do
nível de significância 𝛼 permitiriam rejeitar a hipótese nula para 𝑋̅ < 1,95, por exemplo, em vez de 𝑋̅ < 1,9.
Observe na figura abaixo como essa mudança reduz a região associada a 𝛽 e, consequentemente, aumenta
o poder do teste 1 − 𝛽.

                                                              𝛽
                                                         1,9 1,95

No exemplo acima, o poder do teste aumentou mesmo sem alterarmos o parâmetro verdadeiro 𝜇1 . Ou seja,
o poder do novo teste é maior para todos os valores de 𝝁𝟏 . Neste caso, dizemos que o teste é mais poderoso.

A figura a seguir1 representa duas funções de poder 𝜋(𝜇1 ) de um teste bilateral, em que o parâmetro da
hipótese nula é 𝜇 = 60.
                            %

1
   Figura obtida na apresentação de Estatística Aplicada II da Prof. Lilian M. Lima Cunha, disponível no site
https://edisciplinas.usp.br/pluginfile.php/1928095/mod_resource/content/0/aula8-2016.pdf


---

A curva azul representa a função para uma amostra de tamanho n = 25 e a curva vermelha, para uma
amostra de tamanho n = 100.

Podemos verificar que o poder do teste para n = 100 é maior do que para n = 25 para qualquer valor do
parâmetro verdadeiro 𝜇1 .

Assim, dizemos que o teste para n = 100 é mais poderoso do que para n = 25.

Na figura anterior, também podemos observar que ambas as funções assumem o menor valor (ambas a 5%)
para 𝜇1 = 60, isto é, quando a hipótese nula é verdadeira. Esse valor corresponde ao nível de significância
𝛼, também chamado de tamanho do teste.

Já, o teste uniformemente mais poderoso (UMP) é aquele que maximiza o poder do teste (minimiza 𝛽) para
testar determinada hipótese nula 𝐻𝑜 : 𝜃 ∈ 𝛩𝑜 frente à determinada hipótese alternativa 𝐻1 : 𝜃 ∈ 𝛩1,
considerando determinado nível de significância 𝛼 (ou tamanho 𝛼).

O teste UMP atende às seguintes condições:

      •    a probabilidade de rejeitar a hipótese nula, quando ela é falsa, é maior do que a de qualquer outro
           teste, com o mesmo nível de significância 𝛼.
           Sendo 𝑌 ∗ o teste UMP e 𝑌 qualquer outro teste com o mesmo nível de significância, temos:
                                             𝜋𝑌 ∗ (𝜃) ≥ 𝜋𝑌 (𝜃),    ∀ 𝜃 ∈ 𝛩1

      •    a probabilidade de rejeitar a hipótese nula, quando ela é verdadeira, é, no máximo2, igual a 𝛼:
                                                   sup𝜃∈𝛩𝑜 𝜋𝑌 ∗ (𝜃) = 𝛼

Os testes UMP só existem em situações especiais, por exemplo, para distribuições da família exponencial.

                                                   Função potência

            Função do poder do teste (1 − 𝛽), que varia com o parâmetro verdadeiro

            O poder do teste aumenta com o aumento dos seguintes fatores:

            •   Diferença entre o parâmetro verdadeiro e o parâmetro da hipótese nula;
            •   Tamanho amostral 𝑛;
            •   Nível de significância 𝛼 (ou tamanho do teste).

2
    O termo “sup” representa supremo, sendo definido como o menor limite superior de um conjunto de dados.


---

(CESPE/2019 – TJ-AM) A respeito dos testes de hipóteses, julgue o próximo item.
O poder de um teste estatístico varia conforme o tamanho amostral.
Comentários:
O poder do teste, que representa a probabilidade de rejeitar a hipótese nula, quando ela é falsa, dado por
1 − 𝛽, aumenta conforme o tamanho da amostra aumenta, conforme o nível de significância 𝜶 aumenta,
e conforme a diferença entre o valor do parâmetro observado 𝜃 e o valor do parâmetro para a hipótese nula
𝜃0 aumenta.
Portanto, a afirmativa está correta.
Gabarito: Certa


(FGV/2019 – DPE-RJ – Adaptada) A respeito da formulação, execução, decisão e critérios de avaliação de
testes de hipóteses, julgue as afirmativas a seguir:
I – Em testes bilaterais, envolvendo a distribuição normal, a função potência é estritamente monótona.
II – Um teste é uniformemente mais poderoso para dado nível de significância se esse nível minimiza a
probabilidade do erro do Tipo II para valores compatíveis com Ho.
Comentários:
Em relação à primeira afirmativa, a função potência para testes bilaterais decresce para valores menores
que a média e cresce para valores maiores que a média.
Portanto, a função não é estritamente monótona e a afirmativa está incorreta.
Em relação à segunda afirmativa, o teste é considerando uniformemente mais poderoso, para determinado
nível de significância (𝛼), quando maximizar o poder do teste (ou minimizar o erro tipo II) para testar a
hipótese nula frente à hipótese alternativa.
Logo, o item II está correto.
Resposta: Item I errado; Item II certo.


(FGV/2022 – PC/AM) Em relação ao poder de um teste de hipóteses, NÃO é possível afirmar que
a) é definido como a probabilidade de se rejeitar a hipótese nula, quando essa é falsa.
b) é igual à unidade deduzida da probabilidade de erro do tipo II.
c) quanto maior o tamanho da amostra, maior o poder do teste de hipóteses.
d) é afetado pelo verdadeiro valor do parâmetro que é testado.
e) independe do nível de significância fixado pelo pesquisador.


---

Comentários:
A questão pede a alternativa INCORRETA a respeito do poder do teste.
Em relação à alternativa A, o poder do teste corresponde à probabilidade de rejeitar a hipótese nula, sendo
ela falsa. Logo, a alternativa A está correta.
Em relação à alternativa B, o poder do teste é o complementar da probabilidade do erro tipo II. Ou seja,
sendo 𝛽 a probabilidade do erro tipo II, o poder do teste é 1 − 𝛽. Logo, a alternativa B está correta.
Em relação à alternativa C, quanto maior o tamanho da amostra (mantendo as demais características
constantes), maior o poder do teste, de fato. Afinal, o poder do teste corresponde a uma decisão correta e
quanto maior o tamanho da amostra, mais precisa é a estimativa e, consequentemente, maior a
probabilidade de tomar uma decisão correta. Logo, a alternativa C está correta.
Em relação à alternativa D, a função do poder do teste (chamada função potência) é dependente do valor
verdadeiro do parâmetro: quanto maior a diferença entre o parâmetro verdadeiro e o parâmetro indicado
na hipótese nula, maior o poder do teste. Logo, a alternativa D está correta.
Em relação à alternativa E, o nível de significância também influencia o poder do teste - quanto maior o nível
de significância, maior o poder do teste. Afinal, o nível de significância está associado à região crítica e,
consequentemente, à probabilidade de rejeição da hipótese nula. Logo, a alternativa E está incorreta.
Gabarito: E


---

  TESTES DE HIPÓTESES PARA DISTRIBUIÇÕES UNIFORMES
As distribuições contínuas uniformes são aquelas que assumem um valor constante em determinado
intervalo (𝑎, 𝑏) e 0 para todos os demais valores, como ilustrado a seguir:

                                      k

                                              a                   b

Como a área sob toda função representa a probabilidade de todo o Espaço Amostral (U) com probabilidade
P(U) = 100% = 1, temos:

                                          Á𝑟𝑒𝑎 = 𝐵𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎 = 1

                                                  (𝑏 − 𝑎 ) × 𝑘 = 1

                                                            1
                                                      𝑘=
                                                           𝑏−𝑎

Ou seja, os limites do intervalo são os únicos parâmetros da distribuição.

Assim, os testes de hipóteses com esse tipo de distribuição consistem em aceitar a hipótese nula relativa aos
parâmetros da distribuição (𝑎, 𝑏), caso o valor observado esteja em determinado intervalo e rejeitar a
hipótese nula, caso contrário.

Por exemplo, vamos supor que a hipótese nula seja de que uma distribuição uniforme esteja definida no
intervalo entre a = 1 e b = 5, a qual será rejeitada se o valor observado for 𝑋 > 4.

Para calcular o nível de significância 𝜶 desse teste, isto é, a probabilidade de rejeitar a hipótese nula sendo
ela verdadeira, precisamos da probabilidade 𝑃(𝑋 > 4), considerando a distribuição uniforme no intervalo
(1,5) (parâmetros definidos na hipótese nula).

A probabilidade associada a um intervalo genérico (m, o) também pode ser calculada utilizando-se a fórmula
da área:

                                                      𝑃(𝑚 < 𝑋 < 𝑜)


                                          k


                                                  a    m      o       b


---

                                    𝑃(𝑚 < 𝑋 < 𝑜) = 𝐵𝑎𝑠𝑒 × 𝑎𝑙𝑡𝑢𝑟𝑎

                                                                          1
                           𝑃 (𝑚 < 𝑋 < 𝑜) = (𝑜 − 𝑚) × 𝑘 = (𝑜 − 𝑚) ×
                                                                         𝑏−𝑎
                                                            𝑜−𝑚
                                         𝑃 (𝑚 < 𝑋 < 𝑜 ) =
                                                            𝑏−𝑎

Assim, a probabilidade de cometer o erro tipo I corresponde à probabilidade de X pertencer ao intervalo
𝑃 (4 < 𝑋 < 5), para os parâmetros a = 1 e b = 5, dada por:

                                                            5−4 1
                                     𝛼 = 𝑃(4 < 𝑋 < 5) =        =
                                                            5−1 4

Também podemos calcular a probabilidade do erro tipo II (𝛽), para uma distribuição uniforme. Para isso,
consideramos o seu verdadeiro intervalo (ou o intervalo indicado na hipótese alternativa).

Vamos supor que o verdadeiro intervalo da distribuição uniforme para esse mesmo exemplo seja (2, 6).
Sabendo que não vamos rejeitar a hipótese nula se 𝑋 ≤ 4, então 𝛽 corresponde à probabilidade de obter
um resultado no intervalo 𝑃(𝑋 ≤ 4), considerando a distribuição uniforme no intervalo (2, 6):

                                                         4−2 2 1
                                  𝛽 = 𝑃(2 < 𝑋 ≤ 4) =        = =
                                                         6−2 4 2

(FCC/2019 – Secretaria de Manaus/AM) De uma variável aleatória X uniformemente distribuída no intervalo
(0, θ) é extraída uma única observação com vista a testar a hipótese H₀: θ=10 (hipótese nula) contra H₁: θ>10
(hipótese alternativa).
O critério de decisão consiste em rejeitar H₀ caso o valor observado exceder 8. A probabilidade de ser
cometido um erro tipo II, admitindo que o verdadeiro valor de θ seja 12, é de
a) 2/3
b) 4/5
c) 1/2
d) 3/4
e) 5/6
Comentários:


---

A questão forneceu os parâmetros da verdadeira distribuição, para que seja possível calcular a probabilidade
do erro tipo II 𝛽, isto é, a probabilidade de não rejeitar a hipótese nula, sendo ela falsa.
O enunciado informa que a hipótese nula será rejeitada se o valor observado exceder 8. Logo, a hipótese
nula não será rejeitada se o valor observado não exceder 8, ou seja, 𝑋 ≤ 8.
Considerando que a verdadeira distribuição corresponde ao intervalo (0,12), então 𝑃(𝑋 ≤ 8), que é igual à
probabilidade de 0 ≤ 𝑥 ≤ 8, é dada por:
                                                              8−0     8   2
                          𝛽 = 𝑃(𝑋 ≤ 8) = 𝑃(0 ≤ 𝑥 ≤ 8) =             =   =
                                                              12 − 0 12 3
Gabarito: A.


---

                    TESTES DE HIPÓTESES PARA A MÉDIA
Nessa seção, veremos os testes de hipóteses para a média de populações, que podem ter a variância
conhecida ou não. Essas duas situações estão associadas a distribuições distintas de probabilidade: no
primeiro caso, utilizamos a distribuição normal e, no segundo, a distribuição de t-Student.

Teste para Média com Variância Conhecida

Quando a população tiver variância conhecida 𝝈𝟐 e distribuição normal, a média amostral 𝑿  ̅ também terá
distribuição normal. Se a população apresentar outra distribuição, mas o tamanho da amostra for
suficientemente grande, também podemos aproximar a distribuição da média amostral a uma normal
(Teorema Central do Limite). Assim, utilizamos a seguinte transformação entre a normal e a normal padrão:

                              𝑣𝑎𝑙𝑜𝑟 𝑛𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 − 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜
                         𝑧=
                                      𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜

Os testes que levam em consideração uma distribuição normal (ainda que seja por aproximação) são
chamados de Testes Z.

Para calcular os limites das regiões RC e RNR, partimos de um nível de confiança 1 − 𝛼 fornecido (ou do nível
de significância 𝛼) e do tipo de teste (bilateral, unilateral à esquerda ou unilateral à direita). Com essas
informações, calculamos o valor de 𝑧 que corresponde ao limite entre a região de não rejeição e a região
crítica, que podemos chamar de 𝒛𝑪 (𝑧 crítico).

No caso do teste bilateral, haverá dois valores de 𝑧𝐶 (um à esquerda e outro à direita). Como as regiões
críticas de cada lado são do mesmo tamanho, então, pela simetria da curva normal padrão, os valores críticos
serão iguais em módulo (ou seja, terão o mesmo valor absoluto), porém um será negativo e outro positivo.

Por exemplo, vamos supor que o nível de confiança desejado seja 1 − 𝛼 = 90% (ou seja, nível de
significância 𝛼 = 10%) em um teste bilateral, conforme ilustrado a seguir.

                                                      𝑅𝑁𝑅
                                                  1 − 𝛼 = 90%
                                          𝑅𝐶                       𝑅𝐶
                                       𝛼⁄ = 5%                  𝛼⁄ = 5%
                                         2                        2
                                                LINF   𝜇    LSUP


---

Precisamos dos valores que delimitam 5% da distribuição abaixo de LINF e 5% acima de LSUP. Pela simetria da
normal padrão, o limite superior estará associado a um valor crítico da normal padrão 𝑧𝐶 e o limite inferior
a −𝑧𝐶 .

A seguir, temos um excerto da tabela normal que apresenta as probabilidades 𝑃(0 < 𝑍 < 𝑧), isto é, as
probabilidades entre 0 e o valor de 𝑧 indicado na tabela, conforme ilustrado na figura a seguir.

    Z       0,00       0,01     0,02      0,03       0,04         0,05     0,06     0,07     0,08     0,09
    ...                                               ...
   1,5     0,4332     0,4345   0,4357    0,4370     0,4382       0,4394   0,4406   0,4418   0,4429   0,4441
   1,6     0,4452     0,4463   0,4474    0,4484     0,4495       0,4505   0,4515   0,4525   0,4535   0,4545
   1,7     0,4554     0,4564   0,4573    0,4582     0,4591       0,4599   0,4608   0,4616   0,4625   0,4633
   1,8     0,4641     0,4649   0,4656    0,4664     0,4671       0,4678   0,4686   0,4693   0,4699   0,4706
   1,9     0,4713     0,4719   0,4726    0,4732     0,4738       0,4744   0,4750   0,4756   0,4761   0,4767
   2,0     0,4772     0,4778   0,4783    0,4788     0,4793       0,4798   0,4803   0,4808   0,4812   0,4817
    ...                                               ...


Sabendo que a curva normal é simétrica, o lado direito da curva normal tem probabilidade 𝑃(𝑍 > 0) = 50%.
Então, para que 5% da distribuição seja superior a 𝑧𝐶 , precisamos buscar o valor de 𝑧𝐶 que delimite uma
probabilidade de 50% - 5% = 45% entre 0 e 𝑧𝐶 :

                   𝑃(0 < 𝑍 < 𝑧𝐶 ) = 𝑃(𝑍 > 0) − 𝑃(𝑍 > 𝑧𝐶 ) = 50% − 5% = 45% = 0,45

Pela tabela anterior, observamos que o valor mais próximo é 𝑧𝐶 = 1,64, pois 𝑃(0 < 𝑍 < 1,64) = 0,4495.
Portanto, o limite superior será calculado considerando 𝑧𝐶 = 1,64 e o limite inferior, 𝑧𝐶 = −1,64.

Além do valor de 𝑧𝐶 , para utilizar a fórmula da transformação, precisamos da média e do desvio padrão da
distribuição.

Como nos testes de hipóteses consideramos a hipótese nula como premissa, o valor da média da distribuição
é o valor da média populacional 𝝁 indicada na hipótese nula.

Ademais, sabendo que vamos extrair uma amostra e calcular a sua média amostral 𝑋̅ para realizar o teste,
o desvio padrão que vamos utilizar é o desvio padrão da média amostral, dado pela razão entre o desvio
padrão populacional e a raiz quadrada do tamanho da amostra:

                                                            𝜎
                                                  𝜎𝑥̅ =
                                                            √𝑛


---

Pronto! Conhecendo 𝑧𝐶 , o desvio padrão populacional 𝜎 e o parâmetro 𝜇 indicado na hipótese nula,
podemos calcular os limites para a média amostral 𝐿𝑥̅ entre a RC e a RNR, utilizando a fórmula da
transformação:

                                                        𝐿𝑥̅ − 𝜇 𝐿𝑥̅ − 𝜇
                                              ±𝑧𝐶 =            = 𝜎
                                                          𝜎𝑥̅
                                                                  √𝑛

Sendo o limite superior calculado com um valor positivo de 𝑧𝐶 e o limite inferior, com um valor negativo.

Reorganizando essa expressão, obtemos a fórmula para calcular os limites:

                                                                           𝜎
                                                 𝐿𝑥̅ = 𝜇 ± 𝑧𝐶 ×
                                                                       √𝑛

Vamos supor que o desvio padrão populacional seja 𝜎 = 1 e que o tamanho da amostra seja 𝑛 = 16. Assim,
o desvio padrão da média amostral é:

                                                        𝜎         1        1
                                                𝜎𝑥̅ =        =         =
                                                        √𝑛       √16       4

Então, supondo que o parâmetro a ser testado seja 𝜇 = 2, em um teste bilateral, com nível de significância
de 10% (vimos que, para esse caso, temos 𝑧𝐶 = 1,64) o limite superior para a média amostral será:

                                                             1
                                       𝐿𝑆𝑈𝑃 = 2 + 1,64 ×       = 2 + 0,41 = 2,41
                                                             4

E o limite inferior será:

                                                             1
                                       𝐿𝐼𝑁𝐹 = 2 − 1,64 ×       = 2 − 0,41 = 1,59
                                                             4

Para esse exemplo, iremos rejeitar a hipótese inicial de 𝜇 = 2, caso a média amostral seja 𝑋̅ < 1,59 ou se
𝑋̅ > 2,41.

                        𝑥̅ −𝜇
         A razão 𝑧𝑡 =             calculada com base na média amostral 𝑥̅ observada no teste pode ser
                            𝜎𝑥̅
         chamada estatística do teste.


---

Outra forma de decidir se vamos rejeitar ou não a hipótese nula é comparar a estatística do teste (também
chamado de escore reduzido observado) com o valor crítico da normal padrão 𝑧𝐶 , em vez de comparar 𝑋̅ e
os limites superior/inferior estabelecidos, como fizemos anteriormente.

Assim, a hipótese nula será rejeitada se a estatística do teste for maior que o limite crítico superior 𝑧𝐶 ou
menor que o limite crítico inferior −𝑧𝐶 . Como esses limites possuem o mesmo valor absoluto, basta
comparar o valor absoluto da estatística com o valor crítico absoluto 𝒛𝑪 e rejeitar a hipótese nula se a
estatística for superior.

Vamos supor que, no exemplo acima, tenhamos observado 𝑋̅ = 1,55. Como 1,55 < 1,59, sabemos que
vamos rejeitar a hipótese nula, porque o resultado do teste é inferior ao limite mínimo estipulado.

Alternativamente, podemos concluir quanto à hipótese nula, comparando a estatística do teste ao valor
crítico 𝑧𝐶 . A estatística do teste é calculada, utilizando a fórmula da transformação para o valor observado
                                                                                             1
𝑋̅ = 1,55, sabendo que a média é 𝜇 = 2 e que o desvio padrão da média amostral é 𝜎𝑥̅ = :
                                                                                               4

                                       𝑥̅ − 𝜇 1,55 − 2
                                𝑧𝑡 =          =        = −0,45 × 4 = −1,8
                                          𝜎𝑥̅    1
                                                 4

Como o valor absoluto da estatística é superior ao valor crítico |𝑧𝑡 | > 𝑧𝐶 , rejeitamos a hipótese inicial.

(2019 – Instituto Federal de Educação, Ciência e Tecnologia da Paraíba) Um atleta, querendo levantar
dinheiro para participar de campeonatos, compra uma máquina de empacotar biscoitos caseiros em
embalagens de 300g. Para aferir se a máquina está embalando corretamente o atleta tomou uma amostra
de 1500 embalagens, que apresentou uma média de 285g e desvio padrão de 15g. Com os resultados do
experimento realizado pelo atleta proporcionam evidências suficientes para concluir que a máquina não está
trabalhando conforme o esperado. Nível de confiança de 99%. Sabendo que F(z) é a função de distribuição
acumulada da normal padrão, onde F(1,3) ≅ 0,90, F(1,64) ≅ 0,95, F(1,96) ≅ 0,975, F(2,58) ≅ 0,995
Observando o problema acima, responda, qual teste deve ser realizado e quais os valores críticos?
a) Teste bilateral e valores críticos 1,96 e -1,96
b) Teste bilateral e valores críticos 1,3 e -1,3
c) Teste unilateral à esquerda e valor crítico igual a 2,33
d) Teste unilateral à direita e valor crítico igual a 2,33
e) Teste bilateral e valores críticos 2,58 e -2,58
Comentários:


---

Nesse caso, a máquina precisa empacotar corretamente, nem a mais (senão, o atleta terá prejuízo), nem a
menos (senão, o cliente será lesado). Portanto, o teste deve ser bilateral.
Para um nível de confiança 1 − 𝛼 = 99%, isto é, nível de significância de 𝛼 = 1%, a área á direita do limite
superior (e à esquerda do limite inferior) deve ser 𝛼⁄2 = 0,5%, como ilustrado a seguir.

                                                       𝑅𝑁𝑅
                                                   1 − 𝛼 = 99%
                                          𝑅𝐶                        𝑅𝐶
                                       𝛼⁄ = 0,5%                 𝛼⁄ = 0,5%
                                         2                         2
                                                LINF   𝜇     LSUP
Considerando que a tabela padrão apresentada apresenta a função de distribuição acumulada, precisamos
do valor de z que corresponde a uma probabilidade acumulada F(z) = P(Z ≤ z) = 0,5% + 99% = 99,5%.
Pela tabela, vemos que esse valor é z = 2,58, pois F(2,58) ≅ 0,995.
Portanto, os valores críticos, na curva normal padrão, são -2,58 e 2,58.
Gabarito: E.


(VUNESP/2019 – TJ-SP) Um teste de hipóteses consistirá em testar, ao nível de significância de 5%, se a vida
média µ das lâmpadas produzidas por uma indústria é igual a 2 000 horas, em face da hipótese alternativa
de µ ser diferente de 2 000 horas. A população das vidas das lâmpadas produzidas é normalmente
distribuída, de tamanho infinito e variância conhecida. Com base em uma amostra aleatória de 100 lâmpadas
da população que apresentou uma vida média de 2 050 horas, foi realizado o teste. Seja z o valor do escore
da distribuição normal padrão (Z) tal que a probabilidade P(ǀZǀ ≤ z) = 95%. O valor do escore reduzido
encontrado, por meio dos dados da amostra, para comparar com o valor de z foi igual a 2,5.
O desvio padrão populacional é de
a) 500 horas
b) 400 horas
c) 280 horas
d) 100 horas
e) 200 horas
Comentários:
O enunciado apresenta os seguintes dados:
o Média 𝜇 = 2000 (hipótese nula a ser testada);
o Tamanho da amostra 𝑛 = 100;
o Valor observado 𝑥̅ = 2050; e
o Escore reduzido encontrado (estatística do teste): 𝑧 = 2,5.
Para calcular o desvio padrão populacional 𝜎, com base nesses dados, devemos utilizar a transformação
entre a normal e a normal padrão:


---

                                                    𝑥̅ − 𝜇
                                               𝑧=      𝜎
                                                    √100
Substituindo os dados fornecidos, temos:
                                                2050 − 2000
                                           2,5 =      𝜎
                                                     10
                                                  𝜎
                                             2,5.    = 50
                                                  10
                                           𝜎 = 50 × 4 = 200
Gabarito: E


(2018 – Economista da Secretaria de Estado de Saúde/DF) O preenchimento automático de garrafas de água
de uma determinada marca segue o modelo de distribuição normal com média µ = 500 ml e desvio padrão
de 20 mL. Em uma amostra de 4 garrafas, foi encontrado o volume médio de 485 mL.
Aplicando-se o teste de hipótese:
𝐻0 : 𝜇 = 500 ml
𝐻1 : 𝜇 < 500 ml
Com base na amostra obtida, a conclusão do teste é que se rejeita H0 com
a) 1% de significância
b) 3% de significância, mas não com 1% de significância
c) 5% de significância, mas não com 3% de significância
d) 7% de significância, mas não com 10% de significância
e) 7% de significância, mas não com 5% de significância
Considere os seguintes valores da tabela normal padrão fornecida na prova: P(z<2,43) ≅ 99%; P(z<1,88) ≅
97%, P(z<1,64) ≅ 95%, P(z<1,48) ≅ 93% e P(z<1,28) ≅ 90%.
Comentários:
O enunciado informa que a hipótese nula é 𝜇 = 500 ml e a hipótese alternativa é 𝜇 < 500 ml, portanto,
trata-se de um teste para a média, unilateral à esquerda.
Sendo assim, vamos rejeitar a hipótese nula se a média amostral observada for inferior ao limite mínimo
calculado para o nível de significância buscado.
Como as alternativas mencionam diversos níveis de significância distintos, será menos trabalhoso calcular a
estatística do teste e compará-la ao valor crítico 𝑧𝐶 .
O enunciado forneceu os seguintes dados:
o Média indicada na hipótese nula: 𝜇 = 500;
o Desvio padrão populacional 𝜎 = 20;
o Tamanho da amostra 𝑛 = 4; e
o Valor observado 𝑥̅ = 485.


---

Com base nessas informações, podemos calcular a estatística do teste:
                                                           𝑥̅ − 𝜇
                                                    𝑧𝑡 =
                                                              𝜎𝑥̅
Primeiro, vamos calcular o desvio padrão da média amostral:
                                                𝜎        20       20
                                        𝜎𝑥̅ =        =        =      = 10
                                             √𝑛 √4                 2
Então, o valor de z para a média amostral encontrada 𝑥̅ = 485 (estatística do teste) é:
                                         485 − 500 −15
                                     𝑧𝑡 =              =      = −1,5
                                              10          10
A hipótese nula será rejeitada se o módulo |zt| = 1,5 for maior do que o valor crítico (em módulo) zC.
Pelos valores da tabela normal padrão fornecidos, observamos que a estatística do teste |zt| = 1,5 está entre
z = 1,64 e z = 1,48.
Sendo P(Z < 1,64) = 95%, temos a seguinte situação:
                                             1 − 𝛼 = 95%

                                                                            𝛼 = 5%


                                                                 1,5 1,48


Como a estatística do teste (em módulo) é menor do que o valor crítico ao nível de 5% de significância, não
rejeitamos a hipótese a esse nível. Também não iremos rejeitar a hipótese nula para um nível menor de
significância, porque isso implicaria em um valor crítico ainda maior.
Sendo P(Z < 1,48) = 93%, temos:
                                                                    𝛼 = 7%

                                             1 − 𝛼 = 93%

                                                              1,48 1,5

Como a estatística do teste (em módulo) é maior do que o valor crítico ao nível de 5% de significância,
rejeitamos a hipótese a esse nível. Também iremos rejeitar a hipótese nula para um nível maior de
significância, porque isso implicaria em um valor crítico ainda menor.
Gabarito: E.


(FGV/2022 – TJDFT) Deseja-se testar a média populacional μ, sendo as hipóteses:
                                      𝐻0 : 𝜇 = 600 𝑒 𝐻1 : 𝜇 > 600
Suponha que o tamanho da amostra seja n = 100, a variância seja conhecida e igual a σ2 = 400 e a
probabilidade de ocorrer o erro do tipo I, 2,5%.


---

O poder do teste, quando a média, sob a hipótese alternativa, for 𝜇 = 608 é, aproximadamente:
a) 82,3%;
b) 87,2%;
c) 92,2%;
d) 97,7%;
e) 100%.
Para resolver essa questão, considere a tabela normal padrão P(Z > Z0) fornecida na prova, parcialmente
replicada a seguir.

Comentários:
Essa questão trabalha pede o poder do teste. O primeiro passo é calcularmos o limite da região crítica,
considerando o parâmetro indicado na hipótese nula 𝜇, sabendo que se trata de um teste unilateral à direita
(limite crítico superior somente):
                                                        𝜎
                                           𝐿 = 𝜇 + 𝑧.
                                                       √𝑛
Para isso, o enunciado informa que:
•   O parâmetro indicado na hipótese nula é 𝜇 = 600;
•   A variância da população é σ2 = 400, logo o desvio padrão é 𝜎 = √400 = 20;
•   O tamanho da amostra é 𝑛 = 100, logo a raiz quadrada é √𝑛 = 10.
Para obtermos o valor de z, o enunciado informa que a probabilidade de ocorrer o erro tipo I (nível de
significância) é 𝛼 = 2,5% = 0,025. Assim, precisamos do valor de Z0 tal que P(Z > Z0) = 0,025:

                                                                  𝛼 = 2,5%

                                                             Z0


---

Pela tabela, observamos que Z0 = 1,96 ≅ 2. Agora, podemos encontrar o limite superior:

                                                   20
                                 𝐿 = 600 + 2 ×        = 600 + 4 = 604
                                                   10

O poder do teste corresponde à probabilidade de rejeitar a hipótese nula (ou seja, de observarmos um
resultado maior que esse limite), considerando que o parâmetro verdadeiro é 𝜇 = 608 (hipótese nula falsa).
Para isso, utilizamos a fórmula da transformação para 𝐿 = 604, considerando o parâmetro verdadeiro:

                                           604 − 608 −4
                                      𝑧=            =   = −2
                                              20      2
                                              10

Assim, o poder do teste é 1 − 𝛽 = 𝑃(𝑍 > −2), ilustrada a seguir:

                                     𝛽
                                              Poder do teste

                                         -2

Pela simetria da normal padrão, temos:
                                         𝑃(𝑍 < −2) = 𝑃(𝑍 > 2)
Pela tabela observamos que 𝛽 = 𝑃(𝑍 > 2) = 0,0228.
Logo, o poder do teste é:
                               1 − 𝛽 = 1 − 0,0228 = 0,9772 ≅ 97,7%
Gabarito: D

Teste para Média com Variância Desconhecida

Quando a variância da população for desconhecida, precisamos estimá-la pela variância amostral.
O estimador não tendencioso para a variância (variância amostral) é:
                                                  ∑𝑛𝑖=1(𝑋𝑖 − 𝑋̅)2
                                           𝑠2 =
                                                       𝒏−𝟏
Em que 𝑛 é o tamanho da amostra.


---

        Alternativamente, podemos calcular o estimador não tendencioso para a variância como:

                                                  ∑ 𝑥2                𝑛
                                         𝑠2 = (          − 𝑥̅ 2 ) ×
                                                   𝑛                  𝑛−1


        Que decorre da fórmula da variância populacional 𝑉(𝑋) = 𝐸(𝑋 2 ) − 𝜇 2 .

        Como dividimos por 𝑛, na fórmula da variância populacional, e por 𝑛 − 1, na fórmula da
        variância amostral, precisamos multiplicar a fórmula da variância populacional por 𝒏 e
        dividir por 𝒏 − 𝟏, para obter a variância amostral.

Esse estimador vale para populações infinitas OU amostras extraídas com reposição.
Caso a população seja finita de tamanho 𝑁, e a amostra seja extraída sem reposição, é necessário aplicar o
                                                                            𝑵−𝒏
fator de correção, multiplicando a fórmula da variância amostral por              .
                                                                            𝑵−𝟏

Com a estimativa para a variância populacional, calculamos a estimativa para a variância da média amostral
(basta substituir 𝜎 2 por 𝑠 2 , na fórmula da variância da média amostral, que conhecemos):
                                                           𝑠2
                                                  𝑠𝑋2̅ =
                                                           𝑛
E o desvio padrão da média amostral será (a raiz quadrada):

                                                                𝑠2
                                           𝑠𝑋̅ = √𝑠𝑋2̅ = √
                                                                𝑛
                                                           𝑠
                                                𝑠𝑋̅ =
                                                           √𝑛


Quando a população seguir distribuição normal (ou quando o tamanho da amostra permitir essa
aproximação), mas com variância desconhecida, utilizamos a distribuição t-Student, que é similar à normal,
porém mais achatada no centro e com caudas mais largas, ou seja, apresenta maior variabilidade.
Por ser baseado nessa distribuição de t-Student, esse teste pode ser chamado de teste T.


---

Sabendo que a média da distribuição é o parâmetro 𝝁 indicado na hipótese nula, a estatística do teste, que
corresponde à transformação da média amostral observada 𝑥̅ para a distribuição padronizada, é:

                                                       𝑥̅ −𝜇       𝑥̅ −𝜇
                                                  𝑡=           =     𝑠
                                                        𝑠𝑋
                                                         ̅
                                                                    √𝑛


Essa estatística deve ser comparada ao valor crítico tabelado 𝑡𝐶 , considerando o nível de significância
desejado, o tipo de teste (bilateral, unilateral à esquerda ou unilateral à direita) e 𝒏 − 𝟏 graus de liberdade.


Alternativamente, podemos utilizar a fórmula da transformação para calcular os limites das regiões RC/RNR,
considerando o valor crítico 𝑡𝐶 .
Reorganizando a expressão acima, obtemos a fórmula para os limites críticos:

                                                                                𝑠
                                       𝐿 = 𝜇 ± 𝑡𝐶 × 𝑠𝑋̅ = 𝜇 ± 𝑡𝐶 ×
                                                                                √𝑛

Por exemplo, suponha o mesmo nível de confiança 1 − 𝛼 = 90% do nosso exemplo anterior, um teste
bilateral e uma amostra de tamanho 𝑛 = 5.
Nessa situação, precisamos do valor de 𝑡, considerando 𝑛 − 1 = 4 graus de liberdade.
A seguir, temos parte da tabela de t-Student, que apresenta os valores de 𝑡 para os quais as probabilidades
𝑃(𝑇 < 𝑡) constam na primeira linha, considerando os graus de liberdade indicados na primeira coluna:

Se a probabilidade associada ao intervalo de confiança é de 90%, então a probabilidade associada aos valores
acima e abaixo desse intervalo é de 5%, como ilustrado abaixo.


                                       5%                                  5%

                                                   90%


                                            −𝑡𝐶        𝑋̅          𝑡𝐶


Logo, a probabilidade associada aos valores menores que 𝑡𝑐 é:
                                     𝑃(𝑇 < 𝑡𝐶 ) = 5% + 90% = 95%


---

Assim, devemos buscar o valor de 𝑡 com 4 graus de liberdade, para o qual 𝑃(𝑇 < 𝑡4 ) = 0,95.
Pela tabela acima, temos 𝑡𝐶 = 2,1318 ≅ 2,13.
Agora, vejamos os demais parâmetros para calcular os limites do intervalo.
Vamos supor que a variância amostral observada seja 𝑠 2 = 0,0125. Nesse caso, a variância da média
amostral será estimada por:
                                                  𝑠 2 0,0125
                                         𝑠𝑋2̅ =      =       = 0,0025
                                                  𝑛      5
E o desvio padrão da média amostral será estimado pela sua raiz quadrada:

                                        𝑠𝑋̅ = √𝑠𝑋2̅ = √0,0025 = 0,05

Portanto, supondo que a média populacional indicada na hipótese nula seja 𝜇 = 1, os limites superior e
inferior serão, respectivamente:
                       𝐿𝑆𝑈𝑃 = 𝜇 + 𝑡 × 𝑠𝑋̅ = 1 + 2,13 × 0,05 = 1 + 0,1065 = 1,165
                      𝐿𝐼𝑁𝐹 = 𝜇 − 𝑡 × 𝑠𝑋̅ = 1 − 2,13 × 0,05 = 1 − 0,1065 = 0,8935

(FGV/2022 – TCU) Assuma que o valor anual gasto para pagamento de pessoal em municípios de uma certa
região do Brasil possui distribuição normal com parâmetros desconhecidos. Em uma amostra de 16
municípios, observou-se um gasto médio de R$ 1.000.000,00 ao ano com desvio padrão amostral igual a R$
500.000,00. Gostaríamos de testar se o gasto médio para pagamento de pessoal desses municípios é
estatisticamente diferente de R$ 750.000,00.
O teste a ser usado e o valor da sua estatística de teste são, respectivamente:
a) teste T e a estatística de teste é igual a 2;
b) teste Z e a estatística de teste é igual a 1/2;
c) teste T e a estatística de teste é igual a 1/2;
d) teste F e a estatística de teste é igual a 1/2;
e) teste Z e a estatística de teste é igual a 2;
Comentários:
O enunciado informa que a população segue distribuição normal com parâmetros desconhecidos, ou seja,
tanto a média quanto a variância da população são desconhecidas.
Assim, temos um teste para a média com variância desconhecida, em que devemos utilizar a distribuição de
t-Student (teste T).


---

Para isso, o enunciado fornece os seguintes dados:
•   Tamanho da amostra 𝑛 = 16;
•   Gasto médio observado na amostra 𝑥̅ = 1.000.000; e
•   Desvio padrão amostral 𝑠 = 500.000.
Ademais, o enunciado informa que o objetivo do teste é verificar se a média é estatisticamente diferente de
750.000. Ou seja, 𝜇 = 750.000 corresponde à hipótese nula e 𝜇 ≠ 750.000 corresponde à hipótese
alternatica.ao parâmetro da hipótese nula.
Assim, a estatística do teste é dada por:

                            𝑥̅ − 𝜇 1.000.000 − 750.000   250.000 250.000
                       𝑡=      𝑠 =                     =        =        =2
                                         500.000         500.000 125.000
                              √𝑛           √16              4

Já temos a resposta da questão, mas vale reforçar que, para decidirmos se rejeitamos ou não a hipótese
nula, comparamos essa estatística do teste ao valor tabelado da distribuição de t-Student com 𝒏 − 𝟏 = 15
graus de liberdade.

Gabarito: A


(FCC/2018 – TCE-RS) Uma população, referente aos comprimentos de certo cabo, é normalmente
distribuída, de tamanho infinito e com variância desconhecida. Deseja-se verificar se há indícios de que a
média 𝜇 dessa população seja diferente de 100 cm. Para isso foi retirada uma amostra aleatória de tamanho
9, que apresentou uma média igual a 𝑥̅ , em cm, e um desvio padrão igual a 6 cm. Foram formuladas as
hipóteses 𝐻0 : 𝜇 = 100𝑐𝑚 (hipótese nula) e 𝐻1 : 𝜇 ≠ 100𝑐𝑚 (hipótese alternativa), e o nível de significância
considerado foi de 5%. Para testar a hipótese nula, utilizou- se o teste t de Student.
A tabela abaixo fornece valores de 𝑡0,025 > 0, que representa o quantil da distribuição t de Student para n
graus de liberdade, em que 𝑡0,025 > 0 é o quantil da distribuição t de Student tal que a probabilidade
𝑃(𝑡 > 𝑡0,025 ) = 0,025. Verificou-se que o valor que foi encontrado para 𝑥̅ foi o menor valor tal que 𝐻0 não
é rejeitada.
Dados:

Então, 𝑥̅ é igual a:
a) 95,48 cm
b) 94,88 cm
c) 95,28 cm
d) 94,60 cm
e) 95,38 cm
Comentários:


---

A questão pede o valor de 𝑥̅ , que é o menor valor para o qual a hipótese nula não é rejeitada, ou seja, o
limite inferior da Região de Não Rejeição, calculado como:
                                                                   𝑠
                                       𝑥̅ = 𝜇 − 𝑡 × 𝑠𝑋̅ = 𝜇 − 𝑡 ×
                                                                  √𝑛
Para isso, o enunciado apresenta os seguintes dados:
•   Média da população (parâmetro sendo testado): 𝜇 = 100 cm
•   Desvio padrão amostral: 𝑠 = 6
•   Tamanho da amostra: 𝑛 = 9
Com base nessas informações, primeiro calculamos o valor do desvio padrão da média amostral:
                                                 𝑠       6       6
                                         𝑠𝑋̅ =       =       =     =2
                                               √𝑛 √9             3
O valor crítico 𝑡 deve ser obtido para 𝑛 − 1 = 8 graus de liberdade. Pela tabela fornecida, observamos que
𝑡 = 2,31. Logo, o valor mínimo é:
                              𝑥̅ = 100 − 2,31 × 2 = 100 − 4,62 = 95,38
Gabarito: E

Comparação das Médias de duas populações

O objetivo desse teste é comparar as médias de duas populações 𝑋1 e 𝑋2 independentes, para verificar se
as médias são iguais, isto é, correspondem à mesma população, ou não.

Vamos indicar as médias das duas populações 𝑋1 e 𝑋2 como 𝜇1 e 𝜇2 , respectivamente.

A hipótese nula é de que as médias são iguais (ou seja, de que se trata da mesma população):

                                                 𝐻0 : 𝜇1 = 𝜇2

Isso é o mesmo que afirmar que a diferença entre as médias é nula:

                                             𝐻0 : 𝜇1 − 𝜇2 = 0

Por exemplo, uma empresa que tenha recebido 2 lotes de peças do seu fornecedor pode estar interessada
em verificar se esses lotes são da mesma população. Para isso, a empresa irá extrair uma amostra de cada
lote e calcular as médias amostrais, que indicamos por ̅̅̅
                                                       𝑥1 e 𝑥
                                                            ̅̅̅.
                                                              2


Nos testes bilaterais, estamos interessados em verificar se as médias das populações são iguais ou
diferentes. Assim, as hipóteses nula e alternativa são as seguintes:

                                     𝐻 : 𝜇 = 𝜇2      𝐻 : 𝜇 − 𝜇2 = 0
                                    { 0 1         }↔{ 0 1             }
                                     𝐻1 : 𝜇1 ≠ 𝜇2    𝐻1 : 𝜇1 − 𝜇2 ≠ 0


---

Nessa situação, vamos rejeitar a hipótese nula se a média amostral da primeira população for muito menor
do que a da segunda (𝑥̅̅̅1 ≪ 𝑥̅̅̅);
                                2 ou se a média amostral da primeira população for muito maior do que a da
                   ̅̅̅1 ≫ 𝑥
segunda população (𝑥        ̅̅̅).
                              2


Por que estamos falando em muito maior ou muito menor? Porque a rejeição é a decisão forte. Assim,
rejeitamos a hipótese nula se realmente tivermos forte indício de que ela seja falsa, isto é, se o resultado do
teste estiver na região crítica.

Nesse caso, a empresa cria um intervalo, como (−0,5; 0,5), para a diferença entre as médias amostrais de
                                         ̅̅̅1 − ̅̅̅
cada lote. Assim, se a empresa encontrar 𝑥      𝑥2 < −0,5 ou ̅̅̅
                                                             𝑥1 − 𝑥
                                                                  ̅̅̅2 > 0,5, ela irá rejeitar os lotes.

Em outra situação, pode ser um problema para a empresa apenas se a média do primeiro lote for menor que
a do segundo lote. Nessa situação, deve ser conduzido o teste unilateral à esquerda, cujas hipóteses nula e
alternativa são as seguintes:

                                     𝐻 : 𝜇 = 𝜇2      𝐻 : 𝜇 − 𝜇2 = 0
                                    { 0 1         }↔{ 0 1             }
                                     𝐻1 : 𝜇1 < 𝜇2    𝐻1 : 𝜇1 − 𝜇2 < 0

Nesse caso, a rejeição irá ocorrer apenas se a média amostral da primeira população for muito menor do
que a da segunda população (𝑥 ̅̅̅1 ≪ 𝑥
                                     ̅̅̅).
                                       2


Por exemplo, a empresa pode decidir rejeitar os lotes apenas se ̅̅̅
                                                                𝑥1 − 𝑥
                                                                     ̅̅̅2 < −0,5.

Por outro lado, pode ser um problema para a empresa apenas se a média do primeiro lote for maior que a
do segundo lote. Assim, deve ser conduzido o teste unilateral à direita, cujas hipóteses nula e alternativa
são as seguintes:

                                     𝐻 : 𝜇 = 𝜇2      𝐻 : 𝜇 − 𝜇2 = 0
                                    { 0 1         }↔{ 0 1             }
                                     𝐻1 : 𝜇1 > 𝜇2    𝐻1 : 𝜇1 − 𝜇2 > 0

Nessa situação, a rejeição irá ocorrer apenas se a média amostral da primeira população for muito maior do
que a da segunda população (𝑥  ̅̅̅1 ≫ 𝑥
                                      ̅̅̅).
                                        2


Por exemplo, a empresa pode decidir rejeitar os lotes apenas se ̅̅̅
                                                                𝑥1 − 𝑥
                                                                     ̅̅̅2 > 0,5.

Se as populações 𝑋1 e 𝑋2 seguirem distribuições normais (ou se as amostras forem grandes o suficiente para
que as médias amostrais sigam distribuições), com variâncias conhecidas, 𝑉(𝑋1 ) = 𝜎12 e 𝑉(𝑋2 ) = 𝜎22 , então
                                 ̅̅̅1 − ̅̅̅
a diferença das médias amostrais 𝑥      𝑥2 também seguirá distribuição normal. Assim, utilizamos a seguinte
transformação para a normal padrão:

                               𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 − 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜
                          𝑧=
                                       𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜


---

O 𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 é a diferença entre as médias amostrais:

                                          𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = ̅̅̅  ̅̅̅𝟐
                                                                  𝒙𝟏 − 𝒙

A 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 é a diferença entre as médias populacionais:

                                         𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = 𝝁𝟏 − 𝝁𝟐

Como consideramos a hipótese nula, em que 𝜇1 − 𝜇2 = 0, então a média da distribuição é igual a zero:

                                             𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = 𝟎

A variância da diferença das médias amostrais ̅̅̅
                                              𝑥1 − 𝑥
                                                   ̅̅̅2 é dada pela soma das variâncias, uma vez que as
populações são independentes1:

                                               ̅̅̅1 − 𝑥
                                             𝑉(𝑥      ̅̅̅)    ̅̅̅)
                                                        2 = 𝑉(𝑥       ̅̅̅)
                                                                1 + 𝑉(𝑥 2

E a variância da média amostral é a razão entre a variância populacional e o tamanho amostral, então:

                                                           𝑉(𝑋1 ) 𝜎12
                                                 𝑉(𝑥
                                                   ̅̅̅)
                                                     1 =         =
                                                            𝑛1     𝑛1

                                                           𝑉(𝑋2 ) 𝜎22
                                                 𝑉(𝑥
                                                   ̅̅̅)
                                                     2 =         =
                                                            𝑛2     𝑛2

Em que 𝑛1 é o tamanho da amostra extraída da primeira população 𝑋1 e 𝑛2 é o tamanho da amostra extraída
da segunda população 𝑋2. Assim, a variância da diferença 𝑉(𝑥̅̅̅1 − 𝑥
                                                                   ̅̅̅)
                                                                     2 é a soma, já que as amostras são
independentes:

                                                                𝜎12 𝜎22
                                                𝑉(𝑥      𝑥2 =
                                                  ̅̅̅1 − ̅̅̅)      +
                                                                𝑛1 𝑛2

Assim, o 𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 é a raiz quadrada dessa variância:

                                                                                       𝝈𝟐𝟏 𝝈𝟐𝟐
                   𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = 𝜎𝑥̅̅̅1̅−𝑥̅̅̅2̅ = √𝑉(𝑥
                                                                       ̅̅̅1 − 𝑥
                                                                              ̅̅̅)
                                                                                2  = √    +
                                                                                       𝒏 𝟏 𝒏𝟐

1
  Quando as variáveis não são necessariamente independentes, as variâncias da soma e da diferença são dadas
respectivamente por:
                                     𝑉(𝑋1 + 𝑋2 ) = 𝑉(𝑋1 ) + 𝑉(𝑋2 ) + 2. 𝐶𝑜𝑣(𝑋1 , 𝑋2 )
                                     𝑉(𝑋1 − 𝑋2 ) = 𝑉(𝑋1 ) + 𝑉(𝑋2 ) − 2. 𝐶𝑜𝑣(𝑋1 , 𝑋2 )
Em que 𝐶𝑜𝑣(𝑋1 , 𝑋2 ) é a covariância entre as variáveis.
Pontue-se que, para variáveis independentes, a covariância é nula. Por esse motivo, a variância tanto da soma quanto da
diferença de variáveis independentes equivale à soma das variâncias.


---

Dessa forma, considerando a hipótese nula, 𝜇1 − 𝜇2 = 0, o valor da estatística do teste corresponde à
                                                ̅̅̅1 − ̅̅̅
transformação da diferença das médias amostrais 𝑥      𝑥2 para a normal padrão:

                                                  ̅𝑥̅̅1̅−𝑥
                                                         ̅̅̅2̅          ̅𝑥̅̅1̅−𝑥
                                                                               ̅̅̅2̅
                                            𝑧=                   =
                                                  𝜎̅̅̅̅−𝑥
                                                   𝑥1 ̅̅̅̅
                                                         2                  𝜎2 𝜎2
                                                                       √ 1+ 2
                                                                            𝑛1 𝑛2

Essa estatística deve ser comparada ao valor crítico tabelado 𝑧𝐶 , considerando o nível de significância
desejado e o tipo de teste (bilateral, unilateral à esquerda ou unilateral à direita).

Alternativamente, pode-se verificar se o resultado observado da diferença 𝑥          ̅̅̅1 − 𝑥
                                                                                            ̅̅̅2 respeita o limite
estipulado (ou os limites, no teste bilateral), considerando o valor crítico tabelado 𝑧𝐶 .

                                                                                                 𝑥1 − ̅̅̅:
Para calcular os limites da diferença, podemos reorganizar a fórmula acima, isolando a diferença ̅̅̅  𝑥2

                                                                       𝜎2           𝜎2
                                              𝐿𝐷 = ±𝑧 × √𝑛1 + 𝑛2
                                                                        1            2

Assim, os limites da diferença terão o mesmo valor absoluto, apenas com sinais diferentes.

         Vamos considerar que a variância da primeira população seja 𝜎12 = 3 e da segunda
         população 𝜎22 = 1; e que seja extraída uma amostra de tamanho 𝑛1 = 18 da primeira
         população e outra de tamanho 𝑛2 = 12 da segunda população.

         A variância da média amostral da primeira população é:

                                                           𝜎12          3            1
                                              𝑉(𝑥
                                                ̅̅̅)
                                                  1 =             =             =
                                                           𝑛1          18            6


         E da segunda população é:

                                                                 𝜎22            1
                                                𝑉(𝑥
                                                  ̅̅̅)
                                                    2 =                =
                                                                 𝑛2         12


         A variância da diferença é a soma:

                                                                            1        1        2+1       3        1
                            𝑉(𝑥
                              ̅̅̅1 − 𝑥 1 = 𝑉(𝑥
                                     ̅̅̅)      1 + 𝑉(𝑥
                                             ̅̅̅)      2 =6+
                                                     ̅̅̅)                                 =         =        =
                                                                                     12       12        12       4


---

        E o desvio padrão da distribuição é a raiz quadrada desse resultado:

                                                                           1        1
                                     𝜎𝑥̅̅̅1̅−𝑥̅̅̅2̅ = √𝑉(𝑥      𝑥1 = √ =
                                                         ̅̅̅1 − ̅̅̅)
                                                                           4        2


        Agora, vamos supor um nível de confiança 1 − 𝛼 = 95% em um teste bilateral, em que
        𝑧𝐶 = ±1,96 (pela tabela normal padrão).

        Então, o valor limite para a diferença 𝑥
                                               ̅̅̅1 − 𝑥
                                                      ̅̅̅,
                                                        2 em módulo, é:

                                                                       1
                                   𝐿𝐷 = 𝑧𝐶 × 𝜎̅𝑥̅̅1̅−𝑥̅̅̅2̅ = 1,96 × = 0,98
                                                                       2


Note que não precisamos conhecer as médias populacionais 𝜇1 e 𝜇2 , uma vez que a hipótese nula é de que
a diferença seja nula.

                                                                   𝜎           𝜎
        Se a questão fornecer os desvios padrão amostrais, 𝑛1 e 𝑛2 , será necessário elevá-los ao
                                                                  √ 1          √ 2
                                                                               𝜎12 𝜎22
        quadrado para obter as respectivas variâncias amostrais, 𝑛 e                         .
                                                                                1       𝑛2


        Somente então, você poderá calcular a variância da diferença e, em seguida, obter o
        desvio padrão da diferença, pela sua raiz quadrada:

                                                                       𝜎2           𝜎2
                                    𝜎̅𝑥̅̅1̅−𝑥̅̅̅2̅ = √𝑉(𝑥      𝑥1 = √𝑛1 + 𝑛2
                                                        ̅̅̅1 − ̅̅̅)
                                                                           1            2


        Não some os desvios padrão!
                                                   𝜎1      𝜎
                                                         + 𝑛2
                                                   √𝑛1    √ 2

Se as populações seguirem distribuições normais (ou aproximadamente normais) com variâncias
desconhecidas, utilizamos fórmulas similares, mas considerando a variância amostral, no lugar da variância
populacional; e a distribuição de t-Student, no lugar da distribuição normal:

                                              𝒙𝟏 − 𝒙𝟐            𝒙𝟏 − 𝒙𝟐
                                       𝒕𝑪 =                   =
                                               𝒔𝒙̅̅̅𝟏̅−𝒙̅̅̅𝟐̅      𝟐    𝟐
                                                                √ 𝒔𝟏 + 𝒔𝟐
                                                                  𝒏𝟏 𝒏𝟐


---

(FGV/2019 – DPE-RJ) Suponha que para estimar e testar a diferença entre as médias de duas populações
cujas características são independentes sejam extraídas duas amostras. Os tamanhos de amostra são n = 36
e m = 64, para X e Y, respectivamente. Como resultado da seleção, chega-se a 𝑋̅ = 20 e 𝑌̅ = 17. Além disso,
sabe-se que as variâncias populacionais são 𝜎𝑋2 = 𝜎𝑌2 = 100.
Em módulo, a estatística amostral para fins de estimação e inferência é:
a) 36/35
b) 1,44
c) 1,60
d) 0,48
e) 1,05
Comentários:
O enunciado forneceu os seguintes dados:
•   Variâncias populacionais: 𝜎𝑋2 = 𝜎𝑌2 = 100;
•   Tamanhos das amostras 𝑛𝑋 = 36 e 𝑛𝑌 = 64;
•   Valores observados: 𝑥 = 20 e 𝑦 = 17.
Assim, as variâncias das médias amostrais são dadas por:
                                                      𝜎𝑥2 100 25
                                           𝑉(𝑥̅ ) =      =    =
                                                      𝑛𝑥   36   9
                                                      𝜎𝑦2 100 25
                                           𝑉(𝑦̅) =       =    =
                                                      𝑛𝑦   64   16
E a variância da diferença é a soma, já que as populações são independentes:
                                                        25 25 400 + 225 625
                        𝑉(𝑥̅ − 𝑦̅) = 𝑉(𝑥̅ ) + 𝑉(𝑦̅) =     +   =        =
                                                         9 16    144     144
E o desvio padrão da diferença é a raiz quadrada:

                                                                 625 25
                                     𝜎𝑥̅ −𝑦̅ = √𝑉(𝑥̅ − 𝑦̅) = √      =
                                                                 144 12
Assim, a estatística do teste é a razão:
                                       𝑥−𝑦       20 − 17      12
                                  𝑧=           =         = 3×    = 1,44
                                       𝜎𝑥̅ −𝑦̅     25         25
                                                   12
Gabarito: B.


---

                                        Testes para a Média

                                         Variância conhecida:

                            𝑥̅ −𝜇                                                         𝜎
Estatística do teste: 𝑧 =                       Limites da Região Crítica: 𝐿 = 𝜇 ± 𝑧𝐶 ×
                             𝜎𝑥̅                                                          √𝑛


                                        Variância desconhecida:

                            𝑥̅ −𝜇                                                         𝑠
Estatística do teste: 𝑡 =     𝑠                 Limites da Região Crítica: 𝐿 = 𝜇 ± 𝑡𝐶 ×
                                                                                          √𝑛
                             √𝑛


                                    Comparação de 2 populações:

                            𝑥 1 −𝑥
                            ̅̅̅̅ ̅̅̅̅
                                   2                                                𝜎2     𝜎2
Estatística do teste: 𝑧 =                       Limites da Região Crítica: 𝐿 = 𝑧 × √𝑛1 + 𝑛2
                             𝜎2 𝜎2                                                   1         2
                            √ 1+ 2
                             𝑛1 𝑛2


---

               TESTES DE HIPÓTESES PARA PROPORÇÕES
É possível utilizar o teste de hipóteses para proporções, aplicável para populações que seguem distribuições
de Bernoulli (isto é, em que cada elemento é categorizado em sucesso ou fracasso), com proporção 𝑝
desconhecida. Esse tipo de teste de hipóteses é bastante cobrado em provas.

Teste para a Proporção de uma População

Para iniciar o teste para a proporção, é feita uma suposição a respeito da proporção populacional 𝑝 (hipótese
nula), a qual será testada a partir da proporção amostral observada 𝑝̂ .

A estatística do teste também pode ser calculada utilizando-se a fórmula da transformação para a curva
normal padrão para uma amostra suficientemente grande (isto é, uma aproximação que pode ser feita
considerando-se o Teorema do Limite Central):

                               𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 − 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜
                          𝑧=
                                       𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜

                                                ̂ observada na amostra.
O 𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 corresponde à proporção 𝒑

A 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 é o parâmetro indicado na hipótese nula 𝒑.

Para calcular o desvio padrão da distribuição, precisamos da variância populacional, dada por:

                                                   𝑉(𝑝) = 𝑝. 𝑞

Em que 𝑞 = 1 − 𝑝. Considerando que a variância da proporção amostral corresponde à variância da
proporção populacional dividida pelo tamanho da amostra, então a variância da proporção amostral é dada
por:

                                                              𝑝. 𝑞
                                                   𝑉(𝑝̂ ) =
                                                               𝑛

Em que 𝑛 é o tamanho da amostra. Por fim, o 𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 é a raiz quadrada:

                                                                      𝑝. 𝑞
                                               𝜎𝑝̂ = √𝑉(𝑝̂ ) = √
                                                                       𝑛

Portanto, a estatística do teste é dada por:

                                                      ̂ −𝒑
                                                      𝒑          ̂ −𝒑
                                                                 𝒑
                                                 𝒛=          =
                                                      𝝈𝒑̂            ̂ .𝒒
                                                                     𝒑  ̂
                                                                 √
                                                                      𝒏


---

Por exemplo, vamos considerar uma grande empresa que alega ter o mesmo número de homens e mulheres
dentre os seus colaboradores, ou seja, que a proporção de homens seja de 50% (hipótese nula):
                                                    𝐻0 : 𝑝 = 0,5
Para testar essa hipótese, é extraída uma amostra de 100 colaboradores, dos quais 55 são homens. A
proporção encontrada na amostra é de:
                                                          55
                                                  𝑝̂ =       = 0,55
                                                         100
Para calcular a estatística desse teste, vamos primeiro calcular a variância da proporção amostral. Sendo 𝑝 =
0,5 e, portanto, 𝑞 = 1 − 𝑝 = 0,5, a variância da proporção amostral é a razão entre a variância populacional
e o tamanho da amostra:
                                                  𝑝. 𝑞 0,5 × 0,5
                                       𝑉(𝑝̂ ) =       =          = 0,0025
                                                   𝑛      100

E o desvio padrão da proporção amostral é a raiz quadrada:

                                        𝜎𝑝̂ = √𝑉(𝑝̂ ) = √0,0025 = 0,05

A estatística da amostra é dada por:
                                          𝑝̂ − 𝑝 0,55 − 0,5 0,05
                                    𝑧=           =         =      =1
                                             𝜎𝑝̂    0,05     0,05

Também podemos utilizar essa mesma fórmula da transformação para calcular o limite da Região Crítica (ou
os limites, no caso do teste bilateral), considerando o valor crítico 𝑧𝐶 , para o nível de confiança (ou
significância) desejado e o tipo de teste (bilateral ou unilateral). Reorganizando a fórmula para isolar o valor
do limite para a proporção amostral 𝐿:
                                                   𝐿 = 𝑝 + 𝑧 × 𝜎𝑝̂

Nessa fórmula, o valor de 𝑧 será positivo para obter um limite superior para a proporção amostral e negativo
para obter um limite inferior para a proporção amostral.


Essas fórmulas pressupõem uma população infinita ou amostras extraídas com reposição. Caso a população
seja finita e as amostras extraídas sem reposição, então será necessário aplicar o fator de correção para
                                                                            𝑁−𝑛
população finita. Para isso, devemos multiplicar a variância amostral por 𝑁−1:

                                                           𝑝. 𝑞 𝑁 − 𝑛
                                              𝑉∗ (𝑝̂ ) =       ×
                                                            𝑛    𝑁−1


---

        O teste para proporções também pode ser utilizado quando classificamos a população em
        2 categorias, que podem ser representadas por sinais "+" e "-", e desejamos fazer o teste
        para avaliar hipóteses formuladas a respeito da proporção desses sinais.

        É comum chamar a estatística desse teste de escore reduzido.

(CESPE/2018 – ABIN) Em uma fábrica de ferragens, o departamento de controle de qualidade realizou testes
na linha de produção de parafusos. Os testes ocorreram em dois campos: comprimento dos parafusos e
frequência com que esse comprimento fugia da medida padrão. Historicamente, o comprimento médio
desses parafusos é 3 cm, e o desvio padrão observado é 0,3 cm. Foram avaliados 10.000 parafusos durante
uma semana. Desses, 1.000 fugiram às especificações técnicas da gerência: o comprimento do parafuso
deveria variar de 2,4 cm a 3,6 cm. O chefe da linha de produção, porém, insiste em afirmar que, em média,
4% da produção de parafusos fogem às especificações. O departamento de controle de qualidade assume
que os comprimentos dos parafusos têm distribuição normal.
A partir dessa situação hipotética, julgue os itens subsequentes, considerando que Φ(1) = 0,841, Φ(1,65) =
0,95, Φ(2) = 0,975 e Φ(2,5) = 0,994, em que Φ(z) é a função distribuição normal padronizada acumulada, e
                                       0,0384
que 0,002 seja valor aproximado para √10.000.

Com base nos dados apresentados, pode-se rejeitar, com significância de 5%, a afirmação do chefe da linha
de Produção.
Comentários:
O enunciado informa que o chefe da linha de Produção afirma que 4% dos parafusos fogem às especificações:
                                                𝐻0 : 𝑝 = 0,04
Considerando-se a hipótese nula (𝑝 = 0,04 e, portanto, 𝑞 = 1 − 𝑝 = 0,96), a variância da proporção da
amostra extraída, de tamanho n = 10.000, é:
                                             𝑝. 𝑞 0,04 × 0,96 0,0384
                                  𝑉(𝑝̂ ) =       =           =
                                              𝑛     10.000     10.000


---

Logo, o desvio padrão da proporção amostral, raiz quadrada da variância (considerando a aproximação
                         0,0384
indicada no enunciado √10.000 ≅ 0,002) é:

                                                        0,0384
                                    𝜎𝑝̂ = √𝑉(𝑝̂ ) = √          ≅ 0,002
                                                        10.000

Agora, vamos calcular o valor de z, considerando o nível de significância 𝛼 = 5% (logo, o nível de confiança
é 1 − 𝛼 = 95%). Note que o problema é a proporção de defeito superar a proporção indicada (se a
proporção de defeito for menor, será ainda melhor para a empresa). Assim, temos um teste unilateral à
direita, em que a hipótese alternativa é:
                                               𝐻1 : 𝑝 > 0,04

                                            1 − 𝛼 = 95%
                                                             𝛼 = 5%
                                                   0    zC

Ou seja, precisamos do valor de z cuja função de distribuição acumulada é P(Z < z C) = 0,95. Pela tabela
fornecida na questão, observamos que o valor crítico é zC = 1,65, pois P(Z < 1,65) = 0,95. Portanto, a
proporção amostral máxima para que a hipótese nula não seja rejeitada é:
                   𝐿 = 𝑝 + 𝑧 × 𝜎𝑝̂ = 0,04 + 1,65 × 0,002 = 0,04 + 0,0033 = 0,0433
Porém, na amostra extraída pelo departamento de controle, observou-se que, de n = 10.000 parafusos, 1.000
fugiam à especificação, ou seja, a proporção observada foi de:
                                                 1.000
                                            𝑝̂ =       = 0,1
                                                10.000
Por ser muito superior ao limite máximo da proporção amostral aceitável, a hipótese nula deve ser rejeitada.
Gabarito: Certo.

Teste para 2 Proporções

Existem testes de hipóteses cujo objetivo é comparar as proporções de 2 populações 𝑋1 e 𝑋2 independentes,
considerando a mesma característica. Por exemplo, podemos verificar se a proporção de homens, dentre os
colaboradores, de uma empresa A é a mesma proporção de outra empresa B.

A hipótese nula é de que as proporções sejam iguais, ou seja, 𝑝1 = 𝑝2 . Já a hipótese alternativa depende do
tipo do teste. Para testes bilaterais, temos as seguintes hipóteses nula e alternativa:

                                     𝐻 : 𝑝 = 𝑝2      𝐻 : 𝑝 − 𝑝2 = 0
                                    { 0 1         }↔{ 0 1             }
                                     𝐻1 : 𝑝1 ≠ 𝑝2    𝐻1 : 𝑝1 − 𝑝2 ≠ 0


---

Para testes unilaterais à esquerda, temos as seguintes hipóteses nula e alternativa:

                                      𝐻 : 𝑝 = 𝑝2      𝐻 : 𝑝 − 𝑝2 = 0
                                     { 0 1         }↔{ 0 1             }
                                      𝐻1 : 𝑝1 < 𝑝2    𝐻1 : 𝑝1 − 𝑝2 < 0

E para testes unilaterais à direita, temos as seguintes hipóteses nula e alternativa:

                                      𝐻 : 𝑝 = 𝑝2      𝐻 : 𝑝 − 𝑝2 = 0
                                     { 0 1         }↔{ 0 1             }
                                      𝐻1 : 𝑝1 > 𝑝2    𝐻1 : 𝑝1 − 𝑝2 > 0

Aproximando-se as proporções amostrais a distribuições normais (Teorema Central do Limite), então a
diferença entre as proporções também seguirá distribuição normal. Dessa forma, a estatística do teste será
calculada pela mesma transformação para a normal padrão:

                                𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 − 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜
                           𝑧=
                                        𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜

O 𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 corresponde à diferença entre as proporções amostrais:

                                                             ̂𝟏 − 𝒑
                                     𝑣𝑎𝑙𝑜𝑟 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = 𝒑    ̂𝟐

A 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 é a diferença entre as proporções populacionais:

                                     𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = 𝑝1 − 𝑝2

Como consideramos a hipótese nula, em que 𝑝1 − 𝑝2 = 0, então a média da distribuição é igual a zero:

                                        𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = 𝟎

A variância da diferença das médias amostrais 𝑉 (̂    ̂2 ) é dada pela soma das variâncias, uma vez que as
                                                 𝑝1 − 𝑝
populações são independentes:

                                        𝑉 (̂    ̂2 ) = 𝑉 (̂
                                           𝑝1 − 𝑝         𝑝1 ) + 𝑉(𝑝
                                                                   ̂)
                                                                    2

A variância da média amostral é a razão entre a variância populacional e o tamanho amostral. Considerando,
ainda, que a variância populacional é 𝑉 (𝑝) = 𝑝. 𝑞, em que 𝑞 = 1 − 𝑝:

                                                   𝑉(𝑋1 ) 𝑝1 . 𝑞1 𝑝. 𝑞
                                       𝑉 (̂
                                          𝑝1 ) =         =       =
                                                    𝑛1     𝑛1      𝑛1

                                                   𝑉(𝑋2 ) 𝑝2 . 𝑞2 𝑝. 𝑞
                                       𝑉 (𝑝
                                          ̂2 ) =         =       =
                                                    𝑛2     𝑛2      𝑛2

Em que 𝑛1 é o tamanho da amostra extraída da primeira população 𝑋1 e 𝑛2 é o tamanho da amostra extraída
da segunda população 𝑋2 . Assim, a variância da diferença 𝑉(̂    ̂2 ) é a soma:
                                                            𝑝1 − 𝑝

                                                           𝑝. 𝑞 𝑝. 𝑞
                                          𝑉 (̂    ̂2 ) =
                                             𝑝1 − 𝑝            +
                                                           𝑛1    𝑛2


---

E o 𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 é a raiz quadrada da variância:

                                                                                    𝑝. 𝑞 𝑝. 𝑞
                 𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜 𝑑𝑎 𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑖çã𝑜 = 𝜎𝑝̂1 −𝑝̂2 = √𝑉(̂    ̂2 ) = √
                                                                𝑝1 − 𝑝                  +
                                                                                    𝑛1    𝑛2

Dessa forma, considerando a hipótese nula, 𝑝1 − 𝑝 = 0, o valor da estatística do teste é:

                                                    ̂−𝒑
                                                    𝒑 ̂𝟐            ̂−𝒑
                                                                    𝒑𝟏 ̂
                                           𝒛 = 𝝈𝟏               =       𝟐
                                                                     𝒑.𝒒 𝒑.𝒒
                                                     𝒑̂𝟏 −𝒑̂𝟐       √ 𝒏 +𝒏
                                                                      𝟏      𝟐

Para ilustrar, vamos considerar a nossa empresa (A), que alegou que a proporção de homens é de 50%, bem
como uma segunda empresa (B) com a mesma alegação. Para testar tais alegações, aplicaremos o teste
comparando essas duas populações. Para isso, extraímos uma amostra de 200 colaboradores de cada
empresa, tendo encontrado 110 homens da empresa A e 90 homens da empresa B.

A variância dessa distribuição 𝑉(̂    ̂2 ) é dada por:
                                 𝑝1 − 𝑝

                                   𝑝. 𝑞 𝑝. 𝑞 0,5 × 0,5 0,5 × 0,5     0,25
                  𝑉 (̂    ̂2 ) =
                     𝑝1 − 𝑝            +    =         +          =2×      = 0,0025
                                   𝑛1    𝑛2     200       200        200

E o desvio padrão é a raiz quadrada:

                                          𝜎𝑝̂1 −𝑝̂2 = √0,0025 = 0,05

A diferença entre as proporções amostrais observadas é:

                                               110 90
                                   𝑝1 − 𝑝
                                   ̂    ̂2 =      −    = 0,55 − 0,45 = 0,1
                                               200 200

Portanto, a estatística desse teste é:

                                                  ̂1 − 𝑝
                                                  𝑝      ̂2   0,1
                                           𝑧=               =      =2
                                                  𝜎𝑝̂1 −𝑝̂2   0,05

Esse valor pode ser comparado ao valor crítico 𝑧𝐶 , obtido com base no nível de confiança (ou significância)
desejado e o tipo de teste (bilateral ou unilateral). Também podemos utilizar essa mesma fórmula para
calcular os limites para as diferenças das proporções. Reorganizando a fórmula, para isolar a diferença ̂
                                                                                                        𝑝1 −
𝑝
̂,
 2 temos:


                                               𝑝
                                               ̂1 − 𝑝
                                                    ̂2 = 𝑧𝐶 × 𝜎𝑝̂1 −𝑝̂2

Para estipular um limite superior, o valor crítico 𝑧𝐶 será positivo e para estipular um limite inferior, o valor
crítico 𝑧𝐶 será negativo.


---

                    TESTES PARA A DISTRIBUIÇÃO BINOMIAL
O teste para a distribuição binomial é um teste para proporções que não considera a aproximação da
distribuição à normal. Assim, nesse teste, vamos considerar a distribuição binomial, que é a distribuição
exata da proporção para amostras independentes.

                                               𝑃 (𝑋 = 𝑘 ) = 𝐶𝑛,𝑘 . 𝑝𝑘 . 𝑞𝑛−𝑘

Em que a probabilidade de fracasso é 𝑞 = 1 − 𝑝 e 𝑛 é o número de ensaios.

Para esse teste, devemos considerar a probabilidade de sucesso 𝒑 indicada na hipótese nula, bem como
número de ensaios 𝑛 do teste.

Em seguida, utilizamos o nível de significância desejado (que é a probabilidade de rejeitar a hipótese nula
sendo ela verdadeira) para definir os limites críticos do teste; ou o contrário, isto é, partimos dos limites
críticos definidos para calcular o nível de significância (mais comum nesse teste).

Vamos supor que o objetivo seja verificar se uma moeda é honesta ou não. Nessa situação, a hipótese nula
é de que a moeda é honesta, em que a probabilidade de obtermos a face CARA é 𝑝 = 0,5; e a hipótese nula
é de que a probabilidade é diferente disso:

                                                         𝐻𝑜 : 𝑝 = 0,5

                                                         𝐻1 : 𝑝 ≠ 0,5

Vamos considerar que iremos lançar a moeda 𝑛 = 4 vezes e rejeitar a hipótese nula caso todas as faces
sejam iguais, ou seja, caso todas as faces sejam COROA (𝑘 = 0 CARA) ou caso todas as faces sejam CARA
(𝑘 = 4 CARAS). Com base nessa informação, vamos calcular o nível de significância do teste, dado pela soma
das probabilidades desses eventos (que correspondem à rejeição da hipótese nula):

                             𝛼 = 𝑃{𝑡𝑜𝑑𝑎𝑠 𝑎𝑠 𝑓𝑎𝑐𝑒𝑠 𝑖𝑔𝑢𝑎𝑖𝑠} = 𝑃[𝑋 = 0] + 𝑃[𝑋 = 4]

A probabilidade de obtermos 0 CARA em 𝑛 = 4 lançamentos, considerando a hipótese nula como premissa
(𝑝 = 0,5, logo 𝑞 = 1 − 𝑝 = 0,5) é1:

                             𝑃(𝑋 = 0) = 𝐶4,0 . 0,50 . 0,54 = 1 × 1 × 0,0625 = 0,0625

1
 A combinação de 0 elemento (𝐶𝑛,0 ) ou de 𝑛 elementos em 𝑛 (𝐶𝑛,𝑛 ) é igual a 1. Esses são casos especiais de combinação que valem
ser lembrados, mas podem ser obtidos normalmente pela fórmula da combinação:
                                                            𝑛!         𝑛!
                                              𝐶𝑛,0 =                =       =1
                                                       (𝑛 − 0)! × 0! 𝑛! × 1
                                                       𝑛!          𝑛!     𝑛!
                                         𝐶𝑛,𝑛 =                =       =       =1
                                                  (𝑛 − 𝑛)! × 𝑛! 0! × 𝑛! 1 × 𝑛!


---

E a probabilidade de obtermos 4 CARAS é:

                          𝑃(𝑋 = 4) = 𝐶4,4 . 0,54 . 0,50 = 1 × 0,0625 × 1 = 0,0625

Logo, o nível de significância do teste é a soma:

                     𝛼 = 𝑃[𝑋 = 0] + 𝑃[𝑋 = 4] = 0,0625 + 0,0625 = 0,125 = 12,5%

É possível que a questão forneça uma probabilidade específica para a hipótese alternativa (ou indicar o
parâmetro verdadeiro da distribuição), por exemplo, a probabilidade de sair CARA é 𝐻1 : 𝑝 = 0,6.

Com essa informação, podemos calcular a probabilidade do erro tipo II (𝛽), bem como o poder do teste
(1 − 𝛽), que consideram o parâmetro indicado na hipótese alternativa (ou o parâmetro verdadeiro).

Vale lembrar que 𝛽 é a probabilidade de não rejeitar a hipótese nula, sendo ela falsa; e 1 − 𝛽 é a
probabilidade complementar, qual seja de rejeitar a hipótese nula sendo ela falsa.

Vamos supor que rejeitaremos a hipótese nula da moeda equilibrada e concordaremos que a probabilidade
de sair CARA é de 60%, se obtivermos 3 ou 4 CARAS em 𝑛 = 4 lançamentos.

O poder do teste corresponde à probabilidade desse evento, considerando o parâmetro verdadeiro (ou o
parâmetro indicado na hipótese nula) 𝐻1 : 𝑝 = 0,6:

                                          1 − 𝛽 = 𝑃[𝑌 = 3] + 𝑃[𝑌 = 4]

Aqui, estamos utilizando a variável 𝑌 (em vez de 𝑋) para lembrar que iremos considerar o parâmetro indicado
na hipótese alternativa (𝑝 = 0,6, logo 𝑞 = 1 − 0,6 = 0,4).

A probabilidade de obtermos 3 CARAS para esse parâmetro é2:

                          𝑃[𝑌 = 3] = 𝐶4,3 . 0,63 . 0,41 = 4 × 0,216 × 0,4 = 0,3456

E a probabilidade de obtermos 4 CARAS é:

                          𝑃[𝑌 = 4] = 𝐶4,4 . 0,64 . 0,40 = 1 × 0,1296 × 1 = 0,1296

2
  Aqui, temos outro caso especial de combinação: a combinação de 1 elemento (que é o mesmo que a combinação de 𝑛 − 1
elementos) é igual a 𝑛. Isso pode ser verificado aplicando-se a fórmula da combinação:
                                                      𝑛!        𝑛 × (𝑛 − 1)!
                                        𝐶𝑛,1 =                =              =𝑛
                                                 (𝑛 − 1)! × 1! (𝑛 − 1)! × 1
                                                   𝑛!              𝑛 × (𝑛 − 1)! 𝑛
                             𝐶𝑛,𝑛−1 =                            =             = =𝑛
                                        [𝑛 − (𝑛 − 1)]! × (𝑛 − 1)! 1! × (𝑛 − 1)! 1


---

O poder do teste é a soma:

                             1 − 𝛽 = 0,3456 + 0,1296 = 0,4752 = 47,52%

E a probabilidade do erro tipo II é complementar:

                          𝛽 = 1 − (1 − 𝛽) = 1 − 0,4752 = 0,5248 = 52,48%

(VUNESP/2021 – CFO-QC) Acredita-se que 75% dos habitantes de uma cidade são a favor da implantação de
um projeto. Para testar se esta hipótese é verdadeira, uma amostra aleatória, com reposição, de tamanho 4
é extraída da população e estabelece- se uma regra tal que se na amostra o número de habitantes favoráveis
à implantação do projeto for maior que 1 então a hipótese é verdadeira.
A probabilidade de se cometer um erro tipo I é, então, igual a
a) 3/64
b) 27/128
c) 27/64
d) 81/256
e) 13/256
Comentários:
O enunciado informa que a hipótese nula a ser testada é 𝐻𝑜 : 𝑝 = 75% e que essa hipótese não será rejeitada
se for encontrado mais que 1 indivíduo favorável na amostra de tamanho 𝑛 = 4.
Assim, a probabilidade do erro tipo I (𝛼), que corresponde à probabilidade de rejeitar a hipótese nula, dado
que ela é verdadeira, é a probabilidade de obtermos 0 ou 1 indivíduo favorável, considerando o parâmetro
indicado na hipótese nula:
                                        𝛼 = 𝑃[𝑋 = 0] + 𝑃[𝑋 = 1]
A probabilidade de obtermos 𝑘 = 0 indivíduo favorável, em uma amostra de tamanho 𝑛 = 4, considerando
            3               3   1
𝑝 = 0,75 = 4 (logo, 𝑞 = 1 − 4 = 4), é:

                                             3 0 1 4             1   1
                            (     )
                           𝑃 𝑋 = 0 = 𝐶4,0 . ( ) . ( ) = 1 × 1 ×    =
                                             4     4            256 256

E a probabilidade de obtermos 𝑘 = 1 indivíduo favorável é:

                                                3 1 1 3       3 1   12
                             𝑃(𝑋 = 1) = 𝐶4,1 . ( ) . ( ) = 4 × ×  =
                                                4     4       4 64 256


---

Assim, a probabilidade do erro tipo II é a soma:
                                              1     12      13
                                          𝛼=     +      =
                                             256 256 256
Obs: A questão não cobrou, mas vale observar que esse teste é unilateral, pois a rejeição ocorre apenas se o
número de indivíduos for menor que o limite.
Gabarito: E


(2014 – EBSERH-UFMG) Suponha X uma variável aleatória de Bernoulli (p). Uma amostra de tamanho n = 4
foi utilizada para testar as hipóteses H0: p=1/4 contra H1: p=3/4. Se o teste rejeita H0 se, e somente se,
ocorrerem 4 sucessos na amostra, calcule as probabilidades dos erros Tipo I e Tipo II.
a) 𝛼 = 0,6835, 𝛽 = 0,0039062
b) 𝛼 = 0,05, 𝛽 = 0,95
c) 𝛼 = 0,0039062, 𝛽 = 0,6835
d) 𝛼 = 0,05, 𝛽 = 0,1
e) 𝛼 = 0,0039062, 𝛽 = 0,996094
Comentários:
O enunciado informa que a hipótese nula será rejeitada se ocorrerem 4 sucessos na amostra de tamanho
𝑛 = 4.
A probabilidade do erro tipo I (rejeitar a hipótese nula sendo ela verdadeira) é a probabilidade obtermos
                                                                          1
𝒌 = 𝟒 sucessos, considerando o parâmetro indicado na hipótese nula 𝑝 = 4 = 0,25 (𝑞 = 1 − 𝑝 = 0,75):

                𝛼 = 𝑃 [𝑋 = 4] = 𝐶4,4 . 0,254 . 0,750 = 1 × 0,00390625 × 1 ≅ 0,00390625

E a probabilidade do erro tipo II (não rejeitar a hipótese nula sendo ela falsa) é a probabilidade de não
obtermos 𝑘 = 4 sucessos (probabilidade complementar), com base no parâmetro da hipótese alternativa:
                                            𝛽 = 1 − 𝑃[𝑌 = 4]
                                                                  3
A probabilidade de obtermos 𝑘 = 4 sucessos, considerando 𝑝∗ = 4 = 0,75 (logo, 𝑞∗ = 1 − 𝑝 = 0,25) é:

                  𝑃[𝑌 = 4] = 𝐶4,4 . 0,754 . 0,250 = 1 × 0,31640625 × 1 = 0,31640625

E a probabilidade do erro tipo II é a probabilidade complementar:
                                  𝛽 = 1 − 0,31640625 = 0,68359375
Gabarito: C


---

                TESTES DE HIPÓTESES PARA A VARIÂNCIA
Nos testes de hipóteses para a variância, verificamos se a variância indicada na hipótese inicial 𝜎 2 deve ser
rejeitada ou não, com base na variância amostral observada 𝑠 2 .
                                                                                            𝒏−𝟏
Para esse teste, consideramos que o estimador da variância 𝑠 2 , multiplicado pelo fator ( 𝝈𝟐 ), segue uma
distribuição qui-quadrado com 𝒏 − 𝟏 graus de liberdade.
Assim, a estatística do teste é:

                                                        𝒏−𝟏
                                            𝓧𝟐𝒏−𝟏 = ( 𝝈𝟐 ) 𝒔𝟐

Em que 𝑛 é o tamanho da amostra.
A variância amostral é calculada como:

                                             2
                                                ∑𝑛𝑖=1( 𝑋𝑖 − 𝑋̅)2
                                            𝑠 =
                                                     𝑛−1
E o valor da variância populacional 𝝈𝟐 é o parâmetro indicado na hipótese nula.


Por exemplo, supondo que a hipótese nula seja de que a variância populacional é 𝐻𝑜 : 𝜎 2 = 2 e que, a partir
de uma amostra de tamanho 𝑛 = 5, tenha sido observada a variância amostral 𝑠 2 = 3.
A estatística desse teste é:

                                     2
                                                 5−1
                                    𝒳5−1 =(          )×3 = 2×3= 6
                                                  2

Esse valor deve ser comparado ao valor crítico tabelado da distribuição qui-quadrado 𝒳𝐶2 , considerando o
nível de significância 𝛼 desejado, o tipo de teste (bilateral ou unilateral) e o número de graus de liberdade
𝒏 − 𝟏.

Uma diferença relevante em relação aos outros testes de hipóteses é que a distribuição qui-quadrado é
positiva e assimétrica. Assim, o limite superior tabelado é diferente do limite inferior tabelado,
diferentemente dos outros testes, em que ambos apresentavam o mesmo módulo.

Para um teste bilateral, com 𝛼 = 10%, por exemplo, teríamos as seguintes regiões de críticas e de rejeição:

                                            90%
                                      5%               5%
                                      2               2
                                     𝒳𝐼𝑁𝐹            𝒳𝑆𝑈𝑃


---

Para calcular os valores críticos da distribuição qui-quadrado, a partir do nível de significância, vamos
considerar as probabilidades indicadas na tabela a seguir para n – 1 = 4 graus de liberdade.
 𝑃(𝒳42 < 𝑥)    0,005   0,01   0,025    0,05   0,1     0,25    0,5    0,75      0,9   0,95   0,975 0,99 0,995
    𝑥           0,21   0,30    0,48    0,71   1,06    1,92    3,36   5,39     7,78   9,49   11,14 13,28 14,86

                                      2
Precisamos do valor crítico inferior 𝒳𝐼𝑁𝐹 que delimita uma probabilidade 𝑃(𝒳42 < 𝒳𝐼𝑁𝐹
                                                                                  2 )
                                                                                      = 0,05. Pela
                          2
tabela, observamos que 𝒳𝐼𝑁𝐹 = 0,71.

                                   2
Ademais, o valor crítico superior 𝒳𝑆𝑈𝑃 delimita uma probabilidade 𝑃(𝒳42 < 𝒳𝑆𝑈𝑃
                                                                           2 )
                                                                               = 0,95. Pela tabela,
                  2
observamos que 𝒳𝑆𝑈𝑃 = 9,49.

Portanto, rejeitaremos a hipótese nula se a estatística do teste for 𝒳𝑇2 < 0,71 ou 𝒳𝑇2 > 9,49. Assim, para
𝒳𝑇2 = 6, não rejeitamos a hipótese nula.

(FCC/2018 – TRT/SP) Acredita-se que a variância (σ²) de uma população, normalmente distribuída e de
tamanho infinito, seja igual a 3,6. Para verificar se esta variância é inferior a 3,6, a um nível de significância
α, foram formuladas as hipóteses H0: σ² = 3,6 (hipótese nula) e H1: σ² < 3,6 (hipótese alternativa) utilizando
o teste qui-quadrado. Uma amostra aleatória de tamanho 10 foi extraída da população obtendo-se uma
variância amostral igual a 1,5.
                                       Dados: Valores críticos qui-quadrado

A conclusão é que ao nível de significância de
a) 5% aceita-se H0 e o qui-quadrado calculado foi igual a 2,4
b) 10% não se pode rejeitar H0 e o qui-quadrado calculado foi igual a 3,75
c) 2,5% rejeita-se H0 e o qui-quadrado calculado foi igual a 3,75
d) 2,5% aceita-se H0, ao nível de significância de 5% rejeita-se H0 e o qui-quadrado calculado foi igual a 2,4
e) 10% rejeita-se H0, ao nível de significância de 5% aceita-se H0 e o qui-quadrado calculado foi igual a 3,75
Comentários:
Trata-se de um teste de hipóteses para a variância, em que devemos utilizar a distribuição qui-quadrada.
Sendo a hipótese nula H0: σ² = 3,6 e a hipótese alternativa H1: σ² < 3,6, então temos um teste é unilateral à
esquerda, conforme ilustrado a seguir:


---

                                              1−𝛼
                                        𝛼
                                        2
                                       𝒳𝐼𝑁𝐹
O enunciado informa que o tamanho amostral é n = 10 e que a variância amostral observada é s2 = 1,5.
Considerando, ainda, que o parâmetro da hipótese nula é σ² = 3,6, podemos calcular a estatística do teste:
                                                      𝑛−1 2
                                              𝒳𝑛−1 2 = (    )𝑠
                                                        𝜎2
                                                 10 − 1
                                      𝒳𝑛−1 2 = (       ) × 1,5 = 3,75
                                                  3,6
Pelos valores fornecidos da distribuição qui-quadrado para n – 1 = 9 graus de liberdade, podemos observar
                                                              2
que para 1 − 𝛼 = 90% (ou seja, 𝛼 = 10%), o valor crítico é 𝒳𝐼𝑁𝐹   = 4,17.
Como que a estatística do teste 𝒳𝑇2 = 3,75 é inferior ao valor crítico mínimo, então rejeitamos a hipótese
nula para um nível de significância 𝛼 = 10%.
                                                                 2
Para 1 − 𝛼 = 95% (ou seja, 𝛼 = 5%), o valor crítico mínimo é 𝒳𝐼𝑁𝐹    = 3,33, portanto, inferior ao resultado
do teste. Logo, para o nível de significância 𝛼 = 5% (ou menos), a hipótese nula não é rejeitada.
Gabarito: E.


(FGV 2017/MPE-BA) Para testar a variância de uma medida, um estatístico resolve usar a distribuição Qui-
Quadrado, dadas as probabilidades:
       2                        2
𝑃(4 < 𝒳10 < 18) = 0,90 e 𝑃(5 < 𝒳11 < 19) = 0,90
As hipóteses são as seguintes:
𝐻0 : 𝜎 2 = 15 contra 𝐻𝑎 : 𝜎 2 ≠ 15
A partir de uma amostra com 11 observações, conclui-se que:
a) se 𝑠̂ 2 = 7 rejeita-se a hipótese nula 𝐻0 com 𝛼 = 10%;
b) se 𝑠̂ 2 = 5,5 não é possível rejeitar 𝐻0 com 𝛼 = 10%;
c) se 𝑠̂ 2 = 27,25 é possível rejeitar 𝐻0 com 𝛼 = 10%;
d) se 𝑠̂ 2 = 28 não é possível rejeitar 𝐻0 com 𝛼 = 10%;
e) se 𝑠̂ 2 = 27,75 não é possível rejeitar 𝐻0 com 𝛼 = 10%.
Comentários:
A questão trata de um teste bilateral para a variância.
Podemos observar que todas as alternativas consideram um nível de significância 𝛼 = 10% (nível de
confiança, 1 − 𝛼 = 90%), conforme ilustrado a seguir:


---

                              𝛼⁄ = 5%                       𝛼⁄ = 5%
                                2                             2
                                            1−𝛼
                                            = 90%

                                        2
                                       𝒳𝐼𝑁𝐹             2
                                                       𝒳𝑆𝑈𝑃
Considerando que o tamanho da amostra é n = 11, então, devemos considerar a distribuição com n – 1 = 10
graus de liberdade.
                               2                                                         2
O enunciado informa que 𝑃(4 < 𝒳10 < 18) = 0,90, ou seja, que o valor crítico inferior é 𝒳𝐼𝑁𝐹 = 4 e que o
            2
superior é 𝒳𝑆𝑈𝑃 = 18.
Assim, rejeitaremos a hipótese nula se a estatística do teste for 𝒳𝑇2 < 𝒳𝐼𝑁𝐹
                                                                         2
                                                                             = 4 ou 𝒳𝑇2 > 𝒳𝑆𝑈𝑃
                                                                                           2
                                                                                               = 18.
A estatística do teste para 𝜎 2 = 15 e 𝑛 = 11, é calculada como:

                                           𝑛−1 2       11 − 1 2 2
                                 𝒳𝑇2 = (       ) 𝑠 = (       ) 𝑠 = × 𝑠2
                                            𝜎2           15       3

Em relação à alternativa A, a estatística do teste para 𝑠̂ 2 = 7 é:

                                                      2
                                              𝒳𝑇2 =     × 7 ≅ 4,66
                                                      3

Como 𝒳𝑇2 > 𝒳𝐼𝑁𝐹
            2
                = 4, não rejeitamos a hipótese nula, logo, a alternativa A está errada.
Em relação à alternativa B, a estatística do teste para 𝑠̂ 2 = 5,5 é:

                                                      2
                                              𝒳𝑇2 =     × 5,5 ≅ 3,66
                                                      3

Como 𝒳𝑇2 < 𝒳𝐼𝑁𝐹
            2
                = 4, rejeitamos a hipótese nula, logo, a alternativa B está errada.
Em relação à alternativa C, a estatística do teste para 𝑠̂ 2 = 27,25 é:

                                                   2
                                           𝒳𝑇2 =     × 25,25 ≅ 18,16
                                                   3

Como 𝒳𝑇2 > 𝒳𝑆𝑈𝑃
            2
                = 18, rejeitamos a hipótese nula, logo, a alternativa C está certa.
Podemos observar que as alternativas D e E informam valores ainda maiores de 𝑠̂ 2 , que estarão associados
a valores ainda maiores para a estatística do teste.
Por isso, para esses resultados, a hipótese nula deve ser rejeitada, ao contrário do que afirmam as
alternativas, logo, elas estão erradas.
Gabarito: C


---

Comparação das Variâncias de duas populações

O objetivo desse teste, também chamado de teste de homogeneidade de 2 variâncias, é comparar as
variâncias de duas populações normais e independentes, 𝜎𝐴2 e 𝜎𝐵2 .
Em geral, o objetivo é verificar se as variâncias são iguais (hipótese nula) ou não (hipótese alternativa).
No teste bilateral, a hipótese alternativa é de que as variâncias são diferentes:

                                                 𝐻0 : 𝜎𝐴2 = 𝜎𝐵2
                                                 𝐻1 : 𝜎𝐴2 ≠ 𝜎𝐵2
Para o teste unilateral à direita, a hipótese alternativa é de que a variância da população A é maior do que
a da B:

                                                 𝐻1 : 𝜎𝐴2 > 𝜎𝐵2
E para o teste unilateral à esquerda, a hipótese alternativa é de que a variância da população A é menor do
que a da B:

                                                 𝐻1 : 𝜎𝐴2 < 𝜎𝐵2


Para realizar o teste, obtemos uma amostra de cada população e calculamos as suas variâncias amostrais 𝑠𝐴2
e 𝑠𝐵2 , em que dividimos a soma dos quadrados dos desvios por 𝒏 − 𝟏.
                                                   ∑𝑛𝑖=1( 𝑋𝑖 − 𝑋̅)2
                                            𝑠2 =
                                                        𝒏−𝟏


                                                                                                𝑠2
A estatística do teste é a razão entre a variância amostral e a variância populacional para A 𝐴2 , dividida pela
                                                                                                𝜎𝐴
                                                                       2
                                                                      𝑠𝐵
razão entre a variância amostral e a variância populacional para B 𝜎2 :
                                                                      𝐵

                                                       𝑠𝐴2
                                                      𝜎2
                                                   𝐹 = 𝐴2
                                                       𝑠𝐵
                                                      𝜎𝐵2


Sob a hipótese nula 𝐻0 : 𝜎𝐴2 = 𝜎𝐵2 , podemos "cancelar" 𝜎𝐴2 e 𝜎𝐵2 e a estatística do teste se torna simplesmente:

                                                          𝒔𝟐𝑨
                                                    𝑭 = 𝒔𝟐
                                                           𝑩


---

Por exemplo, vamos supor que, para uma amostra da população A de tamanho 𝒏𝑨 = 𝟏𝟔, a soma dos
                      𝒏𝑨        ̅ )𝟐 = 𝟕𝟓; e que para uma amostra da população B de tamanho 𝒏𝑩 = 𝟗,
quadrados tenha sido ∑𝒊=𝟏( 𝑿𝒊 − 𝑿
                                  𝒏𝑩        ̅ )𝟐 = 𝟑𝟐.
a soma dos quadrados tenha sido ∑𝒊=𝟏 ( 𝑿𝒊 − 𝑿

Para calcular a estatística do teste, o primeiro passo é calcular as variâncias amostrais. Para A, a variância
amostral é:
                                            ∑𝑛𝑖=1
                                               𝐴
                                                 ( 𝑋𝑖 − 𝑋̅ )2     75    75
                                    𝑠𝐴2 =                     =       =    =5
                                                 𝑛𝐴 − 1         16 − 1 15
E para B, a variância amostral é:
                                            ∑𝑛𝑖=1
                                               𝐵
                                                 ( 𝑋𝑖 − 𝑋̅)2    32   32
                                    𝑠𝐵2 =                    =     =    =4
                                                 𝑛𝐵 − 1        9−1   8
A estatística desse teste, sob a hipótese nula 𝐻0 : 𝜎𝐴2 = 𝜎𝐵2 , é a razão entre essas variâncias amostrais:
                                                        5
                                                   𝐹=     = 1,25
                                                        4


Essa estatística segue distribuição F de Snedecor (por isso, podemos chamar o teste de teste F), com 𝒏𝑨 − 𝟏
graus de liberdade no numerador e 𝒏𝑩 − 𝟏 graus de liberdade no denominador. Afinal, essa distribuição
consiste na razão de duas variáveis independentes com distribuição qui-quadrado, dividida pelos respectivos
graus de liberdade, que corresponde justamente à definição da variável F-Snedecor.
Portanto, o valor observado da estatística deve ser comparado ao valor tabelado da distribuição F-Snedecor,
considerando o número de graus de liberdade do numerador (𝑛𝐴 − 1) e o número de graus de liberdade do
denominador (𝑛𝐵 − 1); o nível de significância desejado; e o tipo de teste (bilateral ou unilateral).


Vamos supor que, para o nosso exemplo, com 𝑛𝐴 = 16 e 𝑛𝐵 = 9, o nível de significância seja 𝛼 = 10% e
que o teste seja unilateral à direita, em que rejeitaremos a hipótese nula, se a estatística observada for
superior ao valor crítico tabelado.

A tabela a seguir apresenta os valores da distribuição de F-Snedecor tal que 𝑃(𝐹𝑛,𝑚 < 𝑓) = 90%, em que 𝑛
é o número de graus de liberdade do numerador e 𝑚 é o número de graus de liberdade de denominador:


---

Podemos observar que o valor da distribuição de F-Snedecor com 𝑛 = 𝑛𝐴 − 1 = 15 graus de liberdade no
numerador e 𝑚 = 𝑛𝐵 − 1 = 8 graus de liberdade no denominador é 𝑓90%,15,8 = 2,46.

A estatística e o valor crítico do teste estão ilustrados a seguir:

                                                                  𝛼 = 10%


                                                       1,25    2,46

Considerando que a estatística do teste é menor que o limite superior crítico, não rejeitamos a hipótese nula
de que as variâncias das populações são iguais.

         Normalmente, as tabelas apresentam valores para a cauda superior, ou seja, valores que
         delimitam uma probabilidade 𝑃 (𝐹 < 𝑓𝐶 ) de 90% ou mais.

         Para testes bilaterais ou unilaterais à esquerda, em que precisamos dos valores que
         delimitam uma probabilidade 𝑃 (𝐹 < 𝑓𝐶 ) de 10% ou menos, é importante conhecer a
         seguinte a relação:

                                                                 𝟏
                                               𝑭𝟏−𝜶,𝒏,𝒎 = 𝑭
                                                                𝜶,𝒎,𝒏

Por exemplo, vamos supor que o nosso teste (com os mesmos tamanhos amostrais) seja agora bilateral, com
o mesmo nível de significância 𝛼 = 10%.
                           𝛼                                            𝛼
Nessa situação, teremos 2 = 5% abaixo do limite crítico inferior e          = 5% acima do limite crítico superior,
                                                                        2
conforme ilustrado a seguir.

                               𝛼⁄ = 5%                        𝛼⁄ = 5%
                                 2                              2
                                             1−𝛼
                                             = 90%

                                        2
                                       𝒳𝐼𝑁𝐹            2
                                                      𝒳𝑆𝑈𝑃


---

A tabela a seguir apresenta os valores da distribuição F de Snedecor tal que 𝑃(𝐹𝑛,𝑚 < 𝑓) = 95%.
m\n

Para definirmos o limite crítico superior, utilizamos o valor da distribuição com 𝑛 = 𝑛𝐴 − 1 = 15 graus de
liberdade no numerador e 𝑚 = 𝑛𝐵 − 1 = 8 graus de liberdade no denominador.

Podemos observar que 𝑓95%,15,8 = 3,22, que corresponde ao nosso limite crítico superior.

E para o limite crítico inferior, podemos utilizar essa mesma tabela, buscando 𝑛 = 8 graus de liberdade no
numerador e 𝑚 = 15 graus de liberdade no denominador (inversão dos graus de liberdade).

Podemos observar que 𝑓95%,8,15 = 2,64. Assim, o limite crítico inferior para o nosso teste é:
                                                       1              1
                                      𝑓5%,15,8 =                =        ≅ 0,38
                                                    𝑓95%,8,15       2,64

Os limites críticos desse teste bilateral estão ilustrados a seguir:

                                    𝛼                                  𝛼
                                      = 5%                               = 5%
                                    2                                  2


                                             0,38                   3,22

         Quando desejamos comparar os dois parâmetros, média e variância, de duas populações,
         aplicamos primeiro o teste de variâncias e, com base no seu resultado e na decisão por
         rejeitar ou não a hipótese nula, aplicamos o teste de comparação de médias.


---

Podemos realizar outros tipos de comparações de variâncias, diferentes do teste de homogeneidade, em
que a hipótese nula é 𝐻0 : 𝜎𝐴2 = 𝜎𝐵2 .
Podemos verificar, por exemplo, se a variância da população A é o dobro da variância da população B, sendo
a hipótese nula:

                                                   𝐻0 : 𝜎𝐴2 = 2. 𝜎𝐵2
A estatística do teste, considerando essa hipótese nula, será:
                                                𝑠𝐴2  𝑠𝐴2
                                                𝜎𝐴2
                                                    2. 𝜎𝐵2  𝑠𝐴2
                                              𝐹= 2 = 2 =
                                                𝑠𝐵   𝑠𝐵    2. 𝑠𝐵2
                                                  2    2
                                                𝜎𝐵   𝜎𝐵


Para o nosso exemplo, em que obtivemos 𝑠𝐴2 = 5 e 𝑠𝐵2 = 4, a estatística do teste sob a nova hipótese nula é:
                                                    5  5
                                              𝐹=      = = 0,625
                                                   2×4 8


Os demais procedimentos permanecerão os mesmos, sendo necessário comparar esse resultado ao valor
tabelado da distribuição de F-Snedecor, com 𝑛 = 𝑛𝐴 − 1 graus de liberdade no numerador, 𝑚 = 𝑛𝐵 − 1
graus de liberdade no denominador, considerando o nível de significância e o tipo de teste (bilateral ou
unilateral).

(FGV/2022 – TJDFT) Um analista é contratado para analisar dados de volume de suco de laranja produzido
em duas fábricas da mesma empresa. Suponha que sejam medidos 16 lotes na fábrica A e 61 lotes na fábrica
B, e que as médias amostrais tenham sido 𝐴̅ = 104 e 𝐵̅ = 112, com somas de desvios quadráticos em
relação à média 𝑆𝐴2 = 40.000 e 𝑆𝐵2 = 100.000, respectivamente.
A chefia quer saber se uma fábrica tem menor variabilidade em relação à outra. O teste a ser usado e o valor
da sua estatística de teste são, respectivamente:
a) teste T e o valor da estatística é -1,6.
b) teste T e o valor da estatística é -0,8.
c) teste F e o valor da estatística é -0,8.
d) teste F e o valor da estatística é 0,8.
e) teste F e o valor da estatística é 1,6.


---

Comentários:
O objetivo do teste descrito no enunciado é comparar a variabilidade de uma população em relação à outra.
Para isso, utilizamos o teste F, pois segue distribuição de F-Snedecor.
Sob a hipótese nula 𝐻0 : 𝜎𝐴2 = 𝜎𝐵2 , a estatística do teste consiste na razão entre as variâncias amostrais:
                                                      𝑠𝐴2
                                                    𝐹= 2
                                                      𝑠𝐵
Por sua vez, a variância amostral é a razão entre a soma dos quadrados e 𝑛 − 1:
                                             ∑𝑛𝑖=1( 𝑋𝑖 − 𝑋̅)2
                                            𝑠2 =
                                                  𝑛−1
Embora o enunciado tenha representado por 𝑆 2 , foram fornecidas as somas dos desvios quadráticos em
relação à média, ou seja, ∑𝑛𝑖=1( 𝑋𝑖 − 𝑋̅)2 .
Assim, precisamos calcular as variâncias amostrais, dividindo cada resultado por 𝑛 − 1.
                               𝑛𝐴
Em relação à amostra A, temos ∑𝑖=1 ( 𝑋𝑖 − 𝑋̅)2 = 40.000 e 𝑛𝐴 = 16, logo a variância amostral é:
                                                   40.000 40.000
                                           𝑠𝐴2 =          =
                                                   16 − 1   15
                               𝑛𝐵
Em relação à amostra B, temos ∑𝑖=1 ( 𝑋𝑖 − 𝑋̅)2 = 100.000 e 𝑛𝐵 = 61, logo a variância amostral é:
                                                 100.000 100.000
                                         𝑠𝐵2 =           =
                                                  61 − 1   60
E a estatística é a razão:
                                 40.000
                                   15     40.000     60         4
                             𝐹=         =        ×         = 4×    = 1,6
                                100.000     15     100.000      10
                                   60
Gabarito: E

                                        Testes para a Variância

                                                                             𝑛−1
         Distribuição qui-quadrado com 𝒏 − 𝟏 graus de liberdade: 𝒳 2 = ( 𝜎2 ) 𝑠 2

                                        Comparação de 2 populações:

                                                                  𝑠2
         Estatística do teste sob a hipótese nula 𝜎𝐴2 = 𝜎𝐵2 : 𝐹 = 𝐴2
                                                                  𝑠𝐵


---

                                                  P-VALOR
O p-valor, também denominado nível descritivo ou probabilidade de significância, é uma outra forma de
analisar o resultado do teste de hipóteses, para decidirmos se vamos aceitar ou rejeitar a hipótese nula, em
vez do nível de significância 𝛼.

O p-valor é a probabilidade de obter um valor mais extremo ou igual ao resultado observado, considerando
a hipótese nula como verdadeira. Em seguida, comparamos o p-valor com o nível de significância 𝜶 para
decidir se vamos rejeitar ou não a hipótese nula.

Vamos supor que estejamos testando a hipótese nula 𝐻𝑜 : 𝜇 = 2 em um teste unilateral à esquerda e que a
média amostral observada tenha sido 𝑋̅ = 1,85.

Sabendo que o p-valor é a probabilidade de obter um valor mais extremo ou igual, neste caso, ele é a
probabilidade de obter um valor igual ou inferior a 𝑋̅ = 1,85, pelo fato de a região crítica estar à esquerda:

                                     p-valor

                                        𝑋̅ = 1,85   𝜇=2

Se o p-valor for menor que o nível de significância 𝜶, então o resultado do teste está na região crítica e a
hipótese nula deve ser rejeitada. Caso contrário, a hipótese nula não é rejeitada.


                                         𝜶


                                   p-valor


                                      𝑋̅ = 1,85     𝜇=2

                                         p-valor < 𝜶 → Rejeitar 𝑯𝟎

                                      p-valor ≥ 𝜶 → Não Rejeitar 𝑯𝟎


---

Essa análise é chamada de análise da significância estatística e pode ser realizada para qualquer tipo de
teste de hipóteses.

Quando p < 𝜶, ou seja, quando a hipótese é rejeitada, dizemos que o resultado é estatisticamente
significante ou que há significância estatística (ou, ainda, evidência estatística).

Para calcular o p-valor do resultado observado (no caso, 𝑋̅ = 1,85), primeiro calculamos a estatística do
teste. Tratando-se de um teste para a média de uma população normal com variância conhecida (Teste Z),
fazemos:

                                                           𝑥̅ − 𝜇
                                                      𝑧=      𝜎
                                                             √𝑛
No nosso exemplo, temos 𝑥̅ = 1,85 e 𝜇 = 2. Supondo que a variância populacional é 𝜎 = 1 e que o tamanho
da amostra seja 𝑛 = 100, a estatística do teste é:
                                   𝑥̅ − 𝜇   1,85 − 2 −0,15 −0,15
                              𝑧=      𝜎   =         =     =      = −1,5
                                               1      1     0,1
                                     √𝑛      √100     10

Agora, para calcular o p-valor, recorremos à tabela normal padrão. A tabela inserida parcialmente a seguir
apresenta a probabilidade 𝑃(0 < 𝑍 < 𝑧), como ilustrado no gráfico anterior à tabela.

    Z       0,00      0,01          0,02      0,03         0,04      0,05     0,06     0,07     0,08     0,09
    ...                                                     ...
   1,4     0,4192    0,4207        0,4222    0,4236     0,4251      0,4265   0,4279   0,4292   0,4306   0,4319
   1,5     0,4332    0,4345        0,4357    0,4370     0,4382      0,4394   0,4406   0,4418   0,4429   0,4441
   1,6     0,4452    0,4463        0,4474    0,4484     0,4495      0,4505   0,4515   0,4525   0,4535   0,4545
    ...                                                     ...

Podemos observar que 𝑃(0 < 𝑍 < 1,5) = 0,4332. Pela simetria da normal padrão, temos:
                                            𝑃(−1,5 < 𝑍 < 0) = 0,4332
E a probabilidade de 𝑃 (𝑍 < −1,5) é dada pela diferença:
               𝑃 (𝑍 < −1,5) = 𝑃(𝑍 < 0) − 𝑃(−1,5 < 𝑍 < 0) = 0,5 − 0,4332 = 0,0668
                                                      𝑝 = 6,68%


---

Assim, se o nível de significância for 𝛼 = 5%, teremos 𝒑 > 𝜶 e, então, não rejeitaremos a hipótese nula:


                                    p-valor

                                 𝜶 = 𝟓%

                                              𝑧𝑡 = −1,5


Porém, se o nível de significância for 𝛼 = 10%, teremos 𝒑 < 𝜶, e devemos rejeitar a hipótese nula.


                                    𝜶 = 𝟏𝟎%


                                    p-valor


                                      𝑧𝑡 = −1,5

Essa regra de rejeição da hipótese nula se 𝒑 < 𝜶 ou não, caso contrário, vale para todos os tipos de teste
(bilateral, unilateral à esquerda ou unilateral à direita). A diferença está na região associada ao p-valor.

Para o teste unilateral à direita, o p-valor é a probabilidade de se observar um valor maior que o resultado
observado, porque a região crítica está à direita:

                                                                    p-valor

                                                          𝜇    𝑧𝑡


E para o teste bilateral, o p-valor se refere aos dois extremos.

Considerando o mesmo exemplo em que a estatística do teste foi zt = -1,5, o p-valor é a soma das
probabilidades 𝑃(𝑍 < −1,5) e 𝑃(𝑍 > 1,5):

                                   p-valor                          p-valor


                                         𝑧 = −1,5             𝑧 = 1,5


---

Considerando a simetria da distribuição normal, as probabilidades 𝑃(𝑍 < −𝑧𝑡 ) e 𝑃(𝑍 > 𝑧𝑡 ) são iguais e,
assim, o p-valor em um teste bilateral considerando será o dobro do p-valor em um teste unilateral, para
essa distribuição.

(2019 – Prefeitura de Cruzeiro do Sul/AC – Adaptada) Com relação a Testes de Hipóteses realizados sobre
uma amostra que nos auxiliam a aceitar ou rejeitar uma hipótese estatística, julgue a afirmativa a seguir.
Se um teste de hipótese tiver valor-p associado igual a 0,02, podemos rejeitar a hipótese nula com nível de
significância a 5%, mas não a rejeitaríamos a um nível de significância de 0,1%.
Comentários:
A hipótese nula deve ser rejeitada se p-valor < nível de significância 𝜶.
Sendo p-valor = 0,02 = 2%, então se 𝛼 = 5%, teremos:
                                                   p-valor < 𝛼
Nesse caso, rejeitamos a hipótese nula.
E se 𝛼 = 0,1%, teremos:
                                                   p-valor > 𝛼
Nessa situação, não rejeitamos a hipótese nula. Portanto, a afirmativa está correta.
Resposta: Certo.


(CESPE/2017 – TCE/PE) Para avaliar se a proporção p de itens defeituosos enviados por um fornecedor estava
acima do valor pactuado de 0,025, um analista, a partir de uma amostra aleatória de itens enviada por esse
fornecedor, testou a hipótese nula 𝐻𝑜 : 𝑝 ≤ 0, 025 contra a hipótese alternativa 𝐻1 : 𝑝 > 0, 025, utilizando
nível de significância 𝛼 = 1%.
A respeito dessa situação hipotética, julgue o seguinte item.
Caso o P-valor do teste efetuado pelo analista seja igual a 0,005, é correto concluir que a afirmação proposta
na hipótese nula seja verdadeira.
Comentários:
Para sabermos se devemos rejeitar ou não a hipótese nula, devemos comparar o p-valor e o nível de
significância 𝛼.
O enunciado informa que 𝛼 = 1% e o item informa que p-valor = 0,005 = 0,5%. Ou seja, temos:
                                                   p-valor < 𝛼
Portanto, devemos rejeitar a hipótese nula, isto é, concluir que ela é falsa.
Gabarito: Errado.


---

(FGV/2019 – DPE-RJ – Adaptada) A respeito da formulação, execução, decisão e critérios de avaliação de
testes de hipóteses, julgue as afirmativas a seguir:
O p-valor de um teste é o maior valor para o nível de significância a partir do qual a hipótese nula não poderá
ser rejeitada.
Comentários:
O item afirma que o p-valor é o maior valor para o nível de significância.
Porém, o p-valor é a probabilidade de obter um resultado tão ou mais extremo que o valor observado no
teste. Ou seja, ele não define limite algum. Por isso, o item está errado.
Resposta: Errado.


(2019 – Instituto de Desenvolvimento Agropecuário/AM – Adaptada) Sobre testes de significância, julgue
a afirmativa abaixo.
Em testes de hipóteses estatísticos, diz-se que há significância estatística ou que o resultado é
estatisticamente significante quando o p-valor observado é menor que o nível de significância definido para
o estudo.
Comentários:
O teste é dito estatisticamente significante quando p-valor < 𝛼, isto é, quando rejeitamos a hipótese nula,
com base no p-valor calculado.
Resposta: Certo.


---

                                TESTE QUI-QUADRADO
O teste qui-quadrado (ou chi-quadrado) pode ser utilizado para quaisquer tipos de variáveis, incluindo as
variáveis qualitativas em escala nominal (aquelas que não são ordenáveis).

Existem três tipos de teste qui-quadrado, quais sejam de aderência, independência e homogeneidade.

Os testes de aderência verificam se a população pode ser descrita por determinado modelo probabilístico,
isto é, se ela segue determinadas proporções, com base nos resultados observados na amostra. Essas
proporções são indicadas na hipótese nula do teste.

Diferentemente do teste para proporções o teste qui-quadrado permite verificar as proporções em relação
a diversas categorias.

Por exemplo, com o teste qui-quadrado de aderência, podemos verificar se as proporções dos adultos que
concluíram até o ensino fundamental, até o ensino médio ou o ensino superior são as mesmas verificadas
no passado, por exemplo, 20%, 50% e 30%.

Com o teste para proporções seríamos capazes de testar apenas 2 categorias (sucesso ou fracasso) e
teríamos que classificar a população de forma diferente, por exemplo, em pessoas que concluíram o ensino
superior e que não concluíram.

Quando atribuímos proporções a diversas categorias da população, temos uma distribuição multinomial
(generalização da distribuição binomial para diversas categorias). Por isso, é comum utilizarmos o teste qui-
quadrado de aderência para testarmos se a população se adequa a determinado modelo multinomial.

Os testes de independência nos permitem verificar se duas variáveis, isto é, duas características
populacionais, são independentes ou se há alguma influência entre elas.

Por exemplo, poderíamos testar se o nível de educação de uma pessoa influencia ou não em seu salário.
Para isso, dividiríamos a população de acordo com o nível de educação e com seu salário e aplicaríamos o
teste.

A hipótese nula é a de independência, isto é, de que não há influência entre as variáveis.

Os testes de homogeneidade verificam se as distribuições de probabilidade de uma variável são as mesmas
para as subpopulações de interesse (subgrupos da população) ou não.

Por exemplo, podemos verificar se as proporções de adultos que concluíram cada um dos 3 níveis de ensino
são as mesmas em todos as regiões do país.

A hipótese nula é a de homogeneidade, isto é, de que as distribuições são as mesmas.


---

Como os demais testes de hipóteses, o teste qui-quadrado é conduzido assumindo a hipótese nula como
verdadeira. Calcula-se, então, a estatística do teste (também chamado de qui-quadrado observado):

                                                      (𝑶𝒊 −𝑬𝒊 )𝟐
                                            𝓧𝟐 = ∑         𝑬𝒊


Em que 𝑬𝒊 é o valor esperado para o teste, de acordo com a hipótese nula, e 𝑶𝒊 é o valor observado no
teste. Ou seja, devemos calcular o quadrado do desvio entre o valor observado e o valor esperado
(𝑶𝒊 − 𝑬𝒊 )𝟐 , relativizado pelo valor esperado (𝑬𝒊 ) para cada categoria. Em seguida, somamos os resultados
de todas as categorias.

Quanto maior for o desvio em relação ao valor esperado, maior será o resultado da estatística do teste 𝒳 2
e haverá uma menor chance de a hipótese nula ser verdadeira.

O teste será rejeitado se a sua estatística for maior do que o limite crítico definido (que pode ser chamado
qui-quadrado tabelado):


                                                       𝛼


                                       1−𝛼


                                                  𝒳𝐶2 𝒳𝑇2

                                     𝓧𝟐𝒕𝒆𝒔𝒕𝒆 > 𝓧𝟐𝒄𝒓í𝒕𝒊𝒄𝒐 → Rejeitar 𝑯𝟎

                                   𝓧𝟐𝒕𝒆𝒔𝒕𝒆 ≤ 𝓧𝟐𝒄𝒓í𝒕𝒊𝒄𝒐 → Não Rejeitar 𝑯𝟎

Vamos considerar o exemplo dos níveis de educação (até fundamental, até médio e superior), supondo que
as proporções sejam respectivamente, 20%, 50% e 30%, o que consiste na hipótese nula. Vamos supor que,
de uma amostra de 100 pessoas, tenhamos encontrado 15 adultos que estudaram até o nível fundamental,
60 adultos que estudaram até o ensino médio e 25 adultos que chegaram ao ensino superior.

De acordo com a hipótese nula, teríamos os seguintes valores esperados na nossa amostra de 100 pessoas:

                                       Fundamental: 20% x 100 = 20

                                          Médio: 50% x 100 = 50

                                         Superior: 30% x 100 = 30


---

Então, a estatística do teste é a soma das seguintes razões:

                                          (𝑶𝒊 −𝑬𝒊 )𝟐         (𝟏𝟓−𝟐𝟎)𝟐         (−5)2        25       5
                         Fundamental:                    =                =           =         =
                                                𝑬𝒊              𝟐𝟎            20           20       4

                                     (𝑶𝒊 −𝑬𝒊 )𝟐          (𝟔𝟎−𝟓𝟎)𝟐        (10)2       100
                            Médio:                   =               =           =         =2
                                         𝑬𝒊                𝟓𝟎            50           50

                                        (𝑶𝒊 −𝑬𝒊 )𝟐        (𝟐𝟓−𝟑𝟎)𝟐        (−5)2        25       5
                            Superior:                =               = 30          = 30 = 6
                                           𝑬𝒊                𝟑𝟎

                                 5    5 15 + 24 + 10 39 13
                          𝒳2 =     +2+ =            =    =   = 3,25
                                 4    6      12       12   4

E qual é o valor crítico, que nos permite comparar esse resultado?

Para obtermos o valor crítico da tabela da distribuição qui-quadrado, precisamos do nível de significância 𝛼
e do número de graus de liberdade 𝒌, que deve ser calculado como:

                                                 𝒌 = (𝑳 − 𝟏)(𝑪 − 𝟏)

Em que 𝐿 representa o número de linhas de dados e 𝐶 representa o número de colunas de dados da tabela
de contingência, a qual apresenta os valores observados (os campos com títulos ou totais não devem ser
contados).

Ou seja, subtraímos 1 unidade do número de linhas e 1 unidade do número de colunas e multiplicamos os
dois resultados.

Entretanto, essa subtração deve ser feita apenas se houver mais de uma linha/coluna (para não
multiplicarmos por zero). Ou seja, se houver apenas 𝐿 = 1 linha, teremos:

                                                         𝑘 =𝐶−1

E se houver apenas 𝐶 = 1 coluna, teremos:

                                                         𝑘 =𝐿−1

E se não houver tabela, como no nosso exemplo?

Na verdade, as linhas e colunas representam os 2 tipos de categorias (2 variáveis) que podem compor o teste
qui-quadrado. No nosso exemplo, testamos apenas 1 tipo de categoria (1 variável), isto é, o nível de educação
de uma população.


---

Nesse caso, podemos representar o nosso exemplo em uma tabela com 1 linha e 3 colunas de dados (ou 3
colunas e 1 linha), sem contar com os campos dos títulos e do total:

                                Fundamental              Médio             Superior                Total
                Valores
                                     15                      60                  25                100
              observados

Logo, o número de graus de liberdade é:

                                            𝑘 = 𝐶−1= 3−1 =2

Abaixo, inserimos os valores da distribuição qui-quadrado para 2 graus de liberdade. A probabilidade
𝑃(𝒳22 < 𝑥) indicada na tabela corresponde justamente ao nível de confiança 𝟏 − 𝜶:

                                            1−𝛼
                                                             𝛼
                                                         𝑥

 𝑃(𝒳22 < 𝑥)   0,005   0,01   0,025   0,05     0,1        0,25      0,5    0,75        0,9   0,95   0,975   0,99   0,995
    𝑥          0,01   0,02   0,05    0,10     0,21       0,58     1,39    2,77    4,61      5,99    7,38   9,21   10,60


Podemos observar que a estatística do teste 𝓧𝟐 = 𝟑, 𝟐𝟓 está entre 𝑥 = 2,77 (associado ao nível de
confiança 1 − 𝛼 = 0,75, logo ao nível de significância 𝛼 = 0,25) e 𝑥 = 4,61 (associado ao nível de confiança
1 − 𝛼 = 0,90, logo ao nível de significância 𝛼 = 0,10), conforme ilustrado a seguir:

                                                   90%

                                                                         10%
                                             75%

                                                     2,77 𝒳𝑇2 4,61
                                                                  25%


Assim, concluímos que a hipótese nula de que a população segue a proporção de 20%, 50% e 30% seria
rejeitada para 1 − 𝛼 = 0,75 (ou seja, nível de significância 𝛼 = 0,25 ou maior), mas não seria rejeitada para
1 − 𝛼 = 0,90 (nível de significância 𝛼 = 0,10 ou menor).


---

Já o teste qui-quadrado de independência (também chamado de contingência) tem como objetivo verificar
se há uma relação de independência entre duas variáveis (dois tipos de categorias) ou não.

A hipótese nula considera que as variáveis são independentes, ou seja, que as proporções de uma variável
são sempre as mesmas, independentemente da outra variável.

Vamos então verificar hipoteticamente se o nível de educação de uma população afeta o seu salário, por
exemplo. Para isso, vamos classificar os salários em 3 categorias: elevado, intermediário e baixo (embora
possamos classificar em um maior número de categorias, caso necessário).

Vamos supor que, da mesma amostra extraída para o teste anterior, tenha sido verificado em que categoria
salarial as pessoas se encontram, e o resultado está indicado a seguir:

                                     Elevado     Intermediário       Baixo      Total
                    Fundamental          0             5              10         15
                       Médio             5            45              10         60
                      Superior           5            15               5         25
                       Total            10            65              25         100

À direita da tabela, acrescentamos uma coluna com o total das pessoas de cada linha e, abaixo da tabela,
acrescentamos uma linha com o total das pessoas de cada coluna.

Esses campos não fazem parte da tabela para fins do cálculo do grau de liberdade da distribuição, mas eles
são muito importantes para conduzirmos o teste de independência.

Considerando a hipótese nula de que o nível de educação e a faixa salarial são independentes (ou seja, de
que uma variável não influencia na outra), esperamos ter as mesmas proporções totais em todos os campos.

Ou seja, se 15% do total das pessoas possui até o nível fundamental, então se espera que 15% das pessoas
com salários elevados tenham estudado até o nível fundamental, 15% das pessoas com salários
intermediários tenham estudado até o nível fundamental e 15% das pessoas com salários baixos tenham
estudado até o nível fundamental.

Isso significa que, para calcular o valor esperado do campo 𝐸𝑖𝑗 , devemos multiplicar o total da linha 𝑖 pelo
total da coluna 𝑗 e dividir pelo total das pessoas:

                                                   𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                           𝐸𝑖𝑗 =
                                                       𝑡𝑜𝑡𝑎𝑙

Na tabela a seguir, efetuamos esses cálculos para obter os valores esperados de cada campo:


---

                                    Elevado              Intermediário               Baixo            Total

                                 15 × 10            15 × 65                    15 × 25
              Fundamental                = 1,5              = 9,75                     = 3,75             15
                                   100                100                        100
                                 60 × 10                60 × 65                 60 × 25
                 Médio                   =6                     = 39                    = 15              60
                                   100                    100                     100
                                 25 × 10            25 × 65                    25 × 25
                Superior                 = 2,5              = 16,25                    = 6,25             25
                                   100                100                        100
                  Total                  10                      65                   25              100

                                                                                                          (𝑶𝒊 −𝑬𝒊 )𝟐
Agora, calculamos, para cada campo, o quadrado do desvio, dividido pelo valor esperado                                 :
                                                                                                             𝑬𝒊


                                   Elevado                  Intermediário                         Baixo
                              (0 − 1,5)2                (5 − 9,75)2                  (10 − 3,75)2
         Fundamental                     = 1,5                      ≅ 2,314                       ≅ 10,417
                                 1,5                       9,75                         3,75
                              (5 − 6)2                   (45 − 39)2                   (10 − 15)2
              Médio                    ≅ 0,167                      ≅ 0,923                      ≅ 1,667
                                 6                          39                           15
                              (5 − 2,5)2                (15 − 16,25)2                 (5 − 6,25)2
            Superior                     = 2,5                        ≅ 0,096                     = 0,25
                                 2,5                       16,25                         6,25


E somamos todos os valores para obter a estatística do teste:

        𝒳 2 ≅ 1,5 + 0,167 + 2,5 + 2,314 + 0,923 + 0,096 + 10,417 + 1,667 + 0,25 = 19,834

Para esse exemplo, temos uma tabela com C = 3 colunas de dados e L = 3 linhas de dados, logo, o número
de graus de liberdade da distribuição qui-quadrado é:

                                        𝑘 = (𝐿 − 1) × (𝐶 − 1) = 2 × 2 = 4

A tabela abaixo indica as probabilidades 𝑃(𝒳42 < 𝑥) para a distribuição qui-quadrado com 𝑘 = 4 graus de
liberdade.

 𝑃(𝒳42 < 𝑥)    0,005   0,01     0,025    0,05    0,1      0,25        0,5    0,75    0,9   0,95     0,975 0,99 0,995
    𝑥           0,21   0,30      0,48    0,71    1,06     1,92        3,36   5,39   7,78   9,49     11,14 13,28 14,86

Podemos observar que a estatística do teste foi superior a todos os valores de 𝑥, ou seja, ainda que o nível
de significância fosse 𝛼 = 0,005 (nível de confiança 1 − 𝛼 = 0,995), rejeitaríamos a hipótese nula,
concluindo que as variáveis são dependentes, ou seja, que há influência de uma variável na outra.


---

Podemos observar, ainda, que o campo que mais contribui com o valor da estatística se refere a pessoas com
nível fundamental de educação e salários baixos, pois o número de pessoas observadas nessa categoria
superou (e muito) o número esperado, calculado com base na hipótese nula de independência.

Logo, considerando esse exemplo, poderíamos concluir que pessoas com nível fundamental tendem a ter
salários baixos.

Por fim, temos o teste de homogeneidade, que verifica se as distribuições de uma variável nas
subpopulações são as mesmas (hipótese nula) ou não.

Podemos verificar, por exemplo, se as proporções dos três níveis de educação (que seria a nossa variável de
interesse) são as mesmas em todas as 5 regiões do país (que seriam as subpopulações). Vamos supor que
tenhamos obtido os seguintes resultados na amostra:

                                   Fundamental Médio Superior               Total
                               N        4       11      3                     18
                              NE        2       10      4                     16
                              CO        3       14      5                     22
                              SE        4       13      7                     24
                               S        2       12      6                     20
                             Total     15       60     25                    100

Considerando a hipótese nula de que a distribuição é a mesma para todas as subpopulações, então
esperamos que as proporções dos níveis de ensino sejam as mesmas para todas as regiões. Ou seja, se 15%
do total das pessoas possui apenas nível fundamental, esperamos que 15% dos nortistas possuam nível
fundamental, 15% dos nordestinos possuam nível fundamental etc.

Em outras palavras, o valor esperado de cada campo é calculado pelo produto do total da linha pelo total
da coluna, dividido pelo total da amostra (assim como fizemos para o teste de independência):

                                                   𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                           𝐸𝑖𝑗 =
                                                       𝑡𝑜𝑡𝑎𝑙

Os valores esperados para o nosso exemplo são:

                         Fundamental        Médio                    Superior       Total
                  N      18 × 15         18 × 60                 18 × 25             18
                                 = 2,7           = 10,8                  = 4,5
                           100             100                     100
                  NE     16 × 15         16 × 60                  16 × 25            16
                                 = 2,4           = 9,6                    =4
                           100             100                      100
                  CO     24 × 15         22 × 60                 22 × 25             22
                                 = 3,3           = 13,2                  = 5,5
                           100             100                     100
                  SE     24 × 15         24 × 60                  24 × 25            24
                                 = 3,6           = 14,4                   =6
                           100             100                      100
                  S      20 × 15         20 × 60                  20 × 25            20
                                 =3              = 12                     =5
                           100             100                      100
                 Total        15              60                       25           100


---

                                                                                                 (𝑶𝒊 −𝑬𝒊 )𝟐
Agora, calculamos, para cada campo, o quadrado do desvio, dividido pelo valor esperado              𝑬𝒊
                                                                                                              :

                               Fundamental                    Médio              Superior
                                      2                           2
                      N      (4 − 2,7)                (11 − 10,8)            (3 − 4,5)2
                                        ≅ 0,63                     ≅0                   = 0,5
                                2,7                       10,8                   4,5
                      NE     (2 − 2,4)2              (10 − 9,6)2               (4 − 4)2
                                        ≅ 0,07                   ≅ 0,02                 =0
                                2,4                      9,6                       4
                      CO     (3 − 3,3)2             (14 − 13,2)2            (5 − 5,5)2
                                        ≅ 0,03                    ≅ 0,05                ≅ 0,05
                                3,3                     13,2                    5,5
                      SE     (4 − 3,6)2             (13 − 14,4)2             (7 − 6)2
                                        ≅ 0,04                    ≅ 0,14               ≅ 0,17
                                3,6                     14,4                     6
                      S       (2 − 3)2                 (12 − 12)2             (6 − 5)2
                                       ≅ 0,33                     =0                   = 0,2
                                 3                         12                     5

E somamos todos os valores para obter a estatística do teste:

 𝒳 2 ≅ 0,63 + 0 + 0,5 + 0,07 + 0,02 + 0 + 0,03 + 0,05 + 0,05 + 0,04 + 0,14 + 0,17 + 0,33 + 0 + 0,2 = 2,23

O número de graus de liberdade desse exemplo, com C = 5 colunas e L = 3 linhas é:

                                      𝑘 = (𝐿 − 1) × (𝐶 − 1) = 4 × 2 = 8

Os valores da distribuição qui-quadrada com 8 graus de liberdade constam abaixo:

 𝑃(𝒳82 < 𝑥)   0,005   0,01    0,025   0,05   0,1       0,25     0,5    0,75   0,9  0,95 0,975 0,99 0,995
    𝑥          1,34   1,65     2,18   2,73   3,49      5,07     7,34   10,22 13,36 15,51 17,54 20,09 21,96

Podemos observar que a estatística do teste 𝒳 2 = 2,23 é inferior a 𝑥 = 2,73, associado à probabilidade
𝑃(𝒳82 > 2,73) = 1 − 0,05 = 0,95 Como esse valor é muito superior a qualquer nível de significância
razoável, não rejeitamos a hipótese nula de que as proporções dos níveis de ensino são as mesmas em todas
as regiões do país.

De maneira geral, os cálculos do teste de independência são muito similares aos do teste de homogeneidade.

A diferença principal entre esses testes é interpretativa: enquanto o teste de independência avalia 2
variáveis relativas a uma mesma população, o teste de homogeneidade avalia 1 variável em relação a
subpopulações distintas.


---

        Em suma, para o teste qui-quadrado de independência ou de homogeneidade, devemos
        seguir o seguinte passo a passo:

        i) Calcular os valores esperados 𝑬𝒊𝒋 para cada campo, considerando a hipótese nula*:

                                                     𝑖         ×𝑗𝑡𝑜𝑡𝑎𝑙
                                              𝐸𝑖𝑗 = 𝑡𝑜𝑡𝑎𝑙
                                                           𝑡𝑜𝑡𝑎𝑙

        ii) Calcular, para cada campo da tabela, o quadrado do desvio, dividido pelo valor esperado:

                                                  (𝑶𝒊𝒋 −𝑬𝒊𝒋 )𝟐
                                                         𝑬𝒊𝒋


        iii) Somar os resultados de todos os campos para obter a estatística do teste 𝓧𝟐𝑻 ;

        iv) Calcular o número de graus de liberdade da distribuição qui-quadrado**:

                                          𝑘 = (𝐿 − 1) × (𝐶 − 1)

        v) Obter o limite crítico (máximo) da distribuição qui-quadrado 𝒳𝐶2 , considerando o nível
        de significância 𝛼 desejado e o número de graus de liberdade 𝑘;

        vi) Decidir quanto à hipótese nula: Rejeitá-la se 𝒳𝑇2 > 𝒳𝐶2 e não a rejeitar, caso contrário.

Obs* (passo i): Para o teste qui-quadrado de aderência, percorremos esses mesmos passos, porém a forma
de calcular os valores esperados será diferente. Considerando que a hipótese nula fornece as proporções 𝑝𝑖
para cada categoria, calculamos os valores esperados de cada categoria multiplicando cada proporção 𝑝𝑖 ,
pelo tamanho total da amostra:

                                             𝐸𝑖 = 𝑝𝑖 × 𝑡𝑜𝑡𝑎𝑙

Obs** (passo iv): Se houver apenas 1 coluna, o número de graus de liberdade será 𝑘 = (𝐿 − 1) e se houver
apenas 1 linha, o número de graus de liberdade será 𝑘 = (𝐶 − 1).

        Quando a amostra é pequena ou os valores esperados são baixos, o resultado do teste qui-
        quadrado pode ser superestimado. Nessas situações, recomenda-se utilizar a correção de
        continuidade de Yates, em que reduzimos os desvios em 0,5:

                                                (𝑶𝒊𝒋 −𝑬𝒊𝒋 −𝟎,𝟓)𝟐
                                                         𝑬𝒊𝒋


---

Pontue-se que o teste qui-quadrado considera os seguintes pressupostos de validade:

   i)      Os dados são aleatórios e representativos da população (para isso, o tamanho da amostra deve
           ser grande o suficiente – em geral, considera-se o tamanho mínimo de 40 unidades);
   ii)     As variáveis estudadas são categóricas (como nos exemplos que vimos) e não numéricas;
   iii)    Não deve haver valores esperados muito baixos (em geral, considera-se que todos os valores
           esperados sejam maiores ou iguais a 1); e
   iv)     A quantidade de valores esperados menores que 5 não deve ser grande (em geral, utiliza-se o
           limite de 20% dos valores esperados).

(VUNESP/2018 – Prefeitura de Itapevi/SP) Na análise de contingência com o emprego do teste qui-
quadrado, os valores esperados são calculados com base na hipótese
a) alternativa
b) de verossimilhança
c) de clusters
d) de nulidade
e) Q de Cochran
Comentários:
Assim como os demais testes de hipóteses, em que os cálculos são feitos com base na hipótese nula (ou de
nulidade), no teste qui-quadrado, os valores esperados também são calculados com base na hipótese nula.
Gabarito: D.


(FGV/2022 – TCU) Numa empresa com 100 funcionários, todos foram perguntados a respeito de suas
preferências sobre trabalho remoto ou presencial. Dos funcionários de 18 a 39 anos, 40% preferem trabalho
presencial. Dos funcionários acima de 40 anos, 40% mostraram preferência pelo remoto. Dos 100
funcionários, 50 têm mais de 40 anos. O presidente da empresa está interessado em saber se a preferência
por trabalho remoto é independente da categoria de idade (18 a 39 e acima de 40 anos).
O teste a ser usado pelo presidente e o valor da estatística de teste são, respectivamente:
a) teste T e o valor da estatística é 4;
b) teste T e o valor da estatística é 0;
c) teste chi-quadrado e o valor da estatística é 4/5;
d) teste chi-quadrado e o valor da estatística é 4;
e) teste chi-quadrado e o valor da estatística é 0.


---

Comentários:
O enunciado informa as preferências em relação a 2 tipos de trabalho (remoto e presencial) de funcionários
divididos em 2 categorias de idade (abaixo de 40 anos e acima de 40 anos). Para verificar se a preferência
pelo tipo de trabalho é independente da categoria de idade, fazemos um teste qui-quadrado (ou chi-
quadrado) de independência.
Para calcularmos a estatística do teste, vamos primeiro inserir os dados fornecidos na seguinte tabela,
considerando que há 100 funcionários no total, dos quais 50 têm mais de 40 anos (logo, 50 têm menos de
40 anos):

O enunciado informa que 40% dos funcionários com menos de 40 anos preferem o trabalho presencial. Ou
seja, 40% x 50 = 20 funcionários nessa categoria preferem o trabalho presencial. Os demais (os outros 30)
preferem o trabalho remoto.
Ademais, 40% dos funcionários com mais de 40 anos preferem o trabalho remoto. Ou seja, 20 funcionários
nessa categoria preferem o trabalho remoto e 30 preferem o trabalho presencial. Inserindo esses dados,
temos:

Em seguida, calculamos o valor esperado de cada campo, que corresponde ao produto do total da linha com
o total da coluna, dividido pelo número total de funcionários. Como os totais são todos iguais, o valor
esperado de todos os campos é:
                                            50 × 50 2500
                                       𝐸=          =       = 25
                                              100     100
Agora, calculamos a razão entre o quadrado do desvio e o valor esperado para cada campo. Para o campo
da primeira linha e primeira coluna, temos:
                             (𝑂11 − 𝐸11 )2 (20 − 25)2 (−5)2 25
                                          =          =     =    =1
                                 𝐸11           25      25    25
Vale observar que os desvios em relação ao valor esperado (E = 25) é igual a 5, em módulo, para todos os
campos. Assim, essa razão será igual a 1 para todos os campos.
E a estatística do teste que consiste na soma desses resultados:
                                        𝒳2 = 1 + 1 + 1 + 1 = 𝟒
Já encontramos a resposta da questão, mas vale reforçar que devemos comparar a estatística do teste com
o valor indicado na tabela da distribuição qui-quadrado com k = (L - 1).(C - 1) = 1x1 = 1 grau de liberdade.
Gabarito: D.


---

(FGV/2019 – DPE-RJ) Cogita-se a possibilidade de que decisões judiciais, favoráveis ou não, possam estar
associadas à etnia do réu, refletida na sentença. Para testar a independência entre o resultado do julgamento
e o grupo étnico do réu, uma amostra representativa foi extraída, com resultados conforme abaixo.

Estão disponíveis também as seguintes informações sobre a distribuição Qui-Quadrado:
                                𝑃(𝒳12 < 3,842) = 𝑃 (𝒳22 < 5,993) = 0,9500
Sobre a realização do teste, é correto afirmar que:
a) o valor observado da estatística do teste é 3,6363;
b) o número de graus de liberdade da distribuição do teste é igual a 2;
c) ao nível de significância de 5% rejeita-se a hipótese de que a sentença e a etnia são independentes;
d) através da tabela acima é possível inferir que os indivíduos da etnia negra estão mais sujeitos à
   condenação do que outros;
e) se a estatística do teste for igual a 4, não será possível, ao nível de significância de 5%, rejeitar a hipótese
   de independência entre a sentença e a etnia.
Comentários:
O objetivo do teste é avaliar se o resultado da sentença tem relação com a etnia. Não havendo relação, ou
seja, sendo independentes (hipótese nula do teste), espera-se que a proporção de negros condenados seja
igual à proporção dos negros inocentados, assim como os não negros.
O primeiro passo é calcular o valor esperado de cada campo, considerando o total da respectiva linha e
coluna:
                                                      𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                              𝐸𝑖𝑗 =
                                                          𝑡𝑜𝑡𝑎𝑙


---

Agora, calculamos, para cada campo, o quadrado do desvio, dividido pelo valor esperado:
                                               (𝑶𝒊𝒋 − 𝑬𝒊𝒋 )𝟐
                                                    𝑬𝒊𝒋

E somamos os valores para obter a estatística do teste:
                                                     (𝑶𝒊 − 𝑬𝒊 )𝟐
                                           𝒳2 = ∑
                                                         𝑬𝒊
                                 𝒳 2 ≅ 1 + 1 + 0,818 + 0,818 = 3,636
Com esse resultado, podemos observar que a alternativa A está correta.
Para obter o valor crítico, precisamos do número de graus de liberdade da distribuição:
                                           𝑘 = (𝐿 − 1)(𝐶 − 1)
                                              𝑘 =1×1=1
Com esse resultado, observamos que a alternativa B está incorreta.
Pelos valores fornecidos no enunciado, observamos que, para 𝑘 = 1, temos 𝒳12 = 3,842, que é o valor
crítico para o nível de significância 1 − 𝛼 = 0,95 = 95%.
Como a estatística do teste (𝒳 2 = 3,63) é inferior ao valor crítico (𝒳12 = 3,842), então não rejeitamos a
hipótese nula de independência entre a etnia e o resultado do julgamento. Por isso, as alternativas C e D
estão incorretas.
Em relação à alternativa E, se a estatística fosse 𝒳 2 = 4, rejeitaríamos a hipótese de independência porque
esse valor superaria o valor crítico (𝒳12 = 3,842). Portanto, a alternativa E está incorreta.
Gabarito: A

Coeficiente de Contingência

O coeficiente de contingência (ou coeficiente C) é uma medida de associação que pode ser calculada
inclusive para variáveis em escala nominal (isto é, que não podem ser ordenadas). Ele é calculado a partir da
estatística do teste qui-quadrado de independência 𝓧𝟐 e do tamanho da amostra 𝑛:


                                                          𝓧𝟐
                                               𝑪=√
                                                       𝒏+𝓧𝟐


---

Por exemplo, em um dos nossos exemplos do teste qui-quadrado, obtivemos uma estatística 𝒳 2 ≅ 19,8
para uma amostra de tamanho 𝑛 = 100. O coeficiente de contingência para esse exemplo é, portanto:

                                                 19,8
                                          𝐶≅√          ≅ 0,4
                                                 119,8

Por ser uma medida calculada a partir dos dados do teste de independência, os pressupostos de validade
para o coeficiente de contingência são os mesmos do teste qui-quadrado.

Quando as variáveis são independentes, o coeficiente de contingência se aproxima de zero (como os demais
coeficientes de correlação/associação).

Por outro lado, o coeficiente assume apenas valores positivos (não negativos) e não assume o valor 1 para
variáveis completamente relacionadas – o seu valor máximo depende do número de linhas e colunas da
tabela de contingência.

Sendo o número de linhas igual ao número de colunas (𝐿), o valor máximo do coeficiente C é dado por:


                                                       𝐿−1
                                            𝐶𝑚á𝑥 = √
                                                        𝐿

Para o nosso exemplo, em que o número de linhas e de colunas foi 𝐶 = 𝐿 = 3, o valor máximo para o
coeficiente de correlação seria:


                                                   2
                                           𝐶𝑚á𝑥 = √ ≅ 0,8
                                                   3

Consequentemente, podemos comparar os coeficientes de contingência somente entre tabelas com as
mesmas dimensões, não sendo possível compará-lo com qualquer outra medida de correlação.

(CESPE/2020 – Ministério da Economia)


---

Considerando que a tabela precedente mostra o cruzamento de duas variáveis categorizadas A e B, que
foram codificadas em três níveis numéricos de resposta: −1, 0 e 1, julgue o item que se segue.
O coeficiente de contingência é nulo.
Comentários:
O coeficiente de contingência é dado por:

                                                         𝒳2
                                              𝐶=√
                                                       𝑛 + 𝒳2
Ou seja, precisamos da estatística do teste qui-quadrado 𝒳 2 .
Para isso, precisamos dos valores esperados para cada campo da tabela:
                                                    𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                            𝐸𝑖𝑗 =
                                                        𝑡𝑜𝑡𝑎𝑙

Como os valores observados não são iguais aos valores esperados, indicados acima, então a estatística do
teste não será nula e, consequentemente, o coeficiente de contingência também não será nulo.
Gabarito: Errado.


(2013 – UFPR - Adaptada) Sobre medidas de associação e correlação, considere as seguintes afirmativas:
1. O Coeficiente de Contingência pode ser comparado diretamente com outras medidas de correlação,
devido à ampla aplicabilidade e facilidade de cálculo.
2. O Coeficiente de Contingência pode assumir o valor 0 (zero), caso em que haverá completa falta de
associação, no entanto, não pode atingir a unidade, pois o limite superior é função do número de categorias.
3. Dois ou mais coeficientes de contingência podem ser comparados diretamente em qualquer circunstância.
4. Não há qualquer limitação quanto às frequências esperadas no cômputo do Coeficiente de Contingência,
razão pela qual não se exige continuidade intrínseca das variáveis investigadas, tampouco suposições sobre
a população-objeto.
Assinale a alternativa correta.
a) Somente a afirmativa 1 é verdadeira.
b) Somente a afirmativa 2 é verdadeira.
c) Somente as afirmativas 2 e 4 são verdadeiras.


---

d) Somente as afirmativas 2, 3 e 4 são verdadeiras.
e) As afirmativas 1, 2, 3 e 4 são verdadeiras.
Comentários:
Em relação à afirmativa 1, o coeficiente de contingência não pode ser comparado a qualquer outra medida
de correlação. Portanto, a afirmativa 1 é falsa.
Em relação à afirmativa 2, o coeficiente de contingência assume o valor 0 quando não há relação entre as
variáveis, porém o valor máximo depende do número de linhas e colunas (categorias). Portanto, a afirmativa
2 é verdadeira.
Em relação à afirmativa 3, só podemos comparar coeficientes de contingência quando houver o mesmo
número de linhas e colunas. Portanto, a afirmativa 3 é falsa.
Em relação à afirmativa 4, há distorções para valores esperados pequenos. Portanto, a afirmativa 4 é falsa.
Gabarito: B.


---

                   OUTROS TESTES NÃO PARAMÉTRICOS
Nesta seção, veremos outros testes não paramétricos, quais sejam o teste de concordância Kappa, o teste
de Wilcoxon e o teste Mann-Whitney.

Teste de Concordância Kappa

O teste de concordância Kappa ou coeficiente Kappa (de Cohen) avalia o nível de concordância entre
variáveis categóricas. Por exemplo, esse teste pode ser utilizado para avaliar se dois médicos (ou dois exames
distintos) concordam com o diagnóstico dos pacientes (doente ou não doente).

Para isso, comparamos a proporção observada de concordâncias 𝒑𝒐 (soma das respostas concordantes,
dividida pelo total) com a proporção esperada de concordâncias 𝒑𝒆 (soma das respostas concordantes
esperadas, dividida pelo total).

Para calcular a proporção esperada, supomos que as respostas sejam independentes, ou seja, a opinião de
um não tenha qualquer relação com a opinião do outro, o que chamamos de concordância randômica. Essa
é a hipótese nula do teste.

O coeficiente Kappa é calculado pela diferença entre as proporções observada e esperada dividida pelo
complemento da proporção esperada:

                                                       𝒑𝒐 −𝒑𝒆
                                                 𝜿=
                                                       𝟏−𝒑𝒆


A hipótese nula e a hipótese alternativa são:

                                                 𝐻0 : 𝜅 = 0

                                                 𝐻1 : 𝜅 > 0

Vamos supor que as respostas de dois especialistas estejam representadas na tabela seguinte, em que as
linhas representam as respostas do especialista A e as colunas representam as respostas do especialista B:

                                       A\B       Sim      Não     Total
                                       Sim        50      10       60
                                      Não         20      20       40
                                      Total       70      30       100


---

O primeiro passo é calcular a proporção observada de concordância, calculada pela razão entre a soma das
repostas concordantes e o total de respostas. De acordo com a tabela acima, houve 40 respostas
concordantes positivas e 10 respostas concordantes negativas, logo a proporção observada é:

                                                           50 + 20
                                                    𝑝𝑜 =           = 0,7
                                                             100

Para calcular a proporção esperada de concordância, precisamos dos valores esperados de cada campo da
tabela, calculado pelo produto do total da linha com o total da coluna, dividido pelo total de respostas:

                                                             𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                                     𝐸𝑖𝑗 =
                                                                 𝑡𝑜𝑡𝑎𝑙

                                    A\B              Sim                 Não            Total
                                              60 × 70              60 × 30
                                     Sim              = 42                 = 18           60
                                                100                  100

                                              40 × 70              40 × 30
                                    Não               = 28                 = 12           40
                                                100                  100
                                    Total            70                   30             100

E a proporção de concordância esperada é a razão entre a soma das repostas concordantes esperadas e o
total de respostas:

                                                           42 + 12
                                                    𝑝𝑒 =           = 0,6
                                                             100

Assim, o coeficiente Kappa para o nosso exemplo é:

                                                     0,7 − 0,6 0,1
                                                𝜅=            =     = 0,25
                                                      1 − 0,6   0,4

O valor máximo do coeficiente é igual a 1, o que ocorre quando a proporção observada é 𝒑𝒐 = 𝟏, isto é,
quando existem apenas respostas concordantes.

Por outro lado, o coeficiente pode assumir valores negativos, o que indica ausência de discordância (o valor
em si do coeficiente negativo não tem interpretação estatística em termos de intensidade da discordância).

Alguns autores1 sugerem a seguinte interpretação para o resultado do teste de concordância:

1
    Landis JR, Koch GG. The measurement of observer agreement for categorical data. Biometrics. 1977; 33(1): 159-174.


---

                               𝜿                       Interpretação
                               <0                 Ausência de Concordância
                            0 – 0,19             Concordância mínima/pobre
                           0,20 – 0,39           Concordância leve/razoável
                           0,40 – 0,59             Concordância moderada
                           0,60 – 0,79            Concordância substancial
                           0,80 – 1,00          Concordância (quase) perfeita

No entanto, o valor de 𝜅 varia de acordo com a prevalência das respostas positivas.

Quando há alta prevalência, a proporção esperada de concordâncias tende a ser mais alta e,
consequentemente, o valor de 𝜅 tende ser menor; e quando há baixa prevalência, ocorre o contrário.

Por isso, não se deve comparar valores de 𝜅 para variáveis com níveis de prevalência muito distintos.

(CESPE/2021 – TCE-RJ)

Considerando que o cruzamento de duas variáveis categorizadas A e B cujos niveis de resposta são 'Sim' e
'Não' tenha produzido a tabela de contingência precedente, julgue o próximo item.
O coeficiente kappa de Cohen é igual a 0,5.
Comentários:
O primeiro passo para calcular o coeficiente kappa é obter a proporção das concordâncias observadas, dada
pela soma das concordâncias (22 + 12 = 34), dividida pelo total das respostas (22 + 8 + 8 + 12 = 50):

                                                       34
                                               𝑝𝑜 =       = 0,68
                                                       50

Para calcular a proporção esperada das concordâncias, precisamos dos valores esperados de cada campo:

                                                      𝑖𝑡𝑜𝑡𝑎𝑙 × 𝑗𝑡𝑜𝑡𝑎𝑙
                                              𝐸𝑖𝑗 =
                                                          𝑡𝑜𝑡𝑎𝑙


---

A proporção esperada das concordâncias é a soma das concordâncias esperadas, dividida pelo total:
                                             18 + 8 26
                                      𝑝𝑒 =         =    = 0,52
                                               50    50
E o coeficiente kappa é:
                                   𝑝𝑜 − 𝑝𝑒 0,68 − 0,52 0,16
                              𝜅=          =           =      ≅ 0,33
                                   1 − 𝑝𝑒   1 − 0,52    0,48
Que é diferente de 0,5.
Gabarito: Errado.

Teste de Wilcoxon

O teste de Wilcoxon ou teste dos postos sinalizados de Wilcoxon (para pares combinados) é um teste não
paramétrico, utilizado para comparar amostras pareadas, isto é, quando um mesmo elemento está
associado às duas variáveis objeto de estudo.

Por exemplo, podemos criar um teste para comparar o resultado de um grupo de estudantes no primeiro e
no segundo semestre. Note que cada aluno terá um resultado no primeiro semestre e outro no segundo
semestre. É isso o que chamamos de amostras pareadas.

O objetivo do teste se assemelha ao do teste de t-Student (paramétrico) para comparar médias
populacionais, mas o teste de Wilcoxon é utilizado quando não podemos assumir que a população siga
distribuição normal.

        Isso não significa que os testes não paramétricos somente podem ser utilizados quando a
        distribuição não é normal!

        Podemos utilizar esses testes com qualquer distribuição, incluindo a distribuição normal!
        Porém, nesse caso, o teste t de Student, que é o teste paramétrico correspondente, é mais
        indicado, por ser mais poderoso.


---

A hipótese nula do teste é de que não há diferença entre as duas variáveis, mais precisamente, de que a
mediana das diferenças é nula.

A hipótese alternativa é de que há diferença entre os dois resultados, ou seja, de que a mediana das
diferenças não é nula, podendo o teste ser bilateral ou unilateral.

Para conduzir o teste, o primeiro passo calcular a diferença (d) entre as duas variáveis para cada elemento
pareado, conforme ilustrado a seguir.

                                Aluno       1º sem.      2º sem.       d
                                  A            10           8          2
                                  B            5            6          -1
                                  C            8            4          4
                                  D            7            6          1
                                  E            9            6          3
                                  F            6            6          0
                                  G            4            8          -4

Nessa tabela, calculamos a diferença 1º - 2º, mas poderíamos ter feito 2º - 1º, o que não alteraria os
resultados do teste.

        O teste de Wilcoxon é utilizado para 2 variáveis, como no nosso exemplo, em que
        consideramos os resultados de 2 semestres.

        Para 3 ou mais variáveis, utilizamos o Teste de Friedman.

O próximo passo é ignorar os pares em que d = 0 (no caso, o resultado do aluno F) e ordenar os demais pares
de acordo com as diferenças absolutas, ou seja, ignorando os sinais, por ora.

Uma vez ordenados, atribuímos aos pares números sequenciais (1, 2, 3,...), o que chamamos de postos. Em
caso de empate, devemos atribuir a média dos postos envolvidos no empate.

Nesse exemplo, ignoramos o aluno F, com d = 0.

Ademais, temos os alunos B e D empatados em primeiro e segundo lugares. Assim, atribuímos o posto de
1,5, que corresponde à média entre 1 e 2. O mesmo ocorre com os alunos C e G, empatados em quinto e
sexto lugares, motivo pelo qual atribuímos o posto de 5,5 para ambos.


---

                            Aluno       1º sem.      2º sem.          d      Posto
                              F            6            6             0
                              B            5            6             -1      1,5
                              D            7            6             1       1,5
                              A            10           8             2        3
                              E            9            6             3        4
                              C            8            4             4       5,5
                              G            4            8             -4      5,5

Agora, atribuímos para cada posto o sinal da diferença que havíamos inicialmente ignorado (o que
chamamos de posto sinalizado), como ilustrado a seguir:

                   Aluno      1º sem.     2º sem.      d       Posto       Posto Sinalizado
                     F           6           6         0
                     B           5           6         -1       1,5             -1,5
                     D           7           6         1        1,5             +1,5
                     A          10           8         2         3               +3
                     E           9           6         3         4               +4
                     C           8           4         4        5,5             +5,5
                     G           4           8         -4       5,5             -5,5

Por fim, somamos os valores positivos e os valores negativos, em separado, no caso, a soma dos positivos é
igual a +14 e a soma dos negativos é -7.

O valor final da soma dos postos será o valor absoluto da menor das duas somas, no caso, T = 7,0 (soma dos
postos negativos).

Quando a amostra é pequena, 𝑛 ≤ 30, a estatística do teste é o próprio valor da soma dos postos T, que
deve ser comparado ao valor crítico TC. O valor crítico é obtido a partir da tabela própria do teste, para o
tamanho da amostra 𝑛, o nível de significância 𝛼 desejado e o tipo de teste (unilateral ou bilateral).

Pontue-se que o tamanho da amostra 𝑛 corresponde ao número de elementos para os quais foram
atribuídos postos (isto é, aos elementos cujas diferenças são diferentes de zero).

No caso, temos 𝑛 = 6. Supondo o teste bilateral, com 𝛼 = 0,1, podemos observar, na tabela a seguir, que o
valor crítico para 𝑛 = 6 é TC = 2.


---

Considerando a hipótese nula de que a mediana das diferenças é igual a zero, a soma dos postos positivos e
a soma dos postos negativos seriam aproximadamente iguais. Então, sendo a hipótese nula verdadeira, a
estatística do teste, que corresponde à menor soma, não será pequena.

Assim, não rejeitaremos a hipótese nula se a estatística for maior ou igual ao valor tabelado 𝑻 ≥ 𝑻𝑪 ; e a
rejeitaremos, caso contrário.

                                            𝑻 < 𝑻𝑪 → Rejeitar 𝑯𝟎

                                          𝑻 ≥ 𝑻𝑪 → Não Rejeitar 𝑯𝟎

No caso, a estatística do teste (T = 7) é superior ao valor crítico (TC = 2) e não rejeitamos a hipótese nula.


---

Se a amostra for grande, 𝑛 > 30, a distribuição será aproximadamente normal, caso em que devemos
utilizar a tabela normal, sendo a média e desvio padrão da distribuição dadas por:

                                                    𝑛(𝑛 + 1)
                                             𝜇𝑇 =
                                                       4

                                                𝑛(𝑛 + 1)(2𝑛 + 1)
                                       𝜎𝑇 = √
                                                       24

E a transformação para a normal padrão (estatística do teste) será dada por:

                                                 𝑛(𝑛 + 1)
                                                𝑇−
                                        𝑧=           4
                                           √𝑛(𝑛 + 1)(2𝑛 + 1)
                                                   24

        Os pressupostos do teste de Wilcoxon são os seguintes:

        •   As observações pareadas são aleatórias e independentes;
        •   As diferenças são variáveis contínuas, com distribuição simétrica;
        •   As medidas devem estar no mínimo em escala ordinal, para possam ser comparadas.
            Assim, variáveis em escala nominal não são admitidas.

(FGV/2022 – TRT/MA) Avalie se as seguintes afirmativas acerca dos pressupostos do teste de postos
sinalizados de Wilcoxon são falsas (F) ou verdadeiras (V):
1. A população das diferenças tem distribuição que pode ser assimétrica ou simétrica.
2. Cada par é escolhido aleatoriamente e de forma independente.
3. Os dados podem ser medidos em escala nominal.
As afirmativas são, respectivamente,


---

a) V, V e V.
b) V, F e V.
c) F, V e V.
d) F, V e F.
e) F, F e F.
Comentários:
Essa questão exige os pressupostos do Teste de Wilcoxon.
Em relação à afirmativa 1, as diferenças devem ser variáveis contínuas e simétricas, ou seja, não podem ser
assimétricas. Assim, a afirmativa 1 é falsa.
Em relação à afirmativa 2, as observações pareadas (os pares) devem ser aleatórias e independentes. Assim,
a afirmativa 2 é verdadeira.
Em relação à afirmativa 3, os dados precisam estar no mínimo em escala ordinal, ou seja, variáveis em escala
nominal não são admitidas. Por isso, a afirmativa 3 é falsa.
Gabarito: D.

Teste de Mann-Whitney

O teste de Mann-Whitney ou teste da soma dos postos de Wilcoxon (para amostras independentes) é um
teste não paramétrico, utilizado para comparar duas populações de elementos não pareados e
independentes.

O objetivo também é semelhante ao do teste de t-Student (paramétrico) para comparar médias
populacionais, mas o teste de Mann-Whitney é utilizado quando não podemos assumir que a população siga
distribuição normal.

Assim como no teste de Wilcoxon, os dados precisam estar no mínimo em escala ordinal.

A hipótese nula desse teste é de que as amostras provêm da mesma população (isto é, de que a população
da primeira amostra é igual à população da segunda amostra); e a hipótese alternativa é de que existe
alguma diferença entre as duas populações.

Para conduzir o teste, devemos ordenar todos os valores de ambas as amostras, em uma única ordem
crescente (que denotamos por postos). Em caso de empate, utilizamos a média dos postos, assim como
fazemos para o teste de Wilcoxon.

Em seguida, somamos os postos de cada amostra em separado.


---

Vamos supor que estejamos interessados em comparar os resultados dos alunos de duas turmas, cujos dados
e respectivos postos estão descritos na tabela a seguir.

                                      Dados                   Postos
                                Turma 1 Turma 2        Turma 1 Turma 2
                                  10         7           13,5        7,5
                                   5         9           4,5         11,5
                                   4         8            3          9,5
                                   8         5           9,5         4,5
                                   7         3           7,5          2
                                   6         10           6          13,5
                                   9         2           11,5         1
                                      Totais             55,5        49,5

Para este exemplo, o tamanho das 2 amostras é o mesmo, mas isso não é uma condição necessária.

Chamamos o tamanho da 1ª amostra de 𝑛1 , o tamanho da 2ª amostra de 𝑛2 , a soma dos postos da 1ª amostra
de 𝑅1 e a soma dos postos da 2ª amostra de 𝑅2 .

Para amostras pequenas, em que o tamanho de cada amostra seja 𝑛 ≤ 20, a estatística do teste bilateral 𝒖
será o menor valor entre:

                                                     𝑛1 (𝑛1 + 1)
                                         𝑢1 = 𝑅1 −
                                                          2

                                                     𝑛2 (𝑛2 + 1)
                                         𝑢2 = 𝑅2 −
                                                          2

Para o nosso exemplo, temos 𝑛1 = 𝑛2 , então o menor valor estará associado à amostra com menor 𝑅 (soma
dos postos), no caso, a turma 2:

                                                       7×8
                                     𝑈 = 𝑢2 = 49,5 −       = 21,5
                                                        2

Esse valor é comparado com o valor crítico, baseado na tabela do teste. A seguir apresentamos a tabela para
um nível de significância 𝛼 = 0,1 em um teste bilateral.

Nessa tabela, considera-se que 𝑛1 corresponde à amostra de menor tamanho e 𝑛2 à amostra de maior
tamanho. Por esse motivo, aparecem somente os valores para 𝑛2 > 𝑛1 . Mas, na verdade, não importa qual
amostra é considerada a primeira e qual é considerada a segunda, pois o resultado do teste será o mesmo.

Pela tabela, observamos que o valor crítico para 𝑛1 = 𝑛2 = 7 é 𝑈𝐶 = 11.


---

A regra de rejeição e de não rejeição é a mesma daquela do teste de Wilcoxon, isto é, rejeitamos a hipótese
nula se a estatística do teste for menor do que o valor tabelado 𝑼 < 𝑼𝑪 e não a rejeitamos, caso contrário.

                                          𝑼 < 𝑼𝑪 → Rejeitar 𝑯𝟎

                                       𝑼 ≥ 𝑼𝑪 → Não Rejeitar 𝑯𝟎

Para o nosso exemplo, a estatística do teste 𝑈 = 21,5 é superior ao limite crítico 𝑈𝐶 = 11 e, por isso, não
rejeitamos a hipótese nula.

Se a amostra for grande, 𝑛 > 20, a distribuição será aproximadamente normal, caso em que devemos
utilizar a tabela normal e a transformação para a normal padrão, considerando os seguintes parâmetros:

                                                      𝑛1 . 𝑛2
                                               𝜇𝑇 =
                                                        2

                                               𝑛1 . 𝑛2 (𝑛1 + 𝑛2 + 1)
                                      𝜎𝑇 = √
                                                         12


---

        O teste de Mann-Whitney, que acabamos de estudar, é utilizado para 2 variáveis, como no
        nosso exemplo, em que consideramos os resultados de 2 Turmas.

        Para 3 ou mais variáveis, utilizamos o Teste Kruskal-Wallis.

        Esse teste possui os mesmos objetivos da Análise de Variância (ANOVA) com um fator,
        porém é indicado quando os pressupostos deste último não forem atendidos (inclusive,
        para pequenas amostras).

(CESPE/2018 – ABIN) Um experimento foi realizado para avaliar a durabilidade de três marcas diferentes de
baterias. Para cada marca, foram observados aleatoriamente 12 tempos de duração, perfazendo-se uma
amostra total de 36 observações.
Considerando que se pretenda testar a hipótese nula H0: “as três marcas proporcionam as mesmas
distribuições dos tempos de duração das baterias” contra a hipótese alternativa H 1: “há pelo menos duas
distribuições distintas dos tempos de duração das baterias”, julgue o próximo item.
O teste de postos sinalizados de Wilcoxon é um método apropriado para o experimento em tela, uma vez
que os tamanhos das amostras obtidas para cada marca de bateria são todos iguais a 12.
Comentários:
O enunciado deseja comparar 3 marcas. Considerando que há 3 grupos, e não apenas 2, o teste de Wilcoxon
não pode ser usado. Ademais, para o teste, os tamanhos das amostras não precisariam ser iguais.
Gabarito: Errado.


(2021 – Prefeitura de Porto Alegre/RS) Queremos comparar 4 amostras distintas em relação à tendência
central, verificando se provém da mesma população. A análise preliminar dos dados desta amostra mostrou
que todas as amostras apresentam uma forte não normalidade, com uma forte assimetria. Nessa situação,
qual seria o melhor tipo de teste de hipóteses para ser utilizado?
a) Teste de Mann-Whitney.
b) Teste de Kruskal-Wallis.
c) Teste ANOVA one way.


---

d) Teste de Friedman.
e) Teste exato de Fisher.
Comentários:
Para comparar se mais de 2 amostras provêm da mesma população, quando não podemos presumir que as
distribuições são normais, devemos utilizar o teste de Kruskal-Wallis.
Gabarito: B.


(FCC/2017 – TRT-11ª Região) Considere as seguintes afirmativas relativas a métodos não paramétricos:
I. Os testes não paramétricos somente são utilizados quando as variáveis de estudo não possuem distribuição
normal.
II. Para se utilizar os testes não paramétricos as variáveis de estudo devem ser do tipo quantitativo.
III. O teste não paramétrico de Wilcoxon − Mann-Whitney é baseado nos postos dos valores das variáveis de
estudo envolvidas.
IV. O teste de KrusKal-Wallis é uma generalização do Teste de Friedman para populações normais.
Está correto o que se afirma APENAS em
a) I e II.
b) II e III.
c) III e IV.
d) III.
e) I e IV.
Comentários:
Em relação à afirmativa I, testes não paramétricos não exigem que as variáveis tenham distribuição normal.
Assim, eles podem ser utilizados com qualquer distribuição, inclusive com a distribuição normal. Logo, a
afirmativa I está incorreta.
Em relação à afirmativa II, alguns testes não paramétricos, como o teste qui-quadrado, podem trabalhar com
variáveis categóricas (não quantitativas). Por isso, a afirmativa II está incorreta.
Em relação à afirmativa III, de fato, o teste de Wilcoxon – Mann-Whitney depende do cálculo dos postos dos
elementos das amostras. Logo, a afirmativa III está correta.
Em relação à afirmativa IV, tanto o teste de KrusKal-Wallis quanto o teste de Friedman são testes não
paramétricos, que não pressupõem que a distribuição das populações seja normal. Logo, a afirmativa IV está
incorreta.
Gabarito: D.


(FGV/2022 – TRT/PB - Adaptada) Considere o problema de se avaliar duas amostras aleatórias, uma (X's) de
tamanho m, outra (Y's) de tamanho n, obtidas de duas densidades defasadas por uma constante ∆.


---

Assim, temos Xi = ei, i = 1, ..., m, e Yj = em+j + ∆ em que os X's e os Y's são observáveis, em+j são variáveis
aleatórias não observáveis, ∆ é o deslocamento na locação devido ao “tratamento”. Suponha ainda que as
N = m + n observações sejam independentes e que cada “e” provém da mesma população contínua.
Por exemplo, suponha que os valores x’s e os valores y’s observados sejam:
x: 10,2   9,5   8,7   11,3 12,5     13,8    13,4    9,6   10,0
y: 13,5 14,6 15,7 15,8 16,7
e que se deseja testar H0: ∆= 0 versus H1: ∆> 0.
O valor da maior soma de postos para esse problema é igual a
a) 47.
b) 51.
c) 56
d) 59
e) 60
Comentários:
Para aplicar o teste de Mann-Whitney ou teste da soma dos postos de Wilcoxon (para amostras
independentes), primeiro ordenamos todas as observações de maneira crescente, designando os postos
correspondentes:

Assim, a soma dos postos de X e de Y são, respectivamente:
                             𝑅𝑋 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 10 = 46
                                    𝑅𝑌 = 9 + 11 + 12 + 13 + 14 = 59
E a maior soma de postos é 𝑅𝑌 = 59.
Resposta: D


---

                                   RESUMO DA AULA
Tipos de Teste

  •   Teste Bilateral: Região Crítica (RC) em ambos os extremos

                                                            𝑅𝑁𝑅
                                          𝑅𝐶                1−𝛼            𝑅𝐶
                                          𝛼⁄                               𝛼⁄
                                            2                                2
                                                    LINF                LSUP


  •   Teste Unilateral à Esquerda: Região Crítica concentrada à esquerda

                                                           𝑅𝑁𝑅
                                        𝑅𝐶                 1−𝛼
                                         𝛼
                                             LINF


  •   Teste Unilateral à Direita: Região crítica concentrada à esquerda

                                                     𝑅𝑁𝑅
                                                     1−𝛼           𝑅𝐶
                                                                    𝛼
                                                                 LSUP

Tipos de Erros – não complementares

  •   Erro tipo I (probabilidade 𝛼 – nível de significância)

         o Rejeitar a hipótese nula (H0) sendo ela verdadeira

         o Complementar: Nível de Confiança 1 − 𝛼

  •   Erro tipo II (probabilidade 𝛽):

         o Não rejeitar a hipótese nula sendo ela falsa


---

          o Complementar: Poder do Teste 1 − 𝛽

          o Quanto maior a diferença entre os parâmetros (verdadeiro e da hipótese nula), maior o poder
            do teste

          o Quanto maior o tamanho da amostra, maior o poder do teste

          o Quanto maior 𝛼, maior o poder do teste

Tipos de Testes
                                                                                           𝑥̅ −𝜇      𝑥̅ −𝜇
   •   Teste para a média com variância conhecida: 𝑧𝐶 = 𝜎 =                                              𝜎
                                                                                             ̅
                                                                                             𝑥
                                                                                                         √𝑛


                                                                                                   𝑥̅ −𝜇       𝑥̅ −𝜇
   •   Teste para a média com variância desconhecida: 𝑡𝐶 = 𝑠                                               =     𝑠
                                                                                                     ̅
                                                                                                     𝑋          √𝑛

                       ̅𝑥̅̅1̅−𝑥
                              ̅̅̅2̅       ̅𝑥̅̅1̅−𝑥
                                                 ̅̅̅2̅
   •   Teste T: 𝑧𝐶 =                  =
                       𝜎𝑥
                        ̅̅̅̅−𝑥
                          1 ̅̅̅̅
                               2           𝜎2 𝜎2
                                          √ 1+ 2
                                           𝑛1 𝑛2


                                                              𝑝̂−𝑝        𝑝̂−𝑝
   •   Teste para a proporção: 𝑧 = 𝜎 =                                     ̂ .𝑞
                                                                              ̂
                                                                ̂
                                                                𝑝          𝑝
                                                                          √
                                                                            𝑛


                                2                                    𝑛−1
   •   Teste para a variância: 𝒳𝑛−1 =(                                    ) 𝑠2
                                                                     𝜎2

P-Valor: Rejeitar se 𝑝 < 𝛼; Não Rejeitar se 𝑝 ≥ 𝛼

Teste Qui-Quadrado
                                                                                  𝑖   ×𝑗
   •   Valor Esperado do teste de independência: 𝐸𝑖𝑗 = 𝑡𝑜𝑡𝑎𝑙  𝑡𝑜𝑡𝑎𝑙
                                                          𝑡𝑜𝑡𝑎𝑙

   •   Grau de liberdade: 𝑘 = (𝐿 − 1) × (𝐶 − 1); se L = 1, 𝑘 = (𝐶 − 1); se C = 1, 𝑘 = (𝐿 − 1)

                                                 (𝑂𝑖 −𝐸𝑖 )2
   •   Estatística do teste: 𝒳 2 = ∑                     𝐸𝑖


---

                         QUESTÕES COMENTADAS - FGV

Conceitos Fundamentais

1.      (FGV/2014 – DPE-RJ) A Defensoria Pública tem como prioridade garantir o acesso à assistência
jurídica a todos aqueles que dela necessitam, mesmo que, por natural imprecisão de critérios, venha a
prestar eventual e involuntariamente serviços a indivíduos capazes de pagar. Para testar se um grupo de
pessoas merece receber assistência é fixada uma linha de corte igual a R$ 1.448,00, ou seja, dois salários
mínimos para a renda média (Rm). Considerando a prioridade da inclusão dos que de fato necessitam, as
hipóteses do teste devem ser:

a) Ho: Rm = 1.448 contra Ha: Rm  1.448;

b) Ho: Rm  1.448 contra Ha: Rm < 1.448;

c) Ho: Rm < 1.448 contra Ha: Rm  1.448;

d) Ho: Rm  1.448 contra Ha: Rm > 1.448;

e) Ho: Rm  1.448 contra Ha: Rm = 1.448;

Comentários:

A DPE pretende testar um grupo de pessoas para verificar se de fato necessitam da Defensoria Pública.
Considerando que o parâmetro estipulado foi de R$ 1.448, o objetivo do teste é verificar se a renda média
dos integrantes desse grupo é menor ou maior que esse parâmetro.

A hipótese nula é de que a assistência jurídica está sendo prestada para aqueles que de fato necessitam, ou
seja, Ho: Rm  1.448; e a hipótese alternativa é de que a assistência jurídica está sendo prestada para aqueles
que não precisam, ou seja, Ha: Rm > 1.448.

O enunciado informa que o objetivo é garantir que os necessitados recebam os serviços (ainda que os
serviços sejam prestados para os indivíduos capazes de pagar) para indicar que a hipótese nula inclui o
parâmetro indicado Ho: Rm  1.448.

Gabarito: D


---

                         QUESTÕES COMENTADAS - FGV

Tipos de Erros

1.     (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 400 será usada para testar
𝑯𝟎 : 𝝁 ≤ 𝟏𝟎𝟎 versus 𝑯𝟏 : 𝝁 > 𝟏𝟎𝟎, em que 𝝁 é a média de uma densidade normal com desvio padrão
                                                 ̅ > 𝟏𝟎𝟓 será usado.
suposto igual a 50. O critério que rejeita 𝑯𝟎 se 𝒙

O nível de significância desse critério e a probabilidade de erro tipo II se 𝝁 = 103 valem, respectivamente,
aproximadamente:

a) 0,02 e 0,79.
b) 0,02 e 0,21.
c) 0,02 e 0,54.
d) 0,05 e 0,21.
e) 0,05 e 0,38.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

Comentários:

O nível de significância do teste é a probabilidade de rejeitar a hipótese nula, considerando-a verdadeira.
Sabendo que a hipótese nula será rejeitada se 𝑥̅ > 105, temos:
                                              𝛼 = 𝑃(𝑋̅ > 105)
Considerando que o parâmetro indicado na hipótese nula é 𝜇 = 100, que o desvio padrão é 𝜎 = 50 e que o
tamanho da amostra é 𝑛 = 400, a transformação para a normal padrão é:
                                         𝑥̅ − 𝜇   105 − 100    5
                                    𝑧=      𝜎   =           =    =2
                                                     50       50
                                           √𝑛       √400      20
Assim, o nível de significância pode ser calculado como:
                                       𝛼 = 𝑃(𝑋̅ > 105) = 𝑃(𝑍 > 2)
Pela tabela normal padrão fornecida, observamos que 𝑃(𝑍 ≤ 2) = 0,9772, logo:
                     𝛼 = 𝑃(𝑍 > 2) = 1 − 𝑃(𝑍 ≤ 2) = 1 − 0,9772 = 0,0228 ≅ 0,02
Já, a probabilidade do erro tipo II é a probabilidade de não rejeitar a hipótese nula, sendo ela falsa:
                                              𝛽 = 𝑃(𝑌̅ ≤ 105)
Considerando que o parâmetro verdadeiro é 𝜇 = 103, que o desvio padrão é 𝜎 = 50 e que o tamanho da
amostra é 𝑛 = 400, a transformação para a normal padrão é:


---

                                         𝑦̅ − 𝜇 105 − 103    2
                                    𝑧=      𝜎 =           =    = 0,8
                                                   50       50
                                           √𝑛     √400      20
Assim, a probabilidade do erro tipo II pode ser calculada como:
                                       𝛽 = 𝑃(𝑌̅ ≤ 105) = 𝑃(𝑍 ≤ 0,8)
Pela tabela normal padrão fornecida, observamos que 𝑃(𝑍 ≤ 0,8) = 0,7881, logo:
                                      𝛽 = 𝑃(𝑍 ≤ 0,8) = 0,7881 ≅ 0,79
Gabarito: A


2.    (FGV/2022 – TRT/PB) Considere testar 𝑯𝒐 : 𝜽 ∈ 𝜣𝒐 versus 𝑯𝟏 : 𝜽 ∈ 𝜣 − 𝜣𝟎 , em que 𝜣 é o espaço
paramétrico e considere uma coleção de critérios de testes possíveis {Y}. Considere ainda que 𝝅𝒀 (𝜽) é a
função de poder do teste Y.

Avalie então se um teste uniformemente mais poderoso Y* de tamanho a satisfará as seguintes condições:

I. 𝐬𝐮𝐩𝝅𝒀∗ (𝜽) = 𝜶 se 𝜽 ∈ 𝜣𝒐

II. 𝝅𝒀∗ (𝜽) ≥ 𝝅𝒀 (𝜽) para todo 𝜽 ∈ 𝜣 − 𝜣𝟎 e para qualquer teste Y de tamanho menor ou igual a 𝜶

III. 𝝅𝒀∗ (𝜽) < 𝝅𝒀 (𝜽) para ao menos um valor 𝜽 ∈ 𝜣𝟎 .

Está correto o que se afirma em

a) I, apenas.
b) I e II, apenas.
c) I e III, apenas.
d) II e III, apenas.
e) I, II e III.

Comentários:

Um teste uniformemente mais poderoso 𝑌 ∗ atende às seguintes condições:

     •    a probabilidade de rejeitar a hipótese nula, quando ela é verdadeira, é, no máximo, igual a 𝛼:
                                                   sup𝜃∈𝛩𝑜 𝜋𝑌 ∗ (𝜃) = 𝛼
     •    a probabilidade de rejeitar a hipótese nula, quando ela é falsa, é maior do que a de qualquer outro
          teste Y, com o mesmo nível de significância 𝛼.
                                             𝜋𝑌 ∗ (𝜃) ≥ 𝜋𝑌 (𝜃),     ∀ 𝜃 ∈ 𝛩1

A afirmativa I corresponde à primeira condição e está correta.


---

A afirmativa II está associada à segunda condição, sendo 𝛩1 = 𝛩 − 𝛩0 , mas a afirmativa menciona qualquer
teste Y de tamanho "menor ou igual a 𝛼". Sabendo que o poder do teste de 𝑌 ∗ é maior do que o de qualquer
outro teste com mesmo 𝛼; e sabendo que o poder do teste diminui quando 𝛼 diminui; podemos concluir
que o poder do teste de 𝑌 ∗ é maior do que o de qualquer com mesmo 𝛼 ou inferior. Assim, concluímos que
a afirmativa II está correta.

Segundo a afirmativa III, a probabilidade de um teste uniformemente mais poderoso rejeitar a hipótese nula,
quando ela é verdadeira, é maior do que a de um outro teste Y qualquer, para pelo menos algum parâmetro.
No entanto, essa não é uma condição de um teste uniformemente mais poderoso, logo, a afirmativa III é
falsa.

Gabarito: B

3.    (FGV/2021 – IMBEL) O planejamento e controle de qualidade de uma operação envolvem
amostragens de desempenho, que devem ser analisadas. Nessas análises, podem ocorrer erros de
julgamento, que se classificam em tipos X e Z. Assim, o quadro a seguir apresenta as possíveis decisões a
se tomar para cada resultado de análise.

                                          O lote de sacos de arroz está, na
                                                     realidade...

                           Decisão        Adequado             Inadequado

                           Rejeitar           (a)            Decisão Correta

                            Aceitar    Decisão Correta              (b)

Sobre esse quadro, analise as afirmativas a seguir.
I. O erro de análise indicado por (a) corresponde a um erro do tipo X.
II. O erro de análise indicado por (b) também corresponde a um erro do tipo X.
III. Os erros (a) e (b) podem também ser referidos como riscos para o consumidor e para o produtor,
respectivamente.
Está correto o que se afirma em

a) I, somente.

b) II, somente.

c) I e II, somente.

d) I e III, somente.

e) II e III, somente.


---

Comentários:

Nas análises de amostragem, podem ocorrer os erros do tipo I (que o enunciado chama de X), que
corresponde a uma decisão de rejeição, quando o lote está adequado; e do tipo II (que o enunciado chama
de Z), que corresponde a uma decisão de aceitação, quando o lote está inadequado.

Na afirmativa I, consta que o erro indicado por (a), que corresponde a uma decisão de rejeição, quando o
lote está adequado, corresponde a um erro do tipo X. De fato, esse erro corresponde ao erro do tipo I, logo,
a afirmativa I está correta.

Na afirmativa II, consta que o erro indicado por (b), que corresponde a uma decisão de aceitação, quando o
lote está inadequado, também corresponde a um erro do tipo X. No entanto, esse erro corresponde ao erro
do tipo II, que o enunciado chamou de Z, logo a afirmativa II está incorreta.

Na afirmativa III, consta que o erro indicado por (a) é um risco para o consumidor e que o erro indicado por
(b) é um risco para o produtor. No entanto, (a) corresponde à rejeição de um lote adequado, ou seja, esse é
um risco para o produtor; enquanto (b) corresponde à aceitação de um lote inadequado, tratando-se,
portanto, de um risco para o consumidor. Logo, a afirmativa III está incorreta.

Gabarito: A

4.     (FGV/2019 – DPE/RJ) Considere um teste de hipóteses com a seguinte formulação:
                                           𝑯𝟎 : 𝜷 = 𝜷 𝟎 𝒆 𝑯 𝟏 : 𝜷 = 𝜷 𝟏
Por construção, 𝜷 é o único parâmetro de uma distribuição geométrica. Uma amostra de tamanho n (AAS)
                           ⃗ |𝜷𝒊 ) a densidade conjunta da amostra para i = 0,1.
é selecionada. Seja 𝒑𝒊 = 𝒑(𝒙
                𝟏         𝟐
Então se 𝜷𝟎 = e 𝜷𝟏 = e o teste proposto é ótimo, é correto afirmar que:
                𝟑         𝟑


a) existe k (constante) tal que se 2−𝑛−1 . 2∑ 𝑥𝑖 < 𝑘, não é possível rejeitar 𝐻0 ;

                                  1 −𝑛−1    1 ∑ 𝑥𝑖
b) existe k (constante) tal que ( )        .( )      < 𝑘, não é possível rejeitar 𝐻0 ;
                                  3         2


c) existe k (constante) tal que se 2−2𝑛 . 2∑ 𝑥𝑖 < 𝑘, rejeita-se 𝐻0 ;

d) para qualquer valor de ∑ 𝑥𝑖 é possível tomar uma decisão;

e) existe 𝑘 (constante) tal que se 2−2𝑛 . 2∑ 𝑥𝑖 > 𝑘, rejeita-se 𝐻0 .

Comentários:

Essa questão trabalha com o teste ótimo, qual seja o que minimiza a combinação linear das probabilidades
                                                                                     𝑝
dos erros tipos I e II. Para esse teste, comparamos a razão de verossimilhanças 𝑅𝑉 = 𝑝0 a uma constante 𝑘.
                                                                                         1


---

Se a razão for menor que a constante, rejeitamos a hipótese nula; se a razão for maior que a constante, não
rejeitamos a hipótese nula; e se a razão for igual à constante, o teste é inconclusivo.
                                                         𝑝
Sabendo que iremos rejeitar 𝐻0 , se o resultado for 𝑝0 < 𝑘, podemos descartar as alternativas A e B, que
                                                          1
afirmam que não seria possível rejeitar 𝐻0 .
                                                                  𝑝0
Sabendo que iremos não rejeitar 𝐻0 , se o resultado for                > 𝑘, podemos descartar a alternativa E, que
                                                                  𝑝1
afirmam que iríamos rejeitar 𝐻0 .
                                              𝑝
Sabendo que o teste será inconclusivo se 𝑝0 = 𝑘, podemos descartar a alternativa D, que afirma que será
                                               1
sempre possível tomar uma decisão.
                                                                                                         𝑝
Logo, resta a alternativa C. Para confirmar que ela está correta, precisamos calcular 𝑅𝑉 = 𝑝0. Para a
                                                                                                          1
distribuição geométrica, a função de probabilidade calcula a probabilidade de se obter sucesso na 𝑥-ésima
tentativa, sendo 𝜃 a probabilidade de sucesso1:

                                       𝑓(𝑥) = 𝑃(𝑋 = 𝑥) = 𝜃. (1 − 𝜃)𝑥−1

A função de verossimilhança dessa variável corresponde ao produto da função de probabilidade aplicada
para cada resultado da amostra (função de probabilidade conjunta):
                                  𝑛

                           𝑝𝜃 = ∏ 𝑓(𝜃, 𝑥𝑖 ) = 𝑓(𝜃, 𝑥1 ) × 𝑓(𝜃, 𝑥2 ) × … × 𝑓(𝜃, 𝑥𝑛 )
                                 𝑖=1

Para a variável geométrica, temos:
                     𝑛

             𝑝𝜃 = ∏ 𝜃. (1 − 𝜃)𝑥𝑖 −1 = 𝜃. (1 − 𝜃)𝑥1 −1 × 𝜃. (1 − 𝜃)𝑥2−1 × … × 𝜃. (1 − 𝜃)𝑥𝑛−1
                    𝑖=1

Sabendo que há 𝑛 termos e que para multiplicarmos potências de mesma base, somamos os expoentes:

                                             𝑝𝜃 = 𝜃 𝑛 . (1 − 𝜃)∑ 𝑥𝑖 −𝑛
                                                                                             1
Essa é a função de verossimilhança. Para o parâmetro indicado na hipótese nula 𝜃 = , temos:
                                                                                             3


                                      1 𝑛 2 ∑ 𝑥𝑖 −𝑛   1 2∑ 𝑥𝑖 −𝑛 2∑ 𝑥𝑖 −𝑛
                                𝑝0 = ( ) . ( )      = 𝑛 . ∑ 𝑥 −𝑛 = ∑ 𝑥
                                      3     3        3 3 𝑖         3 𝑖
                                                              2
E para o parâmetro indicado na hipótese alternativa 𝜃 = , a função de verossimilhança é:
                                                              3

1
 Não estamos chamando a probabilidade de sucesso de 𝑝, como fazemos normalmente, para não confundir com as funções de
verossimilhança 𝑝0 e 𝑝1 .


---

                                      2 𝑛 1 ∑ 𝑥𝑖 −𝑛 2𝑛     1      2𝑛
                                𝑝1 = ( ) . ( )     = 𝑛 . ∑ 𝑥 −𝑛 = ∑ 𝑥
                                      3     3       3 3 𝑖        3 𝑖
                                          𝑝
Assim, a razão de verossimilhanças 𝑅𝑉 = 𝑝0 é:
                                           1


                                 2∑ 𝑥𝑖 −𝑛
                             𝑝0    ∑ 𝑥𝑖   2∑ 𝑥𝑖 −𝑛
                        𝑅𝑉 =    = 3 𝑛 =            = 2∑ 𝑥𝑖 −𝑛 . 2−𝑛 = 2∑ 𝑥𝑖 . 2−2𝑛
                             𝑝1    2        2𝑛
                                  3∑ 𝑥𝑖

Assim, se essa razão 𝑅𝑉 = 2∑ 𝑥𝑖 . 2−2𝑛 for menor do que a constante 𝑘, rejeitamos a hipótese nula, conforme
afirma a alternativa C.

Gabarito: C

5.   (FGV/2018 – TJ-AL) Sobre a formulação geral de teste de hipóteses, empregando a distribuição
Normal, é correto afirmar que:

a) fixo o tamanho da amostra e o valor simulado na região crítica, quanto maior a probabilidade do erro do
Tipo I, menor será a do Tipo II;

b) os erros do Tipo I e do Tipo II são complementares quando o teste de hipóteses é unicaudal;

c) a potência de um teste é uma função monótona quando o teste é do tipo bicaudal;

d) em um teste unicaudal, quando o p-valor coincide com o nível de significância, a hipótese nula é rejeitada;

e) tanto a rejeição quanto a não rejeição da hipótese nula implicam a geração de evidências estatísticas.

Comentários:

Em relação à alternativa A, para um mesmo tamanho da amostra, quanto maior o nível de significância 𝛼
(maior probabilidade do erro tipo I), maior será a Região Crítica e menor será a Região de Não Rejeição, ou
seja, menor será a probabilidade de não rejeitar a hipótese nula. Sendo a hipótese nula falsa, menor será a
probabilidade de não rejeitá-la, o que corresponde à probabilidade o erro Tipo II (𝛽). Logo, a alternativa A
está correta.

Em relação à alternativa B, os erros tipo I e tipo II não são complementares, em teste algum. Logo, a
alternativa B está incorreta.

Em relação à alternativa C, a função potência do teste apresenta a seguinte característica, para um teste
bilateral.


---

                                                    𝜋

                                                                   𝜇1
Logo, a função não é monótona (isto é, uma função que só cresce ou só decresce). Por isso, a alternativa C
está incorreta.

Em relação à alternativa D, rejeitamos a hipótese nula, quando o p-valor for menor do que o nível de
significância (𝑝 − 𝑣𝑎𝑙𝑜𝑟 < 𝛼). Quando esses valores coincidem, não rejeitamos a hipótese nula. Por isso, a
alternativa D está incorreta.

Em relação à alternativa E, dizemos que são geradas evidências estatísticas, apenas quando rejeitamos a
hipótese, mas não quando a mesma é não rejeitada. Por isso, a alternativa E está incorreta.

Gabarito: A

6.    (FGV/2016 – IBGE) Os testes clássicos de inferência estão baseados na obtenção ou não de
evidência estatística contrária à hipótese suposta, previamente, verdadeira. A construção está associada
a uma série de conceitos e definições. Entre esses elementos estão:

a) a não ocorrência de um evento, supostamente, de alta probabilidade produz evidência à rejeição da
hipótese nula;

b) a não rejeição da hipótese nula produz evidência estatística associada a um evento de baixa probabilidade;

c) a potência do teste depende da escolha do valor da amostra e do nível de significância adotado;

d) os erros do Tipo I e Tipo II, que têm probabilidades complementares;

e) a estatística do teste deve ser conhecida, além de depender, na sua expressão, do valor do parâmetro a
ser testado.

Comentários:

Essa questão cobra conceitos gerais sobre os testes de hipóteses.

O evento supostamente de alta probabilidade a que a alternativa A se refere é o resultado estar na RNR
(Região de Não Rejeição), associada a um alto nível de confiança (em geral, 90% ou 95%), supondo a hipótese
nula como premissa. Quando isso não ocorre, isto é, quando o resultado cai na região crítica, rejeitamos a
hipótese nula, ou seja, o teste gera evidência estatística. Assim, a alternativa A está correta.


---

Em relação à alternativa B, apenas a rejeição da hipótese nula (associada a um evento de baixa
probabilidade) produz evidência estatística. Como a alternativa mencionou a "não rejeição", ela está
incorreta.

Em relação à alternativa C, a potência do teste é uma função do parâmetro verdadeiro. Ela é indiretamente
afetada pelo tamanho da amostra e pelo nível de significância, mas não podemos dizer que há uma relação
de dependência entre essas variáveis. Logo, a alternativa C está incorreta.

Em relação à alternativa D, os erros tipo I e tipo II não têm probabilidades complementares e, portanto, a
alternativa está incorreta.

Em relação à alternativa E, a estatística do teste é calculada a partir do resultado do teste, logo não precisa
ser previamente conhecida. Assim, a alternativa E está incorreta.

Gabarito: A

7.     (FGV/2014 – DPE-RJ) Suponha que para a realização de um teste de hipóteses sobre determinado
parâmetro estão disponíveis duas alternativas. Na tabela abaixo são apresentadas as probabilidades de
rejeição da hipótese nula quando ela é falsa.

Então, pode-se afirmar que

a) a probabilidade do erro do tipo I no teste alternativo 1, com a hipótese θ = θ₂, é igual a 0,16.

b) a probabilidade do erro do tipo II no teste alternativo 2, com a hipótese θ = θ3, é igual a 0,85.

c) o teste da alternativa 2 é menos potente do que o teste para a alternativa 1.

d) o teste da alternativa 1 é tendencioso o que não ocorre com o teste da alternativa 2.

e) as probabilidades indicam que os testes das alternativas 1 e 2 são ambos do tipo bilateral.

Comentários:

O enunciado diz que os valores indicados na tabela correspondem à probabilidade de rejeitar a hipótese nula
quando ela é falsa, que é complementar à probabilidade de aceitar a hipótese nula quando ela é falsa (isto
é, o erro tipo II, 𝛽). Ou seja, essas probabilidades correspondem a 1 − 𝛽, ou seja, ao poder do teste.

Em relação à alternativa A, não há qualquer informação em relação ao erro tipo I, logo essa alternativa está
incorreta.


---

Em relação à alternativa B, a tabela informa que o poder do teste alternativo 2 para o parâmetro θ = θ3 é
1 − 𝛽 = 0,85. Logo, a probabilidade do erro tipo II é 𝛽 = 1 − 0,85 = 0,15. Assim, a alternativa B está
incorreta.

Em relação à alternativa C, podemos observar que os valores dos testes da alternativa 2 são sempre menores
do que os valores para os testes da alternativa 1. Ou seja, os testes 2 são, de fato, menos potentes e a
alternativa C está correta.

Em relação às alternativas D e E, não há como concluir a respeito da tendenciosidade ou do tipo (unilateral
ou bilateral) do teste. Por isso, essas alternativas estão incorretas.

Gabarito: C


---

---

                         QUESTÕES COMENTADAS - FGV

Testes para a Média

1.     (FGV/2022 – SEFAZ/AM) Uma amostra aleatória de tamanho 16 de uma variável populacional
normalmente distribuída com parâmetros desconhecidos será obtida para testar as seguintes hipóteses
acerca do valor da média populacional:
                                    𝑯𝟎 : 𝝁 ≤ 𝝁𝟎 𝒗𝒆𝒓𝒔𝒖𝒔     𝑯𝟏 : 𝝁 > 𝝁 𝟎
A estatística de teste usual mais adequada a ser usada tem, quando μ = μ0, distribuição:

a) N(0, 1).
b) t-student com 15 graus de liberdade.
c) t-student com 16 graus de liberdade.
d) qui-quadrado com 16 graus de liberdade.
e) qui-quadrado com 15 graus de liberdade.

Comentários:

O enunciado informa que a população segue distribuição normal com parâmetros desconhecidos, ou seja,
trata-se de um teste para a média, com variância desconhecida, em que utilizamos a distribuição de t-
Student, com n - 1 graus de liberdade. Sendo o tamanho da amostra n = 16, então a estatística do teste segue
distribuição de t-Student com n - 1 = 15 graus de liberdade.

Gabarito: B

2.     (FGV/2022 – TRT/MA) Uma amostra aleatória de tamanho 144 de uma população descrita por uma
variável aleatória suposta normalmente distribuída com média 𝝁 e variância 𝝈𝟐 apresentou os seguintes
dados:
                                                    𝟏𝟒𝟒

                                    ̅ = 𝟓𝟐, 𝟓,
                                    𝒙                     ̅)𝟐 = 𝟓𝟏𝟒𝟖
                                                    ∑(𝒙 − 𝒙
                                                    𝒊=𝟏


Assim, se queremos testar H0: 𝝁 ≤ 50 versus H1: 𝝁 > 50, o critério de decisão com base na estatística de
teste t usual, ao nível de significância de 5%, e a respectiva decisão serão:

a) Rejeitar H0 se 𝑥̅ ≥ 54,02, logo não rejeitamos H0.
b) Rejeitar H0 se 𝑥̅ ≥ 49,12, logo rejeitamos H0.
c) Rejeitar H0 se 𝑥̅ ≥ 55,03, logo não rejeitamos H0.
d) Rejeitar H0 se 𝑥̅ ≥ 50,82, logo rejeitamos H0.
e) Rejeitar H0 se 𝑥̅ ≥ 53,28, logo não rejeitamos H0.


---

Para essa questão, considere as tabelas constantes no final desta seção de questões, fornecidas na prova.

Comentários:

Aqui temos um teste unilateral à direita para a média, com variância desconhecida (teste t), em que
precisamos calcular o limite crítico superior para a média amostral:
                                                                 𝑠
                                               𝐿𝑆𝑢𝑝 = 𝜇 + 𝑡𝛼 .
                                                                 √𝑛
O enunciado fornece os seguintes dados:
   •     A média indicada na hipótese alternativa é 𝜇 = 50; e
   •     O tamanho da amostra é 𝑛 = 144.
Ademais, a partir da soma do quadrado dos desvios, podemos calcular a variância amostral 𝑠 2 :

                                      2
                                         ∑144
                                          𝑖=1(𝑥 − 𝑥̅ )
                                                       2
                                                           5148
                                     𝑠 =                 =      = 36
                                            𝑛−1            143
O desvio padrão amostral é a raiz quadrada desse resultado: 𝑠 = √𝑠 2 = √36 = 6
Por fim, precisamos do valor de 𝑡𝛼 para 𝑛 − 1 = 143 graus de liberdade e para um nível de confiança
𝑃(𝑇 < 𝑡𝛼 ) = 1 − 𝛼 = 95%. Pela tabela fornecida, observamos que o valor de 𝑡𝛼 está entre 1,658 e 1,645.
Utilizando 𝑡𝛼 = 1,65 (valor aproximado), obtemos o seguinte limite superior:
                                           6                      6
                     𝐿𝑆𝑢𝑝 = 50 + 1,65.           = 50 + 1,65.       = 50 + 0,825 ≅ 50,82
                                          √144                   12
Assim, rejeitamos a hipótese nula se a média amostral for superior a 50,82. Considerando que a média
observada é 𝑥̅ = 52,5, que é superior ao limite máximo, rejeitamos a hipótese nula.
Gabarito: D


3.    (FGV/2022 – TJDFT) Um estatístico deseja testar se os efeitos de utilizar dois lubrificantes, de
marcas diferentes, no processo de fabricação de uma indústria, são distintos. Para isso, ele planeja
executar um experimento controlado, aplicando cada marca de lubrificantes em uma amostra de
máquinas idênticas, ou seja, a escolha das máquinas não afeta o resultado do teste. As amostras de
máquinas para testar cada lubrificante têm o mesmo tamanho.
Desse modo, o estatístico selecionou uma amostra aleatória simples, supondo a população infinita, com
distribuição normal, e desvios padrões conhecidos iguais a 1,5 e 1,6. O número de máquinas selecionadas
para testar cada lubrificante, de tal forma que o erro na estimação da diferença entre as médias
observadas seja menor que 1, com 95% de confiança, é:
a) 7;
b) 10;
c) 12;
d) 14;
e) 19.


---

Comentários:

Essa questão trabalha com o teste de comparação entre médias, em que a estatística do teste é:

                                                       𝑥
                                                       ̅̅̅1 − 𝑥
                                                              ̅̅̅2
                                               𝑧=
                                                      𝜎2 𝜎2
                                                     √ 1 + 2
                                                      𝑛1 𝑛2

O enunciado informa que as amostras têm o mesmo tamanho, ou seja, 𝑛1 = 𝑛2 = 𝑛:

                                              ̅̅̅1 − ̅̅̅
                                              𝑥      𝑥2             ̅̅̅
                                                                    𝑥1 − 𝑥
                                                                         ̅̅̅2
                                      𝑧=                       =
                                                2
                                             √𝜎1 + 𝜎2
                                                           2       √𝜎12 + 𝜎22
                                               𝑛   𝑛                  √𝑛

O numerador poderia ser representado como (𝑥           𝑥2 − (𝜇1 − 𝜇2 ), sendo simplificado porque, sob a
                                                ̅̅̅1 − ̅̅̅)
hipótese nula, temos 𝜇1 = 𝜇2 e, portanto, 𝜇1 − 𝜇2 = 0. De todo modo, ele representa justamente o erro
máximo na estimação da diferença entre as médias que o enunciado menciona.

Fazendo 𝐸 = ̅̅̅
            𝑥1 − 𝑥̅̅̅,
                    2 podemos reorganizar a fórmula da estatística do teste para calcular o tamanho da
amostra necessário, considerando os parâmetros informados:

                                               𝐸                     𝐸
                                    𝑧=                     =                . √𝑛
                                         √𝜎12 + 𝜎22            √𝜎12 + 𝜎22
                                            √𝑛

                                              𝑧 2
                                         𝑛 = ( ) . (𝜎12 + 𝜎22 )
                                              𝐸

Agora, substituímos 𝐸 = 1, 𝜎1 = 1,5, 𝜎2 = 1,6 e z = 1,96 (95% de confiança):

                   1,96 2
               𝑛=(     ) . (1,52 + 1,62 ) ≅ 3,84. (2,25 + 2,56) = 3,84 × 4,81 ≅ 18,48
                     1

Portanto, são necessárias n = 19 máquinas.

Gabarito: E

4.      (FGV/2021 – FunSaúde/CE) Para testar H0: μ ≤ 20 contra H1: μ > 20, em que μ é a média de uma
distribuição normal com variância igual a 4, uma amostra aleatória simples de tamanho 100 foi observada
e revelou uma média amostral igual a 20, 3.
O p-valor aproximado associado ao teste uniformemente mais poderoso de tamanho α e a respectiva
decisão ao nível α = 0,01 são, respectivamente,

a) 0,067 e rejeitar H0


---

b) 0,006 e não rejeitar H0
c) 0,067 e não rejeitar H0
d) 0,006 e rejeitar H0
e) 0,344 e não rejeitar H0

Para resolver esta questão, utilize as tabelas fornecidas na prova, constantes ao final desta seção.

Comentários:

Aqui, temos um teste para média, com variância conhecida. O enunciado fornece os seguintes dados:

   •   Variância da população 𝜎 2 = 4 (logo, o desvio padrão é 𝜎 = √ 𝜎 2 = √4 = 2);
   •   Tamanho da amostra 𝑛 = 100;
   •   Média amostral observada 𝑥̅ = 20,3;
   •   Parâmetro da hipótese nula: 𝜇 = 20.

Com esses dados, podemos calcular a estatística do teste:

                                     𝑥̅ − 𝜇 20,3 − 20   0,3 0,3
                                𝑧=      𝜎 =           =    =     = 1,5
                                                2        2   0,2
                                       √𝑛     √100      10

O enunciado pede o p-valor, que corresponde à probabilidade de o resultado ser mais extremo do que o
resultado observado. Como estamos em um teste unilateral à direita, o p-valor é:

                                             𝑝 = 𝑃(𝑍 > 1,5)

Pela tabela fornecida na prova, observamos que P(Z < 1,5) = 0,9332, que é complementar à probabilidade
desejada:

                             𝑝 = 𝑃(𝑍 > 1,5) = 1 − 0,9332 = 0,0668 ≅ 𝟎, 𝟎𝟔𝟕

Para o nível de significância 𝛼 = 0,01, temos 𝑝 > 𝛼, conforme ilustrado a seguir:

                                                              𝑝 = 6,7%

                                                                 𝛼 = 1%


                                                        1,5

Nessa situação, não rejeitamos a hipótese nula.

Gabarito: C


---

5.     (FGV/2019 – DPE-RJ) Acredita-se que o valor do rendimento médio das pessoas que procuram ajuda
na Defensoria Pública do Rio de Janeiro seja inferior a R$ 2.000. Para tentar gerar uma evidência estatística
de que isso é verdade, foi proposto um teste de hipóteses com base numa amostra de tamanho n = 64,
tendo sido apurado um rendimento médio de R$ 1.952, com desvio-padrão de R$ 256. Para a realização
do teste será usada a aproximação da T-Student pela distribuição Normal, para qual sabe-se que:
P(Z > 1,28) = 0,10, P(Z > 1,5) = 0,07, P(Z > 1,75) = 0,04 e P(Z > 2) = 0,02
Assim sendo, é correto concluir que:

a) ao nível de significância de 4% rejeita-se a hipótese nula;
b) ao nível de significância de 10% não é possível rejeitar a hipótese nula;
c) o conjunto de hipóteses a ser testado é Ho: 𝜇 = 2000 contra Ha: 𝜇 ≥ 2000;
d) o p-valor correspondente ao teste bilateral e a observação obtida a partir da amostra, 𝑥̅ =1952 é igual a
   14%;
e) se o conjunto de hipóteses formulado fosse Ho: 𝜇 = 2000 contra Ha: 𝜇 ≠ 2000, ao nível de significância
   de 7% a Ho seria rejeitada.

Comentários:

O teste de hipóteses irá confirmar se a média é 2000 ou inferior, portanto, a hipótese nula é 𝐻0 : 𝜇 = 2000 e
a hipótese alternativa é 𝐻𝑎 : 𝜇 < 2000 (teste unilateral à esquerda). Com isso, verificamos que a alternativa
C está incorreta).

Apesar de o desvio padrão ter sido calculado na amostra, o que implicaria no uso da distribuição de t-Student,
a questão considera que a amostra é grande o suficiente para utilizar a distribuição Normal. Assim, utilizamos
a seguinte transformação, em que o desvio padrão 𝜎 é o desvio padrão calculado a partir da amostra 𝜎 =
256, 𝑛 = 64, 𝜇 = 2000, 𝑥̅ = 1952:

                                                        𝑥̅ − 𝜇
                                                   𝑧=      𝜎
                                                          √𝑛

                                   1952 − 2000   −48 −48 −3
                              𝑧=               =     =    =   = −1,5
                                       256       256   32   2
                                       √64        8

A questão informa que P(Z > 1,5) = 0,07. Pela simetria da curva normal padrão, temos:

                                             P(Z < -1,5) = 0,07 = 7%


                                       7%

                                                   93%


                                            −1,5


---

Essa é a probabilidade de obter um valor mais extremo ou igual ao resultado observado, ou seja, é o p-valor
do teste.

Em relação à alternativa A, se o nível de significância for 𝛼 = 4%, teremos p-valor > 𝛼, caso em que não
devemos rejeitar a hipótese nula. Logo, a alternativa A está incorreta.

Em relação à alternativa B, se o nível de significância for 𝛼 = 10%, teremos p-valor < 𝛼, caso em que
devemos rejeitar a hipótese nula. Logo, a alternativa B está incorreta.

então, a área para z < -1,5 é 7% (p-valor para o teste unilateral). Assim, a hipótese nula é rejeitada para 𝛼 >
7% e aceita para 𝛼 < 7% (alternativas “a” e “b” incorretas).

Em relação à alternativa D, para um teste bilateral, os valores mais extremos seriam tanto para baixo quanto
para cima da média, conforme ilustrado a seguir:


                                         7%                         7%

                                                       96%


                                             −1,5            1,5

Logo, o p-valor seria igual a 14% e a alternativa D está correta.

Em relação à alternativa E, no teste bilateral, em que o p-valor é igual a 14%, a hipótese nula seria rejeitada
apenas se o nível de significância fosse 𝛼 > 14%. Por isso, a alternativa E está incorreta.

Gabarito: D

6.     (FGV/2018 – TJ-AL) Uma fonte oficial afirma que o valor do rendimento médio das pessoas que
recorrem à defensoria pública é menor do que um salário mínimo, ou seja, R$ 954. Para uma amostra de
25 cidadãos que recorreram ao serviço, o rendimento médio apurado foi de R$ 943. Adicionalmente, em
outros levantamentos, a variância dos rendimentos é conhecida, próxima de 1.600.
Sendo φ(1,25) ≅ 0,90, φ(1,5) ≅ 0,95 e φ(2) ≅ 0,975, sobre o teste para obtenção de evidência quanto à
veracidade da informação oficial, é correto afirmar que:
a) as hipóteses devem ser Ho: 𝜇 ≤ 954 vs Ha: 𝜇 > 954;

b) ao nível de 2,5%, a hipótese nula é rejeitada;

c) ao nível de 10%, a hipótese nula é rejeitada;

d) o p-valor correspondente à estimativa amostral é igual a 9%;

e) as hipóteses devem ser Ho: 𝜇 ≥ 943 vs Ha: 𝜇 < 943


---

Comentários:

Para resolver essa questão, é muito importante interpretar a situação dada no enunciado para definir qual
será a hipótese nula e qual será a hipótese alternativa.

O enunciado diz que o oficial afirma que a média de rendimento é inferior a R$ 954. Essa é a afirmação a ser
testada, de modo que iremos concordar com ela somente se tivermos convicção de que ela está coerente.

Em outras palavras, concordar com essa afirmativa corresponde à decisão forte do teste.

Por esse motivo, a hipótese nula será 𝐻𝑜 : 𝜇 ≥ 954 e a hipótese alternativa será 𝐻𝑎 : 𝜇 < 954. Assim, se
rejeitarmos a hipótese nula (decisão forte) concordaremos com o oficial.

Logo, as alternativas A e E estão incorretas.

Para conduzir esse teste, utilizamos a fórmula da transformação para a normal padrão:

                                                      𝑥̅ − 𝜇 𝑥̅ − 𝜇
                                               𝑧𝑡 =          = 𝜎
                                                         𝜎𝑥̅
                                                               √𝑛

O enunciado informa que:

    •   A média amostral observada foi 𝑥̅ = 943;
    •   O tamanho amostral é n = 25;
    •   A variância populacional é 𝜎 2 = 1600.
        Logo, o desvio padrão populacional é 𝜎 = √1600 = 40

Portanto, a estatística do teste é dada por:

                                       943 − 954   −11    11
                                𝑧𝑡 =             =     =−    = −1,375
                                          40       40      8
                                          √25       5

Trata-se de um teste unilateral à esquerda, como ilustrado a seguir:

                                            𝛼
                                               𝐿𝐼𝑁𝐹     𝜇


Em relação à alternativa B, para um nível 𝛼 = 2,5%, precisamos de um valor de z que delimite P (Z < z) = 2,5%.


---

Pela simetria da normal padrão, temos:

                                                  95%
                                   2,5%                            2,5%

                                          −𝑧       0           𝑧


O enunciado informa que φ(2) = P(Z < 2) = 0,975 = 97,5%. Logo, o valor de z que corresponde a um nível 𝛼 =
2,5% é zL = -2.

Assim, a estatística do teste 𝑧𝑡 = −1,375 está na região de não rejeição em relação a esse limite:

                                     2,5%

                                          −2 −1,375


Assim, não rejeitamos a hipótese nula a um nível 𝛼 = 2,5%, logo, a alternativa B está incorreta.

Em relação à alternativa C, para um nível 𝛼 = 10%, precisamos de um valor de z que delimite P (Z < z) = 10%.

Pela simetria da normal padrão, temos:

                                                  80%
                                     10%                           10%

                                            −𝑧     0       𝑧


O enunciado informa que φ(1,25) = P(Z < 1,25) = 0,90 = 90%.

Logo, o valor de z que corresponde a um nível 𝛼 = 10% é zL = -1,25.


---

Assim, a estatística do teste 𝑧𝑡 = −1,375 está na região de rejeição em relação a esse limite:

                                            10%
                                           −1,375 −1,25


Assim, rejeitamos a hipótese nula a um nível 𝛼 = 10%, logo, a alternativa C está correta.

Em relação à alternativa D, observamos que a estatística do teste 𝑧𝑡 = −1,375 está entre z = -1,25 e z = -1,5,
dentre os valores da normal padrão fornecidos no enunciado. Vimos que z = -1,5 está associado a um p-valor
de 10%, que é a probabilidade de obter um valor tão ou mais extremo.

Analogamente, sabendo que φ(1,5) = P(Z < 1,5) = 0,95 = 95%, temos a situação ilustrada a seguir:

                                                     90%
                                      5%                              5%

                                           −1,5         0       1,5

Assim, podemos concluir que z = -1,5 está associado a um p-valor de 5%. Em outras palavras, sabemos que
o p-valor do teste está entre 5% e 10%, mas não conseguimos, a partir dos dados fornecidos, afirmar qual é
o p-valor exato do teste. Por isso, a alternativa D está incorreta.

Gabarito: C

7.    (FGV/2017 – MPE-BA) Sejam duas populações, cujas variáveis de interesse, X e Y, são distribuídas
normalmente e independentes entre si. O objetivo é testar se há ou não diferença significativa entre as
médias. As informações disponíveis são:
              ̅ = 𝟏𝟕,
              𝑿             ̅ = 𝟐𝟓,
                            𝒀              𝝈𝟐𝑿 = 𝟏𝟔𝟎,       𝝈𝟐𝒀 = 𝟐𝟐𝟓,      𝒏𝑿 = 𝟏𝟔,     𝒏𝒀 = 𝟏𝟓
                        𝝓(𝟏, 𝟐𝟖) = 𝟎, 𝟗,      𝝓(𝟏, 𝟔𝟒) = 𝟎, 𝟗𝟓,          𝝓(𝟏, 𝟗𝟔) = 𝟎, 𝟗𝟕𝟓
Onde 𝝓 é a função de distribuição acumulada da normal padrão. Então:


---

a) observado da estatística do teste é -8 ou +8;

b) ao nível de significância de 10% rejeita-se a hipótese nula;

c) ao nível de 20% não é possível rejeitar Ho;

d) o valor da estatística do teste é -1,6 ou +1,6;

e) a média de X é significativamente diferente de zero.

Comentários:

Essa questão trabalha com o teste da diferença entre as médias de 2 populações, para verificar se
apresentam a mesma média ou não. As hipóteses desse teste (bilateral) são:

                                           𝐻𝑜 : 𝜇𝑋 = 𝜇𝑌 → 𝜇𝑋 − 𝜇𝑌 = 0

                                           𝐻𝑎 : 𝜇𝑋 ≠ 𝜇𝑌 → 𝜇𝑋 − 𝜇𝑌 ≠ 0

Assim, como os demais testes de hipóteses que se baseiam na curva normal, a estatística do teste
corresponde à fórmula da transformação para a normal padrão:

                                           𝑣𝑎𝑙𝑜𝑟 𝑜𝑏𝑠𝑒𝑟𝑣𝑎𝑑𝑜 − 𝑝𝑎𝑟â𝑚𝑒𝑡𝑟𝑜
                                      𝑧=
                                                   𝑑𝑒𝑠𝑣𝑖𝑜 𝑝𝑎𝑑𝑟ã𝑜

Como esse teste se refere à diferença entre as médias das populações, o parâmetro da hipótese nula é
𝜇𝑋−𝑌 = 0; e o valor observado corresponde à diferença entre as médias amostrais: 𝑋̅ − 𝑌̅.

Para calcular o desvio padrão da diferença das médias amostrais, vamos primeiro lembrar que a variância da
média amostral é a razão entre a variância populacional e o tamanho da amostra:

                                                       𝜎𝑋2                   𝜎𝑌2
                                           𝑉(𝑋̅) =         ,       𝑉(𝑌̅) =
                                                       𝑛𝑋                    𝑛𝑌

A variância da diferença entre variáveis independentes é dada pela soma das variâncias, logo:

                                                                         𝜎𝑋2 𝜎𝑌2
                                      𝑉(𝑋̅ − 𝑌̅) = 𝑉(𝑋̅) + 𝑉(𝑌̅) =          +
                                                                         𝑛𝑋 𝑛𝑌

                                                                                            𝜎   𝜎2    2
Por fim, o desvio padrão buscado é a raiz quadrada desse resultado: 𝜎𝑋̅−𝑌̅ = √𝑉(𝑋̅ − 𝑌̅) = √ 𝑋 + 𝑌
                                                                                                𝑛𝑋   𝑛𝑌


Portanto, a estatística do teste é dada por:

                                                               𝑋̅ − 𝑌̅
                                                     𝑧=
                                                           𝜎2 𝜎2
                                                          √ 𝑋+ 𝑌
                                                           𝑛𝑋 𝑛𝑌


---

Para analisar as alternativas A e D, substituímos os dados fornecidos (𝑋̅ = 17, 𝑌̅ = 25, 𝜎𝑋2 = 160, 𝜎𝑌2 = 225,
𝑛𝑋 = 16 e 𝑛𝑌 = 15) na fórmula acima:

                                 17 − 25            −8              8     8
                         𝑧𝑜 =                =               =−        = − = −1,6
                                                  √10 + 15         √25    5
                                √160 + 225
                                 16    15

Assim, concluímos que a alternativa A está incorreta e que a alternativa D está correta. Pontue-se que as
alternativas preveem valores positivos ou negativos, porque a ordem das populações pode variar, ou seja,
podemos calcular 𝑋̅ − 𝑌̅ ou 𝑌̅ − 𝑋̅.

Em relação à alternativa B, a um nível 𝛼 = 10% de significância, temos:

                                                    1−𝛼
                                   𝛼                = 90%               𝛼
                                     = 5%                                 = 5%
                                   2                                    2
                                           −𝑧𝐶                𝑧𝐶


Logo, precisamos de um valor de z que delimita uma probabilidade 𝜙(𝑧𝐶 ) = 𝑃(𝑍 < 𝑧𝐶 ) = 5% + 90% =
0,95. Pelos dados fornecidos, observamos que 𝑧𝐶 = 1,64. Como esse valor é superior à estatística observada
do teste, 𝑧𝐶 > 𝑧𝑜 , então não rejeitamos a hipótese nula, nessa situação. Assim, a alternativa B está incorreta.

Em relação à alternativa C, a um nível 𝛼 = 20% de significância, temos:

                                                    1−𝛼
                                  𝛼                                𝛼
                                                    = 80%            = 10%
                                    = 10%                          2
                                  2
                                            −𝑧𝐶              𝑧𝐶


Nessa situação, precisamos de um valor de z que delimita uma probabilidade 𝜙(𝑧𝐶 ) = 𝑃(𝑍 < 𝑧𝐶 ) = 10% +
80% = 0,9. Pelos dados fornecidos, observamos que 𝑧𝐶 = 1,28. Como esse valor é inferior à estatística do
teste, 𝑧𝐶 < 𝑧𝑜 , então rejeitamos a hipótese nula. Logo, a alternativa C está incorreta.

Em relação à alternativa E, o objetivo do teste é verificar se há ou não diferença entre as médias das
populações, e não testar se a média de uma população é diferente ou não de zero. Por isso, a alternativa E
está incorreta.


---

Gabarito: D

8.     (FGV/2015 – TCM-SP) Em termos ideais, a legislação municipal recomenda que os gastos com
despesas de merenda escolar, na rede de ensino fundamental, sejam de pelo menos R$80 em média, por
aluno, por mês. Através de uma amostra de dezesseis escolas foi calculada a média de R$74, sendo a
variância populacional conhecida igual a 144. São fornecidos também valores da distribuição normal
padrão e respectivas probabilidades, conforme abaixo:
 z             1,28    1,64     1,96    2,33

 P(|Z| > z)    20%     10%      5%      2%


Assim sendo, na tentativa de demonstrar que aquela recomendação não está sendo respeitada, é
proposto, pelo TCM- SP, um teste de hipótese sobre o qual é correto afirmar que:
a) o conjunto de hipóteses deve ser Ho: μ ≤ 80 contra Ha: μ > 80;
b) ao nível de significância de 5% a hipótese nula será rejeitada;
c) o p-valor associado ao conjunto adequado de hipóteses é de 2%;
d) o conjunto de hipóteses deve ser Ho: μ ≥ 74 contra Ha: μ < 74;
e) a probabilidade de que o erro Tipo II seja cometida é de 15%.

Comentários:

Considerando que as despesas devem ser de pelo menos R$ 80, então a hipótese nula deve ser H o: μ ≥ 80
contra Ha: μ < 80. Com isso, observamos que as alternativas A e D estão incorretas.

Por se tratar de um teste para a média com variância conhecida, utilizamos a seguinte transformação para a
normal padrão:

                                                      𝑥̅ − 𝜇
                                                 𝑧=      𝜎
                                                        √𝑛

O enunciado informa que a variância populacional é 𝜎 2 = 144, logo o desvio padrão populacional (raiz
quadrada da variância) é:

                                            𝜎 = √𝜎 2 = √144 = 12

Considerando que a média amostral observada foi 𝑥̅ = 74 que o tamanho da amostra foi 𝑛 = 16, a
transformação para a normal padrão é:

                                            74 − 80   −6 −6
                                       𝑧=           =    =   = −2
                                              12      12   3
                                             √16       4


---

Por ser um teste unilateral, o p-valor é igual P(Z < -2). O enunciado não informa essa probabilidade, mas
informa que P(|Z| > 1,96) = 5%, ou seja:

                                  P(|Z| > 1,96) = P(Z < -1,96) + P(Z > 1,96) = 5%

Pela simetria da normal padrão, temos P(Z < -1,96) = P(Z > 1,96), logo:

                                                2 x P(Z < -1,96) = 5%

                                                P(Z < -1,96) = 2,5%

Ou seja, o p-valor é um valor muito próximo de 2,5%. Por isso, a alternativa C está incorreta.

Em relação à alternativa B, sendo o nível de significância 𝛼 = 5%, temos p-valor < 𝛼 e, assim, a hipótese nula
será rejeitada. Logo, a alternativa B está correta.

Em relação à alternativa E, para calcular a probabilidade do erro tipo II (aceitar a hipótese nula, sendo ela
falsa), precisamos da média verdadeira. Como esse valor não foi fornecido, não temos condições de calcular
a probabilidade do erro tipo II e, assim, a alternativa E está incorreta.

Gabarito: B

9.     (FGV/2015 – TJ-BA) Um teste de hipótese deve ser formulado para verificar se o valor médio das
causas de uma determinada população de processos seria superior a 10 salários mínimos. Para tanto é
realizada uma amostra de tamanho n = 25, sendo apurada 𝑿̅ , média amostral, igual a 13,15.

Outros levantamentos, sobre a mesma população, já haviam constatado que a variância dos valores é igual
a 𝝈𝟐 = 49. Além disso, é fornecida a seguinte tabela de probabilidades da distribuição Normal-Padrão Z:

 Intervalos de Z     |z| > 1,28    |z| > 1,65     |z| > 1,96    |z| > 2,25   |z| > 2,33

 Probabilidades      20,0%         10,0%          5,0%          2,5%         2,0%

O nível de significância utilizado foi de 2,5%. Sobre o resultado final da inferência tem-se que:

a) o conjunto de hipóteses mais adequado aos objetivos do teste é Ho: μ ≥ 10 contra Ha: μ < 10;

b) ao nível de significância que foi especificado, a hipótese nula Ho: μ ≤ 10 não poderá ser rejeitada;

c) caso o teste a ser utilizado fosse bilateral, o p-valor correspondente seria inferior a 5%, mas superior a 3%;

d) o teste é Ho: μ ≤ 10 contra Ha: μ > 10 não é capaz, pela sua estrutura, de gerar a evidência estatística
desejada;

e) para que a hipótese nula não fosse rejeitada o nível de significância a ser utilizado deveria estar abaixo de
1,25%.


---

Comentários:

O enunciado informa que o objetivo é verificar se o valor médio é superior a 10 salários mínimos. Essa
hipótese a ser testada corresponde à hipótese alternativa.

Assim, a hipótese nula será 𝐻𝑜 : 𝜇 ≤ 10 e a hipótese alternativa será 𝐻𝑎 : 𝜇 > 10. Com isso já podemos
concluir que a alternativa A está incorreta, pois ela inverte as hipóteses nula e alternativa.

Temos, portanto, um teste unilateral à esquerda:

                                                                     𝛼
                                                     𝜇 = 10        𝐿𝑆𝑢𝑝


Para conduzir o teste, utilizamos a fórmula da transformação para a normal padrão:

                                                    𝑥̅ − 𝜇 𝑥̅ − 𝜇
                                             𝑧𝑡 =          = 𝜎
                                                       𝜎𝑥̅
                                                             √𝑛

O enunciado informa que o tamanho da amostra é n = 25 e que a variância da população é 𝜎 2 = 49.

Logo, o desvio padrão populacional é 𝜎 = √𝜎 2 = √49 = 7 e o desvio padrão da média amostral é:

                                                𝜎         7        7
                                        𝜎𝑥̅ =        =         =     = 1,4
                                                √𝑛       √25       5

Assim, a estatística do teste para 𝑥̅ = 13,15 é:

                                             13,15 − 10 3,15
                                      𝑧𝑡 =             =     = 2,25
                                                 1,4     1,4

Os dados da normal padrão fornecidos indicam as probabilidades da forma P(|Z| > z), em que |Z| é o módulo
de Z, isto é, o seu valor absoluto.

Em outras palavras, os dados da tabela fornecida indicam as probabilidades para valores maiores que z, em
termos absolutos, isto é, maiores que z ou menores que -z.

Assim, essas probabilidades correspondem à soma:

                                        P(|Z| > z) = P(Z < -z) + P(Z > z)


---

                                 P(Z<-z)                            P(Z>z)

                                           −𝑧        0          z


Como o nosso teste é unilateral, para termos um nível de significância 𝛼 = P(Z > z) = 2,5%, precisamos do
valor de z tal que a probabilidade bilateral é P(|Z| > z) = 5%. Pelos dados fornecidos, observamos que z C =
1,96. Como a estatística observada do teste zt = 2,25 é superior ao limite crítico zC = 1,96, então rejeitamos
a hipótese nula. Assim, concluímos que a alternativa B está incorreta, pois esta indica que a hipótese nula
não pode ser rejeitada nessas condições.

Também concluímos que a alternativa D está incorreta, pois esta indica que o teste não gera evidência
estatística. Dizemos que um teste gera evidência estatística quando rejeitamos a hipótese nula (que
corresponde à decisão com força estatística).

Em relação à alternativa E, a hipótese nula não seria rejeitada se o nível de significância fosse menor que o
p-valor do teste. Pelos dados da tabela, observamos que P(|Z| > 2,25) = 2,5%. Assim, a probabilidade
unilateral associada a zt = 2,25 é a metade:

                                    p-valor = P(Z > 2,25) = 2,5%/2 = 1,25%

Logo, podemos concluir que a hipótese nula são seria rejeitada se o nível de significância fosse menor que
1,25% e que a alternativa E está correta.

Em relação à alternativa C, caso o teste fosse bilateral, o p-valor seria o dobro, p = 2,5%, que é inferior a 3%.
Logo, a alternativa C está incorreta.

Gabarito: E

10.    (FGV/2015 – TJ-RO) Um levantamento censitário de processos criminais indicou que a pena média,
para determinado tipo de crime, é de 60 meses. Visando testar a maior severidade dos juízes de certa
região foi extraída uma AAS de tamanho n = 36, constatando-se que a pena média é de 78 meses. Sabendo
que a variância das penas é dada igual a 3.600 e considerando as informações a seguir da normal padrão
Z:
P(|Z| > 1,28) = 0,20; P(|Z| > 1,64) = 0,10; P(|Z| > 1,96) = 0,05
É correto afirmar que:

a) ao nível de 5% de significância a hipótese nula não pode ser rejeitada;


---

b) ao nível de 2,5% rejeita-se a hipótese nula;

c) ao nível de 10%, a hipótese nula não pode ser rejeitada;

d) o limite de rejeição da hipótese nula de 5% é 45,6;

e) o limite de rejeição da hipótese nula de 5% é 76,4.

Comentários:

O enunciado informa que o objetivo é testar a maior severidade dos juízes, isto é, se a pena média é ou não
maior que 60 meses.

Assim, a hipótese nula será 𝐻𝑜 : 𝜇 ≤ 60 e a hipótese alternativa será 𝐻𝑎 : 𝜇 > 60, sendo o teste unilateral à
direta, em que o limite da região crítica é superior à média:

                                                      𝜇 = 60        𝐿𝑆𝑢𝑝
Com isso, já podemos concluir que a alternativa D, que menciona um limite inferior à média, está incorreta.

Para conduzir o teste, utilizamos a fórmula da transformação para a normal padrão:

                                                      𝑥̅ − 𝜇 𝑥̅ − 𝜇
                                            𝑧𝑡 =             = 𝜎
                                                         𝜎𝑥̅
                                                               √𝑛

O enunciado informa que o tamanho da amostra é n = 36 e que a variância da população é V(X) = 3600.

Logo, o desvio padrão populacional é 𝜎 = √𝑉(𝑋) = √3600 = 60 e o desvio padrão da média amostral é:

                                                  𝜎       60        60
                                        𝜎𝑥̅ =         =         =      = 10
                                                √𝑛        √36        6

Assim, a estatística do teste para 𝑥̅ = 78 é:

                                                78 − 60 18
                                         𝑧𝑡 =          =    = 1,8
                                                  10     10

A alternativa A trabalha com um nível de significância 𝛼 = 5%.


---

Os dados da normal padrão fornecidos indicam as probabilidades da forma P(|Z| > z) = P(Z < -z) + P(Z > z),
ilustrado a seguir:

                                  P(Z<-z)                             P(Z>z)

                                          −𝑧         0            z

Assim, para termos um nível de significância unilateral P(Z > z) = 5%, precisamos do valor de z tal que a
probabilidade bilateral é P(|Z| > z) = 10%. Pelos dados fornecidos, observamos que zC = 1,64.

Como a estatística observada do teste zt = 1,8 é superior ao limite crítico zC = 1,64, então rejeita-se a hipótese
nula a um nível de significância 𝛼 = 5%. Logo, a alternativa A está incorreta.

A alternativa C trabalha com um nível de significância unilateral ainda maior, 𝛼 = P(Z > z) = 10%. Assim, o
limite crítico será ainda menor do que o limite calculado na alternativa A. Para esse nível de significância,
precisamos do valor de z que delimita uma probabilidade bilateral P(|Z| > z) = 20%. Pelos dados fornecidos,
observamos que zC = 1,28.

Como a estatística observada do teste zt = 1,8 é superior ao limite crítico zC = 1,96, então devemos rejeitar a
hipótese nula a esse nível de significância. Logo, a alternativa C está incorreta.

Em relação às alternativas D e E, o limite para esse nível de significância de 5%, em que z C = 1,64, pode ser
calculado a partir da seguinte transformação:

                                                         𝐿 − 60
                                                1,64 =
                                                           10

                                            𝐿 = 16,4 + 60 = 76,4

Assim, concluímos que a alternativa E está correta e que a alternativa D está incorreta.

A alternativa B trabalha com um nível de significância unilateral 𝛼 = P(Z > z) = 2,5%. Assim, precisamos do
valor de z tal que a probabilidade bilateral é P(|Z| > z) = 5%. Pelos dados fornecidos, observamos que z C=1,96.

Como a estatística observada do teste zt = 1,8 é inferior ao limite crítico zC = 1,96, então não se rejeita a
hipótese nula a esse nível de significância. Logo, a alternativa B está incorreta.

Gabarito: E


---

11.   (FGV/2014 – SEDUC-AM) Uma amostra aleatória de tamanho 100 será usada para testar H 0: 𝝁 ≤
𝟐𝟎 versus H1: 𝝁 > 𝟐𝟎, em que 𝝁 é a média de uma variável normalmente distribuída com variância 16.
O critério de decisão correspondente ao teste uniformemente mais poderoso de tamanho 𝜶 = 𝟎, 𝟎𝟓
rejeitará H0 se o valor da média amostral for
a) menor do que 21,354
b) maior do que 20,656.
c) maior do que 21,354.
d) menor do que 20,656.
e) maior do que 19,344.

Para essa questão considere a tabela normal constante no final desta seção de questões.

Comentários:

Trata-se de um teste unilateral à direita para a média, que é supostamente 𝜇 ≤ 20. Essa hipótese será
rejeitada se a média amostral observada for superior a um limite LSUP, calculado a partir do nível de
significância 𝛼 = 5%. Assim, descartamos as alternativas A e D, que afirmam que a rejeição ocorrerá se a
média amostral observada for menor do que determinado valor. Além disso, sabemos que o limite LSUP é
superior ao parâmetro 𝜇 = 20 e, assim, descartamos a alternativa E, que propõe um limite inferior a esse
parâmetro.

Considerando que a variância populacional é conhecida, a transformação para a normal padrão é dada por:

                                                   𝐿𝑆𝑈𝑃 − 𝜇
                                            𝑧𝐶 =      𝜎
                                                      √𝑛

O enunciado informa que a variância populacional é 𝜎 2 = 16. Logo, o desvio padrão populacional (raiz
quadrada da variância) é:

                                         𝜎 = √𝜎 2 = √16 = 4

O valor de z delimita uma probabilidade P(Z > z C) = 0,05 (nível de significância). A probabilidade
complementar é, então:

                                        P(Z < zC) = 1 – 0,05 = 0,95

Pela tabela constante ao final desta seção, observamos que o valor de zC é 1,64, pois P(Z < 1,64) ≅ 0,95.
Substituindo esses dados na fórmula da transformação, sabendo que o tamanho amostral é 𝑛 = 100, temos:

                                            𝐿𝑆𝑈𝑃 − 20   𝐿𝑆𝑈𝑃 − 20
                                   1,64 =             =
                                                4           4
                                              √100         10

                                   𝐿𝑆𝑈𝑃 − 20 = 1,64 × 0,4 = 0,656

                                            𝐿𝑆𝑈𝑃 = 20,656


---

Logo, a hipótese nula é rejeitada para 𝑥̅ > 20,656.

Gabarito: B

12.    (FGV/2014 – DPE-RJ) Para testar a renda média dos cidadãos efetivamente atendidos pela
Defensoria Pública do Estado foi realizado um levantamento a partir dos registros já existentes, que
geraram uma amostra aleatória de tamanho n=100, para a qual foi calculada a média amostral igual a R$
920,00 por mês. Deseja-se demonstrar, cabalmente, que, em média, os beneficiários ganham menos do
que R$ 1.000 por mês. Além disso, o desvio-padrão populacional é conhecido, sendo igual a 500. Portanto,
se Φ(-2,00) = 2,28% e Φ(-1,5) = 6,68%, onde Φ(.) é a distribuição acumulada da Normal Padrão. Então,
neste caso, a hipótese nula seria
a) rejeitada ao nível de 2,28% e não rejeitada com significância de 6,68%.
b) não rejeitada ao nível de 2,28% e rejeitada com significância de 6,68%.
c) rejeitada tanto com 97,72% quanto com 93,32% de grau de confiança.
d) rejeitada ao nível de significância de 1,14% e 3,34%, bilateral.
e) não rejeitada tanto ao nível de significância de 2,28% quanto de 6,68%.

Comentários:

Considerando que o objetivo é demonstrar cabalmente que os beneficiários ganham menos do que R$ 1.000
por mês, em média, então essa afirmação deve estar associada à rejeição da hipótese nula, pois essa é a
decisão forte. Assim, a hipótese nula será 𝐻𝑜 : 𝜇 = 1000 e a hipótese alternativa será 𝐻𝑎 : 𝜇 < 1000.
Portanto, temos um teste unilateral à esquerda.

Tratando-se de um teste para a média, com variância conhecida, utilizamos a seguinte transformação para
a normal padrão:

                                                      𝑥̅ − 𝜇
                                                 𝑧=      𝜎
                                                        √𝑛

O enunciado informa que a média amostral observada foi 𝑥̅ = 920, que o desvio padrão populacional é 𝜎 =
500 e que o tamanho da amostra foi 𝑛 = 100. Então, a estatística do teste é:

                                      920 − 1000   −80 −80
                                 𝑧=              =     =    = −1,6
                                         500       500   50
                                        √100       10

O enunciado informa, ainda, que P(Z  -2) = 2,28% e P(Z  -1,5) = 6,68%. A estatística do teste está entre -1,5
e -2. Por se tratar de um teste unilateral à esquerda, essas probabilidades são justamente iguais aos
respectivos níveis de significância. Assim, a hipótese nula é rejeitada a um nível de 2,28% de significância,
mas não a um nível de 6,68%. Então, a alternativa correta é a alternativa B.

Note que podemos descartar a alternativa A, mesmo sem efetuar qualquer cálculo, pois não é possível
rejeitar a um nível de significância 𝛼 = 2,28% e não rejeitar a um nível maior.


---

Gabarito: B

13.   (FGV/2014 – SEDUC-AM) Os diâmetros da seção reta de componentes cilíndricos produzidos por
uma determinada empresa são normalmente distribuídos. O processo industrial prevê uma média de 1 cm
e um desvio padrão de 0,1 cm para esses diâmetros.
Para avaliar se, num determinado momento, o processo ainda está ajustado para a média de 1 cm, o
controle de qualidade da empresa resolve adotar a seguinte estratégia: obter uma amostra aleatória de
tamanho 64 e rejeitar a hipótese H de que a média é igual a 1cm com base no intervalo de 95% de confiança
para a média. Obtida a amostra, verificou-se uma média amostral igual a 1,01 cm. Supondo que o desvio
padrão populacional continua igual a 0,1 cm, o intervalo de confiança para a média e a respectiva decisão,
ao nível de significância de 5%, são:
a) (0,9855, 1,0345), não rejeitar H
b) (0,9645, 1,0555), não rejeitar H
c) (0,9855, 1,0345), rejeitar H
d) (0,9645, 1,0555), rejeitar H
e) (0,9635, 1,0655), rejeitar H

Comentários:

O enunciado pede para construirmos um intervalo de confiança para a média e, com base nele, decidir
quanto à rejeição ou não da hipótese nula.

Nesse caso, construímos o intervalo a partir da média amostral observado, 𝑋̅ = 1,01, e verificamos se o
intervalo construído contempla o parâmetro indicado na hipótese nula.

Se contemplar, então não rejeitamos a hipótese nula; senão, então rejeitamos a hipótese nula.

Observe que todos os intervalos indicados nas alternativas contemplam o parâmetro da hipótese nula, 𝜇 =
1. Portanto, sabemos que a decisão será de não rejeição (alternativas C, D e E incorretas).

O intervalo de confiança para a média pode ser obtido a partir da fórmula de transformação para a normal
padrão:

                                                     𝑥̅ − 𝜇
                                             ±𝑧𝐶 =      𝜎
                                                       √𝑛

Reorganizando essa fórmula, temos os seguintes limites do intervalo de confiança para a média:

                                                           𝜎
                                             𝜇 = 𝑥̅ ± 𝑧𝐶
                                                           √𝑛

A questão indica que o nível de significância é 𝛼 = 5%, ou seja, o nível de confiança é 1 − 𝛼 = 95%, com
𝛼⁄ = 2,5%, de cada lado do intervalo, como ilustrado abaixo:
  2


---

                                        2,5%                          2,5%

                                                     95%


                                              −𝑧𝐶      0         𝑧𝐶

Ou seja, a função de distribuição acumulada para zC tem valor P(Z < zC) = 2,5% + 95% = 97,5% = 0,975. Pela
tabela normal, constante ao final desta seção, observamos que z = 1,96, pois P(Z < 1,96) = 0,975.

Sabendo que a média amostral é 𝑥̅ = 1,01, que o desvio padrão populacional é 𝜎 = 0,1 e que o tamanho da
amostra é 𝑛 = 64, então o intervalo de confiança é:

                         𝜎                    0,1              0,196
               𝑥̅ + 𝑧𝐶        = 1,01 + 1,96         = 1,01 +         = 1,01 + 0,0245 = 1,0345
                         √𝑛                   √64                8

                         𝜎                    0,1              0,196
               𝑥̅ − 𝑧𝐶        = 1,01 − 1,96         = 1,01 −         = 1,01 − 0,0245 = 0,9855
                         √𝑛                   √64                8

Como esse intervalo contempla o parâmetro 𝜇 = 1, não rejeitamos a hipótese nula.

Gabarito: A

14.     (FGV/2013 – SUDENE-PE) Para testar H0:   50 versus H1: > 50, em que  é a média populacional
de uma variável N(,2), uma amostra aleatória de tamanho 100 foi obtida e mostrou uma média amostral
igual a 50,7 com um desvio padrão amostral igual a 5. O p‐valor aproximado associado a esses dados e a
decisão ao nível de significância de 5% são, respectivamente,
a) 0,01 e rejeitar Ho.
b) 0,08 e rejeitar Ho.
c) 0,08 e não rejeitar Ho.
d) 0,92 e rejeitar Ho.
e) 0,92 e não rejeitar Ho.

Comentários:

Apesar de o desvio padrão ser o desvio padrão amostral, o que implicaria no uso da distribuição de t-Student,
uma amostra de tamanho n = 100 (ou seja, a distribuição apresenta k = 100 – 1 = 99 graus de liberdade) é
suficientemente grande para utilizar a distribuição Normal.

Assim, a estatística do teste é dada pela seguinte transformação, em que o desvio padrão 𝜎 é o desvio padrão
calculado a partir da amostra 𝜎 = 5, 𝑛 = 100, 𝜇 = 50, 𝑥̅ = 50,7:


---

                                   𝑥̅ − 𝜇 50,7 − 50   0,7
                              𝑧=      𝜎 =           =     = 0,7 × 2 = 1,4
                                              5        5
                                     √𝑛     √100      10

Pela tabela normal padrão constante no final desta seção, observamos que P(Z < 1,4) = 0,9192. Logo, o seu
complementar é:

                                    P(Z > 1,4) = 1 – 0,9192 = 0,0818  0,08

Por se tratar de um teste unilateral à direita, essa é a probabilidade de obter um valor igual ou mais extremo
que o resultado obtido, isto é, o p-valor. Considerando que o p-valor é menor que o nível de significância 
= 5% = 0,05, não rejeitamos a hipótese nula.

Gabarito: C

15.    (FGV/2010 – SEFAZ-RJ) Para testar H0: 𝝁 ≤ 𝟏𝟎 contra H1: 𝝁 > 𝟏𝟎 sendo 𝝁 a média de uma variável
populacional suposta normalmente distribuída com variância igual a 100, uma amostra aleatória simples
de tamanho 25 foi obtida e resultou num valor da média amostral igual a 15,76. Ao nível de significância
de 5%, o valor-p (nível crítico) correspondente e a decisão a ser tomada são respectivamente:
a) 0,102 e não rejeitar H0.
b) 0,01 e rejeitar H0.
c) 0,058 e não rejeitar H0.
d) 0,002 e rejeitar H0.
e) 0,154 e não rejeitar H0.

Comentários:

Tratando-se de um teste para a média 𝜇 = 10, com variância conhecida, utilizamos a seguinte transformação
para a normal padrão:

                                                      𝑥̅ − 𝜇
                                                 𝑧=      𝜎
                                                        √𝑛

O enunciado informa que a variância populacional é 𝜎 2 = 100. Logo, o desvio padrão populacional (raiz
quadrada da variância) é 𝜎 = √𝜎 2 = √100 = 10.

Ademais, o enunciado informa que a média amostral observada foi 𝑥̅ = 15,76 e que o tamanho da amostra
foi 𝑛 = 25. Então, a estatística do teste é:

                                        15,76 − 10   5,76 5,76
                                   𝑧=              =     =     = 2,88
                                            10        10    2
                                           √25         5


---

Pela tabela normal fornecida ao final desta seção, observamos que P(Z < 2,88) = 0,998, logo o seu
complementar é:

                               P(Z > 2,88) = 1 – P(Z < 2,88) = 1 – 0,998 = 0,002

Por se tratar se tratar de um teste unilateral à direita, essa é a probabilidade de obter um resultado igual ou
mais extremo do que o valor observado (ou seja, corresponde ao p-valor do teste). Como esse valor é inferior
ao nível de significância fornecido no enunciado, 𝛼 = 5% = 0,05, devemos rejeitar a hipótese nula.

Gabarito: D


---

Tabela da Distribuição Normal Padrão: P(Z < z)


---

---

                        QUESTÕES COMENTADAS - FGV

Testes para a Proporção

1.      (FGV/2022 – TRT/MA) Para testar se a proporção p de pessoas infectadas pela dengue já é superior
a 10%, num dado momento, uma amostra aleatória simples de 400 pessoas será observada e será usado
o critério de decisão que decide por p > 10% se ao menos 48 pessoas estiverem infectadas.

O nível de significância associado a esse critério é aproximadamente igual a

a) 0,01.
b) 0,02.
c) 0,05.
d) 0,09.
e) 0,12.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

Comentários:

Essa questão trabalha com o teste para a proporção, em que as hipóteses são:
                                                  𝐻0 : 𝑝 = 10%
                                                  𝐻1 : 𝑝 > 10%
O enunciado informa que, se pelo menos 48 pessoas, da amostra de 400 pessoas, estiverem infectadas, ficará
decido que p > 10%. Em outras palavras, o limite crítico para a proporção amostral é:
                                                  48   12
                                           𝑝̂ =      =    = 0,12
                                                  400 100
Utilizando a aproximação à distribuição normal, haja vista o tamanho da amostra, temos a seguinte
transformação para a normal padrão, sabendo que 𝑝 = 0,1, logo 𝑞 = 1 − 𝑝 = 0,9, e que 𝑛 = 400:
                                  𝑝̂ − 𝑝       0,12 − 0,1       0,02 0,4
                             𝑧=            =                =        =     ≅ 1,33
                                    𝑝. 𝑞                         0,3   0,3
                                  √            √0,1 × 0,9        20
                                     𝑛             400
Assim, o nível de significância, isto é, a probabilidade de obter uma proporção amostral que nos leva à
rejeição da hipótese nula, dado que a verdadeira proporção populacional é 𝑝 = 0,1, corresponde a:
                                      𝑃(𝑝̂ > 0,12) = 𝑃(𝑍 > 1,33)
Pela tabela fornecida, observamos que 𝑃(𝑍 < 1,33) = 0,9082. A probabilidade desejada é complementar:
                   𝑃(𝑝̂ > 0,12) = 1 − 𝑃(𝑍 < 1,33) = 1 − 0,9082 = 0,0918 ≅ 0,09
Gabarito: D


---

2.     (FGV/2022 – EPE) Um fabricante de certo produto afirma que, no máximo, 10% dos seus produtos
são defeituosos. Um comprador desconfiado do fabricante resolveu analisar uma amostra de tamanho
100 desses produtos e encontrou 19 itens defeituosos.
Considere α = 5% e que P(Z ≤ 1,64) = 0,95.
O valor da estatística de teste mais adequada para testar a hipótese nula de que o fabricante tem razão e
a respectiva conclusão são, respectivamente,

a) 3,0 e concluir que o fabricante tem razão.

b) 3,0 e concluir que o fabricante não tem razão.

c) 2,0 e concluir que o fabricante tem razão.

d) 2,0 e concluir que o fabricante não tem razão.

e) 2,5 e concluir que o fabricante tem razão.

Comentários:

Essa questão trabalha com um teste de hipóteses para proporções. O objetivo é verificar a proporção de
defeito indicada pelo fabricante é no máximo 𝑝 = 10% = 0,1, que corresponde à hipótese nula.

O enunciado informa que foi selecionada uma amostra de tamanho 𝑛 = 100, sendo encontrados 19 itens
defeituosos. Logo, a proporção de defeito encontrada na amostra é:

                                                       19
                                                𝑝̂ =       = 0,19
                                                       100

Com 𝑝 = 0,1 (logo, 𝑞 = 1 − 𝑝 = 0,9) e 𝑝̂ = 0,19, podemos calcular a estatística do teste:

                                                         𝑝̂ − 𝑝
                                                   𝑧=
                                                           𝑝. 𝑞
                                                         √
                                                            𝑛

Vale pontuar que, no cálculo do denominador da fórmula, que corresponde ao desvio padrão da proporção
amostral, consideramos a proporção indicada na hipótese nula.

                                   0,19 − 0,1          0,09        0,09 0,09
                              𝑧=                 =             =        =      =𝟑
                                                                    0,3   0,03
                                   √0,1 × 0,9          √0,09        10
                                       100              100

Por fim, precisamos comparar esse resultado ao valor crítico. Sendo o nível de significância 𝛼 = 5% e o teste
unilateral, precisamos do valor de z que delimita uma probabilidade P(Z < z) = 95%. Pelo dado do enunciado,
observamos que z = 1,64.


---

Como a estatística do teste é maior que o valor crítico, rejeitamos a hipótese nula, ou seja, concluímos que
o fabricante não tem razão.

Gabarito: B

3.      (FGV/2021 – FUNSAÚDE-CE) Para testar H0: p ≤ 0,5 versus H1: p > 0,5, em que p é uma proporção
de “sucessos” populacional, uma amostra aleatória simples de tamanho 144 será obtida e será usado o
critério de decisão que rejeitará H0 se a proporção de “sucessos” observada na amostra for maior do que
0,6. O nível de significância desse critério é, aproximadamente, igual a

a) 0,01;

b) 0,02;

c) 0,03;

d) 0,04;

e) 0,05.

Para resolver essa questão, utilize a tabela normal apresentada ao final, fornecida na prova.
Comentários:

O enunciado pede o nível de significância do teste, que é a probabilidade de rejeitar a hipótese nula sendo
ela verdadeira.

Para isso, informa que a hipótese será rejeitada se a proporção amostral for maior que 𝑝̂ = 0,6 e que a
proporção indicada na hipótese nula é p = 0,5. Assim, temos a seguinte transformação para a normal padrão:

                                                           𝑝̂ − 𝑝
                                                      𝑧=
                                                             𝑝. 𝑞
                                                           √
                                                              𝑛

           𝑝.𝑞
Em que √         corresponde ao desvio padrão da proporção amostral. Substituindo os valores fornecidos:
           𝑛


                                     0,6 − 0,5        0,1         12 12
                                𝑧=                =       = 0,1 ×     =   = 2,4
                                                      0,5         0,5   5
                                     √0,5 × 0,5       12
                                         144

Pela tabela normal padrão, observamos que P(Z < 2,4) = 0,9918. Logo, a probabilidade de obter uma
proporção maior que 𝑝̂ = 0,6 é complementar:

                 𝑃(𝑝̂ > 0,6) = 𝑃(𝑍 > 2,4) = 1 − 𝑃(𝑍 < 2,4) = 1 − 0,9918 = 0,0082 ≅ 0,01


---

Gabarito: A
4.     (FGV/2018 – AL-RO) Para testar a hipótese nula H0 de que a proporção populacional de pessoas
acometidas por certa doença virótica não é maior do que 10% contra a hipótese alternativa de que ela é
maior do que 10%, uma amostra aleatória simples de tamanho 256 foi observada e revelou que, dessas
256 pessoas, 32 estavam acometidas pela referida doença.
Usando a proporção de acometidos na amostra como estatística de teste e apoiado no teorema do limite
central, o p-valor aproximado associado a esses dados e a respectiva decisão a ser tomada ao nível de
significância de 5%, são
a) P ≈ 0,24, não rejeitar H0

b) P ≈ 0,03, rejeitar H0

c) P ≈ 0,09, não rejeitar H0

d) P ≈ 0,09, rejeitar H0

e) P ≈ 0,03, não rejeitar H0

Para essa questão considere a tabela normal constante no final desta seção de questões.

Comentários:

O enunciado informa que a hipótese nula é Ho: p = 10% e a hipótese alternativa é Ha: p > 10%.

Logo, temos um teste unilateral à direita. Por se tratar de um teste para proporções, a estatística do teste,
considerando a aproximação à normal (Teorema Central do Limite) é dada por:

                                                          𝑝̂ − 𝑝
                                                     𝑧=
                                                            𝑝. 𝑞
                                                          √
                                                             𝑛

Em que p é a proporção indicada na hipótese nula, p = 0,1; q = 1 – p = 0,9; e n é o tamanho da amostra, n =
256. A proporção 𝑝̂ encontrada na amostra foi:

                                                   32  1
                                            𝑝̂ =      = = 0,125
                                                   256 8

Substituindo esses dados na fórmula acima, temos:

                       0,125 − 0,1       0,025       0,025          16    16  4
                  𝑧=                 =           =         = 0,25 ×    =     = ≅ 1,33
                                                      0,3            3   4×3 3
                       √0,1 × 0,9        √0,09        16
                           256            256

Pela tabela fornecida na prova, observamos que P(Z < 1,33) = 0,9082. Logo, a probabilidade complementar
é:

                                  P(Z > 1,33) = 1 – 0,9082 = 0,0918 ≈ 0,09


---

                                                                   9%

                                                           1,33

Essa é a probabilidade de obter um valor mais extremo ou igual ao resultado observado, ou seja, é o p-valor
do teste. Portanto, a um nível de significância 𝛼 = 5%, teremos p-valor > 𝛼 e não devemos rejeitar a hipótese
nula.

Gabarito: C

5.      (FGV/2013 – SUDENE-PE) Para estimar a proporção p de moradores de uma cidade favoráveis à
realização de um certo evento de grande porte, uma amostra aleatória de 900 pessoas foi observada e
mostrou, na amostra, 64% de pessoas favoráveis ao evento.

Se quisermos testar H0: p  0,6 versus H1: p > 0,6, ao nível de significância de 5%, a região crítica aproximada
e a correspondente decisão serão:

Use: √𝟎, 𝟐𝟒 = 𝟎, 𝟓

a) (0,61; 0,64), não rejeitar H0
b) (0,61; 0,64), rejeitar H0
c) [0,627; ), rejeitar H0
d) (-; 0,627], rejeitar H0
e) [0,627, ), não rejeitar H0

Comentários:

Por se tratar de um teste unilateral à direita, a região de não rejeição apresenta somente um limite superior
LSUP. Logo, iremos rejeitar a hipótese nula se encontramos um valor X > LSUP, ou seja, a região crítica é da
forma (LSUP; ), como indicado nas alternativas C e E: (0,627; ). Considerando que o valor observado X =
64% = 0,64 está contemplado pela região crítica (isto é, 0,64 > 0,627), então devemos rejeitar a hipótese
nula. Com isso, concluímos que única resposta possível é a alternativa C.

De todo modo, façamos os cálculos. O limite da região crítica é definido pela seguinte transformação:

                                                      𝐿𝑆𝑈𝑃 − 𝑝
                                               𝑧𝐶 =
                                                         𝑝. 𝑞
                                                       √
                                                          𝑛

                                                                 𝑝. 𝑞
                                           𝐿𝑆𝑈𝑃 = 𝑝 + 𝑧𝐶 × √
                                                                  𝑛


---

Para um nível de significância 𝛼 = 5% em um teste unilateral à direita, temos P(Z < z) = 0,95, como ilustrado
abaixo:


                                                                   5%

                                                    95%


                                                              𝑧𝐶
Pela tabela normal contida ao final dessa seção, observamos que 𝑧𝐶 = 1,64, pois P(Z < 1,64) = 0,9495 ≅ 0,95.

Assim, sendo p = 0,6, q = 1 – p = 0,4 e n = 900, o limite da região crítica é:


                                                   0,6 × 0,4                √0,24
                          𝐿𝑆𝑈𝑃 = 0,6 + 1,64 × √              = 0,6 + 1,64 ×
                                                      900                    30

Pelo dado do enunciado de que √0,24 = 0,5, temos

                                                     0,5
                              𝐿𝑆𝑈𝑃 = 0,6 + 1,64 ×        ≅ 0,6 + 0,027 = 0,627
                                                     30

Gabarito: C


---

Tabela da Distribuição Normal Padrão: P(Z < z)


---

                          QUESTÕES COMENTADAS – FGV

Testes para a Distribuição Binomial

1.     (FGV/2022 – TRT/PB) Uma amostra aleatória simples de tamanho 10 de uma densidade Bernoulli
(p) será observada para testar H0: p ≤ 0,5 versus H1: p > 0,5 e será usado o critério que rejeita H0 se o
número de “sucessos” na amostra for maior do que 7.

A probabilidade de erro tipo I máxima com esse critério é aproximadamente igual a

a) 0,001.
b) 0,01.
c) 0,05.
d) 0,1.
e) 0,2.

Comentários:

Essa questão trabalha com o teste para a distribuição binomial e pede a probabilidade do erro tipo I, que é
a probabilidade de rejeitar a hipótese nula, sendo ela verdadeira. Considerando que a hipótese nula é
rejeitada se houver mais de 7 sucessos na amostra de tamanho 𝑛 = 10, a probabilidade do erro tipo I é:
                           𝛼 = 𝑃(𝑋 > 7) = 𝑃(𝑋 = 8) + 𝑃(𝑋 = 9) + 𝑃(𝑋 = 10)
Em que a probabilidade de obter 𝑘 sucessos é dada por:
                                      𝑃(𝑋 = 𝑘) = 𝐶𝑛,𝑘 × 𝑝𝑘 × 𝑞 𝑛−𝑘
Considerando a probabilidade de sucesso indicada na hipótese nula 𝑝 = 0,5 (logo, 𝑞 = 1 − 𝑝 = 0,5), temos:
                                                   10!                 10 × 9
           𝑃(𝑋 = 8) = 𝐶10,8 × 0,58 × 0,52 =                  × 0,510 =        × 0,510 = 45 × 0,510
                                              (10 − 8)! × 8!             2
                                                           10!
                   𝑃(𝑋 = 9) = 𝐶10,9 × 0,59 × 0,51 =                  × 0,510 = 10 × 0,510
                                                      (10 − 9)! × 9!
                                                             10!
                 𝑃(𝑋 = 10) = 𝐶10,10 × 0,510 × 0,50 =                    × 0,510 = 1 × 0,510
                                                        (10 − 10)! × 0!
E a soma é:
                    𝛼 = 𝑃(𝑋 > 7) = 45 × 0,510 + 10 × 0,510 + 1 × 0,510 = 56 × 0,510
Essa expressão pode ser reescrita como:
                                            1 10 56    56
                                  𝛼 = 56 × ( ) = 10 =      ≅ 0,05
                                            2    2    1024
Gabarito: C


---

2.    (FGV/2017 – TJ-AL) Para verificar se a proporção geral de recursos meramente protelatórios é muito
elevada, elabora-se o seguinte teste de hipóteses: HO: 𝒑 ≤ 𝟎, 𝟕𝟓 contra Ha: 𝒑 > 𝟎, 𝟕𝟓.
Para sua realização, uma amostra de tamanho n = 5 é extraída, sendo o critério de rejeição de H O
estabelecido caso o número de recursos daquele tipo seja maior do que 4.
Se a verdadeira probabilidade é igual a 0,80, as probabilidades de ocorrência dos erros tipos I e II são,
respectivamente:

a) (0,75)5 e (0,80)5 ;

b) 1 − (0,80)5 e 1 − (0,75)5 ;

c) 1 − (0,75)5 e (0,80)5;

d) (0,75)5 e 1 − (0,80)5 ;

e) 1 − (0,80)5 e (0,75)5 .

Comentários:

A probabilidade do erro tipo I corresponde à probabilidade de rejeitar a hipótese nula, sendo ela verdadeira.
A hipótese nula é que a proporção de recursos protelatórios seja menor ou igual a 𝑝 = 0,75. Essa hipótese
será rejeitada caso o número desse tipo de recurso seja maior do que 4, dentre os 5 processos selecionados,
ou seja, se os 5 processos forem protelatórios. Sendo 𝑝 = 0,75, a probabilidade de isso ocorrer é dada pelo
produto:

                                            𝛼 = 𝑝5 = (0,75)5

Sendo a probabilidade verdadeira 𝑝∗ = 0,8, o erro tipo II corresponde à probabilidade de não rejeitar a
hipótese nula, considerando 𝑝∗ = 0,8. A probabilidade de não rejeitar a hipótese nula corresponde à
probabilidade de ter menos que 5 processos protelatórios na amostra de 5 processos. Essa probabilidade é
complementar à probabilidade de encontrar os 5 processos desse tipo na amostra:

                                        𝛽 = 1 − 𝑝∗5 = 1 − (0,8)5

Gabarito: D

3.     (FGV/2017 – IBGE) Um teste de hipóteses será realizado para verificar se uma moeda é, de fato,
honesta. Suspeita-se que, ao invés de um equilíbrio, P(Cara) = P(Coroa) = 0,5, há uma tendência para que
as chances sejam de 3:2 favorável a Cara. Assim sendo, as hipóteses formuladas são:
Ho: Moeda equilibrada (1:1)
Ha: Moeda desequilibrada (3:2)


---

A decisão deverá seguir um critério bem simples. A tal moeda será lançada quatro vezes, rejeitando-se a
hipótese nula caso aconteçam mais do que três Caras. Com tal critério, é correto afirmar que:

a) P(Erro Tipo I) = 1/8 e P(Erro Tipo II) = 1 - (0,125);
b) P(Erro Tipo I) = 0,25 e P(Erro Tipo II) = 1 - (0,25);
c) P(Erro Tipo I) = 3/16 e P(Erro Tipo II) = 1 - (0,4)4;
d) P(Erro Tipo I) = 1/16 e P(Erro Tipo II) = 1 - (0,6)4;
e) P(Erro Tipo I) = 3/8 e P(Erro Tipo II) = 1 - (0,75)4.

Comentários:

Essa questão trabalha com o teste de hipóteses para a distribuição binomial. A hipótese nula será rejeitada,
caso ocorram mais de 3 CARAS em 𝑛 = 4 lançamentos, ou seja, caso ocorram 𝑘 = 4 CARAS. Assim, a
probabilidade do erro tipo I (rejeitar a hipótese nula sendo ela verdadeira) é a probabilidade de obtermos
                                         1               1
𝑘 = 4 CARAS, considerando 𝑝 = 0,5 = e 𝑞 = 1 − 𝑝 = (moeda equilibrada):
                                          2                2


                                                   1 4 1 0         1      1
                            𝛼 = 𝑃[𝑋 = 4] = 𝐶4,4 . ( ) . ( ) = 1 ×    ×1=
                                                   2     2        16     16

E a probabilidade do erro tipo II (rejeitar a hipótese nula sendo ela falsa) é a probabilidade de não obtermos
𝑘 = 4 CARAS (probabilidade complementar), considerando o parâmetro indicado na hipótese alternativa:

                                               𝛽 = 1 − 𝑃[𝑌 = 4]

A hipótese alternativa indica a proporção de 3 CARAS para cada 2 COROAS, isto é, 3 CARAS a cada 5
lançamentos. Assim, a probabilidade de sucesso é:

                                                       3
                                                  𝑝=     = 0,6
                                                       5

E a probabilidade de fracasso é complementar 𝑞 = 1 − 𝑝 = 0,4. Assim, a probabilidade de obtermos 𝑘 = 4
CARAS, considerando essa probabilidade é:

                         𝑃[𝑌 = 4] = 𝐶4,4 . (0,6)4 . (0,4)0 = 1 × (0,6)4 × 1 = (0,6)4

E a probabilidade do erro tipo II é:

                                                 𝛽 = 1 − (0,6)4

Gabarito: D

4.     (FGV/2015 – TJ/RO) Considere o experimento que consiste no lançamento de uma moeda quatro
vezes. Para testar se a moeda é honesta, é feito um teste de hipóteses Ho: p = 0,5 contra Ha: p ≠ 0,5, onde
p é a proporção de caras. O critério de decisão estipula que se o número de caras for diferente de dois a
hipótese nula deve ser rejeitada.


---

Se, de fato, p = 0,25 a probabilidade de que o Erro do Tipo II seja cometido é:

a) 1/256;
b) 3/128;
c) 27/128;
d) 101/128;
e) 125/128.

Comentários:

Aqui, temos mais uma questão sobre o teste de hipóteses para a distribuição binomial. A probabilidade do
erro tipo II é a probabilidade de não rejeição da hipótese nula, considerando o parâmetro verdadeiro: p =
0,25. Sabendo que a hipótese nula será rejeitada se o número de CARAS for diferente de 2, então não
rejeitaremos a hipótese nula, se o número de CARAS for igual a 2:

                                                 𝛽 = 𝑃[𝑌 = 2]
                                                                                  1                 3
Considerando que a moeda será lançada 𝑛 = 4 vezes e sendo 𝑝 = 0,25 = (logo, 𝑞 = 1 − 𝑝 = ), a
                                                                    4                  4
probabilidade de obtermos 2 CARAS é:

                                                              1 2 3 2
                                           𝑃[𝑌 = 2] = 𝐶4,2 . ( ) . ( )
                                                              4     4

A combinação é:

                                            4!        4 × 3 × 2! 4 × 3
                               𝐶4,2 =               =           =      =6
                                        (4 − 2)! 2!      2! 2!     2

Logo, a probabilidade do erro tipo II é:

                                                          1   9   27
                                      𝑃[𝑌 = 2] = 6 ×        ×   =
                                                         16 16 128

Gabarito: C

5.      (FGV/2014 – SEDUC/AM) Sabe-se que certa proporção populacional p de “sucessos” ou é igual a 0,2
ou é igual a 0,5. Para testar H0: p = 0,2 versus H1: p = 0,5, com base numa amostra aleatória de cinco
observações, será usado o seguinte critério: se o número de “sucessos” nessa amostra for maior do que 1,
rejeita-se H0. A probabilidade de erro tipo 2 desse critério é igual a

a) 0,05;
b) 0,1875;
c) 0,215;
d) 0,3785;
e) 0,5.


---

Comentários:

O enunciado informa que a hipótese nula será rejeitada se o número de sucessos for maior que 1, logo, ela
não será rejeitada se o número de sucessos for menor ou igual a 1, isto é, igual a 0 ou 1. Assim, a
probabilidade do erro tipo 2 (não rejeitar a hipótese nula sendo ela falsa) é a probabilidade de obtermos k =
0 ou k = 1 sucesso, considerando a probabilidade da hipótese alternativa p = 0,5:

                                           𝛽 = 𝑃[𝑌 = 0] + 𝑃[𝑌 = 1]

Considerando uma amostra de tamanho 𝑛 = 5 e sendo 𝑝 = 0,5 (logo, 𝑞 = 1 − 𝑝 = 0,5), a probabilidade de
obtermos 0 sucesso é:

                       𝑃[𝑌 = 0] = 𝐶5,0 . (0,5)0 . (0,5)5 = 1 × 1 × 0,03125 = 0,03125

E a probabilidade de obter 1 sucesso é:

                       𝑃[𝑌 = 1] = 𝐶5,1 . (0,5)1 . (0,5)4 = 5 × 0,5 × 0,0625 = 0,15625

Logo, a probabilidade do erro tipo II é:

                                    𝛽 = 0,03125 + 0,15625 = 0,1875

Gabarito: B

6.      (FGV/2014 – DPE/RJ) Com o objetivo de avaliar o nível de satisfação dos cidadãos com os serviços
oferecidos pela Defensoria Pública é elaborado um teste de hipóteses, supondo, inicialmente, que 90% ou
mais dos usuários estão satisfeitos. Uma amostra de tamanho n = 2 deverá ser realizada e a hipótese não
refutada caso ambos os indivíduos se declarem satisfeitos. Contudo, há os que dizem que esse percentual
é, na verdade, de “apenas” 80%. Dadas essas informações, os erros do tipo I e II para o teste proposto são,
respectivamente, iguais a

a) 1 - (0,9)2 e (0,8)2;
b) (0,9)2 e 1 - (0,8)2;
c) 1 - (0,9)2 e 1 - (0,8)2;
d) (0,9)2 e (0,8)2;
e) 1 - 2(0,9)2 e 1 - (0,8)2.

Comentários:

O enunciado pede a probabilidade do erro tipo I e do erro tipo II, considerando que a hipótese nula não será
rejeitada caso os 2 indivíduos estejam satisfeitos, na amostra de n = 2.

Assim, a probabilidade do erro tipo I (rejeitar a hipótese nula sendo ela verdadeira) é a probabilidade de o
número de indivíduos satisfeitos ser diferente de 2 (probabilidade complementar), considerando o
parâmetro da hipótese nula p = 90% = 0,9:


---

                                            𝛼 = 1 − 𝑃[𝑋 = 2]

E a probabilidade de obtermos k = 2 indivíduos satisfeitos, em uma amostra de n = 2, com uma probabilidade
de p = 0,9 (logo, q = 1 - q = 0,1), é:

                        𝑃[𝑋 = 2] = 𝐶2,2 . (0,9)2 . (0,1)0 = 1 × (0,9)2 × 1 = (0,9)2

Assim, a probabilidade do erro tipo I é:

                                             𝛼 = 1 − (0,9)2

A probabilidade do erro tipo II (não rejeitar a hipótese nula sendo ela falsa) é a probabilidade de o número
de indivíduos satisfeitos ser igual a 2, considerando o parâmetro alternativo p = 80% = 0,8 (logo, q = 0,2):

                      𝛽 = 𝑃[𝑌 = 2] = 𝐶2,2 . (0,8)2 . (0,2)0 = 1 × (0,8)2 × 1 = (0,8)2

Gabarito: A


---

                        QUESTÕES COMENTADAS – FGV

Testes para a Variância

1.      (FGV/2022 – SEMSA/AM) Para testar se as variâncias de duas variáveis X e Y normalmente
distribuídas e independentes são iguais, uma amostra aleatória de tamanho 10 de X, e uma de tamanho
17 de Y foram obtidas e mostraram os seguintes resultados:
                             𝟏𝟎                                 𝟏𝟕

                                       ̅ 𝟐
                             ∑( 𝒙𝒊 − 𝒙) = 𝟐𝟒𝟎;                      ̅)𝟐 = 𝟐𝟖𝟎
                                                            ∑( 𝒚𝒋 − 𝒚
                             𝒊=𝟏                            𝒋=𝟏

O valor da estatística adequada a ser usada para esse teste é aproximadamente igual a:

a) 1,52

b) 1,86

c) 2,38

d) 2,55

e) 3,12

Comentários:

Essa questão trabalha com o teste de comparação de variâncias, em que desejamos verificar se as variâncias
são iguais ou diferentes. A estatística desse teste, sob a hipótese nula de que as variâncias são iguais,
𝐻0 : 𝜎𝑋2 = 𝜎𝑌2 , é dada por:

                                                          𝑠𝑋2
                                                     𝐹=
                                                          𝑠𝑌2

Em que 𝑠 2 são as variâncias amostrais, calculadas como:

                                              2
                                                 ∑𝑛𝑖=1( 𝑥𝑖 − 𝑥̅ )2
                                             𝑠 =
                                                      𝑛−1

O enunciado forneceu as somas dos quadrados ∑𝑛𝑖=1( 𝑥𝑖 − 𝑥̅ )2 e os tamanhos amostrais 𝑛, para cada
variável. Para X, temos:

                                                      240     240
                                             𝑠𝑋2 =          =
                                                     10 − 1    9

Para Y, temos:


---

                                                          280     280
                                                 𝑠𝑌2 =          =
                                                         17 − 1    16

Logo, a estatística do teste é:

                                    240
                                         240 16    8 × 4 32
                                  𝐹= 9 =    ×    =      =   ≅ 1,52
                                    280   9   280 3 × 7 21
                                     16

Gabarito: A

2.     (FGV/2018 – TJ/AL) Considere duas populações normais e independentes. Para uma delas é
extraída uma amostra aleatória simples de tamanho n = 5 e para a outra com m = 4. As duas amostras são
apresentadas a seguir:
X1 = 4, X2 = 5, X3 = 7, X4 = 8 e X5 = 11 para a população X; e
Y1 = 8, Y2 = 11, Y3 = 19 e Y4 = 22 para a população Y
                                           𝝈𝟐𝒚
Suponha que o objetivo final é testar se 𝝈𝟐 = 𝟒.
                                            𝒙

Assim, o valor observado da estatística do teste supondo Ho verdadeira será:

a) 24/130 ou 130/24

b) 90/130 ou 130/90

c) 96/130 ou 130/96

d) 30/130 ou 130/30

e) 1.

Comentários:

Essa questão também trabalha com o teste de comparação de variâncias, mas a hipótese nula é:

                                                         𝜎𝑌2
                                                     𝐻0 : 2 = 4
                                                         𝜎𝑋

A estatística do teste é:

                                                           𝑠𝑋2
                                                           𝜎𝑋2
                                                         𝐹= 2
                                                           𝑠𝑌
                                                           𝜎𝑌2


---

Sob a hipótese nula, temos 𝜎𝑌2 = 4. 𝜎𝑋2 , logo:

                                                      𝑠𝑋2
                                                      𝜎2    4. 𝑠𝑋2
                                                  𝐹 = 𝑋2 = 2
                                                      𝑠𝑌     𝑠𝑌
                                                          2
                                                     4. 𝜎𝑋

Agora, precisamos das variâncias amostrais, dadas por:

                                                  2
                                                   ∑𝑛𝑖=1( 𝑋𝑖 − 𝑋̅)2
                                               𝑠 =
                                                        𝑛−1

Vamos calcular a variância amostral de X. O primeiro passo é calcular a média amostral:

                                              4 + 5 + 7 + 8 + 11 35
                                       𝑋̅ =                     =   =7
                                                       5          5

Agora, somamos os quadrados dos desvios:
                      𝑛

                   ∑( 𝑋𝑖 − 𝑋̅)2 = (4 − 7)2 + (5 − 7)2 + (7 − 7)2 + (8 − 7)2 + (11 − 7)2
                   𝑖=1

             𝑛

            ∑( 𝑋𝑖 − 𝑋̅)2 = (−3)2 + (−2)2 + (0)2 + (1)2 + (4)2 = 9 + 4 + 0 + 1 + 16 = 30
            𝑖=1

A variância amostral é a razão entre esse resultado e n X - 1 = 4:

                                                              30
                                                      𝑠𝑋2 =
                                                              4

Em relação a Y, a média amostral é:

                                              8 + 11 + 19 + 22 60
                                       𝑌̅ =                   =   = 15
                                                      4         4

E a soma dos quadrados dos desvios é:
                          𝑛

                        ∑( 𝑌𝑖 − 𝑌̅)2 = (8 − 15)2 + (11 − 15)2 + (19 − 15)2 + (22 − 15)2
                        𝑖=1

                  𝑛

                  ∑( 𝑌𝑖 − 𝑌̅ )2 = (−7)2 + (−4)2 + (4)2 + (7)2 = 49 + 16 + 16 + 49 = 130
                  𝑖=1

E a variância amostral de Y é:


---

                                                          130
                                                  𝑠𝑋2 =
                                                           3

Agora, podemos calcular a estatística do teste:

                                              60
                                     4. 𝑠𝑋2 4. 4        3   90
                                   𝐹= 2 =        = 60.    =
                                      𝑠𝑌    130        130 130
                                              3
                                                                                                    130
Assim, observamos que a alternativa correta é a alternativa B. Ela fornece como alternativa a razão 90 ,
porque poderíamos inverter o cálculo da estatística, considerando Y como numerador e X como
denominador.

Gabarito: B


---

                        QUESTÕES COMENTADAS - FGV

p-valor

1.     (FGV/2022 – TRT/PB) Para testar H0: p > 0,5 versus H1: p ≤ 0,5 será usado o critério usual baseado
na proporção de sucessos amostral. Observada uma amostra aleatória de tamanho 225, verificou-se uma
proporção de sucessos amostral aproximadamente igual a 46%. O p-valor associado a esse critério é,
então, aproximadamente igual a

a) 0,01.

b) 0,05.

c) 0,09.

d) 0,12.

e) 0,15.

Para essa questão, considere a tabela constante no final desta seção de questões, fornecida na prova.

Comentários:

O p-valor é a probabilidade de o resultado do teste ser mais extremo que o resultado obtido, considerando
a hipótese nula como premissa. Sabendo que a proporção amostral observada foi 𝑝̂ = 0,46 e que o teste é
unilateral à esquerda, temos:
                                         𝑝 − 𝑣𝑎𝑙𝑜𝑟 = 𝑃(𝑝̂ < 0,46)
Para calcular essa probabilidade, vamos utilizar a transformação para a normal padrão, sabendo que a
proporção indicada na hipótese nula é 𝑝 = 0,5 (logo, 𝑞 = 1 − 𝑝 = 0,5):
                               𝑝̂ − 𝑝       0,46 − 0,5       −0,04 −0,6
                         𝑧=             =                =        =     = −1,2
                                𝑝×𝑞                           0,5   0,5
                              √             √0,5 × 0,5        15
                                 𝑛              225
Pela tabela normal padrão, observamos que 𝑃(𝑍 ≤ 1,2) = 0,8849. A probabilidade complementar é:
                        𝑃(𝑍 > 1,2) = 1 − 𝑃(𝑍 ≤ 1,2) = 1 − 0,8849 = 0,1151
Pela simetria da normal padrão, temos:
                             𝑃(𝑍 < −1,2) = 𝑃(𝑍 > 1,2) = 0,1151 ≅ 0,12
Que é justamente a probabilidade desejada.
Gabarito: D


---

2.     (FGV/2022 – TRT/PB) Considere uma variável aleatória populacional X com distribuição Normal
     𝟐
(𝝁, 𝝈 ), cujos parâmetros são desconhecidos. Um pesquisador coletou uma amostra aleatória de 100
observações com o objetivo de testar as seguintes hipóteses:
Hipótese nula: 𝝁 = 𝟐𝟎𝟎
Hipótese alternativa: 𝝁 ≠ 𝟐𝟎𝟎
Na amostra coletada, obtém-se uma média igual a 203 e uma variância (baseada no estimador não viesado
usual) igual a 100. O pesquisador considerou o nível de significância de 5% para esse teste, e que os valores
críticos correspondentes são -2,06 e 2,06.
A esse respeito, assinale a afirmativa incorreta.

a) A probabilidade do erro tipo I é igual a 5%

b) A estatística do teste apropriada será igual a 3.

c) A hipótese nula é rejeitada.

d) O p-valor é maior que 5%

e) O intervalo de confiança para 𝜇 é dado por [203 ± 2,06]

Comentários:

Essa questão trabalha com um teste bilateral para a média de uma população, com variância desconhecida.
Os dados fornecidos são:

   •   Parâmetro indicado na hipótese nula: 𝜇 = 200;

   •   Nível de significância 𝛼 = 5%, associado a 𝑡𝐶 = ±2,06;

   •   Tamanho da amostra 𝑛 = 100

   •   Média amostral observada: 𝑋̅ = 203;

   •   Variância amostral observada: 𝑠 2 = 100, logo o desvio padrão é 𝑠 = √𝑠 2 = 10.


Vamos analisar as alternativas, sabendo que precisamos da alternativa incorreta.


Em relação à alternativa A, a probabilidade do erro tipo I, qual seja de rejeitar a hipótese nula, sendo ela
verdadeira, é igual ao nível de significância.
Como o nível de significância é igual a 5%, a alternativa A está correta.


---

Em relação à alternativa B, a estatística do teste é dada por:

                                             𝑋̅ − 𝜇   203 − 200    3
                                    𝑡𝑜𝑏𝑠 =      𝑠   =           =    =3
                                                         10       10
                                               √𝑛       √100      10

De fato, a estatística do teste é igual a 3, logo, a alternativa B está correta.


Em relação à alternativa C, para sabermos se devemos rejeitar ou não a hipótese nula, podemos comparar a
estatística do teste 𝑡𝑜𝑏𝑠 = 3 com o valor crítico tabelado 𝑡𝐶 = 2,06.
Como a estatística supera o valor crítico, rejeitamos a hipótese nula, logo, a alternativa C está correta.


Em relação à alternativa D, o p-valor é a probabilidade de o resultado ser mais extremo do que o resultado
obtido, considerando a premissa da hipótese nula.
Considerando que a hipótese nula deve ser rejeitada quando o p-valor for menor que o nível de significância
e sabendo que rejeitamos a hipótese nula, então, podemos concluir que o p-valor é menor do que o nível
de significância de 5%.


Alternativamente, podemos raciocinar que o p-valor é a probabilidade de o resultado ser mais extremo:

                                             𝑝 − 𝑣𝑎𝑙𝑜𝑟 = 𝑃(|𝑇| > 3)

E sabemos que o nível de significância de 5% está associado a 𝑡 = 2,06, ou seja:

                                             𝛼 = 𝑃(|𝑇| > 2,06) = 5%

Consequentemente, a probabilidade 𝑃(|𝑇| > 3) é menor que 5%.
Logo, a alternativa D está incorreta.


Em relação à alternativa E, o intervalo de confiança para a média é dado por:

                                             𝑠                     10
                           𝐼𝐶 = 𝑋̅ ± 𝑡 ×         = 203 ± 2,06 ×          = 203 ± 2,06
                                           √𝑛                     √100

Logo, a alternativa E está correta.
Gabarito: D


---

3.    (FGV/2022 – SEFAZ/ES) Com o objetivo de realizar um teste de hipóteses para avaliar a arrecadação
média de impostos dos dois maiores municípios de um estado, foram selecionadas duas amostras
independentes, uma de tamanho 40 e outra de tamanho 45, em cada um desses municípios. Ambas
populações seguem a distribuição normal.
Para cada uma das amostras, foram coletadas informações sobre três impostos estaduais, quais sejam,
Imposto 1, Imposto 2 e Imposto 3. As hipóteses foram
                                       𝑯𝟎 : 𝝁𝑰𝒎𝒑𝒐𝒔𝒕𝒐 𝒋;𝟏 = 𝝁𝑰𝒎𝒑𝒐𝒔𝒕𝒐 𝒋;𝟐

                                       𝑯𝟏 : 𝝁𝑰𝒎𝒑𝒐𝒔𝒕𝒐 𝒋;𝟏 ≠ 𝝁𝑰𝒎𝒑𝒐𝒔𝒕𝒐 𝒋;𝟐

sendo μ a arrecadação média de impostos, j = 1, 2, 3, representando os diferentes impostos e 1 e 2 para
os municípios.

            Diferença entre   Teste para igualdade entre as variâncias     Teste para igualdade entre as médias
 Imposto       as médias              p-valor    Possíveis critérios de          Graus de    p-valor     p-valor
                              Fcalc                                       tcalc
               amostrais             unilateral         decisão                 liberdade unilateral bilateral
                                                    Não rejeitar a
                                                                          -7.2     83       1,38E-10   2,77E-10
                                                    hipótese nula
    1            -0,74        1,28     0,21
                                                  Rejeitar a hipótese
                                                                          -7,1     78       2,29E-10   4,57E-10
                                                         nula
                                                    Não rejeitar a
                                                                          -0,9     83         0,18      0,3626
                                                    hipótese nula
    2            -0,4         1,76     0,04
                                                  Rejeitar a hipótese
                                                                          -0,9     72         0,19      0,3708
                                                         nula
                                                    Não rejeitar a
                                                                          -1,8     83         0,04      0,0774
                                                    hipótese nula
    3            -0,65        0,25 1,26E-05
                                                  Rejeitar a hipótese
                                                                          -1,9     66         0,03      0,0684
                                                         nula

Considere o nível de 7% de significância para todos os testes. Assinale a opção que lista as arrecadações
médias que apresentam diferenças significativas.

a) Imposto 1, apenas.
b) Imposto 2, apenas.
c) Imposto 3, apenas.
d) Impostos 1 e 3.
e) Impostos 2 e 3.

Comentários:

O objetivo do teste como um todo é comparar os 2 municípios (2 populações), em relação a cada imposto.
Primeiro, aplica-se o teste de igualdade entre as variâncias dessas populações e, depois, o teste de igualdade
entre as médias.

O nosso trabalho é, primeiro, comparar o p-valor do teste das variâncias, apresentado na 4ª coluna da tabela,
com o nível de significância de 7%, para decidirmos se rejeitamos ou não a hipótese nula desse teste.


---

Em seguida, considerando os dados indicados na linha correspondente à decisão tomada (rejeição ou não
rejeição), comparamos o p-valor do teste das médias com o nível de significância de 7%. Considerando que
o objetivo é concluir se as médias são iguais ou diferentes, o teste das médias é bilateral e, por isso, devemos
considerar os p-valores apresentados na última coluna da tabela.

Em relação ao imposto 1, o p-valor do teste de variâncias encontrado foi p = 0,21 = 21%. Por ser superior ao
nível de significância de 7%, não rejeitamos a hipótese nula. Logo, devemos considerar os resultados do teste
das médias indicados na 1ª linha da tabela:

                         Possíveis critérios de            Graus de    p-valor     p-valor
                                                  tcalc
                               decisão                    liberdade   unilateral   bilateral
                            Não rejeitar a
                                                  -7.2       83       1,38E-10     2,77E-10
                            hipótese nula
Observamos que o p-valor bilateral é p = 2,77x10-10, que é um valor extremamente pequeno. Sendo o p-valor
menor do que o nível de significância, rejeitamos a hipótese nula de que as médias são iguais e, assim,
concluímos que as médias das populações apresentam diferenças significativas, em relação ao imposto 1.

Em relação ao imposto 2, o p-valor do teste de variâncias encontrado foi p = 0,04 = 4%. Por ser inferior ao
nível de significância de 7%, rejeitamos a hipótese nula. Logo, devemos considerar os resultados do teste
das médias indicados na 4ª linha da tabela:

                         Possíveis critérios de            Graus de    p-valor     p-valor
                                                  tcalc
                                decisão                   liberdade   unilateral   bilateral
                          Rejeitar a hipótese
                                                  -0,9       72         0,19       0,3708
                                 nula

Observamos que o p-valor bilateral é p = 0,3708 = 37%, que é maior que o nível de significância de 7% e, por
isso, não rejeitamos a hipótese nula de que as médias são iguais, ou seja, concluímos que as médias das
populações não apresentam diferenças significativas, em relação ao imposto 2.

Em relação ao imposto 3, o p-valor do teste de variâncias encontrado foi p = 1,26x10-5, que é um valor
extremamente pequeno. Por ser inferior ao nível de significância, rejeitamos a hipótese nula. Logo, devemos
considerar os resultados do teste das médias indicados na última linha da tabela:

                         Possíveis critérios de            Graus de    p-valor     p-valor
                                                  tcalc
                                decisão                   liberdade   unilateral   bilateral
                          Rejeitar a hipótese
                                                  -1,9       66         0,03       0,0684
                                 nula

Observamos que o p-valor bilateral é p = 0,0684 = 6,8%, que é menor do que o nível de significância de 7%.
Por isso, rejeitamos a hipótese nula de que as médias são iguais e, assim, concluímos que as médias das
populações apresentam diferenças significativas, em relação ao imposto 3.

Portanto, as médias apresentam diferenças significativas em relação aos impostos 1 e 3.

Gabarito: D


---

4.     (FGV/2015 – CODEBA) Considere uma pesquisa feita junto a uma amostra de pessoas
representativas da população brasileira. Foi questionado e cada pessoa informou o seu salário. Após a
coleta dos dados, a média amostral foi igual a R$ 1000.
De posse desse indicador e de sua variância amostral, o instituto de pesquisa realiza um teste de hipóteses
para averiguar se a média da população brasileira é igual a R$ 1100.
O par de valores que levaria o instituto a rejeitar a hipótese colocada é:

a) P-valor = 1% e nível de significância de 0,1%.

b) P-valor = 10% e nível de significância de 1%.

c) P-valor = 2% e nível de significância de 1%.

d) P-valor = 100% e nível de significância de 200%.

e) P-valor = 5% e nível de significância de 10%.

Comentários:

A hipótese nula é rejeitada quando o p-valor (probabilidade de obter um valor igual ou mais extremo) for
menor do que o nível de significância 𝛼. As únicas alternativas em que há essa relação são as alternativas D
e E.

Em relação à alternativa D, não é possível definir um nível de significância de 200%, por se tratar de uma
probabilidade (probabilidade do erro tipo I). Logo, a resposta é a alternativa E.

Gabarito: E

5.     (FGV/2006 – SEFAZ-MS) Um teste de hipótese apresentou p-valor igual a 0,03. Portanto, nos níveis
de significância de 1% e 5%, respectivamente, a hipótese nula:

a) deve ser aceita e aceita.

b) deve ser aceita e rejeitada.

c) deve ser rejeitada e aceita.

d) deve ser rejeitada e rejeitada.

e) pode ou não ser rejeitada, dependendo de a hipótese ser simples ou não.

Comentários:


---

A hipótese nula é rejeitada quando o p-valor (probabilidade de obter um valor igual ou mais extremo) for
menor do que o nível de significância 𝛼 e aceita, caso contrário. Assim, sendo o p-valor de 3%, a hipótese
nula é aceita para o nível de significância de 1% e rejeitada para o nível de significância de 5%.

Gabarito
