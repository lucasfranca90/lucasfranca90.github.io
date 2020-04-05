/*8- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if.*/

const a = 4;
const b = 3;
const c = 5;

let par = false;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  par = true;
};
console.log(par);
