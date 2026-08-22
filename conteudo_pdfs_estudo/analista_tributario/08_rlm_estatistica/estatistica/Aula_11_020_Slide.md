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
arquivo_origem: Aula 11_020_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '11'
titulo_aula: SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE
---

# SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE

SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE

                  


---

SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE

Para variáveis aleatórias X1, X2, ..., Xn independentes e identicamente distribuídas
(i.i.d), a distribuição da soma X1 + X2 + ...+ Xn tende a uma distribuição normal, à
medida em que n cresce, cuja média e variância são dadas por:


𝐸(𝑌) = 𝐸(𝑋1) + 𝐸(𝑋2) + … + 𝐸(𝑋𝑛) = 𝑛. 𝐸(𝑋)

V(𝑌) = 𝑉(𝑋1) + 𝑉(𝑋2) + … + 𝑉(𝑋𝑛) = 𝑛. 𝑉(𝑋)

                                     


---

SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE

                     X1

                    X2

                    X3

                     .
                     .
                     .
                     Xn
                         


---

SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE
Vamos supor que tenhamos 100 variáveis independentes Xi, com i = 1, 2, ..., 100,
todas com média E(Xi) = 3 e variância V(Xi) = 4. Assim, sendo Y = X1 + X2 + ... + X100,
então a média e variância de Y serão:

                                    


---

(FGV/2017 – IBGE)
Sejam X1, X2, X3, ..., X64 variáveis aleatórias discretas, com distribuição Binomial,
todas com p = 0,25 e n = 12. Também são conhecidos valores da função distribuição
acumulada da normal-padrão, mais especificamente: ɸ(2) = 0,977, ɸ(1,5) = 0,933,
ɸ(1,25) = 0,894.
No caso da extração de uma amostra (n = 64), a probabilidade de que a soma dos
valores seja superior a 207 é igual a:
a) 0,023
b) 0,046
c) 0,067
d) 0,106
e) 0,134


                                      


---

OBRIGADO


           


---

SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE

                  


---

SOMA DE VARIÁVEIS COM DISTRIBUIÇÃO NORMAL
Se as variáveis forem independentes e seguirem distribuição normal, então a soma
terá distribuição normal, cuja média corresponde à soma das médias das variáveis e
a variância corresponde à soma das variâncias das variáveis.


𝐸(𝑌) = 𝐸(𝑋1) + 𝐸(𝑋2) + … + 𝐸(𝑋𝑛)

V(𝑌) = 𝑉(𝑋1) + 𝑉(𝑋2) + … + 𝑉(𝑋𝑛)

                                  


---

SOMA DE VARIÁVEIS COM DISTRIBUIÇÃO NORMAL
Se X1 e X2 são variáveis independentes com distribuição normal, então a diferença
Y = X1 – X2 segue distribuição normal com média e variância dadas
respectivamente por:

𝐸 𝑌 = 𝐸 𝑋1 − 𝐸(𝑋2)

V(𝑌) = 𝑉(𝑋1) + 𝑉(𝑋2)

                                   


---

SOMA DE VARIÁVEIS COM DISTRIBUIÇÃO NORMAL
Y = X1 – X2 em que X1 e X2 são variáveis normais independentes, com médias E(X1) = 3 e
E(X2) = 5, e variâncias V(X1) = 4 e V(X2) = 1,

                                  


---

SOMA DE VARIÁVEIS COM DISTRIBUIÇÃO NORMAL
Pontue-se que a soma, a subtração, a multiplicação ou a divisão de uma distribuição
normal por uma constante real também segue distribuição normal, cuja média e variância
podem ser calculadas pelas propriedades de esperança e variância.

                                  


---

SOMA DE VARIÁVEIS COM DISTRIBUIÇÃO NORMAL
sendo X uma variável normal com média E(X) = 3 e variância V(X) = 4, então a variável
Y = 2X – 6 terá distribuição normal, com média e variância dadas por:

                                   


---

(2020 – FADESP)
A variável aleatória X tem distribuição normal com média µ = 2 e variância σ2 = 9. Seja Y
uma variável aleatória definida por Y = 2X + 1. Nestas condições, pode-se afirmar que Y
tem distribuição
a) normal com média µ = 2 e variância σ2 = 30.
b) qui-quadrado com média µ = 5 e variância σ2 = 36.
c) normal com média µ = 5 e variância σ2 = 9.
d) normal com média µ = 5 e variância σ2 = 36.

                                   


---

(2018 – PETROBRAS)
As variáveis aleatórias X e Y são independentes. A variável X segue uma distribuição
Normal com média 4 e variância 16, e a Y segue uma distribuição Normal com média 9 e
variância 1. A distribuição de X - Y é Normal com
a) média -5 e variância 15.
b) média -5 e variância 17.
c) média 5 e variância 15.
d) média 5 e variância 17.
e) média 13 e variância 15.

                                 


---

