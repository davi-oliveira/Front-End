var frmMinutos
var divMostrar
var valor
var teste
var diferenca

btnCalc.addEventListener('click', function(){
    frmMinutos = minutos.value
    divMostrar = document.getElementById('mostrarValor')

    if(frmMinutos <= 0) { return alert('Digite uma quantidade válida de minutos') }
    teste = frmMinutos/15
    diferenca = frmMinutos%15
    valor = 5*teste
    if(diferenca >= 1) { valor = parseInt(valor)+5}
    if(frmMinutos < 15) { valor = 5 }
    divMostrar.innerHTML = `
        <h4>
            <p>Valor a ser pago pelo cliente em ${frmMinutos} minutos: R$ ${valor}</p>
        </h4>
    `
})