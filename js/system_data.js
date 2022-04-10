const IDIOMAS_DISPONIBLES_EN_SITIO = [];
const RRSS = [];
const CANTIDAD_MAX_ELEMENTOS = 4;



let idioma_del_sitio = new Idioma_del_sitio('Español', 'ico-espanol.png');
IDIOMAS_DISPONIBLES_EN_SITIO.push(idioma_del_sitio);
idioma_del_sitio = new Idioma_del_sitio('English', 'ico-ingles.png');
IDIOMAS_DISPONIBLES_EN_SITIO.push(idioma_del_sitio);


let rrss_sistema = new Rrss('Instagram', 'logos_Instagram.png');
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Flickr', 'logos_Flickr.png');
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Linkedin', 'logos_Linkedin.png');
RRSS.push(rrss_sistema);
rrss_sistema = new Rrss('Behance', 'logos_Behance.png');
RRSS.push(rrss_sistema);