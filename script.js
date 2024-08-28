/* ========= LOADING THE PAGES ========= */


function showPage(page) {
    document.querySelectorAll(".pages").forEach(div => {
        div.style.display = "none";
    })
    document.querySelector(`#${page}`).style.display = "block";
}

document.querySelectorAll(".page_buttons").forEach(button => {
    button.onclick = function() {
        showPage(this.dataset.page);
    }
});

window.onload = function() {
    document.querySelector("#page1").style.display = "block";
};

// window.onload = function() {
//     document.querySelector("#page6").style.display = "block";
// };

/* ========= ALL FUNCTIONS ========= */


function updateFCena() {
    fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
};

function totalAmount() {
    document.querySelector("#kopa").innerHTML = "Kopā: " + money.toFixed(2) + "€";
};

function askToShowCC30() {
    if (totalCC30 > 0) {
        buyCC.style.display = "none";
        skaitCC30.style.display = "block";
        skaitCC20.style.display = "none";
    }
    else {
        buyCC.style.display = "block";
        skaitCC30.style.display = "none";
        skaitCC20.style.display = "none";
    }
};

function askToShowCC20() {
    if (totalCC20 > 0) {
        buyCC.style.display = "none";
        skaitCC30.style.display = "none";
        skaitCC20.style.display = "block";
    }
    else {
        buyCC.style.display = "block";
        skaitCC30.style.display = "none";
        skaitCC20.style.display = "none";
    }
};



function askToShowMyDiv() {
    if (money > 0) {
        myDiv.style.display = "block";
    }
    else {
        myDiv.style.display = "none";
    }
};





function updateCounterCC30() {
    counterCC30.innerHTML = totalCC30;
};

function updateCounterCC20() {
    counterCC20.innerHTML = totalCC20;
};



