//Faça um for/in que mostre todas as chaves do objeto.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

for (i in info) {
  console.log(i);
}

// Ou poderia ter declarado como variavél, por exemplo..

for (let propriedades in info) {
  console.log(propriedades);
}
