const bulb = document.querySelector("#bulb");
const red = document.querySelector("#red-btn");
const blue = document.querySelector("#blue-btn");
const green = document.querySelector("#green-btn");
const on = document.querySelector("#on-btn");
const off = document.querySelector("#off-btn");
const onOff = document.querySelector("#on-off-btn");

onOff.addEventListener("click",()=>{
    bulb.classList.toggle("bg");
})

red.addEventListener("click",()=>{
    bulb.style.backgroundColor="red";
});

blue.addEventListener("click",()=>{
    bulb.style.backgroundColor="rgb(67, 67, 247)";
});

green.addEventListener("click",()=>{
    bulb.style.backgroundColor="green";
});

on.addEventListener("click",()=>{
    bulb.style.backgroundColor="rgb(247, 247, 144)";
});

off.addEventListener("click",()=>{
    bulb.style.backgroundColor="white";
});