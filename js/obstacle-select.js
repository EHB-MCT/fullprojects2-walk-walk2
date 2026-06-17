(function () {
    document.addEventListener("DOMContentLoaded", function () { // Wacht tot de obstakelkaartjes in de HTML staan
        var grid = document.querySelector(".obstacle-grid");

        if (!grid) {
            return;
        }

        grid.addEventListener("click", function (event) { // Luistert naar klikken op de obstakelgrid
            var card = event.target.closest(".obstacle-card");

            if (!card || !grid.contains(card)) {
                return;
            }

            var isSelected = card.classList.toggle("is-selected"); // Zet de geselecteerde stijl aan of uit
            card.setAttribute("aria-pressed", String(isSelected));
        });
    });
}());
