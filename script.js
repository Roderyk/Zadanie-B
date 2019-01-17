//Zadanie 1
const wlacznik1 = document.querySelector("#wlacznik1");
const wlacznik2 = document.querySelector("#wlacznik2");
const wlacznik3 = document.querySelector("#wlacznik3");

var zliczanie = 0
wlacznik1.onclick = Fwlacznik1
wlacznik2.onclick = Fwlacznik2
wlacznik3.onclick = Fwlacznik3

function Fwlacznik1() {

    if (wlacznik1.dataset.on == "false") {
        wlacznik1.style.backgroundColor = "red";
        wlacznik1.dataset.on = "true";
        const licznik = document.querySelector("#licznik");
        zliczanie += 1
        licznik.value = zliczanie
    }
    else {
        wlacznik1.style.backgroundColor = "blue";
        wlacznik1.dataset.on = "false";
        const licznik = document.querySelector("#licznik");
        zliczanie -= 1
        licznik.value = zliczanie
    }
}
function Fwlacznik2() {

    if (wlacznik2.dataset.on == "false") {
        wlacznik2.style.backgroundColor = "red";
        wlacznik2.dataset.on = "true";
        const licznik = document.querySelector("#licznik");
        zliczanie += 1
        licznik.value = zliczanie
    }
    else {
        wlacznik2.style.backgroundColor = "blue";
        wlacznik2.dataset.on = "false";
        const licznik = document.querySelector("#licznik");
        zliczanie -= 1
        licznik.value = zliczanie
    }
}
function Fwlacznik3() {

    if (wlacznik3.dataset.on == "false") {
        wlacznik3.style.backgroundColor = "red";
        wlacznik3.dataset.on = "true";
        const licznik = document.querySelector("#licznik");
        zliczanie += 1
        licznik.value = zliczanie
    }
    else {
        wlacznik3.style.backgroundColor = "blue";
        wlacznik3.dataset.on = "false";
        const licznik = document.querySelector("#licznik");
        zliczanie -= 1
        licznik.value = zliczanie
    }
}
//Zadanie 2
const generuj = document.querySelector("#generujTablica")

generuj.onclick = Fgeneruj

function Fgeneruj() {
    var dTablica = document.querySelector("#dTablica").value;
    console.log(dTablica);
    let arr = []
    arr.push(3)
    for (let i = 1; i <= dTablica - 1; i++) {
        arr.push(arr[i - 1] + Math.floor(Math.random() * 7 - 3))
    }
    var divTablica = document.querySelector("#tabelaZad2")
    divTablica.innerHTML = arr;
}
//Zadanie 3

var dlugoscSlowa = Math.floor(Math.random() * (10 - 4 + 1) + 4);
console.log(dlugoscSlowa);

const listaSlowa = document.querySelector("#slowaLista");
let alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y", "z"];
let slowo = "";

let liczbaSlow = Math.floor(Math.random() * 100);
for (let i = 0; i <= liczbaSlow; i++) {
    for (let i = 0; i <= dlugoscSlowa - 1; i++) {
        let wybranaLiteraI = Math.floor(Math.random() * alfabet.length);
        let wybranaLitera = alfabet[wybranaLiteraI];
        slowo += wybranaLitera
        console.log(slowo)
    }

    let liSlowo = document.createElement("li");
    liSlowo.innerHTML = slowo
    console.log(liSlowo);
    console.log(listaSlowa);
    listaSlowa.appendChild(liSlowo);
    slowo = "";
}
