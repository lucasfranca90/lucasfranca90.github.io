/*9- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.

Bonus: use somente um if.*/

/*8- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if.*/

const a = 1;
const b = 5;
const c = 7;

let impar = false;

if ((a % 2 != 0 || b % 2 != 0 || c % 2 != 0)) {
  impar = true;
};
console.log(impar);
