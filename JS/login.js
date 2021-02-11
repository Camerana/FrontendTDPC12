var counter = 0;

var btnLogin = document.getElementById("btnLogin");

// function Login() {
    
// }

var login = () => {
    if (counter < 3) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username == "tdpc" && password == "tdpc12") {
            location.replace("index.html");
        }
        else {
            alert("Username e/o Password errati");
            counter++;
        }
    }
    else{
        alert("Tentativi finiti. Bye!");
    }
}

btnLogin.addEventListener('click', login);