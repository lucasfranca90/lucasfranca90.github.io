//Nessa aula o Nobre mostrou diferentes formas de mutar objetos.

//Forma simples de criar objetos.
const quadrinho1 = {
  collection: 'Tio Patinhas',
  title: 'O Tesouro dos Dez Avatares'
};

console.log(quadrinho1.collection);
console.log(quadrinho1.title);

const objeto = {
  chave1: 'Meu valor 1',
  chave2: 'Meu valor 2'
};

// Essas são as diferentes formas de mutar uma const e seus objetos.
quadrinho1.author = 'Don Rosa'; // Forma mais fácil.
quadrinho1['publishingCompany'] = 'Editora Abril'; // Segunda forma de mutar const com no objeto.

// A terceira forma de mutar com uma nov const não é recomendado.
const newPublishingComapany = 'Panini' // Aqui atribuimos uma nova propriedade em uma const.
quadrinho1.publishingCompany = newPublishingComapany // E aqui substituimos um parametro com a nova propriedade.

console.log(quadrinho1);

//--------

// Exemplos de objetos mais utilizados no dia-dia.

// Listando chaves de um objeto.
console.log(Object.keys(quadrinho1));

//Listando Valores.
console.log(Object.values(quadrinho1));

//Listando todos os conjuntos de objetos, com seus pares - chaves e valores.
console.log(Object.entries(quadrinho1));

// Para verificar se um valor existe em um objeto, deve se fazer dessa forma:
console.log(Object.values(quadrinho1).includes('Tio Patinhas')); //True.

// Da mesma forma para verificar uma chave.
console.log(Object.keys(quadrinho1).includes('author'));//true.
