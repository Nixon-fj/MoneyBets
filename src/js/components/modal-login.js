let modal = document.getElementById("modal-login");
let btn = document.getElementById("btnlogin");
let btnRegistro = document.getElementById("btnloginR");
let span = document.getElementsByClassName("login__close")[0];

function openModal(){
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
btn.addEventListener('click', openModal);
if(btnRegistro){
    btnRegistro.addEventListener('click', openModal);
}
span.addEventListener('click', closeModal);