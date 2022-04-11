/*let circulito = document.createElement('div');
circulito.className = 'circulito';
*/

console.warn('Holis :)');
console.log('Bienvenido a mi CV, lo hice yo, Julián Amé, a mano (sin frameworks), con carga de contenido dinámica.');
console.log('Si estás interesado en conocer cómo lo hice, podes chequear el repo de git:');
console.warn('https://github.com/imperioame/Cv_Ame_Julian_2020');



let template_cv = 'original';



function NombreDeSeccionCorrespondiente(seccion, lenguaje, template_cv){
    return SECCIONES_CV.filter(e => e.getPosicion_en_cv() == seccion && (e.getIdioma() == lenguaje || e.getIdioma() == '') && e.getTemplate_cv() == template_cv)[0].getTitulo();
}

function DatoPersonal(tipo_de_dato, lenguaje){
    return DATOS_PERSONALES.filter(e => e.getTipoDatoPersonal() == tipo_de_dato && (e.getIdioma() == lenguaje || e.getIdioma() == ''))[0].getDato() ?? '';
}

function deleteAll(){
    document.getElementById('idioma_cv').innerHTML = '';
    document.getElementById('idioma_cv_mobile').innerHTML = '';
    document.getElementsByTagName('head')[0].getElementsByTagName('meta')[document.getElementsByTagName('meta').length -1].remove();
    document.getElementById('foto_perfil').getElementsByTagName('a')[0].innerHTML = '';
    document.getElementById('foto_perfil_mobile').getElementsByTagName('a')[0].innerHTML = '';
    document.getElementById('img_perfil_ampliada').innerHTML = '';
    document.getElementById('info_principal_header').innerHTML = '';
    document.getElementById('info_principal_mobile').innerHTML = '';
    document.getElementById('detalles').innerHTML = '';
    document.getElementById('educacion').innerHTML = '';
    document.getElementById('competencias').innerHTML = '';
    document.getElementById('softwares').innerHTML = '';
    document.getElementById('idioma_usuario').innerHTML = '';
    document.getElementById('rrss').innerHTML = '';
    document.getElementById('pdf').innerHTML = '';
    document.getElementById('pdf_mobile').innerHTML = '';
    
    if(document.getElementById('perfil').getElementsByTagName('div')[0].getElementsByTagName('h3').length > 0) document.getElementById('perfil').getElementsByTagName('div')[0].getElementsByTagName('h3')[0].remove();
    if(document.getElementById('perfil').getElementsByTagName('p').length > 0) document.getElementById('perfil').getElementsByTagName('p')[0].remove();
    
    if(document.getElementById('experiencia_laboral').getElementsByTagName('div')[0].getElementsByTagName('h3').length > 0) document.getElementById('experiencia_laboral').getElementsByTagName('div')[0].getElementsByTagName('h3')[0].remove();
    if(document.getElementById('experiencia_laboral').getElementsByTagName('div').length > 1) document.getElementById('experiencia_laboral').getElementsByTagName('div')[1].innerHTML = '';
    
    if(document.getElementById('actividades').getElementsByTagName('div')[0].getElementsByTagName('h3').length > 0) document.getElementById('actividades').getElementsByTagName('div')[0].getElementsByTagName('h3')[0].remove();
    if(document.getElementById('actividades').getElementsByTagName('div').length > 1) document.getElementById('actividades').getElementsByTagName('div')[1].innerHTML = '';
    document.getElementById('ultima_actualizacion').innerHTML = '';
}



