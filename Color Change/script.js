const box = document.querySelector("#box");
const head = document.querySelector("#title");
const txt = document.querySelector("#txt");

const boxColor = document.querySelector("#boxColor");
const headColor = document.querySelector("#headColor");
const txtColor = document.querySelector("#txtColor");

const pink = document.querySelector("#pink");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");

boxColor.addEventListener("change", changeBoxColor)
headColor.addEventListener("change", changeHeadColor)
txtColor.addEventListener("change", changeTxtColor)

function changeBoxColor(){
    box.style.backgroundColor = boxColor.value;
}

function changeHeadColor(){
    head.style.color = headColor.value;
}

function changeTxtColor(){
    txt.style.color = txtColor.value;
}

pink.addEventListener("mouseover", pinkColor);
pink.addEventListener("mouseleave", noColor);

blue.addEventListener("mouseover", blueColor);
blue.addEventListener("mouseleave", noColor);

green.addEventListener("mouseover", greenColor);
green.addEventListener("mouseleave", noColor);

yellow.addEventListener("mouseover", yellowColor);
yellow.addEventListener("mouseleave", noColor);


function pinkColor(){
    box.style.backgroundColor = "pink";
}

function blueColor(){
    box.style.backgroundColor = "rgb(151, 233, 247)";
}

function greenColor(){
    box.style.backgroundColor = "rgb(151, 239, 151)";
}

function yellowColor(){
    box.style.backgroundColor = "rgb(247, 247, 145)";
}

function noColor(){
    box.style.backgroundColor = "white";
}