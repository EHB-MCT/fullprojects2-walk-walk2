(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var grid = document.querySelector(".obstacle-grid");

        if (!grid) {
            return;
        }

        grid.addEventListener("click", function (event) {
            var card = event.target.closest(".obstacle-card");

            if (!card || !grid.contains(card)) {
                return;
            }

            var isSelected = card.classList.toggle("is-selected");
            card.setAttribute("aria-pressed", String(isSelected));
        });
    });
}());
