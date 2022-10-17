class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        
        this._listaNegociacoes = new Bind(  
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia'
             )
        this._mensagem = new Bind(
             new Mensagem(),
             new MensagemView($('#mensagemView')),
             'texto')

        
        
        
    }

    adiciona(event){
        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())
         this._limpaFormulario()
         this._mensagem.texto = 'Negociacao adicionada com sucesso'
         
        
            }

    importarNegociacoes(){
       let service = new NegociacaoService()
       service.obterNegociacoesDaSemana()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociacoes adicionadas com sucesso'
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaAnterior()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociacoes adicionadas com sucesso'
            })
            .catch(erro => this._mensagem.texto = erro);

         service.obterNegociacoesDaSemanaRetrasada()
           .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociacoes adicionadas com sucesso'
            })
            .catch(err => this._mensagem.texto = err);
            
                
            
            

        /*service.obterNegociacoesDaSemana((erro, negociacoes) => {
            
            if(erro){
                this._mensagem.texto = erro
                return
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        
            service.obterNegociacoesDaSemanaAnterior((erro, negociacoes) => {
                
                if(erro){
                    this._mensagem.texto = erro
                    return
                }
                
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                
                service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes) => {
                    
                    if(erro){
                        this._mensagem.texto = erro
                        return
                    }
                    
                    negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                    this._mensagem.texto = `Negociaçoes importadas com sucesso`
                })
            })
        })*/
        }

            apagar(){
                this._listaNegociacoes.esvazia()
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