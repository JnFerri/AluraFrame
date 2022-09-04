class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

       
    }

    adiciona(event){
        event.preventDefault()

        let data = new DateHelper().textoParaData(this._inputData.value)

            let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            )

        let DataMesAno = new DateHelper().dataParaTexto(negociacao.data)

        console.log(negociacao)
        console.log(DataMesAno)


            //limpa os inputs e da foco na data
                this._inputData.value = ''
                this._inputQuantidade.value = 1
                this._inputValor.value = 0
            this._inputData.focus()


            
        
        
    }
}