let bits = 0;
let somBit;
let botaoAdd;
let botaoPronto;
let botaoReset;
let explodiu = false;
let tempoExplosao = 0;
let alphaExplosao = 255;
let imgExplosao;
let somExplosao;
let corAtual;
let corInicio;
let corFim;
let tCor = 1;

function preload() {
    imgExplosao = loadImage("explosao.png");
    somExplosao = loadSound("explosao.mp3");
    somBit = loadSound("bit.mp3");
}
function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    textSize(40);
    userStartAudio();
    corInicio = color("#6FFF00");
    corFim = color(255);
    corAtual = corFim;
    let centerX = width / 2;
    let centerY = height / 2;
    botaoAdd = createButton("bit++");
    botaoAdd.position(centerX + 380, centerY + 40);
    botaoAdd.mousePressed(() => {
        if (!explodiu) {
            bits++;
            somBit.play();
            tCor = 0;
        }
    });
    botaoPronto = createButton("pronto");
    botaoPronto.position(centerX + 480, centerY + 40);
    botaoPronto.mousePressed(() => {
        if (!explodiu) {
            explodiu = true;
            tempoExplosao = millis();
            alphaExplosao = 255;
            somExplosao.play();
        }
    });
    botaoReset = createButton("reset");
    botaoReset.position(centerX + 580, centerY + 40);
    botaoReset.mousePressed(() => {
        resetarTudo();
    });
}
function resetarTudo() {
    bits = 0;
    explodiu = false;
    alphaExplosao = 255;
    tCor = 1;
}

function draw() {
    background(20);
    let centerX = width / 2 - 80;
    let centerY = height / 2;
    fill(255);
    if (!explodiu) {
        text("bits: " + bits, centerX, centerY + 100);
    } else {
        text("Ah! Faltaram Bits!", centerX - 40, centerY + 100);
    }
    tCor += 0.02;
    tCor = constrain(tCor, 0, 1);
    corAtual = lerpColor(corInicio, corFim, tCor);
    stroke(corAtual);
    strokeWeight(3);
    line(185, 185, 320, 185);
    line(185, 285, 320, 285);
    line(475, 235, 620, 235);
    line(185, 185, 320, 185);
    noStroke();
    fill(255);
    circle(400, 235, 150);
    rect(320, 160, 75, 150);
    fill(corAtual);
    circle(160, 185, 50);
    circle(160, 285, 50);
    circle(640, 235, 50);
    if (explodiu) {
        let tempo = millis() - tempoExplosao;
        if (tempo > 3000) {
            alphaExplosao *= 0.9;
        }
        tint(255, alphaExplosao);
        image(imgExplosao, 0, 0, width, height);
        noTint();
    }
}
function mousePressed() {
    if (mouseX >= 320 && mouseX <= 475 && mouseY >= 160 && mouseY <= 310) {
        setTimeout (() => {window.location.href = '../index.html';}, 2000);
    }
}