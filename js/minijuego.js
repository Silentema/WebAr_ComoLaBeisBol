"use strict";

const musicaFondo = new Audio("assets/minijuego/sonidos/musica.wav");
const aplausos = new Audio("assets/minijuego/sonidos/aplausos.wav");

const botonSonido = document.getElementById("boton-sonido");
let sonidoActivado = localStorage.getItem("sonidoMinijuego") !== "false";

musicaFondo.loop = true;
musicaFondo.volume = 0.4;
musicaFondo.preload = "auto";

aplausos.loop = false;
aplausos.volume = 0.8;
aplausos.preload = "auto";

function iniciarMusica() {
    if (!sonidoActivado || !musicaFondo.paused || document.hidden) return;

    musicaFondo.play().catch(error => {
        console.warn("No se pudo iniciar la música:", error);
    });
}

function actualizarBotonSonido() {
    botonSonido.textContent = sonidoActivado ? "🔊" : "🔇";

    botonSonido.setAttribute(
        "aria-pressed",
        String(sonidoActivado)
    );
}

botonSonido.addEventListener("click", () => {
    sonidoActivado = !sonidoActivado;

    localStorage.setItem("sonidoMinijuego", String(sonidoActivado));

    if (sonidoActivado) {
        iniciarMusica();
    } else {
        musicaFondo.pause();
        aplausos.pause();
        aplausos.currentTime = 0;
    }

    actualizarBotonSonido();
});

actualizarBotonSonido();

document.addEventListener("pointerdown", iniciarMusica);
document.addEventListener("keydown", iniciarMusica);

/* ==============================================
   CONFIGURACIÓN DEL MINIJUEGO
   ============================================== */
const CONFIG = {
  puntosMaximos: 1000,
  meta: 900,             // Modifica aquí la puntuación necesaria para ganar
  alturaMaxima: 6500,   // Altura de la pelota en el mejor batazo
  duracionFlecha: 1.3,  // Segundos por ciclo arriba-abajo-arriba
  escalaAltura: 0.36,   // Píxeles de pantalla por unidad de altura
  premioStorage: "gorrasDesbloqueadas",
};

// Estos nombres corresponden a los modelos de gorras del proyecto.
const GORRAS = [
  { nombre: "Piratas", archivo: "assets/GorraPiratas.glb" },
  { nombre: "Tigres", archivo: "assets/GorraTigres.glb" },
  { nombre: "Pericos", archivo: "assets/GorraPericos.glb" },
  { nombre: "Olmecas", archivo: "assets/GorraOlmecas.glb" },
  { nombre: "Leones", archivo: "assets/GorraLeones.glb" },
  { nombre: "Guerreros", archivo: "assets/GorraGuerreros.glb" },
  { nombre: "El Águila", archivo: "assets/GorraElAguila.glb" },
  { nombre: "Diablos Rojos", archivo: "assets/GorraDiablos.glb" },
  { nombre: "Conspiradores", archivo: "assets/GorraConspiradores.glb" },
  { nombre: "Bravos", archivo: "assets/GorraBravos.glb" },
];

/* ==============================================
   RECURSOS VISUALES OPCIONALES
   
   Sustituye estas rutas con los nombres de tus imágenes.
   Si todavía no existen, se muestran dibujos provisionales.
   ============================================== */
const RUTAS = {
  fondos: [
  "assets/minijuego/fondo1.webp",
  "assets/minijuego/fondo2.webp",
  "assets/minijuego/fondo3.webp"
  ],
  bateador: [
    "assets/minijuego/mono2.1.webp",
    "assets/minijuego/mono2.2.webp"
  ],

  pitcher: [
    "assets/minijuego/mono1.1.webp",
    "assets/minijuego/mono1.2.webp"
  ],

  pelota: "assets/minijuego/pelota.webp",
};

function cargarImagen(ruta) {
  if (!ruta) return null;
  const imagen = new Image();
  imagen.decoding = "async";
  imagen.src = ruta;
  return imagen;
}
const arte = {
  fondos: RUTAS.fondos.map(cargarImagen),
  bateador: RUTAS.bateador.map(cargarImagen),
  pitcher: RUTAS.pitcher.map(cargarImagen),
  pelota: cargarImagen(RUTAS.pelota),
};
const listaImagen = Object.values(arte).flat();
listaImagen.filter(Boolean).forEach(img => img.addEventListener("error", () => { /* Se usa gráfico provisional */ }));
function disponible(img) { return img && img.complete && img.naturalWidth > 0; }

