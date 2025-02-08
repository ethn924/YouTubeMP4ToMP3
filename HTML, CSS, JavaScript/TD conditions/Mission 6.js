var numero = parseInt(prompt("Entrez un numéro et je dirai quel jour lui est associé (entre 1 et 7)"));

switch (numero) {
    case 1:
        alert("Cela correspond au Lundi !")
    break;

    case 2:
        alert("Cela correspond au Mardi !");
    break;

    case 3:
        alert("Cela correspond au Mercredi !");
    break;

    case 4:
        alert("Cela correspond au Jeudi !");
    break;

    case 5:
        alert("Cela correspond au Vendredi !");
    break;

    case 6:
        alert("Cela correspond au Samedi !");
    break;

    case 7:
        alert("Cela correspond au Dimanche !");
    break;
    
    default:
        alert("Le numéro n'est pas valide.");
}