const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const menuNavegation = document.querySelector(".menu-navegation");
const menuLinks = document.querySelectorAll(".menu-navegation a");

function abrirMenu() {
    header.classList.add("menu-aberto");
    document.body.classList.add("menu-aberto");

    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Fechar menu");

    menuNavegation.setAttribute("aria-hidden", "false");
    menuNavegation.inert = false;
}

function fecharMenu() {
    header.classList.remove("menu-aberto");
    document.body.classList.remove("menu-aberto");

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu");

    menuNavegation.setAttribute("aria-hidden", "true");
    menuNavegation.inert = true;
}

function alternarMenu() {
    const aberto = header.classList.contains("menu-aberto");

    if (aberto) {
        fecharMenu();
    } else {
        abrirMenu();
    }
}

menuNavegation.setAttribute("aria-hidden", "true");
menuNavegation.inert = true;

menuBtn.addEventListener("click", alternarMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        header.classList.contains("menu-aberto")
    ) {
        fecharMenu();
        menuBtn.focus();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        fecharMenu();
    }
});