(FCC/2015 – ANALISTA DO CNMP – ADAPTADA)
Se Z tem distribuição normal padrão, então:
P(Z < 0,5) = 0,591; P(Z < 1) = 0,841; P(Z < 1,15) = 0,8951; P(Z < 1,17) = 0,879; P(Z < 1,2) =
0,885; P(Z < 1,4) = 0,919; P(Z < 1,64) = 0,95; P(Z < 2) = 0,977; P(Z < 2,06) = 0,98; P(Z < 2,4)
= 0,997.
Sejam X1, X2, ... , Xn variáveis aleatórias independentes e identicamente distribuídas com
distribuição normal padrão. Seja a variável aleatória Y = X1 + X2 + ...+ Xn .
Considerando essa informação, julgue a seguinte afirmativa: Para n = 4, P(− 2 < Y < 1) =
0,432.

                                     


---

(FCC/2015 – ANALISTA DO CNMP – ADAPTADA)
Seja a variável aleatória Y = X1 + X2 + ...+ Xn .
Considerando essa informação, julgue a seguinte afirmativa: Para n = 4, P(− 2 < Y < 1) =
0,432.

                                        


---

OBRIGADO


           


---

SOMA DE VARIÁVEIS E O TEOREMA CENTRAL DO LIMITE

                  


---

APROXIMAÇÃO DA BINOMIAL PELA NORMAL
Como consequência do Teorema Central do Limite, podemos aproximar uma
distribuição binomial a uma distribuição normal Y, com média 𝜇𝑌 = 𝑛. 𝑝 e variância
𝜎𝑌2 = 𝑛. 𝑝. 𝑞 para um grande número de ensaios n.

                                  


---

APROXIMAÇÃO DA BINOMIAL PELA NORMAL
Vamos considerar um exemplo de uma variável binomial X, com n = 50 e p = 0,5.
Suponha que estejamos interessados em calcular a probabilidade de os valores de X
estarem no intervalo [20,30].

                                  


---

APROXIMAÇÃO DA BINOMIAL PELA NORMAL
Vamos considerar um exemplo de uma variável binomial X, com n = 50 e p = 0,5.
Suponha que estejamos interessados em calcular a probabilidade de os valores de X
estarem no intervalo [20,30].

                                  


---

APROXIMAÇÃO DA BINOMIAL PELA NORMAL
Vamos considerar um exemplo de uma variável binomial X, com n = 50 e p = 0,5.
Suponha que estejamos interessados em calcular a probabilidade de os valores de X
estarem no intervalo [20,30].

                                  


---

CORREÇÃO DE CONTINUIDADE
Por se tratar de uma distribuição discreta sendo aproximada a uma distribuição
contínua, para melhorar a precisão dos resultados, é necessário introduzir uma
correção de continuidade.

                                 


---

CORREÇÃO DE CONTINUIDADE
           𝑃(𝑎 ≤ 𝑋 ≤ 𝑏) ≅ 𝑃(𝑎 − 0,5 < 𝑌 < 𝑏 + 0,5)

                        


---

APROXIMAÇÃO DA BINOMIAL PELA NORMAL
Vamos considerar um exemplo de uma variável binomial X, com n = 50 e p = 0,5.
Suponha que estejamos interessados em calcular a probabilidade de os valores de X
estarem no intervalo [20,30].

                                  


---

CESPE/2013 – TRT 17ª REGIÃO)
No que se refere a distribuições discretas, julgue o seguinte item.
A aproximação da distribuição binomial pela normal não se aplica com base no
teorema limite central, visto que a binomial não se relaciona com uma soma de
variáveis aleatórias.

                                    


---

CESPE/2013 – TRT 17ª REGIÃO)
A probabilidade de que uma decisão de 1ª instância da Justiça Federal do Paraná
seja reformada pelo Tribunal Superior da 4ª Região é de 0,20. No momento 100
recursos aguardam por uma decisão dos Srs. Desembargadores daquele Tribunal.
São informados alguns valores da distribuição acumulada da normal-padrão: Ø(1) =
0,87, Ø(1,28)=0,90 e Ø(2) = 98 Sem usar o ajuste de continuidade, a probabilidade
de que mais de 24 decisões sejam reformadas é:
a) 13%
b) 10%
c) 8%
d) 5%
e) 2%

                                  


---

CESPE/2013 – TRT 17ª REGIÃO)
A probabilidade de que uma decisão de 1ª instância da Justiça Federal do Paraná
seja reformada pelo Tribunal Superior da 4ª Região é de 0,20. No momento 100
recursos aguardam por uma decisão dos Srs. Desembargadores daquele Tribunal.
São informados alguns valores da distribuição acumulada da normal-padrão: Ø(1) =
0,87, Ø(1,28)=0,90 e Ø(2) = 98 Sem usar o ajuste de continuidade, a probabilidade
de que mais de 24 decisões sejam reformadas é:
a) 13%
b) 10%
c) 8%
d) 5%
e) 2%

                                  


---

CESPE/2013 – TRT 17ª REGIÃO)
A probabilidade de que uma decisão de 1ª instância da Justiça Federal do Paraná
seja reformada pelo Tribunal Superior da 4ª Região é de 0,20. No momento 100
recursos aguardam por uma decisão dos Srs. Desembargadores daquele Tribunal.
São informados alguns valores da distribuição acumulada da normal-padrão: Ø(1) =
0,87, Ø(1,28)=0,90 e Ø(2) = 98 Sem usar o ajuste de continuidade, a probabilidade
de que mais de 24 decisões sejam reformadas é:
a) 13%
b) 10%
c) 8%
d) 5%
e) 2%

                                  


---

OBRIGADO


           


---
