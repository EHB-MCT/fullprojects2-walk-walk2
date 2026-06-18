const form = document.querySelector("#userForm"); // Pakt het formulier waarin de gebruiker zijn gegevens invult
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const gemeenteSelect = document.querySelector("#gemeente"); // Pakt de gemeente-keuzelijst zodat we de juiste ontvanger kunnen zoeken
const formResult = document.querySelector("#formResult");

const formMessages = {
    nl: {
        receiver: "Deze melding zou gestuurd worden naar: ",
        chooseMunicipality: "Kies eerst een gemeente zodat het juiste e-mailadres gekozen kan worden.",
        saved: "Gegevens opgeslagen.",
        firstName: "Voornaam",
        lastName: "Achternaam",
        userEmail: "E-mail gebruiker",
        selectedMunicipality: "Gekozen gemeente",
        receiverLabel: "Ontvanger"
    },
    fr: {
        receiver: "Ce signalement serait envoyé à : ",
        chooseMunicipality: "Choisissez d'abord une commune pour sélectionner la bonne adresse e-mail.",
        saved: "Informations enregistrées.",
        firstName: "Prénom",
        lastName: "Nom de famille",
        userEmail: "E-mail de l'utilisateur",
        selectedMunicipality: "Commune choisie",
        receiverLabel: "Destinataire"
    }
};

const emailMapping = {
    "1000": "cabinet.a.maes@brucity.be",
    "1030": "cabinet.harze@1030.be",
    "1040": "andre.dubus@etterbeek.brussels",
    "1050": "valerie.libert@elsene.brussels",
    "1060": "cmorenville@stgilles.brussels",
    "1070": "hbenmrah@anderlecht.brussels",
    "1080": "sraiss@molenbeek.irisnet.be",
    "1081": "dlagast@koekelberg.brussels",
    "1082": "schibani@berchem.brussels",
    "1083": "qpaelinck@ganshoren.brussels",
    "1090": "jgesquiere@jette.brussels",
    "1140": "dcordonnier@evere.brussels",
    "1150": "gdallemagne@woluwe1150.be",
    "1160": "mmaelschalk@oudergem.brussels",
    "1170": "mstassart@wb1170.brussels",
    "1180": "jbiermann@ukkel.brussels",
    "1190": "fflamme@vorst.brussels",
    "1200": "g.matgen@woluwe1200.be",
    "1210": "mjabour@sjtn.brussels",
    "walk": "info@walk.brussels",
    "vrijetrottoirslibres": "info@vrijetrottoirslibres.be",
    "autreobstacle": "autre@vrijetrottoirslibres.be"
};

function getFormText() { // Kijkt naar de huidige paginataal voor de meldingen van het formulier
    return formMessages[document.documentElement.lang] || formMessages.nl;
}

const savedData = JSON.parse(localStorage.getItem("userData")); // Zet opgeslagen tekst uit localStorage terug om naar een object

if (savedData !== null) {
    firstNameInput.value = savedData.firstName;
    lastNameInput.value = savedData.lastName;
    emailInput.value = savedData.email;
}

gemeenteSelect.addEventListener("change", function() { // Toont meteen welk e-mailadres bij de gekozen gemeente hoort
    const selectedGemeente = gemeenteSelect.value;
    const receiverEmail = emailMapping[selectedGemeente];
    const text = getFormText();

    if (receiverEmail) {
        formResult.textContent = text.receiver + receiverEmail;
    } else {
        formResult.textContent = "";
    }
});

form.addEventListener("submit", function(event) { // Wacht tot de gebruiker op de verzendknop klikt
    event.preventDefault(); // Voorkomt dat de pagina herlaadt

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const selectedGemeente = gemeenteSelect.value;
    const receiverEmail = emailMapping[selectedGemeente]; // Zoekt het juiste ontvangeradres op basis van de gemeente
    const text = getFormText();

    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    localStorage.setItem("userData", JSON.stringify(userData)); // Zet het object om naar tekst en slaat het op in localStorage

    if (!receiverEmail) {
        formResult.textContent = text.chooseMunicipality;
        return;
    }

    const message = text.firstName + ": " + firstName + "\n" +
        text.lastName + ": " + lastName + "\n" +
        text.userEmail + ": " + email + "\n" +
        text.selectedMunicipality + ": " + selectedGemeente + "\n" +
        text.receiverLabel + ": " + receiverEmail;

    console.log(message); // Toont de verzamelde data in de console om makkelijk te testen
    formResult.textContent = text.saved + "\n" + message;
    window.location.href = "thanks.html"; // Stuurt de gebruiker na het verwerken naar de bedankpagina
});
