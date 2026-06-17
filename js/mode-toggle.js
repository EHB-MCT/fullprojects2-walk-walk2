(function () {
    var storageKey = "walk-color-mode";
    var root = document.documentElement;

    if (localStorage.getItem(storageKey) === "bw") { // Controleert of de gebruiker eerder zwart-witmodus koos
        root.classList.add("bw-mode");
    }

    // Zet de juiste mode aan en bewaart die keuze voor later.
    function setMode(isBlackWhite) {
        root.classList.toggle("bw-mode", isBlackWhite);
        localStorage.setItem(storageKey, isBlackWhite ? "bw" : "color"); // Bewaart de gekozen mode in localStorage

        var toggle = document.querySelector(".mode-toggle");
        if (toggle) {
            toggle.setAttribute("aria-pressed", String(isBlackWhite));
            toggle.textContent = isBlackWhite ? "Kleur" : "Zwart-wit";
        }
    }

    document.addEventListener("DOMContentLoaded", function () { // Wacht tot de HTML klaar is voor JavaScript elementen toevoegt
        var nav = document.querySelector(".nav");
        var navList = document.querySelector(".nav__list");

        if (!nav || !navList) {
            return;
        }

        navList.id = navList.id || "main-menu";

        var menuButton = document.createElement("button"); // Maakt de hamburgerknop via JavaScript aan
        menuButton.className = "nav__menu-button";
        menuButton.type = "button";
        menuButton.setAttribute("aria-controls", navList.id);
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Menu openen");
        menuButton.innerHTML = "<span></span><span></span><span></span>";

        menuButton.addEventListener("click", function () { // Opent of sluit het mobiele menu wanneer je klikt
            var isOpen = nav.classList.toggle("nav--open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Menu sluiten" : "Menu openen");
        });

        nav.appendChild(menuButton);

        var item = document.createElement("li");
        item.className = "nav__item";

        var button = document.createElement("button");
        button.className = "mode-toggle";
        button.type = "button";
        button.setAttribute("aria-pressed", String(root.classList.contains("bw-mode")));
        button.textContent = root.classList.contains("bw-mode") ? "Kleur" : "Zwart-wit";

        button.addEventListener("click", function () { // Wisselt tussen kleur en zwart-witmodus
            setMode(!root.classList.contains("bw-mode"));
        });

        item.appendChild(button);
        navList.appendChild(item);
    });
}());
