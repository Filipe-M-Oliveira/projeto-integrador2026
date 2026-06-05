let c1 = "#ff1100";
let c2 = "#ffff00";
let c3 = "#000dff";
let cont = 0;
let desenhoLargura = 380;
let desenhoAltura = 410;
let offsetX;
let offsetY;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    calcularPosicao();
}
function calcularPosicao() {
    offsetX = (width - desenhoLargura) / 2 + 10;
    offsetY = (height - desenhoAltura) / 2 + 10;
}
function mousePressed() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        alternarCores();
    }
    let amareloX = offsetX + 330;
    let amareloY = offsetY + 250;
    let amareloW = 40;
    let amareloH = 50;
    if (
        mouseX >= amareloX &&
        mouseX <= amareloX + amareloW &&
        mouseY >= amareloY &&
        mouseY <= amareloY + amareloH
    ) {
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 2000);
    }
}
function alternarCores() {
    cont++;
    if (cont === 1) {
        c1 = "#00d907";
        c2 = "#000dff";
        c3 = "#ffff00";
    } else if (cont === 2) {
        c1 = "#ff1100";
        c2 = "#ffff00";
        c3 = "#000dff";
        cont = 0;
    }
}
function draw() {
    background(0);
    push();
    translate(offsetX, offsetY);
    strokeWeight(5);
    fill(255);
    rect(-10, -10, 120, 100);
    fill(255);
    rect(-10, 95, 120, 100);
    fill(c3);
    rect(-10, 200, 120, 200);
    fill(c1);
    rect(110, -10, 300, 210);
    fill(255);
    rect(110, 200, 220, 200);
    fill(50);
    rect(330, 200, 40, 50);
    fill(c2);
    rect(330, 250, 40, 50);
    pop();
}