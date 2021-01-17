//Alterando o título id="titulo"
var titulo = document.querySelector("#titulo");
titulo.textContent="Aparecida Nutricionista";

//Calculando o IMC
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

//retorno do IMC calculado na página index
paciente.querySelector(".info-imc").textContent = imc;

