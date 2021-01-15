const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const btn = document.getElementById("btn_solicitar");
const resultado = document.querySelector(".resultado");


btn.addEventListener("click",(evento)=>{
	evento.preventDefault();
	let error = validarCampos();
	if (error[0]) {
		resultado.innerHTML = error[1];
		resultado.classList.add("red")
	} else {
		resultado.innerHTML = "solicitud enviada correctamente";
		resultado.classList.add("green");
		resultado.classList.remove("red");
	}

})

const validarCampos = ()=>{
	let error = [];
	if (nombre.value.length < 5  ||  nombre.value.length > 40){
		error[0] = true;
		error[1] = "El nombre no puede tener menos de 5 caracteres o mas de 40";
		return error;
	}else if (email.value.length < 5  ||
		 	 email.value.length > 40 ||
		 	 email.value.indexOf("@") == -1 ||
		 	 email.value.indexOf(".") == -1){
		error[0] = true;
		error[1] = "El email es invalido";
		return error;
		}else if (materia.value < 4 || materia.value > 40){
			error[0] = true;
			error[1] = "La materia no existe"
		}
	

	error[0] = false;
	return error;
}