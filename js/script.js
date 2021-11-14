"use strict";
function sorteia(){
    //Math.random = gera número aleatório 0 a 1
    //Math.round = arredonda o número
    let aleatorio = Math.round(Math.random()*100)
    
    document.querySelector("#numero").innerHTML = aleatorio;
}
//setInterval = chama a função a cada tempo informado infinitas vezes
let intervalo = setInterval(sorteia, 500);

//clearInterval = função que para a chamada da função especificada do setInterval
function paraIntervalo(){
    clearInterval(intervalo);
}
//setTimeout = chama a função após o tempo transcorrido uma única vez
setTimeout(paraIntervalo, 3000);
