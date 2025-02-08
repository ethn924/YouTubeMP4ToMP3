// On compare a et b, si a et b sont égaux alors on rajoute 1 à a et on peut éventuellement faire un alert avec la nouvelle valeur de a.

var a = 2;
var b = 2;

if (a && b == 2) {
    alert("Bonjour !");
    a += 1;
}
else {
    alert("Bienvenue sur le site !");
}

// On demande à l'utilisateur de rentrer un chiffre (valide) dans l'ascenseur et on souhaite lui envoyer un message de confirmation.
// && correspond à AND, || correspond à OR et ! correspond à différent de.

var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (-2;20): "));

if (floor == 0) {
    alert("Vous êtes déjà au RDC !");
}

else if (-2 <= floor && floor <= 20) {
    alert("Compris ! Direction à l'étage : " + floor); // En Java il ne faut pas oublier que c'est un + pour concaténer, et non une virgule.
}

else {
    alert("L'étage n'existe pas");
}

/* La commande switch :

var d = parseInt(prompt("Entrez un numéro de tiroir : "));

switch(d) {
case 1:
    alert("Ce tiroir contient des gommes")
    break;
case 2:
    .........
    break;
default:
    alert("Le tiroir n'existe pas");
}

*/