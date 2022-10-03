class ProxyFactory {
    static create(objeto, props, acao){
     return new Proxy(objeto, {
        get(target,prop,receiver){
            if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){
                return function(){
                    
                    console.log(`interceptando ${prop}`)
                    Reflect.apply(target[prop], target, arguments)
                    return acao(target)
                }
            }
            return Reflect.get(target,prop, receiver)
                
        },
        set(target,props,value,receiver){
        Reflect.set(target,props,value,receiver)
        acao(target)}
        
    }
        

    )

}

static _ehFuncao(func){
    return typeof(func) == typeof(Function)
}
}