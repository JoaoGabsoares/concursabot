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
arquivo_origem: Aula 09_012_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: 09
titulo_aula: DISTRIBUIÇÃO DE POISSON
---

# DISTRIBUIÇÃO DE POISSON

DISTRIBUIÇÃO DE POISSON

            


---

DISTRIBUIÇÃO DE POISSON

• Aproximação da binomial

• 𝑛→∞

• 𝑝→0

                            


---

ESPERANÇA

𝜆 = 𝑛. 𝑝

            


---

VARIÂNCIA

𝑉 𝑥 =𝜆

            


---

CÁLCULO DE PROBABILIDADES

        𝑒 −𝜆 . 𝜆𝑘
𝑃 𝑋=𝑘 =
           𝑘!

                    


---

 CÁLCULO DE PROBABILIDADES
Por exemplo, podemos considerar uma indústria farmacêutica que apresenta defeito em
p = 0,01% dos medicamentos e que a amostra a ser verificada contém n = 4 mil
medicamentos. Qual a probabilidade de termos uma peça defeituosa? (𝑒 −0,4 = 0,67)
        𝑒 −𝜆 . 𝜆𝑘
𝑃 𝑋=𝑘 =
           𝑘!

                                  


---

OS PRESSUPOSTOS DA DISTRIBUIÇÃO DE POISSON
i) Homogeneidade, ou seja, a taxa 𝜆 deve ser constante (assim como a probabilidade de
sucesso 𝜆 é constante para a distribuição binomial);

ii) Independência das ocorrências em um intervalo, em relação a outro (assim como os
experimentos são independentes na distribuição binomial).

                                   


---

OBRIGADO


           


---

DISTRIBUIÇÃO DE POISSON

            


---

DISTRIBUIÇÃO DE POISSON

•   Número de chamadas recebidas

•   Número de falhas num computador

•   Número de acidentes

                             


---

PARA RECONHECER UMA DISTRIBUIÇÃO DE POISSON

1. O experimento calcula quantas vezes que um evento ocorre em um determinado
   intervalo de tempo, área, volume, etc;

2. A probabilidade do evento ocorrer é a mesma para cada intervalo;

3. O número de ocorrências de um intervalo é independente do outro.

                                   


---

EXEMPLO
Suponha que determinada central telefônica receba em média 6 ligações por minuto.
Qual a probabilidade de em certo minuto essa central receber 2 ligações?
(use e-6=0,0024).

                                 


---

EXEMPLO
Suponha que, em determinada esquina de uma rua, ocorram acidentes de carro
aleatoriamente e independente um do outro, em uma taxa média de 8 por semana.
Então, a probabilidade de que ocorra exatamente dois acidentes em uma semana é?
(use e-8 =0,0003).

                                


---

EXEMPLO
Em certa fábrica de roupas, as falhas no tecido ocorrem com taxa média de 4 por metro
linear. Qual a probabilidade de em um metro desse tecido termos 2 falhas? e-4 = 0,018

                                  


---

PEGADINHA
A quantidade diária de emails indesejados recebidos por um atendente é uma variável
aleatória X que segue distribuição de Poisson com média e variância desconhecidas. Para
estimá-las, retirou-se dessa distribuição uma amostra aleatória simples de tamanho
quatro, cujos valores observados foram 10, 4, 2 e 4.

Com relação a essa situação hipotética, julgue o seguinte item.

Se P (X = 0) representa a probabilidade de esse atendente não receber emails
indesejados em determinado dia, estima-se que tal probabilidade seja nula.

                                    


---

OBRIGADO


           


---

DISTRIBUIÇÃO DE POISSON

            


---

ASSIMETRIA E DE CURTOSE

         1
𝐴𝑆𝑆 =
         𝜆


     1
k=
     𝜆

                     


---

ASSIMETRIA E DE CURTOSE

         1
𝐴𝑆𝑆 =
         𝜆


     1
k=
     𝜆

                     


---

EXEMPLO
Suponha que determinada central telefônica receba em média 6 ligações por minuto.
Qual a probabilidade de em certo minuto essa central receber 2 ligações?
(use e-6=0,0024).

                                 


---

OBRIGADO


           


---

DISTRIBUIÇÃO DE POISSON

            


---

QUESTÃO 1
Uma distribuição discreta de probabilidade que fornece a frequência de ocorrência de
certos tipos de eventos aleatórios, podendo ser usada como aproximação da
distribuição binomial, corresponde à distribuição
a) geométrica
b) hipergeométrica
c) normal
d) uniforme
e) de Poisson

                                  


---

QUESTÃO 2
Sobre a distribuição de Poisson P(X=k; λ) que representa a distribuição de
frequências da variável aleatória X, analise as afirmativas abaixo, dê valores Verdadeiro
(V) ou Falso (F).
                                                                           𝜆
