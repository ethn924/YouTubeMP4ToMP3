var note = parseInt(prompt("Entrez une note entre 0 et 100 : "));

if (note >= 90 && note <= 100) {
    alert("C'est excellent !")
}

else if (note >= 75 && note <= 89) {
    alert("C'est très bien !")
}

else if (note >= 60 && note <= 74) {
    alert("C'est bien !")
}

else if (note >= 50 && note <= 59) {
    alert("Passable")
}

else if (note < 50) {
    alert("Échec...")
}

