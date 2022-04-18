var frmInicial
var frmAnos
var tempo = 1
var texto = ""

btnCalc.addEventListener('click', function(){
    tempo = 1
    texto = ""
    frmInicial = inicial.value
    frmAnos = anos.value
    if(frmInicial < 3) return alert('O número inicial de coelhos precisa ser no mínimo 3')
    for (var i = 1; i <= frmAnos; i++) {
        if(tempo != 1) { frmInicial = frmInicial*7 }
        texto += tempo + "º ano: " + frmInicial + " coelhos<br>"
        tempo++
    }

    divMostrar = document.getElementById('mostrarConteudo')
    divMostrar.innerHTML = `<br>${texto}`
})