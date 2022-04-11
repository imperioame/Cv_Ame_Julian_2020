const DATOS_PERSONALES = [];
const TIPO_DATO_PERSONAL = ['nombres', 'apellidos', 'telefono', 'correo', 'domicilio', 'pais', 'provincia_estado', 'barrio', 'codigo_postal', 'fecha_nacimiento', 'foto_perfil', 'titulo_destacado', 'profesion_destacada', 'perfil_extracto'];
const TRABAJOS = [];
const ACTIVIDADES = [];
/*const menciones = [];*/
const SOFTWARES = [];
const SOFTWARES_USUARIO = [];
const EDUCACION = [];
const COMPETENCIAS = [];
const IDIOMAS_DEL_CV = [];
const IDIOMAS_DEL_USUARIO = [];
const RRSS_USUARIO = [];

class Dato {
    constructor(tipo_dato_personal, dato, idioma = '') {
        this.idioma = idioma;
        this.tipo_dato_personal = tipo_dato_personal;
        this.dato = dato;
    }

    getTipoDatoPersonal() {
        return this.tipo_dato_personal;
    }
    getDato() {
        return this.dato;
    }
    getIdioma() {
        return this.idioma;
    }

    setTipoDatoPersonal(nuevoTipo_dato_personal) {
        nuevoTipo_dato_personal = nuevoTipo_dato_personal.trim();
        if (nuevoTipo_dato_personal === '') {
            throw 'no puede estar vacío';
        }
        this.tipo_dato_personal = nuevoTipo_dato_personal;
    }
    setDato(nuevoDato) {
        nuevoDato = nuevoDato.trim();
        if (nuevoDato === '') {
            throw 'no puede estar vacío';
        }
        this.dato = nuevoDato;
    }
    setIdioma(nuevoIdioma) {
        nuevoIdioma = nuevoIdioma.trim();
        if (nuevoIdioma === '') {
            throw 'no puede estar vacío';
        }
        this.idioma = nuevoIdioma;
    }
}


class Trabajo {
    //func constructora para cargar trabajos

    constructor(posicion, empleador, area = '', descripcion, web = '', fecha_desde, fecha_hasta = 'Presente', idioma = '') {

        this.idioma = idioma;
        this.posicion = posicion;
        this.empleador = empleador;
        this.area = area;
        this.descripcion = descripcion;
        this.web = web;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;

    }

    //Getters
    getPosicion() {
        return this.posicion;
    }
    getEmpleador() {
        return this.empleador;
    }
    getArea() {
        return this.area;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getWeb() {
        return this.web;
    }
    getFechaDesde() {
        return this.fecha_desde;
    }
    getFechaHasta() {
        return this.fecha_hasta;
    }
    getIdioma() {
        return this.idioma;
    }

    //Setters
    setPosicion(nuevaPosicion) {
        nuevaPosicion = nuevaPosicion.trim();
        if (nuevaPosicion === '') {
            throw 'no puede estar vacío';
        }
        this.posicion = nuevaPosicion;
    }
    setEmpleador(nuevoEmpleador) {
        nuevoEmpleador = nuevoEmpleador.trim();
        if (nuevoEmpleador === '') {
            throw 'no puede estar vacío';
        }
        this.empleador = nuevoEmpleador;
    }
    setArea(nuevaArea) {
        this.area = nuevaArea;
    }
    setDescripcion(nuevaDescripcion) {
        nuevaDescripcion = nuevaDescripcion.trim();
        if (nuevaDescripcion === '') {
            throw 'no puede estar vacío';
        }
        this.descripcion = nuevaDescripcion;
    }
    setWeb(nuevaWeb) {
        this.web = nuevaWeb;
    }
    setFechaDesde(nuevaFecha_desde) {
        nuevaFecha_desde = nuevaFecha_desde.trim();
        if (nuevaFecha_desde === '') {
            throw 'no puede estar vacío';
        }
        this.fecha_desde = nuevaFecha_desde;
    }
    setFechaHasta(nuevaFecha_hasta) {
        nuevaFecha_hasta = nuevaFecha_hasta.trim();
        if (nuevaFecha_hasta === '') {
            nuevaFecha_hasta = 'Presente';
        }
        this.fecha_hasta = nuevaFecha_hasta;
    }
    setIdioma(nuevoIdioma) {
        nuevoIdioma = nuevoIdioma.trim();
        if (nuevoIdioma === '') {
            throw 'no puede estar vacío';
        }
        this.idioma = nuevoIdioma;
    }


}

class Actividad {
    //func constructora para cargar acgtividades

