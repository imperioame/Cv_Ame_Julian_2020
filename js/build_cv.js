/*let circulito = document.createElement('div');
circulito.className = 'circulito';
*/

let img_perfil = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'foto_perfil')[0].getDato() ?? '';
let nombre = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'nombres')[0].getDato() ?? '';
let apellido = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'apellidos')[0].getDato() ?? '';
let domicilio = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'domicilio')[0].getDato() ?? '';
let barrio = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'barrio')[0].getDato() ?? '';
let provincia_estado = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'provincia_estado')[0].getDato() ?? '';
let pais = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'pais')[0].getDato() ?? '';
let codigo_postal = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'codigo_postal')[0].getDato() ?? '';
let correo = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'correo')[0].getDato() ?? '';
let telefono = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'telefono')[0].getDato() ?? '';
let fecha_nacimiento = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'fecha_nacimiento')[0].getDato() ?? '';
let titulo_destacado = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'titulo_destacado')[0].getDato() ?? '';
let profesion_destacada = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'profesion_destacada')[0].getDato() ?? '';
let perfil_extracto = DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() === 'perfil_extracto')[0].getDato() ?? '';


let foto_perfil, foto_perfil_mobile, foto_perfil_ampliada;
foto_perfil = document.createElement('img');
foto_perfil.setAttribute("src", `img/imgs_perfil/${img_perfil}`);
foto_perfil.setAttribute('alt', `Foto perfil de ${nombre} ${apellido}`);
foto_perfil.setAttribute('title', `Foto perfil de ${nombre} ${apellido}`);

foto_perfil_mobile = document.createElement('img');
foto_perfil_mobile.setAttribute("src", `img/imgs_perfil/${img_perfil}`);
foto_perfil_mobile.setAttribute('alt', `Foto perfil de ${nombre} ${apellido}`);
foto_perfil_mobile.setAttribute('title', `Foto perfil de ${nombre} ${apellido}`);

foto_perfil_ampliada = document.createElement('img');
foto_perfil_ampliada.setAttribute("src", `img/imgs_perfil/${img_perfil}`);
foto_perfil_ampliada.setAttribute('alt', `Foto perfil de ${nombre} ${apellido}`);
foto_perfil_ampliada.setAttribute('title', `Foto perfil de ${nombre} ${apellido}`);

document.getElementById('foto_perfil').getElementsByTagName('a')[0].appendChild(foto_perfil);
document.getElementById('foto_perfil_mobile').getElementsByTagName('a')[0].appendChild(foto_perfil_mobile)
document.getElementById('img_perfil_ampliada').appendChild(foto_perfil_ampliada);

let h1 = document.createElement('h1');
h1.innerHTML = `${nombre} ${apellido}`;
document.getElementById('info_principal_header').appendChild(h1);

let h2 = document.createElement('h2');
h2.innerHTML = `${titulo_destacado} <br> ${profesion_destacada}`;
document.getElementById('info_principal_header').appendChild(h2);

let ul = document.createElement('ul');
if (barrio || provincia_estado || pais) {
    let li = document.createElement('li');
    li.innerHTML = `${barrio}`;
    li.innerHTML += provincia_estado ? `, ${provincia_estado}` : '';
    li.innerHTML += pais ? `, ${pais}` : '';
    ul.appendChild(li);
}

if (correo) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = correo;
    a.setAttribute('href', `mailto:${correo}`);
    li.appendChild(a);
    ul.appendChild(li);
}

if (telefono) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = telefono;
    a.setAttribute('href', `tel:${telefono}`);
    li.appendChild(a);
    ul.appendChild(li);
}

document.getElementById('info_principal_header').appendChild(ul);


if (domicilio || fecha_nacimiento) {

    let div = document.createElement('div');
    div.className = 'container_de_titular_con_circulos container_filas flex_al_centro primer_container_titular';
    let circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    let h3 = document.createElement('h3');
    h3.innerHTML = "Detalles";
    div.appendChild(h3);

    circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    document.getElementById('detalles').appendChild(div);
}

