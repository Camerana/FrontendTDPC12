// var listaPersona = [
//     {
//         "nome": "Alessio",
//         "cognome": "Filippucci",
//     },
//     {
//         "nome": "Alessio",
//         "cognome": "Filippucci",
//     },
//     {
//         "nome": "Alessio",
//         "cognome": "Filippucci",
//     },
//     {
//         "nome": "Alessio",
//         "cognome": "Filippucci",
//     },
//     {
//         "nome": "Alessio",
//         "cognome": "Filippucci",
//     },
//     {
//         "nome": "Alessio",
//         "cognome": "Filippucci",
//     }
// ]

window.onload = Init;

function Init() {
    setInterval(setClockTime, 1000);

    document.getElementById("btnGetData").addEventListener("click", GetData);

    // // AGGIUNTA DI NUOVO ELEMENTO NELLA COLLECTION
    // listaPersona.push({
    //     nome: "Paolo",
    //     cognome: "Rossi"
    // });

    // listaPersona.forEach((persona, index) => {
    //     if (index === 1) {
    //         // MODIFICA DI UN ELEMENTO DELLA COLLECTION
    //         persona.nome = "Paolino";
    //         persona.cognome = "Paperino";
    //     }
    //     addPersonaToTable(persona.nome, persona.cognome);
    // })
}

var setClockTime = () => {
    var clock = document.getElementById("clock");
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString(); 
    clock.innerHTML = '<span>' + date + '<br/>' + time + '</span>';
}

var addPersonaToTable = (nome, cognome) => {
    var tablePersona = document.getElementById("tabellaPersone");
    var rowPersona = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdCognome = document.createElement("td");

    tdNome.textContent = nome;
    tdCognome.textContent = cognome;
    
    rowPersona.appendChild(tdNome);
    rowPersona.appendChild(tdCognome);

    tablePersona.appendChild(rowPersona);
}

function GetData() {
    var req = new XMLHttpRequest();

    req.addEventListener('load', () => {
        if (req.status === 200) {
            var data = JSON.parse(req.responseText);
            console.log(data);
            FillData(data)
        }
        else{
            alert("Errore durante il recupero dei dati. Riprovare più tardi.")
        }
    })

    // URL PER RECUPERO DATI OPEN SOURCE => https://jsonplaceholder.typicode.com

    req.open('get', "JS/data.json", true);
    req.setRequestHeader('Content-type', 'application/json')
    req.send();
}

function FillData(data) {
    // AGGIUNTA DI NUOVO ELEMENTO NELLA COLLECTION
    data.push({
        nome: "Paolo",
        cognome: "Rossi"
    });

    data.forEach((persona, index) => {
        if (index === 1) {
            // MODIFICA DI UN ELEMENTO DELLA COLLECTION
            persona.nome = "Paolino";
            persona.cognome = "Paperino";
        }
        addPersonaToTable(persona.nome, persona.cognome);
    })
}