    constructor(titulo, subtitulo = '', descripcion, titulo_url = [], fecha = '', fecha_hasta = '', idioma = '') {

        this.idioma = idioma;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.descripcion = descripcion;
        this.titulo_url = titulo_url;
        this.fecha = fecha;
        this.fecha_hasta = fecha_hasta;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getTituloUrl() {
        return this.titulo_url;
    }
    getFecha() {
        return this.fecha;
    }
    getFechaHasta() {
        return this.fecha_hasta;
    }
    getIdioma() {
        return this.idioma;
    }

    //Setters
    setPosicion(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }
    setEmpleador(nuevoSubtitulo) {
        this.subtitulo = nuevoSubtitulo;
    }
    setDescripcion(nuevaDescripcion) {
        nuevaDescripcion = nuevaDescripcion.trim();
        if (nuevaDescripcion === '') {
            throw 'no puede estar vacío';
        }
        this.descripcion = nuevaDescripcion;
    }
    setWeb(nuevoTitulo_url) {
        this.titulo_url = nuevoTitulo_url;
    }
    setFechaDesde(nuevaFecha) {
        this.fecha = nuevaFecha;
    }
    setFechaHasta(nuevaFecha_hasta) {
        this.fecha_hasta = nuevaFecha_hasta;
    }
    setIdioma(nuevoIdioma) {
        nuevoIdioma = nuevoIdioma.trim();
        if (nuevoIdioma === '') {
            throw 'no puede estar vacío';
        }
        this.idioma = nuevoIdioma;
    }

}
/*
// Las menciones serían highlights, como premios o esas cosas. No están implementadas aún en el esquema del cv
class Mencion {
    //func constructora para cargar menciones
}
*/

class Software {
    //func constructora para cargar softwares
    constructor(titulo, logo = '') {

        this.titulo = titulo;
        this.logo = logo;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getLogo() {
        return this.logo;
    }


    //Setters
    setTitulo(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }
    setLogo(nuevoLogo) {
        this.logo = nuevoLogo;
    }

}

class Educacion {
    //func constructora para cargar actividades
    constructor(titulo, institucion, descripcion, fecha_desde, fecha_hasta = 'Presente', idioma = '') {

        this.idioma = idioma;
        this.titulo = titulo;
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getInstitucion() {
        return this.institucion;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getFechaDesde() {
        return this.fecha_desde;
    }
    getFechaHasta() {
        return this.fecha_hasta;
    }
    getIdioma() {
        return this.idioma;
    }

    //Setters
    setTitulo(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }
    setInstitucion(nuevaInstitucion) {
        nuevaInstitucion = nuevaInstitucion.trim();
        if (nuevaInstitucion === '') {
            throw 'no puede estar vacío';
        }
        this.institucion = nuevaInstitucion;
    }
    setDescripcion(nuevaDescripcion) {
        nuevaDescripcion = nuevaDescripcion.trim();
        if (nuevaDescripcion === '') {
            throw 'no puede estar vacío';
        }
        this.descripcion = nuevaDescripcion;
    }
    setFechaDesde(nuevaFecha_desde) {
        nuevaFecha_desde = nuevaFecha_desde.trim();
        if (nuevaFecha_desde === '') {
            throw 'no puede estar vacío';
        }
        this.fecha_desde = nuevaFecha_desde;
    }
    setFechaDesde(nuevaFecha_hasta) {
        nuevaFecha_hasta = nuevaFecha_hasta.trim();
        if (nuevaFecha_desde === '') {
            nuevaFecha_hasta = 'Presente'
        }
        this.fecha_hasta = nuevaFecha_hasta;
    }
    setIdioma(nuevoIdioma) {
        nuevoIdioma = nuevoIdioma.trim();
        if (nuevoIdioma === '') {
            throw 'no puede estar vacío';
        }
        this.idioma = nuevoIdioma;
    }

}

class Competencia {
    //func constructora para cargar actividades
    constructor(titulo, porcentaje = 0, idioma = '') {
        this.idioma = idioma;
        this.titulo = titulo;
        this.porcentaje = porcentaje;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getPorcentaje() {
        return this.porcentaje;
    }
    getIdioma() {
        return this.idioma;
    }

    //Setters
    setTitulo(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }

    setPorcentaje(nuevoPorcentaje) {
        nuevoPorcentaje = nuevoPorcentaje.trim();
        if (nuevoPorcentaje === '') {
            nuevoPorcentaje = 0;
        }
        this.porcentaje = nuevoPorcentaje;
    }
    setIdioma(nuevoIdioma) {
        nuevoIdioma = nuevoIdioma.trim();
        if (nuevoIdioma === '') {
            throw 'no puede estar vacío';
        }
        this.idioma = nuevoIdioma;
    }

}

class Idioma_del_sitio {
    //func constructora para cargar idiomas
    constructor(idioma, idioma_completo, icono = '') {
        this.idioma = idioma;
        this.idioma_completo = idioma_completo;
        this.icono = icono;
    }

    //Getters
    getIdioma() {
        return this.idioma;
    }
    getIdioma_completo() {
        return this.idioma_completo;
    }
    getIcono() {
        return this.icono;
    }

    //Setters
    setIdioma(nuevoIdioma) {
        nuevoIdioma = nuevoIdioma.trim();
        if (nuevoIdioma === '') {
            throw 'no puede estar vacío';
        }
        this.idioma = nuevoIdioma;
    }
    setIdioma_completo(nuevoIdioma_completo) {
        nuevoIdioma_completo = nuevoIdioma_completo.trim();
        if (nuevoIdioma_completo === '') {
            throw 'no puede estar vacío';
        }
        this.idioma_completo = nuevoIdioma_completo;
    }
    setIcono(nuevoIcono) {
        this.icono = nuevoIcono;
    }

}

class Idioma_del_usuario {
    //func constructora para cargar idiomas
    constructor(titulo, porcentaje = 0) {
        this.titulo = titulo;
        this.porcentaje = porcentaje;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getPorcentaje() {
        return this.porcentaje;
    }

    //Setters
    setTitulo(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }
    setPorcentaje(nuevoPorcentaje) {
        nuevoPorcentaje = nuevoPorcentaje.trim();
        if (nuevoPorcentaje === '') {
            nuevoPorcentaje = 0;
        }
        this.porcentaje = nuevoPorcentaje;
    }

}

class Rrss {
    //func constructora para cargar rrss

    constructor(titulo, icono = '') {
        this.titulo = titulo;
        this.icono = icono;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getIcono() {
        return this.icono;
    }

    //Setters
    setTitulo(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }
    setIcono(nuevoIcono) {
        this.icono = nuevoIcono;
    }
}

class Rrss_usuario {
    //func constructora para cargar rrss

    constructor(titulo, link) {
        this.titulo = titulo;
        this.link = link;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getLink() {
        return this.link;
    }

    //Setters
    setTitulo(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }
    setLink(nuevoLink) {
        nuevoLink = nuevoLink.trim();
        if (nuevoLink === '') {
            throw 'no puede estar vacío';
        }
        this.link = nuevoLink;
    }
}

class Seccion_cv {
    //func constructora para cargar las secciones del cv

    constructor(template_cv, posicion_en_cv, titulo, idioma = '') {
        this.template_cv = template_cv;
        this.posicion_en_cv = posicion_en_cv;
        this.titulo = titulo;
        this.idioma = idioma;
    }

    //Getters
    getTitulo() {
        return this.titulo;
    }
    getPosicion_en_cv() {
        return this.posicion_en_cv;
    }
    getTemplate_cv() {
        return this.template_cv;
    }
    getIdioma() {
        return this.idioma;
    }

    //Setters
    setTitulo(nuevoTitulo) {
        nuevoTitulo = nuevoTitulo.trim();
        if (nuevoTitulo === '') {
            throw 'no puede estar vacío';
        }
        this.titulo = nuevoTitulo;
    }
    setPosicion_en_cv(nuevoPosicion_en_cv) {
        nuevoPosicion_en_cv = nuevoPosicion_en_cv.trim();
        if (nuevoPosicion_en_cv === '') {
            throw 'no puede estar vacío';
        }
        this.posicion_en_cv = nuevoPosicion_en_cv;
    }

    setTemplate_cv(nuevoTemplate_cv) {
        nuevoTemplate_cv = nuevoTemplate_cv.trim();
        if (nuevoTemplate_cv === '') {
            throw 'no puede estar vacío';
        }
        this.template_cv = nuevoTemplate_cv;
    }
    setIdioma(nuevoIdioma) {
        nuevoIdioma = nuevoIdioma.trim();
        if (nuevoIdioma === '') {
            throw 'no puede estar vacío';
        }
        this.idioma = nuevoIdioma;
    }

}