const canvas = document.querySelector("#lienzo");
const contexto = canvas.getContext("2d", { alpha: false });
const juego = document.querySelector("#juego");
const flecha = document.querySelector("#barra-flecha");
const instruccion = document.querySelector("#instrucciones");
const resultado = document.querySelector("#resultado");
const tituloResultado = document.querySelector("#resultado-titulo");
const mensajeResultado = document.querySelector("#resultado-mensaje");
const puntosObtenidos = document.querySelector("#puntos-obtenidos");
const premioNombre = document.querySelector("#premio-nombre");
const reclamar = document.querySelector("#reclamar");
const reintentar = document.querySelector("#reintentar");
const recordLabel = document.querySelector("#record-puntos");
document.querySelector("#meta-puntos").textContent = CONFIG.meta;

let ancho = 0;
let alto = 0;
let ultimaMarca = 0;
let frameId = null;
let jugando = false;

// Estados: listo -> bateando -> vuelo -> resultado.
let estado = "listo";
let tiempoGeneral = 0;
let tiempoEstado = 0;
let posicionFlecha = 0.5; // 0 = arriba, 1 = abajo
let puntos = 0;
let alturaObjetivo = 0;
let alturaPelota = 0;
let camaraAltura = 0;
let duracionVuelo = 3;

function leerJSON(clave, respaldo) {
  try {
    return JSON.parse(localStorage.getItem(clave)) ?? respaldo;
  } catch { return respaldo; }
}
function guardarJSON(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); }
  catch (error) { console.warn("No se pudo guardar el progreso:", error); }
}
let record = Number(leerJSON("recordBateo", 0)) || 0;
recordLabel.textContent = record;

function ajustarPantalla() {
  const rect = juego.getBoundingClientRect();
  ancho = rect.width;
  alto = rect.height;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(ancho * dpr);
  canvas.height = Math.round(alto * dpr);
  contexto.setTransform(dpr, 0, 0, dpr, 0, 0);
  dibujar();
}
window.addEventListener("resize", ajustarPantalla);

function colorEntre(a, b, t) {
  return a.map((c, i) => Math.round(c + (b[i] - c) * t));
}
function rgb(a) { return `rgb(${a[0]}, ${a[1]}, ${a[2]})`; }
function interp(a, b, t) { return Math.max(0, Math.min(1, (t - a) / (b - a))); }

//----------------------------------------------------------------------------------------------------------------------------
// ==================================
// SISTEMA DE FONDOS
// ==================================

function dibujarFondoCubriendo(imagen, ctx, w, h) {
  const escala = Math.max(
    w / imagen.width,
    h / imagen.height
  );

  const recorteW = w / escala;
  const recorteH = h / escala;

  ctx.drawImage(
    imagen,
    (imagen.width - recorteW) / 2,
    (imagen.height - recorteH) / 2,
    recorteW,
    recorteH,
    0, 0, w, h
  );
}

// Caché para evitar procesar el estadio
// en cada fotograma
let cacheEstadio = null;
let cacheAncho = 0;
let cacheAlto = 0;

function obtenerFondoEstadio() {
  const imagen = arte.fondos[0];

  if (!disponible(imagen)) return null;

  const w = Math.max(1, Math.round(ancho));
  const h = Math.max(1, Math.round(alto));

  if (
    cacheEstadio &&
    cacheAncho === w &&
    cacheAlto === h
  ) {
    return cacheEstadio;
  }

  const fondo = document.createElement("canvas");
  fondo.width = w;
  fondo.height = h;

  const ctx = fondo.getContext("2d");

  // Fondo de apoyo que llena toda la pantalla
  dibujarFondoCubriendo(imagen, ctx, w, h);

  // En móviles mostramos también el estadio
  // completo a lo ancho, sin deformarlo
  if (h > w) {
    const capa = document.createElement("canvas");
    capa.width = w;
    capa.height = w;

    const capaCtx = capa.getContext("2d");

    capaCtx.drawImage(imagen, 0, 0, w, w);

    // Desvanecimiento suave en el borde superior
    const degradado = capaCtx.createLinearGradient(
      0, 0, 0, w
    );

    degradado.addColorStop(0, "rgba(0,0,0,0)");
    degradado.addColorStop(0.22, "rgba(0,0,0,1)");
    degradado.addColorStop(1, "rgba(0,0,0,1)");

    capaCtx.globalCompositeOperation = "destination-in";
    capaCtx.fillStyle = degradado;
    capaCtx.fillRect(0, 0, w, w);

    // Colocar el estadio en la parte inferior
    ctx.drawImage(capa, 0, h - w);
  }

  cacheEstadio = fondo;
  cacheAncho = w;
  cacheAlto = h;

  return fondo;
}

