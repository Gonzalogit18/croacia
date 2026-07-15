/* =========================================================================
   CONTENT — Trilingual data (ES / HR / EN)
   Todo el texto del sitio vive acá. Cada destino tiene historia,
   datos y aspectos destacados en los tres idiomas.
   ========================================================================= */

// ---- UI strings (interface chrome) ----------------------------------------
const UI = {
  es: {
    brandSub: "Tierra de mil islas",
    heroKicker: "Un viaje por el Adriático",
    heroTitle: "Croacia",
    heroLead:
      "Recorré las ciudades que hicieron historia sobre el mar Adriático. Elegí un punto en el mapa y dejá que cada lugar te cuente su propia historia.",
    heroCta: "Explorar el mapa",
    exploreTitle: "Elegí tu destino",
    exploreSub: "Doce lugares imperdibles. Hacé clic en cualquier marcador del mapa o en una tarjeta.",
    factsCapital: "Capital",
    factsArea: "Superficie",
    factsPopulation: "Población",
    factsCurrency: "Moneda",
    factsLanguage: "Idioma",
    factsCapitalV: "Zagreb",
    factsAreaV: "56.594 km²",
    factsPopulationV: "~3,9 millones",
    factsCurrencyV: "Euro (EUR)",
    factsLanguageV: "Croata",
    detailFounded: "Origen",
    detailRegion: "Región",
    detailKnownFor: "Famosa por",
    detailHighlights: "Qué no te podés perder",
    detailStory: "La historia",
    detailFact: "¿Sabías que…?",
    detailPrev: "Anterior",
    detailNext: "Siguiente",
    detailBack: "Volver al mapa",
    navExplore: "Explorar",
    navAbout: "Sobre Croacia",
    footerNote: "Hecho con dedicación para recorrer Croacia. Diseño premium — las imágenes son ilustrativas.",
    langLabel: "Idioma",
    scrollHint: "Deslizá para descubrir",
  },
  hr: {
    brandSub: "Zemlja tisuću otoka",
    heroKicker: "Putovanje Jadranom",
    heroTitle: "Hrvatska",
    heroLead:
      "Istražite gradove koji su stvarali povijest na Jadranskome moru. Odaberite točku na karti i pustite da vam svako mjesto ispriča svoju priču.",
    heroCta: "Istraži kartu",
    exploreTitle: "Odaberite odredište",
    exploreSub: "Dvanaest mjesta koja se ne propuštaju. Kliknite bilo koju oznaku na karti ili karticu.",
    factsCapital: "Glavni grad",
    factsArea: "Površina",
    factsPopulation: "Stanovništvo",
    factsCurrency: "Valuta",
    factsLanguage: "Jezik",
    factsCapitalV: "Zagreb",
    factsAreaV: "56.594 km²",
    factsPopulationV: "~3,9 milijuna",
    factsCurrencyV: "Euro (EUR)",
    factsLanguageV: "Hrvatski",
    detailFounded: "Podrijetlo",
    detailRegion: "Regija",
    detailKnownFor: "Poznato po",
    detailHighlights: "Što ne smijete propustiti",
    detailStory: "Priča",
    detailFact: "Jeste li znali…?",
    detailPrev: "Prethodno",
    detailNext: "Sljedeće",
    detailBack: "Natrag na kartu",
    navExplore: "Istraži",
    navAbout: "O Hrvatskoj",
    footerNote: "Izrađeno s pažnjom za istraživanje Hrvatske. Premium dizajn — slike su ilustrativne.",
    langLabel: "Jezik",
    scrollHint: "Pomaknite za otkrivanje",
  },
  en: {
    brandSub: "Land of a thousand islands",
    heroKicker: "A journey across the Adriatic",
    heroTitle: "Croatia",
    heroLead:
      "Travel through the cities that shaped history along the Adriatic Sea. Pick a point on the map and let each place tell you its own story.",
    heroCta: "Explore the map",
    exploreTitle: "Choose your destination",
    exploreSub: "Twelve unmissable places. Click any marker on the map or a card.",
    factsCapital: "Capital",
    factsArea: "Area",
    factsPopulation: "Population",
    factsCurrency: "Currency",
    factsLanguage: "Language",
    factsCapitalV: "Zagreb",
    factsAreaV: "56,594 km²",
    factsPopulationV: "~3.9 million",
    factsCurrencyV: "Euro (EUR)",
    factsLanguageV: "Croatian",
    detailFounded: "Origins",
    detailRegion: "Region",
    detailKnownFor: "Known for",
    detailHighlights: "What you can't miss",
    detailStory: "The story",
    detailFact: "Did you know…?",
    detailPrev: "Previous",
    detailNext: "Next",
    detailBack: "Back to the map",
    navExplore: "Explore",
    navAbout: "About Croatia",
    footerNote: "Crafted with care to explore Croatia. Premium design — images are illustrative.",
    langLabel: "Language",
    scrollHint: "Scroll to discover",
  },
};

