

//Tableau qui contient les citation
let arrayOfQuotes = [["Mamamia", "Mario"],
["Le coup le plus rusé que le diable ait jamais réussi, c’est de faire croire à tout le monde qu’il n’existait pas.", "Kevin Spacey - Usual Suspects de Bryan Singer"],
["J’ai dégusté son foie avec des fèves au beurre et un excellent Chianti", "Anthony Hopkins - Le silence des agneaux de Jonathan Demme"],
["La vérité c’est comme une couverture trop petite. Tu peux tirer dessus de tous les côtés, tu auras toujours les pieds froids.", "Peter Weir - Le cercle des poètes disparus"],
["On m’appelle Le Doctor, ou le gardien, ou « dégagez de cette planète ! » quoique à proprement parler ce n’est peut-être pas vraiment un nom.", "Doctor Who, le onzième docteur."],
["Tes fautes de fils sont mes défaillances de père.", "Gladiator, Marc Aurèle. "],
["- Je ne vois pas pourquoi tu ne veux pas le porter. < - Parce que j’ai l’air d’un idiot, voilà pourquoi.  - Pas plus que d’habitude.", "Harry Potter et L’ordre du Phoenix, Hermione et Ron"],
["Aussi loin que je me souvienne, j’ai toujours voulu être un gangster. ", "Les affranchis, Henry Hill. "],
["- Excusez-moi mais vous êtes en train d’uriner sur ma voiture.  -Hein ? Ho, Ha oui ! … Mais c’est parce que j’ai la même là bas, j’ai confondu ! … Je peux finir ? - Oui.", "Les bronzés font du ski. "]]

/* 
    - Créez le fichier HTML (attention à la sémantique des balises)
    - Créez le fichier Css pour avoir un visuel le plus proche possible du mien. (font =
    satisfy)

    - Créez les variables nécessaires au projet, prenez 5 minutes pour réfléchir à un
    algorithme, cela vous donneras une idée de vos besoins.
    - Allez chercher tout les éléments à modifier dans le DOM et stockez les également.
    - Créez un tableau avec vos citations préférées ainsi que l’auteur correspondant.
    (une dizaine)
    - Créez un évènement sur le clique du bouton « nouvelle citation ».
    - Créez une fonction permettant d’aller piocher une citation aux hasard dans votre
    tableau
    - Créez une fonction permettant d’actualise la citation et l’auteur.
    - Je vous laisse penser à un système pour qu’une citation ne sorte pas deux
    fois de suite.
    - Vous devriez avoir toutes les armes pour avancer, renseignez vous bien sur les
    fonctions mathématiques, elles pourront vous être utiles.
    - Vous pourriez avoir besoin d’une boucle à un endroit et de connaitre la longueur de
    votre tableau.
    J’en dis pas plus sinon c’est pas drôle, je vous donne la correction sur un zip et non
    dans le cours, comme ça vous avez tout.
    */
 
    

let button = document.querySelector("button");
let titre = document.querySelector("h1");
let p = document.querySelector("p");
let citationPre


button.addEventListener("click",function(){
   let citation = arrayOfQuotes[Math.floor(Math.random()*arrayOfQuotes.length )]

    titre.textContent = citation[0];
    p.textContent = citation[1];
    if (citation === citationPre){
        citation = arrayOfQuotes[Math.floor(Math.random()*arrayOfQuotes.length )]
       
    }
    citationPre = citation;
})


// Correction dans le doc Js
// __________________________________________________________________________________________________________________

/**
 * vous allez créée un dés 100 
 * Un carré qui réagit au clique et lance un dés 100
 * il doit changer l'affichage dans le carré avec le résultat du dés
 * chaque lancé doit être ajouter en dessous dans un historique 
 * 
 * Bonus:
 * Si le résulat du dés est suppérieur à 95 c'est une réussite critique
 * Si le résultat du dés* est inférieur à 5 c'est un echec critique
*/

let des = document.querySelector(".des");
let historique;

des.addEventListener("click",function(){
   let random2 =  Math.round(Math.random()*100);
    des.textContent = random2;
    historique = document.createElement("p")

    historique.classList.add("newclass")

    historique.textContent = random2;
    document.body.append(historique)

    des.style.paddingTop ="40px ";
    des.style.paddingBottom ="40px ";
});


/**
 * Dans ce petit tp, vous allez crée un petit carré avec un fleche pour remonter 
 * faite en sorte que votre body soit scrollable, body{ height: 300vh;}
 * lorsque vous êtes tout en bas de la page, vous cliquez sur le carré et devez remonter
 * tout en heut de votre page.
 * faite également un évènement qui affiche la position actuel du scroll
 */




