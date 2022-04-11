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
dato = new Dato('fecha_nacimiento','Feb-1993');
DATOS_PERSONALES.push(dato);
dato = new Dato('titulo_destacado','Lic. Comunicación Digital','esp');
DATOS_PERSONALES.push(dato);
dato = new Dato('titulo_destacado','Bachelor degree in Digital Communication', 'eng');
DATOS_PERSONALES.push(dato);
dato = new Dato('profesion_destacada','Project Manager');
DATOS_PERSONALES.push(dato);
dato = new Dato('perfil_extracto','Diseñador Multimedial y líder de proyectos digitales. <br>Emprendedor y apasionado en la organización y organizaciones. <br>Técnico por naturaleza.','esp');
DATOS_PERSONALES.push(dato);
dato = new Dato('perfil_extracto','Multimedia Designer and Digital PM.<br> Entrepreneur and passionate about organizations and organization.<br> Natural born technician.','eng');
DATOS_PERSONALES.push(dato);


let educacion = new Educacion('Comunicación digital e interactiva','Pontífica Universidad Católica Argentina','Licenciatura.','marzo 2021','diciembre 2021','esp');
EDUCACION.push(educacion);
educacion = new Educacion('Digital and Interactive Communication','Pontífica Universidad Católica Argentina','Bachelor degree','march 2021','december 2021',
'eng');
EDUCACION.push(educacion);
educacion = new Educacion('Diseño multimedial','Escuela DaVinci','Tecnicatura Superior en Diseño Multimedial orientado a publicidad.','marzo 2017','abril 2020','esp');
EDUCACION.push(educacion);
educacion = new Educacion('Multimedia Design','Escuela DaVinci','Higher Technician in Multimedia design oriented to publicity.','march 2017','april 2020','eng');
EDUCACION.push(educacion);
educacion = new Educacion('Diseño y Programación Web','Escuela DaVinci','Tecnicatura Superior en Diseño y Programación Web.','marzo 2020', ...Array(1),'esp');
EDUCACION.push(educacion);
educacion = new Educacion('Web Development and Design','Escuela DaVinci','Higher Technician in Web Development and Design.','march 2020', 'Present','eng');
EDUCACION.push(educacion);


let competencia = new Competencia('Metodologías ágiles', 75, 'esp');
COMPETENCIAS.push(competencia);
competencia = new Competencia('Quality Assurance', 75);
COMPETENCIAS.push(competencia);
competencia = new Competencia('Modelado y animación 3D', 75, 'esp');
COMPETENCIAS.push(competencia);
competencia = new Competencia('Desarrollo Web', 50, 'esp');
COMPETENCIAS.push(competencia);
competencia = new Competencia('Diseño y retoque de imagen', 50, 'esp');
COMPETENCIAS.push(competencia);
competencia = new Competencia('Motion graphics', 50);
COMPETENCIAS.push(competencia);
competencia = new Competencia('Agile Methodologies', 75, 'eng');
COMPETENCIAS.push(competencia);
competencia = new Competencia('3D Modeling and Animation', 75, 'eng');
COMPETENCIAS.push(competencia);
competencia = new Competencia('Web Development', 50, 'eng');
COMPETENCIAS.push(competencia);
competencia = new Competencia('Design and Photo retouching', 50, 'eng');
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
idioma = new Idioma_del_usuario('English',90);
IDIOMAS_DEL_USUARIO.push(idioma);
idioma = new Idioma_del_usuario('Portugués',25);
IDIOMAS_DEL_USUARIO.push(idioma);


let rrss = new Rrss_usuario('Instagram', 'https://www.instagram.com/imperioame/');
RRSS_USUARIO.push(rrss);
rrss = new Rrss_usuario('Flickr', 'https://flickr.com/photos/imperioame');
RRSS_USUARIO.push(rrss);
rrss = new Rrss_usuario('Linkedin', 'https://linkedin.com/in/julian-ame');
RRSS_USUARIO.push(rrss);
rrss = new Rrss_usuario('Behance', 'http://behance.net/imperioame');
RRSS_USUARIO.push(rrss);


