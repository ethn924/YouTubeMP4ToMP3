var message = prompt("Veuillez saisir une phrase : Bonjour ou Tu vas bien ? : ");

// Comme sur Python, ce sont des conditions. Juste à retenir les commentaires du fichier JavaSite.js

if (message == "Bonjour") {
    alert("Bonjour à toi !");
}

else if (message == "Tu vas bien ?") {
    alert("Très bien, merci, et toi ?"); 
}

else {
    alert("Désolé, je ne suis pas assez développé pour répondre à ça...");
}