// Hace más suave el inicio y final del fade
function suavizarFade(inicio, fin, valor) {
  const t = Math.max(
    0,
    Math.min(1, (valor - inicio) / (fin - inicio))
  );

  return t * t * (3 - 2 * t);
}
//------------------------------------------------------------------------------------------------------------------------------------


function dibujarEscenario() {
  const ctx = contexto;

  const [estadio, cielo, espacio] = arte.fondos;

  // Altura normalizada entre 0 y 1
  const alturaNormalizada = Math.max(
    0,
    Math.min(1, alturaPelota / CONFIG.alturaMaxima)
  );

  // Transición 1: estadio -> cielo
  const fadeCielo = suavizarFade(
    0.12,
    0.54,
    alturaNormalizada
  );

  // Transición 2: cielo -> espacio
  const fadeEspacio = suavizarFade(
    0.58,
    0.96,
    alturaNormalizada
  );

  // Fondo de respaldo
  ctx.fillStyle = "#173650";
  ctx.fillRect(0, 0, ancho, alto);

  // PRIMERA CAPA: CIELO
  if (disponible(cielo)) {
    dibujarFondoCubriendo(cielo, ctx, ancho, alto);
  }

  // SEGUNDA CAPA: ESTADIO
  if (fadeCielo < 1 && disponible(estadio)) {
    const fondoEstadio = obtenerFondoEstadio();

    ctx.save();
    ctx.globalAlpha = 1 - fadeCielo;

    ctx.drawImage(
      fondoEstadio,
      0, 0,
      ancho, alto
    );

    ctx.restore();
  }

  // TERCERA CAPA: ESPACIO
  if (fadeEspacio > 0 && disponible(espacio)) {
    ctx.save();

    ctx.globalAlpha = fadeEspacio;

    dibujarFondoCubriendo(
      espacio,
      ctx,
      ancho,
      alto
    );

    ctx.restore();
  }
}

function pintarPersonaje(imagen, x, pieY, anchoDibujo, altoDibujo, color, frame, bate = false) {
  const ctx = contexto;

  if (!disponible(imagen)) return;

  if (disponible(imagen)) {
    ctx.drawImage(imagen, x - anchoDibujo / 2, pieY - altoDibujo, anchoDibujo, altoDibujo);
    return;
  }
  // Marcador provisional en lugar de sprite de tres frames.
  ctx.save();
  ctx.translate(x, pieY);
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(6, anchoDibujo * 0.1);
  ctx.beginPath(); ctx.moveTo(0, -38); ctx.lineTo(0, -78); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, -38); ctx.lineTo(-17, -5); ctx.moveTo(0, -38); ctx.lineTo(18, -5); ctx.stroke();
  ctx.beginPath(); ctx.arc(0, -91, 13, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, -70); ctx.lineTo(frame === 2 ? 36 : -25, frame === 2 ? -84 : -62);
  ctx.stroke();
  if (bate) {
    ctx.strokeStyle = "#f6da9c";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(frame === 2 ? 25 : -23, frame === 2 ? -82 : -63);
    ctx.lineTo(frame === 2 ? 65 : -52, frame === 2 ? -91 : -110);
    ctx.stroke();
  }
  ctx.restore();
}

