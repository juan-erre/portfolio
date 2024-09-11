// CARGA UNA FRASE MOTIVACIONAL CADA VEZ QUE SE RECARGA LA PÁGINA
let peticion;

function iniciar () {
				peticion = new XMLHttpRequest();
				peticion.open('GET', "https://api.kanye.rest", true); 
				peticion.send();
				peticion.addEventListener("load", cargada);
}

function cargada () {
				let resultados = '';
				let cds = JSON.parse(peticion.responseText);
				resultados = `<p><b>Frase del momento:</b> ${cds.quote}</p>`;
				document.getElementById("resultados").innerHTML = resultados;
}

window.addEventListener("load", iniciar, false);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ROMPECABEZAS CREADO CON JQUERY

// Instruccion para seleccionar una imagen en miniatura (al hacer click sobre ella, con multitud de posibilidades) y colocarla en la zona de imagen grande seleccionada (al hacer click sobre ella, con multitud de posibilidades) 
// Explicacion: Captura el primer click sobre una imagen de la clase .imagenes_pequeñas, nos guarda en una variable su src y despues nos captura el segundo click sobre una imagen de la clase .imagen_grande. Aplica un efecto para quitar la imagen que hay + cambia el valor src segun el valor de la variable + aparece la nueva imagen con un efecto
$("body").on("click", ".imagen_pequeña", function(){
    let seleccionada = $(this).attr("src");
    $("body").on("click", ".imagen_grande", function() { 
	    $(this).fadeOut(500, function(){
        	$(this).attr("src", seleccionada).fadeIn(500);
    	});
	});
});