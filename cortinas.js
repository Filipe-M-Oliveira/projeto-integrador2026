<<<<<<< HEAD

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

=======

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

>>>>>>> f1c5fd7c0d4ae39f93cb518e9a5dfd7effa7f862
