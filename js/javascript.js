//Hola este archivo es el JS general




//Abrir el header xd
fetch("componentes/header.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el header");
    }

    return response.text();
  })
  .then(header => {
    document.querySelector("#header-container").innerHTML = header;
  })
  .catch(error => {
    console.error(error);
  });



  //Aparir de aqui voy a poner todos las demas fuciones de JS, de preferencia solo hay que usar un Archivo JS para mas simplicidad 
const openBtn = document.getElementById("Open-Modal");
const closeBtn = document.getElementById("Close-Modal");
const modal = document.getElementById("Modal");

// Como este JS es general y se comparte entre páginas, algunas no tienen
// el modal. Sin este "if" el script truena en esas páginas y nada de lo
// que sigue abajo se ejecuta.
if (openBtn && closeBtn && modal) {
  openBtn.addEventListener("click", () => {
    modal.classList.add("Open");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("Open");
  });
}




const modelos = [
    "assets/GorraPiratas.glb",
    "assets/GorraTigres.glb",
    "assets/GorraPericos.glb",
    "assets/GorraOlmecas.glb",
    "assets/GorraLeones.glb",
    "assets/GorraGuerreros.glb",
    "assets/GorraElAguila.glb",
    "assets/GorraDiablos.glb",
    "assets/GorraConspiradores.glb",
    "assets/GorraBravos.glb",
    "assets/Silla-de-angel-para-AR.glb",
    "assets/resetVectorsv2.glb",
];

let modeloActual = 0;

function cambiarModelo() {
    const modelViewer = document.getElementById("miModelo");
    if (!modelViewer) return; // esta página no tiene el model-viewer

    let nuevoModelo;

    do {
        nuevoModelo = Math.floor(Math.random() * modelos.length);
    } while (nuevoModelo === modeloActual && modelos.length > 1);

    modeloActual = nuevoModelo;

    modelViewer.src = modelos[modeloActual];
}

// - - - - - TRIVIA - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - PREGUNTAS
const equipos = [
  {
    nombre: "Leones de Yucatán", // - - - - - LEONES DE YUCATÁN
    preguntas: [
      {pregunta: "Año de fundación de los Leones de Yucatán",
        opciones: ["1960", "1954", "1957"],
        correcta: "1954"},
      {pregunta: "¿De dónde viene el nombre 'Leones'?",
        opciones: ["De una cervecera", "Por un parque", "Por un León real"],
        correcta: "De una cervecera"},
      {pregunta: "¿Cuál fue el resultado del partido debut para los Leones?",
        opciones: ["Victoria 8-0 contra los Tecolotes de Nuevo Laredo", "Derrota 1-5 contra los Olmecas de Tabasco", "Victoria 4-0 contra los Sultanes de Monterrey"],
        correcta: "Victoria 8-0 contra los Tecolotes de Nuevo Laredo"},
      {pregunta: "¿Cuál es el apodo de la afición de los leones?",
        opciones: ["Los Reyes", "Los Felinos", "Los Melenudos"],
        correcta: "Los Melenudos"},
      {pregunta: "¿Cuál es el apodo del estadio de los Leones 'Kukulcán Álamo'?",
        opciones: ["La Guarida", "La Cueva", "La Sabana"],
        correcta: "La Cueva"}
      ]
  },

  {
    nombre: "Olmecas de Tabasco", // - - - - - OLMECAS DE TABASCO
    preguntas: [
      {pregunta: "Año de fundación de los Olmecas de Tabasco",
        opciones: ["1970", "1975", "1982"],
        correcta: "1975"},
      {pregunta: "¿En qué ciudad tienen su sede los Olmecas de Tabasco?",
        opciones: ["Villahermosa", "Cárdenas", "Comalcalco"],
        correcta: "Villahermosa"},
      {pregunta: "¿Cuál es el apodo de los Olmecas de Tabasco?",
        opciones: ["Los Cabezones", "Los Chocos", "Los Jaguares"],
        correcta: "Los Cabezones"},
      {pregunta: "¿En qué año obtuvieron su único título los Olmecas?",
        opciones: ["1990", "1993", "1997"],
        correcta: "1993"},
      {pregunta: "¿Cuál fue uno de los nombres antiguos del equipo de Los Olmecas?",
        opciones: ["Cardenales", "Guerreros", "Petroleros"],
        correcta: "Cardenales"}
      ]
  },

  {
    nombre: "Pericos de Puebla", // - - - - - PERICOS DE PUEBLA
    preguntas: [
      {pregunta: "Año de fundación de los Pericos de Puebla",
        opciones: ["1938", "1942", "1947"],
        correcta: "1942"},
      {pregunta: "¿Cuál es el estadio de los Pericos de Puebla?",
        opciones: ["Estadio Hermanos Serdán", "Estadio Cuauhtémoc", "Estadio Zaragoza"],
        correcta: "Estadio Hermanos Serdán"},
      {pregunta: "¿Cómo se llama la mascota de los Pericos de Puebla?",
        opciones: ["Panchito el perico", "Pepe el perico", "Paco el perico"],
        correcta: "Pepe el perico"},
      {pregunta: "¿En qué año obtuvieron su último título Los Pericos?",
        opciones: ["2018", "2021", "2023"],
        correcta: "2023"},
      {pregunta: "¿Qué otro nombre llegó a tener la franquicia de Los Pericos?",
        opciones: ["Ángeles Negros", "Águilas Blancas", "Halcones de Puebla"],
        correcta: "Ángeles Negros"}
    ]
  },

  {
    nombre: "Piratas de Campeche", // - - - - - PIRATAS DE CAMPECHE
    preguntas: [
      {pregunta: "Año de fundación de los Piratas de Campeche",
        opciones: ["1976", "1980", "1984"],
        correcta: "1980"},
      {pregunta: "¿Qué franquicia heredaron para su fundación los Piratas?",
        opciones: ["Alacranes de Durango", "Mineros de Zacatecas", "Algodoneros de Unión Laguna"],
        correcta: "Alacranes de Durango"},
      {pregunta: "¿Cómo se llama la mascota inspirada en un pirata holandés de Los Piratas de Campeche?",
        opciones: ["Lorencillo", "Barbanegra", "El Corsario"],
        correcta: "Lorencillo"},
      {pregunta: "¿Cuál es el sonido para celebrar batazos o carreras importantes de Los Piratas?",
        opciones: ["Una campana", "Un cañón", "Una sirena"],
        correcta: "Un cañón"},
      {pregunta: "¿Qué parte de la ciudad está arraigada a la identidad de Los Piratas?",
        opciones: ["Sus murallas", "Su malecón", "Sus plazas"],
        correcta: "Sus murallas"}
    ]
  },

  {
    nombre: "Tigres de Quintana Roo", // - - - - - TIGRES DE QUINTANA ROO
    preguntas: [
      {pregunta: "Año de fundación de los Tigres de Quintana Roo",
        opciones: ["1955", "1958", "1962"],
        correcta: "1955"},
      {pregunta: "¿Cuál es el lema de los Tigres de Quintana Roo?",
        opciones: ["El equipo que nació campeón", "El orgullo de Quintana Roo", "Siempre campeones"],
        correcta: "El equipo que nació campeón"},
      {pregunta: "¿Cuántos títulos de la LMB tienen los Tigres?",
        opciones: ["10", "12", "14"],
        correcta: "12"},
      {pregunta: "¿En qué ciudad se originó el equipo de los Tigres?",
        opciones: ["Cancún", "Ciudad de México", "Puebla"],
        correcta: "Ciudad de México"},
      {pregunta: "¿En qué ciudad se encuentra actualmente el equipo de los Tigres?",
        opciones: ["Chetumal", "Playa del Carmen", "Cancún"],
        correcta: "Cancún"}
    ]
  },

  {
    nombre: "Bravos de León", // - - - - - BRAVOS DE LEÓN
    preguntas: [
      {pregunta: "¿Cuál era el primer nombre de los Bravos?",
        opciones: ["Cachorros de León", "Leones de León", "Tigres de León"],
        correcta: "Cachorros de León"},
      {pregunta: "¿Cuál de estos jugadores es un lanzador zurdo de los Bravos?",
        opciones: ["Ángel López", "Jaime Orozco", "Jack Pierce"],
        correcta: "Ángel López"},
      {pregunta: "¿Cuándo fue el primer campeonato de los Bravos?",
        opciones: ["Septiembre de 1988", "Septiembre de 1990", "Septiembre de 1992"],
        correcta: "Septiembre de 1990"},
      {pregunta: "¿Qué jugador rompió, en 1986, un récord establecido por Héctor Espino para los Bravos?",
        opciones: ["Jack Pierce", "Roberto Vizcarra", "Wilie Aikens"],
        correcta: "Jack Pierce"},
      {pregunta: "¿Dónde juegan actualmente los Bravos?",
        opciones: ["Estadio Domingo Santa Ana", "Estadio Hermanos Serdán", "Estadio Kukulcán Álamo"],
        correcta: "Estadio Domingo Santa Ana"}
    ]
  },

  {
    nombre: "Conspiradores de Querétaro", // - - - - - CONSPIRADORES DE QUERÉTARO
    preguntas: [
      {pregunta: "¿En qué año se fundó el equipo de los Conspiradores?",
        opciones: ["2020", "2022", "2024"],
        correcta: "2022"},
      {pregunta: "¿Por qué obtuvieron ese nombre los Conspiradores?",
        opciones: ["Por la Conspiración de 1810", "Por una batalla de 1821", "Por un movimiento de 1910"],
        correcta: "Por la Conspiración de 1810"},
      {pregunta: "¿Cuántos juegos ganaron durante la temporada 2024 Los Conspiradores?",
        opciones: ["45 juegos", "50 juegos", "55 juegos"],
        correcta: "50 juegos"},
      {pregunta: "¿Cuál de estos jugadores es receptor de los Conspiradores?",
        opciones: ["Daniel Sierra", "Carlos Paulino", "Rio Ruiz"],
        correcta: "Daniel Sierra"},
      {pregunta: "¿Contra quiénes jugaron por primera vez para Los Conspiradores?",
        opciones: ["Tigres de Quintana Roo", "Diablos Rojos", "Guerreros de Oaxaca"],
        correcta: "Tigres de Quintana Roo"}
    ]
  },

  {
    nombre: "Diablos Rojos del México", // - - - - - DIABLOS ROJOS DEL MÉXICO
    preguntas: [
      {pregunta: "¿En qué año se fundó el equipo de los Diablos Rojos?",
        opciones: ["1935", "1940", "1945"],
        correcta: "1940"},
      {pregunta: "¿Cuántos títulos tienen los Diablos Rojos?",
        opciones: ["14 títulos", "16 títulos", "18 títulos"],
        correcta: "18 títulos"},
      {pregunta: "¿Qué jugador legendario proveniente del equipo de Diablos posee muchos récords?",
        opciones: ["Alfredo Ortiz", "Alonso Perry", "Ramón Montoya"],
        correcta: "Alfredo Ortiz"},
      {pregunta: "¿Quién es el dueño del equipo de los Diablos que le da el nombre a su estadio actual?",
        opciones: ["Alfredo Harp Helú", "Miguel Ojeda", "Salomé Barojas"],
        correcta: "Alfredo Harp Helú"},
      {pregunta: "¿Qué manager les ayudó a ganar su primer premio en 1965 a los Diablos Rojos?",
        opciones: ["Lázaro Salazar", "Alfredo Ortiz", "Ty Gainey"],
        correcta: "Lázaro Salazar"}
    ]
  },

  {
    nombre: "El Águila de Veracruz", // - - - - - EL ÁGUILA DE VERACRUZ
    preguntas: [
      {pregunta: "¿Qué empresario creó el equipo del Aguila a base de su compañía petrolera?",
        opciones: ["Sir Weetman Pearson", "Alfredo Harp Helú", "Martín Dihigo"],
        correcta: "Sir Weetman Pearson"},
      {pregunta: "¿Quién lanzó el primer sin hit-sin carrera de la historia del Aguila?",
        opciones: ["Martín Dihigo", "Humberto Sosa", "Al Pinkston"],
        correcta: "Martín Dihigo"},
      {pregunta: "¿En qué año se obtuvieron más cuadrangulares para El Aguila?",
        opciones: ["2001", "2005", "2010"],
        correcta: "2005"},
      {pregunta: "¿En qué año se fundó el equipo del Aguila?",
        opciones: ["1920", "1925", "1930"],
        correcta: "1925"},
      {pregunta: "¿En qué año regresaron El Aguila al Estadio Beto Ávila?",
        opciones: ["2019", "2021", "2023"],
        correcta: "2021"}
    ]
  },

  {
    nombre: "Guerreros de Oaxaca", // - - - - - GUERREROS DE OAXACA
    preguntas: [
      {pregunta: "¿Qué jugador produjo el récord de carreras producidas en 1997 para los Guerreros?",
        opciones: ["Nelson Barrera Romero", "Óscar Robles", "Carlos Rivera"],
        correcta: "Nelson Barrera Romero"},
      {pregunta: "¿En qué año obtuvieron su único campeonato los Guerreros?",
        opciones: ["1996", "1998", "2000"],
        correcta: "1998"},
      {pregunta: "¿Cuál de estos fue uno de los jugadores destacados para los Guerreros?",
        opciones: ["Óscar Robles", "Erick Rodríguez", "Jaime Brena"],
        correcta: "Óscar Robles"},
      {pregunta: "¿Quién propuso el nombre del equipo de Los Guerrreros en un concurso?",
        opciones: ["Erasto Venegas", "Alfredo Ortiz", "Nelson Barrera Romero"],
        correcta: "Erasto Venegas"},
      {pregunta: "¿Quién fue el primer manager de los Guerreros?",
        opciones: ["Alfredo “el Zurdo” Ortiz", "Óscar Robles", "Bárbaro Cañizares"],
        correcta: "Alfredo “el Zurdo” Ortiz"}
    ]
  }
];

