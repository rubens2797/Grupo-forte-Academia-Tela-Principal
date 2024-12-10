const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%"; // Login form moves to center
    registerForm.style.left = "-50%"; // Register form moves off-screen

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
});

registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%"; // Login form moves off-screen
    registerForm.style.left = "50%"; // Register form moves to center

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
});


const logInputField = document.getElementById('logPassword');
const logInputIcon = document.getElementById('log-pass-icon');

const regInputField = document.getElementById('regPassword');
const regInputIcon = document.getElementById('reg-pass-icon');

function myPassword() {
    if (logInputField.type === "password") {
        logInputField.type = "text";
        logInputIcon.name = "eye-off-outline";
    } else {
        logInputField.type = "password";
        logInputIcon.name = "eye-outline"; 
    }
    logInputIcon.style.cursor = "pointer";
}


function myRegPassword() {
    if (regInputField.type === "password") {
        regInputField.type = "text";
        regInputIcon.name = "eye-off-outline"; 
    } else {
        regInputField.type = "password";
        regInputIcon.name = "eye-outline"; 
    }
    regInputIcon.style.cursor = "pointer";
}


function changeIcon(value) {
    if (value) {
        
        logInputIcon.name = "lock-open-outline";
        regInputIcon.name = "lock-open-outline";
    } else {
       
        logInputIcon.name = "lock-closed-outline";
        regInputIcon.name = "lock-closed-outline";
    }
}
