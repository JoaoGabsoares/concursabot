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
arquivo_origem: Aula 09_001_Mapa Mental.txt
tipo_material: Mapas Mentais & Esquemas
aula_numero: 09
titulo_aula: Conceito                                        Não substituem a intervenção
---

# Conceito                                        Não substituem a intervenção

Conceito                                        Não substituem a intervenção
                                                          São técnicas, métodos e ferramentas de          humana. São apenas um apoio.

       Business
                                                          análise de dados p/ subsidiar processos
                                                          de decisão de uma empresa.
                                                                                                  É realizado sobre dados históricos

      Intelligence
                                                                                                 consolidados, provenientes de bases
                                                                                              multidimensionais (como Data Warehouses).

                                                                                                     É capaz de fornecer uma visão dos dados
                                                                                                     facilitando análises:
                                                                                                        descritivas (o que aconteceu?);
                                                                             Insight                    diagnósticas (por que isso aconteceu?); e
                     Habilidades                                                                        preditivas (o que vai acontecer?).
                     MEMÓRIA            INFORMAÇÃO              CRIAÇÃO DE                           OBS: Prescritivas não!
                  ORGANIZACIONAL         INTEGRADA             CONHECIMENTO             APRESENTAÇÃO               (o que deve ser feito?)

                                                                                                                         Usuário


                                                                Capacidade de ter                       Gerar relatórios e
A informação e o conhecimento
                                   Concentrar em um só          intuições sobre o                   ferramentas adequados e
 são acumulados ao longo do
                                   local informações de       negócio p/ auxiliar na                 inteligíveis p/ a maioria
 tempo, de forma que possam
                                     diversas fontes.          tomada de decisões.                         dos usuários.
ser acessados posteriormente.


                                                   


---

Conceito                                                  Características Essenciais
Data Warehouse = armazém de dados.                            Orientado por assunto                            Não-volátil
Coleção de dados orientados por assunto, integrados,                                                      Os dados, uma vez inseridos no DW, não podem
variáveis com o tempo e não voláteis, consolidados para       Trata de temas específicos e importantes
                                                                                                          ser alterados.
dar suporte ao processo de tomada de decisão.                 p/ o negócio da organização.
                                                                                                          Somente leitura p/ usuários finais (consultas e
                                                                                                          relatórios).
 Espécies                                                                                                       Integrado
  Enterprise Data Wirehouse (EDW)                                                                        Os dados do DW são integrados de múltiplas fon-
Armazém de Dados Corporativos ou Abrangentes.                                                            tes de forma consistente, padronizada e uniforme.

                                                   Data
                                                   Warehouse
Repositório central tático/estratégico.
Contém todas as informações de negócio de uma                                                            Histórico - variável com o tempo
organização.                                                                                             Dados históricos são mantidos em um DW.
Acessível p/ toda a empresa.                                                                             Em um banco de dados transacional, geralmente só
                                                                                                         os dados mais recentes são mantidos (ex: o último
                                                                                                         endereço de um cliente). Já o DW pode conter todos
                                                          Componentes e Processo
     Operational Data Store (ODS)                                                                        os endereços já associados a um cliente.
Armazém de Dados Operacionais.
Repositório intermediário de dados p/ suporte às
decisões operacionais.
Fonte de dados p/ o EDW.
                      mais importante!
            Data Mart (DM)
Mercado de Dados.
Subconjunto de dados de um Data Warehouse.
Contém dados restritos a uma unidade de negócio.
Repositório especializado.


                                                           


---

Abordagem de Inmon                                                                                        Abordagem de Kimball
 Enterprise Data Warehouse.                                  Ambas possuem um único                           Dimensional Data Warehouse.
 Abordagem top-down (de cima p/ baixo).                    repositório integrado de dados                     Abordagem bottom-up (de baixo p/ cima).
         Construir o DW e dividi-lo em                      corporativos que suporta a                               Construir vários Data Marts e depois
         Data Marts.                                      análise de informações em toda                             integrá-los em um DW.
 Orientação: Orientado a dados.                                    a organização.                             Orientação: Orientado a processos de negócio.
 Investimento Inicial Alto.                                                                                   Investimento Inicial Baixo.
 Normalizado (3ª Forma Normal).                                                                               Desnormalizado (não se importa com dados re-
 Direcionado a profissionais de TI.                                                                           dundantes).
 Consultas realizadas no Data Mart.                                                                           Direcionado a usuários finais.
                                                                                                              Consultas realizadas no Data Warehouse.

                                                    Data
                                                    Warehouse
                                                                                                                     P/ Kinball, a modelagem dimensional é a
 ETL
 Processo de extrair dados de fontes homogêneas
                                                                                                                    única técnica viável p/ bancos de dados
                                                                                                                   que devem responder consultas em um DW.
 e heterogêneas, transformar e limpar estes dados
 e carregá-los no DW.
 A sigla ETL significa Extract, Transform e Load,                      A etapa de extração é a mais demorada.
 mas o processo em si é mais complexo do que                                Por isso é comum, quando um DW é criado,                          É como uma

                                                    e
 essas 3 etapas.                                                            realizar uma carga de dados inicial e com o                    sala de embarque.
                                                                            decorrer do tempo realizar cargas incrementais.
    É o processo mais crítico e demorado na
            construção de um DW.

            Dados trabalhados de forma errada podem gerar                                             Stage Area é uma localização de armazenamento
            tomadas de decisões equivocadas na organização.                                          temporário, onde os dados permanecem até estarem
                                                                                                           prontos p/ serem carregados no DW.


                                                          


---
