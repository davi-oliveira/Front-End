var frmNome
var frmValor
var divMostrar
var texto = ""

btnCalc.addEventListener('click', function(){
    frmNome = nome.value
    frmValor = numero.value
    texto = ""
    
    for (var i = 0; i < frmValor; i++) {
        texto += frmNome + " | "
    }

    divMostrar = document.getElementById('mostrarConteudo')
    divMostrar.innerHTML = `${texto}`
})