export class ListaPaises {

  #paises;

  constructor() {
    this.#paises = [];
  }

  agregar(pais) {
    let paisEnLista = this.#paises.some(m => m.getNombre() == pais.getNombre());
    if (!paisEnLista) {
      this.#paises.push(pais);
    } else {
      throw new Error(`No se pudo agregar. ${pais.getNombre()} ya está en la lista.`);
    }
  }

  getPaises() {
    return this.#paises;
  }
}