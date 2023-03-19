let numeroFinal = document.getElementById("numero-final");
let bordaFundo = document.querySelector('.borda');

function d4() {
    let randomNumber = Math.floor( Math.random() * 4 ) + 1
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#A1EFDB";
}

function d6() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#EFA1B6";
}

function d8() {
    let randomNumber = Math.floor( Math.random() * 8 ) + 1
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#B9A1EF";
}

function d10() {
    let randomNumber = Math.floor( Math.random() * 10 ) + 1
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#D8EFA1";
}

function d12() {
    let randomNumber = Math.floor( Math.random() * 12 ) + 1
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#FFF63A";
}

function d20() {
    let randomNumber = Math.floor( Math.random() * 20 ) + 1
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#FFA33A";
}

function d100() {
    let randomNumber = Math.floor( Math.random() * 100 ) + 1
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#FF3A3A";
}