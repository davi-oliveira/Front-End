var frmNome
var frmNota
var texto = ""
var comecou = 0
var notaFinal

btnCalc.addEventListener('click', function(){
    frmNome = nome.value
    frmNota = nota.value
    
    if(frmNota == 100){  notaFinal = "A" }
    if(frmNota >= 90 && frmNota < 100){  notaFinal = "B" }
    if(frmNota >= 80 && frmNota < 90){  notaFinal = "C" }
    if(frmNota >= 70 && frmNota < 80){  notaFinal = "D" }
    if(frmNota >= 60 && frmNota < 70){  notaFinal = "E" }
    if(frmNota < 60){  notaFinal = "F" }

    if(comecou == 0){
        texto += `<table width="150" border="1"><tr><td><strong>Aluno<strong></td> <td><strong>Notas<strong></td></tr><tr><td>${frmNome}</td><td>${notaFinal}</td></tr>`
        comecou = 1
    }
    else{
        texto += `<tr><td>${frmNome}</td><td>${notaFinal}</td></tr>`
    }
    divMostrar = document.getElementById('mostrarConteudo')
    divMostrar.innerHTML = `<br>${texto}`
})