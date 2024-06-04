console.log(data);

var kategorije = document.querySelector('#kategorije>ul');
var kats=kategorije.querySelectorAll('p')

kats.forEach(element => {
    console.log(element.parentNode);
});