// var eventTime= toTimestamp(dataCampo());
var eventTime = toTimestamp('12/20/2021 14:00:00')
var currentTime = toTimestamp(dataAtual()); 

// TIMESTAMP PARA DATA
var date = new Date(eventTime*1000);
console.log(date)

var date2 = new Date(currentTime*1000);
console.log(date2)
//==============================================

var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime*1000, 'milliseconds');
var interval = 1000;

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
  console.log(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())

  document.getElementById('dias').innerHTML = diasFaltam()
  document.getElementById('horas').innerHTML = duration.hours()
  document.getElementById('minutos').innerHTML = duration.minutes()
  document.getElementById('segundos').innerHTML = duration.seconds()


}, interval);

function dataAgora(){
    // DATA PARA TIMESTAMP
    var myDate = "2021-12-19";
    myDate = myDate.split("-");
    var newDate = new Date( myDate[0], myDate[1] - 1, myDate[2]);
    return newDate.getTime()/1000
    //===============================================
}

function dataCampo(){
    // DATA PARA TIMESTAMP
    var myDate = document.getElementById('cmp-data').value;
    myDate = myDate.split("-");
    var newDate = new Date( myDate[0], myDate[1] - 1, myDate[2]);
    return newDate.getTime()/1000
    //===============================================
}

function toTimestamp(date){
    //let strDate = '12/19/2021 12:00:00'
    //let strDate = dataCampo()
    var datum = Date.parse(date);
    return datum/1000
 }

 function dataCampo(){
    let anoSelec = document.getElementById('cmp-data').value.substr(0, 4)
    let mesSelec = document.getElementById('cmp-data').value.substr(5, 2) 
    let diaSelec = document.getElementById('cmp-data').value.substr(8, 3)

    now = new Date
    return `${mesSelec}/${diaSelec}/${anoSelec} 00:00:00`
 }

 function dataAtual(){
    let agora = new Date
    return `${agora.getMonth()+1}/${agora.getDate()}/${agora.getFullYear()} ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`
 }

 function diasFaltam(){
    let date01 = document.getElementById('cmp-data').value.replace(/-/g, "/");

    var date1 = new Date(dataAtual().substr(0,10));
    var date2 = new Date(date01);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays
 }