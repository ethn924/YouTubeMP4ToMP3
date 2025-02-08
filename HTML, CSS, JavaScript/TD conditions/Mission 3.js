var message = prompt("Veuillez saisir la phrase : Bonjour, Tu vas bien ?, Quel temps fait-il aujourd'hui ?, Je m'appelle Arbre, J'ai eu 20 cette matinée ou Quelle belle journée ! : ");

if (message == "Bonjour") {
    var reponse = prompt("Salut, tu vas bien ?");
    if (reponse == "Oui") {
        alert("Je suis content pour toi !");
    }

    else {
        alert("Désolé, finalement je n'ai pas très envie de parler...");
    }
}

if (message == "Tu vas bien ?") {
    var reponse2 = prompt("Oui et toi ? (Répondre Bien)");
    if (reponse2 == "Bien") {
        alert("Tant mieux ! J'espère que SISR n'est pas compliqué !");
    }

    else {
        alert("Je ne comprends pas ce que tu dis !");
    }
}

if (message == "Quel temps fait-il aujourd'hui ?") {
    var reponse3 = prompt("Tu penses vraiment que je suis capable de savoir ? Répondre Oui");
    if (reponse3 == "Oui") {
        alert("N'importe quoi, je ne veux pas voler tes données de localisation !");
    }

    else {
        alert("Je ne comprends que le français !");
    }
}

if (message == "Je m'appelle Arbre") {
    reponse4 = prompt("Tu dis la vérité ? Oui ou Non : ")
    if (reponse4 == "Oui") {
        alert("Je ne juge pas mais ce prénom ne me plaît pas !");
    }
    
    else {
        alert("Je me disais bien que ce n'est pas un prénom...");
    }
}

if (message == "J'ai eu 20 cette matinée") {
    var reponse5 = prompt("Ah bon ? Bien joué, dans quelle matière ? J'espère que c'est en informatique ! Oui ou Non : ");
    if (reponse5 == "Oui") {
        alert("Bien joué, j'espère que tu deviendras un grand informaticien plus tard !");
    }

    else {
        alert("C'est bien, je voulais juste que ça soit en informatique...");
    }
}

if (message == "Quelle belle journée !") {
    var reponse6 = prompt("Je ne peux pas savoir le temps, mais tant mieux pour toi ! Répondre Merci")
    if (reponse6 == "Merci") {
        alert("De rien !");
    }

    else {
        alert("Je ne comprends pas je ne suis pas assez développé !");
    }

}



else {
    alert("Je comprends pas");
}
