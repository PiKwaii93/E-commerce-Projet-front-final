var requestURL = "../js/Produits.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();



var main = document.querySelector("main");

function produits(jsonObj){
    

    for(var i=0; i<jsonObj.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myImg = document.createElement('img');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myButton = document.createElement('button');
        var myId = document.createElement('p')


        myH2.textContent = jsonObj[i].name;
        myPara1.textContent = jsonObj[i].description;
        myImg.src = jsonObj[i].img_src;
        myPara2.textContent = jsonObj[i].category;
        myPara3.textContent = jsonObj[i].unit_price;
        if(jsonObj[i].available == "true"){
            myPara4.textContent = "Disponible";
        }else{
            myPara4.textContent = "Indisponible";
        }
        myButton.textContent = "Ajouter au Panier";
        myId.textContent = jsonObj[i].id;
      


        myArticle.classList.toggle('produit');
        myArticle.id = i;
        myH2.classList.toggle('name');
        myPara1.classList.toggle('description');
        myImg.classList.toggle('image');
        myPara2.classList.toggle('category');
        myPara3.classList.toggle('prix');
        myPara4.classList.toggle('dispo');
        myId.classList.toggle('identifiant');
        myButton.classList.toggle('ajouter');
        myButton.id = i;




        myArticle.appendChild(myH2);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myButton);
        myArticle.appendChild(myId);


        


        
        


        main.appendChild(myArticle);


    }
    const groupe = document.querySelectorAll('.ajouter');

    groupe.forEach(element =>{
        element.addEventListener('click', (e) => {
            jsonObj[e.target.id]["quantite"]++;
            localStorage.setItem('verif', JSON.stringify(jsonObj));
        })
    })
}


request.onload = function() {
    if(localStorage["verif"]){
        products = JSON.parse(localStorage["verif"]);
    }else{
        var products = request.response;
        localStorage.setItem('verif', JSON.stringify(products));

    }
    produits(products);
}




products = JSON.parse(localStorage["verif"]);

var main = document.querySelector("main");
var compteurproduit = document.querySelector('.compteur');
var stock = 0;

function verifquantite(jsonObj){
    for(var k = 0; k<jsonObj.length; k++){
        if(jsonObj[k]["quantite"] > 0){
            stock+=jsonObj[k]["quantite"];
        }
    }
}

verifquantite(products);


compteurproduit.textContent = stock;