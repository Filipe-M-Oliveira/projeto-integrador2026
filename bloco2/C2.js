<<<<<<< HEAD
let angulo = 0;
let girando = true;
let cx, cy;
let sol;
let mercurio, venus, terra, marte, jupiter, saturno, urano, netuno;
let terraX, terraY;
let tamanhoTerra = 18;
function preload() {
    sol = loadImage("sol.png");
    mercurio = loadImage("mercurio.png");
    venus = loadImage("venus.png");
    terra = loadImage("terra.png");
    marte = loadImage("marte.png");
    jupiter = loadImage("jupiter.png");
    saturno = loadImage("saturno.png");
    urano = loadImage("urano.png");
    netuno = loadImage("netuno.png");
}
function setup() {
    let canvas = createCanvas(900, 900);
    canvas.parent("canvas-container");
}
function mousePressed() {
    if (
        mouseX >= cx - 50 &&
        mouseX <= cx + 50 &&
        mouseY >= cy - 50 &&
        mouseY <= cy + 50
    ) {
        girando = !girando;
        console.log(girando ? "Girando" : "Parado");
    }
    if (
        mouseX >= terraX - tamanhoTerra / 2 &&
        mouseX <= terraX + tamanhoTerra / 2 &&
        mouseY >= terraY - tamanhoTerra / 2 &&
        mouseY <= terraY + tamanhoTerra / 2
    ) {
        setTimeout (() => {window.location.href = '../index.html';}, 2000);
    }
}

function draw() {
    background(0);
    cx = width / 2;
    cy = height / 2;
    image(sol, cx - 50, cy - 50, 100, 100);
    desenharPlaneta(mercurio, "Mercúrio", 70, 0.04, 12);
    desenharPlaneta(venus, "Vênus", 100, 0.035, 16);
    let pos = desenharPlaneta(terra, "Terra", 140, 0.03, tamanhoTerra);
    terraX = pos.x;
    terraY = pos.y;
    desenharPlaneta(marte, "Marte", 180, 0.025, 15);
    desenharPlaneta(jupiter, "Júpiter", 230, 0.02, 35);
    desenharPlaneta(saturno, "Saturno", 290, 0.018, 30);
    desenharPlaneta(urano, "Urano", 340, 0.015, 25);
    desenharPlaneta(netuno, "Netuno", 390, 0.012, 25);
    if (girando) {
        angulo += 0.02;
    }
}
function desenharPlaneta(img, nome, distancia, velocidade, tamanho) {
    let x = distancia * cos(angulo * velocidade * 50) + cx;
    let y = distancia * sin(angulo * velocidade * 50) + cy;
    image(img, x - tamanho / 2, y - tamanho / 2, tamanho, tamanho);
    fill(255);
    textSize(12);
    text(nome, x - tamanho / 2, y - tamanho / 2 - 10);
    return { x, y };
}
=======
let angulo = 0;
let girando = true;
let cx, cy;
let sol;
let mercurio, venus, terra, marte, jupiter, saturno, urano, netuno;
let terraX, terraY;
let tamanhoTerra = 18;
function preload() {
    sol = loadImage("sol.png");
    mercurio = loadImage("mercurio.png");
    venus = loadImage("venus.png");
    terra = loadImage("terra.png");
    marte = loadImage("marte.png");
    jupiter = loadImage("jupiter.png");
    saturno = loadImage("saturno.png");
    urano = loadImage("urano.png");
    netuno = loadImage("netuno.png");
}
function setup() {
    let canvas = createCanvas(900, 900);
    canvas.parent("canvas-container");
}
function mousePressed() {
    if (
        mouseX >= cx - 50 &&
        mouseX <= cx + 50 &&
        mouseY >= cy - 50 &&
        mouseY <= cy + 50
    ) {
        girando = !girando;
        console.log(girando ? "Girando" : "Parado");
    }
    if (
        mouseX >= terraX - tamanhoTerra / 2 &&
        mouseX <= terraX + tamanhoTerra / 2 &&
        mouseY >= terraY - tamanhoTerra / 2 &&
        mouseY <= terraY + tamanhoTerra / 2
    ) {
        setTimeout (() => {window.location.href = '../index.html';}, 2000);
    }
}

function draw() {
    background(0);
    cx = width / 2;
    cy = height / 2;
    image(sol, cx - 50, cy - 50, 100, 100);
    desenharPlaneta(mercurio, "Mercúrio", 70, 0.04, 12);
    desenharPlaneta(venus, "Vênus", 100, 0.035, 16);
    let pos = desenharPlaneta(terra, "Terra", 140, 0.03, tamanhoTerra);
    terraX = pos.x;
    terraY = pos.y;
    desenharPlaneta(marte, "Marte", 180, 0.025, 15);
    desenharPlaneta(jupiter, "Júpiter", 230, 0.02, 35);
    desenharPlaneta(saturno, "Saturno", 290, 0.018, 30);
    desenharPlaneta(urano, "Urano", 340, 0.015, 25);
    desenharPlaneta(netuno, "Netuno", 390, 0.012, 25);
    if (girando) {
        angulo += 0.02;
    }
}
function desenharPlaneta(img, nome, distancia, velocidade, tamanho) {
    let x = distancia * cos(angulo * velocidade * 50) + cx;
    let y = distancia * sin(angulo * velocidade * 50) + cy;
    image(img, x - tamanho / 2, y - tamanho / 2, tamanho, tamanho);
    fill(255);
    textSize(12);
    text(nome, x - tamanho / 2, y - tamanho / 2 - 10);
    return { x, y };
}
>>>>>>> f1c5fd7c0d4ae39f93cb518e9a5dfd7effa7f862
