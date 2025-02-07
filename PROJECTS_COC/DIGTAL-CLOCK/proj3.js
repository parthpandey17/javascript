 const clock= document.getElementById('clock');
// or second way
//const clock=document.querySelector('#clock');

setInterval(function(){
    let date=new Date();
    clock.innerHTML =date.toLocaleTimeString();

}, 1000) ;// 1000ms yani 1sec so har sec me values ayegi