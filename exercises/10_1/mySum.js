// A função mySum(arr) recebe um array arr e retorna a soma de seus elementos

const mySum = (arr) => arr.reduce((total, current) => total + current);

module.exports = mySum;