( ) 𝑃 𝑋 = 𝑘; 𝜆 = lim 𝐵𝐼𝑁𝑂𝑀𝐼𝐴𝐿(𝑋 = 𝑘; 𝑁; 𝑝 = )
                           𝑁→∞                                             𝑁


( ) A distribuição de Poisson é útil na modelagem de processos de natureza binomial
onde o evento tem probabilidade de ocorrência (binomial), p, pequena (ou seja,
tendendo a zero), porém o valor esperado da variável aleatória fica finito devido a ser
grande a quantidade da amostragem (testes).

( ) O parâmetro λ corresponde ao mesmo tempo ao valor esperado e à variância da
distribuição de Poisson, P(X=k; λ).

Assinale a alternativa que apresenta a sequência correta de cima para baixo.

a) F, F, F b) F, V, V c) V, F, V d) V, V, 
                                          V


---

QUESTÃO 3
Se uma variável X tem distribuição de Poisson com parâmetro Q, tal que X~Poisson(Q),
pode-se afirmar que:

a) E(X) = Q e Var(X) = 1/Q

b) E(X)= 1 – Q e Var(X)= Q

c) E(X) = Q e Var(X)= Q

d) E(X) = Q/2 e Var(X) = Q2/12

e) E(X) = Q e Var(X) = Q2/12

                                  


---

QUESTÃO 4
A quantidade diária de emails indesejados recebidos por
um atendente é uma variável aleatória X que segue distribuição de Poisson com média e
variância
desconhecidas. Para estimá-las, retirou-se dessa distribuição uma amostra aleatória
simples de
tamanho quatro, cujos valores observados foram 10, 4, 2 e 4. Com relação a essa
situação
hipotética, julgue o seguinte item.
Se P (X = 0) representa a probabilidade de esse atendente não receber emails
indesejados em
determinado dia, estima-se que tal probabilidade seja nula.

                                  


---

QUESTÃO 4
Considere que o número de reclamações registradas pelo SAC, X(t), em um intervalo de
tempo t, siga um processo de Poisson e que X(5) represente o número de reclamações
registradas em um intervalo de 5 dias úteis. Nesse caso, a probabilidade de não haver
reclamações registradas em um intervalo de 5 dias úteis é igual a e-5 .

                                  


---

QUESTÃO 4
 O número de recursos em um processo é uma variável aleatória de Poisson
com parâmetro λ = 5. Então a probabilidade de que um processo tenha menos do que 2
recursos
é:
a) 31.e-5;
b) 6. e-5;
c) 5. e-5;
d) 1 − 6. e-5
e) 1 − 31. e-5

                                 


---

QUESTÃO 4
 Suponha que o número de processos trabalhistas que chegam, por
dia, a um determinado tribunal regional do trabalho seja uma variável aleatória com
distribuição de Poisson com média igual a λ. Sabe-se que a probabilidade de chegarem 2
processos por dia é igual a oito vezes a probabilidade de não chegar nenhum. Nessas
condições, a probabilidade de, em um determinado dia, chegarem pelo menos 2
processos é igual a
Dados: e-2 = 0,135; e-4 = 0,018
a) 0,91
b) 0,36
c) 0,93
d) 0,46
e) 0,85

                                   


---

OBRIGADO


           


---

DISTRIBUIÇÃO DE POISSON

            


---

SOMA DE DISTRIBUIÇÕES DE POISSON

X = POISSON

Y = POISSON

                      


---

QUESTÃO 1
Suponha que a quantidade total de erros cometidos pelo judiciário segue o padrão de um
Processo de Poisson com parâmetro λ = 4, relativo ao período de um ano. Então a
probabilidade de que sejam cometidos exatamente três erros, nos próximos 18 meses, é
igual a:
   43
A) 3! . 𝑒 −4

                  3Τ
     43             2
B)         𝑒 −4
      3!

     34 −6
C)   4!
        𝑒

   63 −6
D) 3! 𝑒

                  3Τ
     63             2
E)         𝑒 −6
      3!                           


---

 QUESTÃO 2
A comissão de erradicação do trabalho infantil de um determinado Tribunal Regional do
Trabalho analisa, por meio de seu canal de denúncias, casos de desrespeito à legislação que
regula o trabalho de menores de 18 anos. Suponha que a variável X, que representa o
número de denúncias mensais que são recebidas, tem distribuição de Poisson com média 9.
Nessas condições, a probabilidade de serem recebidas 2 ou 3 denúncias em um período de
10 dias é igual a:
a) 0,450
b) 0,472
c) 0,230
d) 0,375
e) 0,250

                                     


---

 QUESTÃO 3
O número de acidentes de trabalho em determinada obra pública no mês k segue uma
distribuição de Poisson Wk com média igual a 1 acidente por mês. Considerando uma
amostra aleatória simples W1, W2, ..., Wn, julgue o item a seguir, acerca da soma
W1 + W2 + ... + Wn. O total de acidentes segue distribuição de Poisson com média igual a n.

                                     


---

OBRIGADO


           


---
