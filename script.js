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
const generuj = document.querySelector("#generujTablica");
const divLiczbaPar = document.querySelector("#liczbaPar");
generuj.onclick = Fgeneruj

function Fgeneruj() {
    var dTablica = document.querySelector("#dTablica").value;
    console.log(dTablica);
    let arr = []
    arr.push(3)
    let liczbaPar = 0
    for (let i = 1; i <= dTablica - 1; i++) {
        arr.push(arr[i - 1] + Math.floor(Math.random() * 7 - 3))
        if (arr[i - 1] == arr[i]){
            liczbaPar +=1
        }
    }
    var divTablica = document.querySelector("#tabelaZad2")
    divTablica.innerHTML = arr;
    console.log(liczbaPar);
    divLiczbaPar.innerHTML = divLiczbaPar.textContent + liczbaPar + ", ";
}
//Zadanie 3

var dlugoscSlowa 
const listaSlowa = document.querySelector("#slowaLista");
let alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y", "z"];
let slowo = "";

let liczbaSlow = Math.floor(Math.random() * 100);
let licznikKlik;
for (let i = 0; i <= liczbaSlow; i++) {
    dlugoscSlowa = Math.floor(Math.random() * (10 - 4 + 1) + 4);
    for (let i = 0; i <= dlugoscSlowa - 1; i++) {
        let wybranaLiteraI = Math.floor(Math.random() * alfabet.length);
        let wybranaLitera = alfabet[wybranaLiteraI];
        slowo += wybranaLitera
    }

    let liSlowo = document.createElement("li");
    liSlowo.innerHTML = slowo;
    liSlowo.onclick = policzF;
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
    var tempNajwieksza = 1
    var tempNajmniejsza = 100
    var rodzicBig
    var rodzicSmall
    for (let i = 0; i <= liczbaWierszy - 1; i++) {
        let nowyWiersz = tabZadanie4.insertRow();
        for (let i = 0; i <= liczbaKolumn - 1; i++) {
            let nowaKomorka = nowyWiersz.insertCell();
            let nowyTekstZawartosc = 1 + Math.floor(Math.random() * 100);
            let nowyTekst = document.createTextNode(nowyTekstZawartosc);
            nowaKomorka.appendChild(nowyTekst);
            if (nowyTekstZawartosc % 2 == 0) {
                nowaKomorka.style.fontWeight = "bold";
            }
            if (nowyTekstZawartosc >= tempNajwieksza) {
                tempNajwieksza = nowyTekstZawartosc;
                rodzicBig = nowaKomorka;
            }
            if (nowyTekstZawartosc <= tempNajmniejsza) {
                tempNajmniejsza = nowyTekstZawartosc;
                rodzicSmall = nowaKomorka
            }
        }
    }
    rodzicBig.style.color = "red";
    rodzicSmall.style.color = "lime";
}
//Zadanie 5

const BnowyKlient = document.querySelector("#nowyKlient");
const BobsluzKlienta = document.querySelector("#obsluzKlienta");
const listaOczekujacych = document.querySelector("#listaOczekujacych");
const listaOperacji = document.querySelector("#listaOperacji");
var licznkiKlientow = 0

BnowyKlient.onclick = FnowyKlient
BobsluzKlienta.onclick = FobsluzKlienta

function FnowyKlient() {
    let dlugoscKolejki = listaOczekujacych.getElementsByTagName("li").length;
    if (dlugoscKolejki < 10) {
        var numerKlienta = licznkiKlientow += 1
        let nowyKlientLI = document.createElement("li");
        let godzina = new Date;
        nowyKlientLI.innerHTML = "Numer klienta: " + numerKlienta + " | Godzina dodania do kolejki: " + godzina.getHours() + ":" + godzina.getMinutes() + ":" + godzina.getSeconds();
        listaOczekujacych.appendChild(nowyKlientLI)
        let nowaOperacjaDodania = document.createElement("li");
        nowaOperacjaDodania.innerHTML = "Dodanie klienta nr: " + numerKlienta + " | Godzina dodania do kolejki: " + godzina.getHours() + ":" + godzina.getMinutes() + ":" + godzina.getSeconds();
        let ostatniaOperacja = listaOperacji.firstChild;
        listaOperacji.insertBefore(nowaOperacjaDodania, ostatniaOperacja);
    }
    else {
        let numerKlientaOczekuj = licznkiKlientow + 1
        confirm("Dla klienta nr: " + numerKlientaOczekuj + " nie ma miejsca w kolejce.")
    }
}
function FobsluzKlienta() {
    let dlugoscKolejki = listaOczekujacych.getElementsByTagName("li").length;
    if (dlugoscKolejki >= 1) {
        let pierwszyZKolejki = listaOczekujacych.firstChild;
        let nowyNode = pierwszyZKolejki.cloneNode(true);
        let godzina = new Date;
        nowyNode.innerHTML = "Obsługa: " + nowyNode.textContent + " | Godzina rozpoczęcia obsługi: " + godzina.getHours() + ":" + godzina.getMinutes() + ":" + godzina.getSeconds();
        let ostatniaOperacja = listaOperacji.firstChild;
        listaOperacji.insertBefore(nowyNode, ostatniaOperacja);
        listaOczekujacych.removeChild(pierwszyZKolejki);
    }
    else {
        confirm("Nikt nie oczekuje na obsługę! - Idż na kawę.")
    }
}