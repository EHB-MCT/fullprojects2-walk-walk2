const form = document.querySelector("#userForm"); // Pakt het formulier waarin de gebruiker zijn gegevens invult
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");

const savedData = JSON.parse(localStorage.getItem("userData")); // Zet opgeslagen tekst uit localStorage terug om naar een object

if (savedData !== null) {
    firstNameInput.value = savedData.firstName;
    lastNameInput.value = savedData.lastName;
    emailInput.value = savedData.email;
}

form.addEventListener("submit", function(event) { // Wacht tot de gebruiker op de verzendknop klikt
    event.preventDefault(); // Voorkomt dat de pagina meteen herlaadt

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;

    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    localStorage.setItem("userData", JSON.stringify(userData)); // Zet het object om naar tekst en slaat het op in localStorage

    alert("Gegevens opgeslagen!");
    form.reset();
    window.location.href = "thanks.html"; // Stuurt de gebruiker na het opslaan naar de bedankpagina
});
