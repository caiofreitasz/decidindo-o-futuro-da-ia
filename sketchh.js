let perguntaAtual = 0;
let respostas = [];

let perguntas = [
  "A IA começa a tomar decisões importantes sozinha.",
  "A IA passa a criar obras de arte melhores que os humanos.",
  "Robôs com IA começam a trabalhar em nosso lugar.",
  "A IA consegue prever doenças antes dos médicos.",
  "As pessoas passam a conversar diariamente com IAs.",
  "A IA começa a controlar partes importantes das cidades.",
  "A IA ajuda a resolver problemas como fome e mudanças climáticas.",
  "Uma IA desenvolve ideias que nenhum humano havia imaginado."
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(8, 10, 20);

  desenharFundo();

  if (perguntaAtual < perguntas.length) {
    telaPergunta();
  } else {
    telaResultado();
  }
}


// ==========================================
// TELA DAS PERGUNTAS
// ==========================================

function telaPergunta() {

  fill(255);
  textStyle(BOLD);
  textSize(38);

  text(
    "O FUTURO DA INTELIGÊNCIA ARTIFICIAL",
    width / 2,
    height * 0.13
  );

  textStyle(NORMAL);
  textSize(18);
  fill(150, 160, 180);

  text(
    "Escolha como você enxerga este futuro.",
    width / 2,
    height * 0.20
  );

  // Número da decisão

  fill(80, 200, 255);
  textSize(16);

  text(
    "DECISÃO " +
    (perguntaAtual + 1) +
    " / " +
    perguntas.length,

    width / 2,
    height * 0.29
  );


  // Pergunta

  fill(255);
  textSize(27);

  text(
    perguntas[perguntaAtual],

    width / 2,
    height * 0.39,

    width * 0.75,
    120
  );


  // Botão assustador

  desenharBotao(
    width / 2 - 190,
    height * 0.63,
    300,
    100,
    "ISSO É",
    "ASSUSTADOR?",
    color(190, 40, 65)
  );


  // Botão maravilhoso

  desenharBotao(
    width / 2 + 190,
    height * 0.63,
    300,
    100,
    "ISSO É",
    "MARAVILHOSO?",
    color(30, 160, 210)
  );


  fill(100);
  textSize(14);

  text(
    "Sua escolha irá influenciar o futuro apresentado no final.",

    width / 2,
    height * 0.82
  );
}


// ==========================================
// DESENHAR BOTÃO
// ==========================================

function desenharBotao(
  x,
  y,
  w,
  h,
  linha1,
  linha2,
  cor
) {

  rectMode(CENTER);


  // Brilho

  noStroke();

  fill(
    red(cor),
    green(cor),
    blue(cor),
    35
  );

  rect(
    x,
    y,
    w + 20,
    h + 20,
    20
  );


  // Botão

  fill(cor);

  stroke(255, 100);
  strokeWeight(2);

  rect(
    x,
    y,
    w,
    h,
    18
  );


  // Texto

  noStroke();

  fill(255);

  textStyle(NORMAL);
  textSize(18);

  text(
    linha1,
    x,
    y - 15
  );

  textStyle(BOLD);
  textSize(24);

  text(
    linha2,
    x,
    y + 17
  );

  textStyle(NORMAL);
}


// ==========================================
// CLIQUE DO MOUSE
// ==========================================

function mousePressed() {

  // Se já terminou o jogo

  if (perguntaAtual >= perguntas.length) {

    if (
      mouseX > width / 2 - 130 &&
      mouseX < width / 2 + 130 &&
      mouseY > height * 0.78 &&
      mouseY < height * 0.87
    ) {

      perguntaAtual = 0;
      respostas = [];
    }

    return;
  }


  // ========================================
  // ALTERNATIVA 1
  // ========================================

  if (
    mouseX > width / 2 - 340 &&
    mouseX < width / 2 - 40 &&

    mouseY > height * 0.63 - 50 &&
    mouseY < height * 0.63 + 50
  ) {

    respostas.push("assustador");

    perguntaAtual++;
  }


  // ========================================
  // ALTERNATIVA 2
  // ========================================

  else if (
    mouseX > width / 2 + 40 &&
    mouseX < width / 2 + 340 &&

    mouseY > height * 0.63 - 50 &&
    mouseY < height * 0.63 + 50
  ) {

    respostas.push("maravilhoso");

    perguntaAtual++;
  }
}


// ==========================================
// RESULTADO
// ==========================================

