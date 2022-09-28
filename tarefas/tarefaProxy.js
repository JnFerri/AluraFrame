




let func = new Proxy(new Funcionario(`ahahaha@jsa.com`), {
    
    set(target, prop ,value, receiver){
        
        console.log(`valor anterior ${target[prop]} valor novo ${value}`)
        return Reflect.set(target, prop ,value, receiver)
    
        
    }


})

func._email = `jose@jsa.com`
