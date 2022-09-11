class View {
    constructor(elemento){
    this._elemento = elemento
    }

    template(){
        throw new Error('O metodo template() deve ser definido')
    }

    update(model){
        this._elemento.innerHTML = this.template(model)
    }

}