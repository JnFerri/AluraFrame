class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._mensagem = new Mensagem()
        this._negociacoesView.update(this._listaNegociacoes)
        this._mensagemView = new MensagemView($('#mensagemView'))
        
    }

    adiciona(event){
        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())
         this._limpaFormulario()
         this._mensagem.texto = 'Negociacao adicionada com sucesso'
        this._mensagemView.update(this._mensagem)
         this._negociacoesView.update(this._listaNegociacoes)

            }
            _criaNegociacao(){
                return new Negociacao(
                    DateHelper.textoParaData(this._inputData.value),
                    this._inputQuantidade.value,
                    this._inputValor.value,
                    )
            }

            //limpa os inputs e da foco na data
             _limpaFormulario(){   this._inputData.value = ''
                this._inputQuantidade.value = 1
                this._inputValor.value = 0
            this._inputData.focus()

            
        }
}