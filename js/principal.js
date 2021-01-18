//Alterando o título id="titulo"
var titulo = document.querySelector("#titulo");
titulo.textContent="Aparecida Nutricionista";

//Calculando o IMC do primeiro paciente
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//validando os valores da tela antes de calcular o IMC
var testePeso = true;
if(peso<=0 || peso >= 400){
	console.log("Verificar Peso");
	testePeso=false;
	paciente.querySelector(".info-imc").textContent = "Peso Inválido";
}

var testeAltura=true;
if(altura<=0 || altura>=3.00){
	console.log("Verificar Altura");
	testeAltura=false;
	paciente.querySelector(".info-imc").textContent = "Altura Inválida";
}

if(testePeso && testeAltura){
	var imc = peso / (altura * altura);

	//retorno do IMC calculado na página index
	paciente.querySelector(".info-imc").textContent = imc;
}



//Calculando o IMC de todos os pacientes
//querySelectorAll retorna um array

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){
	
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	//validando os valores da tela antes de calcular o IMC
	var testePeso = true;
	if(peso<=0 || peso >= 400){
		console.log("Verificar Peso");
		testePeso=false;
		paciente.querySelector(".info-imc").textContent = "Peso Inválido";
		//paciente.style.backgroundColor = "lightcoral";
		paciente.classList.add("valor-invalido");
	}

	var testeAltura=true;
	if(altura<=0 || altura>=3.00){
		console.log("Verificar Altura");
		testeAltura=false;
		paciente.querySelector(".info-imc").textContent = "Altura Inválida";
		//paciente.style.backgroundColor = "lightcoral";
		paciente.classList.add("valor-invalido");
	}

	if(testePeso && testeAltura){
		var imc = peso / (altura * altura);

		//retorno do IMC calculado na página index
		paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
	}

}

