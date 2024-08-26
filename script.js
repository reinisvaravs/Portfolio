

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
        }
    


// Top 3 rinda

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



    const gru20 = document.querySelector("#gruzinu_20cm");
    const gru30 = document.querySelector("#gruzinu_30cm");
    const gruC = document.querySelector("#cena_gruzinu")
    
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



    const nY20 = document.querySelector("#new_york_20cm");
    const nY30 = document.querySelector("#new_york_30cm");
    const NYC = document.querySelector("#cena_new_york")
    
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



// Rinda 1

    const mar20 = document.querySelector("#margarita_20cm");
    const mar30 = document.querySelector("#margarita_30cm");
    const marC = document.querySelector("#cena_margarita")
    
    mar20.onclick = function() {
        mar20.style.background = "#f58220";
        mar20.style.color = "#ffffff";
        mar30.style.background = "#eef2f8";
        mar30.style.color = "#000000";
        marC.innerHTML = "€ 5.00";
    };

    mar30.onclick = function() {
        mar30.style.background = "#f58220";
        mar30.style.color = "#ffffff";
        mar20.style.background = "#eef2f8";
        mar20.style.color = "#000000";
        marC.innerHTML = "€ 6.90";
    };



    const sal20 = document.querySelector("#salami_20cm");
    const sal30 = document.querySelector("#salami_30cm");
    const salC = document.querySelector("#cena_salami")
    
    sal20.onclick = function() {
        sal20.style.background = "#f58220";
        sal20.style.color = "#ffffff";
        sal30.style.background = "#eef2f8";
        sal30.style.color = "#000000";
        salC.innerHTML = "€ 5.20";
    };

    sal30.onclick = function() {
        sal30.style.background = "#f58220";
        sal30.style.color = "#ffffff";
        sal20.style.background = "#eef2f8";
        sal20.style.color = "#000000";
        salC.innerHTML = "€ 7.40";
    };



    const fun20 = document.querySelector("#funghi_20cm");
    const fun30 = document.querySelector("#funghi_30cm");
    const funC = document.querySelector("#cena_funghi")
    
    fun20.onclick = function() {
        fun20.style.background = "#f58220";
        fun20.style.color = "#ffffff";
        fun30.style.background = "#eef2f8";
        fun30.style.color = "#000000";
        funC.innerHTML = "€ 5.20";
    };

    fun30.onclick = function() {
        fun30.style.background = "#f58220";
        fun30.style.color = "#ffffff";
        fun20.style.background = "#eef2f8";
        fun20.style.color = "#000000";
        funC.innerHTML = "€ 7.40";
    };
    
    
