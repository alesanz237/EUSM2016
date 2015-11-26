angular.module('starter.services', [])

.factory('Speakers', function() {
  // Might use a resource here that returns a JSON array

  // Falta añadirle su CV
  var speakers = [{
    sid: 0,
    name: 'Dr. Luis O. Cañals Berrios',
    organization: 'Pontificia Universidad Católica de Puerto Rico',
    talk: 'Tecnologia de información y comunicación: Transformaciones desde lo complejo, vivir conectado, ¿Adicción a la red?',
    start:"9:00 a.m.",
    end: "10:00 a.m.",
    profile_picture: '',
    email: '',
    linkedin: '',
    webpage: '', 
    about: 'El doctor Luis O. Cañals Berrios, es psicólogo licenciado, posee un bachillerato en Ciencias Sociales  con una especialidad en Psicología de la Universidad de Puerto Rico, recinto de Cayey. Posee una maestría en Psicología industrial organizacional de la Universidad Interamericana de Puerto Rico y un doctorado en la misma área de la Pontificia Universidad Católica de Puerto Rico en Ponce. Es miembro de la Sociedad Interamericana de Psicología. Fue galardonado con la medalla Dra. María H. Márquez, reconocimiento que se le otorga al estudiante con el promedio más alto y destacado en el área de Psicología Industrial Organizacional en la Pontificia Universidad Católica de Puerto Rico en Ponce. Posee además una certificación profesional en salud y seguridad ocupacional otorgada por OSHA y otra en gestoría de entornos virtuales de aprendizaje de Columbia Centro Universitario. \nActualmente el Dr. Cañals es Catedrático Asociado en la Pontificia Universidad Católica de Puerto Rico en Ponce. Es Presidente de Cañals y Asociados. Colabora además con la División de Educación Contínua (DECA) de Columbia Centro Universitario en Caguas. '
  }, {
    sid: 1,
    name: 'Dra. Carmen G. Valcárcel Mercado',
    organization: 'Centro de mejoramiento personal',
    talk: 'Parafilias y el Internet',
    start:"10:00 a.m.",
    end: "11:00 a.m.",
    profile_picture: '../img/carmenVarcel.jpg',
    linkedin: '',
    webpage: '',
    about: 'La Dra. Carmen G. Valcárcel es doctora en medicina graduada del Recinto de Ciencias Médicas de la Universidad de Puerto Rico, clase del 1996. La Dra. Valcárcel completó una especialidad en Medicina de Emergencias en el programa de la Universidad de Puerto Rico, Recinto de Ciencias Médicas. Completó una Certificación Profesional en Sexualidad Humana de la División de Educación Continua y Estudios Profesionales de la Universidad de Puerto Rico.  La Dra. Valcárcel también completó el grado en Doctora en Filosofía en Sexología Clínica de la American Academy of Clinical Sexologists. La Dra. Valcárcel es también maestra (“Master”) de Usui Reiki tradicional.\nLa Dra. Valcárcel se dedica a la práctica de la Sexología Médica. La Dra. Valcárcel está certificada como educadora sexual por la Asociación Puertorriqueña de Educación, Consejería y Terapia Sexual. La Dra. Valcárcel ofrece charlas, talleres y entrevistas en los medios de comunicación para promover sexualidad saludable y educar al pueblo sobre asuntos de sexología. La Dra. Valcárcel es también parte de la facultad del certificado de terapia sexual de la Universidad Carlos Albizu. La Dra. Valcárcel es pasada presidenta de  la Asociación Puertorriqueña de Educación, Consejería y Terapia Sexual.'
  }, {
    sid: 2,
    name: 'Dr. Leslie E. Maldonado Feliciano',
    organization: 'VA Carribean Health Care System',
    talk: 'Consideraciones éticas y legales en la presentación de servicios psicológicos mediante Telepsicología',
    start:"11:00 a.m.",
    end: "12:00 p.m.",
    profile_picture: '../img/leslieMaldonado.jpg',
    email: '',
    linkedin: 'https://pr.linkedin.com/in/leslie-e-maldonado-83189786',
    webpage: '',
    about: ''
  }, {
    sid: 3,
    name: 'Dr. Marcos Reyes Estrada',
    organization: 'VA Carribean Health Care System',
    profile_picture: '../img/marcosReyes.jpg',
    talk: 'Integrando la tecnología (mHealth) en el escenario de psicoterapia',
    start:"1:00 p.m.",
    end: "2:00 p.m.",
    email: '',
    linkedin: '',
    webpage: '',
    about: 'Marcos Reyes-Estrada is a Clinical Psychology Doctoral Student at Ponce School of Medicine and Health Sciences. He is working with mobile technology, HIV/AIDS-related stigma, and mental health. During the last years, he has been working in the development and validation of an instrument to measure behavioural manifestation of stigma among health professionals in Puerto Rico under Dr. Nelson Varas-Díaz and Dr. Marinilda Rivera-Díaz.'
  },{
    sid: 4,
    name: 'Dra. Gertrudis Maldonado Ríos',
    organization: 'Universidad de Puerto Rico en Cayey',
    profile_picture: '../img/gertrudisMaldonado.jpg',
    talk: 'Dilemas éticas en la era digital',
    start:"2:00 p.m.",
    end: "3:00 p.m.",
    email: '',
    linkedin: '',
    webpage: '',
    about: ''
  }, {
    sid: 5,
    name: 'Dr. Axel A. Santos Figueroa',
    organization: 'Universidad de Puerto Rico en Mayagüez',
    profile_picture: '../img/axelSantos.jpg',
    talk: 'Desorden de videojuegos por Internet',
    start:"3:00 p.m.",
    end: "4:00 p.m.",
    email: '',
    linkedin: '',
    webpage: '',
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
    tid: 0,
    uid: 0,
    name: '',
    description: ''
  }, {
    tid: 1,
    uid: 1,
    name: 'Parafilias y el Internet',
    description: ''
  }, {
    tid: 2,
    uid: 2,
    name: 'Consideraciones éticas y legales en la presentación de servicios psicológicos mediante Telepsicología',
    description: ''
  },{
    tid: 3,
    uid: 3,
    name: 'Integrando la tecnología (mHealth) en el escenario de psicoterapia',
    description: ''
  },{
    tid: 4,
    uid: 4,
    name: 'Dilemas éticas en la era digital',
    description: ''
  },{
    tid: 5,
    uid: 5,
    name: 'Desorden de videojuegos por Internet',
    description: ''
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
          talk = talks[i].tio;
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
    start:"8:00",
    end: "8:45am",
    name: 'Registro',
    speaker: "",
    organization: ""
  }, {
    start:"8:45",
    end: "9:00am",
    name: 'Saludos y bienvenida',
    speaker: "Dr. Mario Medina Cabán - Rector \nDra. Rochellie Martinez Vivas - Decana de Estudiantes\nDr. Lino A. Hernández Pereira - Director del CEDE y Coordinador del EUSM",
    organization: "" 
  },{
    start:"9:00",
    end: "10:00am",
    name: 'Tecnología de información y comunicación: Transformaciones desde lo complejo, vivir conectado, ¿Adicción a la red?',
    speaker:"Dra. Carmen G. Valcárcel Mercado",
    organization: "Centro de mejoramiento personal"
  },{
    start:"10:00",
    end: "11:00am",
    name: 'Parafilias y el Internet',
    speaker: "Dra. Carmen G. Valcárcel Mercado",
    organization: "Centro de mejoramiento personal"
  },{
    start:"11:00",
    end: "12:00am",
    name: "Consideraciones éticas y legales en la presetación de servicios psicológicos mediante Telepsicología",
    speaker: "Dr. Leslie E. Maldonado Feliciano",
    organization: "VA carribean Health Care System"
  },{
    start:"12:00",
    end: "1:00pm",
    name: "Almuerzo",
    speaker: "",
    organization: ""
  },{
    start:"1:00",
    end: "2:00pm",
    name: "Integrando la tecnología móvil (mHealth en el escenario de psicoterapia",
    speaker: "Dr. Marcos Reyes Estrada",
    organization: "VA Carribean Health Care System"
  },{
    start:"2:00",
    end: "3:00pm",
    name: "Dilemas éticos en la era digital",
    speaker: "Dra. Gertrudis Maldonado Ríos",
    organization: "Universidad de Puerto Rico en Caye"
  },{
    start:"3:00",
    end: "4:00pm",
    name: "Desorden de videojuegos por internet",
    speaker: "Dr. Axel A. Santos Figueroa",
    organization: "Universidad de Puerto Rico en Mayagüez"
  },{
    start:"4:00",
    end: "4:30pm",
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

