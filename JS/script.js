var jogadorEscolha = 0;
var computadorEscolha = 0;
var ganhador = -1;
var jogadorPontucao = 0;
var computadorPontucao = 0;

function jogar(escolha) {

  jogadorEscolha = escolha;

  computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (jogadorEscolha == 1 && computadorEscolha == 1) {
    ganhador = 0;
    
  } else if (jogadorEscolha == 1 && computadorEscolha == 2) {
    ganhador = 2;

  } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
    ganhador = 1;

  } else if (jogadorEscolha == 2 && computadorEscolha == 1) {
    ganhador = 1;

  } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
    ganhador = 0;
    
  } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
    ganhador = 2;

  } else if (jogadorEscolha == 3 && computadorEscolha == 1) {
    ganhador = 2;

  } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
    ganhador = 1;

  } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
    ganhador = 0;

  }

  document
    .getElementById("jogadorEscolha1")
    .classList.remove("selecionado");
  document
    .getElementById("computadorEscolha1" )
    .classList.remove("selecionado");

  document
    .getElementById("jogadorEscolha2" )
    .classList.remove("selecionado");
  document
    .getElementById("computadorEscolha2" )
    .classList.remove("selecionado");

  document
    .getElementById("jogadorEscolha3" )
    .classList.remove("selecionado");
  document
    .getElementById("computadorEscolha3" )
    .classList.remove("selecionado");

  document
    .getElementById("jogadorEscolha" + jogadorEscolha)
    .classList.add("selecionado");
  document
    .getElementById("computadorEscolha" + computadorEscolha)
    .classList.add("selecionado");

  if (ganhador == 0) {
    document.getElementById("mensagens").innerHTML = "Empate";
  }
   else if (ganhador == 1) {
    document.getElementById("mensagens").innerHTML = "Jogador Ganhou";
    jogadorPontucao++;
  } else if (ganhador == 2) {
    document.getElementById("mensagens").innerHTML = "Computador Ganhou";
    computadorPontucao++;
  }

  document.getElementById('jogadorPontos').innerHTML = jogadorPontucao;
  document.getElementById('computadorPontos').innerHTML = computadorPontucao;



}
