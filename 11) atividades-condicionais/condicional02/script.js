var frmMinutos
var divMostrar
var valor
var teste
var teste2
var diferenca
var preco

btnCalc.addEventListener('click', function(){
    frmMinutos = minutos.value
    preco = prcPorMinuto.value
    
    if(frmMinutos <= 0 || frmMinutos % 1 !== 0) { return alert('Digite uma quantidade válida de minutos') }

    diferenca = frmMinutos%15
    if(diferenca == 0 && valor != preco)
    {
        teste = frmMinutos/15
        valor = teste*preco
    }
    else if(diferenca > 0)
    {
        teste2 = frmMinutos - diferenca
        teste2 = teste2+15
        teste = teste2/15
        valor = teste*preco
    }

    if(frmMinutos < 15)
    {
        valor = preco
    }

    // Mostrar
    divMostrar = document.getElementById('mostrarValor')
    divMostrar.innerHTML = `
        <h4>
            <br><p>Valor a ser pago pelo cliente em ${frmMinutos} minutos: R$ ${valor}</p>
        </h4>
    `
})