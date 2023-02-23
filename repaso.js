let userAge = 18;

console.log(userAge < 18);

if (userAge >= 18) {
}

function saludar() {
  console.log("Hola");
}

saludar();

// Single responsablity
function sum(a, b) {
  if (a < 5) {
    a = a * 2;
  } else {
    b = b * 2;
  }
  let result = a + b;
  if (result > 10) {
    return "Hola";
  } else {
    return "chao";
  }
}

// For clasico - base
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for of se usa para arrays
let lista = ["a", "b", "c"];
for (let arrayItem of lista) {
  console.log(arrayItem);
}

let car = {
  // llave: valor;
  // key: value;
  color: "red",
  brand: "toyota",
};

// objeto[nombre de la propiedad nueva] = valor de la propiedad nueva;
car["year"] = 1992;

// for in para objetos
for (let llave in lista) {
  console.log(llave, lista[llave]);
}

// Muy parecido al map
lista.forEach((elementoDeLaLista) => {
  console.log(elementoDeLaLista);
});