function build(lenguaje_solicitado){
    deleteAll();

    lenguaje = lenguaje_solicitado;
    document.documentElement.setAttribute("lang", lenguaje.slice(0, -1));

    for(let i = 0; i < IDIOMAS_DISPONIBLES_EN_SITIO.length; i++){
        let a = document.createElement('a');

        let img = document.createElement('img');
        img.setAttribute("src", `img/icos/idiomas/${IDIOMAS_DISPONIBLES_EN_SITIO[i].getIcono()}`);
        img.setAttribute('alt', `Idioma ${IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma_completo()}`);
        img.setAttribute('title', `Idioma ${IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma_completo()}`);
        a.appendChild(img);

        a.innerHTML += `<br>${IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma_completo()}`;
        
        let a_mobile = a.cloneNode(true);

        if(IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma() == lenguaje_solicitado){
            a.addEventListener("click", function(event) { 
                event.preventDefault();
            });
            a_mobile.addEventListener("click", function(event) { 
                event.preventDefault();
            });
        }else{
            a.setAttribute('href', `#${IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma()}`);
            a_mobile.setAttribute('href', `#${IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma()}`);
            a.addEventListener("click", function(event) { 
                event.preventDefault();
                build(IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma());
            });
            a_mobile.addEventListener("click", function(event) { 
                event.preventDefault();
                build(IDIOMAS_DISPONIBLES_EN_SITIO[i].getIdioma());
            });
        }
        

        document.getElementById('idioma_cv').appendChild(a);
        document.getElementById('idioma_cv_mobile').appendChild(a_mobile);
    }




    let img_perfil = DatoPersonal('foto_perfil', lenguaje);
    let nombre = DatoPersonal('nombres', lenguaje);
    let apellido = DatoPersonal('apellidos', lenguaje);
    let domicilio = DatoPersonal('domicilio', lenguaje);
    let barrio = DatoPersonal('barrio', lenguaje);
    let provincia_estado = DatoPersonal('provincia_estado', lenguaje);
    let pais = DatoPersonal('pais', lenguaje);
    let codigo_postal = DatoPersonal('codigo_postal', lenguaje);  
    let correo = DatoPersonal('correo', lenguaje);
    let telefono = DatoPersonal('telefono', lenguaje);
    let fecha_nacimiento = DatoPersonal('fecha_nacimiento', lenguaje);
    let titulo_destacado = DatoPersonal('titulo_destacado', lenguaje);
    let profesion_destacada = DatoPersonal('profesion_destacada', lenguaje);
    let perfil_extracto = DatoPersonal('perfil_extracto', lenguaje);

    
    
    document.title = `CV ${nombre} ${apellido}`;
    var meta = document.createElement('meta');
    meta.name = "description";
    meta.content = `Curriculum Vitae - ${nombre} ${apellido} - ${titulo_destacado}, ${profesion_destacada}`;
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    let foto_perfil;
    foto_perfil = document.createElement('img');
    foto_perfil.setAttribute("src", `img/imgs_perfil/${img_perfil}`);
    foto_perfil.setAttribute('alt', `Foto perfil de ${nombre} ${apellido}`);
    foto_perfil.setAttribute('title', `Foto perfil de ${nombre} ${apellido}`);
    
    document.getElementById('foto_perfil').getElementsByTagName('a')[0].appendChild(foto_perfil);
    document.getElementById('foto_perfil_mobile').getElementsByTagName('a')[0].appendChild(foto_perfil.cloneNode(true))
    document.getElementById('img_perfil_ampliada').appendChild(foto_perfil.cloneNode(true));
    
    let h1 = document.createElement('h1');
    h1.innerHTML = `${nombre} ${apellido}`;
    document.getElementById('info_principal_header').appendChild(h1);
    document.getElementById('info_principal_mobile').appendChild(h1.cloneNode(true));
    
    let h2 = document.createElement('h2');
    h2.innerHTML = `${titulo_destacado} <br> ${profesion_destacada}`;
    document.getElementById('info_principal_header').appendChild(h2);
    document.getElementById('info_principal_mobile').appendChild(h2.cloneNode(true));
    
    
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
    document.getElementById('info_principal_mobile').appendChild(ul.cloneNode(true));
    
    
    if (domicilio || fecha_nacimiento) {
    
        let div = document.createElement('div');
        div.className = 'container_de_titular_con_circulos container_filas flex_al_centro primer_container_titular';
        let circulito = document.createElement('div');
        circulito.className = 'circulito';
        div.appendChild(circulito);
    
        let h3 = document.createElement('h3');
        h3.innerHTML = NombreDeSeccionCorrespondiente('detalles', lenguaje, template_cv);
        div.appendChild(h3);
    
        circulito = document.createElement('div');
        circulito.className = 'circulito';
        div.appendChild(circulito);
    
        document.getElementById('detalles').appendChild(div);
    }
    
    if (domicilio) {
        let p = document.createElement('p');
        p.innerHTML = `${lenguaje == 'esp' ? 'Domicilio' : 'Address'} ${domicilio}, ${barrio}<br>CP: ${codigo_postal}`;
        document.getElementById('detalles').appendChild(p);
    }
    if (fecha_nacimiento) {
        let p = document.createElement('p');
        p.innerHTML = `${lenguaje == 'esp' ? 'Fecha de Nacimiento:' : 'Born in:'} ${fecha_nacimiento}`;
        document.getElementById('detalles').appendChild(p);
    }
    
    let educacion_lenguaje_actual = EDUCACION.filter(e => e.getIdioma() == lenguaje || e.getIdioma() == '');
    if (educacion_lenguaje_actual.length) {
    
        let div = document.createElement('div');
        div.className = 'container_de_titular_con_circulos container_filas flex_al_centro primer_container_titular';
        let circulito = document.createElement('div');
        circulito.className = 'circulito';
        div.appendChild(circulito);
    
        let h3 = document.createElement('h3');
        h3.innerHTML = NombreDeSeccionCorrespondiente('educacion', lenguaje, template_cv);
        div.appendChild(h3);
    
        circulito = document.createElement('div');
        circulito.className = 'circulito';
        div.appendChild(circulito);
    
        document.getElementById('educacion').appendChild(div);

    }

    for (let i = 0; i < educacion_lenguaje_actual.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
        let p = document.createElement('p');
        let strong = document.createElement('strong');
        strong.innerHTML = educacion_lenguaje_actual[i].getTitulo();
        p.appendChild(strong);
        p.innerHTML += `<br>${educacion_lenguaje_actual[i].getInstitucion()}<br>`;
    
        let small = document.createElement('small');
        small.innerHTML = `${educacion_lenguaje_actual[i].getFechaDesde()} - ${educacion_lenguaje_actual[i].getFechaHasta()}`;
        p.appendChild(small);
        document.getElementById('educacion').appendChild(p);
        p = document.createElement('p');
        p.innerHTML = educacion_lenguaje_actual[i].getDescripcion();
        document.getElementById('educacion').appendChild(p);
    }
    
    let competencias_lenguaje_actual = COMPETENCIAS.filter(e => e.getIdioma() == lenguaje || e.getIdioma() == '');
    if (competencias_lenguaje_actual.length) {
        let div = document.createElement('div');
        div.className = 'container_de_titular_con_circulos container_filas flex_al_centro';
        let circulito = document.createElement('div');
        circulito.className = 'circulito';
        div.appendChild(circulito);
    
        let h3 = document.createElement('h3');
        h3.innerHTML = NombreDeSeccionCorrespondiente('competencias', lenguaje, template_cv);
        div.appendChild(h3);
    
        circulito = document.createElement('div');
        circulito.className = 'circulito';
        div.appendChild(circulito);
    
        document.getElementById('competencias').appendChild(div);
    }
    
    
    for (let i = 0; i < competencias_lenguaje_actual.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = competencias_lenguaje_actual[i].getTitulo();
        document.getElementById('competencias').appendChild(p);
    
        let div_container = document.createElement('div');
        div_container.className = `progress_bar_container`;
        let div_bar = document.createElement('div');
        div_bar.className = `progress_bar progress_${competencias_lenguaje_actual[i].getPorcentaje()}`;
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
        h3.innerHTML = NombreDeSeccionCorrespondiente('softwares', lenguaje, template_cv);
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
        h3.innerHTML = NombreDeSeccionCorrespondiente('idioma_usuario', lenguaje, template_cv);
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
        h3.innerHTML = NombreDeSeccionCorrespondiente('rrss', lenguaje, template_cv)
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
        let h3 = document.createElement('h3');
        h3.innerHTML = NombreDeSeccionCorrespondiente('perfil', lenguaje, template_cv);
        document.getElementById('perfil').getElementsByTagName('div')[0].appendChild(h3);

        let p = document.createElement('p');
        p.innerHTML = perfil_extracto;
        p.className = 'border_left';
    
        document.getElementById('perfil').appendChild(p);
    }
    
    
    let experiencia_laboral = document.createElement('h3');
    experiencia_laboral.innerHTML = NombreDeSeccionCorrespondiente('experiencia_laboral', lenguaje, template_cv);
    document.getElementById('experiencia_laboral').getElementsByTagName('div')[0].appendChild(experiencia_laboral);
    
    let trabajos_lenguaje_actual = TRABAJOS.filter(e => e.getIdioma() == lenguaje || e.getIdioma() == '');
    for (let i = 0; i < trabajos_lenguaje_actual.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
        let bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.innerHTML = ' ';
        document.getElementById('experiencia_laboral').getElementsByTagName('div')[1].appendChild(bullet);
    
        let h4 = document.createElement('h4');
        let strong = document.createElement('strong');
        strong.innerHTML = trabajos_lenguaje_actual[i].getPosicion();
        h4.appendChild(strong);
        h4.innerHTML += ` ${lenguaje == 'esp' ? 'en' : 'in'} ${trabajos_lenguaje_actual[i].getEmpleador()}`;
        document.getElementById('experiencia_laboral').getElementsByTagName('div')[1].appendChild(h4);
    
        if (trabajos_lenguaje_actual[i].getArea()){
        let small = document.createElement('small');
        small.innerHTML = trabajos_lenguaje_actual[i].getArea() + '<br>';
        document.getElementById('experiencia_laboral').getElementsByTagName('div')[1].appendChild(small);
        }
    
        let small = document.createElement('small');
        small.innerHTML = `${trabajos_lenguaje_actual[i].getFechaDesde()} - ${trabajos_lenguaje_actual[i].getFechaHasta()}`;
        document.getElementById('experiencia_laboral').getElementsByTagName('div')[1].appendChild(small);
    
        let p = document.createElement('p');
        p.className = 'links';
        p.innerHTML = trabajos_lenguaje_actual[i].getDescripcion();
    
    
        if (trabajos_lenguaje_actual[i].getWeb()){
            p.appendChild(document.createElement('br'));
            p.appendChild(document.createElement('br'));
            let a = document.createElement('a');
            a.setAttribute('href', `${trabajos_lenguaje_actual[i].getWeb()}`);
            a.setAttribute('target', '_blank');
            
            a.innerHTML = `${lenguaje == 'esp' ? 'Ver:' : 'See:'} ${trabajos_lenguaje_actual[i].getWeb()}`;
            p.appendChild(a);
            }
    
            document.getElementById('experiencia_laboral').getElementsByTagName('div')[1].appendChild(p);
    
    }

    let actividades_lenguaje_actual = ACTIVIDADES.filter(e => e.getIdioma() == lenguaje || e.getIdioma() == '');
    if(actividades_lenguaje_actual.length){
    let actividades = document.createElement('h3');
    actividades.innerHTML = NombreDeSeccionCorrespondiente('actividades', lenguaje, template_cv);
    document.getElementById('actividades').getElementsByTagName('div')[0].appendChild(actividades);
    }    
    
    for (let i = 0; i < actividades_lenguaje_actual.length && i <= CANTIDAD_MAX_ELEMENTOS; i++) {
        let bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.innerHTML = ' ';
        document.getElementById('actividades').getElementsByTagName('div')[1].appendChild(bullet);
    
        let h4 = document.createElement('h4');
        let strong = document.createElement('strong');
        strong.innerHTML = actividades_lenguaje_actual[i].getTitulo();
        h4.appendChild(strong);
        if (actividades_lenguaje_actual[i].getSubtitulo()){
            h4.innerHTML += ` ${actividades_lenguaje_actual[i].getSubtitulo()}`;
        }
        document.getElementById('actividades').getElementsByTagName('div')[1].appendChild(h4);
    
        if (actividades_lenguaje_actual[i].getFecha()){
            let small = document.createElement('small');
            small.innerHTML = actividades_lenguaje_actual[i].getFecha();
            if (actividades_lenguaje_actual[i].getFechaHasta()){
                small.innerHTML += ` - ${actividades_lenguaje_actual[i].getFechaHasta()}`    
            }
            document.getElementById('actividades').getElementsByTagName('div')[1].appendChild(small);
        }
    
    
        let p = document.createElement('p');
        p.className = 'links';
        p.innerHTML = actividades_lenguaje_actual[i].getDescripcion();
        
    
        if (actividades_lenguaje_actual[i].getTituloUrl().length){
            p.appendChild(document.createElement('br'));
            p.appendChild(document.createElement('br'));
            let a = document.createElement('a');
            a.setAttribute('href', `${actividades_lenguaje_actual[i].getTituloUrl()[1]}`);
            a.setAttribute('target', '_blank');
            
            a.innerHTML = `${actividades_lenguaje_actual[i].getTituloUrl()[0]} ${actividades_lenguaje_actual[i].getTituloUrl()[1]}`;
            p.appendChild(a);
            }
            document.getElementById('actividades').getElementsByTagName('div')[1].appendChild(p);
    }
    
    
    let cvs_lenguaje_actual = CVS_DE_USUARIO.filter(e => e.getIdioma() == lenguaje || e.getIdioma() == '');
    if(cvs_lenguaje_actual.length){
        let a = document.createElement('a');
        a.setAttribute('href', `pdf/${cvs_lenguaje_actual[0].getNombre_archivo()}`);
        a.setAttribute('target', '_blank');
        a.setAttribute('title', lenguaje == 'esp' ? 'Descargar ' : 'Download ' + 'pdf');

        

        let img = document.createElement('img');
        img.setAttribute("src", 'img/icos/pdf.svg');
        img.setAttribute('alt', (lenguaje == 'esp' ? 'Descargar ' : 'Download ') + 'pdf');
        img.setAttribute('title', (lenguaje == 'esp' ? 'Descargar ' : 'Download ') + 'pdf');
        a.appendChild(img);

        let p = document.createElement('p');
        p.innerHTML = (lenguaje == 'esp' ? 'Descargar' : 'Download') + '<br>pdf';
        a.appendChild(p);

        a_mobile = a.cloneNode(true);
        a.id = 'descarga';
        a_mobile.id = 'descarga_mobile';

        document.getElementById('pdf').appendChild(a);
        document.getElementById('pdf_mobile').appendChild(a_mobile);
    }



    
    let footer = document.createElement('small');
    footer.innerHTML = NombreDeSeccionCorrespondiente('ultima_actualizacion', lenguaje, template_cv) + ' ';
    let footer_fecha = document.createElement('strong');
    footer_fecha.innerHTML = ULTIMA_FECHA_DE_ACTUALIZACION;
    footer.appendChild(footer_fecha);
    
    document.getElementById('ultima_actualizacion').appendChild(footer);
    
}

document.addEventListener('DOMContentLoaded', function() {
    build(lenguaje);
 }, false);


