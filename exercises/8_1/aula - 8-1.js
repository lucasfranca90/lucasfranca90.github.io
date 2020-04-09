function sum(num1, num2) {
  return num1 + num2;
}

//Refatorado com uso do Arrow Functions

const sum = (num1, num2) => num1 + num2; // não precisa de chaves e return quando for em uma única linha

console.log(sum(2, 3));
