class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

       
    }

    adiciona(event){
        event.preventDefault()

        let dataArray = this._inputData.value.split('-')
        let dataMes = Number(dataArray[1]) - 1
        data[1] = dataMes.toString()
        let data = new Date(dataArray)

        console.log(data)

        
        
    }
}