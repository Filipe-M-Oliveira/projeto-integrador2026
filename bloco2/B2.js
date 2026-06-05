let chuva = [];
let backgroundColor = 0;
let intensidade = 300;
let cloudColor = 150;
let efeitoAtivo = false;
let relampago;
let somTrovao;
let alphaRelampago = 0;
let medidorX = 20;
let medidorY;

function preload() {
    relampago = loadImage("relampago.png");
    somTrovao = loadSound("trovao.mp3");
}
function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    medidorY = height - 120;
    for (let i = 0; i < 1000; i++) {
        chuva[i] = [];
        chuva[i][0] = random(width);
        chuva[i][1] = random(height);
        chuva[i][2] = random(1, 5);
    }
}
function mousePressed() {
    let clicouMin =
        mouseX >= medidorX &&
        mouseX <= medidorX + 40 &&
        mouseY >= medidorY - 40 &&
        mouseY <= medidorY;
    let clicouMax =
        mouseX >= medidorX + 200 &&
        mouseX <= medidorX + 260 &&
        mouseY >= medidorY - 40 &&
        mouseY <= medidorY;
    if (clicouMin) {
        intensidade -= 100;
        if (intensidade < 0) intensidade = 0;
        return;
    }
    if (clicouMax) {
        intensidade += 100;
        if (intensidade > 1000) intensidade = 1000;
        return;
    }
    backgroundColor = 220;
    cloudColor = 40;
    efeitoAtivo = true;
    alphaRelampago = 255;
    somTrovao.play();
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= 150) {
        setTimeout (() => {window.location.href = '../index.html';}, 2000);
    }
}
function draw() {
    backgroundColor *= 0.97;
    if (efeitoAtivo) {
        cloudColor *= 1.01;
        alphaRelampago *= 0.92;
        if (cloudColor >= 150) {
            cloudColor = 150;
            efeitoAtivo = false;
        }
    }
    background(backgroundColor, 120);
    if (backgroundColor > 100) {
        stroke(0);
    } else {
        stroke(255);
    }
    for (let i = 0; i < intensidade; i++) {
        let velBase = map(chuva[i][2], 1, 5, 5, 15);
        let vel = velBase * map(intensidade, 0, 1000, 0.5, 3);
        let tam = map(chuva[i][2], 1, 5, 4, 12);
        let esp = map(chuva[i][2], 1, 5, 0.5, 2.5);
        strokeWeight(esp);
        line(chuva[i][0], chuva[i][1], chuva[i][0], chuva[i][1] + tam);
        chuva[i][1] += vel;
        if (chuva[i][1] > height) {
            chuva[i][0] = random(width);
            chuva[i][1] = random(-height, 0);
        }
    }
    if (alphaRelampago > 5) {
        tint(255, alphaRelampago);
        image(relampago, width / 2 - 100, 0, 200, height);
        noTint();
    }
    fill(cloudColor);
    stroke(0);
    ellipse(100, 20, 350, 100);
    ellipse(500, 20, 650, 150);
    ellipse(900, 20, 350, 100);
    desenharMedidor();
}
function desenharMedidor() {
    let nivel = floor(map(intensidade, 0, 1000, 0, 10));
    fill(255);
    textSize(16);
    text("min", medidorX, medidorY - 20);
    text("max", medidorX + 200, medidorY - 20);
    for (let i = 0; i < nivel; i++) {
        let emoji = "🟦";
        if (i > 3) emoji = "🟩";
        if (i > 6) emoji = "🟨";
        if (i > 8) emoji = "🟥";
        textSize(20);
        text(emoji, medidorX + i * 25, medidorY);
    }
}