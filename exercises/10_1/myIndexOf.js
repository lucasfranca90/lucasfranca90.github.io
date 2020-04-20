// A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso item não pertença ao array arr.

const myIndexOf = (arr, item) => arr.findIndex(element => element === item);

module.exports = myIndexOf;
