angular.module('starter.services', [])

.factory('Speakers', function() {
  // Might use a resource here that returns a JSON array

  // Falta añadirle su CV
  var speakers = [{
    sid: 6,
    tid: 6,
    name: 'Dr. Axel A. Santos Figueroa',
    organization: 'Universidad de Puerto Rico en Mayagüez',
    profile_picture: '../img/axelSantos.jpg',
    talk: 'Desorden de videojuegos por Internet',
    email: 'axel.santos1@upr.edu',
    especialidad: 'Psicología Clínica',
    grade: 'Doctorado',
    university:'Universidad de Puerto Rico, en Río Piedras',
    facultad:'Ciencias Sociales',
    concentracion:'Psicología Clínica',
    linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAA0qt9ABCPIm6KYM8_sVDJo3yxpCO42uEs8&authType=NAME_SEARCH&authToken=4nTQ&locale=en_US&trk=tyah&goback=',
    afiliaciones: ['Asociación de Psicología de Puerto Rico', 'Colectivo Ideologías y Vivencias de los Géneros'],
    about: ''
  }, {
    sid: 2,
    tid: 2,
    name: 'Dra. Carmen G. Valcárcel Mercado',
    organization: 'Centro de mejoramiento profesional',
    profile_picture: '../img/carmenVarcel.jpg',
    talk: 'Parafilias y el Internet',
    email: 'carminmd@mac.com',
    especialidad: 'Psicología Clínica',
    grade: 'Doctorado',
    university:'Escuela de Medicina de la Universidad de Puerto Rico',
    facultad:'Medicina',
    concentracion:'Medicina y Sexología Clínica',
    linkedin: 'https://www.linkedin.com/profile/view?trk=contacts-contacts-list-contact_name-0&id=115071838',
    afiliaciones: [' Asociación Puertorriqueña de Educación Consejería y Terapia Sexual','World Association of Sexual Health'],
    about: 'La Dra. Carmen G. Valcárcel es doctora en medicina graduada del Recinto de Ciencias Médicas de la Universidad de Puerto Rico, clase del 1996. La Dra. Valcárcel completó una especialidad en Medicina de Emergencias en el programa de la Universidad de Puerto Rico, Recinto de Ciencias Médicas. Completó una Certificación Profesional en Sexualidad Humana de la División de Educación Continua y Estudios Profesionales de la Universidad de Puerto Rico.  La Dra. Valcárcel también completó el grado en Doctora en Filosofía en Sexología Clínica de la American Academy of Clinical Sexologists. La Dra. Valcárcel es también maestra (“Master”) de Usui Reiki tradicional.\nLa Dra. Valcárcel se dedica a la práctica de la Sexología Médica. La Dra. Valcárcel está certificada como educadora sexual por la Asociación Puertorriqueña de Educación, Consejería y Terapia Sexual. La Dra. Valcárcel ofrece charlas, talleres y entrevistas en los medios de comunicación para promover sexualidad saludable y educar al pueblo sobre asuntos de sexología. La Dra. Valcárcel es también parte de la facultad del certificado de terapia sexual de la Universidad Carlos Albizu. La Dra. Valcárcel es pasada presidenta de  la Asociación Puertorriqueña de Educación, Consejería y Terapia Sexual.'
  }, {
    sid: 5,
    tid: 5,
    name: 'Dra. Gertrudis Maldonado Ríos',
    organization: 'Universidad de Puerto Rico en Cayey',
    profile_picture: '../img/gertrudisMaldonado.jpg',
    talk: 'Dilemas éticos en la era digital',
    email: '',
    especialidad:'',
    grade:'',
    university:'',
    facultad:'',
    linkedin: 'https://www.linkedin.com/profile/view?trk=contacts-contacts-list-contact_name-0&id=126618339',
    afilicaciones: [],
    about: ''
    
  }, {
    sid: 3,
    tid: 3,
    name: 'Dr. Leslie E. Maldonado Feliciano',
    organization: 'VA Caribbean Healthcare System',
    profile_picture: '../img/leslieMaldonado.jpg',
    talk: 'Consideraciones éticas y legales en la presentación de servicios psicológicos mediante Telepsicología',
    email: 'psych.leslie7@gmail.com ',
    especialidad: 'Counseling Psychology',
    grade: 'Doctorado',
    university:'University of Maryland, College Park',
    facultad:'',
    concentracion:'PhD Counseling Psychology',
    linkedin: 'https://www.linkedin.com/profile/view?id=AAkAABJIzOUBDDaUoS8saoqBOJNjyhGcksqbFRg&authType=NAME_SEARCH&authToken=yVVC&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A306760933%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1448904128745%2Ctas%3Aleslie%20mal',
    afiliaciones: ['Asociación de Psicología de Puerto Rico', 'American Psychological Association'],
    about: ''
    
  },{
    sid: 1,
    tid: 1,
    name: 'Dr. Luis O Cañals',
    organization: 'Pontificia Universidad Católica de Puerto Rico',
    profile_picture: '../img/luisCanals.jpg',
    talk: 'Tecnología de información y comunicación: Transformaciones desde lo complejo, vivir conectado, ¿Adicción a la red?',
    email: 'luis_canals@pucpr.edu',
    especialidad: 'Psicología Industrial Organizacional',
    grade: 'Doctorado',
    university:'Pontificia Universidad Católica de Puerto Rico',
    facultad:'Ciencias Sociales',
    concentracion:'Psicología Industrial Ogranizacional',
    linkedin: 'https://www.linkedin.com/profile/view?trk=contacts-contacts-list-contact_name-0&id=125287946',
    afiliaciones: ['Asociación de Psicología de Puerto Rico', 'Society for media psychology and technology '],
    about: 'El doctor Luis O. Cañals Berrios, es psicólogo licenciado, posee un bachillerato en Ciencias Sociales  con una especialidad en Psicología de la Universidad de Puerto Rico, recinto de Cayey. Posee una maestría en Psicología industrial organizacional de la Universidad Interamericana de Puerto Rico y un doctorado en la misma área de la Pontificia Universidad Católica de Puerto Rico en Ponce. Es miembro de la Sociedad Interamericana de Psicología. Fue galardonado con la medalla Dra. María H. Márquez, reconocimiento que se le otorga al estudiante con el promedio más alto y destacado en el área de Psicología Industrial Organizacional en la Pontificia Universidad Católica de Puerto Rico en Ponce. Posee además una certificación profesional en salud y seguridad ocupacional otorgada por OSHA y otra en gestoría de entornos virtuales de aprendizaje de Columbia Centro Universitario. \nActualmente el Dr. Cañals es Catedrático Asociado en la Pontificia Universidad Católica de Puerto Rico en Ponce. Es Presidente de Cañals y Asociados. Colabora además con la División de Educación Contínua (DECA) de Columbia Centro Universitario en Caguas. '
  }, {
    sid: 4,
    tid: 4,
    name: 'Dr. Marcos Reyes Estrada',
    organization: 'VA Caribbean Healthcare System',
    profile_picture: '../img/marcosReyes.jpg',
    talk: 'Integrando la tecnología móvil (mHealth) en el escenario de psicoterapia',
    email: 'marcosjre@gmail.com',
    especialidad: 'Psicología Clínica',
    grade: 'Doctorado',
    university:'Ponce Health Sciences University',
    facultad:'Psicología',
    concentracion:'Psicología Clínica',
    linkedin: 'https://www.linkedin.com/profile/view?id=AAkAAAigOFMBOSZAZe0pbcj2ylFFqFnyESLWbB4&authType=NAME_SEARCH&authToken=f4e2&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A144717907%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1448904072655%2Ctas%3Amarco',
    afiliaciones: ['Asociación de Psicología de Puerto Rico', 'American Psychological Association'],
    about: ''
  }];

  return {
    all: function() {
      return speakers;
    },
    getSpeaker: function(sid) {
      var speaker = undefined;
      for (var i = 0; i < speakers.length; i++) 
        if (speakers[i].sid === parseInt(sid)) 
           speaker = speakers[i];
      return speaker
    },
  };
})

