let numeroFinal = document.getElementById("numero-final");

function d4() {
    let randomNumber = Math.floor( Math.random() * 4 ) + 1
    numeroFinal.innerText = randomNumber;
}

function d6() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    numeroFinal.innerText = randomNumber;
}

function d8() {
    let randomNumber = Math.floor( Math.random() * 8 ) + 1
    numeroFinal.innerText = randomNumber;
}

function d10() {
    let randomNumber = Math.floor( Math.random() * 10 ) + 1
    numeroFinal.innerText = randomNumber;
}

function d12() {
    let randomNumber = Math.floor( Math.random() * 12 ) + 1
    numeroFinal.innerText = randomNumber;
}

function d20() {
    let randomNumber = Math.floor( Math.random() * 20 ) + 1
    numeroFinal.innerText = randomNumber;
}

function d100() {
    let randomNumber = Math.floor( Math.random() * 100 ) + 1
    numeroFinal.innerText = randomNumber;
}