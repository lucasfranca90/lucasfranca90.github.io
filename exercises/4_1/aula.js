const a = 5;
const b = 10;

if (a == b) {
  console.log(a + b);
} else {
  console.log(a * b);
}

//------
//Refatoração com operador ternário:

a == b ? console.log(a - b) : console.log(a / b);
