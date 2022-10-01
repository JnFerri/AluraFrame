class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = ProxyFactory.create(new ListaNegociacoes(),['adiciona', 'esvazia'], model => this._negociacoesView.update(model))


        // ????
        /*
        this._listaNegociacoes =
         new ListaNegociacoes((model) => this._negociacoesView.update(model))*/

        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))
        
        
    }

    adiciona(event){
        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())
         this._limpaFormulario()
         this._mensagem.texto = 'Negociacao adicionada com sucesso'
        
            }

            apagar(){
                this._mensagem.texto = 'Negociação apagada com sucesso'
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