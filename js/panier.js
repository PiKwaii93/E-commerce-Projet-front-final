products = JSON.parse(localStorage["verif"]);

var main = document.querySelector("main");
var compteurproduit = document.querySelector('.compteur');
var stock = 0;
var stockprix= 0;

function verifquantite(jsonObj){
    for(var k = 0; k<jsonObj.length; k++){
        if(jsonObj[k]["quantite"] > 0){
            stock+=jsonObj[k]["quantite"];
            let changeprix = jsonObj[k]["unit_price"].replace("€", "");
            stockprix += parseInt(changeprix);
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




            myArticle.appendChild(myH2);
            myArticle.appendChild(myImg); 
            myArticle.appendChild(container1);
            container1.appendChild(myPara1);
            container1.appendChild(myPara2);
            container1.appendChild(myPara3);
            container1.appendChild(myButton1);
            container1.appendChild(myQuantite);
            container1.appendChild(myButton2);
            myArticle.appendChild(myId);


            

            main.appendChild(myArticle);

        
        }
        
    }
    const groupe1 = document.querySelectorAll('.ajouter'); 
    const groupe2 = document.querySelectorAll('.retirer');


    groupe1.forEach(element =>{
        element.addEventListener('click', (e) => {
            jsonObj[e.target.id]["quantite"]++;
            localStorage.setItem('verif', JSON.stringify(jsonObj));
        })
    })

    groupe2.forEach(element => {
        element.addEventListener('click', (e) =>{
            if(jsonObj[e.target.id]["quantite"] <= 0){
                return;
            }else{
                jsonObj[e.target.id]["quantite"]--;
                localStorage.setItem('verif', JSON.stringify(jsonObj))
            }
        })
    })

    var myButton3 = document.createElement('button');
    myButton3.textContent = "Payer";
    myButton3.classList.toggle('payer');

    var total = document.createElement('p');
    total.textContent = "Total : " + stockprix + " €";
    total.classList.toggle('total');

    
    
    main.appendChild(total);
    main.appendChild(myButton3);
    


}



verifquantite(products);

console.log(stock);



compteurproduit.textContent = stock;


// Get the modal
var modal = document.getElementById("myModal");
var modalcontent = document.querySelector('.modal-content');

// Get the button that opens the modal
var btn = document.querySelector('.payer');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  modalcontent.style.display = "inherit";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