.factory('Talks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var talks = [{
    tid: 1,
    name: 'Tecnología de información y comunicación: Transformaciones desde lo complejo, vivir conectado, ¿Adicción a la red?',
    start:"9:00 a.m.",
    end: "10:00 a.m.",
    objetivos: ["Señalar las transformaciones provocadas por las tecnologías de información y comunicación",
                "Reflexionar sobre los usos de las tecnologías de información y comunicación en nuestro diario vivir",
                "Exponer el desarrollo histórico de las tecnologías de información y comunicación",
                "Mostrar ejemplos de usos y abusos en el manejo de las tecnologías de información y comunicación en diversos escenarios humanos",
                "Discutir los alcances e implicaciones de nuevas tecnologías en el quehacer humano"],
    description: 'La charla va dirigida a establecer áreas de reflexión sobre el uso de las tecnologías de información y comunicación (en adelante TIC) en diversas áreas del quehacer humano desde la cotidiano hasta los escenarios diversos donde se aplican. Se hablara de las transformaciones (sociales, económicas, laborales, salud mental, relaciones etc) que han provocado las TIC desde su inicio.  Se abordaran las teorías de la complejidad para tratar de entender este fenómeno a la luz de dichas transformaciones. Se mostraran ejemplos de las diversas transformaciones que han provocado las TIC en diversos escenarios. Se dedicara un espacio a las transformaciones de las TIC en aspectos humanos tales como salud, trabajo, educación.'
  }, {
    tid: 2,
    name: 'Parafilias y el Internet',
    start:"10:00 a.m.",
    end: "11:00 a.m.",
    objetivos:["Presentar la necesidad de literacia digital en los profesionales de la salud mental",
                "Brindar estadísticas del uso de los medios digitales y su acceso en nuestra sociedad",
                "Enumerar conductas asociadas a la digitalización que pueden causar problemas en la salud mental",
                "Discutir diversas estrategias para manejar problemas de salud mental asociados a la digitalización"],
    description: 'La salud mental en la era digital presenta un reto a nuestras profesiones de ayuda. Ya sea desde el punto de vista de nuestros clientes, pacientes, estudiantes o el propio la digitalización permea nuestro pensamiento e influye en cada decisión. La digitalización nos lleva a vivir de la inmediatez, crea nuevas ansiedades y patologías. Es por eso que debemos aprender a vivir con la tecnología y su diversidad de expresiones. Como profesionales debemos mantener una visión amplia, abierta e inquisitiva de las aplicaciones de las tecnologías digitales. El conocimiento y estudio detallado de las tecnologías digitales permite que podamos tomar ventaja de s9u. alcance. Es esencial trabajar con nuestros prejuicios y miedos a la tecnología digital para ser efectivos. Cuando miramos detenidamente los retos actuales que presentan nuestros jóvenes en el desarrollo de su salud mental encontramos una amplia influencia de problemas asociados a la digitalización. Tal vez el ejemplo mas obvio para la mayoría es el uso de las redes sociales. Estos problemas pueden ser considerados poco importantes pero hemos visto casos de abuso, trata humana, suicidios y un sinfín de trastornos. Esto hace esencial que entendamos el funcionamiento de las redes para crear estrategias efectivas del uso de estas.'
  }, {
    tid: 3,
    start:"11:00 a.m.",
    end: "12:00 p.m.",
    name: 'Consideraciones éticas y legales en la presentación de servicios psicológicos mediante Telepsicología',
    objetivos:["Exhortar a la observación y cumplimiento de disposiciones legales, éticas y reglamentarias relacionadas a la prestación de servicios mediante Telepsicología",
               "Informar sobre las normas éticas y disposiciones legales aplicables a la prestación de servicios mediante Telepsicología",
               "Informar sobre las guías adoptadas por juntas examinadoras y asociaciones profesionales relacionadas a la prestación de servicios mediante Telepsicología",
               "Informar sobre los retos, controversias, iniciativas y mecanismos en desarrollo para facilitar los servicios Telepsicológicos en multiples jurisdicciones"],
    description: 'El uso de la tecnología continua recibiendo mucho auge en el ejercicio profesional de la psicología.  Al igual que los servicios presenciales, los servicios mediante Telepsicología están sujetos a la observación y cumplimiento de disposiciones legales, éticas y reglamentarias promulgadas por juntas examinadoras, asociaciones profesionales y otras entidades concernidas con el trabajo psicológico.  Los servicios por Telepsicología plantean un reto en la aplicación de leyes, normas y reglamentos por cuanto dichos servicios conllevan trascender fronteras jurisdiccionales.  La Telepsicología plantea nuevos modos para la movilidad del profesional que cumple con requisitos de licenciamiento sustancialmente equivalentes en diversas jurisdicciones.  Por ello, conviene que los profesionales de la psicología conozcan sobre los aspectos ético-legales que rigen la prestación de servicios mediante Telepsicología, los retos y las guías adoptadas para el ofrecimiento de servicios de calidad asegurando en todo momento la protección y bienestar de las personas que reciben servicios psicológicos.'
  },{
    tid: 4,
    name: 'Integrando la tecnología (mHealth) en el escenario de psicoterapia',
    start:"1:00 p.m.",
    end: "2:00 p.m.",
    objetivos:["Definir conceptos sobre el uso de tecnología móvil en psicoterapia (mHealth)",
                "Comprender el papel de la tecnología móvil en la psicoterapia",
                "Identificar herramientas móviles útiles para realizar intervenciones psicoterapéuticas",
                "Discutir estrategias efectivas para la integración de tecnología mívil en la psicoterapia"],
    description: 'Durante los últimos años los avances en la tecnología móvil han permitido nuevos adelantos en el campo de la salud. Este campo ha sido llamado salud móvil o "mHealth". Aunque el mayor desarrollo del campo de la salud móvil se ha visto en el área de la medicina, el campo de la salud mental ha demostrado de igual forma sus avances. Por ejemplo, estudios han documentado la efectividad y eficacia de intervenciones psicoterapéuticas para el tratamiento de trastornos de ansiedad, depresión y personalidad mediante el uso de aplicaciones móviles. De igual forma, estos avances se han podido documentar con el desarrollo de aplicaciones móviles para el manejo cognitivo-conductual de condiciones crónicas como diabetes, hipertensión y cáncer. Este escenario es uno de mucho potencial en Puerto Rico considerando que más de 3 millones de personas poseen un dispositivo móvil. Esto permite extender el acceso a servicios de salud mental, como también, facilitar la intervención efectiva de tratamientos psicoterapéuticos basados en evidencia. No obstante, los cambios rápidos en el campo de la tecnología y la necesidad de adaptaciones culturales para aplicaciones móviles presentan grandes retos para la implementación de estas nuevas tecnologías en el escenario de psicoterapia. Esta presentación tiene el objetivo de discutir el uso e integración de tecnología móvil en el escenario de psicoterapia y los retos al presente para su implementación efectiva.'
  },{
    tid: 5,
    start:"2:00 p.m.",
    end: "3:00 p.m.",
    name: 'Dilemas éticos en la era digital',
    objetivos: ["Revisión Histórica del Impacto que ha tenido la Tecnología en el Área de la Salud Mental.", 
                "Identificar las Diversas Situaciones en que la Práctica Clínica se Beneficia.",
                "Contrastar las formas adversas de la tecnología",
                "Planteamientos éticos ante las áreas amenazadas",
                "Resoluciones éticas para la práctica clínica"],
    description: ''
  },{
    tid: 6,
    name: 'Desorden de videojuegos por Internet',
    start:"3:00 p.m.",
    end: "4:00 p.m.",
    objetivos: ["Presentar información sobre el uso de videojuegos en Internet ",
                "Conocer los criterios diagnósticos del Desorden por Uso de Videojuegos en Internet  de acuerdo al DSM 5",
                "Presentar el Proyecto EDUVI (Encuesta sobre el Desorden por Uso de Videojuegos en Internet) que se realiza en el Recinto Universitario de Mayaguez de la UPR "
              ],
    description: '1.  La Quinta Edición del Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM 5, 2013) incluye una nueva sección identificada como Instrumentos de medición y nuevos modelos (Sección III).  En esta sección se incluyen condiciones de salud mental y criterios específicos de conductas desadaptativas que requieren investigación adicional para ser incluidos en el futuro en la Sección II (Criterios diagnósticos y Códigos) del manual. Una de las condiciones incluidas en esta sección es el Desorden por uso de Videojuegos en Internet (Internet Gaming Disoder). Por ser una condición que requiere mayor investigación, en Puerto Rico todavía no se han realizado estudios con el propósito de desarrollar un instrumento para evaluar este desorden que se ajuste a los criterios diagnósticos propuestos en el DSM 5.  Tampoco se han evaluado las propiedades psicométricas (confiabilidad y validez) de instrumentos para evaluar esta variable.  Al presente no se han identificado estudios que hayan documentado la prevalencia de este trastorno, así como los hábitos de uso de videojuegos en internet en poblaciones universitarias en Puerto Rico. Finalmente, no se han encontrado estudios en Puerto Rico que documenten el impacto de los videojuegos en internet en la salud mental de la población universitaria.  Esta presentación tiene el propósito de dialogar sobre un proyecto que se realiza en Puerto Rico que tiene como objetivo la construcción de un instrumento que incluye los criterios diagnósticos del desorden propuesto en la sección III del  DSM 5, la evaluación de sus propiedades psicométricas  y la documentación de la prevalencia del desorden en una población de estudiantes universitarios.'
  }];

  return {
    all: function() {
      return talks;
    },
    remove: function(talk) {
      talks.splice(talks.indexOf(talk), 1);
    },
    getTalk: function(tid) {
      var talk = undefined;
      for (var i = 0; i < talks.length; i++) {
        if (talks[i].tid === parseInt(tid)) {
          talk = talks[i];
        }
      }
      return talk;
    },
  };
})