function telaResultado() {

  let assustador = 0;
  let maravilhoso = 0;


  // Contar respostas

  for (let resposta of respostas) {

    if (resposta === "assustador") {
      assustador++;
    }

    if (resposta === "maravilhoso") {
      maravilhoso++;
    }
  }


  // Fundo

  if (assustador > maravilhoso) {

    background(35, 5, 15);

  } else if (maravilhoso > assustador) {

    background(5, 20, 35);

  } else {

    background(20, 10, 35);
  }


  desenharFundo();


  // Título

  fill(255);

  textStyle(BOLD);
  textSize(40);

  text(
    "SEU FUTURO DA IA",
    width / 2,
    height * 0.15
  );


  // Resultado das escolhas

  textStyle(NORMAL);
  textSize(18);

  fill(150, 160, 180);

  text(
    "Você tomou " +
    assustador +
    " decisões assustadoras e " +
    maravilhoso +
    " decisões maravilhosas.",

    width / 2,
    height * 0.24
  );


  // ========================================
  // FUTURO ASSUSTADOR
  // ========================================

  if (assustador > maravilhoso) {

    fill(255, 70, 90);

    textSize(30);
    textStyle(BOLD);

    text(
      "O FUTURO SERÁ... ASSUSTADOR",
      width / 2,
      height * 0.36
    );


    textStyle(NORMAL);

    fill(220);
    textSize(19);

    text(
      "Neste futuro, a inteligência artificial ultrapassou muitos limites.",
      width / 2,
      height * 0.45
    );

    text(
      "As máquinas tomam decisões cada vez mais importantes",
      width / 2,
      height * 0.51
    );

    text(
      "e a humanidade começa a questionar quem realmente está no controle.",
      width / 2,
      height * 0.57
    );


    fill(255, 100, 120);

    textSize(16);

    text(
      "Mas talvez o medo também seja um alerta para aprendermos a controlar essa tecnologia.",
      width / 2,
      height * 0.65
    );
  }


  // ========================================
  // FUTURO MARAVILHOSO
  // ========================================

  else if (maravilhoso > assustador) {

    fill(80, 220, 255);

    textSize(30);
    textStyle(BOLD);

    text(
      "O FUTURO SERÁ... MARAVILHOSO",
      width / 2,
      height * 0.36
    );


    textStyle(NORMAL);

    fill(220);
    textSize(19);

    text(
      "Neste futuro, a inteligência artificial se tornou uma grande aliada.",
      width / 2,
      height * 0.45
    );

    text(
      "Humanos e máquinas trabalham juntos para resolver problemas",
      width / 2,
      height * 0.51
    );

    text(
      "que antes pareciam impossíveis.",
      width / 2,
      height * 0.57
    );


    fill(100, 220, 255);

    textSize(16);

    text(
      "A tecnologia não substituiu a humanidade — ela ampliou o que podemos fazer.",
      width / 2,
      height * 0.65
    );
  }


  // ========================================
  // EMPATE
  // ========================================

  else {

    fill(180, 150, 255);

    textSize(30);
    textStyle(BOLD);

    text(
      "O FUTURO SERÁ... IMPREVISÍVEL",
      width / 2,
      height * 0.36
    );


    textStyle(NORMAL);

    fill(220);
    textSize(19);

    text(
      "Você ficou exatamente entre o medo e o encantamento.",
      width / 2,
      height * 0.46
    );

    text(
      "Esse futuro pode ser maravilhoso ou assustador.",
      width / 2,
      height * 0.52
    );

    text(
      "Tudo dependerá de como decidirmos usar a inteligência artificial.",
      width / 2,
      height * 0.58
    );
  }


  // ========================================
  // BOTÃO REINICIAR
  // ========================================

  rectMode(CENTER);

  fill(30, 30, 50);

  stroke(150);

  rect(
    width / 2,
    height * 0.82,
    260,
    60,
    15
  );


  noStroke();

  fill(255);

  textSize(17);

  text(
    "CRIAR OUTRO FUTURO",
    width / 2,
    height * 0.82
  );
}


// ==========================================
// FUNDO TECNOLÓGICO
// ==========================================

function desenharFundo() {

  // Grade horizontal

  stroke(30, 50, 80, 80);
  strokeWeight(1);

  for (
    let y = 0;
    y < height;
    y += 40
  ) {

    line(
      0,
      y,
      width,
      y
    );
  }


  // Grade vertical

  for (
    let x = 0;
    x < width;
    x += 40
  ) {

    line(
      x,
      0,
      x,
      height
    );
  }


  // Pontos

  noStroke();

  for (let i = 0; i < 80; i++) {

    let x = (i * 137) % width;
    let y = (i * 83) % height;

    fill(80, 180, 255, 70);

    circle(
      x,
      y,
      2
    );
  }
}


// ==========================================
// REDIMENSIONAR JANELA
// ==========================================

function windowResized() {

  resizeCanvas(
    windowWidth,
    windowHeight
  );
}
