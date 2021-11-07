var frmValor
var cem = 0
var cinquenta = 0
var dez = 0
var sobra = 0

btnCalc.addEventListener('click', function(){
    frmValor = dinheiro.value
    if(frmValor%10 != 0) return alert('Não é possível sacar esse valor\nNotas disponíveis: R$ 100 / R$  50 / R$ 10')
    sobra = dinheiro.value
    divMostrar = document.getElementById('mostrarInfo')

    for (let i = frmValor; i >= 100; i -= 100) {
        frmValor = frmValor-100
        console.log("The number is " + i)
        cem++
    }

    for (let i = frmValor; i >= 50; i -= 50) {
        frmValor = frmValor-50
        console.log("The number is " + i)
        cinquenta++
    }

    for (let i = frmValor; i >= 10; i -= 10) {
        frmValor = frmValor-10
        console.log("The number is " + i)
        dez++
    }

    divMostrar.innerHTML = `
        <h2>
        <br>
            <!--Valor restante: ${frmValor}<br> -->
            <img src="imgs/nota_cem.jpg" alt="nota de cem reais" height="80px" style="padding:5px;"> ${cem}<br>
            <img src="imgs/nota_cinquenta.jpg" alt="nota de cinquenta reais" height="80px" style="padding:5px;"> ${cinquenta}<br>
            <img src="imgs/nota_dez.jpg" alt="nota de dez reais" height="80px" style="padding:5px;"> ${dez}
        <h2>
    `
})

