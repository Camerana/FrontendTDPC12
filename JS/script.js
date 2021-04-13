window.onload = Init;

function Init() {
    setInterval(setClockTime, 1000);

    //RECUPERARE ELEMENTO CON JS PURO
    var buttonJS = document.getElementById("btnGetDataJS");
    buttonJS.addEventListener("click", GetData);
    
    var buttonJquery = $('#btnGetDataJquery');
    buttonJquery.on("click", () => {
        GetDataWithAjax("users", "GET", renderUsers);
    });
}

var setClockTime = () => {
    var clock = document.getElementById("clock");
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString(); 
    clock.innerHTML = '<span>' + date + '<br/>' + time + '</span>';
}

function GetData() {
    var req = new XMLHttpRequest();

    req.addEventListener('load', () => {
        if (req.status === 200) {
            var data = JSON.parse(req.responseText);
            renderUsers(data)
        }
        else{
            alert("Errore durante il recupero dei dati. Riprovare più tardi.")
        }
    })

    // URL PER RECUPERO DATI OPEN SOURCE => https://jsonplaceholder.typicode.com

    //req.open('get', "JS/data.json", true);
    req.open('get', "https://jsonplaceholder.typicode.com/users", true);
    req.setRequestHeader('Content-type', 'application/json');
    req.send();
}

const baseUrl = "https://jsonplaceholder.typicode.com/";

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

var page = 0;
var perPage = 5;

var renderUsers = (users) => {
    $("#tabellaPersone").html("");

    if (page + perPage > users.length) {
        page = 0;
    }

    users.slice(page, page + perPage).forEach((user, index) => {
        renderUser(user);
    })

    page += perPage;
}

var renderUser = (user) => {
    $("#tabellaPersone").append(
        $("<tr>").append(
            $("<td>").html(user.id),
            $("<td>").html(user.name),
            $("<td>").html(user.username),
            $("<td>").html(user.email),
            $("<td>").append(
                $("<button>").html("DETTAGLI").on("click", () => {
                    //alert(user.id + ' ' + user.email);
                    //alert(`${user.id} ${user.email}`);

                    var albumsResource = "users/" + user.id + "/albums";

                    // GetDataWithAjax(albumsResource, "GET", (albums) => {
                    //     console.log(albums);
                    // });

                    $(".albumsContainer").html("");
                    //GetDataWithAjax(albumsResource, "GET", renderAlbums);
                    GetDataWithAjax(albumsResource, "GET", (albums) => renderAlbumsWithUser(albums, user));
                })
            )
        )
    );
}

var renderAlbums = (albums) => {
    var albumsContainer = $("<div>").addClass("albumsContainer");

    albums.forEach((album) => {
        var photosResource = "albums/" + album.id + "/photos?_start=0&_limit=1";
        
        GetDataWithAjax(photosResource, "GET", (photos) => {
            console.log(photos)
            var photo = photos[0];

            albumsContainer.append(
                $("<div>").addClass("album").append(
                    $("<h3>").html(album.title),
                    $("<img>").attr("src", photo.thumbnailUrl)
                )
            )
        });
    })

    $("#container").append(albumsContainer);
}

var renderAlbumsWithUser = (albums, user) => {
    var albumsContainer = $("<div>").addClass("albumsContainer");

    albumsContainer.append(
        $("<h1>").html(`ALBUMS di ${user.name}`)
    );

    albums.forEach((album) => {
        GetDataWithAjax("albums/" + album.id + "/photos", "GET", (photos) => {
            var photo = photos[0];

            // var divAlbum = $("<div>");
            // var albumTitle = $("<h3>");

            // albumTitle.html(album.title);

            // divAlbum.addClass("album");
            // divAlbum.css("background-image", `url(${photo.thumbnailUrl})`);
            // divAlbum.append(albumTitle);

            // albumsContainer.append(divAlbum);

            albumsContainer.append(
                $("<div>").addClass("album").css("background-image", `url(${photo.thumbnailUrl})`).append(
                    $("<h3>").html(album.title)
                )
            )
        });
    })

    $("#container").append(albumsContainer);
}