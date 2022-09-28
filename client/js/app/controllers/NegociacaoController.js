class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        let self = this
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target,prop,receiver){
                if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)){
                    return function(){
                        
                        Reflect.apply(target[prop], target, arguments)
                        console.log(`interceptando ${prop}`)
                        self._negociacoesView.update(target)
                    }
                }
                return Reflect.get(target,prop, receiver)
                    
            }
        })

        // ????
        /*
        this._listaNegociacoes =
         new ListaNegociacoes((model) => this._negociacoesView.update(model))*/

        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
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