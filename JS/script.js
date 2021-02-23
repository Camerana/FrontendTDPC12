var todoListItems = [
    'Alzarsi',
    'Lavarsi',
    'Fare colazione',
    'Andare a lavoro :(',
]


window.onload = Init;
//window.addEventListener("load", Init);

function Init() {
    setInterval(setClockTime, 1000);

    //document.addEventListener("NOME EVENTO", "CALLBACK")

    //NOME_EVENTO => https://www.w3schools.com/jsref/dom_obj_event.asp
    //CALLBACK =>   FUNZIONE CHE VIENE ESEGUITA ALL'EVENTO DEFINITO

    //FUNZIONE:
    //
    // function Test() {
    // }
    //
    // var test = () => { }

    // document.getElementById("btnAddToDoList").addEventListener("click", Test);
    // document.getElementById("btnAddToDoList").addEventListener("click", test);
    // document.getElementById("btnAddToDoList").addEventListener("click", () => {});

    // document.getElementById("btnAddToDoList").onclick = () => {
    //     var newTextItem = document.getElementById("txtItem");
    //     addToList(newTextItem.value);
    //     newTextItem.value = "";
    // };
    document.getElementById("btnAddToDoList").addEventListener("click", () => {
        var newTextItem = document.getElementById("txtItem");
        addToList(newTextItem.value);
        newTextItem.value = "";
    })

    document.getElementById("clearToDoList").addEventListener("click", () => {
        // var allItems = document.querySelectorAll("#todoList li");

        // allItems.forEach((item) => {
        //     item.remove();
        // })

        document.getElementById("todoList").innerHTML = "";

    })

    todoListItems.forEach((todoListItem) => {
        addToList(todoListItem);
    })

    addPersonaToTable();
}

var setClockTime = () => {
    var clock = document.getElementById("clock");
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString(); 
    clock.innerHTML = '<span>' + date + '<br/>' + time + '</span>';
}

// foreach(string todoListItem in todoListItems){
// }

var addToList = (value) => {
    var item = document.createElement("li");
    item.textContent = value;
    
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove Item";
    removeButton.addEventListener("click", () => item.remove());

    item.appendChild(removeButton);

    document.getElementById("todoList").appendChild(item);
}

// JSON (JavaScript Object Notation)

var listaPersona = [
    {
        "nome": "Alessio",
        "cognome": "Filippucci",
        "eta": 32,
        "patente": true,
        "linguaggiDiPrograzmmazione": [
            'C#',
            'PHP',
            'HTML',
            'CSS',
        ],
        "lingue":[
            {
                "nome": "Italiano",
                "conoscenza": "Madrelingua"
            },
            {
                "nome": "Inglese",
                "conoscenza": "...."
            },
            {
                "nome": "Francese",
                "conoscenza": "...."
            }
        ],
        "creaAlert": (messaggio) => {
            alert(messaggio)
        }
    }
]



var addPersonaToTable = () => {
    var tablePersona = document.getElementById("tabellaPersone");

    var nome = "Alessio";
    var cognome = "Filippucci";

    var rowPersona = document.createElement("tr");

    var tdNome = document.createElement("td");
    var tdCognome = document.createElement("td");

    // var spanName = document.createElement("span");
    // spanName.textContent = nome;
    // tdNome.appendChild(spanName);

    tdNome.textContent = nome;
    tdCognome.textContent = cognome;
    
    rowPersona.appendChild(tdNome);
    rowPersona.appendChild(tdCognome);

    tablePersona.appendChild(rowPersona);
}