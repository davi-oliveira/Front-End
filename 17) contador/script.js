document.getElementById('btnReset').style.display = 'none'

function dataCampo(){
    let anoSelec = document.getElementById('cmpData').value.substr(0, 4)
    let mesSelec = document.getElementById('cmpData').value.substr(5, 2) 
    let diaSelec = document.getElementById('cmpData').value.substr(8, 3)

    now = new Date
    return `${mesSelec} ${diaSelec}, ${anoSelec} 00:00:00`
 }

 btnCalc.addEventListener('click', function(){
   if(document.getElementById('cmpData').value == ""){
     return alert('Você precisa selecionar uma data!')
   }
  var countDownDate = new Date(dataCampo()).getTime(); // var countDownDate = new Date("Jan 5, 2022 00:00:00").getTime();
  if(countDownDate < new Date()) {
    return alert('Você digitou uma data anterior a atual!')
  }
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  document.getElementById('btnCalc').style.display = 'none'
  document.getElementById('btnReset').style.display = 'block'
  document.getElementById('cmpData').disabled = true
})

btnReset.addEventListener('click', function(){
  document.location.reload(true);
})