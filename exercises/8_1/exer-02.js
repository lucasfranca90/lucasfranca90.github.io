// Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (frase) => {
  let wordArray = frase.split(" ");
  let maxLength = 0;
  let result = "";

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

  return result;
};

console.log(
  maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu")
);
