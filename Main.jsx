let btnModal = document.getElementById('btn-Modal');
let btnCerrar = document.getElementById('btn-Cerrar');
let modal = document.getElementById('Modal');

btnModal.onclick = function(){
    modal.style.visibility = "visible";
}

btnCerrar.onclick = function(){
    modal.style.visibility = "hidden";
}
