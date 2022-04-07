const trabajos = [];
const actividades = [];
const menciones = [];
const software = [];
const educacion = [];
const idiomas = [];
const rrss = [];

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

function Actividad() {
    //func constructora para cargar actividades
}

function Mencion() {
    //func constructora para cargar menciones
}

function Software() {
    //func constructora para cargar softwares
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