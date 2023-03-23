export class Pais {

  #nombre;
  #capital;

  constructor(aNombre) {
    this.#nombre = aNombre;
  }

  getNombre() {
    return this.#nombre;
  }

  setCapital(capital) {
    this.#capital = aCapital
  }

  presentar() {
    return `País: ${this.#nombre} - capital: ${this.#capital}`;
  }

}