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

for (let i = 0; i < EDUCACION.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
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



if (IDIOMAS_DEL_USUARIO.length) {
    let div = document.createElement('div');
    div.className = 'container_de_titular_con_circulos container_filas flex_al_centro';
    let circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    let h3 = document.createElement('h3');
    h3.innerHTML = "Idiomas";
    div.appendChild(h3);

    circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    document.getElementById('idioma_usuario').appendChild(div);
}


for (let i = 0; i < IDIOMAS_DEL_USUARIO.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
    let p = document.createElement('p');
    p.innerHTML = IDIOMAS_DEL_USUARIO[i].getTitulo();
    document.getElementById('idioma_usuario').appendChild(p);

    let div_container = document.createElement('div');
    div_container.className = `progress_bar_container`;
    let div_bar = document.createElement('div');
    div_bar.className = `progress_bar progress_${IDIOMAS_DEL_USUARIO[i].getPorcentaje()}`;
    div_container.appendChild(div_bar);

    document.getElementById('idioma_usuario').appendChild(div_container);

}


if (RRSS_USUARIO.length) {
    let div = document.createElement('div');
    div.className = 'container_de_titular_con_circulos container_filas flex_al_centro';
    let circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    let h3 = document.createElement('h3');
    h3.innerHTML = "RRSS";
    div.appendChild(h3);

    circulito = document.createElement('div');
    circulito.className = 'circulito';
    div.appendChild(circulito);

    document.getElementById('rrss').appendChild(div);

    div =  document.createElement('div');
    div.className = 'container_rrss container_columnas';
    document.getElementById('rrss').appendChild(div);
}

for (let i = 0; i < RRSS_USUARIO.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
    let a = document.createElement('a');
    a.setAttribute('href', `${RRSS_USUARIO[i].getLink()}`);
    a.setAttribute('target', '_blank');
    a.className = 'container_filas';

    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', `img/logos_rrss/${RRSS.filter(e => e.getTitulo() === RRSS_USUARIO[i].getTitulo())[0].getIcono()}`);
    img.setAttribute('alt', RRSS_USUARIO[i].getTitulo());
    img.setAttribute('title', RRSS_USUARIO[i].getTitulo());

    div.appendChild(img);
    a.appendChild(div);
    
    let p = document.createElement('p');
    let strong = document.createElement('strong');
    strong.innerHTML = RRSS_USUARIO[i].getLink().replace('https://','').replace('http://','').replace('www.','');
    strong.innerHTML = strong.innerHTML.substring(0, strong.innerHTML.indexOf('/'));

    p.appendChild(strong);
    
    let rrss_user = RRSS_USUARIO[i].getLink();
    rrss_user = rrss_user.replace('https://','').replace('http://','').replace('www.','');
    rrss_user = rrss_user.substring(rrss_user.lastIndexOf('/'), rrss_user.length).length == 1 ? rrss_user.slice(0,rrss_user.lastIndexOf('/')).substring(rrss_user.indexOf('/')+1, rrss_user.length) : rrss_user.substring(rrss_user.lastIndexOf('/')+1, rrss_user.length);
    
    
    p.innerHTML += `/${rrss_user}`;
    
    a.appendChild(p);
    document.getElementById('rrss').getElementsByClassName('container_rrss')[0].appendChild(a);
}


if (perfil_extracto){
    let p = document.createElement('p');
    p.innerHTML = perfil_extracto;
    p.className = 'border_left';

    document.getElementById('perfil').appendChild(p);
}



for (let i = 0; i < TRABAJOS.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
    let bullet = document.createElement('div');
    bullet.className = 'bullet';
    bullet.innerHTML = ' ';
    document.getElementById('experiencia_laboral').appendChild(bullet);

    let h4 = document.createElement('h4');
    let strong = document.createElement('strong');
    strong.innerHTML = TRABAJOS[i].getPosicion();
    h4.appendChild(strong);
    h4.innerHTML += ` en ${TRABAJOS[i].getEmpleador()}`;
    document.getElementById('experiencia_laboral').appendChild(h4);

    if (TRABAJOS[i].getArea()){
    let small = document.createElement('small');
    small.innerHTML = TRABAJOS[i].getArea() + '<br>';
    document.getElementById('experiencia_laboral').appendChild(small);
    }

    let small = document.createElement('small');
    small.innerHTML = `${TRABAJOS[i].getFechaDesde()} - ${TRABAJOS[i].getFechaHasta()}`;
    document.getElementById('experiencia_laboral').appendChild(small);

    let p = document.createElement('p');
    p.className = 'links';
    p.innerHTML = TRABAJOS[i].getDescripcion();


    if (TRABAJOS[i].getWeb()){
        p.appendChild(document.createElement('br'));
        p.appendChild(document.createElement('br'));
        let a = document.createElement('a');
        a.setAttribute('href', `${TRABAJOS[i].getWeb()}`);
        a.setAttribute('target', '_blank');
        
        a.innerHTML = `Ver en: ${TRABAJOS[i].getWeb()}`;
        p.appendChild(a);
        }

        document.getElementById('experiencia_laboral').appendChild(p);

}


for (let i = 0; i < ACTIVIDADES.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
    let bullet = document.createElement('div');
    bullet.className = 'bullet';
    bullet.innerHTML = ' ';
    document.getElementById('actividades').appendChild(bullet);

    let h4 = document.createElement('h4');
    let strong = document.createElement('strong');
    strong.innerHTML = ACTIVIDADES[i].getTitulo();
    h4.appendChild(strong);
    if (ACTIVIDADES[i].getSubtitulo()){
        h4.innerHTML += ` ${ACTIVIDADES[i].getSubtitulo()}`;
    }
    document.getElementById('actividades').appendChild(h4);

    if (ACTIVIDADES[i].getFecha()){
        let small = document.createElement('small');
        small.innerHTML = ACTIVIDADES[i].getFecha();
        if (ACTIVIDADES[i].getFechaHasta()){
            small.innerHTML += ` - ${ACTIVIDADES[i].getFechaHasta()}`    
        }
        document.getElementById('actividades').appendChild(small);
    }


    let p = document.createElement('p');
    p.className = 'links';
    p.innerHTML = ACTIVIDADES[i].getDescripcion();
    

    if (ACTIVIDADES[i].getTituloUrl().length){
        p.appendChild(document.createElement('br'));
        p.appendChild(document.createElement('br'));
        let a = document.createElement('a');
        a.setAttribute('href', `${ACTIVIDADES[i].getTituloUrl()[1]}`);
        a.setAttribute('target', '_blank');
        
        a.innerHTML = `${ACTIVIDADES[i].getTituloUrl()[0]} ${ACTIVIDADES[i].getTituloUrl()[1]}`;
        p.appendChild(a);
        }
        document.getElementById('actividades').appendChild(p);
}