let trabajo = new Trabajo('Qa Lead', 'Ministerio de Desarrollo productivo de la Nación', 'Dirección General de Tecnologías de la Información y las Comunicaciones', 'Lider de equipo de Quality Assurance en sistemas de política pública. Consultor en definición estándares de documentación, manuales y procesos.<br>Auditor de sistemas (testeos) y documentación. Relevamiento de funcionalidades, detección de bugs y puntos de inflexión.<br>Armado de planificación de pruebas y su ejecución. Armado de informes y seguimiento de incidencias.<br>Tareas de auditoría funcional sobre sistemas de impacto económico y social del Ministerio.<br>Asesor en metodologías de trabajo para proyectos y en conformación de equipos de trabajo.', '', 'junio 2020', ...[,], 'esp');
TRABAJOS.push(trabajo);
trabajo = new Trabajo('Coordinador de productos digitales', 'Fundación Landrú', '', 'Coordinador de equipos y desarrollos de productos digitales.<br>Gestión de equipos externos de trabajo y colaboradores, y de roles por proyecto.<br>Definición de alcance de proyectos digitales informáticos y multimediales. Análisis de factibilidad técnica de propuestas y proyectos.<br>Auditoría de funcionalidades de sistemas existentes y propuestos.<br>Diseño de sistemas por relevamiento de usuarios y de funcionalidades.<br>Prototipado y desarrollo de crudos como Proof of Concept para nuevas propuestas.', 'https://www.landru.org/', 'junio 2021', ...[,], 'esp');
TRABAJOS.push(trabajo);
trabajo = new Trabajo('Asesor en Comunicaciones digitales e Informática', 'Antrieb Sudamericana S.A.', '', 'Asesor generalista en cuestiones informáticas y de comunicación.<br>Diseño de estrategias de comunicación.<br>Desarrollo de campañas publicitarias de bajo costo/orgánicas.<br>Diseño de piezas publicitarias y de comunicación.<br>Gestión de desarrollo de página web institucional.<br>Optimización SEO.<br>Consultor en selección de proveedores informáticos (infraestructura y web).<br>Consultor y selección de presupuestos de equipamiento informático / servicios informáticos.', 'https://antriebsa.com/', 'febrero 2020', ...[,], 'esp');
TRABAJOS.push(trabajo);
trabajo = new Trabajo('Qa Lead', "Argentina's National Ministry of Productive Development", 'General Direction of Information and Communication Tecnologies', 'Quality Assurance team Leader in National-Public systems.<br> Documentation, manuals and processes standards-and-definitions Consultor.<br>Sistems and documentation auditor and testing.<br>Survey of functionalities, detection of bugs and inflection points.<br>Test plans making and execution. Reporting and incident tracking.<br>Functional audit on systems of economic and social impact.<br>Team building and working methodologies Adviser.', '', 'june 2020', 'Present', 'eng');
TRABAJOS.push(trabajo);
trabajo = new Trabajo('Digital Products Manager', 'Landrú Foundation', '', 'Teams and Digital product developments Manager.<br>External teams and collaborators management.<br>Scope definition by multimedia or IT projects.<br>Technical feasibility analisys of proposals and projects.<br>Existant and proposed system funcionalities audit.<br>System design by surveying users and functionalities.<br>Prototyping and crude development as Proof of Concept for new proposals.','https://www.landru.org/', 'june 2021', 'Present', 'eng');
TRABAJOS.push(trabajo);
trabajo = new Trabajo('Digital Communication and IT Adviser', 'Antrieb Sudamericana S.A.', '', 'Generalist Adviser in IT and Communication.<br>Communication strategist.<br>Low cost/organic Publicity ad development.<br>Advertising and Communication piece design.<br>Institutional website management and development.<br>SEO.<br> IT Providers selection Adviser (web and infrastructure).<br>IT equipment/services budget management and Adviser.', 'https://antriebsa.com/', 'february 2020', 'Present', 'eng');
TRABAJOS.push(trabajo);


