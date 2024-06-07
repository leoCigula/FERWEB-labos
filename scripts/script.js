console.log(data);

var kategorije = document.querySelector('#kategorije>ul');
var kats=kategorije.querySelectorAll('p')
var kategorija = document.querySelector('p.chosenCat');


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



function postaviKategoriju(el){
    var elem = document.getElementById(el);
    var index = elem.getAttribute("data");
    var text = elem.textContent;
    let proizv = document.querySelector('.proizvodi');
    console.log(text);

    kategorija.textContent = text;
    kategorija.style.color = "red";
    kategorija.style.fontSize = "larger";

    proizv.innerHTML = ' ';
    console.log(index); 
    addItem(index);


    //alert(el.getAtrribute("data"));
    //kategorija.textContent = data[el.getAtrribute("data")]
}

function addItem(kategorija){
    let proiz = document.querySelector(".proizvodi");
    let div = document.createElement("div");
    let info = data["categories"][kategorija]["products"];
    let name;
    let image;
    info.forEach(element => {
        name = element["name"];
        image = element["image"]
        console.log(name);
        console.log(image);
        div = document.createElement("div");
        div.classList="proizvod";
        div.data=1;
        div.innerHTML = 
        `<img src = ${image}>\n `+
        `<p> ${name}</p>\n `+
         `  <div class="numOfItem">  <p id="num">0</p> </div>  \n `;
        div.onclick = function call(){
            alert("stavljeno u cart")
        }
        proiz.appendChild(div); 
    
    });
   
}

