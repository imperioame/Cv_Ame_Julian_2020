export const IDIOMAS_DISPONIBLES_EN_SITIO = [];
export const RRSS = [];
export const SECCIONES_CV = [];
export const CANTIDAD_MAX_ELEMENTOS = 4;
export const ULTIMA_FECHA_DE_ACTUALIZACION = "Feb. 2023";



let idioma_del_sitio = new Idioma_del_sitio('es','Español', new URL('../img/icos/idiomas/ico-espanol.png', import.meta.url));
IDIOMAS_DISPONIBLES_EN_SITIO.push(idioma_del_sitio);
idioma_del_sitio = new Idioma_del_sitio('en', 'English', new URL('../img/icos/idiomas/ico-ingles.png', import.meta.url));
IDIOMAS_DISPONIBLES_EN_SITIO.push(idioma_del_sitio);


let rrss_sistema = new Rrss('Instagram', new URL('../img/logos_rrss/logos_Instagram.png', import.meta.url));
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Flickr', new URL('../img/logos_rrss/logos_Flickr.png', import.meta.url));
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Linkedin', new URL('../img/logos_rrss/logos_Linkedin.png', import.meta.url));
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Behance', new URL('../img/logos_rrss/logos_Behance.png', import.meta.url));
RRSS.push(rrss_sistema);

let seccion_cv = new Seccion_cv('original', 'detalles', 'Detalles', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'detalles', 'Details', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'educacion', 'Educación', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'educacion', 'Education', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'competencias', 'Competencias', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'competencias', 'Habilities', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'softwares', 'Software', );
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'idioma_usuario', 'Idiomas', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'idioma_usuario', 'Languages', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'rrss', 'RRSS', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'rrss', 'Social', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'perfil', 'Perfil', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'perfil', 'Profile', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'experiencia_laboral', 'Experiencia Laboral', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'experiencia_laboral', 'Experience', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'actividades', 'Otras Actividades', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'actividades', 'Other Activities', 'en');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'ultima_actualizacion', 'Última actualización:', 'es');
SECCIONES_CV.push(seccion_cv);
seccion_cv = new Seccion_cv('original', 'ultima_actualizacion', 'Last update:', 'en');
SECCIONES_CV.push(seccion_cv);