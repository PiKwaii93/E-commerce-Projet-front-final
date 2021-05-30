var requestURL = "https://pikwaii93.github.io/E-commerce.github.io/Produits.json";
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
        myButton.textContent = "Ajouter au Panier"
      


        myArticle.classList.toggle('produit');
        myH2.classList.toggle('name');
        myPara1.classList.toggle('description');
        myImg.classList.toggle('image');
        myPara2.classList.toggle('category');
        myPara3.classList.toggle('prix');
        myPara4.classList.toggle('dispo');
        myId.classList.toggle('identifiant');
        myButton.classList.toggle('ajouter');




        myArticle.appendChild(myH2);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myButton);



        
        


        main.appendChild(myArticle);


    }

}


request.onload = function() {
    var products = request.response;
    produits(products);
  }


 