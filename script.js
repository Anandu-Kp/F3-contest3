
const signInButton = document.getElementById("sign-in-btn");


function signInFn(event) {
    event.preventDefault();
    let data = event.target;
    let name = document.getElementById("sign-in").name.value;
    let email = document.getElementById("sign-in").email.value;
    let password1 = document.getElementById("sign-in").password1.value;
    let password2 = document.getElementById("sign-in").password2.value;
    if (name == null || email == null || password1 == null || password2 == null) {
        document.getElementById("error").style.visibility = "visible";
    }
    else if (password1 == password2) {
        const token = generateRandomString();
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password1);
        localStorage.setItem("token", token);
        console.log("hello");
        let a = document.createElement("a");
        a.href = "./profile.html";
        document.getElementById("sign-in").appendChild(a);
        a.click();
        document.getElementById("sign-in").removeChild(a);

    }
    else {
        alert("passwords are not matching!!")
    }
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}



signInButton.addEventListener("click", signInFn);