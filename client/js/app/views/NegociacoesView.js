class NegociacoesView{
constructor(elemento,total){
    this._elemento = elemento
    this._totalVolume = 0
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
        <td>${this._totalVolume}</td>
        </tfoot>
    </table`

    }

    update(model){
        this._elemento.innerHTML = this._template(model)
    }

    totalizar(model){
        this._totalVolume = DateHelper.totalizador(model.negociacoes.map(n => n.volume))
        return this._totalVolume
    }

    
}