function dibujarJugadores() {
  const suelo = alto * 1 + camaraAltura * CONFIG.escalaAltura;

  if (suelo > alto + 125) return;

  // ANIMACIÓN DEL BATEADOR
  let bateFrame = 0;

  if (estado === "bateando" && tiempoEstado >= 0.31) {
    bateFrame = 1;
  } else if (estado === "vuelo" || estado === "resultado") {
    bateFrame = 1;
  }

  // ANIMACIÓN DEL PITCHER
  let pitcherFrame = 0;

  if (estado === "lanzando" && tiempoEstado >= 0.35) {
    pitcherFrame = 1;
  } else if (
    estado === "bateando" ||
    estado === "vuelo" ||
    estado === "resultado"
  ) {
    pitcherFrame = 1;
  }

  const tamano = Math.min(350, Math.max(210, ancho * 0.65));

  // Dibujar pitcher
  pintarPersonaje(
    arte.pitcher[pitcherFrame],
    ancho * 0.73,
    suelo,
    tamano * 0.8,
    tamano,
    "#ededf6",
    pitcherFrame
  );

  // Dibujar bateador
  pintarPersonaje(
    arte.bateador[bateFrame],
    ancho * 0.39,
    suelo,
    tamano * 0.8,
    tamano,
    "#eaa940",
    bateFrame,
    true
  );

  // PELOTA DURANTE EL LANZAMIENTO
  if (estado === "lanzando" && tiempoEstado >= 0.35) {

    const progreso = Math.min(
      1,
      (tiempoEstado - 0.35) / 0.60
    );

    const x = ancho * (0.65 - progreso * 0.23);
    const y = suelo - 180 - Math.sin(progreso * Math.PI) * 8;

    dibujarPelota(x, y, 6);
  }

  // PELOTA ESPERANDO EL CONTACTO DEL BATE
  if (estado === "bateando" && tiempoEstado < 0.31) {
    dibujarPelota(ancho * 0.42, suelo - 180, 6);
  }
}

function dibujarPelota(x, y, r) {
  r *= 3;
  const ctx = contexto;
  // Velocidad de rotación (radianes por segundo)
  const velocidadRotacion = 8;
  // Ángulo actual de la pelota
  const angulo = tiempoGeneral * velocidadRotacion;
  ctx.save();
  // Mover el origen al centro de la pelota
  ctx.translate(x, y);
  // Girar la pelota sobre su propio eje
  ctx.rotate(angulo);
  if (disponible(arte.pelota)) {
    ctx.drawImage(arte.pelota, -r, -r, r * 2, r * 2);
  } else {
    // Pelota provisional
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#d0424a";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.6, -0.8, 0.8);
    ctx.stroke();
  }
  ctx.restore();
}

function dibujar() {
  if (!ancho || !alto) return;
  dibujarEscenario();
  dibujarJugadores();
  if (estado === "vuelo" || estado === "resultado") {
    const x = ancho * .56 + Math.sin(tiempoEstado * 2.1) * 18;
    const y = alto * .78 - (alturaPelota - camaraAltura) * CONFIG.escalaAltura;
    const radio = Math.max(6, 13 - alturaPelota / 1100);
    dibujarPelota(x, y, radio);
  }
}

function cuadroResultado() {
  estado = "resultado";

  if (sonidoActivado) {
    aplausos.pause();
    aplausos.currentTime = 0;

    aplausos.play().catch(error => {
        console.warn("No se pudieron reproducir los aplausos:", error);
    });
  }
  puntosObtenidos.textContent = puntos;
  const ganado = puntos >= CONFIG.meta;
  tituloResultado.textContent = ganado ? "¡Home run!" : "¡Buen intento!";
  mensajeResultado.textContent = ganado
    ? "¡Alcanzaste la meta! Puedes reclamar una gorra."
    : `Necesitas ${CONFIG.meta} puntos para conseguir una gorra.`;
  reclamar.hidden = !ganado;
  reintentar.hidden = ganado;
  premioNombre.hidden = true;
  resultado.hidden = false;
  instruccion.hidden = true;
  if (puntos > record) {
    record = puntos;
    recordLabel.textContent = record;
    guardarJSON("recordBateo", record);
  }
}

