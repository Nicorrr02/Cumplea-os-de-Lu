/* =========================================================
   Tu Año — script.js
   Todo el contenido vive en `months`. Para agregar o modificar
   recuerdos, edita solamente ese array: la lógica visual de abajo
   no necesita tocarse.
   ========================================================= */

/**
 * Tipos de recuerdo soportados: "foto" | "video" | "gif" | "nota"
 * Estilos de capítulo soportados: "album" | "collage" | "diario"
 *                                 "polaroid" | "audiovisual" | "minimalista"
 *
 * Cada mes:
 *  {
 *    key:    string   -> usado para la carpeta media/<key>/
 *    name:   string   -> nombre visible del mes
 *    number: string   -> "01".."12", solo decorativo
 *    quote:  string   -> frase corta del capítulo (opcional)
 *    style:  string   -> familia visual del capítulo
 *    closing:string   -> frase de la transición de cierre (opcional)
 *    memories: [ {...} ]
 *  }
 */
const months = [
  {
    key: "septiembre", name: "Septiembre", number: "01", style: "album",
    quote: "Recuerdas ese mes?",
    closing: "Este sera nuesto punto de partida, ¿lista?",
    memories: [
      { type: "foto", src: "media/septiembre/EvilLu.jpeg", caption: "13 de septiembre — Ibamos camino a Silvia" },
      { type: "foto", src: "media/septiembre/LuComiendoTodos.jpeg", caption: "13 de septiembre — Todos comiendo juntos como una familia tradicional" },
      { type: "foto", src: "media/septiembre/FiestaLuCasaCobija.jpg", caption: "13 de septiembre — Nos quedamos todos en Silvia" },
      { type: "foto", src: "media/septiembre/LuSebasPlaneando.jpeg", caption: "13 de septiembre — Sebas estaba tramando algo -.-" },
      { type: "foto", src: "media/septiembre/LuSuperLu.jpeg", caption: "13 de septiembre — Te estasbas transformando en super Lu (Sebas seguia tramando algo)" },
      { type: "foto", src: "media/septiembre/LuJosePijama.jpeg", caption: "13 de septiembre — Algunos se pusieron sus mejores pijamas" },
      { type: "foto", src: "media/septiembre/LuFierro.jpeg", caption: "14 de septiembre — Algunos llegaron el otro dia" },
      { type: "foto", src: "media/septiembre/LuTrioDeMosqueteros.jpeg", caption: "14 de septiembre - Aqui ya estabamos almorzando" },
      { type: "foto", src: "media/septiembre/FiestaLuCasa.jpeg", caption: "14 de septiembre - No sabiamos que hacer en Silvia, entonces fuimos a Chiman (Santi tirando emotiza)" },
      { type: "foto", src: "media/septiembre/LuHombresQueAma.jpeg", caption: "14 de septiembre - Los hombres que más amas" },
      { type: "foto", src: "media/septiembre/LuSebasMauriYAleja.jpeg", caption: "14 de septiembre - :D" },
      { type: "foto", src: "media/septiembre/LuJeshuaPosando.jpeg", caption: "14 de septiembre - Jeshua tirando rostro" },
      { type: "foto", src: "media/septiembre/LuSebasYMauri.jpeg", caption: "14 de septiembre - Unos cra" },
      { type: "foto", src: "media/septiembre/LuYNico.jpeg", caption: "14 de septiembre - Que bonitos" },
      { type: "foto", src: "media/septiembre/FiestaLuFamilia.jpg", caption: "14 de septiembre - Tus papis y hermanito" },
      { type: "foto", src: "media/septiembre/FiestaLu.jpeg", caption: "14 de septiembre - Todos en tu cumple :D" },
      { type: "foto", src: "media/septiembre/LuCute.jpeg", caption: "14 de septiembre - So cute" },
      { type: "foto", src: "media/septiembre/LuChicosComiendoPastel.jpeg", caption: "14 de septiembre - Comiendo pastel ñam ñam" },
      { type: "foto", src: "media/septiembre/LuJeshuaPortada.jpeg", caption: "14 de septiembre - Parece cover de un album" },
      { type: "video", src: "media/septiembre/LuLego.MOV", poster: "media/julio/video-poster.svg", caption: "26 de septiembre - Nuestro primer lego Omaigo" },
      { type: "video", src: "media/septiembre/LuOtro.MOV", caption: "26 de septiembre - ¿Otro? jejeje" },
    ] 
  },
  {
    key: "octubre", name: "Octubre", number: "02", style: "collage",
    quote: "El mes de las brujas y los disfraces.",
    closing: "Octubre se fue casi sin avisar...",
    memories: [
      { type: "foto", src: "media/octubre/LuAlbum.jpg", caption: "10 de octubre - llenando el album por primera vez" },
      { type: "video", src: "media/octubre/LuComoQueDiscord.MOV", caption: "17 de octubre - ¿comó que discord?"  },
      { type: "foto", src: "media/octubre/LuJuli.jpg", caption: "17 de octubre - Tu y Juli" },
      { type: "nota", text: "Te amo mucho ¿Sabias?" },
      { type: "foto", src: "media/octubre/LuChicas.jpg", caption: "17 de octubre - Todas las chicas juntas" },
      { type: "nota", text: "¿Ya te dije que te amo?" },
      { type: "foto", src: "media/octubre/LuTodosFiestaJuli.jpg", caption: "17 de octubre - Todos reunidos para celebrarle a Juli" },
      { type: "foto", src: "media/octubre/LuGafas.jpeg", caption: "22 de octubre - Tu comprando tus gafas (Pasaron a mejor vida)" },
      { type: "nota", text: "Mira que te amo" },
      { type: "foto", src: "media/octubre/LuLibardo.jpg", caption: "31 de octubre - ¿Alguien necesita un superheroe?" },
      { type: "foto", src: "media/octubre/LuPatito.jpeg", caption: "31 de octubre -  Derramando facha" },
      { type: "video", src: "media/octubre/LuSebasGlobito.mp4", caption: "31 de octubre - Es cine"  },
      { type: "foto", src: "media/octubre/LuGamer.jpg", caption: "31 de octubre -  Super concentrada, super pro" },
      { type: "foto", src: "media/octubre/LuSandwichitosDeliciosos.jpg", caption: "31 de octubre -  ¿Recuerdas esos sandwichitos ricos?" },
      { type: "foto", src: "media/octubre/LuMuyHermosaWowWow.jpg", caption: "31 de octubre -  Creo que no queda mas que decir, solo WOW" },
      { type: "nota", text: "Te amo" },
    ]
  },
  {
    key: "noviembre", name: "Noviembre", number: "03", style: "diario",
    quote: "Una página escrita para ti.",
    closing: "Cerramos noviembre como quien cierra un cuaderno...",
    memories: [
      { type: "nota", text: "Querido diario: noviembre se vio así" },
      { type: "nota", text: "Salidas con amigos" },
      { type: "foto", src: "media/noviembre/LuIsaFierro.jpg", caption: "7 de noviembre - Cita doble" },
      { type: "foto", src: "media/noviembre/LuComidaIsaFierro.jpg", caption: "7 de noviembre - Muy rico todo" },
      { type: "nota", text: "De animalitos" },
      { type: "foto", src: "media/noviembre/LuAnimalito.jpeg", caption: "9 de noviembre - :3" },
      { type: "foto", src: "media/noviembre/LuAnimalito2.jpeg", caption: "9 de noviembre - :D" },
      { type: "foto", src: "media/noviembre/LuAnimalito3.jpeg", caption: "9 de noviembre - uwu" },
      { type: "foto", src: "media/noviembre/LuCapitan.jpeg", caption: "9 de noviembre - awwwwww" },
      { type: "nota", text: "Dotes artisticos" },
      { type: "foto", src: "media/noviembre/LuPinturas.jpg", caption: "11 de noviembre - El de nico quedo mejor" },
      { type: "nota", text: "Mas cumpleaños" },
      { type: "foto", src: "media/noviembre/LuCumpleFiet.jpeg", caption: "14 de noviembre - Otro cumpleaños" },
      { type: "nota", text: "Mas comida" },
      { type: "foto", src: "media/noviembre/LuQbano.jpg", caption: "17 de noviembre - Lo mejor de comer, es comer junto a Lu" },
      { type: "nota", text: "Otro viaje" },
      { type: "foto", src: "media/noviembre/LuTerminal.jpeg", caption: "22 de noviembre - Partimos hacia un destino desconocido (Timbio)" },
      { type: "video", src: "media/noviembre/LuTodosBusTimbio.mp4", caption: "22 de noviembre - Video recordatorio omaga" },
      { type: "foto", src: "media/noviembre/LuVIajeTimbio.jpg", caption: "22 de noviembre - Side eye" },
      { type: "foto", src: "media/noviembre/LuFokinOveja.jpeg", caption: "22 de noviembre - Una fokin oveja" },
      { type: "foto", src: "media/noviembre/LuPerritoPequeño.jpeg", caption: "22 de noviembre - Y un perrito pequeño" },
      { type: "foto", src: "media/noviembre/LuAlejita.jpeg", caption: "22 de noviembre - Alejitaaa" },
      { type: "foto", src: "media/noviembre/LuJeshuaPulgar.jpeg", caption: "22 de noviembre - Jeshuaaa" },
      { type: "foto", src: "media/noviembre/LuSebasYNicolle.jpeg", caption: "22 de noviembre - Sebitasss y Nicolleee" },
      { type: "foto", src: "media/noviembre/LuNicoMuak.jpeg", caption: "22 de noviembre - Muak" },
      { type: "foto", src: "media/noviembre/LuMauriArrozChino.jpeg", caption: "22 de noviembre - Mauriciooo y el arroz" },
      { type: "foto", src: "media/noviembre/LuNicoScore.jpeg", caption: "22 de noviembre - El ganador" },
      { type: "foto", src: "media/noviembre/LuFacha.jpeg", caption: "22 de noviembre - Facherosss" },
      { type: "foto", src: "media/noviembre/LuNicoFelih.jpg", caption: "22 de noviembre - Nico felih :D" },
      { type: "foto", src: "media/noviembre/LuLauraYNelson.jpeg", caption: "22 de noviembre - Laura y Nelson" },
      { type: "nota", text: "Hubo tiempo para cantar" },
      { type: "foto", src: "media/noviembre/LuJeshuaCantando.jpeg", caption: "22 de noviembre - Jeshuaaa" },
      { type: "foto", src: "media/noviembre/LuJuliCantando.jpeg", caption: "22 de noviembre - Juliii" },
      { type: "foto", src: "media/noviembre/LuLauraCantando.jpeg", caption: "22 de noviembre - Lauraaaa" },
      { type: "foto", src: "media/noviembre/LuMaruiCantando.jpeg", caption: "22 de noviembre - Mauriciooo" },
      { type: "foto", src: "media/noviembre/LuMaryuriCantando.jpeg", caption: "22 de noviembre - Maryuriii" },
      { type: "foto", src: "media/noviembre/LuNicolleCantando.jpeg", caption: "22 de noviembre - Nicolleee" },
      { type: "foto", src: "media/noviembre/LuNicoCantando.jpeg", caption: "22 de noviembre - Nicooo" },
      { type: "foto", src: "media/noviembre/LuSebasCantando.jpeg", caption: "22 de noviembre - Sebitasss" },
      { type: "foto", src: "media/noviembre/LuYJeshuaCantandop.jpeg", caption: "22 de noviembre - En duetooo omago" },
      { type: "nota", text: "Tambien para bailar" },
      { type: "video", src: "media/noviembre/LuPerreoNoVerConFamilia.mp4", caption: "22 de noviembre - Ver con precaucion" },
      

    ]
  },
  {
    key: "diciembre", name: "Diciembre", number: "04", style: "minimalista",
    quote: "Un mes para cerrar el año con broche de oro.",
    closing: "Diciembre se despidió con dejando un año con muhos recuerdos...",
    memories: [
      { type: "foto", src: "media/diciembre/LuGym.jpg", caption: "4 de diciembre - Iniciamos fits" },
      { type: "nota", text: "TE AMOOOOO." },
      { type: "foto", src: "media/diciembre/LuSustentacion.JPG", caption: "10 de diciembre - Sustentacion con Libargod" },
      { type: "foto", src: "media/diciembre/LuSalida.jpeg", caption: "11 de diciembre - Ultima salida del semestre" },
      { type: "video", src: "media/diciembre/LuRaices.mp4", caption: "11 de dicembre - Recordando las raices" },
      { type: "foto", src: "media/diciembre/LuDeslumbrante.jpeg", caption: "11 de diciembre - Eres mas deslumbrante que la propia luz" },
      { type: "foto", src: "media/diciembre/LuEscaleras.jpeg", caption: "11 de diciembre - Foto muy asteti" },
      { type: "foto", src: "media/diciembre/LuArepas.jpeg", caption: "11 de diciembre - Ese dia me llevaste una arepa muak (Nelson brillaba)" },
      { type: "nota", text: "Este momento fue bonito" },
      { type: "foto", src: "media/diciembre/LuNicoSilvia.jpg", caption: "29 de diciembre - Vernos una ultima vez, antes de finalizar el año" },
      { type: "nota", text: "Y no podian faltar" },
      { type: "foto", src: "media/diciembre/LuRegaloNico.jpeg", caption: "De mi para ti" },
      { type: "foto", src: "media/diciembre/LuRegalo.jpeg", caption: "De ti para mi" },
    ]
  },
  {
    key: "enero", name: "Enero", number: "05", style: "collage",
    quote: "El comienzo de un nuevo año.",
    closing: "Guardamos enero en nuestra memoris :3...",
    memories: [
      { type: "foto", src: "media/enero/LuNicoSilviaCarnaval.jpeg", caption: "10 de enero - Volvimos a vernos, ahora para pasar carnavales juntos" },
      { type: "foto", src: "media/enero/LuTrenzas.jpg", caption: "10 de enero - Muy linda con trenzas" },
      { type: "video", src: "media/enero/LuCarnavalCarioca.mov", caption: "10 de enero - Talvez abrir la boca no era la mejor idea" },
      { type: "video", src: "media/enero/LuPiano.mov", caption: "12 de enero - Como artistas, somos buenos ingenieros" },
      { type: "foto", src: "media/enero/LuSegundaPlanta.jpg", caption: "30 de enero - Tu segunda planta de lego" },
      { type: "video", src: "media/enero/LuSegundoLego.MOV", caption: "30 de enero - Un pequeñoo resumen" },
      { type: "foto", src: "media/enero/LuCumpleañeros.jpeg", caption: "30 de enero - Para terminar el dia, otra celebracion" },
      { type: "foto", src: "media/enero/LuCumpleJeshuaLaura.jpg", caption: "30 de enero - Fotito para el recuerdo" },
    ]
  },
  {
    key: "febrero", name: "Febrero", number: "06", style: "album",
    quote: "El mes del amor.",
    closing: "Febrero quedó pegado en estas páginas...",
    memories: [
      { type: "foto", src: "media/febrero/Lu14Febrero.jpeg", caption: "14 de febrero - Recreamos nuestra primera cita, en el mismo lugar" },
      { type: "foto", src: "media/febrero/LuHermosa14Febrero.jpg", caption: "14 de febrero - Que hermosura por Dios" },
      { type: "foto", src: "media/febrero/LuComida14Febrero.jpg", caption: "14 de febrero - Rico rico" },
      { type: "video", src: "media/febrero/LuSuperHermosaVideo14Febrero.MOV", caption: "14 de febrero - Simplemente hermosa" },
      { type: "foto", src: "media/febrero/LuBerlin.jpeg", caption: "20 de febrero - Con un gordito" },
      { type: "foto", src: "media/febrero/LuBeso.jpeg", caption: "20 de febrero - Otro muak" },
      { type: "foto", src: "media/febrero/LuViaje1.jpeg", caption: "28 de febrero - Viajecito familiar" },
      { type: "foto", src: "media/febrero/LuViaje2.jpeg", caption: "28 de febrero - Con mini Aleja y Angie" },
      { type: "foto", src: "media/febrero/LuViaje3.jpeg", caption: "28 de febrero - Familia" },
      { type: "foto", src: "media/febrero/LuViaje4.jpeg", caption: "28 de febrero - Definitivamente la mujer mas hermosa del mundo mundial" },
    ]
  },
  {
    key: "marzo", name: "Marzo", number: "07", style: "audiovisual",
    quote: "Este mes lo contamos mejor en video.",
    closing: "Marzo se quedó grabado, color ",
    memories: [
      { type: "foto", src: "media/marzo/LuViaje.jpeg", caption: "1 de marzo - Seguias de viaje" },
      { type: "foto", src: "media/marzo/ComidaAniversario.jpg", caption: "6 de marzo - Estabamos comiendo por nuestro aniversario (lindo lugar)" },
      { type: "foto", src: "media/marzo/LuLego.jpg", caption: "7 de marzo - Ya habiamos visto los regalos, tu me diste esto, tu ya sabes que te di :D" },
      { type: "foto", src: "media/marzo/LuCafe.jpeg", caption: "19 de marzo - Redimiendo tus cupones jijiji" },
      { type: "foto", src: "media/marzo/LuHelao.jpg", caption: "20 de marzo - Mas cupones jijiji" },
      { type: "foto", src: "media/marzo/LuSoCute.jpeg", caption: "24 de marzo - Que ternura" },
      { type: "foto", src: "media/marzo/LuSuperHermosa.jpg", caption: "24 de marzo - Me muero de la belleza" },
      { type: "foto", src: "media/marzo/LuAsado.jpg", caption: "27 de marzo - Otro asado (no fue asado)" },
      { type: "foto", src: "media/marzo/LuSuperEnamorada.jpg", caption: "27 de marzo - Quiero alguien que me mire asi, espera, si tengo a alguien que me mira asi :p" },
      { type: "video", src: "media/marzo/LuColor.mp4", caption: "27 de marzo - ¿Que color era?" }
    ]
  },
  {
    key: "abril", name: "Abril", number: "08", style: "collage",
    quote: "Todo pasó tan rápido este mes.",
    closing: "Abril se mezcló entre tantos recuerdos...",
    memories: [
      { type: "nota", text: "Querido diario: Amo a Lu." },
      { type: "foto", src: "media/abril/LuRegidora.jpg", caption: "3 de abril - Lu regidora, toda una regia" },
      { type: "foto", src: "media/abril/LuRoblos.jpg", caption: "6 de abril - Un poquito de roblos" },
      { type: "video", src: "media/abril/LuOhSheIsSoFBeatiful.MOV", caption: "7 de abril - Yes, U are" },
      { type: "foto", src: "media/abril/LuCocinandoDoriLocos.jpeg", caption: "7 de abril - Nuestros primeros dorilocos" },
      { type: "foto", src: "media/abril/LuConMono.jpg", caption: "16 de abril - Mono mendigando amor" },
      { type: "foto", src: "media/abril/LuPizza.jpeg", caption: "24 de abril - Pizza rico rico" },
      { type: "foto", src: "media/abril/LuMojarra.jpg", caption: "25 de abril - Toda una mojarra" },
      { type: "foto", src: "media/abril/LuWatafa.jpeg", caption: "26 de abril - ?" },
      { type: "foto", src: "media/abril/LuSinPalabras.jpeg", caption: "28 de abril - Pero que linda por Dios mio, wow, like super hermosa" },
      { type: "foto", src: "media/abril/LuNicolle.jpeg", caption: "29 de abril - Otro cumpleaños" },
      { type: "foto", src: "media/abril/LuSalida.jpg", caption: "29 de abril - Foto con el sol en la cara" },
    ]
  },
  {
    key: "mayo", name: "Mayo", number: "09", style: "diario",
    quote: "Volver a lo de siempre, pero distinto.",
    closing: "Mayo cerró con una sonrisa...",
    memories: [
      { type: "nota", text: "Querido diario: Re contra amo a Lu." },
      { type: "foto", src: "media/mayo/LuDorilocos.jpg", caption: "8 de mayo - Dorilocos by mi madre" },
      { type: "foto", src: "media/mayo/LuSiempreHermosa.jpg", caption: "13 de mayo - De verdad que no sera suficiente decirte lo mucho que te amo" },
      { type: "foto", src: "media/mayo/LuBerlin.jpg", caption: "13 de mayo - Todo un galan" },
      { type: "foto", src: "media/mayo/LuCuteBerlin.jpg", caption: "13 de mayo - Nos vemos cutes jajaja" },
      { type: "foto", src: "media/mayo/LuMangus.jpg", caption: "13 de mayo - Nos gusto mucho" },
      { type: "foto", src: "media/mayo/LuLibardo.jpeg", caption: "19 de mayo - OTRO cumpleaños" },
      { type: "foto", src: "media/mayo/LuLibardoCumple.jpg", caption: "19 de mayo - Fotito con el quinciañero" },
      { type: "foto", src: "media/mayo/LuNicoIguales.PNG", caption: "22 de mayo - Ni poniendonos de acuerdo vestiriamos igual" },
      { type: "foto", src: "media/mayo/LuEjecucion.jpeg", caption: "23 de mayo - Primera parte: Ejecucion del plan" },
      { type: "foto", src: "media/mayo/LuDisfruto.jpeg", caption: "23 de mayo - Segunda parte: Disfrutando el momento" },
      { type: "foto", src: "media/mayo/LuPiscina.jpg", caption: "23 de mayo - Mojarras unidas" },
      { type: "foto", src: "media/mayo/LuAleja.jpeg", caption: "23 de mayo - Alejitaaa" },
      { type: "foto", src: "media/mayo/LuLucia.jpeg", caption: "23 de mayo - Luciaaa" },
      { type: "foto", src: "media/mayo/LuPeleas.jpeg", caption: "23 de mayo - Peleasss" },
      { type: "foto", src: "media/mayo/LuYAlejita.jpeg", caption: "23 de mayo - Amigasss" },
      { type: "foto", src: "media/mayo/LuJoseLuciana.jpeg", caption: "23 de mayo - Pareja top" },
      { type: "foto", src: "media/mayo/LuJN.jpeg", caption: "23 de mayo - Nelson san" },
      { type: "foto", src: "media/mayo/LuFierro.jpeg", caption: "23 de mayo - Casi se nos va" },
      { type: "foto", src: "media/mayo/LuGalan.jpeg", caption: "23 de mayo - Pero que galan" },
      { type: "foto", src: "media/mayo/LuProfundo.jpeg", caption: "23 de mayo - Mirando a la ... nada" },
      { type: "video", src: "media/mayo/LuSebasXd.mp4", caption: "23 de mayo - ?" },
      { type: "foto", src: "media/mayo/LuSebasJuli.jpeg", caption: "23 de mayo - Que monitos" },
      { type: "video", src: "media/mayo/LuNinos.mp4", caption: "23 de mayo - Dos niños, y un autista" },
      { type: "foto", src: "media/mayo/LuUwu.jpeg", caption: "23 de mayo - UWU" }, 
    ]
  },
  {
    key: "junio", name: "Junio", number: "10", style: "minimalista",
    quote: "Mes de juego, viento y aeboles.",
    closing: "Junio se fue en un abrir y cerrar de gafas...",
    memories: [
      { type: "video", src: "media/junio/LuNicoUwu.mp4",caption: "3 de junio - Demasiado kawai >,<" },
      { type: "foto", src: "media/junio/LuJuego.jpeg", caption: "4 de junio - Eres una pro" },
      { type: "foto", src: "media/junio/LuNicoJuego.jpeg", caption: "4 de junio - Yo pues tengo salud" },
      { type: "foto", src: "media/junio/LuPlayPoint.jpg", caption: "4 de junio - Es algo inefable lo que siento cuanto te veo" },
      { type: "foto", src: "media/junio/LuTacos.jpeg", caption: "13 de junio - Comiste taquitos" },
      { type: "foto", src: "media/junio/LuSeleccion.jpeg", caption: "17 de junio - Modo seleccion" },
      { type: "foto", src: "media/junio/LuOMGSuperHermosaLikeHollyShi.jpg", caption: "18 de junio - Hermosa mujer, bonito lugar, pero ..." },
      { type: "video", src: "media/junio/LuLugarSuperAesthetic.MOV",  caption: "18 de junio - Una musica un poco particular" },
      { type: "foto", src: "media/junio/LuItTakesTwo.jpeg", caption: "21 de junio - Nos pasamos tremendo juego" },
      { type: "nota", text: "Te amo, pero no todo fue bonito" },
      { type: "foto", src: "media/junio/LuHombro.jpeg", caption: "26 de junio - Hubo un arbol que se puso de canson" },
      { type: "foto", src: "media/junio/LuArbol.jpeg", caption: "26 de junio - El culpable" },
      { type: "foto", src: "media/junio/LuGafas.jpeg", caption: "26 de junio - Nunca las olvidaremos" },
    ]
  },
  {
    key: "julio", name: "Julio", number: "11", style: "collage",
    quote: "Más instantáneas para el álbum.",
    closing: "Un mes bastante movido...",
    memories: [
      { type: "video", src: "media/julio/LuCapitan.mp4",caption: "6 de julio - Capitan siendo capitan" },
      { type: "foto", src: "media/julio/LuOMAIGA.jpg", caption: "6 de julio - Otra celebracion (De Luis Eduardo Fierro Ortiz)" },
      { type: "foto", src: "media/julio/LuNoche.jpg", caption: "6 de julio - Otra celebracion" },
      { type: "foto", src: "media/julio/LuFiesta212.jpeg", caption: "6 de julio - Lechugas como un fresco" },
      { type: "foto", src: "media/julio/LuRoblos.jpg", caption: "16 de julio - Mas roblos" },
      { type: "video", src: "media/julio/LuLuciana.mp4",caption: "19 de julio - Viajaste hacia Manizales con la mona" },
      { type: "foto", src: "media/julio/LuHamster.jpeg", caption: "19 de julio - Awwww" },
      { type: "foto", src: "media/julio/LuMonumento.jpeg", caption: "20 de julio - Visitaste el monumento a los Colonizadores" },
      { type: "foto", src: "media/julio/LuParque.jpeg", caption: "21 de julio - Tambien fuiste a un parque super bonito" },
      { type: "foto", src: "media/julio/LuMonumento2.jpeg", caption: "20 de julio - Otra perspectiva" },
      { type: "foto", src: "media/julio/LuCabra.jpeg", caption: "23 de julio - Estuviste con un cabra" },
      { type: "foto", src: "media/julio/LuControles.jpeg", caption: "24 de julio - Mientras, Santi estaba estrenando los controles" },
      { type: "nota", text: "Pero ahi no termino tu viaje, todavia quedaba algo mas" },
      { type: "foto", src: "media/julio/LuTardesCaleñasFamilia.jpg", caption: "25 de julio - Fuiste a tardes caleñas para ver a tu familia" },
      { type: "foto", src: "media/julio/LuTardesCaleñas.jpg", caption: "25 de julio - Sigo insistiendo que te ves muy tierna" },
      { type: "foto", src: "media/julio/LuNuevoControl.jpg", caption: "26 de julio - Un lolstio?" },
    ]
  },
  {
    key: "agosto", name: "Agosto", number: "12", style: "album",
    quote: "Vamos llegando a septiembre.",
    closing: "Fue un buen mes cortito...",
    memories: [
      { type: "foto", src: "media/agosto/LuGanadora.jpg", caption: "7 de agosto - Ganandole a niños, esa es mi novia" },
      { type: "foto", src: "media/agosto/LuCaballero.jpg", caption: "7 de agosto - Que hermosura caballero" },
      { type: "foto", src: "media/agosto/LuDibujo.jpg", caption: "20 de agosto - Mas dibujos" },
      { type: "foto", src: "media/agosto/LuCumpleAngelaMaury.jpg", caption: "21 de agosto - Mas dcelebraciones (Angela Y Mauricio)" },
      { type: "foto", src: "media/agosto/LuAngela.jpg", caption: "21 de agosto - Par de amigas, amantes, enamoradas, novias, esposas, blancas, ingenieras" },
      { type: "foto", src: "media/agosto/LuNico.jpg", caption: "21 de agosto - Que lindos, me gustas" },
      { type: "foto", src: "media/agosto/LuJuegoSanti.jpeg", caption: "28 de agosto - Para eso Santi tiene una hermana ingeniera" },
      { type: "foto", src: "media/agosto/LuSanti.jpeg", caption: "29 de agosto - Feliz cumple Santi" },
      { type: "video", src: "media/agosto/LuSantiWatafa.mp4",caption: "30 de julio - Mmm, Santi?" },
    ]
  },
];

