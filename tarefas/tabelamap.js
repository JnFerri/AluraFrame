let funcionarios = [
    {
        "nome": "Douglas",
        "endereco" : "Rua da esquina, 123",
        "salario" : "4500"
    },
    {
        "nome": "Felipe",
        "endereco" : "Rua da virada, 456",
        "salario" : "5000"
    },
    {
        "nome": "Silvio",
        "endereco" : "Rua da aresta, 789",
        "salario" : "6000"
    }
];

var localPost = document.getElementById('localPost')    

function imprime(model){

    localPost.innerHTML=`
    <tbody>
    
        ${model.map(n =>`
        <tr>
            <td>${n.nome}</td>
            <td>${n.endereco}</td>
            <td>${n.salario}</td>
        </tr>
        ` ).join('')}
    
    </tbody>`
    
}

document.onload = imprime(funcionarios)