const btn = document.querySelector("#btn");
let fname = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let dob = document.getElementById("dob").value;
let qual = document.getElementById("qual").value;
let grade = document.getElementById("grade").value.trim();
let course = document.getElementById("course").value;
let time = document.getElementById("time").value;
let add = document.getElementById("add").value.trim();
let city = document.getElementById("city").value.trim();
let pin = document.getElementById("pin").value.trim();
let gName = document.getElementById("gName").value.trim();
let gPhone = document.getElementById("gPhone").value.trim();
let hear = document.getElementById("hear").value;
let req = document.getElementById("req").value.trim();

const errors = document.querySelectorAll(".error");

function submit(){
    console.log("hey");
    if(isValidated()){
        console.log("Form Submitted!");
    }
};

function isValidated(){
    if(isFilled()){
        console.log("Form Valid!");
    }
};

function isFilled(){
    let filled = true;
    if(fname===""){
        document.getElementById("nameError").innerText = "Please enter your name.";
        filled = false;
    }
    if(email===""){
        document.getElementById("emailError").innerText = "Please enter your email.";
        filled = false;    
    }
    if(phone===""){
        document.getElementById("phoneError").innerText = "Please enter your mobile number.";
        filled = false;
    }
    if(dob===""){
        document.getElementById("dobError").innerText = "Please enter your DOB";
        filled = false;
    }
    if(qual===""){
        document.getElementById("qualError").innerText = "Please choose qualification.";
        filled = false;
    }
    if(grade===""){
        document.getElementById("gradeError").innerText = "Please enter your grade";
        filled = false;
    }
    if(course===""){
        document.getElementById("courseError").innerText = "Please choose your course";
        filled = false;
    }
    if(time===""){
        document.getElementById("timeError").innerText = "Please choose preferred time";
        filled = false;
    }
    if(add===""){
        document.getElementById("addError").innerText = "Please enter your address";
        filled = false;
    }
    if(city===""){
        document.getElementById("cityError").innerText = "Please enter your city";
        filled = false;
    }
    if(email===""){
        document.getElementById("emailError").innerText = "Please enter your email";
        filled = false;
    }
    if(email===""){
        document.getElementById("emailError").innerText = "Please enter your email";
        filled = false;
    }
    if(email===""){
        document.getElementById("emailError").innerText = "Please enter your email";
        filled = false;
    }
    if(email===""){
        document.getElementById("emailError").innerText = "Please enter your email";
        filled = false;
    }
    return filled;
};

btn.addEventListener("click",submit());