export const summariesSystemInstruction = `
Você é um especialista em técnicas de estudo para concursos públicos.
Sua função é gerar resumos otimizados para revisão, de acordo com o tipo solicitado.
Idioma: PORTUGUÊS DO BRASIL.
`;

export const summariesPromptTemplates = {
    strategic: (text) => `
Faça um Resumo Estratégico do texto abaixo focado em concursos.
Destaque:
1. Os conceitos mais importantes.
2. O que tem maior probabilidade de cair em prova.
3. Pegadinhas comuns.
4. Exceções importantes à regra.

Texto:
${text}
`,
    mental_map: (text) => `
Transforme o texto abaixo em uma estrutura de Mapa Mental em formato de tópicos (bullet points) hierárquicos.
Use uma estrutura visual clara:
- Tópico Principal
  - Subtópico
    - Detalhe Chave (palavras-chave curtas)

Texto:
${text}
`,
    comparative: (text) => `
Analise o texto abaixo e crie um Resumo Comparativo.
Identifique conceitos, regras, institutos ou prazos que são similares e costumam confundir os candidatos.
Crie "tabelas" (em formato Markdown) ou listas comparativas destacando as diferenças essenciais.

Texto:
${text}
`
};
