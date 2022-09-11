class Conta{
    constructor(saldo){
        this._saldo = saldo
    }

    get saldo(){
        return this._saldo
    }

    atualiza(taxa){
        throw new Error('Metodo necessita de uma classe filha para ser executado')
    }
}