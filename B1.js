let tesla, lightning, lightningV, x, y, x2, xRay, yRay;
let bgColor = 0, alphaTesla = 255, fadeVolt = false;
let imgW, imgH;
let mostrarLightning = true, clicouTorre = false;
let contador = 0;
let ultimoTempo = 0;
let corRaio = "#696bff";
function preload() {
    tesla = loadImage('teslaCoil.png');
    lightning = loadImage('lightningB.png');
    lightningV = loadImage('lightningV.png')
    som = loadSound('eletric.mp3');
    som2 = loadSound('choque.mp3');
}
function setup() {
    let canvas = createCanvas(700, 600);
    canvas.parent("canvas-container");
    bgColor = 0;
    y = height * 0.7;
    x = width * 0.1;
    x2 = width * 0.7;
    xRay = width * 0.25;
    yRay = height * 0.75;
    xRay2 = width * 0.85;
    imgW = width * 0.3;
    imgH = height * 0.3;
    soundFormats('mp3');
    som.play();
    frameRate(30);
}
function draw() {
    bgColor *= 0.9;
    background(bgColor, 20);
    if (fadeVolt && alphaTesla < 255) {
        alphaTesla += 4;
    }
    tint(255, alphaTesla);
    image(tesla, x2, y, imgW, imgH);
    image(tesla, x, y, imgW, imgH);
    noTint();
    if (mostrarLightning) {
        image(lightning, x * 1.4, y * 0.9, imgW * 0.7, imgH * 0.6);
        image(lightningV, x2 * 1.07, y * 0.85, imgW * 0.7, imgH * 0.8);
    }
    if (millis() - ultimoTempo >= 1000) {
        contador++;
        ultimoTempo = millis();
        if (contador >= 7) {
            som.play();
            contador = 0;
        }
    }
}
function mouseClicked() {
    clicouTorre = false;
    if (mouseX > x && mouseX < x + imgW && mouseY > y && mouseY < y + imgH) {
        corRaio = "#696bff";
        clicouTorre = true;
    } else if (mouseX > x2 && mouseX < x2 + imgW && mouseY > y && mouseY < y + imgH) {
        corRaio = "#00ff66"
        clicouTorre = true;
    }
    if (!clicouTorre) return;
    som2.play();
    alphaTesla = 120;
    setTimeout(() => {
        alphaTesla = 80;
        fadeVolt = true;
    }, 400);
    mostrarLightning = false;
    setTimeout(() => {
        mostrarLightning = true;
    }, 250);
    stroke(corRaio);
    strokeWeight(40);
    line(xRay, yRay, xRay2, yRay);
    stroke(255);
    strokeWeight(20);
    line(xRay, yRay, xRay2, yRay);
    stroke(corRaio);
    strokeWeight(3);
    circle(x + imgW / 2, yRay, 100);
    circle(xRay2, yRay, 100);
    fill(255);
}
function mousePressed() {
    if(mouseX >= 70 && mouseX <= 230 && mouseY >= 540 && mouseY <= 590) {
        setTimeout (() => {window.location.href = './bloco2/C2.html';}, 2000);
    }
    if(mouseX >= width - 170 && mouseX <= width - 10 && mouseY >= 540 && mouseY <= 590) {
        setTimeout (() => {window.location.href = './bloco2/D2.html';}, 2000);
    }
}