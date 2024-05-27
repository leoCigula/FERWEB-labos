
var dataVariable=undefined;



document.getElementById("vinili").onclick = function(){
    MyFunction("vinili");
    
};
document.getElementById("lego").onclick = function(){
    MyFunction("lego");
};
document.getElementById("slusalice").onclick=function(){
    MyFunction("slusalice");
}
document.getElementById("plushie").onclick=function(){
    MyFunction("plushie");
}
document.getElementById("laptopi").onclick=function(){
    MyFunction("laptopi");
}
document.getElementById("knjige").onclick=function(){
    MyFunction("knjige");
}
document.getElementById("kontroleri").onclick=function(){
    MyFunction("kontroleri");
}
document.getElementById("biljeznica").onclick=function(){
    MyFunction("biljeznica");
}
document.getElementById("igre").onclick=function(){
    MyFunction("igre");
}
document.getElementById("tipkovnice").onclick=function(){
    MyFunction("tipkovnice");
}

var jsss=null;

function MyFunction(s){
    console.log(s);
    var choice = document.getElementById("chosenCat");
    choice.innerHTML=s;
}
