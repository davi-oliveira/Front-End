var frmPerm
var frmAtual
var frmPerc

btnCalc.addEventListener('click', function(){
    frmPerm = parseInt(vPerm.value)
    frmAtual = parseInt(vAtual.value)

    divMostrar = document.getElementById('mostrarInfo')
    
    //================================== SEM MULTA
    if(frmAtual <= frmPerm){
        divMostrar.innerHTML = `
        <h2>
            Sem multa
        <h2>
    `
        return 1;
    }

    //================================== ATÉ 20%
    frmPerc = frmPerm + (frmPerm*0.20)
    if(frmAtual <= frmPerc){
        divMostrar.innerHTML = `
        <h2>
            Multa leve
        <h2>
    `
        return 1;
    }

    //================================== + 20%
    frmPerc = frmPerm + (frmPerm*0.20)
    if(frmAtual > frmPerc){
        divMostrar.innerHTML = `
        <h2>
            Multa Grave
        <h2>
    `
        return 1;
    }
})

