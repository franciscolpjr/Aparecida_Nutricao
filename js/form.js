//Botão de adicionao paciente

var botaoAddPaciente = buscaElemento("#adicionar-paciente");

botaoAddPaciente.addEventListener("click",function(event){
	event.preventDefault();
	console.log("Vamos add um novo paciente");

	var formAdd = buscaElemento("#form-add");

	//extrai valores do form
	var paciente = obtemPacienteDoForm(formAdd);

	console.log(paciente.nome);
	console.log(paciente.peso);
	console.log(paciente.altura);
	console.log(paciente.gordura);
	console.log(paciente.imc);

	//Monta TR
	var pacienteTr = montaTr(paciente);

	//Valida Paciente
	var erros = validaPaciente(paciente);
	if(erros.length==0){

		//Limpa Mensagens de erros (erros[0])
		gravaMensagensDeErro(erros);

		//Insere pacienteTr na tabela existente
		var tabela = buscaElemento("#tabela-pacientes");
		tabela.appendChild(pacienteTr);

		//Limpa formulário
		formAdd.reset();	

	}else{
		console.log(erros);
		//Cria e Grava no ul a msg de erro
		gravaMensagensDeErro(erros);
		return; //sai da função
	}
	

});

function buscaElemento(seletor){
	return document.querySelector(seletor);
}

function obtemPacienteDoForm(formAdd){

	var paciente = {
		nome:formAdd.nome.value,
		peso:formAdd.peso.value,
		altura:formAdd.altura.value.replace(/,/g,'.'),
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

function validaPaciente(paciente){
	
	var erros=[];

	if(!validaPeso(paciente.peso)){
		erros.push("Peso Inválido.");
	}

	if(!validaAltura(paciente.altura)){
		erros.push("Altura Inválida.");
	}

	if(paciente.nome.length == 0){
		erros.push("Paciente sem nome.");
	}

	if(paciente.peso.length == 0){
		erros.push("Paciente sem peso.");
	}

	if(paciente.altura.length == 0){
		erros.push("Paciente sem altura.");
	}

	return erros;
	

}

function gravaMensagensDeErro(erros){
	var ul = buscaElemento("#mensagem-erro");
	ul.innerHTML=""; //Limpa as mensagens anteriores

	erros.forEach(function(eachErro){
		var li = document.createElement("li");
		li.textContent=eachErro;
		ul.appendChild(li);
	});

	/*
	for(var i=0;i<erros.length;i++) {
		var li = document.createElement("li");
		li.textContent=erros[i];
		ul.appendChild(li);
	}
	*/
}