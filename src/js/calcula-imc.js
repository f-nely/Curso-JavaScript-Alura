
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var tdPeso = pacientes[i].querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = pacientes[i].querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = pacientes[i].querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido){
		console.log("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		pacientes[i].style.backgroundColor = "lightcoral";

	}

	if(!alturaEhValida){
		console.log("Altura inválida!");
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida";
		pacientes[i].classList.add("paciente-invalido");
	}

	if(alturaEhValida && pesoEhValido){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
}

titulo.addEventListener("click", function() {
	console.log("Fui clicado de novo!");
});

function calculaImc(peso, altura){
	var imc = 0;

	imc = peso / (altura ** 2);

	return imc.toFixed(2);
}

function validaPeso(peso){
	if (peso >=0 && peso < 1000) {
		return true;
	} else{
		return false;
	}
}

function validaAltura(altura){
	if (altura >=0 && altura <= 3.00) {
		return true;
	} else{
		return false;
	}
}
	






