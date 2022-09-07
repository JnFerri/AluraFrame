class NegociacoesView{
constructor(elemento,total){
    this._elemento = elemento
    this._total = 0
}
    _template(model){
        return `
        
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${model.negociacoes.map(n => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
            `).join('')}
        </tbody>
        
        <tfoot>
        <td colspan="3"></td>
        <td>${this._total}</td>
        </tfoot>
    </table`

    }

    update(model){
        this._elemento.innerHTML = this._template(model)
    }

    totalizar(valor){
        let total = 0
        for(let i=0;i<valor.length;i++){
            let valorTotal = total +=valor[i]
            this._total = valorTotal
        }
        return this._total
    }

    
}