/* =========================================================
   SINCRONIZACIÓN MÚSICA / VIDEO
   Si se reproduce un video, la música de fondo se pausa sola;
   al pausar o terminar el video, la música vuelve si estaba sonando.
   ========================================================= */
let musicaPausadaPorVideo = false;

function algunVideoReproduciendo(){
  return Array.from(document.querySelectorAll("#capitulos video"))
    .some(v => !v.paused && !v.ended);
}

function duckMusicaPorVideo(){
  const audio = document.getElementById("bg-music");
  if (!audio || audio.paused) return;
  audio.pause();
  musicaPausadaPorVideo = true;
}

function reanudarMusicaTrasVideo(){
  const audio = document.getElementById("bg-music");
  if (!audio || !musicaPausadaPorVideo) return;
  if (algunVideoReproduciendo()) return; // todavía hay otro video sonando
  audio.play().catch(() => {});
  musicaPausadaPorVideo = false;
}

/* =========================================================
   RENDERIZADO
   ========================================================= */

function crearRecuerdo(memoria, index){
  const el = document.createElement("article");
  el.className = `recuerdo recuerdo--${memoria.type === "foto" ? "foto" : memoria.type} washi`;

  switch(memoria.type){
    case "foto": {
      const media = document.createElement("div");
      media.className = "recuerdo__media";
      const img = document.createElement("img");
      img.src = memoria.src;
      img.alt = memoria.caption || "Fotografía del recuerdo";
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
      el.appendChild(media);
      if (memoria.caption) el.appendChild(crearCaption(memoria.caption));
      break;
    }
    case "gif": {
      const media = document.createElement("div");
      media.className = "recuerdo__media";
      const img = document.createElement("img");
      img.src = memoria.src;
      img.alt = memoria.caption || "GIF del recuerdo";
      img.loading = "lazy";
      media.appendChild(img);
      const tag = document.createElement("span");
      tag.className = "recuerdo__etiqueta";
      tag.textContent = "GIF";
      media.appendChild(tag);
      el.appendChild(media);
      if (memoria.caption) el.appendChild(crearCaption(memoria.caption));
      break;
    }
    case "video": {
      const media = document.createElement("div");
      media.className = "recuerdo__media";
      const video = document.createElement("video");
      video.controls = true;
      video.preload = "none";
      video.playsInline = true;
      if (memoria.poster) video.poster = memoria.poster;
      const source = document.createElement("source");
      source.src = memoria.src;
      source.type = "video/mp4";
      video.appendChild(source);
      // Si el archivo de video todavía no existe, evitamos que un error rompa la página.
      video.addEventListener("error", () => {
        media.classList.add("recuerdo__media--sin-video");
      }, true);
      media.appendChild(video);
      // Pausa la música mientras se ve el video, y la reanuda al pausar/terminar.
      video.addEventListener("play", duckMusicaPorVideo);
      video.addEventListener("pause", reanudarMusicaTrasVideo);
      video.addEventListener("ended", reanudarMusicaTrasVideo);
      const tag = document.createElement("span");
      tag.className = "recuerdo__etiqueta";
      tag.textContent = "video";
      media.appendChild(tag);
      el.appendChild(media);
      if (memoria.caption) el.appendChild(crearCaption(memoria.caption));
      break;
    }
    case "nota": {
      const media = document.createElement("div");
      media.className = "recuerdo__media";
      const p = document.createElement("p");
      p.className = "recuerdo__texto";
      p.textContent = memoria.text || "";
      media.appendChild(p);
      el.appendChild(media);
      break;
    }
  }
  return el;
}

