var texto = ""
var numero = 0
var divMostrar

while(numero <= 20){
    texto += `${numero}<br>`
    numero++
}

divMostrar = document.getElementById('mostrarConteudo')
divMostrar.innerHTML = `
    ${texto}
`