function actualizar(dt) {
  tiempoGeneral += dt;
  tiempoEstado += dt;

  if (estado === "listo") {
    // La flecha continúa subiendo y bajando
    const fase = (tiempoGeneral % CONFIG.duracionFlecha)
      / CONFIG.duracionFlecha;
    posicionFlecha = (1 - Math.cos(2 * Math.PI * fase)) / 2;
    flecha.style.top = `${5 + posicionFlecha * 90}%`;

  } else if (estado === "lanzando") {

    // Esperar a que termine el lanzamiento
    if (tiempoEstado >= 0.95) {
      estado = "bateando";
      tiempoEstado = 0;
      instruccion.textContent = `¡Batazo de ${puntos} puntos!`;
    }

  } else if (estado === "bateando") {

    // Esperar a que termine el bateo
    if (tiempoEstado >= 0.48) {
    estado = "vuelo";
      tiempoEstado = 0;
      duracionVuelo = 1.5 +
        alturaObjetivo / CONFIG.alturaMaxima * 4.0;
      instruccion.textContent = "¡Mira hasta dónde llega la pelota!";
    }

  } else if (estado === "vuelo") {
    const avance = Math.min(1, tiempoEstado / duracionVuelo);
    alturaPelota = alturaObjetivo *
      (1 - (1 - avance) ** 2);
    camaraAltura = Math.max(
      0,
      alturaPelota - alto * 0.48 / CONFIG.escalaAltura
    );

    if (avance === 1) {
      cuadroResultado();
    }
  }
}

function bucle(marca) {
  if (!jugando) return;
  const dt = ultimaMarca ? Math.min((marca - ultimaMarca) / 1000, .06) : 0;
  ultimaMarca = marca;
  actualizar(dt);
  dibujar();
  if (estado === "resultado") {
    jugando = false; // Congelar todos los elementos en la altura máxima.
    frameId = null;
  } else {
    frameId = requestAnimationFrame(bucle);
  }
}
function iniciarBucle() {
  if (jugando) return;
  jugando = true;
  ultimaMarca = 0;
  frameId = requestAnimationFrame(bucle);
}

function batear() {
  if (estado !== "listo") return;
  // Primero comienza el lanzamiento
  estado = "lanzando";
  tiempoEstado = 0;
  // Guardar la puntuación según la posición de la flecha
  puntos = Math.min(
    CONFIG.puntosMaximos,
    Math.max(
      0,
      Math.round(
        (1 - posicionFlecha) * CONFIG.puntosMaximos
      )
    )
  );
  alturaObjetivo = 230 +
    (puntos / CONFIG.puntosMaximos) ** 1.9 *
    (CONFIG.alturaMaxima - 230);
  instruccion.textContent = "¡Lanzamiento en camino!";
}

canvas.addEventListener("pointerdown", batear);
canvas.addEventListener("keydown", evento => {
  if (evento.code === "Space" || evento.code === "Enter") {
    evento.preventDefault();
    batear();
  }
});

function reiniciar() {
  aplausos.pause();
  aplausos.currentTime = 0;

  estado = "listo";
  tiempoEstado = 0;
  tiempoGeneral = 0;
  posicionFlecha = 0.5;
  alturaPelota = 0;
  camaraAltura = 0;
  puntos = 0;
  flecha.style.top = "50%";
  resultado.hidden = true;
  premioNombre.hidden = true;
  reclamar.hidden = true;
  reintentar.hidden = true;
  instruccion.hidden = false;
  instruccion.textContent = "Toca la pantalla cuando la flecha esté arriba para batear";
  iniciarBucle();
}

reintentar.addEventListener("click", reiniciar);
reclamar.addEventListener("click", () => {
  const desbloqueadas = leerJSON(CONFIG.premioStorage, []);
  const guardadas = Array.isArray(desbloqueadas) ? desbloqueadas : [];
  const pendientes = GORRAS.filter(gorra => !guardadas.includes(gorra.archivo));
  premioNombre.hidden = false;
  if (!pendientes.length) {
    premioNombre.textContent = "¡Ya tienes todas las gorras desbloqueadas!";
  } else {
    const elegida = pendientes[Math.floor(Math.random() * pendientes.length)];
    guardarJSON(CONFIG.premioStorage, [...guardadas, elegida.archivo]);
    premioNombre.textContent = `¡Desbloqueaste la gorra de ${elegida.nombre}!`;
  }
  reclamar.hidden = true;
  reintentar.hidden = false;
  reintentar.textContent = "Jugar otra vez";
});

ajustarPantalla();
reiniciar();

window.addEventListener("pagehide", () => {
    musicaFondo.pause();
    aplausos.pause();
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        musicaFondo.pause();
        aplausos.pause();
    } else if (musicaFondo.currentTime > 0) {
        iniciarMusica();
    }
});