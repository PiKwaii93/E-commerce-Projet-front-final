//Je défini mes variables via mes classes HTML

const articleContenu = document.querySelector('.article_contenu') //

const listeDesArticles = document.querySelector('.liste_des_articles') //





console.log(fermerLePanier); // juste pour vérifier que j'ai bien récupéré mes variables 

let chariot = [];

class ObtentionDesProduits {
    async RecuperartionProduits() {

        try {
            let resultat = await fetch("http://localhost:8888/stores.json"); //je récupère mon JSON grace à fetch 
            let BDD = await resultat.json();
            let produits = BDD.store;
            produits = produits.map(store => { // je créee un nouveau tableau pour stocker les produits que j'ai récupéré 
                const name = store.name // ici et comme pour toutes les autres ma constante name récupère la valeur du Json qui lui correspond
                const prix = store.prix
                const id = store.id
                const image = store.image
                return { name, prix, id, image } //on retourne les valeurs

            })
            return produits //on retournes tous les produits récupérés 
        } catch (erreur) {
            console.log("l'erreur dans la récupération de données est :", erreur); //en cas d'erreur il l'affichera dans la console
        }
    }

}






// class pour afficher les produits

class AffichageDesProduits {
    ProduitsAffiches(produits) {
        let resultat = "";
        produits.forEach(produits => { //boucle pour afficher tous les produits du fichier .json grace aux balises html
            //il affichera tous les éléments du json autant qu'ils soient
            resultat += ` 
            <div class="article">
            <div>
                <img class="image" src=${produits.image}>
            </div>
            <div class="description_et_boutton">
                <div>
                    <p>${produits.name}</p>
                    <p>€${produits.prix}</p>
                </div>
                <div>
                    <button class="BAP" data-id=${produits.id}> <span class="add ajout-panier"></span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg> Ajouter au panier </button>
                </div>
            </div>
        </div>`
        });

        listeDesArticles.innerHTML = resultat; //ici je choisis l'emplacement ou le Js ressosrtira en html 
        //c'est à dire dans la class '.liste_des_articles' que j'ai affecté à ma variable ci dessus 


    }
    TousLesBtnAjoutPanier() {
        const BoutonAjoutPanier = document.querySelectorAll('.BAP'); //je sélection tous les boutons générés par ma boucle foreach grace au JSON //
        console.log(BoutonAjoutPanier);

        BoutonAjoutPanier.forEach(BoutonAjoutPanier => {
            let id = BoutonAjoutPanier.dataset.id; //je récupère chaque id de mon JSON que j'affecte à ma variable 'id'
            console.log(id); //j'affiche dans ma console pour vérifier que tout est bien chargé 

            let ElementsDeMonChariot = chariot.find(store => store.id === id);
            if (ElementsDeMonChariot) {
                BoutonAjoutPanier.innerText = "Element du Panier";
                BoutonAjoutPanier.disabled = true;
            }
            BoutonAjoutPanier.addEventListener('click', (event) => { // je fais en sorte qu'au click le bouton soit désactivé et son texte remplacé par un autre
                event.target.innerText = "Element ajouté ";
                event.target.disabled = true;

                //je récupère un élément déja "parsé" depuis ma liste de produits 
                let ElementDuChariot = {...StockageLocal.ObtentionDesProduits(id),
                    NombreDeProduits: 1
                };
                console.log(ElementDuChariot);


                //j'ajoute le produit au chariot
                chariot = [...chariot, ElementDuChariot];
                console.log(chariot);

                //je l'enregistre dans mon stockage Local
                StockageLocal.SauvegardeChariot(chariot);

                //je defini les valeurs du chariot
                this.setValeurDuChariot(chariot);

            });

        });
    }
    setValeurDuChariot(chariot) {
        let TotalPanier = 0;
        let NombreTotaldElements = 0;
        chariot.map(store => {
            TotalPanier += store.prix * store.NombreDeProduits;
            NombreTotaldElements += store.NombreDeProduits;
        })
        TotalPanier.innerText = parseFloat(TotalPanier.toFixed(2))
        articleContenu.innerText = NombreTotaldElements;
        console.log(TotalDuChariot, articleContenu);
    }

}

//stockage local 

class StockageLocal {

    static Memoire(produits) {
        localStorage.setItem("produits", JSON.stringify(produits));
    }

    static ObtentionDesProduits(id) {
        let produits = JSON.parse(localStorage.getItem('produits'));
        return produits.find(produits => produits.id === id);

    }

    static SauvegardeChariot(chariot) {
        localStorage.setItem('chariot', JSON.stringify(chariot));
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const Visible = new AffichageDesProduits();
    const produits = new ObtentionDesProduits();

    produits.RecuperartionProduits().then(BDD => console.log(BDD));
    produits.RecuperartionProduits().then(produits => Visible.ProduitsAffiches(produits));
    StockageLocal.Memoire(produits);


    produits.RecuperartionProduits().then(produits => {
        Visible.ProduitsAffiches(produits);
        StockageLocal.Memoire(produits);
    }).then(() => {
        Visible.TousLesBtnAjoutPanier()
    });


});

//console.log(getJSON);