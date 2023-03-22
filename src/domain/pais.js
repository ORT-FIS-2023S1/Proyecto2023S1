export class Pais {

  #nombre;
  #capital;

  constructor(aNombre) {
    this.#nombre = aNombre;
  }

  setCapital(capital) {
    this.#capital = aCapital
  }

  presentar() {
    console.log(`País: ${this.#nombre} capital: ${this.#capital}`);
  }

}