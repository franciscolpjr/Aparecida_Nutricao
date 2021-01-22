//Alterando o título id="titulo"
var titulo = document.querySelector("#titulo");
titulo.textContent="Aparecida Nutricionista";


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
		var testePeso = validaPeso(peso);
		if(!testePeso){
			console.log("Verificar Peso");
			testePeso=false;
			paciente.querySelector(".info-imc").textContent = "Peso Inválido";
			//paciente.style.backgroundColor = "lightcoral";
			paciente.classList.add("valor-invalido");
		}

		var testeAltura=validaAltura(altura);
		if(!testeAltura){
			console.log("Verificar Altura");
			testeAltura=false;
			paciente.querySelector(".info-imc").textContent = "Altura Inválida";
			//paciente.style.backgroundColor = "lightcoral";
			paciente.classList.add("valor-invalido");
		}

		if(testePeso && testeAltura){	
			var imc = calculaIMC(peso,altura);
			//retorno do IMC calculado na página index
			paciente.querySelector(".info-imc").textContent = imc;
		}

	}

function validaPeso(peso){
	if(peso>0 && peso <400){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura>0 && altura<3.00){
		return true;
	}else{
		return false;
	}
}

function calculaIMC(peso,altura){
	var imc = 0;
	altura = ajustaNumero(altura);
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function ajustaNumero(numero){
	return numero.replace(/,/g,'.');
}



//adicionando um escutador de eventos

titulo.addEventListener("dblclick",mostraMensagem);

function mostraMensagem(){
	console.log("Olá! Fui clicado.")
}

titulo.addEventListener("click",function(){
	console.log("Chamando uma função anônima.");
});


