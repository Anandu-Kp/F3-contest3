const yourName = document.getElementById("your-name");
const email = document.getElementById("your-email");
const token = document.getElementById("token");
const password = document.getElementById("your-password");

const logout = document.getElementById("logout");

if (localStorage.getItem("token") != null) {
    yourName.innerText = `Full Name : ${localStorage.getItem("name")}`;
    email.innerText = `Email : ${localStorage.getItem("email")}`;
    token.innerText = `Token : ${localStorage.getItem("token")}`;
    password.innerText = `password : ${localStorage.getItem("password")}`;

    function logoutFn(event) {
        event.preventDefault();
        localStorage.clear();
        let a = document.createElement("a");
        a.href = "./index.html";
        document.getElementById("container").appendChild(a);
        a.click();
    }


    logout.addEventListener("click", logoutFn);
}
else {
    window.location.href = "./index.html"
}