// ---- Destinations ----------------------------------------------------------
// x / y = position on the SVG map (viewBox 0 0 1200 900)
// accent = color theme used for that place's detail view
const DESTINATIONS = [
  {
    id: "zagreb",
    x: 452, y: 236, accent: "#c0392b",
    es: {
      name: "Zagreb", region: "Croacia central", founded: "Siglo XI",
      tagline: "La capital con encanto histórico y energía moderna",
      knownFor: "Ciudad Alta medieval, cafés, mercado Dolac",
      story:
        "Zagreb nació de la unión de dos colinas rivales: Gradec, la ciudad de los artesanos, y Kaptol, la ciudad de los obispos, separadas durante siglos por un arroyo hoy convertido en la calle Tkalčićeva. En 1094 el rey húngaro Ladislao fundó la diócesis de Kaptol, y del pulso entre ambos núcleos surgió la ciudad que en 1850 se unificó con un solo nombre.\n\nHoy la Ciudad Alta conserva sus calles empedradas, el funicular más corto del mundo y la iglesia de San Marcos con su techo de tejas de colores. Abajo, la Ciudad Baja despliega avenidas del siglo XIX, parques verdes en forma de herradura y una vida de café que los zagrebinos elevaron a arte.",
      highlights: [
        "Catedral de Zagreb y sus torres neogóticas",
        "Iglesia de San Marcos y su techo de escudos",
        "Mercado Dolac, 'el vientre de Zagreb'",
        "Museo de las Relaciones Rotas",
      ],
      fact: "El paseo de la Ciudad Alta se ilumina cada noche con faroles de gas encendidos a mano por un farolero, una tradición viva desde 1863.",
    },
    hr: {
      name: "Zagreb", region: "Središnja Hrvatska", founded: "11. stoljeće",
      tagline: "Glavni grad povijesnog šarma i moderne energije",
      knownFor: "Srednjovjekovni Gornji grad, kavane, tržnica Dolac",
      story:
        "Zagreb je nastao spajanjem dvaju suparničkih brežuljaka: Gradeca, grada obrtnika, i Kaptola, grada biskupâ, koje je stoljećima dijelio potok, danas ulica Tkalčićeva. Godine 1094. ugarski kralj Ladislav osnovao je Zagrebačku biskupiju, a iz natjecanja dvaju središta izrastao je grad koji je 1850. ujedinjen pod jednim imenom.\n\nDanas Gornji grad čuva popločane ulice, najkraću uspinjaču na svijetu i crkvu svetog Marka s krovom od šarenih crjepova. Ispod njega Donji grad širi avenije iz 19. stoljeća, zelene parkove u obliku potkove i kavanski život koji su Zagrepčani uzdigli do umjetnosti.",
      highlights: [
        "Zagrebačka katedrala i njezini neogotički tornjevi",
        "Crkva svetog Marka i krov s grbovima",
        "Tržnica Dolac, 'trbuh Zagreba'",
        "Muzej prekinutih veza",
      ],
      fact: "Šetnicu Gornjega grada svake večeri ručno pali lampaš plinske svjetiljke, tradicija živa od 1863. godine.",
    },
    en: {
      name: "Zagreb", region: "Central Croatia", founded: "11th century",
      tagline: "The capital of historic charm and modern energy",
      knownFor: "Medieval Upper Town, cafés, Dolac market",
      story:
        "Zagreb was born from the union of two rival hills: Gradec, the town of craftsmen, and Kaptol, the town of bishops, divided for centuries by a stream now paved over as Tkalčićeva street. In 1094 the Hungarian king Ladislaus founded the Kaptol diocese, and from the tug-of-war between the two cores grew the city that merged under a single name in 1850.\n\nToday the Upper Town keeps its cobbled lanes, the world's shortest funicular and St. Mark's Church with its roof of coloured tiles. Below, the Lower Town unfolds 19th-century avenues, a horseshoe of green parks and a café culture the locals raised to an art form.",
      highlights: [
        "Zagreb Cathedral and its neo-Gothic spires",
        "St. Mark's Church and its coat-of-arms roof",
        "Dolac market, 'the belly of Zagreb'",
        "Museum of Broken Relationships",
      ],
      fact: "The Upper Town promenade is lit each evening by gas lamps hand-lit by a lamplighter — a tradition alive since 1863.",
    },
  },
  {
    id: "plitvice",
    x: 392, y: 402, accent: "#16a085",
    es: {
      name: "Lagos de Plitvice", region: "Lika-Senj", founded: "Parque nacional desde 1949",
      tagline: "Patrimonio de la UNESCO famoso por sus lagos y cascadas",
      knownFor: "16 lagos escalonados, cascadas turquesa, bosques",
      story:
        "En el corazón boscoso de Croacia, dieciséis lagos de un turquesa imposible descienden en escalera unidos por cascadas que no dejan de crecer. El secreto es la toba: musgos y bacterias depositan carbonato de calcio que, año tras año, levanta barreras naturales y esculpe el paisaje en tiempo real.\n\nDeclarado parque nacional en 1949 y Patrimonio de la Humanidad en 1979, Plitvice se recorre por pasarelas de madera suspendidas sobre el agua cristalina. Osos pardos, lobos y linces habitan sus bosques, mientras el color de los lagos cambia con la luz, del esmeralda al zafiro.",
      highlights: [
        "Veliki Slap, la cascada más alta del país (78 m)",
        "Paseo en barco eléctrico por el lago Kozjak",
        "Pasarelas de madera sobre las aguas turquesa",
        "Miradores sobre los lagos superiores",
      ],
      fact: "El color turquesa no es un truco: el carbonato de calcio disuelto y las algas reflejan la luz de un modo que cambia según la temporada y el ángulo del sol.",
    },
    hr: {
      name: "Plitvička jezera", region: "Lika-Senj", founded: "Nacionalni park od 1949.",
      tagline: "UNESCO-va baština poznata po jezerima i slapovima",
      knownFor: "16 kaskadnih jezera, tirkizni slapovi, šume",
      story:
        "U šumovitom srcu Hrvatske šesnaest jezera nemogućega tirkiza spušta se stepenasto, povezano slapovima koji neprestano rastu. Tajna je sedra: mahovine i bakterije talože kalcijev karbonat koji iz godine u godinu podiže prirodne barijere i oblikuje krajolik u stvarnom vremenu.\n\nProglašen nacionalnim parkom 1949. i UNESCO-vom baštinom 1979., Plitvicama se prolazi drvenim stazama nad bistrom vodom. Smeđi medvjedi, vukovi i risovi žive u njihovim šumama, dok se boja jezera mijenja sa svjetlom, od smaragdne do safirne.",
      highlights: [
        "Veliki slap, najviši slap u zemlji (78 m)",
        "Vožnja električnim brodom po jezeru Kozjak",
        "Drvene staze nad tirkiznom vodom",
        "Vidikovci nad Gornjim jezerima",
      ],
      fact: "Tirkizna boja nije trik: otopljeni kalcijev karbonat i alge odbijaju svjetlost tako da se mijenja prema godišnjem dobu i kutu sunca.",
    },
    en: {
      name: "Plitvice Lakes", region: "Lika-Senj", founded: "National park since 1949",
      tagline: "UNESCO World Heritage famed for lakes and waterfalls",
      knownFor: "16 terraced lakes, turquoise waterfalls, forests",
      story:
        "In Croatia's forested heart, sixteen lakes of an impossible turquoise descend like a staircase, joined by waterfalls that never stop growing. The secret is travertine: mosses and bacteria deposit calcium carbonate that, year after year, raises natural barriers and sculpts the landscape in real time.\n\nDeclared a national park in 1949 and a World Heritage Site in 1979, Plitvice is crossed on wooden walkways suspended over crystal water. Brown bears, wolves and lynx roam its forests, while the lakes shift colour with the light, from emerald to sapphire.",
      highlights: [
        "Veliki Slap, the country's tallest waterfall (78 m)",
        "Electric boat ride across Lake Kozjak",
        "Wooden walkways over the turquoise water",
        "Viewpoints above the Upper Lakes",
      ],
      fact: "The turquoise colour is no trick: dissolved calcium carbonate and algae reflect light in a way that shifts with the season and the sun's angle.",
    },
  },
  {
    id: "rijeka",
    x: 256, y: 344, accent: "#2980b9",
    es: {
      name: "Rijeka", region: "Litoral-Montaña", founded: "Época romana (Tarsatica)",
      tagline: "Puerto rebelde, industrial y creativo del Kvarner",
      knownFor: "Puerto histórico, Carnaval, Capital Europea de la Cultura 2020",
      story:
        "Sobre las ruinas de la romana Tarsatica creció Rijeka, el gran puerto de Croacia y una ciudad acostumbrada a cambiar de bandera. Húngaros, austríacos, italianos y yugoslavos dejaron su huella en un centro donde conviven palacios de la belle époque, grúas portuarias y arte urbano.\n\nSu Korzo, la avenida peatonal, late bajo la Torre de la Ciudad con su águila bicéfala. Sobre la colina, el castillo de Trsat vigila el río Rječina, y cada invierno el Carnaval de Rijeka —uno de los mayores de Europa— llena las calles de máscaras zvončari que ahuyentan al invierno con sus campanas.",
      highlights: [
        "El Korzo y la Torre de la Ciudad",
        "Castillo de Trsat sobre el río",
        "Carnaval de Rijeka y los zvončari",
        "Escaleras Petar Kružić hacia el santuario",
      ],
      fact: "Fue Capital Europea de la Cultura en 2020, la primera ciudad croata en recibir el título.",
    },
    hr: {
      name: "Rijeka", region: "Primorsko-goranska", founded: "Rimsko doba (Tarsatica)",
      tagline: "Buntovna, industrijska i kreativna luka Kvarnera",
      knownFor: "Povijesna luka, Karneval, Europska prijestolnica kulture 2020.",
      story:
        "Na ruševinama rimske Tarsatike izrasla je Rijeka, velika hrvatska luka i grad naviknut na mijenjanje zastava. Mađari, Austrijanci, Talijani i Jugoslaveni ostavili su trag u središtu gdje žive palače belle époque, lučke dizalice i ulična umjetnost.\n\nNjezin Korzo puls je pod Gradskim tornjem s dvoglavim orlom. Na brežuljku Trsatski gradina bdije nad rijekom Rječinom, a svake zime Riječki karneval — jedan od najvećih u Europi — puni ulice maskama zvončara koji zvonima tjeraju zimu.",
      highlights: [
        "Korzo i Gradski toranj",
        "Trsatska gradina nad rijekom",
        "Riječki karneval i zvončari",
        "Stube Petra Kružića prema svetištu",
      ],
      fact: "Bila je Europska prijestolnica kulture 2020., prvi hrvatski grad s tim naslovom.",
    },
    en: {
      name: "Rijeka", region: "Primorje-Gorski Kotar", founded: "Roman era (Tarsatica)",
      tagline: "The Kvarner's rebellious, industrial and creative port",
      knownFor: "Historic port, Carnival, European Capital of Culture 2020",
      story:
        "On the ruins of Roman Tarsatica grew Rijeka, Croatia's great port and a city used to changing flags. Hungarians, Austrians, Italians and Yugoslavs left their mark on a centre where belle époque palaces, harbour cranes and street art coexist.\n\nIts Korzo, the pedestrian avenue, beats beneath the City Tower with its double-headed eagle. On the hill, Trsat Castle watches over the Rječina river, and every winter the Rijeka Carnival — one of Europe's largest — fills the streets with zvončari masks that ring their bells to chase away winter.",
      highlights: [
        "The Korzo and the City Tower",
        "Trsat Castle above the river",
        "Rijeka Carnival and the zvončari",
        "The Petar Kružić stairway to the shrine",
      ],
      fact: "It was European Capital of Culture in 2020 — the first Croatian city to hold the title.",
    },
  },
  {
    id: "pula",
    x: 138, y: 404, accent: "#d35400",
    es: {
      name: "Pula", region: "Istria", founded: "Colonia romana, s. I a.C.",
      tagline: "El gran anfiteatro romano a orillas del Adriático",
      knownFor: "Arena de Pula, ruinas romanas, astilleros",
      story:
        "En la punta de la península de Istria, Pula guarda uno de los seis anfiteatros romanos mejor conservados del mundo. La Arena, levantada en el siglo I bajo Vespasiano, acogía a 20.000 espectadores para las luchas de gladiadores y hoy es escenario de conciertos y del festival de cine bajo las estrellas.\n\nPero la Arena es solo el comienzo: el Arco de los Sergii, el Templo de Augusto y el foro romano recuerdan que Pula fue una próspera colonia. Siglos de dominio veneciano y austrohúngaro —cuando fue el principal puerto de guerra del Imperio— añadieron capas a una ciudad donde la historia se respira en cada esquina.",
      highlights: [
        "La Arena, anfiteatro romano del siglo I",
        "Templo de Augusto en el foro",
        "Arco de los Sergii",
        "Fuerte austrohúngaro de Kaštel",
      ],
      fact: "Bajo la Arena se conservan los pasadizos subterráneos donde esperaban gladiadores y fieras; hoy albergan una exposición sobre el vino y el aceite de la antigua Istria.",
    },
    hr: {
      name: "Pula", region: "Istra", founded: "Rimska kolonija, 1. st. pr. Kr.",
      tagline: "Velika rimska arena na obali Jadrana",
      knownFor: "Pulska Arena, rimske ruševine, brodogradilište",
      story:
        "Na vrhu istarskog poluotoka Pula čuva jedan od šest najbolje očuvanih rimskih amfiteatara na svijetu. Arena, podignuta u 1. stoljeću za Vespazijana, primala je 20.000 gledatelja na gladijatorskim borbama, a danas je pozornica koncerata i filmskog festivala pod zvijezdama.\n\nNo Arena je tek početak: Slavoluk Sergijevaca, Augustov hram i rimski forum podsjećaju da je Pula bila napredna kolonija. Stoljeća mletačke i austrougarske vlasti — kada je bila glavna ratna luka Carstva — dodala su slojeve gradu u kojemu se povijest osjeća na svakom uglu.",
      highlights: [
        "Arena, rimski amfiteatar iz 1. stoljeća",
        "Augustov hram na forumu",
        "Slavoluk Sergijevaca",
        "Austrougarska utvrda Kaštel",
      ],
      fact: "Ispod Arene čuvaju se podzemni hodnici u kojima su čekali gladijatori i zvijeri; danas su tu izložba o vinu i ulju stare Istre.",
    },
    en: {
      name: "Pula", region: "Istria", founded: "Roman colony, 1st c. BC",
      tagline: "The great Roman amphitheatre on the Adriatic shore",
      knownFor: "Pula Arena, Roman ruins, shipyards",
      story:
        "At the tip of the Istrian peninsula, Pula keeps one of the six best-preserved Roman amphitheatres in the world. The Arena, raised in the 1st century under Vespasian, held 20,000 spectators for gladiator fights and today hosts concerts and a film festival under the stars.\n\nBut the Arena is only the beginning: the Arch of the Sergii, the Temple of Augustus and the Roman forum recall that Pula was a thriving colony. Centuries of Venetian and Austro-Hungarian rule — when it was the Empire's chief naval port — added layers to a city where history breathes on every corner.",
      highlights: [
        "The Arena, a 1st-century Roman amphitheatre",
        "Temple of Augustus on the forum",
        "Arch of the Sergii",
        "The Austro-Hungarian Kaštel fortress",
      ],
      fact: "Beneath the Arena run the underground passages where gladiators and beasts once waited; today they host an exhibition on the wine and oil of ancient Istria.",
    },
  },
  {
    id: "rovinj",
    x: 118, y: 358, accent: "#e67e22",
    es: {
      name: "Rovinj", region: "Istria", founded: "Época bizantina",
      tagline: "El encantador pueblo costero de raíces venecianas",
      knownFor: "Casco antiguo, iglesia de Santa Eufemia, atardeceres",
      story:
        "Rovinj se levanta sobre lo que fue una isla, un laberinto de casas color pastel apretadas alrededor de la colina que corona la iglesia de Santa Eufemia. Fue posesión de Venecia durante más de cinco siglos, y de allí viene su alma: el dialecto istrovéneto, los balcones de piedra y las callejuelas donde la ropa cuelga entre ventanas.\n\nEl campanario de Santa Eufemia, copia del de San Marcos de Venecia, se ve desde toda la costa. Al atardecer, los pescadores regresan al puerto y los pintores montan sus caballetes en la calle Grisia, mientras el sol tiñe de oro las fachadas que se sumergen directamente en el mar.",
      highlights: [
        "Iglesia y campanario de Santa Eufemia",
        "Calle Grisia, de artistas y galerías",
        "Puerto pesquero y paseo marítimo",
        "Islas del archipiélago frente a la costa",
      ],
      fact: "La estatua de Santa Eufemia sobre el campanario gira con el viento y sirve de veleta a los marineros desde 1758.",
    },
    hr: {
      name: "Rovinj", region: "Istra", founded: "Bizantsko doba",
      tagline: "Šarmantno obalno mjesto venecijanskih korijena",
      knownFor: "Stara jezgra, crkva svete Eufemije, zalasci sunca",
      story:
        "Rovinj se diže na nekadašnjem otoku, labirint pastelnih kuća stisnutih oko brežuljka koji kruni crkva svete Eufemije. Bio je posjed Venecije više od pet stoljeća, i odatle mu duša: istrovenetski govor, kameni balkoni i uličice u kojima rublje visi između prozora.\n\nZvonik svete Eufemije, kopija onoga svetog Marka u Veneciji, vidi se s cijele obale. U suton se ribari vraćaju u luku, a slikari postavljaju štafelaje u ulici Grisiji, dok sunce zlati pročelja koja uranjaju izravno u more.",
      highlights: [
        "Crkva i zvonik svete Eufemije",
        "Ulica Grisia, slikarska i galerijska",
        "Ribarska luka i šetnica",
        "Otoci arhipelaga pred obalom",
      ],
      fact: "Kip svete Eufemije na vrhu zvonika okreće se na vjetru i mornarima služi kao vjetrokaz od 1758. godine.",
    },
    en: {
      name: "Rovinj", region: "Istria", founded: "Byzantine era",
      tagline: "The charming coastal town of Venetian roots",
      knownFor: "Old town, St. Euphemia's church, sunsets",
      story:
        "Rovinj rises on what was once an island, a maze of pastel houses packed around the hill crowned by St. Euphemia's church. It was a Venetian possession for over five centuries, and from that comes its soul: the Istro-Venetian dialect, stone balconies and lanes where laundry hangs between windows.\n\nSt. Euphemia's bell tower, a copy of St. Mark's in Venice, is visible from all along the coast. At dusk the fishermen return to the harbour and painters set up their easels on Grisia street, while the sun gilds the façades that plunge straight into the sea.",
      highlights: [
        "St. Euphemia's church and bell tower",
        "Grisia street, of artists and galleries",
        "The fishing harbour and seaside promenade",
        "The archipelago islands off the coast",
      ],
      fact: "The statue of St. Euphemia atop the tower turns in the wind and has served sailors as a weather vane since 1758.",
    },
  },
  {
    id: "zadar",
    x: 398, y: 468, accent: "#8e44ad",
    es: {
      name: "Zadar", region: "Dalmacia septentrional", founded: "Fundación iliria y romana",
      tagline: "Donde el mar toca música y el sol se hace luz",
      knownFor: "Órgano marino, Saludo al Sol, foro romano",
      story:
        "Zadar es una de las ciudades habitadas más antiguas de Croacia: iliros, romanos, bizantinos y venecianos la moldearon sobre una estrecha península. Su foro romano, la iglesia circular de San Donato del siglo IX y las murallas venecianas —hoy Patrimonio de la UNESCO— hablan de tres mil años de historia.\n\nPero Zadar también mira al futuro. El Órgano Marino convierte el vaivén de las olas en música a través de tubos ocultos bajo unas escaleras de piedra, y junto a él el Saludo al Sol capta la energía solar de día para dibujar un espectáculo de luces al anochecer. Alfred Hitchcock dijo que aquí se ve el atardecer más bello del mundo.",
      highlights: [
        "El Órgano Marino, música de las olas",
        "El Saludo al Sol, luces solares",
        "Iglesia de San Donato y foro romano",
        "Murallas venecianas y Puerta de Tierra Firme",
      ],
      fact: "El Órgano Marino tiene 35 tubos afinados en distintos acordes; ninguna melodía se repite, porque la componen el mar y el viento.",
    },
    hr: {
      name: "Zadar", region: "Sjeverna Dalmacija", founded: "Ilirski i rimski temelji",
      tagline: "Gdje more svira glazbu, a sunce postaje svjetlo",
      knownFor: "Morske orgulje, Pozdrav suncu, rimski forum",
      story:
        "Zadar je jedan od najstarijih naseljenih gradova Hrvatske: Iliri, Rimljani, Bizantinci i Mlečani oblikovali su ga na uskom poluotoku. Njegov rimski forum, kružna crkva svetog Donata iz 9. stoljeća i mletačke zidine — danas UNESCO-va baština — govore o tri tisuće godina povijesti.\n\nNo Zadar gleda i u budućnost. Morske orgulje pretvaraju zapljuskivanje valova u glazbu kroz cijevi skrivene ispod kamenih stuba, a uz njih Pozdrav suncu danju hvata sunčevu energiju da bi u sumrak stvorio svjetlosnu predstavu. Alfred Hitchcock rekao je da se ovdje vidi najljepši zalazak sunca na svijetu.",
      highlights: [
        "Morske orgulje, glazba valova",
        "Pozdrav suncu, sunčeva svjetla",
        "Crkva svetog Donata i rimski forum",
        "Mletačke zidine i Kopnena vrata",
      ],
      fact: "Morske orgulje imaju 35 cijevi ugođenih u različite akorde; nijedna se melodija ne ponavlja jer je skladaju more i vjetar.",
    },
    en: {
      name: "Zadar", region: "Northern Dalmatia", founded: "Illyrian and Roman foundations",
      tagline: "Where the sea plays music and the sun becomes light",
      knownFor: "Sea Organ, Greeting to the Sun, Roman forum",
      story:
        "Zadar is one of Croatia's oldest inhabited cities: Illyrians, Romans, Byzantines and Venetians shaped it on a narrow peninsula. Its Roman forum, the 9th-century circular church of St. Donatus and the Venetian walls — now UNESCO World Heritage — speak of three thousand years of history.\n\nBut Zadar also looks forward. The Sea Organ turns the sway of the waves into music through pipes hidden beneath stone steps, and beside it the Greeting to the Sun gathers solar energy by day to paint a light show at dusk. Alfred Hitchcock said the world's most beautiful sunset is seen here.",
      highlights: [
        "The Sea Organ, music of the waves",
        "The Greeting to the Sun, solar lights",
        "St. Donatus church and the Roman forum",
        "Venetian walls and the Land Gate",
      ],
      fact: "The Sea Organ has 35 pipes tuned to different chords; no melody ever repeats, because it is composed by the sea and the wind.",
    },
  },
  {
    id: "sibenik",
    x: 470, y: 520, accent: "#27ae60",
    es: {
      name: "Šibenik", region: "Dalmacia central", founded: "Siglo XI (fundación croata)",
      tagline: "La ciudad de piedra levantada por manos croatas",
      knownFor: "Catedral de Santiago, fortalezas, festival infantil",
      story:
        "A diferencia de sus vecinas de origen romano o griego, Šibenik fue fundada por los propios croatas y mencionada por primera vez en 1066 por el rey Petar Krešimir IV. Se aferra a una ladera sobre la desembocadura del río Krka, coronada por cuatro fortalezas que la defendían de los otomanos.\n\nSu joya es la catedral de Santiago, obra maestra del Renacimiento construida enteramente en piedra —sin ladrillo ni madera— y declarada Patrimonio de la UNESCO. En su ábside, un friso de 71 cabezas esculpidas retrata a los ciudadanos de la época: un álbum de rostros del siglo XV tallado en piedra de Brač.",
      highlights: [
        "Catedral de Santiago, Patrimonio de la UNESCO",
        "Fortaleza de San Miguel, con escenario al aire libre",
        "Fortaleza de San Juan sobre la ciudad",
        "Cataratas del Krka, muy cerca",
      ],
      fact: "El friso de 71 cabezas de la catedral es un retrato colectivo de vecinos reales del siglo XV: quien no pagó su parte de la obra fue tallado con muecas poco favorecedoras.",
    },
    hr: {
      name: "Šibenik", region: "Srednja Dalmacija", founded: "11. stoljeće (hrvatski utemeljitelji)",
      tagline: "Kameni grad koji su podigle hrvatske ruke",
      knownFor: "Katedrala svetog Jakova, tvrđave, dječji festival",
      story:
        "Za razliku od susjeda rimskoga ili grčkoga podrijetla, Šibenik su utemeljili sami Hrvati, a prvi ga put spominje 1066. kralj Petar Krešimir IV. Priljubljen je uz padinu nad ušćem rijeke Krke, okrunjen s četiri tvrđave koje su ga branile od Osmanlija.\n\nNjegov je dragulj katedrala svetog Jakova, remek-djelo renesanse sagrađeno u cijelosti od kamena — bez opeke i drva — i uvršteno u UNESCO-vu baštinu. Na njezinoj apsidi friz od 71 isklesane glave prikazuje tadašnje građane: album lica iz 15. stoljeća uklesan u bračkom kamenu.",
      highlights: [
        "Katedrala svetog Jakova, UNESCO-va baština",
        "Tvrđava svetog Mihovila s ljetnom pozornicom",
        "Tvrđava svetog Ivana nad gradom",
        "Slapovi Krke u blizini",
      ],
      fact: "Friz od 71 glave na katedrali skupni je portret stvarnih mještana iz 15. stoljeća: tko nije platio svoj dio gradnje, isklesan je s neugodnim grimasama.",
    },
    en: {
      name: "Šibenik", region: "Central Dalmatia", founded: "11th century (Croatian founding)",
      tagline: "The stone city raised by Croatian hands",
      knownFor: "St. James Cathedral, fortresses, children's festival",
      story:
        "Unlike its neighbours of Roman or Greek origin, Šibenik was founded by Croats themselves and first mentioned in 1066 by King Petar Krešimir IV. It clings to a slope above the mouth of the Krka river, crowned by four fortresses that once defended it from the Ottomans.\n\nIts jewel is St. James Cathedral, a Renaissance masterpiece built entirely of stone — no brick, no timber — and inscribed as UNESCO World Heritage. On its apse, a frieze of 71 sculpted heads portrays the citizens of the age: a 15th-century album of faces carved in stone from Brač.",
      highlights: [
        "St. James Cathedral, UNESCO World Heritage",
        "St. Michael's Fortress with an open-air stage",
        "St. John's Fortress above the town",
        "The Krka waterfalls, very close by",
      ],
      fact: "The cathedral's frieze of 71 heads is a collective portrait of real 15th-century townsfolk: whoever didn't pay their share of the works was carved with unflattering grimaces.",
    },
  },
  {
    id: "split",
    x: 552, y: 560, accent: "#f39c12",
    es: {
      name: "Split", region: "Dalmacia central", founded: "Palacio de Diocleciano, s. IV",
      tagline: "Una ciudad viva dentro de un palacio romano",
      knownFor: "Palacio de Diocleciano, paseo Riva, puerta a las islas",
      story:
        "A comienzos del siglo IV, el emperador Diocleciano —hijo de Dalmacia— mandó construir un palacio-fortaleza para su retiro junto al mar. Cuando el imperio cayó, los habitantes de la cercana Salona se refugiaron entre sus muros, y así el palacio nunca se convirtió en ruina: se transformó en ciudad. Hoy la gente vive, cena y tiende la ropa dentro de sus paredes de 1.700 años.\n\nEl mausoleo del emperador es ahora la catedral, el peristilo es una plaza donde suenan cantos klapa, y los sótanos abovedados albergan mercados y escenarios. Split es Patrimonio de la UNESCO y el corazón bullicioso de Dalmacia, con su paseo Riva mirando a las islas.",
      highlights: [
        "Palacio de Diocleciano, Patrimonio de la UNESCO",
        "Catedral de San Domnio y su campanario",
        "El Peristilo y los sótanos del palacio",
        "Paseo Riva y colina de Marjan",
      ],
      fact: "La catedral de Split es una de las más antiguas del mundo aún en uso, y ocupa el mausoleo del emperador que perseguía a los cristianos: una ironía de dieciséis siglos.",
    },
    hr: {
      name: "Split", region: "Srednja Dalmacija", founded: "Dioklecijanova palača, 4. st.",
      tagline: "Živi grad unutar rimske palače",
      knownFor: "Dioklecijanova palača, riva, vrata prema otocima",
      story:
        "Početkom 4. stoljeća car Dioklecijan — sin Dalmacije — dao je sagraditi palaču-tvrđavu za svoj mir uz more. Kad je Carstvo palo, stanovnici obližnje Salone sklonili su se među njezine zidine, pa palača nikada nije postala ruševina: pretvorila se u grad. Danas ljudi žive, večeraju i suše rublje unutar zidova starih 1700 godina.\n\nCarev mauzolej danas je katedrala, peristil je trg na kojem odzvanja klapsko pjevanje, a nadsvođeni podrumi kriju tržnice i pozornice. Split je UNESCO-va baština i užurbano srce Dalmacije, s rivom okrenutom prema otocima.",
      highlights: [
        "Dioklecijanova palača, UNESCO-va baština",
        "Katedrala svetog Duje i zvonik",
        "Peristil i podrumi palače",
        "Riva i brdo Marjan",
      ],
      fact: "Splitska katedrala jedna je od najstarijih na svijetu koje su još u upotrebi, a smještena je u mauzoleju cara koji je progonio kršćane — ironija duga šesnaest stoljeća.",
    },
    en: {
      name: "Split", region: "Central Dalmatia", founded: "Diocletian's Palace, 4th c.",
      tagline: "A living city inside a Roman palace",
      knownFor: "Diocletian's Palace, Riva promenade, gateway to the islands",
      story:
        "In the early 4th century, Emperor Diocletian — a son of Dalmatia — had a palace-fortress built for his retirement by the sea. When the empire fell, the people of nearby Salona took refuge within its walls, so the palace never became a ruin: it turned into a city. Today people live, dine and hang their laundry inside its 1,700-year-old walls.\n\nThe emperor's mausoleum is now the cathedral, the peristyle is a square where klapa singing rings out, and the vaulted cellars hold markets and stages. Split is UNESCO World Heritage and the bustling heart of Dalmatia, its Riva promenade facing the islands.",
      highlights: [
        "Diocletian's Palace, UNESCO World Heritage",
        "St. Domnius Cathedral and its bell tower",
        "The Peristyle and the palace cellars",
        "The Riva promenade and Marjan hill",
      ],
      fact: "Split's cathedral is one of the oldest still in use in the world, set inside the mausoleum of the emperor who persecuted Christians — an irony sixteen centuries deep.",
    },
  },
  {
    id: "hvar",
    x: 556, y: 618, accent: "#9b59b6",
    es: {
      name: "Hvar", region: "Islas dálmatas", founded: "Colonia griega, s. IV a.C.",
      tagline: "La isla del sol, la lavanda y las noches doradas",
      knownFor: "Campos de lavanda, plaza veneciana, vida nocturna",
      story:
        "Hvar presume de ser la isla más soleada del Adriático, con más de 2.700 horas de sol al año. Los griegos fundaron aquí Pharos en el siglo IV a.C., y su llanura de Stari Grad —parcelada por los colonos hace 2.400 años y aún cultivada— es Patrimonio de la UNESCO.\n\nLa ciudad de Hvar gira en torno a la plaza pública más grande de Dalmacia, presidida por la catedral de San Esteban y protegida por la fortaleza española en lo alto. Entre viñedos y campos de lavanda que perfuman el aire en verano, la isla combina historia veneciana con playas escondidas y una vida nocturna que atrae a viajeros de todo el mundo.",
      highlights: [
        "Fortaleza Fortica (Španjola) sobre la ciudad",
        "Plaza de San Esteban y su catedral",
        "Campos de lavanda del interior",
        "Islas Pakleni frente al puerto",
      ],
      fact: "El teatro de Hvar, inaugurado en 1612, es uno de los primeros teatros públicos comunales de Europa, abierto a nobles y plebeyos por igual.",
    },
    hr: {
      name: "Hvar", region: "Dalmatinski otoci", founded: "Grčka kolonija, 4. st. pr. Kr.",
      tagline: "Otok sunca, lavande i zlatnih noći",
      knownFor: "Polja lavande, mletački trg, noćni život",
      story:
        "Hvar se diči titulom najsunčanijeg otoka Jadrana, s više od 2700 sunčanih sati godišnje. Grci su ovdje u 4. st. pr. Kr. osnovali Faros, a njegovo Starogradsko polje — koje su kolonisti razdijelili prije 2400 godina i još se obrađuje — UNESCO-va je baština.\n\nGrad Hvar okreće se oko najvećega javnog trga u Dalmaciji, kojim dominira katedrala svetog Stjepana, a nad njim bdije španjolska tvrđava. Među vinogradima i poljima lavande koja ljeti mirišu zrakom, otok spaja mletačku povijest sa skrivenim plažama i noćnim životom koji privlači putnike iz cijeloga svijeta.",
      highlights: [
        "Tvrđava Fortica (Španjola) nad gradom",
        "Trg svetog Stjepana i katedrala",
        "Polja lavande u unutrašnjosti",
        "Paklinski otoci pred lukom",
      ],
      fact: "Hvarsko kazalište, otvoreno 1612., jedno je od prvih javnih komunalnih kazališta u Europi, dostupno i plemićima i pučanima.",
    },
    en: {
      name: "Hvar", region: "Dalmatian islands", founded: "Greek colony, 4th c. BC",
      tagline: "The island of sun, lavender and golden nights",
      knownFor: "Lavender fields, Venetian square, nightlife",
      story:
        "Hvar boasts of being the sunniest island of the Adriatic, with over 2,700 hours of sunshine a year. The Greeks founded Pharos here in the 4th century BC, and its Stari Grad Plain — parcelled out by settlers 2,400 years ago and still farmed — is UNESCO World Heritage.\n\nHvar Town revolves around the largest public square in Dalmatia, presided over by St. Stephen's Cathedral and guarded by the Spanish fortress above. Among vineyards and lavender fields that scent the summer air, the island blends Venetian history with hidden beaches and a nightlife that draws travellers from all over the world.",
      highlights: [
        "Fortica (Španjola) fortress above the town",
        "St. Stephen's Square and its cathedral",
        "The inland lavender fields",
        "The Pakleni islands off the harbour",
      ],
      fact: "Hvar's theatre, opened in 1612, is one of Europe's first communal public theatres, open to nobles and commoners alike.",
    },
  },
  {
    id: "makarska",
    x: 626, y: 588, accent: "#16a085",
    es: {
      name: "Makarska", region: "Dalmacia central", founded: "Antigua Muccurum",
      tagline: "Playas de guijarros al pie de la montaña Biokovo",
      knownFor: "Riviera de Makarska, monte Biokovo, playas",
      story:
        "Makarska se recuesta en una bahía en forma de media luna, protegida por la imponente sierra de Biokovo, cuyas cumbres grises caen casi a plomo sobre el mar. Este contraste —montaña y Adriático a un paso— define la famosa Riviera de Makarska, una sucesión de playas de guijarros blancos y pinares que se extiende decenas de kilómetros.\n\nEl casco antiguo, de raíces medievales y venecianas, se organiza en torno a la plaza y el monasterio franciscano. Arriba, el parque natural de Biokovo ofrece uno de los miradores más vertiginosos de Croacia: la pasarela Skywalk, un balcón de cristal suspendido a 1.228 metros sobre el mar.",
      highlights: [
        "Paseo marítimo y bahía en media luna",
        "Skywalk de Biokovo, mirador de cristal",
        "Playas de la Riviera de Makarska",
        "Monasterio franciscano y su museo de conchas",
      ],
      fact: "Desde el Skywalk de Biokovo, en días claros, se alcanzan a ver la costa italiana al otro lado del Adriático.",
    },
    hr: {
      name: "Makarska", region: "Srednja Dalmacija", founded: "Antička Muccurum",
      tagline: "Šljunčane plaže u podnožju planine Biokovo",
      knownFor: "Makarska rivijera, planina Biokovo, plaže",
      story:
        "Makarska počiva u zaljevu u obliku polumjeseca, zaštićena veličanstvenim Biokovom, čiji sivi vrhovi padaju gotovo okomito na more. Taj kontrast — planina i Jadran na korak — određuje slavnu Makarsku rivijeru, niz bijelih šljunčanih plaža i borika koji se proteže desecima kilometara.\n\nStara jezgra srednjovjekovnih i mletačkih korijena okuplja se oko trga i franjevačkog samostana. Iznad, park prirode Biokovo nudi jedan od najvrtoglavijih vidikovaca u Hrvatskoj: stazu Skywalk, stakleni balkon obješen 1228 metara nad morem.",
      highlights: [
        "Šetnica i polumjesečasti zaljev",
        "Biokovo Skywalk, stakleni vidikovac",
        "Plaže Makarske rivijere",
        "Franjevački samostan i muzej školjaka",
      ],
      fact: "S Biokovo Skywalka za vedrih se dana nazire talijanska obala s druge strane Jadrana.",
    },
    en: {
      name: "Makarska", region: "Central Dalmatia", founded: "Ancient Muccurum",
      tagline: "Pebble beaches at the foot of Mount Biokovo",
      knownFor: "Makarska Riviera, Mount Biokovo, beaches",
      story:
        "Makarska reclines in a crescent-shaped bay, sheltered by the imposing Biokovo range, whose grey peaks fall almost sheer to the sea. This contrast — mountain and Adriatic a step apart — defines the famous Makarska Riviera, a run of white-pebble beaches and pine woods stretching for dozens of kilometres.\n\nThe old town, of medieval and Venetian roots, gathers around the square and the Franciscan monastery. Above, the Biokovo nature park offers one of Croatia's most dizzying viewpoints: the Skywalk, a glass balcony suspended 1,228 metres over the sea.",
      highlights: [
        "The seaside promenade and crescent bay",
        "The Biokovo Skywalk, a glass viewpoint",
        "The beaches of the Makarska Riviera",
        "The Franciscan monastery and its shell museum",
      ],
      fact: "From the Biokovo Skywalk, on clear days, you can make out the Italian coast on the far side of the Adriatic.",
    },
  },
  {
    id: "dubrovnik",
    x: 828, y: 726, accent: "#c0392b",
    es: {
      name: "Dubrovnik", region: "Dalmacia meridional", founded: "Siglo VII",
      tagline: "La 'Perla del Adriático' amurallada",
      knownFor: "Murallas, casco antiguo, la antigua República de Ragusa",
      story:
        "Rodeada por casi dos kilómetros de murallas intactas que caen directamente al mar, Dubrovnik fue durante siglos una república independiente y próspera: Ragusa. Rival comercial de Venecia, su flota surcaba el Mediterráneo bajo el lema Libertas —libertad—, y su hábil diplomacia la mantuvo libre cuando los imperios la rodeaban.\n\nEl casco antiguo, Patrimonio de la UNESCO, es un museo al aire libre de mármol pulido: la calle Stradun, el palacio Rector, monasterios y fuentes barrocas. Reconstruida con paciencia tras el terremoto de 1667 y los bombardeos de 1991, la ciudad sigue en pie como símbolo de resistencia y belleza. En años recientes, sus murallas fueron escenario de King's Landing en la pantalla.",
      highlights: [
        "Paseo completo por las murallas medievales",
        "Calle Stradun y la Fuente de Onofrio",
        "Teleférico al monte Srđ",
        "Fuerte Lovrijenac, la 'Gibraltar de Dubrovnik'",
      ],
      fact: "La República de Ragusa abolió la esclavitud en 1416, siglos antes que la mayoría de Europa, y abrió uno de los primeros hospicios y farmacias del continente.",
    },
    hr: {
      name: "Dubrovnik", region: "Južna Dalmacija", founded: "7. stoljeće",
      tagline: "Zidinama okružen 'Biser Jadrana'",
      knownFor: "Zidine, stara jezgra, nekadašnja Dubrovačka Republika",
      story:
        "Okružen s gotovo dva kilometra netaknutih zidina koje padaju izravno u more, Dubrovnik je stoljećima bio neovisna i napredna republika: Ragusa. Trgovački suparnik Venecije, njegovo je brodovlje plovilo Sredozemljem pod geslom Libertas — sloboda — a vješta ga je diplomacija održala slobodnim dok su ga carstva okruživala.\n\nStara jezgra, UNESCO-va baština, muzej je na otvorenom od uglačana mramora: Stradun, Knežev dvor, samostani i barokne fontane. Strpljivo obnovljen nakon potresa 1667. i bombardiranja 1991., grad i dalje stoji kao simbol otpornosti i ljepote. Posljednjih su godina njegove zidine bile Kraljev Grudobran na ekranu.",
      highlights: [
        "Cjeloviti obilazak srednjovjekovnih zidina",
        "Stradun i Onofrijeva fontana",
        "Žičara na brdo Srđ",
        "Tvrđava Lovrijenac, 'dubrovački Gibraltar'",
      ],
      fact: "Dubrovačka Republika ukinula je ropstvo 1416., stoljećima prije većine Europe, i otvorila jedno od prvih ubožišta i ljekarni na kontinentu.",
    },
    en: {
      name: "Dubrovnik", region: "Southern Dalmatia", founded: "7th century",
      tagline: "The walled 'Pearl of the Adriatic'",
      knownFor: "City walls, old town, the former Republic of Ragusa",
      story:
        "Ringed by nearly two kilometres of intact walls that drop straight into the sea, Dubrovnik was for centuries an independent and prosperous republic: Ragusa. A commercial rival of Venice, its fleet crossed the Mediterranean under the motto Libertas — freedom — and its shrewd diplomacy kept it free while empires surrounded it.\n\nThe old town, UNESCO World Heritage, is an open-air museum of polished marble: the Stradun street, the Rector's Palace, monasteries and baroque fountains. Patiently rebuilt after the 1667 earthquake and the 1991 shelling, the city still stands as a symbol of resilience and beauty. In recent years, its walls served as King's Landing on screen.",
      highlights: [
        "The full walk along the medieval walls",
        "The Stradun street and Onofrio's Fountain",
        "Cable car up Mount Srđ",
        "Lovrijenac Fortress, the 'Gibraltar of Dubrovnik'",
      ],
      fact: "The Republic of Ragusa abolished slavery in 1416, centuries before most of Europe, and opened one of the continent's first almshouses and pharmacies.",
    },
  },
  {
    id: "osijek",
    x: 832, y: 232, accent: "#2c3e50",
    es: {
      name: "Osijek", region: "Eslavonia", founded: "Antigua Mursa romana",
      tagline: "La ciudad barroca a orillas del río Drava",
      knownFor: "Fortaleza Tvrđa, arquitectura barroca, llanura de Eslavonia",
      story:
        "En el verde y llano corazón de Eslavonia, lejos del mar, Osijek se extiende a lo largo del río Drava. Sobre la romana Mursa creció la ciudad, pero su rostro actual lo definió el barroco del siglo XVIII: la Tvrđa, una ciudadela militar austríaca perfectamente conservada, con sus cuarteles, plazas y una columna de la peste en el centro.\n\nOsijek es una ciudad de amplias avenidas, tranvías centenarios y paseos verdes junto al río. Su promenade y el largo puente peatonal hacia la orilla salvaje del Drava invitan a un ritmo pausado, muy distinto al bullicio de la costa, que revela la Croacia continental que pocos turistas conocen.",
      highlights: [
        "Tvrđa, ciudadela barroca del siglo XVIII",
        "Concatedral de San Pedro y San Pablo",
        "Paseo junto al río Drava",
        "Parque natural de Kopački Rit, cerca",
      ],
      fact: "Cerca de Osijek, el parque natural de Kopački Rit es uno de los mayores humedales de Europa, refugio de cientos de especies de aves.",
    },
    hr: {
      name: "Osijek", region: "Slavonija", founded: "Antička rimska Mursa",
      tagline: "Barokni grad na obali rijeke Drave",
      knownFor: "Tvrđa, barokna arhitektura, slavonska ravnica",
      story:
        "U zelenom i ravnom srcu Slavonije, daleko od mora, Osijek se proteže uz rijeku Dravu. Na rimskoj Mursi izrastao je grad, no današnje mu je lice dao barok 18. stoljeća: Tvrđa, savršeno očuvana austrijska vojna citadela s vojarnama, trgovima i kužnim pilom u središtu.\n\nOsijek je grad širokih avenija, stoljetnih tramvaja i zelenih šetnica uz rijeku. Njegova promenada i dugi pješački most prema divljoj obali Drave pozivaju na spori ritam, posve drukčiji od vreve obale, koji otkriva kontinentalnu Hrvatsku kakvu malo turista poznaje.",
      highlights: [
        "Tvrđa, barokna citadela iz 18. stoljeća",
        "Konkatedrala svetih Petra i Pavla",
        "Šetnica uz rijeku Dravu",
        "Park prirode Kopački rit u blizini",
      ],
      fact: "Kraj Osijeka park prirode Kopački rit jedno je od najvećih močvarnih područja Europe, utočište stotina vrsta ptica.",
    },
    en: {
      name: "Osijek", region: "Slavonia", founded: "Ancient Roman Mursa",
      tagline: "The baroque city on the banks of the Drava river",
      knownFor: "Tvrđa fortress, baroque architecture, Slavonian plain",
      story:
        "In the green, flat heart of Slavonia, far from the sea, Osijek stretches along the Drava river. The city grew on Roman Mursa, but its present face was shaped by 18th-century baroque: the Tvrđa, a perfectly preserved Austrian military citadel with its barracks, squares and a plague column at its centre.\n\nOsijek is a city of broad avenues, century-old trams and green riverside walks. Its promenade and the long footbridge to the wild bank of the Drava invite an unhurried pace, quite unlike the bustle of the coast, revealing the continental Croatia few tourists know.",
      highlights: [
        "Tvrđa, an 18th-century baroque citadel",
        "Co-cathedral of Saints Peter and Paul",
        "The promenade along the Drava river",
        "Kopački Rit nature park, nearby",
      ],
      fact: "Near Osijek, the Kopački Rit nature park is one of Europe's largest wetlands, a refuge for hundreds of bird species.",
    },
  },
];

// expose globally
window.UI = UI;
window.DESTINATIONS = DESTINATIONS;
