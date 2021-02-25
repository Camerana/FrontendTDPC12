window.onload = Init;

function Init() {
    setInterval(setClockTime, 1000);
}

var setClockTime = () => {
    var clock = document.getElementById("clock");
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString(); 
    clock.innerHTML = '<span>' + date + '<br/>' + time + '</span>';
}


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