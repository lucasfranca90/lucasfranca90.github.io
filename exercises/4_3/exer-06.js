/*Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for. c

Exemplo de palíndromo: arara.

verificaPalindrome("arara");

Retorno esperado: true

verificaPalindrome("desenvolvimento");

Retorno esperado: false*/

function checkPalindromo(str) {
  for (var i = 0; i < str.length / 2; i++)
    if (str[i] != str[str.length - i - 1]) return false;
  return true;
}
console.log(checkPalindromo("radar"));
console.log(checkPalindromo("reviver"));
console.log(checkPalindromo("palindromo"));

//-----------
//Outra forma(GABARITO):

function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split("");
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[palavra.length - 1 - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(verificaPalindrome("arara")); //true
console.log(verificaPalindrome("desenvolvimento")); //false

// Outra forma mais simples é:

function checkPalindrome(str) {
  return str == str.split("").reverse().join("");
}

console.log(checkPalindrome("anna"));
