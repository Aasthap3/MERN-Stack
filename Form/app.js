let email1 =  document.getElementById("email1");
let pass1 =  document.getElementById("pass1");

let name2 =  document.getElementById("name");
let email2 =  document.getElementById("email2");
let pass2 =  document.getElementById("pass2");
let conpass =  document.getElementById("conpass");

let login = document.querySelector("#login-btn");
let register = document.querySelector("#reg-btn");

login.addEventListener("click",()=>{
    if(email1.value ==="admin@gmail.com" && pass1.value === "123"){
        alert(" login successful!")
    }else{
        alert("Login Failed! Try again.")
    }
});

register.addEventListener("click",()=>{
    alert(name2.value+ "\n" + email2.value + "\nRegistered Successfully!");
});

