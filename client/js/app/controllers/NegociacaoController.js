class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

       
    }

    adiciona(event){
        event.preventDefault()

        let data = new Date(
            // ... e spred operator, ele define que o primeiro elemento do array sera o primeiro parametro passado pra funcao, o segundo o segundo e etc.  
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item -  indice % 2)
                    // pode se utilizar um if tambem em uma funcao
                // % é modulo, o que sobra da divisão dos numeros por inteiro, por exemplo se faz 15 % 7 = 1 por que 7 x 2 = 14 e sobraria 1.
            )

            let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            )
        console.log(negociacao)
        
        
    }
}