var frmNumero
var resultado

btnInfo.addEventListener('click', function(){
    if(numero.value == "" || numero.value < 0)
    {
        return alert('Digite um número válido')
    }
    
    if(numero.value % 1 !== 0) {
        return alert('Você digitou um número decimal!\nNúmeros decimais não podem ser classificados entre pares/ímpares.')
    }

    frmNumero = (numero.value)%2
    if(frmNumero != 0) 
    { 
        resultado = "ímpar"
    }
    else if(numero.value == 0)
    {
        resultado = "neutro"
    }
    else{ resultado = "par" }

    divMostrar = document.getElementById('mostrarInfo')
    divMostrar.innerHTML = `
        <h2>
            <br>
            O número ${numero.value} é ${resultado}
        <h2>
    `
})

