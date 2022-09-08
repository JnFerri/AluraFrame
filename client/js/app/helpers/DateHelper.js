class DateHelper{

  constructor(){
    throw new Error(`DateHelper não pode ser instanciada, possui metodo static`)
  }

   static textoParaData(texto){

    if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error(`Data deve estar no formato aaaa-mm-dd`)

       return new Date( ...texto.split('-')
        .map((item, indice) => item -  indice % 2))
                // pode se utilizar um if tambem em uma funcao
            // % é modulo, o que sobra da divisão dos numeros por inteiro, por exemplo se faz 15 % 7 = 1 por que 7 x 2 = 14 e sobraria 1.
    
    }

   static dataParaTexto(data){
      return `${data.getDate()}/${(data.getMonth() +1)}/${data.getFullYear()}`
    }

 

}