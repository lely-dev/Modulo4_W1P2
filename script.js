//? 6a. fetch (GET)

let eminem;
let metallica;
let queen;

function loadData(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => cardMusic(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}



// fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
// .then((response) => response.json()) // Abbiamo una promise restituita qui
// .then((json) => metallica = json) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
// .catch((err) => console.log("Error detected: ", err) );

// fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
// .then((response) => response.json()) // Abbiamo una promise restituita qui
// .then((json) => queen = json) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
// .catch((err) => console.log("Error detected: ", err) );

// function cardMusic (json){
//     let containerCard = document.getElementById("container_card");
//     let cardImage = document.createElement("div");
//     cardImage.innerText = json.data[0].title;
//     // console.log(cardImage);
//     containerCard.appendChild(cardImage);
// }

function cardMusic (json){
    let artista = document.getElementById("artista");
    

    let nameSinger = document.createElement("H2");
    nameSinger.innerText = json.data[0].artist.name;
    artista.appendChild(nameSinger);

    let containerCard = document.getElementById("container_card");

    // for (let i = 0; i < json.data[6]; i++) {
    //     let cardImage = document.createElement("img");
    //     cardImage.src = element.album.cover;
        
        
    //     containerCard.appendChild(cardImage);
    //     console.log(json.data[6]);
    // }

    json.data.forEach(element => {

        let cardImage = document.createElement("img");
        cardImage.src = element.album.cover;
     
    
        
        
        containerCard.appendChild(cardImage);
    });

    
    

    
}


loadData('eminem');