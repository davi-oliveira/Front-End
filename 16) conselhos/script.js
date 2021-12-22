document.getElementById('logo2').style.display = 'none'
document.getElementById('paraConselho').style.display = 'none'
document.getElementById('editTxt').style.display = 'none'
document.getElementById('Autor').style.display = 'none'
document.getElementById('apontando').style.display = 'none'

var msg = ''

btnCons.addEventListener('click', function(){
    document.getElementById('logo').style.display = 'none'
    document.getElementById('actImage').style.display = 'none'

    document.getElementById('logo2').style.display = 'block'
    document.getElementById('paraConselho').style.display = 'block'
    document.getElementById('editTxt').style.display = 'block'
    document.getElementById('Autor').style.display = 'block'
    document.getElementById('apontando').style.display = 'block'

    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(json => { 
      msg = json.slip.advice
      if(msg.length > 50) { reject() }
      document.getElementById('editTxt').innerHTML = `${json.slip.advice}`
    })
   .catch(err => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(json => { 
            msg = json.slip.advice
            if(msg.length > 50) { reject() }
            document.getElementById('editTxt').innerHTML = `${json.slip.advice}`
        })
        .catch(err => {
            fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(json => { 
                msg = json.slip.advice
                if(msg.length > 50) { reject() }
                document.getElementById('editTxt').innerHTML = `${json.slip.advice}`
            })
       })
   })
    
})