console.log(data);
let lista = document.querySelector("#proizvodi");

function runOnce(){
    let variable;
    for(let i=0;i<10;i++){
        for(let j=0;j<5;j++){
            variable = data["categories"][i]["products"][j]["name"];
            //console.log(variable)
            if( (parseInt(localStorage.getItem(variable)) || 0) > 0){
                addItem(variable);
                //console.log(variable);
            }
        }
    }
}
runOnce();
function addItem(variable){
    let div1=null;
    let cnt = parseInt(localStorage.getItem(variable));
    let div = document.createElement("div");
    div.id=`${variable}div`;
    div.classList="pro";
    div1 = document.createElement("div");
    div1.classList = "proizvodText";
    let div2=document.createElement("div");
    div2.classList = "proizvodButton";
    div2.setAttribute("data",variable);

    div1.innerHTML=`
    <p id="${variable}"> ${variable} </p>`;
    
    div2.innerHTML=`
    <button id="${variable}mns"> - </button> ` +
    `<p id ="${variable}cnt" > ${cnt} </p> ` +
    `<button id="${variable}pls"> + </button> `;
    console.log(div);

    div.appendChild(div1);
    div.appendChild(div2);

    lista.appendChild(div);

    document.getElementById(`${variable}mns`).onclick = function() {
        updateCount(variable, -1);
    };

    document.getElementById(`${variable}pls`).onclick = function() {
        updateCount(variable, 1);
    };
};

function updateCount(variable, delta) {
    let cnt = parseInt(localStorage.getItem(variable)) || 0;
    cnt += delta;
    if (cnt < 0) cnt = 0; // prevent negative count
    localStorage.setItem(variable, cnt);

    if (cnt === 0) {
        // Remove the div if count is zero
        let divToRemove = document.getElementById(`${variable}div`);
        if (divToRemove) {
            divToRemove.remove();
        }
    } else {
        // Update the count in the DOM
        document.getElementById(`${variable}cnt`).innerText = cnt;
    }
}



