var tabela = document.querySelectorAll("table");

tabela.forEach(function(paciente){
	paciente.addEventListener("dblclick",function(event){
		console.log("Duplo clique (remove) paciente " + event.target.textContent);
		//remove() é uma função que remove itens HTML
		//event.target é o elemento que foi clicado
		//.parentNode é o pai do elemento (ou seja, clicando no td ele remove o tr)
		var alvoDoEvento = event.target;
		var paiDoAlvo = alvoDoEvento.parentNode;

		paiDoAlvo.classList.add("fadeOut"); //class fadeOut esmaece a linha em 500ms
		setTimeout(function(){
			event.target.parentNode.remove();
		},500); //função setTimeout fala para o browser esperar 500ms (enquanto a linha esmaece) depois executa a função remove.
		
	});
});