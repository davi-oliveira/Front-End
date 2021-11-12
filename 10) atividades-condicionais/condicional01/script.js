var divMostrar 
var frmPreco 
var frmPeso 
var valorfinal


btnCalc.addEventListener('click', function(){
    frmPreco = precoporkg.value
    frmPeso = peso.value
    frmPeso = frmPeso*0.001
    valorfinal = (frmPeso*frmPreco).toFixed(2)

    //Mostrar
    divMostrar = document.getElementById('mostrarInfo')
    divMostrar.innerHTML = `
    <h2>
        <br>Valor a ser pago no prato é: R$ ${valorfinal}
    </h2>
    `
})
