var hello = document.getElementById("test");
function myFunction(){
    var unchanged = document.getElementById("test").innerHTML

    if (unchanged == "Hello World!") {
        document.getElementById("test").innerHTML = "This is my world!"
    }
    else{
        document.getElementById("test").innerHTML = "Hello World!"
    }
}

//MDN for documantation!
console.log("main.js file")

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");

function validateNameInput(event){
    var nameInputValue = event.target.value;
    if (nameInputValue == "") return;

    if (nameInputValue.length < 2) {
        document.getElementById("name-error").innerHTML = "Name should be more than 2 characters"
    }
    else if (nameInputValue.length > 12) {
        document.getElementById("name-error").innerHTML = "Name should be less than 12 characters"
    }
    else{
        document.getElementById("name-error").innerHTML = ""
    }
}

function validateEmailInput(event){

}

function validatePasswordInput(event){
    var passwordInputValue = event.target.value;
    if (passwordInputValue == "") return;

    if (passwordInputValue.length < 6) {
        document.getElementById("password-error").innerHTML = "Password should be more than 5 characters"
    }
    else{
        document.getElementById("password-error").innerHTML = ""
    }
}

function validatePassWordConfirmation(event){
    var password = passwordInput.value
    var confirmPasswordValue = event.target.value;

    if (confirmPasswordValue == password) {
        document.getElementById("confirmPassword-error").innerHTML = ""
    }
    else{
        document.getElementById("confirmPassword-error").innerHTML = "Passwords do not match"
    }
}




nameInput.addEventListener("blur", validateNameInput);
passwordInput.addEventListener("blur", validatePasswordInput);
confirmPasswordInput.addEventListener("blur", validatePassWordConfirmation);
hello.addEventListener("click", myFunction);

