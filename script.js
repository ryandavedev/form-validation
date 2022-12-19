const form = document.querySelector(".create-form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPass = document.getElementById("confirm--password");
const terms = document.querySelector(".chckbx");

const userContainer = document.querySelector(".user-container");
const userError = document.createElement("div");
userError.classList.add("error");

const emailContainer = document.querySelector(".email-container");
const emailError = document.createElement("div");
emailError.classList.add("error");

const passContainer = document.querySelector(".pass-container");
const passError = document.createElement("div");
passError.classList.add("error");

const passConfirmContainer = document.querySelector(".confirmpass-container");
const confirmPassError = document.createElement("div");
confirmPassError.classList.add("error");

const termcon = document.querySelector(".termcon");

form.addEventListener("submit", e => {
    e.preventDefault();
    clearError();

    if (username.value.length < 6) {
        userError.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p> Username must be atleast 6 characters.`;
        userContainer.appendChild(userError);
        username.style.border = "1px solid red";
    }
    if (email.value.length === 0) {
        emailError.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p> Email must not be empty.`;
        emailContainer.appendChild(emailError);
        email.style.border = "1px solid red";
    }

    if (password.value.length < 8) {
        passError.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p> Password must be atleast 6 characters.`;
        passContainer.appendChild(passError);
        password.style.border = "1px solid red";
    }

    if (password.value !== confirmPass.value) {
        confirmPassError.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p> Password should match.`;
        passConfirmContainer.appendChild(confirmPassError);
        confirmPass.style.border = "1px solid red";
        password.style.border = "1px solid red";
    }

    if (!terms.checked) {
        termcon.style.color = "#f54545";
    }

    if (
        username.value.length >= 6 &&
        email.value.length !== 0 &&
        password.value.length >= 8 &&
        password.value === confirmPass.value &&
        terms.checked
    ) {
        window.location.href = "account-created.html";
    }
});

function clearError() {
    userError.innerHTML = ``;
    emailError.innerHTML = ``;
    passError.innerHTML = ``;
    confirmPassError.innerHTML = ``;

    email.style.border = "1px solid white";
    termcon.style.color = "white";
    username.style.border = "1px solid white";
    confirmPass.style.border = "1px solid white";
    password.style.border = "1px solid white";
}
