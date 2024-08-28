/* ========= LOADING PAGES ========= */


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


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    buyCC.style.display = "none";
    
});


let money = 0;
let count_1 = 0;
let count_2 = 0;


function totalAmount() {
    document.querySelector("#kopa").innerHTML = "Kopā: " + money.toFixed(2) + "€";
};

function showHiddenCart() {
    myDiv.style.display = "block";
}



/* ========= BUTTONS ========= */



const CC20 = document.querySelector("#chicken_curry_20cm_top3");
const CC30 = document.querySelector("#chicken_curry_30cm_top3");
const CCC = document.querySelector("#cena_chicken_curry_top3")

CC20.onclick = function() {
    CC20.style.background = "#f58220";
    CC20.style.color = "#ffffff";
    CC30.style.background = "#eef2f8";
    CC30.style.color = "#000000";
    CCC.innerHTML = "€ 6.30";
};

CC30.onclick = function() {
    CC30.style.background = "#f58220";
    CC30.style.color = "#ffffff";
    CC20.style.background = "#eef2f8";
    CC20.style.color = "#000000";
    CCC.innerHTML = "€ 9.10";
};



const gru20 = document.querySelector("#gruzinu_20cm_top3");
const gru30 = document.querySelector("#gruzinu_30cm_top3");
const gruC = document.querySelector("#cena_gruzinu_top3")

gru20.onclick = function() {
    gru20.style.background = "#f58220";
    gru20.style.color = "#ffffff";
    gru30.style.background = "#eef2f8";
    gru30.style.color = "#000000";
    gruC.innerHTML = "€ 6.30";
};

gru30.onclick = function() {
    gru30.style.background = "#f58220";
    gru30.style.color = "#ffffff";
    gru20.style.background = "#eef2f8";
    gru20.style.color = "#000000";
    gruC.innerHTML = "€ 9.10";
};



const nY20 = document.querySelector("#new_york_20cm_top3");
const nY30 = document.querySelector("#new_york_30cm_top3");
const NYC = document.querySelector("#cena_new_york_top3")

nY20.onclick = function() {
    nY20.style.background = "#f58220";
    nY20.style.color = "#ffffff";
    nY30.style.background = "#eef2f8";
    nY30.style.color = "#000000";
    NYC.innerHTML = "€ 7.30";
};

nY30.onclick = function() {
    nY30.style.background = "#f58220";
    nY30.style.color = "#ffffff";
    nY20.style.background = "#eef2f8";
    nY20.style.color = "#000000";
    NYC.innerHTML = "€ 10.40";
};



/* ========= PURCHASING ========= */


const myDiv = document.querySelector("#myDiv");
const fCena = document.querySelector("#final_cena");

const buyCC = document.querySelector("#cart_chicken_curry");
const buyG = document.querySelector("#cart_gruzinu");
const buyNY = document.querySelector("#cart_new_york");

const skaitCC = document.querySelector("#skaitCC");


function pirktCC() {
    if (CCC.innerHTML === "€ 9.10") {
        money = Math.round((money + 9.10) * 100) / 100;
        fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
    } 
    else {
        money = Math.round((money + 6.30) * 100) / 100;
        fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
    }
    showHiddenCart()
    totalAmount();
}

function nonemtCC() {
    if (CCC.innerHTML === "€ 9.10") {
        money = Math.round((money - 9.10) * 100) / 100;
        fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
    } 
    else {
        money = Math.round((money - 6.30) * 100) / 100;
        fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
    }
    showHiddenCart()
    totalAmount();
}

buyCC.onclick = function() {
    pirktCC();
}

// function pirktG() {
//     if (gruC.innerHTML === "€ 9.10") {
//         money = Math.round((money + 9.10) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     } 
//     else {
//         money = Math.round((money + 6.30) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     }
//     showHiddenCart()
//     totalAmount();
// }

// function nonemtG() {
//     if (gruC.innerHTML === "€ 9.10") {
//         money = Math.round((money - 9.10) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     } 
//     else {
//         money = Math.round((money - 6.30) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     }
//     showHiddenCart()
//     totalAmount();
// }

// buyG.onclick = function () {
//     pirktG();
// }

// function pirktNY() {
//     if (NYC.innerHTML === "€ 10.40") {
//         money = Math.round((money + 10.40) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     } 
//     else {
//         money = Math.round((money + 7.30) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     }
//     showHiddenCart()
//     totalAmount();
// }

// function pirktNY() {
//     if (NYC.innerHTML === "€ 10.40") {
//         money = Math.round((money - 10.40) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     } 
//     else {
//         money = Math.round((money - 7.30) * 100) / 100;
//         fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
//     }
//     showHiddenCart()
//     totalAmount();
// }

// buyNY.onclick = function pirktNY() {
//     pirktNY();
// }


const itemCena1 = document.querySelector("#item_cena_1");
const itemCena2 = document.querySelector("#item_cena_2");


function pirktCC30() {
    money = Math.round((money + 9.10) * 100) / 100;
    fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
    
    showHiddenCart()
    totalAmount();
}

function nonemtCC30() {
    money = Math.round((money - 9.10) * 100) / 100;
    fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";

    totalAmount();
}



function pirktCC20() {
    money = Math.round((money + 6.30) * 100) / 100;
    fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
    
    showHiddenCart()
    totalAmount();
}

function nonemtCC20() {
    money = Math.round((money - 6.30) * 100) / 100;
    fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
    
    totalAmount();
}



const counter_1 = document.querySelector("#counter_1");
const counter_2 = document.querySelector("#counter_2");


const minus_1 = document.querySelector("#minus_1");
const plus_1 = document.querySelector("#plus_1");
const minus_2 = document.querySelector("#minus_2");
const plus_2 = document.querySelector("#plus_2");


plus_1.onclick = function() {
    count_1 = count_1 + 1;
    counter_1.innerHTML = count_1;
    pirktCC30();
}

minus_1.onclick = function() {
    count_1 = count_1 - 1;
    counter_1.innerHTML = count_1;
    nonemtCC30();
}

plus_2.onclick = function() {
    count_2 = count_2 + 1;
    counter_2.innerHTML = count_2;
    pirktCC20();
}

minus_2.onclick = function() {
    count_2 = count_2 - 1;
    counter_2.innerHTML = count_2;
    nonemtCC20();
}