function pirktCC() {
    if (CCC.innerHTML === "€ 9.10") {
        totalCC30 = totalCC30 + 1;
        console.log("Tavs pasūtijums: ");
        console.log("CC30 skaits: " + totalCC30);
        console.log("CC20 skaits: " + totalCC20);
        money = Math.round((money + 9.10) * 100) / 100;
        console.log("kopā: " + money.toFixed(2) + "€");
        
        updateFCena();
        totalAmount();
        askToShowCC30();
        updateCounterCC30();
        updateCounterCC30Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
    else {
        totalCC20 = totalCC20 + 1;
        console.log("Tavs pasūtijums: ");
        console.log("CC30 skaits: " + totalCC30);
        console.log("CC20 skaits: " + totalCC20);
        money = Math.round((money + 6.30) * 100) / 100;
        console.log("kopā: " + money.toFixed(2) + "€");

        updateFCena();
        totalAmount();
        askToShowCC20();
        updateCounterCC20();
        updateCounterCC20Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
};


function nonemtCC() {
    if (CCC.innerHTML === "€ 9.10") {
        totalCC30 = totalCC30 - 1;
        console.log("Tavs pasūtijums: ");
        console.log("CC30 skaits: " + totalCC30);
        console.log("CC20 skaits: " + totalCC20);
        money = Math.round((money - 9.10) * 100) / 100;
        console.log("kopā: " + money.toFixed(2) + "€");
        
        updateFCena();
        totalAmount();
        askToShowCC30();
        updateCounterCC30();
        updateCounterCC30Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
    else {
        totalCC20 = totalCC20 - 1;
        console.log("Tavs pasūtijums: ");
        console.log("CC30 skaits: " + totalCC30);
        console.log("CC20 skaits: " + totalCC20);
        money = Math.round((money - 6.30) * 100) / 100;
        console.log("kopā: " + money.toFixed(2) + "€");

        updateFCena();
        totalAmount();
        askToShowCC20();
        updateCounterCC20();
        updateCounterCC20Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
};

function updateCounterCC30Grozs() {
    counterCC30Grozs.innerHTML = totalCC30;
};

function updateCounterCC20Grozs() {
    counterCC20Grozs.innerHTML = totalCC20;
};



function pirktCCGrozs30() {
    totalCC30 = totalCC30 + 1;
    console.log("Tavs pasūtijums: ");
    console.log("CC30 skaits: " + totalCC30);
    console.log("CC20 skaits: " + totalCC20);
    money = Math.round((money + 9.10) * 100) / 100;
    console.log("kopā: " + money.toFixed(2) + "€");
    
    updateFCena();
    totalAmount();
    askToShowCC30();
    updateCounterCC30();
    updateCounterCC30Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function nonemtCCGrozs30() {
    totalCC30 = totalCC30 - 1;
    console.log("Tavs pasūtijums: ");
    console.log("CC30 skaits: " + totalCC30);
    console.log("CC20 skaits: " + totalCC20);
    money = Math.round((money - 9.10) * 100) / 100;
    console.log("kopā: " + money.toFixed(2) + "€");
    
    updateFCena();
    totalAmount();
    askToShowCC30();
    updateCounterCC30();
    updateCounterCC30Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function pirktCCGrozs20() {
    totalCC20 = totalCC20 + 1;
    console.log("Tavs pasūtijums: ");
    console.log("CC30 skaits: " + totalCC30);
    console.log("CC20 skaits: " + totalCC20);
    money = Math.round((money + 6.30) * 100) / 100;
    console.log("kopā: " + money.toFixed(2) + "€");

    updateFCena();
    totalAmount();
    askToShowCC20();
    updateCounterCC20();
    updateCounterCC20Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function nonemtCCGrozs20() {
    totalCC20 = totalCC20 - 1;
    console.log("Tavs pasūtijums: ");
    console.log("CC30 skaits: " + totalCC30);
    console.log("CC20 skaits: " + totalCC20);
    money = Math.round((money - 6.30) * 100) / 100;
    console.log("kopā: " + money.toFixed(2) + "€");

    updateFCena();
    totalAmount();
    askToShowCC20();
    updateCounterCC20();
    updateCounterCC20Grozs();
    askToShowMyDiv();
    updateGrozs();
};



function askToShowGrozsCC30() {
    if (totalCC30 > 0) {
        itemCC30.style.display = "block";
    }
    else {
        itemCC30.style.display = "none";
    }
};

function askToShowGrozsCC20() {
    if (totalCC20 > 0) {
        itemCC20.style.display = "block";
    }
    else {
        itemCC20.style.display = "none";
    }
};


function updateGrozs() {
    askToShowGrozsCC30();
    askToShowGrozsCC20();
};

/* ========= GLOBAL VARIABLES ========= */

let money = 0;    // total order sum

let totalCC30 = 0;    // how many chicken curry 30cm pizzas
let totalCC20 = 0;    // how many chicken curry 20cm pizzas

const CC30 = document.querySelector("#CC30");    //30cm button CC
const CC20 = document.querySelector("#CC20");    //20cm button CC
const CCC = document.querySelector("#cenaCC");    //CC cena h1 blakus pievienot pogai
const buyCC = document.querySelector("#buyCC");    //pievienot button

const fCena = document.querySelector("#fCena");    //cena displayed on hidden div


const skaitCC30 = document.querySelector("#skaitCC30");    //div
const skaitCC20 = document.querySelector("#skaitCC20");    //div

const plusCC30 = document.querySelector("#plusCC30");    //hidden plus button 30cm
const minusCC30 = document.querySelector("#minusCC30");    //hidden minus button 30cm

const plusCC20 = document.querySelector("#plusCC20");    //hidden plus button 20cm
const minusCC20 = document.querySelector("#minusCC20");    //hidden minus button 20cm

const counterCC30 = document.querySelector("#counterCC30");    //hidden h1 counter 30cm
const counterCC20 = document.querySelector("#counterCC20");    //hidden h1 counter 20cm

const plusCC30Grozs = document.querySelector("#plusCC30Grozs");
const minusCC30Grozs = document.querySelector("#minusCC30Grozs");
const plusCC20Grozs = document.querySelector("#plusCC20Grozs");
const minusCC20Grozs = document.querySelector("#minusCC20Grozs");

const counterCC30Grozs = document.querySelector("#counterCC30Grozs");
const counterCC20Grozs = document.querySelector("#counterCC20Grozs");

const CC30GrozsCena = document.querySelector("#CC30GrozsCena");
const CC20GrozsCena = document.querySelector("#CC20GrozsCena");



/* ========= PICAS BUTTONS ========= */



CC30.onclick = function() {
    CC30.style.background = "#f58220";
    CC30.style.color = "#ffffff";
    CC20.style.background = "#eef2f8";
    CC20.style.color = "#000000";
    CCC.innerHTML = "€ 9.10";
    askToShowCC30();
};


CC20.onclick = function() {
    CC20.style.background = "#f58220";
    CC20.style.color = "#ffffff";
    CC30.style.background = "#eef2f8";
    CC30.style.color = "#000000";
    CCC.innerHTML = "€ 6.30";
    askToShowCC20();
};


buyCC.onclick = function() {
    pirktCC();
};


plusCC30.onclick = function() {
    pirktCC();
};
minusCC30.onclick = function() {
    nonemtCC();
};



plusCC20.onclick = function() {
    pirktCC();
};
minusCC20.onclick = function() {
    nonemtCC();
};



/* ========= GROZA BUTTONS ========= */



plusCC30Grozs.onclick = function() {
    pirktCCGrozs30();
};
minusCC30Grozs.onclick = function() {
    nonemtCCGrozs30();
};


plusCC20Grozs.onclick = function() {
    pirktCCGrozs20();
};
minusCC20Grozs.onclick = function() {
    nonemtCCGrozs20();
};