let btnPrimary = document.querySelector('button');
var colorsArray = ['#337ab7', '#c9302c', '#4cae4c', '#000000'];
var i = 0;
document.getElementById("button").onclick=function(){
    btnPrimary.style.background=colorsArray[i % colorsArray.length];
    i++;
};