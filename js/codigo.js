var img_perfil_desktop = document.getElementById('foto_perfil');
var img_perfil_mobile = document.getElementById('foto_perfil_mobile');
var modal = document.getElementById('contenedor_perfil_ampliado');
var cerrar_modal = document.getElementById('boton_cerrar');

img_perfil_desktop.onclick = function () {
    modal.style.display = "block";
}

img_perfil_mobile.onclick = function () {
    modal.style.display = "block";
}

modal.onclick = function () {
    modal.style.display = "none";
}

/*
let progress_bar = document.getElementsByClassName('progress_bar');

console.log(progress_bar);
console.log(typeof progress_bar);


for(var i = 0; i < progress_bar.length; i++ ){
    progress_bar[i].animate([
        // keyframes
        {
            width: 0
        },
        {
            width: 100
        }
    ], {
        // timing options
        duration: 1000,
        iterations: 1
    });
}
*/
