var frmMinutos
var divMostrar
var valor
var teste
var teste2
var diferenca

btnCalc.addEventListener('click', function(){
    frmMinutos = minutos.value
    
    if(frmMinutos <= 0 || frmMinutos % 1 !== 0) { return alert('Digite uma quantidade válida de minutos') }

    diferenca = frmMinutos%15
    if(diferenca == 0 && valor != 5)
    {
        teste = frmMinutos/15
        valor = teste*5
    }
    else if(diferenca > 0)
    {
        teste2 = frmMinutos - diferenca
        console.log(teste2)
        teste2 = teste2+15
        teste = teste2/15
        valor = teste*5
    }

    if(frmMinutos < 15)
    {
        valor = 5
    }

    // Mostrar
    divMostrar = document.getElementById('mostrarValor')
    divMostrar.innerHTML = `
        <h4>
            <p>Valor a ser pago pelo cliente em ${frmMinutos} minutos: R$ ${valor}</p>
        </h4>
    `
})