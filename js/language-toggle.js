(function () {
    var storageKey = "walk-language";
    var currentLanguage = localStorage.getItem(storageKey) || "nl";

    // Alle teksten staan hier samen, zodat de HTML makkelijk kan wisselen tussen Nederlands en Frans.
    var translations = {
        nl: {
            aboutLink: "Over ons",
            reportLink: "Meld een obstakel",
            heroTitleDesktop: "Maak stoepen in Brussel toegankelijker",
            heroTitleMobile: "De stoep is van iedereen.",
            heroTextDesktop: "Meld snel een obstakel op het voetpad en help Walk Brussels de stad veiliger te maken voor iedereen.",
            heroTextMobileColor: "Zie je een obstakel op het voetpad? Meld het en help Brussel toegankelijk te houden.",
            heroTextMobileBw: "Zie je een obstakel?<br>Meld het hier.",
            heroButton: "Meld een obstakel",
            heroFeatureSafe: "Voor een vlotte en veilige stoep",
            heroFeatureAccessible: "Toegankelijk voor iedereen",
            heroFeatureCity: "Samen maken we Brussel mooier",
            obstacleStep: "1. Type obstakel",
            obstacleTitle: "Wat hindert je op de stoep?",
            photoStep: "2. Foto toevoegen<span class=\"bw-only\">*</span>",
            photoTitle: "Maak een duidelijke foto<br>van het obstakel.",
            photoUploadText: "Klik om een foto<br>te uploaden",
            uploadButton: "Uploaden",
            commentStep: "3. Commentaar <span class=\"color-only\">(optioneel)</span>",
            commentTitle: "Indien nodig, geef extra informatie<br>over het probleem.",
            commentLabel: "Beschrijf kort het probleem",
            commentPlaceholder: "Beschrijf kort het probleem...",
            contactStep: "4. Jouw gegevens <span class=\"color-only\">(optioneel)</span>",
            contactTitle: "Laat je gegevens achter voor<br>opvolging.",
            firstName: "Voornaam",
            lastName: "Achternaam",
            email: "E-mailadres",
            municipality: "Gemeente",
            municipalityPlaceholder: "Kies je gemeente",
            otherObstacles: "Andere obstakels",
            newsletter: "Ik ga akkoord om de nieuwsbrief van Walk.Brussels te ontvangen.",
            submitButton: "Verstuur melding",
            thanksTitle: "Bedankt!",
            thanksText: "Jouw melding helpt<br>Brussel vooruit.",
            homeButton: "Terug naar de<br>homepagina",
            languageButton: "FR"
        },
        fr: {
            aboutLink: "À propos",
            reportLink: "Signaler un obstacle",
            heroTitleDesktop: "Rendre les trottoirs de Bruxelles plus accessibles",
            heroTitleMobile: "Le trottoir est à tout le monde.",
            heroTextDesktop: "Signalez rapidement un obstacle sur le trottoir et aidez Walk Brussels à rendre la ville plus sûre pour tous.",
            heroTextMobileColor: "Vous voyez un obstacle sur le trottoir ? Signalez-le et aidez Bruxelles à rester accessible.",
            heroTextMobileBw: "Vous voyez un obstacle ?<br>Signalez-le ici.",
            heroButton: "Signaler un obstacle",
            heroFeatureSafe: "Pour un trottoir fluide et sûr",
            heroFeatureAccessible: "Accessible à tout le monde",
            heroFeatureCity: "Ensemble, rendons Bruxelles plus belle",
            obstacleStep: "1. Type d'obstacle",
            obstacleTitle: "Qu'est-ce qui gêne sur le trottoir ?",
            photoStep: "2. Ajouter une photo<span class=\"bw-only\">*</span>",
            photoTitle: "Prenez une photo claire<br>de l'obstacle.",
            photoUploadText: "Cliquez pour téléverser<br>une photo",
            uploadButton: "Téléverser",
            commentStep: "3. Commentaire <span class=\"color-only\">(optionnel)</span>",
            commentTitle: "Si nécessaire, ajoutez des informations supplémentaires<br>sur le problème.",
            commentLabel: "Décrivez brièvement le problème",
            commentPlaceholder: "Décrivez brièvement le problème...",
            contactStep: "4. Vos informations <span class=\"color-only\">(optionnel)</span>",
            contactTitle: "Laissez vos coordonnées<br>pour le suivi.",
            firstName: "Prénom",
            lastName: "Nom de famille",
            email: "Adresse e-mail",
            municipality: "Commune",
            municipalityPlaceholder: "Choisissez votre commune",
            otherObstacles: "Autres obstacles",
            newsletter: "J'accepte de recevoir la newsletter de Walk.Brussels.",
            submitButton: "Envoyer le signalement",
            thanksTitle: "Merci !",
            thanksText: "Votre signalement aide<br>Bruxelles à avancer.",
            homeButton: "Retour à l'accueil",
            languageButton: "NL"
        }
    };

    // Vervangt gewone tekst of HTML, afhankelijk van het element.
    function setText(id, value, useHtml) {
        var element = document.getElementById(id);

        if (!element) {
            return;
        }

        if (useHtml) {
            element.innerHTML = value;
        } else {
            element.textContent = value;
        }
    }

    // Vervangt placeholders bij inputvelden en textarea's.
    function setPlaceholder(id, value) {
        var element = document.getElementById(id);

        if (element) {
            element.placeholder = value;
        }
    }

    // Deze functie zet alle teksten op de pagina in de gekozen taal.
    window.updateLanguage = function (lang) {
        var text = translations[lang] || translations.nl;
        var toggle = document.getElementById("language-toggle");

        document.documentElement.lang = lang;

        setText("nav-about", text.aboutLink);
        setText("nav-report", text.reportLink);
        setText("hero-title-desktop", text.heroTitleDesktop);
        setText("hero-title-mobile", text.heroTitleMobile);
        setText("hero-text-desktop", text.heroTextDesktop);
        setText("hero-text-mobile-color", text.heroTextMobileColor);
        setText("hero-text-mobile-bw", text.heroTextMobileBw, true);
        setText("hero-button", text.heroButton);
        setText("hero-feature-safe", text.heroFeatureSafe);
        setText("hero-feature-accessible", text.heroFeatureAccessible);
        setText("hero-feature-city", text.heroFeatureCity);
        setText("obstacle-step-number", text.obstacleStep);
        setText("obstacle-title", text.obstacleTitle);
        setText("photo-step-number", text.photoStep, true);
        setText("photo-title", text.photoTitle, true);
        setText("photo-upload-text", text.photoUploadText, true);
        setText("upload-button", text.uploadButton);
        setText("comment-step-number", text.commentStep, true);
        setText("comment-title", text.commentTitle, true);
        setText("comment-label", text.commentLabel);
        setPlaceholder("comment", text.commentPlaceholder);
        setText("contact-step-number", text.contactStep, true);
        setText("contact-title", text.contactTitle, true);
        setText("first-name-label", text.firstName);
        setText("last-name-label", text.lastName);
        setText("email-label", text.email);
        setText("gemeente-label", text.municipality);
        setText("gemeente-placeholder", text.municipalityPlaceholder);
        setText("other-obstacles-option", text.otherObstacles);
        setText("newsletter-text", text.newsletter);
        setText("submit-button", text.submitButton);
        setText("thanks-title", text.thanksTitle);
        setText("thanks-text", text.thanksText, true);
        setText("home-button", text.homeButton, true);
        setPlaceholder("firstName", text.firstName);
        setPlaceholder("lastName", text.lastName);
        setPlaceholder("email", text.email);

        if (toggle) {
            toggle.textContent = text.languageButton;
            toggle.setAttribute("aria-label", lang === "nl" ? "Schakel naar Frans" : "Passer au néerlandais");
        }

        localStorage.setItem(storageKey, lang);
        currentLanguage = lang;
    };

    document.addEventListener("DOMContentLoaded", function () {
        var navList = document.querySelector(".nav__list");

        if (navList && !document.getElementById("language-toggle")) {
            var item = document.createElement("li");
            var button = document.createElement("button");

            item.className = "nav__item";
            button.id = "language-toggle";
            button.className = "language-toggle";
            button.type = "button";

            // Bij een klik wisselt de taal tussen Nederlands en Frans.
            button.addEventListener("click", function () {
                updateLanguage(currentLanguage === "nl" ? "fr" : "nl");
            });

            item.appendChild(button);
            navList.appendChild(item);
        }

        // Laadt automatisch de laatst gekozen taal bij het openen van de pagina.
        updateLanguage(currentLanguage);
    });
}());
