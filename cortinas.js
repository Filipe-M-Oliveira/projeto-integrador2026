
window.addEventListener("load", () => {
    const overlay = document.getElementById("cortina-camada");

    if (!overlay) return;

    // começa a abrir a cortina
    setTimeout(() => {
        overlay.classList.add("abrir");
    }, 500);

    // depois que abrir, faz a camada sumir suavemente
    setTimeout(() => {
        overlay.classList.add("sumir");
    }, 2400);
});

