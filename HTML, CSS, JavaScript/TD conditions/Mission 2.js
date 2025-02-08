var message = prompt("Veuillez saisir la phrase : Bonjour ou Tu vas bien ? : ");

if (message == "Bonjour") {
    var reponse = prompt("Salut, tu vas bien ?");
    if (reponse == "Oui") {
        alert("Je suis content pour toi !");
    }

    else {
        alert("Désolé, finalement je n'ai pas très envie de parler...");
    }
}

else if (message == "Tu vas bien ?") {
    var reponse2 = prompt("Oui et toi ? (Répondre Bien)");
    if (reponse2 == "Bien") {
        alert("Tant mieux ! J'espère que SISR n'est pas compliqué !");
    }

    else {
        alert("Je ne comprends pas ce que tu dis !");
    }
}

else {
    alert("Je comprends pas");
}
