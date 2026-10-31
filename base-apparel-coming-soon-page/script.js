const submitBtn = document.querySelector(".submitBtn");
const emailInput = document.querySelector("input");
const inputContainer = document.querySelector(".input-container");
const errorIcon = document.querySelector(".errorIcon");
const errorText = document.querySelector(".error-text");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let value = emailInput.value.trim();

    if (!emailPattern.test(value)) {
        inputContainer.style.borderColor = "hsl(0, 93%, 68%)";
        inputContainer.style.borderWidth = "3px";

        errorIcon.style.visibility = "visible";
        errorText.style.visibility = "visible"
        errorText.textContent = "Please provide a valid email";
        errorText.style.color = "hsl(0, 93%, 68%)";
    } else {
        inputContainer.style.borderColor = "hsl(0, 6%, 24%)";
        inputContainer.style.borderWidth = "1px";

        errorIcon.style.visibility = "hidden";
        errorText.style.visibility = "visible";

        emailInput.value = "";
        errorText.textContent = "Thanks!";
        errorText.style.color = "#22bb33";

        setTimeout(() => {
            errorText.style.visibility = "hidden";
        }, 2000);
    }
});