if (domicilio) {
    let p = document.createElement('p');
    p.innerHTML = `Domicilio ${domicilio}, ${barrio}<br>CP: ${codigo_postal}`;
    document.getElementById('detalles').appendChild(p);
}
if (fecha_nacimiento) {
    let p = document.createElement('p');
    p.innerHTML = `Fecha de Nacimiento: ${fecha_nacimiento}`;
    document.getElementById('detalles').appendChild(p);
}


if (EDUCACION.length) {

    let div = document.createElement('div');
    div.className = 'container_de_titular_con_circulos container_filas flex_al_centro primer_container_titular';
    let circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    let h3 = document.createElement('h3');
    h3.innerHTML = "Educación";
    div.appendChild(h3);

    circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    document.getElementById('detalles').appendChild(div);
}

for (let i = 0; i < EDUCACION.length; i++) {
    let p = document.createElement('p');
    let strong = document.createElement('strong');
    strong.innerHTML = EDUCACION[i].getTitulo();
    p.appendChild(strong);
    p.innerHTML += `<br> en la ${EDUCACION[i].getInstitucion()}<br>`;

    let small = document.createElement('small');
    small.innerHTML = `${EDUCACION[i].getFechaDesde()} - ${EDUCACION[i].getFechaHasta()}`;
    p.appendChild(small);
    document.getElementById('educacion').appendChild(p);
    p = document.createElement('p');
    p.innerHTML = EDUCACION[i].getDescripcion();
    document.getElementById('educacion').appendChild(p);
}


if (COMPETENCIAS.length) {
    let div = document.createElement('div');
    div.className = 'container_de_titular_con_circulos container_filas flex_al_centro';
    let circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    let h3 = document.createElement('h3');
    h3.innerHTML = "Competencias";
    div.appendChild(h3);

    circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    document.getElementById('competencias').appendChild(div);
}


for (let i = 0; i < COMPETENCIAS.length; i++) {
    let p = document.createElement('p');
    p.innerHTML = COMPETENCIAS[i].getTitulo();
    document.getElementById('competencias').appendChild(p);

    let div_container = document.createElement('div');
    div_container.className = `progress_bar_container`;
    let div_bar = document.createElement('div');
    div_bar.className = `progress_bar progress_${COMPETENCIAS[i].getPorcentaje()}`;
    div_container.appendChild(div_bar);

    document.getElementById('competencias').appendChild(div_container);

}

if (SOFTWARES_USUARIO.length) {
    let div = document.createElement('div');
    div.className = 'container_de_titular_con_circulos container_filas flex_al_centro';
    let circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    let h3 = document.createElement('h3');
    h3.innerHTML = "Software";
    div.appendChild(h3);

    circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    document.getElementById('softwares').appendChild(div);

    let container_software = document.createElement('div');
    container_software.id = 'container_software';
    container_software.className = 'container_columnas text-center';
    document.getElementById('softwares').appendChild(container_software);

}

let col_count = 1;
let fila = document.createElement('div');
fila.className = 'fila';

for (let i = 0; i < SOFTWARES_USUARIO.length; i++) {

    let img = document.createElement('img');
    img.setAttribute("src", `img/logos_software/${SOFTWARES_USUARIO[i].getLogo()}`);
    img.setAttribute('alt', `${SOFTWARES_USUARIO[i].getTitulo()}`);
    img.setAttribute('title', `${SOFTWARES_USUARIO[i].getTitulo()}`);

    fila.appendChild(img);

    col_count >= 4 ? col_count = 1 : col_count++;
    
    if (col_count == 1){
        document.getElementById('container_software').appendChild(fila);
        fila = document.createElement('div');
        fila.className = 'fila';
    }
}

if(fila.innerHTML){
    document.getElementById('container_software').appendChild(fila);
}