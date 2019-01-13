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
    let arr =[]
    arr.push(3)
    for (let i = 1; i <= dTablica - 1; i++){
        arr.push(arr[i-1] + Math.floor(Math.random() * 7-3))
    }
    console.log(arr)
    



    //var divTablica = document.querySelector("#tabelaZad2")
}