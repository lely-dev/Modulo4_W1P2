//? 6a. fetch (GET)


function loadData(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => cardMusic(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}


function cardMusic (json){

    let artista = document.getElementById("artista");
    artista.innerHTML= "";

    let nameSinger = document.createElement("H2");
    nameSinger.innerText = json.data[0].artist.name;
    artista.appendChild(nameSinger);

    let containerCard = document.getElementById("container_card");
    containerCard.innerHTML = "";


    json.data.forEach(element => {

        let cardImage = document.createElement("img");
        cardImage.src = element.album.cover;
        cardImage.classList.add("img_card");
     
    
        
        
        containerCard.appendChild(cardImage);
    });

    
    

    
}


loadData('eminem');

let btnSearch = document.getElementById("button-search");

btnSearch.addEventListener("click", function(){
    let imput = document.getElementById("searchField");
    loadData(imput.value);
});

