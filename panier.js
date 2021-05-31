//Je défini mes variables via mes classes HTML

var main = document.querySelector("main");

function verifquantite(jsonObj){
    for(var k = 0; k<jsonObj.length; k++){
        if(jsonObj[k]["quantite"] > 0){
            console.log(jsonObj[k])
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myImg = document.createElement('img');
            var container1 = document.createElement('div');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myButton1 = document.createElement('button');
            var myQuantite = document.createElement('p');
            var myButton2 = document.createElement('button');
            var myId = document.createElement('p')


            myH2.textContent = jsonObj[k].name;
            myPara1.textContent = jsonObj[k].description;
            myImg.src = jsonObj[k].img_src;
            myPara2.textContent = jsonObj[k].category;
            myPara3.textContent = jsonObj[k].unit_price;
            myId.textContent = jsonObj[k].id;
            myButton1.textContent = "-";
            myQuantite.textContent = jsonObj[k]["quantite"];
            myButton2.textContent = "+";
        


            myArticle.classList.toggle('produit');
            myArticle.id = k;
            myH2.classList.toggle('name');
            container1.classList.toggle('container_article');
            myPara1.classList.toggle('description');
            myImg.classList.toggle('image');
            myPara2.classList.toggle('category');
            myPara3.classList.toggle('prix');
            myId.classList.toggle('identifiant');
            myButton1.classList.toggle('retirer');
            myButton1.id = k;
            myQuantite.classList.toggle('quantite');
            myButton2.classList.toggle('ajouter');
            myButton2.id = k;







// class pour afficher les produits





        BoutonAjoutPanier.forEach(BoutonAjoutPanier => {
            let id = BoutonAjoutPanier.dataset.id; //je récupère chaque id de mon JSON que j'affecte à ma variable 'id'
            console.log(id); //j'affiche dans ma console pour vérifier que tout est bien chargé 






        
            });

