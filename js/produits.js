var requestURL = "https://pikwaii93.github.io/E-commerce.github.io/Produits.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();



var main = document.querySelector("main");

function produits(products){
    

    for(var i=0; i<products.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myImg = document.createElement('img');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myButton = document.createElement('button');
        var myId = document.createElement('p')


        myH2.textContent = products[i].name;
        myPara1.textContent = products[i].description;
        myImg.src = products[i].img_src;
        myPara2.textContent = products[i].category;
        myPara3.textContent = products[i].unit_price;
        if(products[i].available == "true"){
            myPara4.textContent = "Disponible";
        }else{
            myPara4.textContent = "Indisponible";
        }
        myButton.textContent = "Ajouter au Panier";
        myId.textContent = products[i].id;
      


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
            products[e.target.id]["quantite"]++;
            localStorage.setItem('verif', JSON.stringify(products));
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

function verifquantite(products){
    for(var k = 0; k<products.length; k++){
        if(products[k]["quantite"] > 0){
            stock+=products[k]["quantite"];
        }
    }
}

verifquantite(products);


compteurproduit.textContent = stock;