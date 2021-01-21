var campoFiltro = document.querySelector("#filtrar-paciente");

campoFiltro.addEventListener("input",function(){
	console.log(this.value);

	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0){
		//faz a comparação se tiver algo digitado
		for(var i=0;i<pacientes.length;i++){
			var trPaciente = pacientes[i];
			var Nome = trPaciente.querySelector(".info-nome").textContent; //pega o nome do paciente
			//Teste por expressao regular
			var expressao = new RegExp(this.value,"i"); //"i"=case insensitive
			//expresao.test(Nome)=testa se no Nome existe o conteudo do filtro
			if(!expressao.test(Nome)){
				console.log("Paciente diferente do filtro.");
				trPaciente.classList.add("invisible");
			}else{
				console.log("Paciente igual ao filtro.");
				trPaciente.classList.remove("invisible");
			}
		}	
	}else{
		for(var i=0;i<pacientes.length;i++){
			var trPaciente = pacientes[i];
			trPaciente.classList.remove("invisible");
		}
	}
	
		
});