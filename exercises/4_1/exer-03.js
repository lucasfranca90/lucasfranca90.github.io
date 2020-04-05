//3- Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 100;
let b = 40;
let c = 30;

if (a > b && a > c) {
  console.log('"a" é maior que "b" e "c"');
} else if (a < b && a < c && b > c) {
  console.log('"b" é maior que "a" e "c"');
} else {
  console.log('"c" é maior que "a" e "b"');
}

//----------

//Outra forma mais simples é:

var x = 6;
var y = 4;
var z = 2;

if (x > y && x > z) {
  console.log("O maior número é: " + x + " (x)");
} else if (y > x && y > z) {
  console.log("O maior número é: " + y + " (y)");
} else {
  console.log("O maior número é: " + z + " (z)");
}
