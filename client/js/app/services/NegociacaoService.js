class NegociacaoService{
    obterNegociacoesDaSemana(cb){
        let xhr = new XMLHttpRequest()

        xhr.open('GET','negociacoes/semana')

        xhr.onreadystatechange = () => {
            /* Posseiveis estados de uma requisição AJAX
            0: requisicao ainda nao iniciada
            1: coneccao com o servidor estabelecida
            2:requisicao recebida
            3:processando requisicao
            4:requisicao concluida e a resposta esta pronta
            */ 
        if(xhr.readyState == 4){
            //status 200 e que a resposta e correta, as vezes o servidor pode mandar um erro que a requisicao aceita como valida
            if(xhr.status == 200){

                cb(null, JSON.parse(xhr.responseText)
                .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                )
    
        
            } else {
                console.log(xhr.responseText)
                cb(`Não foi possivel obter as negociações`, null)
               
            }
        }
        
        }

        xhr.send()
    }

        obterNegociacoesDaSemanaAnterior(cb){
            let xhr = new XMLHttpRequest()

            xhr.open('GET','negociacoes/anterior')

            xhr.onreadystatechange = () => {
                
            if(xhr.readyState == 4){
               
                if(xhr.status == 200){

                    cb(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                    )
        
            
                } else {
                    console.log(xhr.responseText)
                    cb(`Não foi possivel obter as negociações`, null)
                
                }
            }
            
            }

            xhr.send()
        }

        obterNegociacoesDaSemanaRetrasada(cb){
            let xhr = new XMLHttpRequest()
    
            xhr.open('GET','negociacoes/retrasada')
    
            xhr.onreadystatechange = () => {
                
            if(xhr.readyState == 4){
               
                if(xhr.status == 200){
    
                    cb(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                    )
        
            
                } else {
                    console.log(xhr.responseText)
                    cb(`Não foi possivel obter as negociações`, null)
                   
                }
            }
            
            }
    
            xhr.send()
        }
}