function crearCaption(texto){
  const cap = document.createElement("p");
  cap.className = "recuerdo__caption";
  cap.textContent = texto;
  return cap;
}

function crearTransicion(mes, siguiente){
  const div = document.createElement("div");
  div.className = "transicion";
  div.innerHTML = `
    <p class="transicion__frase">${mes.closing || `Y así terminó ${mes.name.toLowerCase()}...`}</p>
    <p class="transicion__separador">✦ ✦ ✦</p>
    ${siguiente ? `<p class="transicion__siguiente">${siguiente.name}</p>` : ""}
  `;
  return div;
}

function crearCapitulo(mes){
  const section = document.createElement("section");
  section.className = `capitulo capitulo--${mes.style}`;
  section.id = `mes-${mes.key}`;

  const cabecera = document.createElement("div");
  cabecera.className = "capitulo__cabecera";
  cabecera.innerHTML = `
    <p class="capitulo__numero">capítulo ${mes.number}</p>
    <h2 class="capitulo__nombre">${mes.name}</h2>
    ${mes.quote ? `<p class="capitulo__frase">${mes.quote}</p>` : ""}
  `;
  section.appendChild(cabecera);

  const lienzo = document.createElement("div");
  lienzo.className = "capitulo__lienzo";
  mes.memories.forEach((m, i) => lienzo.appendChild(crearRecuerdo(m, i)));
  section.appendChild(lienzo);

  return section;
}

