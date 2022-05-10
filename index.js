const displayValorAnterior = document.getElementById("valorAnterior");
const displayValorActual = document.getElementById("valorActual");
const botonesNumeros = document.querySelectorAll(".num");
const botonesOperadores = document.querySelectorAll(".ope");
const display = new Display(displayValorAnterior, displayValorActual);
botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.agregarNum(boton.innerHTML);
  });
});
botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.computar(boton.value);
  });
});
