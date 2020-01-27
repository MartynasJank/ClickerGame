function Verslas(name, earn){
    this.name = name;
    this.earn = earn
}

var button = document.getElementById("button");
var type1 = document.getElementById("type1");
var type2 = document.getElementById("type2");
var type3 = document.getElementById("type3");
var cheat = document.getElementById("cheat");
var cheatBtn = document.getElementById("cheatbtn");
var stats = document.getElementById("stats");
var errors = document.getElementById("errors");
var reset = document.getElementById("reset");

var cash = 0;

var kioskas = [];
var parduotuve = [];
var bankas = [];

button.innerHTML = "$" + cash;

cheatBtn.onclick = function(){
    if(!isNaN(cheat.value)){
        cash += parseInt(cheat.value);
        button.innerHTML = "$" + cash;
    } else{
        console.log("Cheat value is incorrect");
    }
    cheat.value = "";
}

button.onclick = function(){
    cash++;
    printCash();
}

type1.onclick = function(){
    if(cash >= 500){
        kioskas.push(new Verslas("kioskas", 1));
        cash -= 500;
        printData();
        setInterval(function(){
            if(kioskas.length != 0){
                cash += kioskas[0].earn;
            }
            printCash();
        },1000);
    } else {
        errors.innerHTML = "Neuzteka pinigu";
        setTimeout(function(){
            errors.innerHTML = "Nera klaidu.";
        }, 5000);
    }
}

type2.onclick = function(){
    if(cash >= 1000){
        parduotuve.push(new Verslas("parduotuve", 5));
        cash -= 1000;
        printData();
        setInterval(function(){
            if(parduotuve.length != 0){
                cash += parduotuve[0].earn;
            }
            printCash();
        },500);
    } else {
        errors.innerHTML = "Neuzteka pinigu";
        setTimeout(function(){
            errors.innerHTML = "Nera klaidu.";
        }, 2000);
    }
}

type3.onclick = function(){
    if(cash >= 1500){
        bankas.push(new Verslas("bankas", 10));
        cash -= 1500;
        printData();
        setInterval(function(){
            if(bankas.length != 0){
                cash += bankas[0].earn;
            }
            printCash();
        },100);
    } else {
        errors.innerHTML = "Neuzteka pinigu";
        setTimeout(function(){
            errors.innerHTML = "Nera klaidu.";
        }, 2000);
    }
}

reset.onclick = function(){
    cash = 0;
    kioskas = [];
    parduotuve = [];
    bankas = [];
    printCash();
    printData();
}

function printCash(){
    button.innerHTML = "$" + cash;
}

function printData(){
    stats.innerHTML = "<div>Kioskiu skaicius: " + kioskas.length + "</div><div>Parduotuviu skaicius: " + parduotuve.length + "</div><div>Banku  skaicius: " + bankas.length + "<div>";
}