function renderizarAlbum(){
  const contenedor = document.getElementById("capitulos");
  const frag = document.createDocumentFragment();

  months.forEach((mes, i) => {
    frag.appendChild(crearCapitulo(mes));
    const siguiente = months[i + 1] || null;
    // No agregamos transición "vacía" después de diciembre: el mensaje final ya cumple ese rol.
    if (i < months.length - 1 || true) {
      frag.appendChild(crearTransicion(mes, siguiente));
    }
  });

  contenedor.appendChild(frag);
}

/* =========================================================
   REVELADO PROGRESIVO (IntersectionObserver)
   ========================================================= */

function activarRevelado(){
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

  const objetivos = document.querySelectorAll(
    ".recuerdo, .capitulo__cabecera, .transicion, .final__contenido"
  );

  objetivos.forEach((el, i) => {
    if (prefersReduced){
      el.classList.add("is-visible");
      return;
    }
    // pequeño desfase escalonado dentro de cada lienzo para que no aparezcan todos a la vez
    el.style.transitionDelay = `${(i % 4) * 90}ms`;
    observer.observe(el);
  });
}

/* =========================================================
   BARRA DE PROGRESO
   ========================================================= */

function activarProgreso(){
  const fill = document.getElementById("progress-fill");
  const actualizar = () => {
    const alto = document.documentElement.scrollHeight - window.innerHeight;
    const pct = alto > 0 ? (window.scrollY / alto) * 100 : 0;
    fill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  window.addEventListener("scroll", actualizar, { passive: true });
  window.addEventListener("resize", actualizar);
  actualizar();
}

/* =========================================================
   NAVEGACIÓN POR MES
   ========================================================= */

function activarNavegacion(){
  const nav = document.getElementById("mes-nav");
  if (!nav) return;

  months.forEach(mes => {
    const btn = document.createElement("a");
    btn.href = `#mes-${mes.key}`;
    btn.className = "mes-nav__btn";
    btn.textContent = mes.name;
    btn.dataset.mes = mes.key;
    nav.appendChild(btn);
  });

  // Resalta el mes activo mientras se hace scroll.
  const secciones = document.querySelectorAll("section[id^='mes-']");
  const botones = nav.querySelectorAll(".mes-nav__btn");

  const marcarActivo = (key) => {
    botones.forEach(b => b.classList.toggle("is-active", b.dataset.mes === key));
  };

  const seccionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        marcarActivo(entry.target.id.replace("mes-", ""));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  secciones.forEach(sec => seccionObserver.observe(sec));

  // La barra solo se muestra una vez que se sale de la portada.
  const portada = document.getElementById("portada");
  if (portada){
    const portadaObserver = new IntersectionObserver(([entry]) => {
      nav.classList.toggle("is-visible", !entry.isIntersecting);
    }, { threshold: 0 });
    portadaObserver.observe(portada);
  }
}

/* =========================================================
   MÚSICA
   ========================================================= */

function activarMusica(){
  const audio = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");
  const control = document.getElementById("music-control");
  const volumen = document.getElementById("music-volume");
  const portada = document.getElementById("portada");
  const btnComenzar = document.getElementById("btn-comenzar");

  // El volumen elegido se recuerda entre visitas.
  const volumenGuardado = parseFloat(localStorage.getItem("nuestro-anio-volumen"));
  const volumenInicial = Number.isFinite(volumenGuardado) ? volumenGuardado : 0.6;
  audio.volume = volumenInicial;
  volumen.value = String(volumenInicial);

  volumen.addEventListener("input", () => {
    audio.volume = parseFloat(volumen.value);
    localStorage.setItem("nuestro-anio-volumen", volumen.value);
  });

  function reproducir(){
    audio.play().catch(() => {
      // El navegador bloqueó el audio o el archivo aún no existe: no rompemos la experiencia.
    });
    toggle.setAttribute("aria-pressed", "true");
    toggle.setAttribute("aria-label", "Pausar música");
  }

  function pausar(){
    audio.pause();
    toggle.setAttribute("aria-pressed", "false");
    toggle.setAttribute("aria-label", "Reproducir música");
  }

  toggle.addEventListener("click", () => {
    if (audio.paused) reproducir(); else pausar();
  });

  btnComenzar.addEventListener("click", () => {
    btnComenzar.classList.add("is-clicked");
    portada.classList.add("is-started");
    control.hidden = false;
    reproducir();

    setTimeout(() => {
      const primerCapitulo = document.querySelector(".capitulo");
      if (primerCapitulo){
        primerCapitulo.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 350);
  });
}

/* =========================================================
   PÉTALOS DEL MENSAJE FINAL
   ========================================================= */

function crearPetalos(){
  const contenedor = document.getElementById("final-petalos");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const total = window.innerWidth < 600 ? 10 : 18;
  for (let i = 0; i < total; i++){
    const petalo = document.createElement("span");
    petalo.className = "final__petalo";
    petalo.style.left = `${Math.random() * 100}%`;
    petalo.style.animationDuration = `${6 + Math.random() * 6}s`;
    petalo.style.animationDelay = `${Math.random() * 6}s`;
    petalo.style.opacity = String(0.4 + Math.random() * 0.5);
    petalo.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    contenedor.appendChild(petalo);
  }
}

/* =========================================================
   VOLVER AL INICIO
   ========================================================= */

function activarVolverArriba(){
  const boton = document.getElementById("back-to-top");
  if (!boton) return;

  boton.hidden = false;

  const actualizar = () => {
    boton.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
  };
  window.addEventListener("scroll", actualizar, { passive: true });
  actualizar();

  boton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderizarAlbum();
  activarNavegacion();
  activarRevelado();
  activarProgreso();
  activarMusica();
  crearPetalos();
  activarVolverArriba();
});