var storeData = [{ //j'initialise ma variable où je stock tous mes produits
    "id": "0",
    "name": "Naruto",
    "description": "c'est le manga naruto",
    "img_src": "D:/Hetic/Projet_E-commerce/Images/Naruto.jpg",
    "unit_price": "20",
    "available": "true/false"
}, {
    "id": "1",
    "name": "DBZ",
    "description": "c'est le manga DBZ",
    "img_src": "D:/Hetic/Projet_E-commerce/Images/Dbz.jpg",
    "unit_price": "19",
    "available": "true/false"
},
{
    "id": "2",
    "name": "One piece",
    "description": "c'est le manga One piece",
    "img_src": "D:/Hetic/Projet_E-commerce/Images/one_piece.jpg",
    "unit_price": "35",
    "available": "true/false"
},
{
    "id": "3",
    "name": "Fairy Tail",
    "description": "c'est le manga Fairy Tail",
    "img_src": "D:/Hetic/Projet_E-commerce/Images/fairy_tail.jpg",
    "unit_price": "15",
    "available": "true/false"
},
];

//je crée une fonction pour afficher les éléments "basiques" du Json à l'utlisateur
function NotreBoutique(store) {
return `
<div class="manga">
    <div>
        <img height="200px" width="300px" class="photo_du_store" src="${store.img_src}" alt="${store.description}"><br>
    </div>
    <div class="sous_manga">
        <p> Name : ${store.name} </p>
        <p> Prix : ${store.unit_price} </p>
    </div> <br>
</div>

        `
}

document.getElementById("store").innerHTML =
` 
${storeData.map(NotreBoutique)}

`