---
cargo: Analista-Tributário da Receita Federal do Brasil (ATRFB)
banca: FGV
disciplina: Fluência em Dados e Língua Inglesa
tags:
- dados
- sql
- nosql
- big_data
- ingles_fiscal
arquivo_origem: Aula 10_013_Slide.txt
tipo_material: Curso Teórico Base
aula_numero: '10'
titulo_aula: Árvore de decisão
---

# Árvore de decisão

Árvore de decisão
         ● nó interno corresponde a um teste de um atributo
            ○ cada ramo representa um resultado do teste
                 ■ nós folha representam classes
         ● Estratificação de dados
         ● dados precisam ser discretizados
         ● Entropia como medida de aleatoriedade
            ○ mede              o           grau          de         incerteza
                associado aos dados
         ● Como funciona?
            ○ Seleciona o atributo
                 ■ homogeneidade
            ○ Divide (branches)
Prof. Raphael Lacerda
                                


---

       ID.3
                                                                    A comparative study of decision tree ID3 and
         ● Iterative Dichotomiser 3                                 C4.5 (thesai.org)

         ● o ID3 utiliza somente atributos categóricos.
         ● Começa com um nó raiz e a cada iteração, percorre os atributos e
           calcula o nível de entropia para eles
         ● Cada elemento no subset pertence à mesma classe

Prof. Raphael Lacerda
                               


---

       C4.5
         ● O algoritmo C4.5 é um sucessor do algoritmo ID3 e utiliza tanto
           atributos numéricos quanto categóricos.
         ● Converte uma árvore treinada em um conjunto de IF-THEN rules
            ○ Informação particionada
         ● Referenciador como classificador estatístico
         ● Usa o índice GAIN RATIO
      Information Gain, Gini Index, Entropy and
      Gain Ratio in Decision Trees| Analytics Steps

        What is the C4.5 algorithm and how does it
        work? | by Sumit Saha | Towards Data
        Science

Prof. Raphael Lacerda
                                                      


---

       CART
         ● Classification and Regression TRee
         ● Análogo ao C4.5, mas diferente dele, suporta target's numéricos para
           serem aplicados na regressão
         ● Não processa regras
         ● Usa o índice GINI

              Information Gain, Gini Index, Entropy and
              Gain Ratio in Decision Trees| Analytics Steps

Prof. Raphael Lacerda
                                                   


---

       Exemplo

                                                             13 Decision Trees and Random Forests |
                                                             ISTA 321 - Data Mining (bookdown.org)
Prof. Raphael Lacerda
                        


---

                                                              Survey of the Decision Trees Algorithms


       Comparação
                                                              (CART, C4.5, ID3) | by Aydin Abedinia |
                                                              Medium

                FEATURES                           ID.3                                 C4.5                     CART

              Tipo de dados                     Categóricos                  Categóricos e contínuos      Contínuos, nominal


                Velocidade                        Lento                       mais rápido que o Id.3           Mediano

              Incompletude                       Não lida                  marca ? para dados faltantes        Pode lidar

                 Fórmula                Usa entropia da informação           Informação particionada      índice GINI diversity

        A comparative study of decision tree ID3 and
        C4.5 (thesai.org)


Prof. Raphael Lacerda
                                                   


---

       Random Forest
         ● Um grande número de árvores que operam em
           conjunto
            ○ a combinação de diferentes modelos para se
               obter um único resultado.
         ● "wisdom of crowds"
            ○ Um erro de uma árvore não afeta a outra
         ● Bootstrap Aggregation - BAGGING
            ○ árvore é sensível aos dados de treino, logo
               cada árvore randomicamente escolhe dados do
               dataset                                O que são Métodos Ensemble e como eles
                                                      funcionam? (didatica.tech)
         ● Feature Randomness
                                                      Understanding Random Forest. How the
         ● Resultado final é a média das respostas    Algorithm Works and Why it Is… | by Tony
                                                                          Yiu | Towards Data Science
Prof. Raphael Lacerda
                                     


---

       Random Forest

                                                             Understanding Random Forest. How the
                                                             Algorithm Works and Why it Is… | by Tony
                                                             Yiu | Towards Data Science

Prof. Raphael Lacerda
                        


---

       Random Forest

Prof. Raphael Lacerda
                        


---

       Random Forest

                                  Introducing TensorFlow Decision Forests —
Prof. Raphael Lacerda             The TensorFlow Blog
                        


---

       One-Rule (1R)
         ● Encontrar            regras        que                         testam            um
           único atributo da base
         ● Simples, baixo custo computacional
         ● Alternativa à árvore de decisão

                                                                     OneR (saedsayad.com)
Prof. Raphael Lacerda
                                


---

       Exemplo

Prof. Raphael Lacerda                                        OneR (saedsayad.com)
                        


---

       Naïve Bayes
         ● Classificador probabilístico
         ● predizer a probabilidade de pertinência de um objeto a determinada
           classe
         ● alta perfomance e precisão quando dataset é grande ou pequeno
         ● assumem que o efeito do valor de um atributo em uma dada classe é
           INDEPENDENTE dos valores dos outros atributos.
            ○ Independência                                       CONDICIONAL
                da classe

                        All about Naive Bayes. A simple yet in depth
                        experience of… | by Gaurav Chauhan |
Prof. Raphael Lacerda   Towards Data Science
                                                


---

       Exemplo

                         Cor
                         Textura
                         Tamanho
                         Gosto
                         Diâmetro
                                                             The Not So Naive Bayes. Taking the Naive
                                                             Approach to Build a… | by Ashwin Raj |
Prof. Raphael Lacerda                                        Towards Data Science
                        


---

       Regressão Logística
         ● determinar a probabilidade de um evento acontecer
         ● Permite transformar um número contínuo em uma categoria
         ● Função Sigmóide

                                                                    Introduction to Logistic Regression | by
                                                                    Ayush Pant | Towards Data Science
Prof. Raphael Lacerda
                               


---
