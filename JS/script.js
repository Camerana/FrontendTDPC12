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

var myButton = document.getElementById('myButton');
myButton.addEventListener('click', addTextToContainer)

var myTodoText = document.getElementById('todoText');
myTodoText.value;