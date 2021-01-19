//Botão de adicionao paciente

var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click",function(event){
	event.preventDefault();
	console.log("Vamos add um novo paciente");

	var formAdd = document.querySelector("#form-add");

	//extrai valores do form
	var paciente = obtemPacienteDoForm(formAdd);

	console.log(paciente.nome);
	console.log(paciente.peso);
	console.log(paciente.altura);
	console.log(paciente.gordura);
	console.log(paciente.imc);

	//Monta TR
	var pacienteTr = montaTr(paciente);

	//Insere pacienteTr na tabela existente
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	//Limpa formulário
	formAdd.reset();

});

function obtemPacienteDoForm(formAdd){

	var paciente = {
		nome:formAdd.nome.value,
		peso:formAdd.peso.value,
		altura:formAdd.altura.value,
		gordura:formAdd.gordura.value,
		imc:calculaIMC(formAdd.peso.value,formAdd.altura.value),
	}
	return paciente;
}

function montaTr(paciente){
	
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	var nomeTd = montaTd(paciente.nome,"info-nome");
	var pesoTd = montaTd(paciente.peso,"info-peso");
	var alturaTd = montaTd(paciente.altura.replace(/,/g,'.'),"info-altura");
	var gorduraTd = montaTd(paciente.gordura,"info-gordura");
	var imcTd = montaTd(paciente.imc,"info-imc");

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}