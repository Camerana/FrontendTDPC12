const baseUrl = "https://jsonplaceholder.typicode.com/";

// METODO INIZIALE CON DOM CARICATA E PRONTA
$(() => {
    console.log("App Ready!")
})

function GetDataWithAjax(resource, method, onSuccess) {
    var settings = {
        url: baseUrl + resource,
        dataType: 'json',
        method: method,
        data: null,
        async: true,
        success: onSuccess,
        error: (xhr) => {
            console.error(xhr);
        }
    };
    $.ajax(settings);
}