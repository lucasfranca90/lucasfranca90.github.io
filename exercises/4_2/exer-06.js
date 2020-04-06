let n = 3;
let primo = "O número " + n + " é primo";
let noPrimo = "O número " + n + " não é primo";
let resultado = noPrimo;

for (i = 2; i < n; i++) {
  resultado = primo;

  if (n % i == 0) {
    resultado = noPrimo;
  }
}

if (n == 2) {
  resultado = primo;
}

console.log(resultado);

let divisors;
let numberToCheck = 2;

for (let number = 2; number < numberToCheck && divisors !== 1; number++) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors++;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
