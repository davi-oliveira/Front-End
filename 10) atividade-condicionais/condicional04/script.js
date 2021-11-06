var frmNome
var frmPreco
var promo

btnCalc.addEventListener('click', function(){
    frmNome = nome.value
    frmPreco = preco.value
    promo = (frmPreco*2) - (0.40*frmPreco)

    divMostrar = document.getElementById('mostrarInfo')
    divMostrar.innerHTML = `
        <h2>
            1 ${frmNome} custa R$ ${frmPreco} e levando 2 por apenas R$ ${promo}
        <h2>
    `
})

