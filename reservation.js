console.log("bonjour")

const form = document.querySelector("form");
const formNew = form.querySelector(".new");
const typeDeVehicules = document.querySelector("#vehicules");
const main = document.querySelector("main");

const nombreDesJours = document.querySelector("#jours");


// global state
let typeDeVehicule = "moto";
let typeDeCarburant = "";
let typeDeBoiteVitesse = "";



//  creation result popup
const popup = document.createElement("div");


// creation boite vitesse
const boiteVitesse = document.createElement("div")
const boiteVitesseSpan = document.createElement("span")
boiteVitesseSpan.innerText = "Boite vitesse"
boiteVitesse.appendChild(boiteVitesseSpan);
const boiteVitesseData = document.createElement("span");




// type de vihecule 
const vehiculesBoiteVitesse = {
    moto: "aucun",
    citadine: "manuelle",
    compact: "manuelle",
    berline: "automatique",
    utilitaire: "manuelle",
    enginDeChantier: "manuelle",
    camion: "automatique",
}

const vehiculeBonus = {
    automatique: 19,
    electrique: 5,
    hybride: 9,
    essence: 14,
    diesel: 21,
}

const vehiculesPrix = {
    moto: 10,
    citadine: 12,
    compact: 14,
    berline: 20,
    utilitaire: 16,
    enginDeChantier: 900,
    camion: 250,
}

const carbTypes = {
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
    const boiteVitessePercentage = (vehiculeBonus[typeDeBoiteVitesse] || 0) / 100;
    const carburantPercentage = (vehiculeBonus[typeDeCarburant] || 0) / 100
    const nmbrDeJour = nombreDesJours.value
    const vehiculePrix = vehiculesPrix[typeDeVehicule]

    let prix = vehiculePrix + (vehiculePrix * boiteVitessePercentage) + (vehiculePrix * carburantPercentage)
    prix = prix * nmbrDeJour;
    creerResultPopup(nmbrDeJour, prix, carburantPercentage, boiteVitessePercentage);
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
const carbTypesSelect = document.createElement("select");

carbTypesSelect.addEventListener("change", () => {
    typeDeCarburant = carbTypesSelect.value;
})






function creerCariburant() {
    carbTypesSelect.innerHTML = "";
    const carbType = carbTypes[typeDeVehicule]

    const options = carbType.map(function (v) {
        return `<option value="${v}">${v}</option>`
    })
    typeDeCarburant = carbType[0];
    carbTypesSelect.innerHTML = options.join("")

    //  does carburant select exist inside the form
    if (!formNew.contains(carbTypesSelect)) {
        formNew.appendChild(carbTypesSelect)
    };
}




function creerBoiteVitesse() {
    const tdb = vehiculesBoiteVitesse[typeDeVehicule];
    console.log(tdb);
    boiteVitesseData.innerText = tdb;
    typeDeBoiteVitesse = tdb;
    if (!formNew.contains(boiteVitesse)) {
        formNew.appendChild(boiteVitesse);
        boiteVitesse.appendChild(boiteVitesseData)
    }
}

const btn = document.createElement("button")
btn.innerHTML = `<i class="fas fa-times"></i>`
btn.addEventListener("click", () => {
    popup.remove(popup)
})


function creerResultPopup(nombreDeJour, prix, carbPercentage, bvPercentage) {

    popup.innerHTML = `
    <p>Votre vehicule reserve</p>
    <p>type de vehicule: ${typeDeVehicule}</p>
    <p>type de boite vitesse: ${typeDeBoiteVitesse} (${bvPercentage}%)</p>
    <p>type de carburant: ${typeDeCarburant} (${carbPercentage})</p>
    <p>le prix est: ${prix}£ pour ${nombreDeJour} jours</p>
    `

    popup.prepend(btn);
    main.appendChild(popup)


}