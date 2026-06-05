<<<<<<< HEAD
let col = 7;
let lin = 5;
let matriz = [];
let tamanho = 50;
let indice = 0;
let ultimoTempo = 0;
let intervalo = 2000;
let inicioX;
let inicioY;
let larguraGrade;
let alturaGrade;
let alturaCabecalho = 80;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    let num = 1;
    for (let i = 0; i < lin; i++) {
        matriz[i] = [];
        for (let j = 0; j < col; j++) {
            if (num <= 30) {
                matriz[i][j] = num;
                num++;
            } else {
                matriz[i][j] = "";
            }
        }
    }
    calcularPosicoes();
}
function calcularPosicoes() {
    larguraGrade = col * tamanho;
    alturaGrade = lin * tamanho;
    inicioX = (width - larguraGrade) / 2;
    inicioY = (height - (alturaGrade + alturaCabecalho)) / 2 + alturaCabecalho;
}

function mousePressed() {
    if (
        mouseX >= inicioX &&
        mouseX <= inicioX + tamanho &&
        mouseY >= inicioY &&
        mouseY <= inicioY + tamanho
    ) {
        setTimeout(() => {
            window.location.href = './bloco2/A2.html';
        }, 2000);
    }
    if (
        mouseX >= inicioX + tamanho &&
        mouseX <= inicioX + tamanho * 2 &&
        mouseY >= inicioY + tamanho * 4 &&
        mouseY <= inicioY + tamanho * 5
    ) {
        setTimeout(() => {
            window.location.href = './bloco2/B2.html';
        }, 2000);
    }
}
function draw() {
    background(220);
    if (millis() - ultimoTempo > intervalo) {
        indice++;
        if (indice > 29) {
            indice = 0;
        }
        ultimoTempo = millis();
    }
    fill(220, 0, 0);
    rect(inicioX, inicioY - alturaCabecalho, larguraGrade, alturaCabecalho);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(45);
    text("Junho", inicioX + larguraGrade / 2, inicioY - alturaCabecalho / 2);
    textSize(20);
    for (let i = 0; i < lin; i++) {
        for (let j = 0; j < col; j++) {
            let x = inicioX + j * tamanho;
            let y = inicioY + i * tamanho;
            let pos = i * col + j;
            if (matriz[i][j] === "") {
                fill(235);
            } else if (pos === indice) {
                fill(255, 255, 0);
            } else {
                fill(255);
            }
            stroke(80);
            rect(x, y, tamanho, tamanho);
            fill(0);
            noStroke();
            text(matriz[i][j], x + tamanho / 2, y + tamanho / 2);
        }
    }
=======
let col = 7;
let lin = 5;
let matriz = [];
let tamanho = 50;
let indice = 0;
let ultimoTempo = 0;
let intervalo = 2000;
let inicioX;
let inicioY;
let larguraGrade;
let alturaGrade;
let alturaCabecalho = 80;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    let num = 1;
    for (let i = 0; i < lin; i++) {
        matriz[i] = [];
        for (let j = 0; j < col; j++) {
            if (num <= 30) {
                matriz[i][j] = num;
                num++;
            } else {
                matriz[i][j] = "";
            }
        }
    }
    calcularPosicoes();
}
function calcularPosicoes() {
    larguraGrade = col * tamanho;
    alturaGrade = lin * tamanho;
    inicioX = (width - larguraGrade) / 2;
    inicioY = (height - (alturaGrade + alturaCabecalho)) / 2 + alturaCabecalho;
}

function mousePressed() {
    if (
        mouseX >= inicioX &&
        mouseX <= inicioX + tamanho &&
        mouseY >= inicioY &&
        mouseY <= inicioY + tamanho
    ) {
        setTimeout(() => {
            window.location.href = './bloco2/A2.html';
        }, 2000);
    }
    if (
        mouseX >= inicioX + tamanho &&
        mouseX <= inicioX + tamanho * 2 &&
        mouseY >= inicioY + tamanho * 4 &&
        mouseY <= inicioY + tamanho * 5
    ) {
        setTimeout(() => {
            window.location.href = './bloco2/B2.html';
        }, 2000);
    }
}
function draw() {
    background(220);
    if (millis() - ultimoTempo > intervalo) {
        indice++;
        if (indice > 29) {
            indice = 0;
        }
        ultimoTempo = millis();
    }
    fill(220, 0, 0);
    rect(inicioX, inicioY - alturaCabecalho, larguraGrade, alturaCabecalho);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(45);
    text("Junho", inicioX + larguraGrade / 2, inicioY - alturaCabecalho / 2);
    textSize(20);
    for (let i = 0; i < lin; i++) {
        for (let j = 0; j < col; j++) {
            let x = inicioX + j * tamanho;
            let y = inicioY + i * tamanho;
            let pos = i * col + j;
            if (matriz[i][j] === "") {
                fill(235);
            } else if (pos === indice) {
                fill(255, 255, 0);
            } else {
                fill(255);
            }
            stroke(80);
            rect(x, y, tamanho, tamanho);
            fill(0);
            noStroke();
            text(matriz[i][j], x + tamanho / 2, y + tamanho / 2);
        }
    }
>>>>>>> f1c5fd7c0d4ae39f93cb518e9a5dfd7effa7f862
}