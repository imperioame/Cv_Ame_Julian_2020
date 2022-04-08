const datos_personales = [];
const tipo_dato_personal = ['telefono', 'correo', 'domicilio', 'pais', 'provincia_estado', 'fecha_nacimiento', 'foto_perfil'];
const trabajos = [];
const actividades = [];
/*const menciones = [];*/
const software = [];
const educacion = [];
const idiomas = [];
const rrss = [];

class Dato {
    constructor(tipo_dato_personal, dato){
        this.tipo_dato_personal = tipo_dato_personal;
        this.dato = dato;
    }

    getTipoDatoPersonal() {
        return this.tipo_dato_personal;
    }
    getDato() {
        return this.dato;
    }

    setTipoDatoPersonal(nuevoTipo_dato_personal){
        nuevoTipo_dato_personal = nuevoTipo_dato_personal.trim();
        if (nuevoTipo_dato_personal === '') {
            throw 'no puede estar vacío';
        }
        this.tipo_dato_personal = nuevoTipo_dato_personal;
    }
    setDato(nuevoDato){
        nuevoDato = nuevoDato.trim();
        if (nuevoDato === '') {
            throw 'no puede estar vacío';
        }
        this.dato = nuevoDato;
    }
}


class Trabajo {
    //func constructora para cargar trabajos

    constructor(posicion, empleador, area = '', descripcion, web = '', fecha_desde, fecha_hasta = 'Presente') {

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

}

class Actividad {
    //func constructora para cargar acgtividades

    constructor(titulo, subtitulo = '', descripcion, titulo_url = [], fecha = '', fecha_hasta = '') {

        this.titulo = titulo;
        this.subtitulo = subtitulo ;
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
        this.subtitulo = subtitulo ;
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

}

function Educacion() {
    //func constructora para cargar actividades
}

function Idioma() {
    //func constructora para cargar actividades
}

function Rrss() {
    //func constructora para cargar rrss
}