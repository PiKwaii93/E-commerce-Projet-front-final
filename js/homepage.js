products = JSON.parse(localStorage["verif"]);

var main = document.querySelector("main");
var compteurproduit = document.querySelector('.compteur');
var stock = 0;

var carousel = document.querySelector("#carousel");


function verifquantite(jsonObj){
    for(var k = 0; k<jsonObj.length; k++){
        if(jsonObj[k]["quantite"] > 0){
            stock+=jsonObj[k]["quantite"];
        }
        if(k<7){
            var imgPres = document.createElement('img');
            imgPres.src = jsonObj[k].img_src;
            imgPres.style.width="350px";
            imgPres.style.margin="10px";
            carousel.appendChild(imgPres);
        }
    }
}

verifquantite(products);


compteurproduit.textContent = stock;


