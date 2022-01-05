console.log("bonjour")

const form = document.querySelector("form");
const nouvelleform = form.querySelector(".new");
const typeDeVehicules = document.querySelector("#vehicules");
const main = document.querySelector("main");

const nombreDesJours = document.querySelector("#jours");


// global 
let typeDeVehicule = "moto";
let typeDeCarburant = "";
let typeDeBoiteVitesse = "";






// creation boite vitesse
const boiteVitesse = document.createElement("div")
boiteVitesse.classList.add("boite-vitesse");
const boiteVitesseSpan = document.createElement("span")
boiteVitesseSpan.innerText = "Boite vitesse"
boiteVitesse.appendChild(boiteVitesseSpan);
const boiteVitesseData = document.createElement("span");




// type de vihecule 
const BoiteVitesseDeVehicule = {
    moto: "aucun",
    citadine: "manuelle",
    compact: "manuelle",
    berline: "automatique",
    utilitaire: "manuelle",
    enginDeChantier: "manuelle",
    camion: "automatique",
}

const margeDeVehicule = {
    automatique: 19,
    electrique: 5,
    hybride: 9,
    essence: 14,
    diesel: 21,
}

const prixDeVehicule = {
    moto: 10,
    citadine: 12,
    compact: 14,
    berline: 20,
    utilitaire: 16,
    enginDeChantier: 900,
    camion: 250,
}

const typesDeCarb = {
    moto: ["electrique", "essence"],
    citadine: ["electrique", "hybride", "essence", "diesel"],
    compact: ["hybride", "essence", "diesel"],
    berline: ["hybride", "essence", "diesel"],
    utilitaire: ["diesel"],
    enginDeChantier: ["essence", "diesel"],
    camion: ["diesel"],
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const margeDeBoiteVitesse = (margeDeVehicule[typeDeBoiteVitesse] || 0) / 100;
    const margeDeCarburant = (margeDeVehicule[typeDeCarburant] || 0) / 100
    const nombreDesJours = nombreDesJours.value
    const prixDeVehicule = prixDeVehicule[typeDeVehicule]

    let prix = prixDeVehicule + (prixDeVehicule * margeDeBoiteVitesse) + (prixDeVehicule * margeDeCarburant)
    prix = prix * nombreDesJours;

})

//  type de vehicule
typeDeVehicules.addEventListener("change", () => {
    typeDeVehicule = typeDeVehicules.value
    creerCariburant();
    creerBoiteVitesse();
})

// creation de carburant
const carburantLabel = document.createElement("label");
const carburantTitle = document.createElement("span")
carburantTitle.innerText = "Type de carburant";
carburantLabel.appendChild(carburantTitle)
const typeDeCarburantSelect = document.createElement("select");

typeDeCarburantSelect.addEventListener("change", () => {
    typeDeCarburant = typeDeCarburantSelect.value;
})






function creerCariburant() {
    typeDeCarburantSelect.innerHTML = "";
    const carburantType = typesDeCarb[typeDeVehicule]

    const options = carburantType.map(function (v) {
        return `<option value="${v}">${v}</option>`
    })
    typeDeCarburant = carburantType[0];
    typeDeCarburantSelect.innerHTML = options.join("")

    //  does carburant select exist inside the form
    if (!nouvelleform.contains(typeDeCarburantSelect)) {
        nouvelleform.appendChild(typeDeCarburantSelect)
    };
}




function creerBoiteVitesse() {
    const typeboite = BoiteVitesseDeVehicule[typeDeVehicule];
    console.log(typeboite);
    boiteVitesseData.innerText = typeboite;
    typeDeBoiteVitesse = typeboite;
    if (!nouvelleform.contains(boiteVitesse)) {
        nouvelleform.appendChild(boiteVitesse);
        boiteVitesse.appendChild(boiteVitesseData)
    }
}




