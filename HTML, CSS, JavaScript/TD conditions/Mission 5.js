var age = parseInt(prompt("Bonjour et bienvenue ! Veuillez indiquer votre age : "));
var trajet = prompt("Quel est le type de trajet souhaité ? Aller simple ou Aller retour ? : ");

if (age < 12 && trajet == "Aller simple") {
    alert("Cela fait 5 euros.")
}

else if (age < 12 && trajet == "Aller retour") {
    alert("Cela fait 8 euros.")
}

else if (age >= 12 && age <= 25 && trajet == "Aller simple") {
    alert("Cela fait 10 euros.")
}

else if (age >= 12 && age <= 25 && trajet == "Aller retour") {
    alert("Cela fait 18 euros.")
}

else if (age > 25 && trajet == "Aller simple") {
    alert("Cela fait 15 euros.")
}

else if (age > 25 && trajet == "Aller retour") {
    alert("Cela fait 25 euros.")
}