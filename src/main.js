import { Pais } from "./domain/pais.js";
const btnGuardar = document.getElementById('btn_guardar');
btnGuardar.addEventListener('click', () => {
  const nuevoPais = new Pais('Uruguay');
  console.log(nuevoPais.presentar());
} );