class NegociacaoService{
   
    obterNegociacoesDaSemana(){
        return new Promise((resolve, reject)=>{

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
    
                    resolve(JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                    )
        
            
                } else {
                    console.log(xhr.responseText)
                    reject(`Não foi possivel obter as negociações da semana`)
                   
                }
            }
            
            }
    
            xhr.send()
        })

    }

        obterNegociacoesDaSemanaAnterior(){
           return new Promise((resolve, reject) =>{

                let xhr = new XMLHttpRequest()
    
                xhr.open('GET','negociacoes/anterior')
    
                xhr.onreadystatechange = () => {
                    
                if(xhr.readyState == 4){
                   
                    if(xhr.status == 200){
    
                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                        )
            
                
                    } else {
                        console.log(xhr.responseText)
                        reject(`Não foi possivel obter as negociações da semana anterior`)
                    
                    }
                }
                
                }
    
                xhr.send()
            })
        }

        obterNegociacoesDaSemanaRetrasada(){
            return new Promise((resolve,reject)=>{

                let xhr = new XMLHttpRequest()
        
                xhr.open('GET','negociacoes/retrasada')
        
                xhr.onreadystatechange = () => {
                    
                if(xhr.readyState == 4){
                   
                    if(xhr.status == 200){
        
                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                        )
            
                
                    } else {
                        console.log(xhr.responseText)
                        reject(`Não foi possivel obter as negociações da semana retrasada`)
                       
                    }
                }
                
                }
        
                xhr.send()
            })
        }
}