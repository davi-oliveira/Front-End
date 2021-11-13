var frmNumero
var divisor
var texto
var perfeito = 0

btnCalc.addEventListener('click', function(){
    frmNumero = numero.value
    divisor = frmNumero-1
    texto = ""
    perfeito = 0

    while(divisor != 1){
        if(frmNumero%divisor == 0)
        {
            texto += divisor + ", "
            perfeito += divisor
        }
        divisor--
    }
    
    divMostrar = document.getElementById('mostrarConteudo')
    divMostrar.innerHTML = `<br>Divisores de ${frmNumero}: ${texto} 1`
    if(frmNumero == parseInt(perfeito)+1)
    {
        divMostrar.innerHTML += `<br>${frmNumero} é um número perfeito`
    }
})