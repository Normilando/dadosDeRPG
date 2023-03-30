let numeroFinal = document.querySelector("#numero-final");
let bordaFundo = document.querySelector('.borda');
const quatro = document.querySelector('#d4');
const seis = document.querySelector('#d6');
const oito = document.querySelector('#d8');
const dez = document.querySelector('#d10');
const doze = document.querySelector('#d12');
const vinte = document.querySelector('#d20');
const cem = document.querySelector('#d100');

quatro.addEventListener("click", () => {
    let randomNumber = Math.floor( Math.random() * 4 ) + 1;
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#A1EFDB";
})

seis.addEventListener("click", () => {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1;
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#EFA1B6";
})

oito.addEventListener("click", () => {
    let randomNumber = Math.floor( Math.random() * 8 ) + 1;
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#B9A1EF";
})

dez.addEventListener("click", () => {
    let randomNumber = Math.floor( Math.random() * 10 ) + 1;
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#D8EFA1";
})

doze.addEventListener("click", () => {
    let randomNumber = Math.floor( Math.random() * 12 ) + 1;
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#FFF63A";
})

vinte.addEventListener("click", () => {
    let randomNumber = Math.floor( Math.random() * 20 ) + 1;
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#FFA33A";
})

cem.addEventListener("click", () => {
    let randomNumber = Math.floor( Math.random() * 100 ) + 1;
    numeroFinal.innerText = randomNumber;
    bordaFundo.style.backgroundColor = "#FF3A3A";
})