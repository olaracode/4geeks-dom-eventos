/**
 * Este proyecto debe tener una lista de documentacion generada con javascript
 * Una lista de tareas dinamica(todo list)
 * - Listar
 * - Agregar
 *  Aplication Programming interface(intermediario entre backend frontend)
 */

// Lista de objetos
let listaDeEnlaces = [
  {
    enlace: "https://developer.mozilla.org/es/docs/Web/Events", // Href
    titulo: "MDN", //<a>titulo</a>
  },
  {
    enlace: "https://www.w3schools.com/js/js_events.asp",
    titulo: "W3School",
  },
  {
    enlace:
      "https://www.freecodecamp.org/espanol/news/javascript-dom-events-onclick-and-onload/",
    titulo: "FreeCodeCamp",
  },
];

// querySelector, byClassName y getElementById -> Sirven para agarrar elementos del html

// Agarramos la lista: <ul id="lista-documentacion"></ul>
let ulDocumentacion = document.getElementById("lista-documentacion");

// elemento = {enlace: "", titulo: ""}
for (let elemento of listaDeEnlaces) {
  // Creamos el elemento <li></li>
  let liElement = document.createElement("li"); // = <li></li>

  // Creamos el elemento <a></a>
  let link = document.createElement("a"); // = <a></a>

  // Asignamos href y asignamos el contenido
  link.href = elemento.enlace; // href="https:......"
  link.innerHTML = elemento.titulo;
  // link = <a href={elemento.enlace}>{elemento.titulo}</a>

  // Anexamos los elementos nuevos al -> DOM
  liElement.appendChild(link); // <li>{link}</li>
  ulDocumentacion.appendChild(liElement); //<ul>{liElement}</ul>
}

// Eventos
let botonSaluda = document.getElementById("saluda");

function saluda() {
  console.log("Hola que tal");
}

// Para agregar un evento a un elemento
// Se usa elemento.addEventListener
// Callback: funcion que llama a otra funcion

botonSaluda.addEventListener("click", () => saluda());

// Cuando el mouse este sobre el <elemento>
botonSaluda.addEventListener("mouseover", () => {
  console.log("Estoy encima");
});

// Cuando el mouse sale del <elemento>
botonSaluda.addEventListener("mouseleave", () => {
  console.log("Estoy saliendo");
});

let inputName = document.getElementById("name");

inputName.addEventListener("keyup", (event) => {
  console.log(event.target.value);
});

// Agarrar nuestro boton de tema oscuro
let darkThemeButton = document.getElementById("dark-theme");
let bodyElement = document.getElementById("body");

darkThemeButton.addEventListener("click", () => {
  // Si el background-color es gris
  if (bodyElement.style.backgroundColor === "grey") {
    bodyElement.style.backgroundColor = "white"; // lo cambia a blanco
  } else {
    // sino
    bodyElement.style.backgroundColor = "grey"; // lo pone gris
  }
});