let actividad = new Actividad('Fotógrafía','','Experimentación en fotografía de paisajes y retratos, en digital y analógico, en estética formal y experimental <br> La mayoría de mis composiciones las publico en repositorios de stock gratuitos (<a href="https://unsplash.com/@imperioame">Unsplash</a>, <a href="https://www.pexels.com/@imperioame">Pexels</a>, <a href="https://pixabay.com/es/users/imperioame-6404363/">Pixabay</a>), logrando algunas pequeñas menciones en periódicos y portales de noticias internacionales.',['Showcase fotografico:', 'https://flickr.com/photos/imperioame/'],'','','esp');
ACTIVIDADES.push(actividad);
actividad = new Actividad('Diseñador Multimedial','freelance','Participaciones ocacionales en pequeñas producciones, contratos puntuales o experimentos creativos como diseñador/realizador audiovisual. <br> <br> Actualmente, y desde mediados de 2019, participo en la "Agencia Álterego", formada en sus orígenes como proyecto académico de la Escuela DaVinci por Emiliano Vallaro, Luisina Scuffi y yo, bajo la mentoría de dos profesionales renombrados del ambiente publicitario: Emmanuel Ventura y Emiliano (Emo) Enriquez. <br> Con el equipo formado continuamos brindando soluciones de diseño y estrategias de campañas publicitarias a clientes como Fundación Compromiso para Potrero Digital - Escuela de oficios digitales orientada a la integración social - Staley Martial Arts - Dojo de artes marciales ubicado en Wilmette, Illinois, EEUU. - y BitBang - festival de animación, videojuegos y arte digital de la ciudad de Buenos Aires.',['Ver Linkedin:', 'https://www.linkedin.com/company/agencia-álterego'],'','','esp');
ACTIVIDADES.push(actividad);
actividad = new Actividad('Campaña publicitaria Premiada','a Potrero Digital','Campaña Publicitaria ganadora del concurso de seminario final de la Escuela DaVinci. <br> El cliente ha sido la escuela de oficios digitales "Potrero Digital". El concurso comprende el desarrollo de un concepto de marca, cinco campañas orientadas a sus targets y el pitch ante las autoridades de la escuela<br> Mi equipo, la Agencia ÁlterEgo, ha sido seleccionada por el cliente entre otros diez equipos concursantes y premiada por la escuela DaVinci.',['Ver resumen:', 'https://bit.ly/Campana-Ganadora'],'diciembre 2019','','esp');
ACTIVIDADES.push(actividad);
actividad = new Actividad('Socorrista voluntario','en SEC Socorrismo','Voluntario en eventos y recitales en el cuerpo médico.<br> He llegado a coordinar patrullas y equipos de rescate. <br>Capacitado en más de 20 cursos de la índole, necesarios para la actividad. <br>Presencia en más de 70 eventos, incluyendo recitales masivos en estadios y fiestas privadas.','','enero 2012','enero 2016','esp');
ACTIVIDADES.push(actividad);
actividad = new Actividad('Photography','','Portrait and landscape, digital and analog, formal and experimental photography experimentation.<br>Most of my compositions are published in free stock repos (<a href="https://unsplash.com/@imperioame">Unsplash</a>, <a href="https://www.pexels.com/@imperioame">Pexels</a>, <a href="https://pixabay.com/es/users/imperioame-6404363/">Pixabay</a>), achieving minor mentions in international news websites.',['Photography Showcase:', 'https://flickr.com/photos/imperioame/'],'','','eng');
ACTIVIDADES.push(actividad);
actividad = new Actividad('Multimedia Designer',' - freelance','Occasional participations in small productions, freelance contracts or creative experiments as an audiovisual Designer/Producer.<br><br>Currently, and since mid 2019 i collaborate in "Alterego Agency", originally created as an academical project in "Escuela DaVinci" by Emiliano Vallaro, Luisina Scuffi and me, under mentorship of two renound proffesionals of the publicity enviorment: Emmanuel Ventura and Emiliano (Emo) Enriquez.<br> Once established, we continued offering design solutions and advertisement campaigns strategies to clients such as "Fundación Compromiso" for "Potrero Digital" - A School of digital trades oriented to social integration; "Staley Martial Arts" - Martial Arts Dojo located in Wilmette, Illinois, EEUU.; and "BitBang" - Animation, Videogames and Digital Arts festival in Buenos aires City.',['Ver Linkedin:', 'https://www.linkedin.com/company/agencia-álterego'],'','','eng');
ACTIVIDADES.push(actividad);
actividad = new Actividad('Awarded Publicity Campaign','to Potrero Digital',"Publicity campaign winner of Escuela Davinci's Final Seminar's contest.<br>The client was the School of digital trades 'Potrero Digital', renowned in Argentina for its community work. The contest covered the development of a brand concept, five ad campaigns oriented to their target audiences and Pitching it to the Client and School authorities.<br>My team, 'Alterego Agency', has been chosen winner by the client amognst ten other contestants teams and awarded by the 'Escuela DaVinci'.",['See summary (only in Spanish):', 'https://bit.ly/Campana-Ganadora'],'december 2019','','eng');
ACTIVIDADES.push(actividad);
actividad = new Actividad('Volunteer Paramedic','in "SEC Socorrismo"',"Concerts and Events medical corps volunteer.<br> I've managed rescue patrols and teams, as well as do primary care to victims in need.<br>Instructed with more than 20 training courses of medical attention, requiered for the activity.<br>I've been present in more than 70 events, including masive concerts in stadiums and private fests",'','january 2012','january 2016','eng');
ACTIVIDADES.push(actividad);

let cv = new Cv('esp','CV Ame - 2022-04 ESP.pdf');
CVS_DE_USUARIO.push(cv);
cv = new Cv('eng','CV Ame - 2022-04 ING.pdf');
CVS_DE_USUARIO.push(cv);