const NIVEL_ORO    = 0.9; // porcentaje mínimo para cada nivel
const NIVEL_PLATA  = 0.7;
const NIVEL_BRONCE = 0.4;
const TOTAL_RONDAS = 5;
const PREGUNTAS_POR_RONDA = 10;
const TIEMPO_RONDA = 120;
const PUNTOS_POR_PREGUNTA = 100;
const PUNTOS_PARA_GANAR = 900;


// - - - - - ELEMENTOS DOM


const bienvenido   = document.querySelector(".Bienvenido");
const btnEmpezar   = document.getElementById("Empezar");

// Este JS es general y se comparte entre páginas; solo la página de la
// trivia tiene el botón "Empezar". Metemos toda la lógica de la trivia
// dentro de este "if" para que, en el resto de las páginas, el script
// no truene buscando elementos que ahí no existen.
if (btnEmpezar) {

  const infoTest     = document.querySelector(".InfoTest");
  const tituloInterior = document.querySelector(".titulo-interior");
  const contenedorPregunta = document.querySelector(".pregunta");
  const victoria     = document.querySelector(".Victoria");

  const spanActual   = document.getElementById("current");
  const spanTotal    = document.getElementById("total");
  const spanTiempo   = document.getElementById("time");
  const spanScore    = document.getElementById("score");

  const tituloPregunta = document.getElementById("Titulo-de-pregunta");
  const radios       = document.querySelectorAll(".answer");
  const btnEnviar    = document.getElementById("enviar");

  const tituloFinal  = document.querySelector(".titulo-Final");
  const mensajeFinal = document.getElementById("resultado-mensaje");
  const finalScore   = document.getElementById("final-score");
  const tiempoFinal  = document.getElementById("completition-time");
  const btnSiguiente = document.getElementById("Siguiente");
  const btnMenu      = document.querySelector(".Menu1");

  // - - - - - PÁRRAFO EXTRA

  const resumenTotal = document.createElement("p"); //Se crea la etiqueta de párrafo
  resumenTotal.id = "resumen-total"; //Se le crea un ID
  victoria.insertBefore(resumenTotal, btnSiguiente); //Dentro de la clase victoria se agrega el párrafo creado, justo antes de btnSiguiente


  // - - - - - ESTADO DEL JUEGO

  let preguntasPorEquipo = [];
  let rondaActual = 1; // De 1 a 5
  let ronda = []; // Las 10 preguntas de cada ronda
  let preguntaActual = 1; // De 1 a 10
  let puntaje = 0; // Puntaje de la ronda
  let puntajeTotal = 0; // Puntaje acumulado entre todas las rondas
  let tiempoTotal = 0; // Tiempo acumulado entre todas las rondas
  let tiempoRestante = TIEMPO_RONDA;
  let intervalo = null; // Guardará el temporizador
  let rondaActiva = false;

  // - - - - - UTILIDADES

  function mezclar(arreglo) { // - - - - - Función para mezclar las preguntas
    const copia = [...arreglo]; // Se crea una copia del arreglo para no modificar el original
    // Algoritmo para mezclar elementos de forma aleatoria:
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function mostrar(elemento, visible) { // - - - - - Función que recibe un elemento y un booleano para mostrarlo o esconderlo
    if (visible) {
      elemento.style.display = ""; // El "" hace que js no determine si se ve o no
    } else {
      elemento.style.display = "none"; // El "none" hace que js lo oculte
    }
  }

  // - - - - - PANTALLAS

  function mostrarMenu() { // Muestra mensaje de bienvenida y botón de empezar. Oculta la información del juego y los resultados
    detenerTimer();
    rondaActiva = false;
    mostrar(bienvenido, true);
    mostrar(btnEmpezar, true);
    mostrar(infoTest, false);
    mostrar(contenedorPregunta, false);
    mostrar(victoria, false);
  }

  function mostrarJuego() { // Oculta lo que se mostraba en el menú y muestra lo que estaba oculto
    mostrar(bienvenido, false);
    mostrar(btnEmpezar, false);
    mostrar(infoTest, true);
    mostrar(contenedorPregunta, true);
    mostrar(victoria, false);
  }

  function mostrarResultado(tiempoAgotado, tiempoUsado) { //recibe un booleano y un int
    const esUltimaRonda = rondaActual === TOTAL_RONDAS;

    mostrar(infoTest, false); // Se cambia a la pantalla de resultados
    mostrar(contenedorPregunta, false);
    mostrar(victoria, true);


  victoria.classList.remove(
    "estado-ganaste", "estado-tiempo", "estado-intento",
    "nivel-oro", "nivel-plata", "nivel-bronce", "nivel-triste"
  );
  mensajeFinal.textContent = ""; // vacío por defecto (rondas intermedias)

  if (esUltimaRonda) {
    const porcentaje = puntajeTotal / (TOTAL_RONDAS * PREGUNTAS_POR_RONDA * PUNTOS_POR_PREGUNTA);
    tituloFinal.textContent = "¡Trivia completada!";

    if (porcentaje >= NIVEL_ORO) {
      mensajeFinal.textContent = "¡Perfecto!";
      victoria.classList.add("nivel-oro");
    } else if (porcentaje >= NIVEL_PLATA) {
      mensajeFinal.textContent = "¡Excelente!";
      victoria.classList.add("nivel-plata");
    } else if (porcentaje >= NIVEL_BRONCE) {
      mensajeFinal.textContent = "¡Buen trabajo!";
      victoria.classList.add("nivel-bronce");
    } else {
      mensajeFinal.textContent = "¡Sigue practicando!";
      victoria.classList.add("nivel-triste");
    }
  } else if (tiempoAgotado) {
    tituloFinal.textContent = "¡Se acabó el tiempo!";
    victoria.classList.add("estado-tiempo");
  } else if (puntaje >= PUNTOS_PARA_GANAR) {
    tituloFinal.textContent = "¡Felicidades!";
    victoria.classList.add("estado-ganaste");
  } else {
    tituloFinal.textContent = "¡Buen intento!";
    victoria.classList.add("estado-intento");
  }

    finalScore.textContent = puntaje;
    tiempoFinal.textContent = tiempoUsado;

    if (esUltimaRonda) {
      resumenTotal.textContent =
        `Puntuación Total: ${puntajeTotal}/${TOTAL_RONDAS * 1000}   ·   Tiempo total: ${tiempoTotal} segundos`; // Ejemplo: "Puntaje total: 4200/5000 · Tiempo total: 310 segundos"
      mostrar(btnSiguiente, false); // Se oculta el botón siguiente porque ya no quedan más rondas
    } else {
      resumenTotal.textContent =
        `Ronda ${rondaActual} de ${TOTAL_RONDAS}   ·   Puntuación Total: ${puntajeTotal} puntos`; // Ejemplo: "Ronda 2 de 5 · Acumulado: 1700 puntos"
      mostrar(btnSiguiente, true); // Se da la opción de seguir porque aún quedan rondas
    }
  }

  // - - - - - TEMPORIZADOR

  function iniciarTimer() {
    detenerTimer(); // Se asegura de que se detenga cualquier temporizador
    tiempoRestante = TIEMPO_RONDA;
    spanTiempo.textContent = tiempoRestante; // Se muestra el tiempo

    intervalo = setInterval(() => { // Se crea un temporizador
      tiempoRestante--; //Se resta un segundo
      spanTiempo.textContent = tiempoRestante; // Se actualiza el html con el tiempo actual

      if (tiempoRestante <= 0) { // Se verifica que no se haya acabado el tiempo
        terminarRonda(true);
      }
    }, 1000); //Se ejecuta cada segundo
  }

  function detenerTimer() {
    clearInterval(intervalo); // Detiene el temporizador
    intervalo = null; // Ya no hay ningún temporizador guardado en intervalo
  }

  // - - - - - LÓGICA DEL JUEGO

  function nuevaPartida() {
    preguntasPorEquipo = equipos.map((eq) => mezclar(eq.preguntas)); // Recorre el arreglo de equipos y mezcla las preguntas de cada uno
    rondaActual = 1;
    puntajeTotal = 0;
    tiempoTotal = 0;
    empezarRonda();
  }

  function siguienteRonda() {
    rondaActual++;
    empezarRonda();
  }

  function empezarRonda() {
    // 1 pregunta por equipo para esta ronda, en orden aleatorio.
    // rondaActual es 1 a 5, por eso restamos 1 para indexar el arreglo (0 a 4).
    ronda = mezclar(
      equipos.map((eq, i) => ({ ...preguntasPorEquipo[i][rondaActual - 1], equipo: eq.nombre })) // Recorre los equipos y va tomando las preguntas en la posición i para crear un arreglo con una pregunta de cada equipo
    );

    preguntaActual = 1; // Pregunta actual de la ronda (1 a 10)
    puntaje = 0; // Se reinicia el puntaje de la ronda
    rondaActiva = true;
    spanScore.textContent = puntaje; // Se muestra el nuevo puntaje (0)
    spanTotal.textContent = ronda.length; // Se muestra cuántas preguntas hay
    tituloInterior.textContent = `TRIVIA · RONDA ${rondaActual}/${TOTAL_RONDAS}`; // Se muestra el número de ronda

    mostrarJuego(); // Pantalla de juego
    cargarPregunta();
    iniciarTimer();
  }

  function cargarPregunta() {
    const p = ronda[preguntaActual - 1]; // Se obtiene la pregunta actual
    const opciones = mezclar(p.opciones); // Se mezclan las opciones

    spanActual.textContent = preguntaActual; // Se muestra el número de pregunta
    tituloPregunta.textContent = p.pregunta; // Texto de la pregunta

    radios.forEach((radio, i) => {
      const bloque = radio.parentElement;
      bloque.classList.remove("Correcta");
      const label = document.getElementById(radio.id + "_text");
      label.textContent = opciones[i]; // Se busca el texto correspondiente
      radio.value = opciones[i]; // Se asigna el valor
      radio.checked = false; // Desmarca todas las opciones
      radio.disabled = false;
      label.classList.remove("Correcta");
    });
  }

  function enviarRespuesta() {
    const seleccionada = document.querySelector('input[name="answer"]:checked'); // Se obtiene la opción seleccionada

    if (!seleccionada) {
      alert("Elige una respuesta antes de enviar");
      return;
    }

    if (seleccionada.value === ronda[preguntaActual - 1].correcta) { // Si la respuesta es correcta
      puntaje += PUNTOS_POR_PREGUNTA; // Se incrementa el puntaje
      spanScore.textContent = puntaje; // Se actualiza el texto del puntaje
      
    }

    radios.forEach((radio)=>{
      const bloque = radio.parentElement;
      if (radio.value === ronda[preguntaActual - 1].correcta){
        bloque.classList.add("Correcta");
      }
      radio.disabled=true;
    });

    preguntaActual++; // Siguiente pregunta

    if (preguntaActual <= ronda.length) { // Se comprueba que aún queden preguntas
      setTimeout(() => {cargarPregunta()}, 1000);
      
    } else { // Es false porque solo es true si se acabó el tiempo
      setTimeout(() => {terminarRonda(false)}, 1000);
    }
  }

  function terminarRonda(tiempoAgotado) {
    if (!rondaActiva) return; // Si la ronda no está activa, no se hace nada para no sumar el puntaje y el tiempo dos veces
    rondaActiva = false;
    detenerTimer();

    const tiempoUsado = TIEMPO_RONDA - tiempoRestante;
    tiempoTotal += tiempoUsado;
    puntajeTotal += puntaje;

    mostrarResultado(tiempoAgotado, tiempoUsado); // Se indica si se agotó el tiempo con un booleano y se ingresa el tiempo usado
  }

  // - - - - - EVENTOS
  btnEmpezar.addEventListener("click", nuevaPartida);
  btnEnviar.addEventListener("click", enviarRespuesta);
  btnSiguiente.addEventListener("click", siguienteRonda);
  btnMenu.addEventListener("click", mostrarMenu);

  // - - - - - ARRANQUE
  mostrarMenu();
}

// SLIDER
const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
let imagenActual = 0;

function actualizarDot() {
  dots.forEach((dot, indice) => {
    dot.classList.toggle("active", indice === imagenActual);
  });
}

function mostrarSlide(indice) {
  imagenActual = indice;

  slides.scrollTo({
    left: slides.clientWidth * imagenActual,
    behavior: "smooth"
  });

  actualizarDot();
}

if (slides && slideElements.length && dots.length && nextButton && previousButton) {
  nextButton.addEventListener("click", () => {
    mostrarSlide((imagenActual + 1) % slideElements.length);
  });

  previousButton.addEventListener("click", () => {
    mostrarSlide(
      (imagenActual - 1 + slideElements.length) % slideElements.length
    );
  });
}

//EQUIPOS CARRUSEL
if (document.getElementById("equipo-nombre")) {

  const equiposInfo = [
    {
      nombre: "Diablos Rojos del México",
      logo: "assets/logos/diablosrojos.png",
      info: `
        <p>Los Diablos Rojos, provenientes de la ciudad de México, son uno de los equipos más famosos, quienes actualmente cuentan con un alto porcentaje de victorias, siendo los líderes de la zona sur en el país.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/diablosrojos-0.jpg" alt="Diablos Rojos campeones 2024">
          <figcaption>Momento en el que Los Diablos Rojos consiguieron su título número 17</figcaption>
          </figure>

        <h5>Pasado</h5>
        <p>Fundados el 11 de febrero de 1940, por Salvador Lutteroth y Ernesto Carmona, Los Rojos de México (como se les conocía en sus inicios) arrancaron con fuerza al tener una rivalidad entretenida contra los extintos Azules de Veracruz; posterior a esto y gran parte de la década de los 40s quedaron relegados a segundo plano y tuvieron un paso desapercibido.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/diablosrojos-3.jpg" alt="Diablos Rojos alineación">
          <figcaption>Alineación antigua de los Rojos</figcaption>
          </figure>

        <p>Fue durante sus primeros dos años que surge su apodo de los diablos con la frase “Estos rojos juegan como Diablos”, lo que posteriormente influenciaría el nombre del equipo. Es hasta mediados de la década de los 50 que los Diablos Rojos lograron sobresalir, en 1956 con el primer lugar de la temporada ganando su primer gallardete sobre los Tigres de Quintana Roo, y en 1957 y 1958 como subcampeón.</p>
        <p>De ahí en adelante el equipo tendría distintas épocas, con rachas de victorias y campeonatos hasta años de decadencia, donde los capitalinos pasaron por distintos dueños.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/diablosrojos-2.jpg" alt="Diablos Rojos alineación">
          </figure>

        <p>Varios jugadores destacados son Alfredo “El zurdo” Ortiz usando el 15 en su camisa, Ramón “El Diablo” Montoya, Alonso Perry obteniendo una triple corona de bateo, Salomé Barojas quien fue nombrado mejor relevista del año dos veces, Ty Gainey obteniendo el porcentaje de slugging más alto en 1994 (El slugging refleja la cantidad de almohadillas que un pelotero alcanza en sus turnos debido a conexiones, dando mayor valor a extrabases como dobles, triples y jonrones), entre muchos otros.</p>

        <h5>Estadios</h5>
        <h6>Parque Delta</h6>
        <p>El primer hogar del equipo fue el parque delta, lugar que compartieron con los Azules de Veracruz un tiempo y jugaron ahí desde 1940 hasta 1954.</p>

        <h6>Parque del Seguro Social</h6>
        <p>Es la casa donde jugaron más tiempo, desde 1955 hasta el año 2000. Aquí conseguirían 12 campeonatos, por lo que el recinto vio a los Diablos establecerse como verdaderos atletas de gran nivel. Al final hubo un juego de despedida entre los Tigres y los Diablos (porque compartían casa), juego que ganaron los rojos.</p>

        <h6>Foro Sol</h6>
        <p>Inaugurado en junio del 2000, fue casa de Tigres y Diablos hasta el 2002, cuando los Tigres se mudaron a su propio estadio. Lo que previamente fue conocido como un lugar para conciertos, fue el hogar de los beisbolistas hasta mediados de la década del 2010.</p>

        <h6>Estadio Fray Nano</h6>
        <p>Este estadio fue una casa provisional para el equipo, puesto a que el plan original era irse a un nuevo estadio que estaba en construcción, pero la demolición de los avances de dicho proyecto junto al regreso de la fórmula 1 a la ciudad de México obligó a los rojos a buscar un nuevo lugar, en lo que se construiría su actual estadio.</p>
        
          <figure class="equipo-foto">
          <img src="assets/equipos/diablosrojos-5.jpg" alt="Primer estadio">
          <figcaption>Parque Delta, primer hogar de los Rojos</figcaption>
          </figure>

        <h5>Actualidad</h5>
        <p>Hoy en día Los Diablos Rojos los maneja Alfredo Harp Helú, quien los compró en 1994 y sigue siendo su presidente hoy en día. El quinto estadio y actual hogar del equipo es el estadio que lleva el nombre de su presidente, Alfredo Harp Helú, el cual fue anunciado en el 2010, concretado en 2017 y terminado en el 2019.</p>
        <p>Su actual mascota es un perro llamado Rocco, de personalidad ruda y fuerte, representando los valores de los Diablos con gran pasión.</P>
        <p>Cuentan con 1 título de BCL Americas (Baseball Champions League Americas), 18 títulos de la Liga Mexicana de Baseball, y de títulos divisionales llevan la cuenta de 5 en Zona Norte, 3 en Zona centro y 14 en Zona Sur.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/diablosrojos-6.jpg" alt="Mascota">
          <figcaption>Rocco, mascota de los Diablos Rojos del México</figcaption>
          </figure>

      `
    },
    { 
      nombre: "Olmecas de Tabasco", 
      logo: "assets/logos/olmecas.png", 
      info: `
        <p>Los olmecas, cuya sede es Villahermosa, Tabasco, son un equipo más reciente, llevando la segunda posición en cuanto a victorias se refiere para la zona sur de la Liga de Baseball Mexicana, detrás de los Diablos rojos.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/olmecas-1.jpg" alt="Partido olmecas">
          <figcaption>Foto de 2021, luego de vencer 13-4 a los Diablos Rojos</figcaption>
          </figure>

        <h5>Pasado</h5>
        <p>Los Olmecas han pasado por muchos cambios y muchos presidentes y dueños, y dichos cambios se ven reflejados en los varios nombres e identidades que ha tenido el equipo a lo largo de sus 51 años de historia.</p>

        <h6>Los Cardenales</h6>
        <p>Fue el primer nombre con el que se les conoció, teniendo un paso regular, pero teniendo una primera decepción en lo administrativo, pues el equipo tuvo un intento de adquirir a Los Leones de Yucatán. Luego de esto, el equipo tuvo que emigrar de la entidad para regresar a Tabasco en 1977.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/olmecas-2.jpg" alt="Cardenales">
          <figcaption>Alineación de los Cardenales de Tabasco</figcaption>
          </figure>

        <h6>Los Plataneros</h6>
        <p>Es en este año en el que hay una gran reorganización del equipo, cambiando de imagen y nombre, volviendo al lugar donde nacieron debido a la adquisición de Los Broncos de Reynosa. En 1979 tuvieron un año destacado, entrando por primera vez a la postemporada y dejando fuera a los Diablos Rojos, bajo la dirección de Raúl Cano, sin embargo, luego de este momento de emoción vinieron años de decepciones y malos resultados, dando como resultado que el entonces presidente Julián Manzur decidiera deshacerse de la franquicia en 1984.</p>
          
          <figure class="equipo-foto">
          <img src="assets/equipos/olmecas-3.jpg" alt="Plataneros">
          <figcaption>Alineación de los Plataneros de Tabasco</figcaption>
          </figure>

        <h6>Los Ganaderos</h6>
        <p>El equipo fue salvador por el ganadero Humberto Tapia Córdoba, quien rescata a la tribuna de desaparecer y los renombra como los Ganaderos de tabasco. Bajo esta nueva dirección el equipo logró mejorar sus resultados, y a pesar de no estar entre los mejores, demostró por qué merecía seguir existiendo como un duro rival para el resto de los competidores.</p>
        <p>Junto al ascenso del equipo en los marcadores, vino la confianza de los jugadores y los aficionados. Fue durante esta época que llegaron varios jugadores extranjeros como Steve Howie o Mike Cole.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/olmecas-4.jpg" alt="Ganaderos">
          <figcaption>Alineación de los Ganaderos de Tabasco</figcaption>
          </figure>

        <h6>Los Olmecas</h6>
        <p>En 1990 sufrieron un nuevo cambio de dueño, pasando a manos de Diego Rosique Palavicini y Carlos Elías Dagdug, provocando que cambiaran de identidad una vez más a la que ahora conocemos como Olmecas. A pesar del cambio de imagen y dirección, el equipo siguió igual en calidad dentro del juego. Es hasta 1993 donde logran por primera vez en la historia ser campeones, luego de 11 juegos ganados consecutivos, derrotando a los Tecolotes de Dos Laredos en la gran final. Tras esta importante victoria Los Olmecas lograrían establecerse como dignos rivales en los encuentros.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/olmecas-5.jpg" alt="Olmecas">
          <figcaption>Alineación de los Olmecas de Tabasco</figcaption>
          </figure>

        <h5>Actualidad</h5>
        <p>Hoy en día, los apodados Cabezones siguen deseando ser campeones una vez más, pues han demostrado ser dignos del estrellado, y que con un golpe bien acertado podrían consolidarse como de los mejores en el país.</p>
        <p>El hogar actual de los Olmecas es el Parque Centenario 27 de febrero, el cual ha sido su casa desde que surgió el equipo, pues fue construido en 1964 y remodelado por fechas de 2021. La mascota actual es El Pochi, una tortuga alegre y fuerte que mantiene el espíritu de grandeza del equipo.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/olmecas-6.jpg" alt="Pochi">
          <figcaption>El Pochi en el estadio de Los Cabezones</figcaption>
          </figure>
          
      `
    },
    { 
      nombre: "Bravos de León", 
      logo: "assets/logos/bravos.png", 
      info: `
        <p>Los Bravos de León son uno de los varios equipos nacidos en León Guanajuato, contando con casi medio siglo de trayectoria, varios cambios de nombre y siendo representados de color rojo, azul y verde.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/bravos-1.jpg" alt="Partido bravos">
          <figcaption>Juego donde los Bravos vencieron 11-2 a los Guerreros</figcaption>
          </figure>

        <h5>Pasado</h5>
        <h6>Los Cachorros de León</h6>
        <p>Bajo el manto de Benjamín Valenzuela, los cachorros arrancaron su camino en 1979 con un camino lamentable en donde tuvieron un resultado de 52 victorias y 82 derrotas, siendo el peor equipo de la temporada. Es hasta el año siguiente que el equipo logra mejorar su calidad con el liderazgo de Mario Saldaña. No obstante, algo ocurriría en el beisbol mexicano que pausaría al equipo.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/bravos-2.jpg" alt="Alineación bravos">
          <figcaption>Alineación de los Cachorros</figcaption>
          </figure>

        <h6>La huelga de 1980</h6>
        <p>Llevada a cabo por la ANABE (Asociación Nacional de Beisbolistas), la huelga de 1980 cambió el rumbo de varios equipos de la liga mexicana de beisbol. Fue llevada a cabo por varios jugadores, quienes exigían un mejor trato salarial, contratos y prestaciones, y que, ante la ausencia de juegos en León, se hizo un campeonato desarrollado por la ANABE donde participó un equipo local llamado Lechugueros, sustituyendo por un tiempo a los Cachorros.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/bravos-3.jpg" alt="Huelga">
          <figcaption>Periódico de la huelga de 1980</figcaption>
          </figure>

        <h6>Los Bravos</h6>
        <p>Debido a lo inconsistente de la ANABE, en 1983 el empresario leonés Pedro Medina Hurtado compra a Los Broncos de Reynosa para trasladarlos a León, Guanajuato. En este año los renombran como Los Bravos. Es a partir de aquí que el equipo logra ascender y posicionarse en los marcadores.</p>
        <p>En 1986 se destaca la participación de Jack Pierce, a pesar de que la campaña de ese año es la peor para los Bravos tanto en lo económico como en lo deportivo, Jack lograría romper un récord puesto por Héctor Espino, teniendo la mayor cantidad de jonrones en una temporada con 54, siendo el número de Héctor de 46. Dicho récord permanece intacto.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/bravos-5.jpg" alt="Jack Pierce">
          <figcaption>Fotografía de Jack Pierce</figcaption>
          </figure>

        <p>El primer campeonato de los Bravos llegaría en 1990, luego de una temporada difícil ante rivales como Los Diablos Rojos o los Piratas de Campeche. La gran final se disputaría entre los Bravos y los Algodoneros de Unión Laguna, siendo estos últimos derrotados en un juego que quedó 4-1 a favor de los leoneses.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/bravos-4.jpg" alt="Bravos Campeones">
          <figcaption>Celebración de los jugadores de los Bravos</figcaption>
          </figure>

        <p>Luego de esto, el equipo tuvo que mudarse a Veracruz debido a diferencias entre la directiva y las nuevas administraciones gubernamentales del estado, regresando a su hogar muchos años después en 2017.</p>

        <h5>Actualidad</h5>
        <p>Teniendo un paso breve a manos de Multimedios, quienes se hicieron con el equipo en 2018, en 2022 finalmente quedan en manos de empresarios leoneses en León, en busca de regresar a lo alto de los marcadores en las tablas de resultados.</p>
        <p>Cuentan con el Estadio Domingo Santana como su casa desde el año 2017, con una capacidad de 6,500 personas. Cuentan con una mascota llamada BravoLeón, un león robusto y atrevido que pone a la afición de pie y prepara el terreno para los jugadores.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/bravos-6.jpg" alt="Bravoleon">
          <figcaption>BravoLeón conviviendo con la fanaticada</figcaption>
          </figure>

      `
    },
    {
      nombre: "Piratas de Campeche", 
      logo: "assets/logos/piratas.png", 
      info: `
        <p>Siendo un equipo con mucho carisma y personalidad, los Piratas provenientes de Campeche, Campeche, son el equipo que ocupa el tercer lugar en los marcadores por porcentaje de victorias en la división sur. Con una identidad que representa su lugar de origen, los piratas abrazan su cultura, sus murallas, sus puertos, su historia y su arquitectura, además de un icónico cañonazo como sonido de celebración, para crear un conjunto entrañable.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/piratas-1.jpg" alt="Piratas">
          <figcaption>Victoria de Los Piratas sobre Caliente de Durango</figcaption>
          </figure>

        <h5>Pasado</h5>
        <p>El quipo nace con la adquisición de Los Alacranes de Durango, quienes no pudieron acabar la temporada debido a la huelga de 1980. Finalmente, en 1981, con su nuevo nombre “Los Piratas” empezarían a jugar teniendo un destacable primer paso dentro de la liga, quedando cercas del oro.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/piratas-3.jpg" alt="Debut">
          <figcaption>Debut de Los Piratas de Campeche</figcaption>
          </figure>

        <h6>Primer Título</h6>
        <p>No fue hasta 1983 que los Los Filibusteros, bajo el liderazgo de Francisco “Paquín” Estrada, en La Serie Final que se llevó a cabo entre los ganadores de cada zona, los Indios de Ciudad Juárez serían los rivales al ganar la zona norte.</p>
        <p>De ahí en adelante estuvieron cercas de llegar a la final, en ocasiones quedando segundos en la zona sur, siempre buscando repetir la hazaña que los posicionó como uno de los grandes.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/piratas-2.jpg" alt="titulo">
          <figcaption>Alineación de 1983, año del primer campeonato</figcaption>
          </figure>

        <h6>Años siguientes y Segundo Título</h6>
        <p>Esto último se repetiría mucho, pues en el lapso del 2000 al 2009, los piratas se convirtieron en un equipo protagonista al clasificar en 6 de las 10 temporadas. Dentro de este tiempo lograría conseguir su segundo título en la historia en el 2004, siendo liderados nuevamente por Francisco Estrada. En 2005, 2008 y 2009 estuvieron cercas pero fueron derrotados por Los Olmecas, Los Diablos Rojos y los Tigres respectivamente.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/piratas-4.jpg" alt="segundo titulo">
          <figcaption>Celebración del segundo título</figcaption>
          </figure>

        <h5>Actualidad</h5>
        <p>Los Piratas siguen compitiendo en Campeche, en el estadio Estadio Nelson Barrera Romellón (con capacidad de 6,000 asistentes), buscando ese ansiado tercer título, acompañados de Lorenzillo, la mascota del equipo y quien logra encapsular el espíritu ganador y aventurero de Los Bombarderos del Golfo.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/piratas-5.jpg" alt="Lorenzillo">
          <figcaption>Lorenzillo, mascota de Los Piratas</figcaption>
          </figure>

      `
    },
    {
      nombre: "Pericos de Puebla", 
      logo: "assets/logos/pericos.png", 
      info: `
        <p>Los Pericos son un equipo que, como su nombre lo indica, son originarios de Puebla, siendo una de las agrupaciones más antiguas y con más historia del país, con partidos y juegos que datan de los cuarenta.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/pericos-1.jpg" alt="Pericos">
          <figcaption>Pericos campeones en la temporada 2023</figcaption>
          </figure>

        <h5>Pasado</h5>
        <p>En la década de los años veinte ocurren los precedentes para la posterior fundación oficial de los pericos, pues desde 1925 que hay registro del 74 Regimiento de Puebla, el antecesor de los Pericos. Luego, en 1938 con el nombre de Hudson Puebla, de 1939 a 1941 como Chevrolet de Puebla, hasta 1942 donde se establecen de forma más oficial, simplemente conocidos como Puebla.</p>
        <p>Todo surgió debido a la situación militar y social del estado a principios del siglo, pues una falta de armamento y de soldados provocó que llegaran del norte mucho equipo nuevo, y entre toda la reestructuración se trajeron el béisbol como influencia de la frontera con estados unidos. Por eso empiezan a jugar con grupos no formalmente estructurados hasta que se arma un equipo para la liga mexicana de béisbol.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/pericos-2.jpg" alt="Agrupacion antigua">
          <figcaption>Una de las Primeras alineaciones del equipo poblano</figcaption>
          </figure>

        <p>La razón del nombre Chevrolet proviene del patrocinio de la marca, la cual termina y provoca el cambio de imagen y nombre. Como el uniforme del equipo era de color verde y el parque de béisbol eran de color verde con blanco, a los jugadores les empezaron a llamar con gritos durante los juegos "vamos verdes, vamos pericos", a partir de 1945.</p>

        <h6>Pericos</h6>
        <p>Luego de quedarse cercas del campeonato, durante toda la década de los 50s los ahora llamados Pericos estuvieron intentando conseguir el oro hasta 1959, donde celebraron la victoria del título en La Liga Invernal Veracruzana.</p>
        <p>Un año después volverían a la Liga Mexicana de Béisbol luego de una ausencia de varios años, en donde entraron con todo, obteniendo el título en 1963 derrotando a los Diablos Rojos del México y sacando buenos números en los marcadores en los años siguientes. Lamentablemente, en 1969 el béisbol se iría del estado cuando se mudan a Mérida, Yucatán.</p>

        <h6>Ángeles de Puebla</h6>
        
          <figure class="equipo-foto">
          <img src="assets/equipos/pericos-3.jpg" alt="Partido de los angeles">
          <figcaption>Partido de los Ángeles de Puebla</figcaption>
          </figure>

        <p>Volviendo en 1973, los ahora llamados Ángeles llegaron a un nuevo estadio con nueva identidad y buscando una vez más el título. Desafortunadamente para ellos, esto no llegaría hasta el final de la década, pues el resto de los años sufrieron de cambios de dueños junto a varias derrotas.</p>
        <p>En 1979 llega el tan ansiado segundo título, derrotando en la final de la zona sur a los Cafeteros de Córdova, para verse las caras con los Indios de ciudad Juarez, en donde saldrían victoriosos.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/pericos-5.jpg" alt="Agrupación de los angeles">
          <figcaption>Alineación de los Ángeles de Puebla</figcaption>
          </figure>    
          
        <h6>Ángeles Negros de Puebla</h6>
        <p>Tras la huelga de 1980 y una breve ausencia de 5 años, en 1985 regresan a Puebla los Ángeles, ahora con el nuevo nombre de Negros, quienes nada más llegar obtendrían un nuevo título al año siguiente, derrotando a los Tigres de Quintana Roo en la zona sur, y en la gran final a los Sultanes de Monterrey.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/pericos-4.jpg" alt="Agrupación de los angeles negros">
          <figcaption>Alineación de los Ángeles Negros de Puebla</figcaption>
          </figure>            

        <h6>Nuevamente Pericos</h6>
        <p>En 1993, tras adquirir la franquicia de los Cafeteros de Córdova, volvieron a su nombre de Los Pericos. Pasaron los años y el equipo pasó más desapercibido tras varios intentos y derrotas.</p>
        <p>En el 2016 capturaron un cuarto título al vencer a los Toros de Tijuana, Los Leones de Yucatán y los Tigres de Quintana Roo.</p>

        <h5>Actualidad</h5>
        <p>Recientemente los Pericos obtuvieron su quinto título en la liga, cuando vencieron a los Algodoneros de la Unión Laguna en 2023, bajo el mando de Sergio Omar Gastélum, estableciéndose, así como uno de los grandes en la zona sur. Los Poblanos tienen de mascota a Pepe Perico, y su casa siendo el Estadio Hermanos Serdán desde su inauguración.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/pericos-6.jpg" alt="Pepe Perico">
          <figcaption>Pepe Perico en el Estadio Hermanos Serdán</figcaption>
          </figure>    

      `
    },
    {
      nombre: "Guerreros de Oaxaca", 
      logo: "assets/logos/guerreros.png", 
      info: `
        <p>Los Guerreros de Oaxaca son un equipo joven en comparación a sus rivales de la zona sur, naciendo en la década de los 90s, sin embargo, cuentan con una historia interesante en su surgimiento y un hambre intenso de comerse al mundo con su calidad de juego.</p>
          
          <figure class="equipo-foto">
          <img src="assets/equipos/guerreros-1.jpg" alt="Guerreros 2026">
          <figcaption>Oaxaca toma ventaja en la serie ante los Diablos Rojos</figcaption>
          </figure> 
         
        <h5>Pasado</h5>
        <p>Todo empezó cuando en 1995, luego de que se hiciera saber a varios empresarios que el equipo de los Charros de Jalisco estaban en venta debido a malos números, por lo que el empresarios Alfredo Harp Herú (dueño de los Diablos Rojos del México), Roberto Mansur, José Marrón, Carlos Helú, así como el expresidente de la Liga: Treto Cisneros deciden crear un nuevo equipo en Oaxaca con el nombre de Guerreros. Dicho nombre fue elegido en una convocatoria para encontrarle nombre a los oaxaqueños, donde el exjugador Erasto Venegas ganó y eligió un nombre poderoso.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/guerreros-2.jpg" alt="Alfredo Harp Herú 2026">
          <figcaption>Alfredo Harp Herú</figcaption>
          </figure> 

        <p>Arrancaron con Alfredo “El zurdo” Ortiz como mánager debido a su trayectoria de lanzador y timonel, en donde se establecerían rápidamente como una amenaza para el resto de los competidores. El día 14 de marzo, un día después de haber visitado a los Potros de Minatitlán, el conjunto salto al Diamante a su primer encuentro en casa, como Guerreros de Oaxaca.</p>
        <p>En 1997, bajo el liderazgo del venezolano Leonel Carreón, lograron números que, aunque no los mejores, fueron superiores a su año de debut, avanzando poco a poco en los marcadores. Además, este año el jugador Nelson Barrera establecería un récord en carreras impulsadas, rompiendo el previamente establecido por “Superman” Héctor Espino, acabando Barrera con 1639 carreras, en una hazaña que se mantiene.</p>
        <p>En el tercer año de los Guerreros, bajo la nueva administración de la presidencia del club, entran nuevos jugadores provenientes de otros equipos, los cuales le da un aire nuevo al conjunto; ejemplo, llega Homar Rojas, cátcher de los Leones de Yucatán, marcando una diferencia en las jugadas. Junto a la reorganización, se nombra a Nelson Barrera como el nuevo mánager, quien dirigiría y jugaría a la vez.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/guerreros-3.jpg" alt="Celebracion">
          <figcaption>Celebración de los Guerreros</figcaption>
          </figure> 

        <p>Gracias a estos cambios, el equipo oaxaqueño lograría conquistar su único en apenas su tercera temporada de juego. Dejando fuera a los Sultanes y los Diablos, Los Guerreros se verían las caras con los Acereros de Monclova, quienes habían eliminado a otros grandes como a los Langosteros de Cancún y a los Tigres, venciéndolos en el proceso y llevándose la victoria.</p>
        <p>Después de esta victoria, vendría un año difícil, pues en 1999, pues en la Ciudad de Oaxaca sería sede del Juego de estrellas de la LMB, cosa que fuera de alegrar a los guerreros, causaría varios problemas que terminarían por hacer de ese año uno mediocre. Desde cambios de jugadores, hasta lesiones de jugadores nada más empezando la temporada, la caída del conjunto terminó pasando.</p>
        <p>Del 2000 en adelante, se mantuvieron muy discretos, teniendo temporadas buenas, pero sin llegar a concretar el segundo título. Cosas destacables de estos años pueden ser la lamentable lesión de Nelson Barrera, quien se fracturó 3 costillas al recibir un pelotazo, lo que lo dejaría fuera por 27 juegos; también la participación de Oscar Robles, quien sería un jugador que resaltaría en la década de los 2010s debido al paso desapercibido del equipo.</p>
        
          <figure class="equipo-foto">
          <img src="assets/equipos/guerreros-4.jpg" alt="Nelson Barrera">
          <figcaption>Nelson Barrera, exjugador y mánager de los Guerreros</figcaption>
          </figure> 

        <h5>Actualidad</h5>
        <p>Hoy los Guerreros buscan conquistar un nuevo título, manteniéndose a raya en las tablas de posiciones como un equipo que tiene el potencial de ser más grande. Actualmente juegan en el Estadio Yu’Va, cuya construcción concluyó apenas este año, siendo inaugurado la noche del viernes 22 de mayo de 2026. Junto a su nueva casa, está su mascota Tato, una ¿ave roja? Que alegra a los aficionados durante los encuentros con sus pasos de baile y su personalidad encantadora.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/guerreros-5.jpg" alt="Tato">
          <figcaption>Tato junto a los Guerreros</figcaption>
          </figure> 
      `
    },
    {
      nombre: "El Águila de Veracruz", 
      logo: "assets/logos/aguila.png", 
      info: `
        <p>El Águila de Veracruz es uno de los equipos más longevos de la liga, contando con más de 120 años de trayectoria, con varios en donde estuvieron ausentes y otros donde se consolidaron como los mejores del país.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/aguila-1.jpg" alt="Celebracion">
          <figcaption>Juego donde el Águila fueron campeones</figcaption>
          </figure>     

        <h5>Pasado</h5>
        <p>El béisbol en Veracruz se vio impulsado por empresas petroleras estadounidenses asentadas en la ciudad a principios del siglo XX, promoviendo este deporte y causando la creación de distintos equipos en el estado.</p>
        <p>Una empresa petrolera de nombre Águila, cuyo dueño era Sir Weetman Pearson, tuvo interés de promover el deporte en el puerto, naciendo oficialmente los Rojos del Águila de Veracruz, en septiembre de 1903. Enfrentándose a los Indios de Juárez, ahí inicia la historia del equipo más tradicional y antiguo de México.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/aguila-2.jpg" alt="Fundador">
          <figcaption>Sir Weetman Pearson</figcaption>
          </figure> 

        <p>No hay demasiado registro de sus primeras décadas, teniendo un paso tranquilo por esos años hasta que en 1937 logran conquistar un primer campeonato, bajo el mando del cubano Agustín Verde, en un campeonato oficial e inaugural de la LMB (Liga Mexicana de Béisbol).</p>
          
          <figure class="equipo-foto">
          <img src="assets/equipos/aguila-3.jpg" alt="Alineacion">
          <figcaption>Alineación Antigua de El Águila</figcaption>
          </figure> 

        <p>El águila fue campeón gracias a la participación de Martín Dihigo, quien tuvo una trayectoria espectacular antes de llegar a Veracruz, en donde crearía un récord en 1938 (mismo año donde conseguirían su segundo título) del mayor número de bateadores ponchados para un juego de 9 entradas de la Liga en el parque Alijadores al lograr 18 de los 27 outs de aquel memorable juego por la vía del ponche. Mientras su equipo obtenía su primer título, Dihigo era nombrado maestro y obtuvo la Triple Corona de Pitcheo.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/aguila-7.jpg" alt="Martín Dihigo">
          <figcaption>Martín Dihigo</figcaption>
          </figure> 
        
        <p>Varios años después, en 1952, el conjunto veracruzano logra regresar a la mirada de todos al conseguir un tercer título, bajo el liderazgo del mánager y jugador cubano Santos “El Canguro” Amaro, quien condujo al equipo a la victoria junto a una alineación con caras nuevas.</p>
          <figure class="equipo-foto">
          <img src="assets/equipos/aguila-4.jpg" alt="Alineacion">
          </figure> 
        <p>Pasados 9 años desde esa victoria, los Rojos del Águila tocan la gloria una vez más en 1961, demostrando que son capaces de reinventarse para sobreponerse a los demás. Así siguieron sus éxitos hasta 1970, año donde conseguirían ese ansiado quinto campeonato, en donde acabaría su suerte pues pasarían lo que queda del siglo fallando en el intento de ganar esa sexta.</p>

        <h6>Sexto Título</h6>
        <p>Tras 42 años de sequía, y llegando de un buen paso en 2011, en el 2012 finalmente lograrían traerle alegría a la gente de Veracruz, pues los llamados ahora Águila de Veracruz estarían una vez más en la cima consiguiendo un campeonato nuevo. Los años previos a esta victoria, el equipo pasaba por malas rachas, destacando como dato curioso el 2010 como el año con más cuadrangulares para el equipo.</p>
          
          <figure class="equipo-foto">
          <img src="assets/equipos/aguila-6.jpg" alt="Campeones 2012">
          <figcaption>Celebración del título del 2012</figcaption>
          </figure> 
        
        <h5>Actualidad</h5>
        <p>Tras ausentarse desde el 2017 hasta su regreso en el 2020, El Águila de Veracruz vuelve a su casa en el Parque Deportivo Universitario “Beto Ávila” en 2021 para seguir demostrando su importancia en la historia del deporte en el estado y el país entero, acompañados de Pachi Aguilar, mascota del equipo.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/aguila-5.jpg" alt="Pachi Aguilar">
          <figcaption>Pachi Aguilar, mascota del equipo</figcaption>
          </figure> 

      `
    },
    {
      nombre: "Tigres de Quintana Roo", 
      logo: "assets/logos/tigres.png", 
      info: `
        <p>Los Tigres aparecen por primera vez en la Ciudad de México en abril de 1955, bajo el nombre de Tigres Capitalinos, permaneciendo en la capital por 46 años hasta que, en el 2002, usando el nombre de Tigres de la Angelópolis, se mudarían a puebla. Finalmente llegan a Cancún, Quintana Roo en el año 2007, donde obtienen su nombre actual.</p>
          
          <figure class="equipo-foto">
          <img src="assets/equipos/tigres-1.jpg" alt="Festejo del equipo">
          <figcaption>Festejo del equipo</figcaption>
          </figure> 
        
        <h5>Pasado</h5>
        <p>Fundados por el Ingeniero Alejo Peralta y Díaz Ceballos en 1955, gracias a su interés al deporte, siendo el principal accionista de los Tigres Capitalinos. Teniendo de mánager a George Genovese, el conjunto felino llegó desde la última posición hasta la cima para conquistar el campeonato en su primer año jugando. Con un estadio lleno de aficionados, el triunfo les otorgó el lema “El Equipo que nació campeón”.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/tigres-2.jpg" alt="Festejo del equipo">
          <figcaption>El equipo que nació campeón</figcaption>
          </figure> 

        <h6>Primeros Títulos</h6>
        <p>Los títulos no se harían esperar, pues cinco años después tocarían la cima una vez más bajo el liderazgo de Guillermo “Memo” Garibay, consiguiendo su segundo título luego de varias temporadas en los últimos puestos tras derrotar a los Sultanes de Monterrey. Teniendo el apoyo del mexicano Beto Ávila, un grandioso jugador que anunció su retiro cuatro días después de conseguir el título.</p>
        <p>Como si fuera una costumbre, luego de cinco años en 1965 obtendrían un tercer título, uno especial pues los fanáticos lo recuerdan con cariño, asegurando que se trató de una serie de juegos emotivos y dramáticos. Rompiendo la racha de cada 5 años, al año siguiente lograrían repetir su hazaña al conseguir un cuarto título, con Ricardo Garza como mánager, ante cambios en el sistema de la competencia los Tigres se antepondrían a todo llegando a la final contra los Diablos Rojos, ganando la serie 4 a 2.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/tigres-3.jpg" alt="Juego de los tigres">
          <figcaption>Juego de los Tigres Capitalinos</figcaption>
          </figure> 

        <h6>Años Noventa</h6>
        <p>En esta década obtendrían dos títulos nuevos. El primero en 1992 acabando con 26 años de sequía desde el último título y trayendo nueva vitalidad al equipo. El segundo vendría en 1997, con una carrera que haría de los Tigres el equipo más dominador de los últimos 10 años, acabando una vez más con los Diablos Rojos en la final.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/tigres-4.jpg" alt="Juego de los años noventa">
          </figure> 
        
        <h6>Proximos Títulos</h6>
        <p>Para la fortuna de la afición y los jugadores, la sequía no se repitió, pues el nuevo milenio estuvo lleno de nuevos títulos, en el 2000, 2001, 2005, 2011, 2013, 2015, mostrándole a todo el país que son uno de los equipos más grandes de la liga.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/tigres-5.jpg" alt="Título del 2011">
          <figcaption>Victoria del título del 2011</figcaption>
          </figure> 

        <h5>Actualidad</h5>
        <p>Con un total de 12 títulos de Liga, los Tigres de Quintana Roo son sinónimo de calidad. A pesar de hoy en día no contar con los mejores marcadores, la afición está a la espera de que los felinos se levanten una vez más por ese decimotercer título. El equipo cuenta con el estadio Beto Ávila en Cancún y como mascota a Chacho, un tigre adorable y de espíritu alegre.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/tigres-6.jpg" alt="Mascota del equipo">
          <figcaption>Chacho, mascota del equipo</figcaption>
          </figure> 

      `
    },
    {
      nombre: "Conspiradores de Querétaro", 
      logo: "assets/logos/conspiradores.png", 
      info: `
        <p>Siendo el equipo más reciente de la zona sur, Los Conspiradores son fundados en el 2022 con sede en Huimilpan, justo en la zona Metropolitana de Querétaro.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/conspiradores-1.jpg" alt="Introducción al equipo">
          <figcaption>Conspiradores en el 2024</figcaption>
          </figure> 

        <h5>Pasado</h5>
        <p>A pesar de que Querétaro cuenta con un club de Fútbol, baloncesto y fútbol americano, no contaban con un equipo de béisbol profesional, por lo que a finales de 2022 se hace oficial la presentación de los Conspiradores.</p>
        <p>Vistiendo de blanco, negro y morado, el conjunto debutó en la temporada de 2024 luego de que se construyera un estadio específico para ellos. En su juego de debut vencieron a los Tigres de Quintana Roo con un encuentro que quedó 6 – 1. Acabaron el año con 50 victorias y 38 derrotas, siendo un gran comienzo para el equipo.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/conspiradores-2.jpg" alt="IDebut">
          <figcaption>Debut del Conjunto</figcaption>
          </figure> 

        <p>Aunque la historia del equipo es corta, tienen la historia del estado completo muy arraigada a su identidad, pues el nombre de Los Conspiradores proviene de la Conspiración de Querétaro, movimiento que se dio en 1810 y que sería un parteaguas para el inicio de la Guerra de Independencia de México.</p>
          <figure class="equipo-foto">
          <img src="assets/equipos/conspiradores-3.jpg" alt="Conspiración de queretaro">
          <figcaption>Conspiración de Querétaro</figcaption>
          </figure>

        <h5>Actualidad</h5>
        <p>Con un estadio en construcción, los Conspiradores batallan por subir más en los marcadores, y aún sin un título en sus manos, tienen un gran trabajo por delante para demostrar que en Querétaro también hay cátedra en el béisbol.</p>
          
          <figure class="equipo-foto">
          <img src="assets/equipos/conspiradores-4.jpg" alt="Mascota del equipo">
          <figcaption>Nacho, mascota del equipo</figcaption>
          </figure>
      `
    },
    {
      nombre: "Leones de Yucatán", 
      logo: "assets/logos/leones.png", 
      info: `
        <p>Teniendo su sede en Mérida, Yucatán, Los Leones representan la fuerza y el espíritu deportivo de los yucatecos en el béisbol.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/leones-1.jpg" alt="celebracion">
          <figcaption>Celebración del título de la temporada 2022</figcaption>
          </figure>
        
        <h5>Pasado</h5>
        <p>El nombre de Leones proviene de una cervecería, debido a que se construyó un estadio cercas de esta, la cual contaba con un producto popular siendo “León Negra”. Este factor, sumado a que el escudo de armas de la ciudad tiene a un león en él, se decidió que tendrían a este famoso felino como identidad.</p>
        <p>Finalmente debutan en 1954, jugando su juego debut contra los Tecolotes de Nuevo Lared ganando 8 – 0 en el marcador.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/leones-2.jpg" alt="Periodico">
          <figcaption>Periódico del debut de los Leones</figcaption>
          </figure>

        <h6>Primer Título</h6>
        <p>El equipo no tardó en encontrar el oro, pues tres años de su debut conseguirían su primer campeonato, guiados por el mánager Oscar “Barriguilla” Rodríguez y contando con jugadores excepcionales.</p>
        <p>Luego de varios años, los Yucatecos se mudaron de sede hasta que volvieron en 1970 para formar parte de la recién creada Zona Sur, con muchos espectadores que querían ser testigos del regreso de los Leones a la Liga. Aunque su estancia no duró mucho, una vez más se retiraron para posteriormente regresar en 1979, solo que esta vez ya no se irían a ningún lado.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/leones-3.jpg" alt="Alineación">
          <figcaption>Alineación de los Leones</figcaption>
          </figure>

        <h6>Segundo Título</h6>
        <p>En 1984, luego de exitosamente eliminar a Los Diablos Rojos del México y a los Tigres Capitalinos, se coronarían al conseguir el triunfo sobre los Indios de Ciudad Juarez, en el sexto partido de la serie final.</p>

        <h6>Tercer Título</h6>
        <p>Dirigidos por el boricua Lino Rivera, los llamados melenudos entraron en la postemporada de 2006, dejando atrás nuevamente a los Tigres y los Diablos, llegando esta vez a la final contra los Sultanes de Monterrey, obteniendo la victoria en la entrada catorce del quinto juego.</p>


          <figure class="equipo-foto">
          <img src="assets/equipos/leones-4.jpg" alt="Victoria">
          <figcaption>Victoria del equipo en el 2006</figcaption>
          </figure>     
          
        <h6>Cuarto Título</h6>
        <p>Bajo el liderazgo de Roberto “Chapo” Vizcarra, en 2018 consiguen su cuarto título de liga alzando la copa Zaachila, derrotando nuevamente a Los Sultanes en la Serie del Rey (serie actual de campeonato de la liga), siendo el primer equipo en ganar cuatro juegos como local.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/leones-5.jpg" alt="Victoria">
          <figcaption>Celebración del título de 2018</figcaption>
          </figure> 
          
        <h6>Quinto Título</h6>
        <p>Su última conquista se da en 2022 venciendo en la Zona Sur a los Tigres, los Pericos y los Diablos Rojos, viajando a la capital por el campeonato que ya les pertenecía. Una vez más logran darle vuelta a una serie que favorecía a Los sultanes, teniendo una ventaja en el juego seis y siete para finalmente coronarse como campeones.</p>

        <h5>Actualidad</h5>
        <p>Aún con su historial de victorias, los leones se encuentran en la última posición de la zona sur en la temporada actual, mostrando que hay altos y bajos pero que nunca se rinden ante el deseo de ser más grandes que lo que fueron ayer. Su estadio actual es el Parque Kukulcán Alamo, también apodado como “la cueva”, con una capacidad de 14,917 personas. La mascota del conjunto se trata de Leonel “el coronel”, un melenudo león caricaturesco que trae ánimos en las buenas y en las malas.</p>

          <figure class="equipo-foto">
          <img src="assets/equipos/leones-6.jpg" alt="Leonel">
          <figcaption>Leonel "El coronel", mascota del equipo</figcaption>
          </figure> 
      `
    }
  ];

  let equipoSel = 0;
  const elNombre = document.getElementById("equipo-nombre");
  const elActual = document.getElementById("logo-actual");
  const elPrev   = document.getElementById("logo-prev");
  const elNext   = document.getElementById("logo-next");
  const elPuntos = document.getElementById("equipo-puntos");
  const elInfo   = document.getElementById("equipo-info");

  equiposInfo.forEach((_, i) => {
    const punto = document.createElement("span");
    punto.addEventListener("click", () => irAEquipo(i));
    elPuntos.appendChild(punto);
  });

  function irAEquipo(i) {
    const total = equiposInfo.length;
    equipoSel = (i + total) % total; // navegacion circular
    const eq   = equiposInfo[equipoSel];
    const prev = equiposInfo[(equipoSel - 1 + total) % total];
    const next = equiposInfo[(equipoSel + 1) % total];

    elNombre.textContent = eq.nombre;
    elActual.src = eq.logo;  elActual.alt = eq.nombre;
    elPrev.src   = prev.logo; elPrev.alt  = prev.nombre;
    elNext.src   = next.logo; elNext.alt  = next.nombre;

    [...elPuntos.children].forEach((p, idx) =>
      p.classList.toggle("activo", idx === equipoSel));

    elInfo.innerHTML = `
      <h4>${eq.nombre}</h4>
      ${eq.info ? eq.info : "<p>Información próximamente.</p>"}
    `;
  }

  document.getElementById("equipo-prev").addEventListener("click", () => irAEquipo(equipoSel - 1));
  document.getElementById("equipo-next").addEventListener("click", () => irAEquipo(equipoSel + 1));
  elPrev.addEventListener("click", () => irAEquipo(equipoSel - 1));
  elNext.addEventListener("click", () => irAEquipo(equipoSel + 1));

  // Deslizar con el dedo para celular
  let inicioX = 0;
  const zonaSwipe = document.querySelector(".selector-logos");
  zonaSwipe.addEventListener("touchstart", e => { inicioX = e.touches[0].clientX; });
  zonaSwipe.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - inicioX;
    if (Math.abs(dx) > 40) irAEquipo(equipoSel + (dx < 0 ? 1 : -1));
  });

  irAEquipo(0);
}