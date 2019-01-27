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
let licznikKlik;
for (let i = 0; i <= liczbaSlow; i++) {
    for (let i = 0; i <= dlugoscSlowa - 1; i++) {
        let wybranaLiteraI = Math.floor(Math.random() * alfabet.length);
        let wybranaLitera = alfabet[wybranaLiteraI];
        slowo += wybranaLitera
        console.log(slowo)
    }

    let liSlowo = document.createElement("li");
    liSlowo.innerHTML = slowo;
    liSlowo.onclick = policzF;
    console.log(liSlowo);
    console.log(listaSlowa);
    listaSlowa.appendChild(liSlowo);
    licznikKlik = document.createElement("span");
    var spanGodzina = document.createElement("span");
    let liczenieKlikniec = 0;
    licznikKlik.innerHTML = " " + liczenieKlikniec;
    liSlowo.appendChild(licznikKlik);
    liSlowo.appendChild(spanGodzina);
    slowo = "";
}

function policzF() {
    var child = this.childNodes[1];
    var child2 = this.lastChild;
    var liczenieKlikniec = parseInt(child.textContent);
    var godzina = new Date();
    liczenieKlikniec += 1;
    child.innerHTML = " " + liczenieKlikniec;
    child2.innerHTML = " Godzina: " + godzina.getHours() + ' : ' + godzina.getMinutes() + ' : ' + godzina.getSeconds() + ' : ' + godzina.getMilliseconds();
}

//zadanie 4
const buttonGenerujTabela = document.querySelector("#generujTabele")
var tabZadanie4 = document.querySelector("#tableZad4")
buttonGenerujTabela.onclick = FgenerujTabela;

function FgenerujTabela() {
    var liczbaKolumn = document.querySelector("#liczbaKolumn").value;
    var liczbaWierszy = document.querySelector("#liczbaWierszy").value;
    let zmiennaTemp = 0

for (let i = 0; i <= liczbaWierszy - 1; i++) {
    let nowyWiersz = tabZadanie4.insertRow();
    for (let i= 0; i <= liczbaKolumn -1; i++) {
        let nowaKomorka = nowyWiersz.insertCell();
        let nowyTekst = document.createTextNode(Math.random());
        nowaKomorka.appendChild(nowyTekst);
        let nowyTekstWartosc = parseInt(nowyTekst);
    }
}
}