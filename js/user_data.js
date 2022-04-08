let dato = new Dato('foto_perfil','perfil_julian.jpg');
DATOS_PERSONALES.push(dato);
dato = new Dato('nombres','Julián');
DATOS_PERSONALES.push(dato);
dato = new Dato('apellidos','Amé');
DATOS_PERSONALES.push(dato);
dato = new Dato('domicilio','Medrano 1645');
DATOS_PERSONALES.push(dato);
dato = new Dato('barrio','Palermo');
DATOS_PERSONALES.push(dato);
dato = new Dato('provincia_estado','CABA');
DATOS_PERSONALES.push(dato);
dato = new Dato('pais','Argentina');
DATOS_PERSONALES.push(dato);
dato = new Dato('codigo_postal','1425');
DATOS_PERSONALES.push(dato);
dato = new Dato('correo','jame@produccion.gob.ar');
DATOS_PERSONALES.push(dato);
dato = new Dato('telefono','+549 11 5981 8605');
DATOS_PERSONALES.push(dato);
dato = new Dato('fecha_nacimiento','20/02/1993');
DATOS_PERSONALES.push(dato);
dato = new Dato('titulo_destacado','Lic. Comunicación Digital');
DATOS_PERSONALES.push(dato);
dato = new Dato('profesion_destacada','Project Manager');
DATOS_PERSONALES.push(dato);
dato = new Dato('perfil_extracto','Diseñador Multimedial y líder de proyectos digitales. <br>Emprendedor y apasionado en la organización y organizaciones. <br>Técnico por naturaleza.');
DATOS_PERSONALES.push(dato);


let educacion = new Educacion('Comunicación digital e interactiva','Pontífica Universidad Católica Argentina','Licenciatura.','marzo 2021','diciembre 2021');
EDUCACION.push(educacion);
educacion = new Educacion('Diseño multimedial','Escuela DaVinci','Licenciatura.','marzo 2017','abril 2020');
EDUCACION.push(educacion);
educacion = new Educacion('Diseño multimedial','Escuela DaVinci','Tecnicatura Superior en Diseño Multimedial orientado a publicidad.','marzo 2017','abril 2020');
EDUCACION.push(educacion);
educacion = new Educacion('Diseño y Programación Web','Escuela DaVinci','Tecnicatura Superior en Diseño y Programación Web.','marzo 2017','');
EDUCACION.push(educacion);


let competencia = new Competencia('Metodologías ágiles', 75);
COMPETENCIAS.push(competencia);
competencia = new Competencia('Quality Assurance', 75);
COMPETENCIAS.push(competencia);
competencia = new Competencia('Modelado y animación 3D', 75);
COMPETENCIAS.push(competencia);
competencia = new Competencia('Desarrollo Web', 50);
COMPETENCIAS.push(competencia);
competencia = new Competencia('Diseño y retoque de imagen', 50);
COMPETENCIAS.push(competencia);
competencia = new Competencia('Motion graphics', 50);
COMPETENCIAS.push(competencia);


let software = new Software('Photoshop','logos_Photoshop.png');
SOFTWARES_USUARIO.push(software);
software = new Software('Illustrator','logos_Illustrator.png');
SOFTWARES_USUARIO.push(software);
software = new Software('After Effects','logos_After_Effects.png');
SOFTWARES_USUARIO.push(software);
software = new Software('Premiere Pro','logos_Premiere_Pro.png');
SOFTWARES_USUARIO.push(software);
software = new Software('3Ds','logos_3ds_max.png');
SOFTWARES_USUARIO.push(software);
software = new Software('Cinema 4D','logos_Cinema_4d.png');
SOFTWARES_USUARIO.push(software);
software = new Software('Blender','logos_Blender.png');
SOFTWARES_USUARIO.push(software);
software = new Software('Unity','logos_Unity.png');
SOFTWARES_USUARIO.push(software);
software = new Software('Real Flow','logos_Real_Flow.png');
SOFTWARES_USUARIO.push(software);
software = new Software('Substance Painter','logos_Substance_Painter.png');
SOFTWARES_USUARIO.push(software);


let idioma = new Idioma_del_usuario('Español',100);
IDIOMAS_DEL_USUARIO.push(idioma);
idioma = new Idioma_del_usuario('Inglés',90);
IDIOMAS_DEL_USUARIO.push(idioma);
idioma = new Idioma_del_usuario('Portugués',25);
IDIOMAS_DEL_USUARIO.push(idioma);


let rrss = new Rrss_usuario('Instagram', 'https://www.instagram.com/imperioame/');
RRSS_USUARIO.push(rrss);
rrss = new Rrss_usuario('Flickr', 'https://flickr.com/photos/imperioame');
RRSS_USUARIO.push(rrss);
rrss = new Rrss_usuario('Linkedin', 'https://linkedin.com/in/julian-ame');
RRSS_USUARIO.push(rrss);
rrss = new Rrss_usuario('Behance', 'https://behance.net/imperioame');
RRSS_USUARIO.push(rrss);


let trabajo = new Trabajo('Qa Lead', 'Ministerio de Desarrollo productivo de la Nación', 'Dirección General de Tecnologías de la Información y las Comunicaciones', 'Lider de equipo de Quality Assurance en sistemas de política pública. Consultor en definición estándares de documentación, manuales y procesos.<br> Auditor de sistemas (testeos) y documentación. Asesor en metodologías de trabajo para proyectos y en conformación de equipos de trabajo.', '', 'junio 2020','');
TRABAJOS.push(trabajo);
trabajo = new Trabajo('Coordinador de productos digitales', 'Fundación Landrú', '', 'Coordinador de equipos y desarrollos de productos digitales.<br>Gestión de equipos externos de trabajo y colaboradores, y de roles por proyecto.<br>Definición de alcance de proyectos digitales informáticos y multimediales. Análisis de factibilidad técnica de propuestas y proyectos.<br>Auditoría de funcionalidades de sistemas existentes y propuestos.<br>Diseño de sistemas por relevamiento de usuarios y de funcionalidades.<br>Prototipado y desarrollo de crudos como Proof of Concept para nuevas propuestas.', '', 'junio 2021','');
trabajo = new Trabajo('Asesor en Comunicaciones digitales e Informática', 'Antrieb Sudamericana S.A.', '', 'Asesor generalista en cuestiones informáticas y de comunicación.<br>Diseño de estrategias de comunicación.<br>Desarrollo de campañas publicitarias de bajo costo/orgánicas.<br>Diseño de piezas publicitarias y de comunicación.<br>Gestión de desarrollo de página web institucional.<br>Optimización SEO.<br>Consultor en selección de proveedores informáticos (infraestructura y web).<br>Consultor y selección de presupuestos de equipamiento informático / servicios informáticos.', 'https://antriebsa.com/', 'febrero 2020','');
TRABAJOS.push(trabajo);

//Agregar actividades
