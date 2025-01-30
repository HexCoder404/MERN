let form = document.querySelector(".form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(username.value == "" || password.value == "") {
        alert("Please fill in all details");
        return;
    }
    if(username.value == "wangwang" && password.value == "420") {
        alert("Login successful");
        username.value = "";
        password.value = "";
        window.location.href = "quiz.html";
    }
    else {
        alert("Login failed");
        username.value = "";
        password.value = "";
    }
});