.factory('Schedule',function(){
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var schedule = [{
    start:"8:00 a.m.",
    end: "8:45 a.m.",
    name: 'Registro',
    speaker: "",
    organization: ""
  }, {
    start:"8:45 a.m.",
    end: "9:00 a.m.",
    name: 'Saludos y bienvenida',
    speaker: ["Dr. Mario Medina Cabán - Rector", "Dra. Rochellie Martinez Vivas - Decana de Estudiantes","Dr. Lino A. Hernández Pereira - Director del CEDE y Coordinador del EUSM"],
    organization: "" 
  },{
    start:"9:00 a.m.",
    end: "10:00 a.m.",
    tid: 1,
    name: 'Tecnología de información y comunicación: Transformaciones desde lo complejo, vivir conectado, ¿Adicción a la red?',
    speaker:["Dr. Luis O. Cañals"],
    organization: "Centro de mejoramiento personal"
  },{
    start:"10:00 a.m.",
    end: "11:00 a.m.",
    tid: 2,
    name: 'Parafilias y el Internet',
    speaker:["Dra. Carmen G. Valcárcel Mercado"],
    organization: "Centro de mejoramiento personal"
  },{
    start:"11:00 a.m.",
    end: "12:00 p.m.",
    tid: 3,
    name: "Consideraciones éticas y legales en la presetación de servicios psicológicos mediante Telepsicología",
    speaker:["Dr. Leslie E. Maldonado Feliciano"],
    organization: "VA carribean Health Care System"
  },{
    start:"12:00 p.m.",
    end: "1:00 p.m.",
    name: "Almuerzo",
    speaker: "",
    organization: ""
  },{
    start:"1:00 p.m.",
    end: "2:00 p.m.",
    tid: 4,
    name: "Integrando la tecnología móvil (mHealth en el escenario de psicoterapia",
    speaker:["Dr. Marcos Reyes Estrada"],
    organization: "VA Carribean Health Care System"
  },{
    start:"2:00 p.m.",
    end: "3:00 p.m.",
    tid: 5,
    name: "Dilemas éticos en la era digital",
    speaker:["Dra. Gertrudis Maldonado Ríos"],
    organization: "Universidad de Puerto Rico en Cayey"
  },{
    start:"3:00 p.m.",
    end: "4:00 p.m.",
    tid: 6,
    name: "Desorden de videojuegos por internet",
    speaker:["Dr. Axel A. Santos Figueroa"],
    organization: "Universidad de Puerto Rico en Mayagüez"
  },{
    start:"4:00 p.m.",
    end: "4:30 p.m.",
    name: "Evaluación y Cierre",
    speaker: "",
    organization: ""
  }];

  return {
    all: function(){
      return schedule;
    },
    remove: function(schedule_a){
      schedule.splice(schedule.indexOf(schedule_a), 1);
    }
  };
})

