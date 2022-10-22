class HttpService{
    get(url){
        return new Promise((resolve, reject) =>{

            let xhr = new XMLHttpRequest()

            xhr.open('GET',url)

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
                    )
        
            
                } else {
                    reject(xhr.responseText)
                
                }
            }
            
            }

            xhr.send()
        })
    }

    post(url, dados){
        return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {
                       resolve(JSON.parse(xhr.responseText))
                    } else {
                        alert(`Não foi possível enviar a negociação: ${xhr.responseText}`);
                    }
                }
            }
            xhr.send(JSON.stringify(dados));
        
    })
    }
    }
