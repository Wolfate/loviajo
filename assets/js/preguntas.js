const form = document.querySelector("[data-multi-step]");
const formSteps = [...form.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("activo");
})

if(currentStep < 0){
    currentStep = 0;
    mostrarPreguntaActual();
}

//Crear arreglo de respuestas
var respuestas = [];

//Crear contador para fondo
var contadorBg = 0;

form.addEventListener('click', e=> {

    //Si el click es al btn empezar
    if(e.target.matches(".iniciar-btn")){
        currentStep += 1;
        mostrarPreguntaActual();
    }

    //Si el click fue a una tarjeta
    if(e.target.matches(".answer-card")){
        //Obtener valor de opcion seleccionada
        var resp = e.target.dataset.res;
        //Agregar a arreglo
        respuestas.push(resp);
        console.log(respuestas);
        //Buscar input correspondiente y seleccionarlo
        var selector = "input#"+resp;
        formSteps[currentStep].querySelector(selector).checked = true;
        //Cambiar de pregunta
        currentStep += 1;
        mostrarPreguntaActual();
    }
});

function mostrarPreguntaActual(){

    //Cambiar de pregunta
    formSteps.forEach((step, index) => {
        step.classList.toggle("activo", index === currentStep);
        classBg = index;
    })

    //Cambiar fondo
    var previousClass = "paso-" + contadorBg.toString();
    contadorBg += 1;
    var currClass = "paso-" + contadorBg.toString();

    //Quitar clase anterior, poner actual
    document.querySelector("section.preguntas").classList.remove(previousClass);
    document.querySelector("section.preguntas").classList.add(currClass);

    //Agregar enlace a pagina final
    if(currentStep == (formSteps.length - 1)){
        document.querySelector("#form-end").setAttribute("href","../ofertas/");
    }
}