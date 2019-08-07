let btnFinalizar = document.getElementById('btn-1');
let aciertos = 0;
let fallos = 0;

btnFinalizar.onclick = function() {
	if (pr1r3.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr2r2.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr3r1.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr4r4.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr5r4.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr6r3.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr7r2.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr8r1.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr9r2.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

	if (pr10r3.checked == true) {
		aciertos+=1;
	}
	else {
		fallos+=1;
	}

/*	if (aciertos==10) {
		document.getElementById('total').innerHTML = "Felicitaciones, eres un genio";
	}
	else if (aciertos>=7) {
		document.getElementById('total').innerHTML = "Felicitaciones, eres una persona muy inteligente";
	}
	else if (aciertos==6) {
		document.getElementById('total').innerHTML = "Felicitaciones, se encuentra por encima del promedio";
	}
	else if (aciertos==5) {
		document.getElementById('total').innerHTML = "Casi lo logras, sigue practicando. ";
	}
	else {
		document.getElementById('total').innerHTML = "Has fallado";
	}*/
	document.getElementById('acierto').innerHTML = aciertos;
	document.getElementById('fallo').innerHTML = fallos;

	aciertos = 0;
	fallos = 0;
}
