var frmModelo
var frmValor
var divMostrar
var valorParcela
document.getElementById('mostrarInfo').style.display = "none";

btnCalc.addEventListener('click', function(){
    frmModelo = modelo.value
    frmValor = valor.value/2
    valorParcela = (frmValor/60)*1.7 
    divMostrar = document.getElementById('mostrarInfo')
    document.getElementById('mostrarInfo').style.display = "block";
    divMostrar.innerHTML = `
        <h2>
            <p><div>Promoção: <span class="campo">${frmModelo}</span></div></p>
            <p><div>Entrada de <span class="campo">R$ ${frmValor.toFixed(2)}</span></div></p>
            <p><div>+60 de <span class="campo">R$ ${valorParcela.toFixed(2)}</span></div></p>
        </h2>
    `
})



