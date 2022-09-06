class ListaNegociacoes{
    constructor(){
        this._negociacoes = []
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao)
    }

    get negociacoes(){
        return [].concat(this._negociacoes)
        //metodo usado para dar uma copia do array para o usuario, programacao defensiva.
    }
}