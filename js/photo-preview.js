(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var input = document.querySelector(".photo-upload__input");
        var slots = Array.prototype.slice.call(document.querySelectorAll(".step-progress__item"));

        if (!input || slots.length === 0) {
            return;
        }

        var selectedFiles = [];

        function renderPreviews() {
            slots.forEach(function (slot) {
                slot.innerHTML = "";
            });

            selectedFiles.slice(0, slots.length).forEach(function (file, index) {
                var image = document.createElement("img");
                image.className = "step-progress__preview";
                image.alt = "Geselecteerde foto " + (index + 1);
                image.src = URL.createObjectURL(file);

                image.addEventListener("load", function () {
                    URL.revokeObjectURL(image.src);
                }, { once:true });

                slots[index].appendChild(image);
            });
        }

        input.addEventListener("change", function () {
            var files = Array.prototype.slice.call(input.files).filter(function (file) {
                return file.type.indexOf("image/") === 0;
            });

            files.forEach(function (file) {
                if (selectedFiles.length < slots.length) {
                    selectedFiles.push(file);
                }
            });

            renderPreviews();
            input.value = "";
        });
    });
}());
