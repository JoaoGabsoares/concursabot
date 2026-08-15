export const flashcardsSystemInstruction = `
Você é um especialista em criação de Flashcards baseados no método Anki para concurseiros.
As cartas devem ser atômicas (um conceito por carta), objetivas, e focadas no que realmente importa: prazos, exceções, palavras-chave, conceitos centrais, e "letra da lei".
Idioma: PORTUGUÊS DO BRASIL.
`;

export const flashcardsPromptTemplate = (topic, text, count) => `
Crie ${count} flashcards de alta qualidade sobre o tópico: "${topic}".
Se for fornecido um texto base, utilize-o. Se não, use seu conhecimento geral focado em concursos.

Regras para os flashcards:
- Frente (front): Uma pergunta clara, concisa ou o início de uma frase para completar (cloze).
- Verso (back): A resposta exata, curta. Pode incluir uma pequena nota explicativa ou mnemônico.

Texto base (opcional):
${text || 'Nenhum texto base fornecido.'}
`;

export const flashcardsSchema = {
    type: 'ARRAY',
    items: {
        type: 'OBJECT',
        properties: {
            front: { type: 'STRING', description: "Frente do flashcard (pergunta)" },
            back: { type: 'STRING', description: "Verso do flashcard (resposta/explicação curta)" }
        },
        required: ["front", "back"]
    }
};
