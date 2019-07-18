var preguntas=[
"¿Quien es el actual precidente de argentina?",
"¿En que curso estoy actualmente?",
"¿Como se llama el profesor de proyecto informatico?"
];
var respuestas=[
["Macri gato","yo","tu","spiderman"],
["4to 1era","4to 2da","4to 3era","4to 5ta"],
["Santiago","Agustin","Franco","Ramiro"]
];

var indice_aleatorio=Math.floor(Math.random()*preguntas.length);

var respuestas_posibles= respuestas[indice_aleatorio];

var txt_respuestas="";
for(i in respuestas_posibles){
	
txt_respuestas += '<input type="radio"><label>' + respuestas_posibles[i]+'</label><br>';}	

document.getElementById("pregunta").innerHTML=preguntas[indice_aleatorio];
document.getElementById("respuestas").innerHTML = txt_respuestas;

