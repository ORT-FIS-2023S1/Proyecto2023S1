import { Pais } from "./domain/pais.js";
import { ListaPaises } from "./domain/listapaises.js";

const btnGuardar = document.getElementById('btn_guardar');
const inpNombre = document.getElementById('inp_nombre');
const inpCapital = document.getElementById('inp_capital');

const listaPaises = new ListaPaises();

btnGuardar.addEventListener('click', () => {
  const nuevoPais = new Pais(inpNombre.value);
  nuevoPais.setCapital(inpCapital.value);
  listaPaises.agregar(nuevoPais);
  cargarListaPaises();
  console.log(nuevoPais.presentar());
} );

function cargarListaPaises(){
  const paises = listaPaises.getPaises();
  let secpaises = document.getElementById('secpaises');
  
  for(let i = 0; i < paises.length; i++) {
    let pais = paises[i];

    let infopais = document.createElement("div")
    infopais.className = "infopais";
    infopais.innerHTML = pais.presentar();
    secpaises.appendChild(infopais);

    let saltoLinea = document.createElement('br');
    secpaises.appendChild(saltoLinea);

  }
}