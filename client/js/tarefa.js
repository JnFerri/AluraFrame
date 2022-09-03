let numeros = [3,2,11,20,8,7]

let numerosTarefa = numeros.map(function(item){
    if(item % 2 == 0){
        return item
    }else{
        return item * 2
    }
})

console.log(numerosTarefa)