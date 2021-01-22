//fonte com JSON pacientes: http://api-pacientes.herokuapp.com/pacientes

var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click",function(){

	var xhr = new XMLHttpRequest();

	xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load",function(){
		if(xhr.status == 200){
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta); //parse de string para objecto
			//add pacientes na tabela
			pacientes.forEach(function(paciente){
				addPacienteNaTabela(paciente);
			});
			//retira erro da tela
			removeErroAjax();
		}else{
			console.log("Problemas na requisição");
			console.log(xhr.status);
			addErroAjax();
		}
	});		

	xhr.send();
	
});

function addErroAjax(){
	var erroBusca = document.querySelector("#erro-ajax");
	erroBusca.classList.remove("invisible");
}

function removeErroAjax(){
	var erroBusca = document.querySelector("#erro-ajax");
	if(erroBusca.class != "invisible"){
		erroBusca.classList.add("invisible");	
	}
}