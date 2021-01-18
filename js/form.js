//Botão de adicionao paciente

var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click",function(event){
	event.preventDefault();
	console.log("Vamos add um novo paciente");

	var formAdd = document.querySelector("#form-add");

	var nome = formAdd.nome.value;
	var peso = formAdd.peso.value;
	var altura = formAdd.altura.value;
	var gordura = formAdd.gordura.value;

	console.log(nome);
	console.log(peso);
	console.log(altura);
	console.log(gordura);

	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura.replace(/,/g,'.');;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaIMC(peso,altura);
	console.log(imcTd.textContent);

	nomeTd.classList.add("info-nome");
	pesoTd.classList.add("info-peso");
	alturaTd.classList.add("info-altura");
	gorduraTd.classList.add("info-gordura");
	imcTd.classList.add("info-imc");

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

});