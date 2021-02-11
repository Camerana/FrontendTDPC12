// function SetClockTime() {
//     var clock = document.getElementById("clock");
//     var now = new Date();
//     var date = now.toLocaleDateString();
//     var time = now.toLocaleTimeString();
//     clock.innerHTML = '<span>' + date + '<br/>' + time + '</span>';
// }

var setClockTime = () => {
    var clock = document.getElementById("clock");
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString(); 
    clock.innerHTML = '<span>' + date + '<br/>' + time + '</span>';
}

setInterval(setClockTime, 1000);

// function AddTextToContainer() {
//     var container = document.getElementById("container");
//     var titolo = document.createElement("h1");
//     titolo.textContent = "Ciao, sono un titolo creato da JS!!!";
//     titolo.style.color = "#ff0000";
//     container.appendChild(titolo);
//     container.style.textAlign = 'center';
// }

var addTextToContainer = () => {
    var container = document.getElementById("container");
    var titolo = document.createElement("h1");
    titolo.textContent = "Ciao, sono un titolo creato da JS!!!";
    titolo.style.color = "#ff0000";
    container.appendChild(titolo);
    container.style.textAlign = 'center';
}

var addInToDoList = () => {
    var ulToDoList = document.querySelector("#myToDoList ul");
    var itemToDoList = document.createElement("li");
    var toDoText = document.querySelector('#myToDoList input');
    var newToDoText = toDoText.value;

    if (newToDoText == "") {
        alert("Impossibile aggiungere un valore vuoto")
    }
    else {
        itemToDoList.textContent = newToDoText;
        ulToDoList.appendChild(itemToDoList);
        toDoText.value = "";
    }
}

var myButton = document.querySelector('#myToDoList button');
myButton.addEventListener('click', addInToDoList)

var img = document.getElementsByTagName('img')[0];
img.style.opacity = 1.0;

var fadeAway = function () {
    img.style.opacity = img.style.opacity - .1;
    if (img.style.opacity == 0){
        clearInterval(intId);
    }
};

var intId = setInterval(fadeAway, 1000);

// function Test() {
//     var a = 1;

//     if (1 == 1) {
//         let aa = 2;
//         console.log(a)

//         if (1 == 1) {
//             console.log(aa)
//         }
//     }
//     // ERRORE, aa NON ACCESSIBILE
//     console.log(aa)
// }

// Test();


