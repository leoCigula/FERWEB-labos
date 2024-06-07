console.log(data);

var kategorije = document.querySelector('#kategorije>ul');
var kats=kategorije.querySelectorAll('p')
var kategorija = document.querySelector('p.chosenCat');
var cart = document.querySelector(".cart")


kats.forEach(element => {
    console.log(element.textContent);
    element.addEventListener('click',function(){
        postaviKategoriju(element.id);
    });
    /*
    element.onclick = function() {
        postaviKategoriju(element);
    };
    */
});

/*
cart.addEventListener('mouseover',function funkcija(){
    if()
    let cnt = document.querySelector(".numOfItems");
    cnt.style.display = "block";
});
cart.addEventListener('mouseleave',function funkcija(){
    let cnt = document.querySelector(".numOfItems");
    cnt.style.display = "none";
});

*/


function postaviKategoriju(el){
    var elem = document.getElementById(el);
    var index = elem.getAttribute("data");
    var text = elem.textContent;
    let proizv = document.querySelector('.proizvodi');
    console.log(text);

    kategorija.textContent = text;
    kategorija.style.color = "red";
    kategorija.style.fontSize = "larger";

    proizv.innerHTML= '';
    console.log(index); 
    addItem(index);


    //alert(el.getAtrribute("data"));
    //kategorija.textContent = data[el.getAtrribute("data")]
}

function addItem(kategorija){
    let proiz = document.querySelector(".proizvodi");
    let div = document.createElement("div");
    let info = data["categories"][kategorija]["products"];
    info.forEach(element => {
        let name;
        let image;
        name = element["name"];
        image = element["image"]
        console.log(name);
        console.log(image);
        div = null;
        div = document.createElement("div");
        div.classList="proizvod";
        div.setAttribute("data",name);
        div.innerHTML = 
        `<img src = ${image}>\n `+
        `<p> ${name}</p>\n `+
         `  <div class="numOfItem">  <p id="num">0</p> </div>  \n `;

         div.addEventListener('click', function() {
            // Get the current count from localStorage, defaulting to 0 if not found
            let count = parseInt(localStorage.getItem(name)) || 0;
            count++;
            // Update localStorage with the new count
            localStorage.setItem(name, count);
            // Update the displayed count
            this.querySelector("#num").textContent = count;
            updateCounter();
        });

        proiz.appendChild(div); 
    
    });
   
}

function updateCounter(){
    let cnt = document.querySelector(".numOfItems>p#num");
    let count = cnt.innerText;
    let newCnt=0;
    let variable ; 
    if(count == 0)
        document.querySelector(".numOfItems").style.display="none";
    else 
        document.querySelector(".numOfItems").style.display="block";
    for(let i=0;i<10;i++){
        for(let j=0;j<5;j++){
            variable = data["categories"][i]["products"][j]["name"];
            let medu = parseInt(localStorage.getItem(variable)) || 0;
            newCnt = newCnt + medu;
        }
    }
    if(newCnt > 0){
        document.querySelector(".numOfItems").style.display="block";
        cnt.innerText = newCnt;
    }
}
/*
function addItem(kategorija) {
    let proiz = document.querySelector(".proizvodi");
    let info = data["categories"][kategorija]["products"];

    info.forEach(element => {
        let name = element["name"];  // Declare with `let` to ensure block scope
        let image = element["image"];
        console.log(name);
        console.log(image);

        let div = document.createElement("div");
        div.classList = "proizvod";
        div.setAttribute("data", name);
        div.innerHTML = 
        `<img src="${image}">\n` +
        `<p>${name}</p>\n` +
        `<div class="numOfItem"><p id="num">0</p></div>\n`;

        // Use an IIFE to create a closure that captures the current `name` value
        (function(name) {
            div.addEventListener('click', function() {
                // Get the current count from localStorage, defaulting to 0 if not found
                let count = parseInt(localStorage.getItem(name)) || 0;
                count++;
                // Update localStorage with the new count
                localStorage.setItem(name, count);
                // Update the displayed count
                this.querySelector("#num").textContent = count;
            });
        })(name);

        proiz.appendChild(div);
    });
}

*/
