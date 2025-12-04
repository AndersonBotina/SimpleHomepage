const hamb = document.querySelector(".hamburger");
const titulo= document.querySelector("h3");
const nav = document.querySelector(".nav");
const cross = document.querySelector(".cerrar");
const cambio = document.getElementById("boton-cambio1");
const cambio1 = document.getElementById("boton-cambio2");
const body = document.body;
hamb.addEventListener("click", () => {
  console.log("Menu hamburguesa abierto");
  nav.classList.toggle("show");
});
cross.addEventListener("click", () => {
  nav.classList.toggle("show");
});
let light = true;
cambio.addEventListener("click", () => {
  console.log("Color de fondo cambiado");
  body.classList.toggle("dark");
  const image = document.getElementById("logo");
  light = !light;
  if (light) {
    image.src = "./resources/logo-light.svg";
    titulo.classList.remove("titulo-dark");
  } else {
    image.src = "./resources/logo-dark.svg";
    titulo.classList.add("titulo-dark");
  }
  const items = document.querySelectorAll(".texto");
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    element.classList.toggle("dark");
  }
});

cambio1.addEventListener("click", () => {
  console.log("Color de fondo cambiado");
  body.classList.toggle("dark");
  const image = document.getElementById("logo");
  light = !light;
  if (light) {
    image.src = "./resources/logo-light.svg";
  } else {
    image.src = "./resources/logo-dark.svg";
  }
  const items = document.querySelectorAll(".texto");
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    element.classList.toggle("dark");
  }
});
