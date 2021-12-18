btnCont.addEventListener('click', function(){
    if(document.getElementById('cmp-data').value == ""){
        return alert('Selecione uma data primeiro!')
    }
    
    let anoSelec = document.getElementById('cmp-data').value.substr(0, 4)
    let mesSelec = document.getElementById('cmp-data').value.substr(5, 2) 
    let diaSelec = document.getElementById('cmp-data').value.substr(8, 3)
    
    
    now = new Date
    // now.getDate() //dia do mês
    // now.getMounth() //mês
    // now.getFullYear() //ano
  
})