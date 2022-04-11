const IDIOMAS_DISPONIBLES_EN_SITIO = [];
const RRSS = [];
const SECCIONES_CV = [];
const CANTIDAD_MAX_ELEMENTOS = 4;
const ULTIMA_FECHA_DE_ACTUALIZACION = "Abr. 2022";


let idioma_del_sitio = new Idioma_del_sitio('esp','Español', 'ico-espanol.png');
IDIOMAS_DISPONIBLES_EN_SITIO.push(idioma_del_sitio);
idioma_del_sitio = new Idioma_del_sitio('eng', 'English', 'ico-ingles.png');
IDIOMAS_DISPONIBLES_EN_SITIO.push(idioma_del_sitio);


let rrss_sistema = new Rrss('Instagram', 'logos_Instagram.png');
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Flickr', 'logos_Flickr.png');
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Linkedin', 'logos_Linkedin.png');
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Behance', 'logos_Behance.png');
RRSS.push(rrss_sistema);

let seccion_cv = new Seccion_cv('original', 'detalles', 'Detalles', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'detalles', 'Details', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'educacion', 'Educación', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'educacion', 'Education', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'competencias', 'Competencias', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'competencias', 'Habilities', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'softwares', 'Software', );
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'idioma_usuario', 'Idiomas', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'idioma_usuario', 'Languages', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'rrss', 'RRSS', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'rrss', 'Social', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'perfil', 'Perfil', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'perfil', 'Profile', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'experiencia_laboral', 'Experiencia Laboral', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'experiencia_laboral', 'Experience', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'actividades', 'Otras Actividades', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'actividades', 'Other Activities', 'eng');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'ultima_actualizacion', 'Última actualización:', 'esp');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'ultima_actualizacion', 'Last update:', 'eng');
SECCIONES_CV.push(seccion_cv);


var lenguaje = IDIOMAS_DISPONIBLES_EN_SITIO[0].getIdioma();