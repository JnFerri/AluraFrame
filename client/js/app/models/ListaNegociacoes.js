class ListaNegociacoes{
    constructor(armadilha){
        this._negociacoes = []
        this._armadilha=armadilha
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao)
        this._armadilha(this)
    }

    get negociacoes(){
        return [].concat(this._negociacoes)
        //metodo usado para dar uma copia do array para o usuario, programacao defensiva.
    }

    esvazia(){
        this._negociacoes = []
        this._armadilha(this)
    }
}