let stars = [];
let backgroundColor = 0;
let quantidade;
let fillColor = 255;
let hyperDrive = false;
let acelerar = false;
let rastro, anel, fogo;
let anelAtivo = false;
let anelAlpha = 255;
let anelX, anelY;
let xwing, xwingX, xwingY, xwingW, xwingH;
let botaoHyperX = 20, botaoHyperY = 20, botaoW = 140, botaoH = 40;
let botaoAcelX = 180, botaoAcelY = 20;

function preload() {
    xwing = loadImage("xwing.png");
    anel = loadImage("anel.png");
    rastro = loadImage("rastro.png");
    fogo = loadImage("fogo.png");
}

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    xwingX = 200;
    xwingY = height * 0.45;
    xwingW = width * 0.2;
    xwingH = height * 0.2;
    quantidade = 100;
    for (let i = 0; i < 100; i++) {
        stars[i] = [];
        stars[i][0] = random(width);
        stars[i][1] = random(height);
        stars[i][2] = random(1, 5);
    }
}

function mousePressed() {
    if (
        mouseX >= botaoHyperX &&
        mouseX <= botaoHyperX + botaoW &&
        mouseY >= botaoHyperY &&
        mouseY <= botaoHyperY + botaoH
    ) {
        hyperDrive = !hyperDrive;
        if (hyperDrive) {
            anelAtivo = true;
            anelX = width;
            anelY = height * 0.2;
            anelAlpha = 255;
            setTimeout (() => {window.location.href = 'A1.html';}, 2000);  
        }
    }
    if (
        mouseX >= botaoAcelX &&
        mouseX <= botaoAcelX + botaoW &&
        mouseY >= botaoAcelY &&
        mouseY <= botaoAcelY + botaoH
    ) {
        acelerar = !acelerar;
        setTimeout (() => {window.location.href = 'B1.html';}, 2000);  
    }
}

function draw() {
    backgroundColor *= 0.9;
    background(backgroundColor, 120);
    stroke(255);
    for (let i = 0; i < quantidade; i++) {
        let velBase = map(stars[i][2], 1, 5, 5, 15);
        let tam = map(stars[i][2], 1, 5, 4, 12);
        let esp = map(stars[i][2], 1, 5, 0.5, 4.5);
        let multi = 1;
        if (acelerar) {
            multi = 4;
            image(fogo, xwingX - xwingW * 0.65, xwingY * 1.04, xwingW * 0.8, xwingH * 0.5);
            image(fogo, xwingX - xwingW * 0.65, xwingY * 1.17, xwingW * 0.8, xwingH * 0.5);
        }
        if (hyperDrive) {
            multi = 12;
            tam *= 4;
            image(rastro, xwingX - xwingW * 0.7, xwingY * 1.04, xwingW * 0.8, xwingH * 0.5);
            image(rastro, xwingX - xwingW * 0.7, xwingY * 1.17, xwingW * 0.8, xwingH * 0.5);
            acelerar = false;
        }
        let vel = velBase * multi;
        strokeWeight(esp);
        line(stars[i][0], stars[i][1], stars[i][0] + tam, stars[i][1]);
        stars[i][0] -= vel;
        if (stars[i][0] < 0) {
            stars[i][0] = random(width, width + 100);
            stars[i][1] = random(height);
        }
    }
    if (anelAtivo) {
        anelX -= 30;
        anelAlpha *= 0.92;
        tint(255, anelAlpha);
        image(anel, anelX, anelY, 250, 400);
        noTint();
        if (anelX < -200 || anelAlpha < 5) {
            anelAtivo = false;
        }
    }
    image(xwing, xwingX, xwingY, xwingW, xwingH);
    textAlign(CENTER, CENTER);
    textSize(14);
    strokeWeight(1);
    fill(hyperDrive ? "#00c3ff" : 50);
    rect(botaoHyperX, botaoHyperY, botaoW, botaoH, 10);
    fill(255);
    text("HyperDrive 🌀", botaoHyperX + botaoW / 2, botaoHyperY + botaoH / 2);
    fill(acelerar ? "#ff5500" : 50);
    rect(botaoAcelX, botaoAcelY, botaoW, botaoH, 10);
    fill(255);
    strokeWeight(1);
    text("Acelerar 🔥", botaoAcelX + botaoW / 2, botaoAcelY + botaoH / 2);
}