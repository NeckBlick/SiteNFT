var Vcoin = 4356;
const brcoin = document.querySelector('#brcoin')
const lcoin = document.querySelector('#lcoin')
const button = document.querySelector('#button')


function Converter(){
    if(brcoin.value == "" && lcoin.value != ""){
        brcoin.value = lcoin.value / Vcoin
    }else{
        var result = Number(brcoin.value * Vcoin)
        var resultFormatado = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        lcoin.value = resultFormatado
    }
}



