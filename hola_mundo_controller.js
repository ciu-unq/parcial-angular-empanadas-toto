class HolaMundoController {

  constructor(growl) {
    this.growl = growl
  }

  saludar() {
    this.growl.info("¡Hola mundo!")
  }

}