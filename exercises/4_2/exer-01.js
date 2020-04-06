/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
n = 5
3*****
4*****
5*****
6*****
7***** */

let n = 5;
let i;
let asterisco = "*";
let espacos = "";

for (i = 0; i < n; i+=1) {
  espacos = espacos + asterisco;
}
for (i = 0; i < n; i++) {
  console.log(espacos);
}
