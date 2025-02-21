document.addEventListener("DOMContentLoaded", function () {
    // Menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Secciones colapsables
    const sections = document.querySelectorAll(".collapsible");

    sections.forEach(section => {
        section.addEventListener("click", function () {
            sections.forEach(sec => {
                if (sec !== section) {
                    sec.classList.remove("open");
                }
            });

            this.classList.toggle("open");
        });
    });
});
