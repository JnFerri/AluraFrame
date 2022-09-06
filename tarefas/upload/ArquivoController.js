class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        let arquivosValor = this._inputDados.value.toUpperCase().split('/')
        let arquivos = new Arquivo(...arquivosValor)
        console.log(arquivos)//cria um Arquivo com as suas propriedades;
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}