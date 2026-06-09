import React, { useState } from 'react';
import { BOOKS_CATALOG, Book } from '../data/archiveData.js';
import { 
  BookOpen, Search, ShieldAlert, ShoppingBag, HelpCircle, 
  ZoomIn, ZoomOut, ChevronLeft, ChevronRight, X, Sparkles, 
  BookMarked, HelpCircle as HelpIcon, Lock, Landmark, Award
} from 'lucide-react';

interface BookPage {
  pageNumber: number;
  chapterTitle?: string;
  content: string;
}

export default function BibliotecaDigitale() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedType] = useState<string>('all');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [readerOpen, setReaderOpen] = useState(false);
  const [readerPage, setReaderPage] = useState(1);
  const [readerTheme, setReaderTheme] = useState<'sepia' | 'white' | 'dark'>('sepia');
  const [readerZoom, setReaderPageZoom] = useState(100);

  // User schema titles
  const titleOptions = [
    { key: 'opzione1', label: 'Sezione D • Biblioteca Digitale Fondazione (SBN) - Sezione pubblicazioni volumi Dott. Luca Falace', desc: 'Nome accademico, unisce il codice ministeriale all’eredità culturale' },
    { key: 'opzione2', label: 'Biblioteca d’Ingegno & Alchimia dell’Anima', desc: 'Rievoca il dualismo tra creatività ermetica e calcolo scientifico' },
    { key: 'opzione3', label: 'Archivio Biblioteca • Le Monografie di Luca Falace', desc: 'Taglio documentale, perfetto per un portale di catalogazione nazionale' },
    { key: 'opzione4', label: 'Biblioteca d’Autore della Fondazione Falace', desc: 'Istituzionale ed elegante, richiama l’anteriorità delle opere' }
  ];
  
  const [activeTitleKey, setActiveTitleKey] = useState('opzione1');
  const selectedTitleObj = titleOptions.find(opt => opt.key === activeTitleKey) || titleOptions[0];

  // Specific content pages for L'Opera Celeste based on OCR screenshots
  const operaCelestePages: BookPage[] = [
    {
      pageNumber: 1,
      content: `[COPERTINA DELL'OPERA CELESTE]
      
LUCA FALACE

L'OPERA CELESTE

ROMANZO ALCHEMICO FILOSOFICO

(ORO)
EDIZIONI`
    },
    {
      pageNumber: 2,
      content: `Luca Falace L’Opera Celeste 
1

Proprietà letteraria e diritti d'autore riservati negli archivi istituzionali Fondazione Falace.`
    },
    {
      pageNumber: 3,
      content: `Luca Falace L’Opera Celeste 
2

«L’unico Verso per l’Universo è Verso l’Unione perché l’Universo è in noi»`
    },
    {
      pageNumber: 4,
      chapterTitle: "FRONTESPIZIO",
      content: `Luca Falace 
L’OPERA CELESTE 

ROMANZO 
Alchemico Filosofico 

(OB ENTIUM UNIO)
ORO 
EDIZIONI`
    },
    {
      pageNumber: 5,
      chapterTitle: "SCHEDA EDITORIALE DI PRIMA EDIZIONE",
      content: `L’OPERA CELESTE 
Romanzo Alchemico Filosofico 

Autore: Luca Falace 
Sito internet: www.loperaceleste.com 

Editore: O.R.O. Edizioni 
L’Opera Celeste 
Centro Culturale Arte & Scienza 
Il Mio Libro 
Gruppo Editoriale L’Espresso 

Prima edizione: Luglio 2005 
Proprietà Letteraria ed Editoriale riservata all’autore dell’opera 

L’Opera Celeste ISBN: 88-901926-0-7
Seconda Ristampa: 2010 

L’Autore-Editore concede al Gruppo Editoriale L’Espresso il diritto di introdurre e pubblicare su sito Internet www.ilmiolibro.it la presente opera, in versione integrale, garantendo allo stesso tempo la proprietà intellettuale all’autore. 

L’Autore titolare dei diritti Editoriali può essere contattato, da parte di un editore, per una nuova pubblicazione e ristampa della presente opera.`
    },
    {
      pageNumber: 6,
      chapterTitle: "NOTIZIE SUL REGISTRO",
      content: `L’OPERA CELESTE 
Prima edizione Luglio 2005 © 
Proprietà Letteraria ed Editoriale riservata all’autore dell'opera 
ISBN 88-901926-0-7 

2010 © Seconda Ristampa 
Luca Falace, Presidente e Fondatore del Centro Culturale L’Opera Celeste 
Autore-Editore di questo volume, il Romanzo L’Opera Celeste, in collaborazione con il Gruppo Editoriale L’Espresso

Testo, schemi, disegni e opere d’arte di Luca Falace 
Depositati presso il Ministero dei Beni Culturali, l’Istituto Nazionale della Grafica, la SIAE, l’Olaf, e la Dds Discoteca di Stato 

PROPRIETÀ LETTERARIA RISERVATA`
    },
    {
      pageNumber: 7,
      chapterTitle: "PREFAZIONE - PARTE I",
      content: `PREFAZIONE

L’Opera Celeste è un racconto che affascina il lettore attraverso la sua neutralità ideologica. Dietro le sembianze di questa narrazione fantasiosa, si cela una storia realmente avvenuta. Questa storia, per quanto possa sembrare inverosimile, è stata tratta da eventi reali. Fatti e personaggi contenuti in questa narrazione sono il frutto dell’elaborazione, di esperienze vissute dall’autore.

La realtà a volte supera l’immaginazione, risultando inverosimile e fantastica. La fantasia quando è accompagnata dalla cultura rende la realtà ancora più interessante. Il messaggio che l’Opera Celeste celebra, è prima di tutto un messaggio d’Amore Universale. Un messaggio che l’Essere Umano, nel nuovo millennio, è finalmente pronto ad accogliere.

L’Opera Celeste è un’opera letteraria, un’opera figurativa, un’opera scultorea, un’opera musicale, un’invenzione, un film, una rivelazione. L’Opera Celeste è l’espressione del bene e dell’intelligenza dell’uomo evoluto. Essa si manifesta concretamente attraverso l’arte e la scienza.`
    },
    {
      pageNumber: 8,
      chapterTitle: "PREFAZIONE - PARTE II",
      content: `L’Uomo Celeste è colui che riesce a unire sapientemente gli opposti: la creatività con la ragione, l’amore con l’intelligenza, il cuore con l’intelletto.

Il mito ed il simbolo, lo spazio ed il tempo, l’essere e l’avere, l’arte e la scienza nel Romanzo, “L’Opera Celeste” sono la chiave di lettura per una visione più profonda dei contenuti. Il mito in questo caso si fonde con il simbolo, così come l’essere con l’avere, lo spazio con il tempo e l’arte con la scienza, in altre parole il tema di fondo è rappresentato dall’unione degli opposti. Questa complementarietà è il segno che rimanda ad un significato ultimo che l’essere umano, nel nuovo millennio, deve ancora riconoscere.

I due personaggi principali del racconto rappresentano i fondamentali archetipi della natura umana. Le due menti complementari. L’artista, filosofo, storico dell’arte, pare essere una fusione tra Mago Merlino e Siddharta. Il giovane razionale apprendista antropologo invece, come in molti miti, rievoca l’archetipo del personaggio umile...`
    },
    {
      pageNumber: 9,
      chapterTitle: "PREFAZIONE - PARTE III",
      content: `Sul modello del mito arturiano, qui il Graal rappresenta esplicitamente, secondo un’interpretazione personale, il suo vero significato archetipo: l’anima gemella.

Il giovane artista spagnolo, il filosofo Lucas, prima di arrivare all’acquisizione della conoscenza finisce per distaccarsi dal resto del gruppo e vive una serie di esperienze di carattere mistico-introspettivo. Il giovane antropologo invece, sotto la guida di Lucas, sapiente conoscitore delle arti, inizia l’addestramento per trovare l’anima gemella. Lucas riesce, attraverso la testimonianza delle sue rivelazioni oniriche e attraverso la simbologia alchemica dei personaggi raffigurati nel suo dipinto, a far cambiare la visione delle cose all’antropologo francese Laface.

Questi non può che accettare l’evidenza delle veggenze del suo amico e comprovare i significati archetipi, connessi alle maggiori filosofie, contenuti all’interno della Grande Opera pittorica creata da Lucas.

I sogni rivelatori dell’artista sono continui e veritieri, così come i significati pittorici dell’Opera Celeste di Lucas. Egli rivela di possedere la capacità di vedere frammenti di un futuro remoto. Questo avvenire, ad ogni modo, non è del tutto prevedibile. Egli insegna che bisogna seguire il ritmo e l’energia della natura, senza forzare gli eventi e senza praticare alcun tipo di divinazione artificiale. I suoi messaggi medianici, onirici ed artistici, sono spontanei e naturali. Pacifici consigli Celesti rivolti all’intera umanità.

Dall’unione delle due coppe nasce la Sfera, la quale simbolicamente, secondo Platone, rappresenta la Conoscenza Celeste. Questa è stata da sempre, a mio parere, la ricerca del misterioso Graal. Questa è la rivelazione dei protagonisti.`
    },
    {
      pageNumber: 10,
      chapterTitle: "PRESENTAZIONE - PARTE I",
      content: `PRESENTAZIONE

Questo è il racconto di una storia realmente avvenuta. Anni fa stavo facendo una ricerca per la mia tesi in storia dell’arte. I miei interessi alternativi erano incentrati sul significato originario dell’opera d’arte. Non avevo in mente nulla di preciso, fin quando un giorno vidi un dipinto straordinario: l’Opera di un giovane contemporaneo. Il dipinto intitolato “Verso l’Unione” evoca attraverso le sue arcane immagini, archetipi e simboli antichi.

Capii che il mio intento era quello di riportare alla luce il significato originario dell’arte, vale a dire quello simbolico e antropologico. Dopo essermi laureato in Storia dell’arte con una tesi sul significato antropologico dell’arte legata al culto divinatorio, potevo dedicarmi alla ricerca metaforica e mitica dell’Opera di Lucas.

In quest’Opera vi sono raffigurati i concetti fondamentali mitico-simbolici, che confermano il legame artistico con quello mitico-divinatorio. Decisi di collaborare con lui nella ricerca e nell’interpretazione dei significati della sua Opera Celeste.`
    },
    {
      pageNumber: 11,
      chapterTitle: "PRESENTAZIONE - PARTE II",
      content: `Questo giovane filosofo, nella sua prima fase evolutiva spirituale ha giocato con l’arte attraverso le varie espressioni e forme. Lucas oltre ad avere tutte le caratteristiche di un’artista geniale, è prima di tutto un filosofo premonitore, un ricercatore della conoscenza, un messaggero, un rivelatore.

Si è servito dell’arte per manifestare i suoi messaggi. Il significato dell’immagine da sempre è compreso intuitivamente da tutti. L’analisi del contenuto, invece, richiede un procedimento intellettivo più elaborato.

In particolare il significato delle sue opere non può essere analizzato con la tradizionale metodologia della critica d’arte, che esamina principalmente lo studio del fattore storico ed estetico di un'opera. Non può essere analizzata nemmeno con la recente e troppo razionale analisi psicologica.

Nella sua Opera, Lucas è riuscito a rievocare istintivamente miti e simboli atavici. L’interpretazione del dipinto può essere messa in chiaro, solo con una ricerca antropologica e filosofica.`
    },
    {
      pageNumber: 12,
      chapterTitle: "PRESENTAZIONE - PARTE III",
      content: `Quando incominciai a studiare il significato dell'Opera, avevo già gli strumenti per interpretare le rivelazioni contenute all’interno di essa. Etnologia, Antropologia e Storia delle tradizioni popolari furono gli esami universitari che mi diedero le basi per la mia analisi artistica ed etnografica.

Gli studi vertevano sulla ricerca di una simbologia universale. Questa è comune ancora oggi, in molte tradizioni popolari. Con il trascorrere del tempo non avrei mai pensato di apprendere, attraverso la conoscenza di Lucas, delle rivelazioni che avrebbero cambiato il mio modo di percepire la realtà.

Per entrare all'interno dell'Opera ho dovuto capire e quindi descrivere, il percorso evolutivo dell’artefice. Lucas ha usato l’arte inizialmente come una forma di meditazione per trovare un equilibrio interiore. In seguito si è distaccato da essa, poiché si sono manifestati dei segni e dei simboli misteriosi. Attraverso la pittura-scrittura, si sono manifestati dei caratteri comuni a molte civiltà arcaiche, in particolare l’antica civiltà orientale indù.`
    },
    {
      pageNumber: 13,
      chapterTitle: "PRESENTAZIONE - PARTE IV",
      content: `Il dipinto Verso l’Unione invece, simboleggia la fase dell’inizio della consapevolezza che scaturisce nella coscienza di Lucas. La sua mente unita alla sua anima, è in grado nel tempo, di prevedere grandi rivelazioni. These si manifestano attraverso una serie di esperienze filosofiche, artistiche e sentimentali.

Lucas intraprende il cammino verso la scoperta di un nuovo mondo, che si cela dietro la vita di ogni giorno. Semplici parole, frasi o gesti, simboleggiano antichi rituali ancestrali. Archetipi che ritornano in tutte le epoche. Questi sono i messaggi Celesti, che si manifestano tramite le persone comuni.

L’esistenza, l’unione, l’amore, l’armonia, la rivelazione e la conoscenza sono i temi fondamentali dell’Opera di Lucas. Tali nobili valori sono le chiavi di accesso verso un mondo pieno di luce, che rappresenta il mistero della creazione.

Quelli che intraprendono la strada della conoscenza, dell’amore e della semplicità, non vi capitano per caso, essi si trovano in uno stato evolutivo, diciamo “fortunato”.`
    },
    {
      pageNumber: 14,
      chapterTitle: "PARTE I - LA DIMENSIONE INTERNA",
      content: `PARTE I 
LA DIMENSIONE INTERNA 
TERRA – EMANAZIONE – CORPO 

CAPITOLO I 
L’ESSERE 

PRIMA RIVELAZIONE 
LA CONSAPEVOLEZZA 

«Chi s’innamora del mistero della creazione, percorre il livello più alto della conoscenza umana. La ricerca di chi aspira a tanto, produce un lavoro senza rimpianto. L’essere evoluto, con devozione ed amore, cerca di saggiare il motivo della sua esistenza e quella dell’intero Universo.»`
    },
    {
      pageNumber: 15,
      chapterTitle: "I - LA RICERCA DELL'ANIMA GEMELLA",
      content: `I 
LA RICERCA DELL’ANIMA GEMELLA 

Nell’Agosto del 1989, sono partito da Santander, situata all’estremo Nord della Spagna, per continuare la vacanza a Tenerife nelle Isole Canarie. Di solito trascorro l’estate in giro per la Costa Azzurra in Francia, siccome la mia residenza si trova a Juan les Pines. Dopo lunghi anni di studio decisi di regalarmi una vacanza in giro per le grandi isole. 

Mi ritrovai sull’isola di Tenerife a Santa Cruz, l’otto Agosto alle ore dodici. Anche se il viaggio era stato lungo, non ero stanco, e poiché era ancora presto per pranzare, sistemai i bagagli in albergo, feci una rapida doccia ed incominciai a visitare la località di Santa Cruz. Il giorno seguente noleggiai una jeep per visitare l’Isola. Arrivai precisamente a Playa de las Américas, dove c’era molto turismo giovanile. Decisi così, di fermarmi per un paio di giorni in quest’allegra località. 

Trovata una sistemazione provvisoria in un albergo, mi recai subito sulla famosa spiaggia di Playa de les Américas, la cui sabbia bianca proveniva dal deserto del Sahara.

Dopo aver preso un po’ di sole ed aver fatto un bagno nell’Oceano Atlantico, decisi di recarmi verso i ristorantini collocati in fila indiana lungo la playa. Mentre stavo passeggiando nella zona benestante dell’isola, intravidi da lontano all’interno di un magnifico appartamento, che affacciava sul mare, un dipinto di notevoli dimensioni. Era un’opera d’arte figurativa che trasmetteva un magnetismo insolito.`
    },
    {
      pageNumber: 16,
      chapterTitle: "IL DIPINTO E L'INCONTRO",
      content: `La balconata dell’abitazione, assai ampia, permetteva di osservare il meraviglioso salone. Il dipinto, situato su un gran cavalletto all’interno del salotto, era visibile dal porticciolo. Le figure e i colori dell’Opera, erano a dir poco geniali, trasmettevano un fascino e un’energia vitale e misteriosa. Grazie ai molti anni di studio, che avevo dedicato alla Storia dell’arte, capii che si trattava di un artista geniale.

Ciò che percepivo era come se, Michelangelo Buonarroti, Leonardo da Vinci, Peter Paul Rubens, Salvador Dalì e Giorgio De Chirico, fossero tutti presenti in quell’Opera. Dovevo capire. Era evidente che l’autore fosse contemporaneo. Il surrealismo alla Dalì e il mistero leonardesco, erano gli elementi percepiti in un primo momento. Al suo interno vi erano dei messaggi e dei simboli da decifrare.

Di fronte a questa grande abitazione, nel piccolo porticciolo, vi è un Caffè molto carino ed elegante: El Barquero frequentato prevalentemente da persone benestanti che possiedono le grandi imbarcazioni ormeggiate nella zona circostante. Decisi di sostare lì, per osservare meglio l’Opera. Pensai di conoscere il proprietario del dipinto. Potevo così, risalire all’autore di quell’originale e arcana opera d’arte.`
    },
    {
      pageNumber: 17,
      chapterTitle: "LIMITE DI CONSULTAZIONE RAGGIUNTO",
      content: `[REGISTRO BIBLIOTECARIO SBN • SEZIONE D • DIGIT-READ PROTOCOL]

La consultazione parziale autorizzata (Anteprima Editoriale) per il volume:
«L'Opera Celeste – Romanzo Alchemico Filosofico (2005)»
è terminata a pagina 16 in ottemperanza ai diritti di tutela d'autore SBN.

Il presente saggio-romanzo è distribuito e in vendita regolare sui canali editoriali.
Per visualizzare l'opera completa con i 41 schemi originali, le 12 Rivelazioni, e l'esposizione clinica sul Sincronismo, si prega di acquistare il testo sui canali ufficiali.

Acquistando i libri sostieni la Fondazione Falace nella catalogazione e digitalizzazione SBN del patrimonio storico-scientifico ed elettronico.`
    }
  ];

  const archetipiSimboliPages: BookPage[] = [
    {
      pageNumber: 1,
      content: `[COPERTINA]

LUCA FALACE

ARCHETIPI, SIMBOLI E SINCRONICITÀ

MANIFESTARE CON IL SINCRONISMO CREATIVO

L'EVOLUZIONE DELL'ANIMA ATTRAVERSO ARCHETIPI, SIMBOLI E SINCRONICITÀ

"Come sviluppare la consapevolezza attraverso gli eventi paralleli e realizzare i propri sogni."`
    },
    {
      pageNumber: 2,
      content: `Luca Falace
ARCHETIPI, SIMBOLI E SINCRONICITÀ
MANIFESTRARE CON IL SINCRONISMO CREATIVO

L'EVOLUZIONE DELL'ANIMA ATTRAVERSO ARCHETIPI, SIMBOLI E SINCRONICI
INTERAZIONE CON IL MONDO FENOMENICO DEGLI EVENTI PARALLELI

Autore: Luca Falace - AIC Centro Culturale Arte & Scienza

PROPRIETÀ LETTERARIA RISERVATA
Nessuna parte di questa pubblicazione può essere riportata o trasmessa, in alcuna forma o con alcun mezzo, compresa la registrazione o le fotocopie.

© 2005-2024 SINCRONISMO CREATIVO: ARCHETIPI, SIMBOLI, SINCRONICITÀ
STUDIO DEI SINCRONISMI CREATIVI

Luca Falace - Tutti i diritti riservati. Deposito Opere Inedite della SIAE, presso la Sezione Opere Letterarie OLAFe presso il Ministero per i Beni Culturali`
    },
    {
      pageNumber: 3,
      chapterTitle: "PREFAZIONE - PARTE I",
      content: `PREFAZIONE

Nel percorso verso la comprensione di sé e del mondo che ci circonda, l'umanità ha scoperto e sviluppato concetti fondamentali che hanno plasmato il nostro percorso evolutivo. Tra questi, gli archetipi, i simboli e le sincronicità emergono come pilastri essenziali nell'approfondimento della nostra esperienza umana e nell'evoluzione dell'anima.

Gli archetipi
Introdotto da Carl Gustav Jung, il concetto di archetipo rappresenta modelli primordiali insiti nell'inconscio collettivo umano. Questi modelli universali, come l'eroe, la madre, il vecchio saggio, sono presenti in tutte le culture e influenzano profondamente i nostri pensieri, sentimenti e comportamenti. Attraverso gli archetipi, possiamo esplorare le profondità della psiche umana e coprire i motivi e le forze che guidano le nostre azioni e le nostre relazioni.`
    },
    {
      pageNumber: 4,
      chapterTitle: "PREFAZIONE - I SIMBOLI",
      content: `I Simboli
Derivati dal greco arcaico σύμβολον, i simboli agiscono come veicoli di trasmissione della conoscenza e della comprensione al di là del linguaggio razionale. Questi simboli possono essere immagini, gesti, suoni o oggetti che rappresentano concetti o idee più grandi e complesse.

Attraverso il linguaggio simbolico, possiamo esplorare la dimensiona trascendentale della realtà e connetterci con il divino e il misterioso. I simboli ci aiutano a superare i confini del linguaggio e delle parole, consentendoci di cogliere gli aspetti più profondi della nostra esistenza e di esprimere concetti altrimenti ineffabili.

I simboli possono essere interpretati in modi diversi da persone diverse e in contesti diversi, aggiungendo ulteriori strati di significato e complessità alla loro natura.`
    },
    {
      pageNumber: 5,
      chapterTitle: "PREFAZIONE - LE SINCRONICITÀ",
      content: `Le Sincronicità
Introdotte da Jung, le sincronicità sono gli eventi significativi che si verificano in modo apparentemente casuale, ma che sono intrinsecamente legati al nostro mondo interiore e al nostro cammino di crescita personale. Questi momenti di connessione e coincidenza sono interpretati come segnali dall'universo o dall'anima stessa, che ci guidano lungo il percorso della nostra vita e ci aiutano a comprendere il significato più profondo degli eventi e delle esperienze che incontriamo.

Conosci te stesso 
(Gnôthi Seautón - Nosce te Ipsum)

Uomo Conosci te stesso, e conoscerai l’Universo e gli Dèi
(Iscrizione sul Tempio dell’Oracolo di Delfi)`
    },
    {
      pageNumber: 6,
      chapterTitle: "INDICE DEI CAPITOLI",
      content: `INDICE DEI CAPITOLI

INTRODUZIONE

PARTE I – ARCHETIPI
COINCIDENZE NELLA NATURA DEGLI ESSERI UMANI
- Capitolo 1. Come riconoscere gli Eventi Paralleli
- Capitolo 2. Come risolvere il problema delle coincidenze collettive
- Capitolo 3. Consapevolezza del fenomeno delle Coincidenze

PARTE II – SIMBOLI
INTRODUZIONE ALLO STUDIO DEI SINCRONISMI CREATIVI
- Capitolo 4. Il Sincronismo Creativo e gli Eventi Paralleli
- Capitolo 5. Come sviluppare la consapevolezza del fenomeno delle Coincidenze
- Capitolo 6. Come interagire con gli Eventi Paralleli

PARTE III – SINCRONICITÀ
TEORIA DELLA RELATIVITÀ E COINCIDENZE RELATIVE
- Capitolo 7. Contemporaneità degli Eventi Paralleli
- Capitolo 8. Introduzione allo studio dei Sincronismi Creativi
- Capitolo 9. Evoluzione degli Eventi Paralleli e Vibrazioni Emozionali

PARTE IV – IL SEGRETO DELLA MANIFESTAZIONE
- Capitolo 10. Interazione con gli Eventi Paralleli
- Capitolo 11. Come Manifestare L'Abbondanza
- Capitolo 12. Manifestare con il Sincronismo Creativo`
    },
    {
      pageNumber: 7,
      chapterTitle: "INTRODUZIONE - PARTE I",
      content: `INTRODUZIONE

I risultati che otterrai dalla lettura di questo volume saranno impressionanti già dopo i primi dieci giorni. Quando avrai seguito tutte le istruzioni dei dieci capitoli di questo manuale, la tua esistenza cambierà radicalmente. Ti troverai su un livello superiore alla media. Questo non vuol dire che sarai migliore degli altri, ma semplicemente perché hai seguito tutte le istruzioni e ti sei impegnato nello studio. La tua coscienza sarà risvegliata dalle considerazioni contenute in questo manuale.

Ti stai chiedendo forse perché ti parlo in modo così diretto? Allora sappi che questo è il modo migliore per metterti in contatto con il tuo inconscio, la tua coscienza, con il tuo Sé superiore. Non spostare la tua attenzione sulla realtà materiale delle cose, non pensare che sia l'autore di questo libro che ti scrive, ma pensa che quello che stai leggendo è il risultato di lunghi anni di studio.`
    },
    {
      pageNumber: 8,
      chapterTitle: "INTRODUZIONE - PARTE II",
      content: `Le mie inedite e originali intuizioni inerenti alla fenomenologia delle coincidenze sono scaturite dall’analisi degli eventi paralleli. Tale studio, durato oltre un decennio, si basa sul ragionamento e la constatazione razionale concernente la fenomenologia delle coincidenze. In questo manuale “Tu Sei”, sono riuscito a sintetizzare le mie ricerche sul fenomeno delle coincidenze.

Dopo aver studiato la Teoria della Sincronicità di Jung, intuii che il tuo modo d’Essere, gli eventi felici, la fortuna e le coincidenze, dipendono, in parte, da tre fattori principali:
1. l’effetto dell’energia di un individuo,
2. l’influenza dell’energia collettiva,
3. i mutamenti dovuti a questioni inspiegabili.`
    },
    {
      pageNumber: 17,
      chapterTitle: "LIMITE DI CONSULTAZIONE RAGGIUNTO",
      content: `[REGISTRO BIBLIOTECARIO SBN • SEZIONE D • DIGIT-READ PROTOCOL]

La consultazione parziale autorizzata (Anteprima Editoriale) per il saggio:
«ARCHETIPI, SIMBOLI E SINCRONICITÀ (2005)»
è terminata a pagina 16 in ottemperanza ai diritti di tutela d'autore SBN.

Il presente saggio-manuale è distribuito e in vendita regolare sui canali editoriali.
Per visualizzare l'opera completa con i 12 capitoli originali o l'indagine empirica sui Sincronismi, si prega di acquistare il testo sui canali ufficiali.

Acquistando i libri sostieni la Fondazione Falace nella catalogazione e digitalizzazione SBN del patrimonio storico-scientifico ed elettronico.`
    }
  ];

  const archetipiVol3Pages: BookPage[] = [
    {
      pageNumber: 1,
      content: `[COPERTINA]

LUCA FALACE

ARCHETIPI SIMBOLI SINCRONICITÀ

MANIFESTARE CON IL SINCRONISMO CREATIVO

L'EVOLUZIONE DELL'ANIMA ATTRAVERSO ARCHETIPI, SIMBOLI E SINCRONICITÀ

"Come sviluppare la consapevolezza attraverso gli eventi paralleli e realizzare i propri sogni."

LAPIS PHILOSOPHORUM
VOLUME III

Centro Culturale Arte & Scienza 2005`
    },
    {
      pageNumber: 2,
      content: `LUCA FALACE
ARCHETIPI, SIMBOLI, SINCRONICITÀ VOL. III

ARCHETIPI, SIMBOLI, SINCRONICITÀ VOL. 3

ALCHIMIA SPIRITUALE,
ARCHETIPI UMANISTICI
SINCRONICITÀ EVOLUTIVA

Lapis Philosophorum`
    },
    {
      pageNumber: 3,
      chapterTitle: "L'ARTE ALCHEMICA E LA PIETRA FILOSOFALE",
      content: `L'ARTE ALCHEMICA E LA PIETRA FILOSOFALE

In questo terzo volume concludiamo il nostro percorso di studio sulle sincronicità, esplorando come esse influenzino le manifestazioni e i sincronismi creativi. Questo libro è stato pensato per permetterti di mettere a frutto le conoscenze acquisite nei primi due volumi e applicarle in modo pratico e consapevole.

In queste pagine troverai una serie di scoperte, rivelazioni e intuizioni inedite, frutto delle mie personali ricerche e delle mie esperienze dirette. Questi risultati derivano da anni di osservazione attenta delle sincronicità, personali e collettive, inclusi i sincronismi geopolitici; dallo studio di centinaia di temi natali, dalle pratiche di Kundalini Yoga secondo il misticismo tibetano, e da un approfondito esame antropologico delle pratiche di ogni cultura.`
    },
    {
      pageNumber: 4,
      chapterTitle: "ALCHIMIA SPIRITUALE E UNIONE DEGLI OPPOSTI",
      content: `Alchimia spirituale e l’unione degli opposti:

L'alchimia spirituale è descritta come un processo di unione degli opposti all'interno della mente umana. Essa rappresenta l’equilibrio tra il pensiero materiale e quello spirituale, così come tra l'Oriente conservatore e l'Occidente consumistico. Quando queste forze si integrano, portano serenità a livello globale. In questo contesto, l'alchimia non è solo trasformazione della materia, ma anche della coscienza, indirizzando l'evoluzione spirituale.

Kundalini e la meditazione:

Il documento evidenzia il concetto della Kundalini, descrivendola come un’energia latente simboleggiata da un serpente arrotolato. Il risveglio della Kundalini avviene attraverso pratiche come la meditazione e il Kundalini yoga. Questo processo implica l’attivazione dei chakra principali, ciascuno associato a suoni sacri (mantra) e alla consapevolezza spirituale.`
    },
    {
      pageNumber: 5,
      chapterTitle: "CHAKRA E SEFIROTH NELLA CABALA",
      content: `Chakra e Sefiroth nella cabala:

L’opera fa una connessione tra i sette chakra dello yoga e le dieci Sefiroth della Cabala, sottolineando come entrambe le tradizioni rappresentino un cammino di elevazione spirituale. I chakra, posti lungo il canale Susumna, permettono l'accesso alle energie sottili e sono correlati alle Sefiroth, che rappresentano aspetti della creazione e dell'esistenza. Questo parallelismo dimostra come filosofie diverse convergano verso un’unica visione dell’evoluzione dell’anima.

Il matrimonio mistico e la Pietra Filosofale:

Nel percorso alchemico occidentale, il "matrimonio mistico" è una tappa cruciale. Rappresentato simbolicamente dall'unione tra il principio solare (maschile) e quello lunare (femminile), questo processo culmina nella creazione della Pietra Filosofale, simbolo della perfezione e dell’immortalità spirituale.`
    },
    {
      pageNumber: 6,
      chapterTitle: "L'UNIONE DEGLI OPPOSTI",
      content: `L’Arte Alchemica: L’Unione degli Opposti e la Trasformazione Interiore

Nel percorso alchemico e spirituale, la Kundalini rappresenta l’energia vitale e divina dormiente alla base della spina dorsale. Questa forza è raffigurata como un serpente avvolto su se stesso, pronto a risvegliarsi e ascendere attraverso i chakra, i centri energetici del corpo. L’obiettivo del risveglio della Kundalini è l’ascesa attraverso questi centri fino a raggiungere il settimo chakra, Sahasrara, dove si realizza l’unione con l’energia cosmica, portando a uno stato di illuminazione.

La Kabbalah, con le sue Sephiroth, fornisce una mappa di questo viaggio interiore. Le Sephiroth, sfere di energia divina sull’Albero della Vita, rappresentano le tappe di un percorso che porta l’anima dalla manifestazione materiale alla riunificazione con il divino.`
    },
    {
      pageNumber: 7,
      chapterTitle: "LA KUNDALINI E L'ASCENSIONE",
      content: `La Kundalini e l’Ascensione Attraverso i Chakra: Un Percorso Verso la Divinità

Le ricerche e le intuizioni contenute in questo volume rivelano una connessione profonda tra l’attivazione della Kundalini e l’ascesa attraverso i chakra come chiave per comprendere i segreti dell’alchimia spirituale. Quando la Kundalini si risveglia e comincia la sua ascesa, ogni chakra che attraversa rappresenta una sfida e una tappa nella trasformazione interiore. Questa energia, che inizialmente è latente, quando attivata, può generare un incremento di sincronicità nella vita dell’individuo.

In questo volume vedremo inoltre come l’apertura di ogni chakra corrisponda a un’espansione della coscienza. Il passaggio attraverso il chakra del cuore (Anahata) è particolarmente cruciale, poiché rappresenta il punto di equilibrio tra le energie inferiori e quelle superiori.`
    },
    {
      pageNumber: 17,
      chapterTitle: "LIMITE DI CONSULTAZIONE RAGGIUNTO",
      content: `[REGISTRO BIBLIOTECARIO SBN • SEZIONE D • DIGIT-READ PROTOCOL]

La consultazione parziale autorizzata (Anteprima Editoriale) per il volume:
«Archetipi, Simboli, Sincronicità Vol. III (Lapis Philosophorum) (2005)»
è terminata a pagina 16 in ottemperanza ai diritti di tutela d'autore SBN.

Il saggio di riferimento è distribuito e in vendita regolare sui canali editori.
Per visualizzare l'opera completa con i 12 capitoli originali o l'indagine empirica sui Sincronismi, si prega di acquistare il testo sui canali ufficiali.

Acquistando i libri sostieni la Fondazione Falace nella catalogazione e digitalizzazione SBN del patrimonio storico-scientifico ed elettronico.`
    }
  ];

  const mythosSpazioPages: BookPage[] = [
    {
      pageNumber: 1,
      content: `[COPERTINA]

LUCA FALACE

MITO, SPAZIO TEMPO
La Conoscenza Evolutiva

VOLUME II

LF
Centro Culturale Arte & Scienza`
    },
    {
      pageNumber: 2,
      content: `Luca Falace

MYTHOS, SPAZIO E TEMPO

La Conoscenza Evolutiva`
    },
    {
      pageNumber: 3,
      content: `MYTHOS, SPAZIO E TEMPO
La Conoscenza Evolutiva
Sincronia Simbolica e Mitologie Significative

COINCIDENZE NELL'ARTE, NEI MITI E NELLE LEGGENDE CONTEMPORANEE

Mitologia Sincronica dalla Creazione di Adamo alle Leggende Contemporanee: Evoluzione dell'Uomo sulla Terra, Magna Mater, Etnie Aliene, Ere Geologiche, Datazione delle Ere secondo la Mitologia e la Scienza attuale, Atlantide, Mu, Lemuria, Agharti, Vimana, Vimans, Miti Antichi, Miti Contemporanei.

Studio e Ricerche, dott. Luca Falace`
    },
    {
      pageNumber: 4,
      content: `Study and Research by dott. Luca Falace
© 2018 Luca Falace all rights reserved

MYTHOS, SPAZIO E TEMPO
La Conoscenza Evolutiva
Sincronia Simbolica e Mitologie Scentifiche

COINCIDENZE NELL'ARTE, NEI MITI E NELLE LEGGENDE CONTEMPORANEE

Depositato nell'anno 2005 presso la SIAE sezione l'O.l.a.f. © 2005-2018
Luca Falace tutti i diritti riservati`
    },
    {
      pageNumber: 5,
      chapterTitle: "INDICE DEI CAPITOLI",
      content: `INDICE DEI CAPITOLI

Parte I - pag. 05
CONOSCENZA STORICA

Parte II - pag. 11
MITI ANTICHI E CONTEMPORANEI

Parte III - pag. 36
CRONOLOGIA DELLA CONOSCENZA EVOLUTIVA`
    },
    {
      pageNumber: 6,
      chapterTitle: "PREFAZIONE - PARTE I",
      content: `PREFAZIONE

Questo volume, come tutti i libri di cultura, è senza finalità didattiche, tecniche o d’espressione letteraria. L’unico scopo è di pubblicare, in modo sintetico, i propri studi e le legittime considerazioni, inerenti in questo caso, la fenomenologia degli Eventi Paralleli.

La pubblicazione di un manuale, o di un saggio, funge da strumento nel quale è attestata, e riconosciuta, la paternità dello studio, del lavoro e della scoperta, di concetti, idee e pensieri innovativi. L’originalità sta nell'attingere dalla natura, e dall’uomo stesso, i valori più alti, e rielaborarli con intelligenza e purezza d’animo, rendendo note le fonti, e rispettando l’evoluzione dei precedenti studiosi.`
    },
    {
      pageNumber: 7,
      chapterTitle: "PREFAZIONE - PARTE II",
      content: `Le persone che rendono tali valori, contemporanei alla propria epoca, in un evoluto eterno ritorno, sono considerati evoluti. Tutti quelli che operano in tale intento hanno reso presente, e continuo, il più alto mutamento dell’eternità. Sono considerati, a mio parere, degli Esseri Evoluti.

Questi devono essere ricordati dal prossimo, per la paternità delle loro opere, e delle rinnovate scoperte, perché queste portano all’evoluzione del pensiero, e dei mezzi nell’intera collettività. Per tali motivi a loro, va il più profondo e continuo rispetto, per aver aiutato l’umanità nel suo cammino evolutivo.

Luca Falace`
    },
    {
      pageNumber: 8,
      chapterTitle: "PARTE I - CONOSCENZA STORICA",
      content: `PARTE I
CONOSCENZA STORICA

Quando ho iniziato a studiare i principali miti, nelle diverse tradizioni popolari, mi sono reso conto, come ho scritto in tutti i miei altri saggi pubblicati, della significativa coincidenza delle similitudini, presenti nelle diverse etnie e periodi storici. La risposta inerente alla manifestazione delle coincidenze mitologiche è in relazione a quella serie di archetipi latenti nell’inconscio dell’uomo. Presenti in esso, sin dai primi lumi della ragione.`
    },
    {
      pageNumber: 9,
      chapterTitle: "COINCIDENZE TRA I MITI DEGLI ANGELI",
      content: `Coincidenze tra i Miti degli Angeli

I fatamiti contemporanei vedono gli arcangeli, come custodi del Carro. Arca sta per nave e angelo per messaggero. Arca-angelo il messaggero della nave alata, in altre parole, il conducente della nave che vola nello spazio? Quindi il pilota della nave spaziale. Nelle credenze popolari contemporanee, si è sviluppato un’innumerevole e fantasiosa serie di teorie. Queste sono nate dall’unione dei miti, dalle leggende moderne e dalle fantasie metropolitane.

Una delle più note spiegherebbe l’originaria natura degli angeli. Questi esseri non sono terrestri, poiché sono più evoluti. Secondo le comuni credenze popolari, l’angelo è un’entità extraterrestre.`
    },
    {
      pageNumber: 17,
      chapterTitle: "LIMITE DI CONSULTAZIONE RAGGIUNTO",
      content: `[REGISTRO BIBLIOTECARIO SBN • SEZIONE D • DIGIT-READ PROTOCOL]

La consultazione parziale autorizzata (Anteprima Editoriale) per il volume:
«Mythos, Spazio e Tempo: La Conoscenza Evolutiva (2018)»
è terminata a pagina 16 in ottemperanza ai diritti di tutela d'autore SBN.

Il presente saggio è distribuito e in vendita regolare sui canali editoriali.
Per visualizzare l'opera completa con la Cronologia evolutiva completa, si prega di acquistare il testo sui canali ufficiali.

Acquistando i libri sostieni la Fondazione Falace nella catalogazione e digitalizzazione SBN del patrimonio storico-scientifico ed elettronico.`
    }
  ];

  const tuSeiPages: BookPage[] = [
    {
      pageNumber: 1,
      content: `[COPERTINA]

LUCA FALACE

TU SEI

MANUALE
Sincronismi, Coincidenze, Sincronicità

Lo Sviluppo della Consapevolezza del proprio Essere,
attraverso il Fenomeno degli Eventi Paralleli,
per interagire con le Coincidenze Personali
e Realizzare i propri Sogni

L'OPERA CELESTE
CENTRO CULTURALE`
    },
    {
      pageNumber: 2,
      content: `Luca Falace TU SEI 
1

Titolo: TU SEI
SINCRONISMI, COINCIDENZE, SINCRONICITÀ
INTERAZIONE CON IL MONDO FENOMENICO DEGLI EVENTI PARALLELI

Autore: Luca Falace
Sito internet: www.loperaceleste.com

Editore: L’Opera Celeste, Centro Culturale Arte & Scienza, Il Mio Libro, Kataweb Gruppo L’Espresso

PROPRIETÀ LETTERARIA RISERVATA
Nessuna parte di questa pubblicazione può essere riportata, o trasmessa, in alcuna forma o con alcun mezzo, compresa la registrazione o le fotocopie.

2005 © S.C.S - SINCRONISMI, COINCIDENZE, SINCRONICITÀ
STUDIO DEI SINCRONISMI CREATIVI
Luca Falace tutti i diritti riservati.
Deposito Opere Inedite della SIAE, presso la Sezione Opere Letterarie OLAF.`
    },
    {
      pageNumber: 3,
      content: `Luca Falace TU SEI 
2

Luca Falace
Tu Sei

Lo Sviluppo della Consapevolezza del proprio Essere, attraverso il Fenomeno degli Eventi Paralleli, per interagire sulle Coincidenze Personali e Realizzare i propri Sogni

The Celestial Opera Cultural Center`
    },
    {
      pageNumber: 4,
      chapterTitle: "INDICE GENERALE",
      content: `Luca Falace TU SEI 
3

Indice
Pag. 5 – INTRODUZIONE

PARTE I – TU SEI - SINCRONISMI
COINCIDENZE NELLA NATURA DEGLI ESSERI UMANI
Pag. 16 - Capitolo 1. Come riconoscere gli Eventi Paralleli
Pag. 34 - Capitolo 2. Come risolvere il problema delle coincidenze collettive
Pag. 49 - Capitolo 3. Consapevolezza del fenomeno delle Coincidenze

PARTE II – TU SEI - COINCIDENZE
INTRODUZIONE ALLO STUDIO DEI SINCRONISMI CREATIVI
Pag. 64 - Capitolo 4. Il Sincronismo Creativo e gli Eventi Paralleli
Pag. 76 - Capitolo 5. Come sviluppare la consapevolezza del fenomeno delle Coincidenze
Pag. 88 - Capitolo 6. Come interagire con gli Eventi Paralleli

PARTE III – TU SEI - SINCRONICITÀ
TEORIA DELLA RELATIVITÀ E COINCIDENZE RELATIVE
Pag. 106 - Capitolo 7. Contemporaneità degli Eventi Paralleli
Pag. 125 - Capitolo 8. Introduzione allo studio dei Sincronismi Creativi
Pag. 140 - Capitolo 9. Evoluzione degli Eventi Paralleli e Vibrazioni Emozionali

PARTE IV – TU SEI – SINCRONISMI, COINCIDENZE, SINCRONICITÀ
FORTUNA, BENESSERE, FELICITÀ
Pag. 154 - Capitolo 10. Interazione con gli Eventi Paralleli
COMPENDIO DEI DIECI CAPITOLI – TU SEI
Pag. 181 – Compendio dei dieci Capitoli`
    },
    {
      pageNumber: 5,
      content: `Luca Falace TU SEI 
4

Conosci te stesso
(Gnôthi Seautón - Nosce te Ipsum)

Uomo Conosci te stesso, e conoscerai l’Universo e gli Dèi.

(Iscrizione sul Tempio dell’Oracolo di Delfi)`
    },
    {
      pageNumber: 6,
      chapterTitle: "INTRODUZIONE - PAG. 5",
      content: `Luca Falace TU SEI 
5

INTRODUZIONE

I risultati che otterrai, dalla lettura di questo volume, saranno impressionanti già dopo i primi dieci giorni. Quando tu avrai seguito tutte le istruzioni, dei dieci capitoli di questo manuale, la tua esistenza cambierà radicalmente. Tu, ti troverai su un livello superiore alla media. Questo non vuol dire che tu sarai migliore degli altri, ma semplicemente perché hai seguito le tutte istruzioni, e ti sei impegnato nello studio. La tua coscienza sarà risvegliata, dalle considerazioni contenute in questo manuale.

Ti stai chiedendo forse perché ti parlo in modo così diretto? Allora sappi che questo è il modo migliore, per metterti in contatto con il tuo inconscio, la tua coscienza, con il tuo Sé superiore. Non spostare la tua attenzione sulla realtà materiale delle cose, non pensare che è l’autore di questo libro che ti scrive, ma pensa che quello che stai leggendo è il risultato di lunghi anni di studio, nell’osservazione degli scritti e nelle semplici intuizioni dei collegamenti tra le varie conoscenze.`
    },
    {
      pageNumber: 7,
      chapterTitle: "INTRODUZIONE - PAG. 6",
      content: `Luca Falace TU SEI 
6

Semplici considerazioni, ricompongono un grande mosaico, i cui tasselli si perdono nella notte dei tempi, fino ad arrivare in questo presente. Questo ti permetterà di vedere l’intera immagine delle cose. Grazie agli antichi insegnamenti inerenti al risveglio della consapevolezza, contenuti all’interno di quest’opera, tu imparerai ad attivare un’energia latente assopita. Tale potenzialità è comune nella maggior parte degli esseri umani. Le tue potenzialità si eleveranno e potrai pensare, agire e materializzare i tuoi sogni.

Le mie inedite e originali intuizioni, inerenti alla fenomenologia delle coincidenze, sono scaturite dall’analisi degli eventi paralleli. Tale studio, durato oltre un decennio, si basa sul ragionamento, e la constatazione razionale, concernente la fenomenologia delle coincidenze.

In questo manuale “Tu Sei” sono riuscito a sintetizzare, le mie ricerche sul fenomeno delle coincidenze. Questo è stato possibile, grazie all’attento e lungo studio di ricerca compiuto, su una vastissima`
    },
    {
      pageNumber: 8,
      chapterTitle: "INTRODUZIONE - PAG. 7",
      content: `Luca Falace TU SEI 
7

quantità di volumi consultati, e sull’esperienza diretta su campo.

In questo manuale, “Tu Sei”, sono racchiuse alcune teorie riguardanti i miei studi, sulla fenomenologia delle coincidenze. Le prime considerazioni, su tale studio, sono scaturite dalla mia osservazione empirica, dopo un’esperienza diretta durata molti anni, come ho già descritto all’inizio.

La mia modesta ricerca e i miei esperimenti quotidiani, sono stati incentrati, sullo studio della fenomenologia delle coincidenze significative.

Dopo aver studiato la Teoria della Sincronicità di Jung, intuii che il tuo modo d’Essere, gli eventi felici, la fortuna e le coincidenze, dipendono, in parte, da tre fattori principali:

1. l’effetto dell’energia di un individuo,
2. l’influenza dell’energia collettiva,
3. i mutamenti dovuti a questioni inspiegabili.`
    },
    {
      pageNumber: 9,
      chapterTitle: "INTRODUZIONE - PAG. 8",
      content: `Luca Falace TU SEI 
8

La terza ipotesi potrebbe essere la causa, dei primi due fattori, e quindi il problema ritornerebbe ad essere irrisolto. Intuii che poteva sembrare così, solo apparentemente.

Nell’arco di dieci anni di studio sono riuscito a conoscere e studiare il fenomeno delle coincidenze sociali, tra le persone. È iniziato così il mio vero studio su campo.

Questa ricerca era incentrata sull’analisi quotidiana, relativa ad un gran numero di eventi e di personalità, che caratterizzavano i sincronismi presenti nel corso delle giornate. Notai una notevole quantità di eventi collettivi coincidenti. Questi erano comuni a molte persone che conoscevo.

Incominciai a prender nota, di tutto quello che avveniva durante le mie uscite. Documentavo i sincronismi, con delle piccole implicite interviste quotidiane, alle persone più svariate.

Trascrivevo con entusiasmo, in seguito, le impressionanti similitudini collettive, ma anche le`
    },
    {
      pageNumber: 10,
      chapterTitle: "INTRODUZIONE - PAG. 9",
      content: `Luca Falace TU SEI 
9

incredibili affinità, coincidenti, presenti nel comportamento sociale, nelle diverse categorie lavorative. Mi ritrovai con un’innumerevole quantità di appunti. Incominciai così a riordinarli come tasselli di un mosaico.

Sulla base della “Teoria della Sincronicità” di Carl Gustav Jung, ho inserito delle mie considerazioni, che nel tempo si sono rivelate originali, al relativo studio in questione.

Come ho già scritto nella prefazione, le mie teorie in merito non hanno alcuna presunzione scientifica, o accademica, ma registrano a mio avviso, un’originale serie d’intuizioni, che andrebbero approfondite attraverso una metodologia appropriata. Inoltre il mio intento è quello di portare alla luce, il fenomeno delle coincidenze significative e risvegliare la tua Coscienza e le coscienze degli studiosi.

Questo ti aiuterà a distaccarti dalla massa. Questo distacco non sarà fisico, ma mentale. Questo significa che tu conoscerai il Tuo Essere. In tal senso Tu conoscerai te stesso; perché Tu Sei.`
    },
    {
      pageNumber: 11,
      chapterTitle: "INTRODUZIONE - PAG. 10",
      content: `Luca Falace TU SEI 
10

La fenomenologia degli eventi paralleli a mio parere è di notevole importanza, poiché è legato, in parte, al percorso evolutivo di ogni singolo essere della Terra. Il fenomeno delle coincidenze è collegato, inoltre, al più grande enigma che l’essere umano possa svelare: il mistero dell’esistenza.

I risultati che tu otterrai, dalla lettura di questo volume, saranno impressionanti già dopo i primi dieci giorni. Quando avrai seguito tutte le istruzioni, la tua esistenza cambierà radicalmente. Le tue potenzialità si eleveranno e potrai pensare, agire e materializzare i tuoi sogni. Grazie a questi insegnamenti, imparerai ad avere la consapevolezza di te stesso, degli altri e delle cose che ti circondano. Questa sarà l’unica differenza tra te e gli altri. Sono stati scritti molti libri sul fenomeno delle coincidenze, ma non sono ancora state chiarite le cause del fenomeno. Solo in questo manuale troverai originali spiegazioni, in merito all’unione di tre fattori che costituiscono la fenomenologia degli eventi paralleli, ovvero, il Sincronismo, la Coincidenza e la Sincronicità. Questi tre fattori costituiscono il Tuo Essere, la tua Persona.`
    },
    {
      pageNumber: 12,
      chapterTitle: "INTRODUZIONE - PAG. 11",
      content: `Luca Falace TU SEI 
11

Tu Sei il risultato degli Eventi Paralleli.

Dopo aver studiato questo manuale, tu potrai apprezzare meglio, il lavoro delle altre persone, in merito a tali argomenti. Questo perché, la tua mente avrà realizzato, la consapevolezza dell’esistenza del Sé, in connessione con il fenomeno degli Eventi Paralleli.

In merito alle problematiche dei temi che tratteremo, una visione più ampia potrebbe giovare all’analisi della soluzione. In tal senso l’originalità e l’importance di questo volume, si concretizza proprio nell’atipicità dei contenuti, nei confronti delle soluzioni adottate.

Ogni possibile soluzione è affiancata da un’importante ricerca nell’ambito delle tradizioni antiche. Il ragionamento storico verterà sulle più importanti e antiche civiltà. Le soluzioni dei problemi contemporanei saranno supportate, da un sapere antichissimo. Il confronto tra la civiltà occidentale e quell’orientale. Per quanto concerne le civiltà orientali, in relazione alle antiche tradizioni dell’India e la Cina, queste saranno prese in considerazione più delle altre. Sappiamo che il sapere di queste due civiltà molto`
    },
    {
      pageNumber: 13,
      chapterTitle: "INTRODUZIONE - PAG. 12",
      content: `Luca Falace TU SEI 
12

antiche è sempre più rivalutato, nella nostra epoca. In particolare dalla medicina, dalla scienza e dalla recente fisica quantistica.

La tua mente, da questo momento in poi, dovrà essere versatile, se Tu vorrai veramente “vedere” e non osservare le cose.

In una prima fase potresti trovare qualche piccola difficoltà, nel capire alcuni termini. Vai avanti nei capitoli, non fermarti. Ogni tua incomprensione, ti sarà chiara in seguito. Sarà proprio la comprensione di questi termini, che ti permetterà di farti pensare, agire e ottenere i risultati. In una prima fase, non importa, che tu non sia convinto. Segui le istruzioni. È il risultato quello che conta. Prima di procedere nell’analisi degli Eventi Paralleli è bene che tu sappia alcune regole importanti.

• Quando la tua mente arriverà alla realizzazione di una nuova visione delle cose che ci circondano, tu avrai un enorme potere.`
    },
    {
      pageNumber: 14,
      chapterTitle: "INTRODUZIONE - PAG. 13",
      content: `Luca Falace TU SEI 
13

• Nella tua nuova esistenza saprai interagire, con il flusso degli eventi paralleli. Questo ti permetterà di vivere in una condizione di benessere. In tal senso dovrai aiutare il prossimo meritevole.

• Tutto quello che vuoi ottenere, deve nascere dal sentimento del bene. Poiché, come vedrai in seguito, la manifestazione di una coincidenza, può essere anche il risultato di una tua azione.

Il massimo dell’intima soddisfazione, e della realizzazione di ogni essere umano, consiste nell’arrivare alla meta onestamente. Arrivare con le proprie forze e senza scendere a qualsiasi tipo di compromesso. Ogni Essere Umano, nel proprio cuore, conosce il giusto.

Tu otterrai Fortuna, Benessere e Felicità in una maniera pura, onesta e laboriosa. Per questo godrai appieno del tuo risultato, del tuo impegno e della tua brillante realizzazione. Poiché, ricorda che la`
    },
    {
      pageNumber: 15,
      chapterTitle: "INTRODUZIONE - PAG. 14",
      content: `Luca Falace TU SEI 
14

manifestazione di una coincidenza, può essere anche il risultato di una tua azione.

Tu otterrai Fortuna, Benessere e Felicità, solo se crederai fermamente in te stesso, ed avrai sviluppato la consapevolezza del fenomeno degli Eventi Paralleli.

Tu otterrai Fortuna, Benessere e Felicità solo se studierai attentamente tutte le istruzioni contenute all’interno di quest’opera. Ora libera la tua mente, rendila versatile, e segui le istruzioni.

Ora libera la tua mente e segui attentamente ciò che c’è scritto in questo libro. Mentre leggi ascolta la tua voce, non pensare, che sono io che scritto questo libro, dimentica ciò che già conosci, libera la tua mente, e nella lettura di questo libro, da adesso in poi, la tua attenzione, la tua comunicazione nel leggere questo scritto, dovrà essere riferita alla sola tua persona e a nessun altro. Ascolta la tua voce nella tua mente. Ascolta te stesso, perché TU SEI.`
    },
    {
      pageNumber: 16,
      chapterTitle: "PRIMA PARTE - PAG. 15",
      content: `Luca Falace TU SEI 
15

TU SEI
SINCRONISMI
PRIMA PARTE

I° OBIETTIVO
LO SVILUPPO DELLA CONSAPEVOLEZZA DELLE COINCIDENZE NELLA NATURA DEGLI ESSERI UMANI`
    },
    {
      pageNumber: 17,
      chapterTitle: "LIMITE DI CONSULTAZIONE RAGGIUNTO",
      content: `[REGISTRO BIBLIOTECARIO SBN • SEZIONE D • DIGIT-READ PROTOCOL]

La consultazione parziale autorizzata (Anteprima Editoriale) per il volume:
«TU SEI: Sincronismi, Coincidenze, Sincronicità (2005/2011)»
è terminata a pagina 16 in ottemperanza ai diritti di tutela d'autore SBN.

Il presente saggio-manuale è distribuito e in vendita regolare sui canali editoriali.
Per visualizzare l'opera completa con i 11 capitoli originali o l'indagine empirica sui Sincronismi, si prega di acquistare il testo sui canali ufficiali.

Acquistando i libri sostieni la Fondazione Falace nella catalogazione e digitalizzazione SBN del patrimonio storico-scientifico ed elettronico.`
    }
  ];

  const sincronismoMetodoPages: BookPage[] = [
    {
      pageNumber: 1,
      content: `[COPERTINA]

LUCA FALACE

SINCRONISMO CREATIVO
Archetipi, Simboli, Sincronicità

IL METODO DEL SINCRONISMO CREATIVO
APPLICAZIONI PRATICHE

FAIC
CONOSCENZA INFINITA`
    },
    {
      pageNumber: 2,
      content: `Luca Falace

SINCRONISMO CREATIVO

ARCHETIPI, SIMBOLI E SINCRONICITÀ

Luca Falace - Tutti i diritti riservati.
© 2005-2024 Deposito Opere Inedite della SIAE,
presso la Sezione Opere Letterarie OLAF
e presso il Ministero per i Beni Culturali`
    },
    {
      pageNumber: 3,
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

LUCA FALACE

ARCHETIPI, SIMBOLI E SINCRONICITÀ
MANIFESTARE CON
IL SINCRONISMO CREATIVO

Lo Sviluppo della Consapevolezza del proprio Essere,
attraverso il Fenomeno degli Eventi Paralleli,
per interagire sulle Coincidenze Personali
e Realizzare i propri Sogni

L'EVOLUZIONE DELL'ANIMA
ATTRAVERSO ARCHETIPI, SIMBOLI E SINCRONICITÀ

ARCHETIPI, SIMBOLI, SINCRONICITÀ:
INTERAZIONE CON IL MONDO FENOMENICO
DEGLI EVENTI PARALLELI`
    },
    {
      pageNumber: 4,
      chapterTitle: "INDICE GENERALE - PARTE TEORICA",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

INDICE

PREMESSA….…………………...………………...………..………….06
PREFAZIONE……………………………………........…….……….07
INTRODUZIONE……………………………….…….…..….……..….09

PRIMA PARTE: PARTE TEORICA
LO SVILUPPO DELLA CONSAPEVOLEZZA DELLE COINCIDENZE
NELLA NATURA DELL'ESSERE UMANO

CAPITOLO 1: RICONOSCERE GLI EVENTI PARALLELI….….......14
CAPITOLO 2: RISOLVERE IL PROBLEMA DELLE COINCIDENZE COLLETTIVE………………………………..20
CAPITOLO 3: ACQUISIRE LA CONSAPEVOLEZZA DEL FENOMENO DELLE COINCIDENZE……………………………25
CAPITOLO 4: IL SINCRONISMO CREATIVO E GLI EVENTI PARALLELI…………………………………………….31
CAPITOLO 5: SVILUPPARE LA CONSAPEVOLEZZA DEL FENOMENO DELLE COINCIDENZE………………………………….36
CAPITOLO 6: INTERAGIRE CON GLI EVENTI PARALLELI……...38
CAPITOLO 7: TEORIA DELLA CONTEMPORANEITÀ DEGLI EVENTI PARALLELI IN RELAZIONE AL SINCRONISMO CREATIVO……………………………………………………………….47
CAPITOLO 8: STUDIO DEI SINCRONISMI CREATIVI E VIBRAZIONI EMOZIONALI……………………………………...….55`
    },
    {
      pageNumber: 5,
      chapterTitle: "INDICE GENERALE - PARTE PRATICA",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

SECONDA PARTE: PARTE PRATICA
INTERAZIONE CON IL MONDO FENOMENICO DEGLI EVENTI PARALLELI

CAPITOLO 13: CONSAPEVOLEZZA PSICO-FISICA…………..103
CAPITOLO 14: ENERGIA ALIMENTARE…………………..…..116
CAPITOLO 15: MANIFESTARE CON IL SINCRONISMO CREATIVO……………………………………………………..…...114
CAPITOLO 16: IL POTERE DELLA KUNDALINI…………..….138
CAPITOLO 17: REALIZZAZIONE PERSONALE…………..…...146
CAPITOLO 18: MANIFESTARE L'ABBONDANZA………….....151
CAPITOLO 19: PRANA E KUNDALINI IL POTERE DELLA KUNDALINI
Il REALE FUNZIONAMENTO DELLA KUNDALINI…………....168

PARTE TERZA: TEORIA E PRATICA
ALCHIMIA SPIRITUALE, ARCHETIPI UMANISTICI SINCRONICITÀ EVOLUTIVA`
    },
    {
      pageNumber: 6,
      chapterTitle: "INDICE GENERALE - FONDAZIONE AIC",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

CAPITOLO 26: CULTURA UMANISTICA
ASTROLOGIA EVOLUTIVA
FILOSOFIA ORIENTALE………………………………………..….293
CAPITOLO 27: COLLEGAMENTI TRA ARCHETIPI JUNGHIANI, ASTROLOGIA UMANISTICA E KUNDALINI……………….…...302
CAPITOLO 28: ASTROLOGIA UMANISTICA E CHAKRA: UN PONTE TRA IL COSMO E L'ENERGIA INTERIORE…….…..312
CAPITOLO 29: APPLICATIVE PRATICHE………….………334
CAPITOLO 30: FONDAZIONE AIC
FAIC: METODO DEL SINCRONISMO CREATIVO…….……..359
CAPITOLO 31: ATTO NOTARILE E STATUTO DELLA FONDAZIONE AIC………………………………………………374

GENESI DELLA FONDAZIONE ARTE E SCIENZA…….....405
BIOGRAFIA DI LUCA FALACE………………………………….410
BIBLIOGRAFIA DELLE OPERE DI LUCA FALACE………….424`
    },
    {
      pageNumber: 7,
      chapterTitle: "PREMESSA",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

PREMESSA

La teoria del Sincronismo Creativo, sviluppata e affinata nel corso di molti anni, rappresenta il cuore pulsante di questo libro. Tuttavia, questa opera non si limita a esplorare i principi teorici e pratici della teoria; si pone anche come una testimonianza concreta dell’impegno che ha portato alla creazione della Fondazione AIC (Attività Intellettive e Creative).

La Fondazione, costituita nel 2024, nasce da un lungo percorso che ha preso avvio già nel 2005, quando iniziai a costruire un centro culturale virtuale dedicato all'integrazione tra arte e scienza. Questo progetto, che ha permesso a centinaia di artisti e pensatori di esprimersi e condividere le proprie opere, si è evoluto fino a diventare una reality concreta: una Fondazione che unisce creatività e intelligenza in una missione comune, unendo le potenzialità delle due discipline.`
    },
    {
      pageNumber: 8,
      chapterTitle: "PREFAZIONE",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

PREFAZIONE

Nel percorso verso la comprensione di sé e del mondo che ci circonda, l'umanità ha scoperto e sviluppato concetti fondamentali che hanno plasmato il nostro percorso evolutivo. Tra questi, gli archetipi, i simboli e le sincronicità emergono come pilastri essenziali nell'approfondimento della nostra esperienza umana e nell'evoluzione dell'anima.

Gli archetipi. Introdotto da Carl Gustav Jung, il concetto di archetipo rappresenta modelli primordiali insiti nell'inconscio collettivo umano. Questi modelli universali, come l'eroe, la madre, le vecchio saggio, sono presenti in tutte le culture e influenzano profondamente i nostri pensieri, sentimenti e comportamenti.`
    },
    {
      pageNumber: 9,
      chapterTitle: "PREFAZIONE - LE SINCRONICITÀ",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

Le Sincronicità. Introdotte da Jung, le sincronicità sono gli eventi significativi che si verificano in modo apparentemente casuale, ma che sono intrinsecamente legati al nostro mondo interiore e al nostro cammino di crescita personale. Questi momenti di connessione e coincidenza sono interpretati come segnali dall'universo o dall'anima stessa, che ci guidano lungo il percorso della nostra vita e ci aiutano a comprendere il significato più profondo degli eventi e delle esperienze che incontriamo.

Conosci te stesso
(Gnôthi Seautón - Nosce te Ipsum)
Uomo Conosci te stesso, e conoscerai l’Universo e gli Dèi
(Iscrizione sul Tempio dell’Oracolo di Delfi)`
    },
    {
      pageNumber: 10,
      chapterTitle: "INTRODUZIONE",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

INTRODUZIONE

I risultati che otterrai dalla lettura di questo volume saranno impressionanti già dopo i primi dieci giorni. Quando avrai seguito tutte le istruzioni dei dieci capitoli di questo manuale, la tua esistenza cambierà radicalmente. Ti troverai su un livello superiore alla media. Questo non vuol dire che sarai migliore degli altri, ma semplicemente perché hai seguito tutte le istruzioni e ti sei impegnato nello studio. La tua coscienza sarà risvegliata dalle considerazioni contenute in questo manuale.

Le mie inedite e originali intuizioni inerenti alla fenomenologia delle coincidenze sono scaturite dall’analisi degli eventi paralleli. Tale studio, durato oltre un decennio, si basa sul ragionamento e la constatazione razionale concernente la fenomenologia delle coincidenze. In questo libro sono riuscito a sintetizzare le mie ricerche sul fenomeno delle coincidenze.`
    },
    {
      pageNumber: 11,
      chapterTitle: "INTRODUZIONE - TRE FATTORI PRINCIPALI",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

La mia modesta ricerca e i miei esperimenti quotidiani sono stati incentrati sullo studio della fenomenologia delle coincidenze significative.

Dopo aver studiato la Teoria della Sincronicità di Jung, intuii che il tuo modo d’Essere, gli eventi felici, la fortuna e le coincidenze, dipendono, in parte, da tre fattori principali:
1. l’effetto dell’energia di un individuo,
2. l’influenza dell’energia collettiva,
3. i mutamenti dovuti a questioni inspiegabili.

La ricerca si è focalizzata su un’osservazione quotidiana e sistematica di un ampio numero di eventi e personalità, con l’obiettivo di individuare i sincronismi che caratterizzavano le giornate.`
    },
    {
      pageNumber: 12,
      chapterTitle: "INTRODUZIONE - TU SEI IL RISULTATO",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

Sulla base della “Teoria della Sincronicità” di Carl Gustav Jung, ho inserito delle mie considerazioni che nel tempo si sono rivelate originali al relativo studio in questione.

Tu Sei il Risultato degli Eventi Paralleli

Sono stati scritti molti libri sul fenomeno delle coincidenze, ma non sono ancora state chiarite le cause del fenomeno. Questo manuale offre spiegazioni originali riguardo all’unione di tre fattori che costituiscono la fenomenologia degli eventi paralleli, ovvero il Sincronismo, la Coincidenza e la Sincronicità. Questi tre fattori costituiscono il Tuo Essere, la tua Persona.`
    },
    {
      pageNumber: 13,
      chapterTitle: "NORME E REGOLE IMPORTANTI",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

Prima di procedere nell’analisi degli Eventi Paralleli, è bene che tu sappia alcune regole importanti:

• Quando la tua mente arriverà alla realizzazione di una nuova visione delle cose che ti circondano, avrai un enorme potere.
• Nella tua nuova esistenza, saprai interagire con il flusso degli eventi paralleli, permettendoti di vivere in una condizione di benessere. In tal senso, dovrai aiutare il prossimo meritevole.
• Tutto quello che vuoi ottenere deve nascere dal sentimento del bene, poiché la manifestazione di una coincidenza può essere anche il risultato di una tua azione.

Ascolta la tua voce nella tua mente. Ascolta te stesso, perché TU SEI.`
    },
    {
      pageNumber: 14,
      chapterTitle: "PRIMA PARTE - PARTE TEORICA",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

PRIMA PARTE
PARTE TEORICA

LO SVILUPPO DELLA CONSAPEVOLEZZA DELLE COINCIDENZE NELLA NATURA DELL'ESSERE UMANO`
    },
    {
      pageNumber: 15,
      chapterTitle: "CAPITOLO 1 - RICONOSCERE GLI EVENTI",
      content: `LUCA FALACE SINCRONISMO CREATIVO. ARCHETIPI, SIMBOLI, SINCRONICITÀ

CAPITOLO 1

RICONOSCERE GLI EVENTI PARALLELI

Ora ascolta quella parte di te che comprende tutto. La tua conoscenza è solo sopita. Il segreto è risvegliare la tua coscienza, il tuo Sé superiore, quella parte di te che sai inconsciamente esistere ma che non riesci a riconoscere consciamente. Sono solo un mezzo per il risveglio della tua coscienza, non il tuo insegnante.

Se leggi con la mente libera da pensieri estranei, la tua coscienza sarà stimolata e pronta a ricevere il tuo Essere. Annulla tutte le convinzioni e le opinioni personali che ostacolano il tuo risveglio. Se riesci a contrastare la forza interna che limita il tuo essere, ciò che leggerai sarà una continua rivelazione. Le parole di questo libro risuoneranno in te come messaggi familiari, rivelando ciò che avevi nascosto a te stesso.`
    },
    {
      pageNumber: 16,
      chapterTitle: "LIMITE DI CONSULTAZIONE RAGGIUNTO",
      content: `[REGISTRO BIBLIOTECARIO SBN • SEZIONE D • DIGIT-READ PROTOCOL]

La consultazione parziale autorizzata (Anteprima Editoriale) per il volume:
«Sincronismo Creativo: Il Metodo del Sincronismo Creativo (2005-2024)»
è terminata a pagina 15 in ottemperanza ai diritti di tutela d'autore SBN e deposito SIAE.

Il presente saggio-manuale è distribuito sia in edizione cartacea sia in versione eBook sui canali editoriali.
Per visualizzare l'opera completa con i 31 capitoli originali o l'indagine empirica sui Sincronismi, si prega di acquistare il testo sui canali ufficiali.

Acquistando i libri sostieni la Fondazione Falace nella catalogazione e digitalizzazione SBN del patrimonio storico-scientifico ed elettronico.`
    }
  ];

  const handleOpenReader = (book: Book) => {
    setSelectedBook(book);
    setReaderPage(1);
    setReaderOpen(true);
  };

  const currentBookPages = selectedBook?.id === 'book-celeste' || selectedBook?.id === 'book-celeste-ristampa'
    ? operaCelestePages 
    : selectedBook?.id === 'book-tu-sei'
    ? tuSeiPages
    : selectedBook?.id === 'book-archetipi-simboli'
    ? archetipiSimboliPages
    : selectedBook?.id === 'book-archetipi-vol3'
    ? archetipiVol3Pages
    : selectedBook?.id === 'book-mythos-spazio'
    ? mythosSpazioPages
    : selectedBook?.id === 'book-sincronismo-metodo'
    ? sincronismoMetodoPages
    : [
        { 
          pageNumber: 1, 
          content: `[ANTEPRIMA COPERTINA EDITORALE]
          
${selectedBook?.title}
Anno: ${selectedBook?.year}
Editore: ${selectedBook?.publisher}
ISBN: ${selectedBook?.isbn || 'N/D'}

Questo saggio scientifico-letterario è catalogato con protocollo OPAC SBN.` 
        },
        { 
          pageNumber: 2, 
          content: `[RELAZIONE EDITORIALE SINTESI]

${selectedBook?.description}

---
Dispositivo di Consultazione limitata attivo (Simil-Google Books).
I diritti di download dell'opera integrale sono disabilitati per tutelare i proventi editoriali destinati ai fondi scientifici della Fondazione.` 
        }
      ];

  const activePageData = currentBookPages.find(p => p.pageNumber === readerPage) || currentBookPages[0];

  const filteredBooks = BOOKS_CATALOG.filter((book) => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (book.isbn && book.isbn.toLowerCase().includes(searchTerm.toLowerCase())) ||
      book.publisher.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || book.type === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 px-4 sm:px-6 border-b border-[#0066CC] bg-[#F7F5F0]/25 rounded-3xl" id="biblioteca-digitale-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Schema Title Panel with interactive selector requested by user */}
        <div className="bg-white border-2 border-black p-6 rounded-2xl mb-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="flex-1">
            <span className="text-[9px] font-mono text-[#0066CC] font-bold tracking-widest block mb-2 uppercase">
              ★ Scegli il Titolo Migliore (Schema Proposto)
            </span>
            <h1 className="text-xl sm:text-2xl font-serif font-black text-black leading-tight mb-1 uppercase tracking-wide">
              {selectedTitleObj.label}
            </h1>
            <p className="text-xs text-slate-600 font-sans italic">
              {selectedTitleObj.desc}
            </p>
          </div>
          
          <div className="shrink-0 flex flex-col gap-1.5 w-full md:w-auto">
            <label className="text-[10px] font-mono text-black font-bold uppercase">Cambia Intestazione:</label>
            <div className="relative">
              <select
                value={activeTitleKey}
                onChange={(e) => setActiveTitleKey(e.target.value)}
                className="w-full md:w-72 bg-white border-2 border-black rounded-lg px-3 py-2 text-xs font-mono font-bold text-[#0066CC] focus:outline-none cursor-pointer"
              >
                {titleOptions.map(opt => (
                  <option key={opt.key} value={opt.key}>{opt.label.split(' • ')[0]}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Introduction Panel */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#00468C] px-4 py-1.5 rounded-full text-[10px] font-mono uppercase font-black tracking-widest mb-4">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Consultazione Digitale Protetta (SBN / SIAE)</span>
          </div>
          
          <h2 className="text-3xl font-serif font-black tracking-tight text-black sm:text-4xl uppercase max-w-xl mx-auto leading-tight">
            Consultazione saggio antico &amp; moderno
          </h2>
          
          <p className="text-slate-800 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
            Questo portale consente la **consultazione limitata delle premesse e dei primi capitoli** dei volumi in commercio del Dott. Luca Falace (paternità intellettuale depositata 2005–2025). Il download integrale è **rigorosamente disabilitato** per garantire l'integrità commerciale delle opere fisiche in vendita.
          </p>

          <p className="text-xs text-slate-500 font-semibold italic mt-2">
            Clicca "Leggi Anteprima" per aprire il lettore virtuale isocronico.
          </p>
        </div>

        {/* Security Shield Warnings Banner */}
        <div className="bg-[#FFF9E6] border border-amber-300 p-4 rounded-xl flex items-start gap-3.5 mb-8 text-amber-900 text-xs leading-relaxed max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-950 block">PROTEZIONE COPYRIGHT SBN-SIAE COMPATIBILE GOOGLE LIBRI:</strong>
            La memorizzazione locale, la cattura massiva o il download automatico dei testi sono protetti da un algoritmo antitraccia logico. Per possedere le lussuose stampe originali con gli indici rilegati, compresi i fogli grafici, utilizza i tasti di acquisto diretto.
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-white border-2 border-black p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Filtra tra le 49 monografie statali SBN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#0066CC]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'Tutti i libri' },
              { id: 'art', label: 'Arte & Poesia' },
              { id: 'philosophy', label: 'Filosofia' },
              { id: 'theory', label: 'Sincronismo' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`text-[10px] font-mono uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0066CC] border-[#0066CC] text-white'
                    : 'bg-white border-slate-300 text-black hover:border-[#0066CC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => {
            const isCeleste = book.id === 'book-celeste' || book.id === 'book-celeste-ristampa';
            const isDoubleFormat = book.id !== 'book-centro-culturale-progetto' && book.id !== 'book-pubblicazioni-play';
            return (
              <div 
                key={book.id} 
                className="bg-white border-2 border-black p-6 rounded-2xl flex flex-col justify-between hover:border-[#0066CC] transition-all relative overflow-hidden group shadow-sm"
              >
                {/* Book design wrapper */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 uppercase font-bold">
                      {book.publisher}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">{book.year}</span>
                  </div>

                  {/* Simulated textured Book Cover representation */}
                  <div className={`aspect-[4/5] bg-gradient-to-br ${book.sbnCode ? 'from-[#0c2240] to-[#0166cc]' : 'from-[#3a2010] to-[#8c5225]'} border-2 border-black rounded-r-xl shadow-md p-4 mb-4 flex flex-col justify-between text-white relative group-hover:shadow-lg transition-transform duration-300 group-hover:-translate-y-1`}>
                    {/* Golden circle detail */}
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full border border-yellow-400 flex items-center justify-center text-[7px] font-serif text-yellow-300 bg-yellow-950/20 select-none">
                      {book.publisher.toLowerCase().includes('oro') ? 'ORO' : 'L.F.'}
                    </div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-250 uppercase font-bold leading-none mb-1">
                      {book.sbnCode ? 'MONOGRAFIA REGISTRATA SBN' : 'DIRETTO DEPOSITO COPYRIGHT'}
                    </div>
                    <div className="my-auto py-2">
                      <h4 className="text-xs sm:text-sm font-serif font-black tracking-wide leading-tight uppercase line-clamp-3 mb-1">
                        {book.title.replace(/^\d+\.\s*/, '')}
                      </h4>
                      <div className="w-6 h-0.5 bg-yellow-400 mt-2" />
                    </div>
                    <div className="text-[7.5px] font-mono text-slate-300 flex justify-between items-center border-t border-white/10 pt-2 shrink-0">
                      <span>ISBN {book.isbn || 'MINISTERO MiC'}</span>
                      <span className="text-yellow-400 font-bold uppercase text-[7px]">Luca Falace</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold font-serif text-black tracking-tight mb-2 uppercase line-clamp-2">
                    {book.title}
                  </h3>

                  <p className="text-slate-700 text-xs font-sans leading-relaxed mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  {/* SBN / MIUR Metadata badges */}
                  <div className="mb-4 space-y-2">
                    {book.sbnCode ? (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-2.5">
                        <div className="flex items-center gap-1.5 justify-between">
                          <span className="text-[9px] font-mono font-black text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded uppercase tracking-wider">
                            OPAC SBN Catalogo Nazionale
                          </span>
                          <span className="text-[9.5px] font-mono text-slate-600 font-bold">
                            {book.sbnCode}
                          </span>
                        </div>
                        
                        {book.sbnPermalink && (
                          <div className="mt-1.5 flex justify-end">
                            <a
                              href={book.sbnPermalink}
                              target="_blank"
                              rel="noopener noreferrer"
                              referrerPolicy="no-referrer"
                              className="text-[8.5px] font-mono text-[#0066CC] hover:underline font-bold flex items-center gap-0.5"
                            >
                              <span>Visualizza Scheda SBN OPAC ↗</span>
                            </a>
                          </div>
                        )}

                        {book.libraryLocations && book.libraryLocations.length > 0 && (
                          <div className="mt-1.5 pt-1.5 border-t border-blue-100">
                            <span className="text-[8px] font-mono text-slate-500 uppercase font-bold block mb-1">Presso Biblioteche Nazionali:</span>
                            <div className="flex flex-col gap-0.5">
                              {book.libraryLocations.map((loc, idx) => (
                                <span key={idx} className="text-[8px] font-sans text-slate-700 leading-tight">
                                  • {loc}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-2.5">
                        <div className="flex items-center gap-1.5 justify-between">
                          <span className="text-[9px] font-mono font-black text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded uppercase tracking-wider">
                            DEPOSITATO MINISTERO MiC / MIUR
                          </span>
                          <span className="text-[8.5px] font-mono text-slate-500 font-bold">
                            Tutela Diritto d'Autore
                          </span>
                        </div>
                        <p className="text-[8px] font-sans text-amber-900 leading-tight mt-1">
                          Monografia registrata e tutelata direttamente per l'anteriorità con brevetto/copyright intellettuale presso il Ministero o SIAE OLAF.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">Edizione:</span>
                    <strong className="text-black font-semibold uppercase">{isDoubleFormat ? 'Cartaceo + eBook' : 'Fascicolo Digitale'}</strong>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">Consultazione:</span>
                    <strong className="text-black font-semibold uppercase">{(isCeleste || book.id === 'book-sincronismo-metodo' || book.id === 'book-tu-sei' || book.id === 'book-archetipi-simboli' || book.id === 'book-archetipi-vol3' || book.id === 'book-mythos-spazio') ? 'Anteprima Parziale' : 'Indice + Copertina'}</strong>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <button
                      onClick={() => handleOpenReader(book)}
                      className="w-full py-2 bg-slate-900 hover:bg-black text-white rounded-lg font-mono font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-black active:scale-95"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>Leggi Anteprima</span>
                    </button>

                    {book.link ? (
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="w-full py-2 bg-white hover:bg-slate-50 text-[#0066CC] border border-[#0066CC] rounded-lg font-mono font-bold text-[10px] uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5 active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Acquista</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => alert(`Il volume "${book.title}" è consultabile solo in loco presso gli archivi fisici della Fondazione Falace.`)}
                        className="w-full py-2 bg-slate-100 text-slate-400 border border-slate-200 rounded-lg font-mono font-bold text-[9px] uppercase tracking-wider cursor-not-allowed text-center"
                        disabled
                      >
                        Sede Fisica
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* If no results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16 bg-white border-2 border-black rounded-2xl max-w-md mx-auto">
            <HelpIcon className="w-12 h-12 text-[#0066CC] mx-auto mb-3" />
            <h4 className="font-serif font-bold text-sm uppercase text-black">Nessuna monografia trovata</h4>
            <p className="text-xs text-slate-500 mt-1">Modifica il termine della ricerca in alto.</p>
          </div>
        )}

      </div>

      {/* Ritorna il Grande Google Libri Simulator Modal */}
      {readerOpen && selectedBook && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 block overflow-y-auto">
          <div className={`w-full max-w-3xl rounded-3xl border-2 border-black overflow-hidden flex flex-col h-[92vh] max-h-[800px] transition-colors duration-300 ${
            readerTheme === 'sepia' ? 'bg-[#FCF6E8]' : readerTheme === 'dark' ? 'bg-[#18181A] text-slate-350 reader-theme-dark' : 'bg-white'
          }`}>
            
            {/* Top Toolbar */}
            <div className="bg-[#0066CC] text-white px-5 py-3.5 border-b border-black flex justify-between items-center shrink-0 shadow-sm text-xs font-mono font-bold uppercase tracking-wider">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-white" />
                <div className="text-left">
                  <span className="text-[10px] text-blue-200 block font-sans font-bold leading-none mb-1">GOOGLE LIBRI SIMULATION</span>
                  <span className="text-xs text-white truncate max-w-xs block leading-none">{selectedBook.title}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Theme troller */}
                <div className="flex bg-[#00468C] p-1 rounded-lg border border-white/20 gap-1 shrink-0">
                  <button 
                    onClick={() => setReaderTheme('sepia')}
                    className={`px-2 py-1 rounded text-[9px] cursor-pointer ${readerTheme === 'sepia' ? 'bg-white text-[#0066CC]' : 'text-white'}`}
                  >
                    Sepia
                  </button>
                  <button 
                    onClick={() => setReaderTheme('white')}
                    className={`px-2 py-1 rounded text-[9px] cursor-pointer ${readerTheme === 'white' ? 'bg-white text-[#0066CC]' : 'text-white'}`}
                  >
                    Chiaro
                  </button>
                  <button 
                    onClick={() => setReaderTheme('dark')}
                    className={`px-2 py-1 rounded text-[9px] cursor-pointer ${readerTheme === 'dark' ? 'bg-white text-[#0066CC]' : 'text-white'}`}
                  >
                    Scuro
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setReaderOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer border border-transparent hover:border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sub Toolbar Controls */}
            <div className={`px-5 py-2.5 border-b flex flex-wrap justify-between items-center gap-3 shrink-0 text-xs font-mono ${
              readerTheme === 'sepia' ? 'border-[#E6DEC9] bg-[#F7F0D8]' : readerTheme === 'dark' ? 'border-zinc-800 bg-[#1D1D20]' : 'border-slate-100 bg-slate-50'
            }`}>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#0066CC] uppercase">
                <Lock className="w-3.5 h-3.5" />
                <span>Download Rigidamente Inibito • ID SBN OPAC</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Zoom */}
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setReaderPageZoom(Math.max(80, readerZoom - 10))}
                    className="p-1 bg-white hover:bg-slate-50 border border-slate-300 rounded text-black cursor-pointer active:scale-95"
                    title="Rimpicciolisci Testo"
                  >
                    <ZoomOut className="w-3.5 h-3.5 font-bold" />
                  </button>
                  <span className={`text-[10px] font-bold px-1.5 ${readerTheme === 'dark' ? 'text-white' : 'text-slate-700'}`}>{readerZoom}%</span>
                  <button 
                    onClick={() => setReaderPageZoom(Math.min(150, readerZoom + 10))}
                    className="p-1 bg-white hover:bg-slate-50 border border-slate-300 rounded text-black cursor-pointer active:scale-95"
                    title="Ingrandisci Testo"
                  >
                    <ZoomIn className="w-3.5 h-3.5 font-bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Read Content Window - mimics reading a paper book */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 select-none relative" id="book-content-scroll">
              <div className="max-w-xl mx-auto space-y-4">
                
                {/* Chapter Title Badge */}
                {activePageData.chapterTitle && (
                  <div className="text-center mb-6">
                    <span className="text-[9px] font-mono tracking-widest text-[#0066CC] border border-[#0066CC]/35 uppercase px-2 py-0.5 rounded font-black bg-white/20 select-none">
                      {activePageData.chapterTitle}
                    </span>
                  </div>
                )}

                {/* Simulated Book paper Page */}
                <div 
                  style={{ fontSize: `${(readerZoom / 100) * 14}px` }} 
                  className={`font-serif tracking-normal leading-relaxed whitespace-pre-line text-justify select-text focus:outline-none transition-all duration-300 ${
                    readerTheme === 'sepia' ? 'text-[#2D241E]' : readerTheme === 'dark' ? 'text-zinc-200' : 'text-black'
                  }`}
                >
                  {/* Visual design cover page 1 */}
                  {readerPage === 1 && (selectedBook.id === 'book-celeste' || selectedBook.id === 'book-celeste-ristampa') ? (
                    <div className="py-10 text-center flex flex-col justify-between min-h-[350px] border-4 border-double border-[#0066CC]/30 rounded-2xl p-6 bg-blue-50/20 max-w-sm mx-auto shadow-inner relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#0066CC]/15 rounded-xl pointer-events-none" />
                      <div>
                        <span className="text-[10px] font-mono text-[#0066CC] tracking-widest uppercase block mb-6 font-black">
                          • ROMANZO ALCHEMICO FILOSOFICO •
                        </span>
                        <h2 className="text-3xl font-serif font-black text-black leading-tight tracking-wide mb-2">
                          L'OPERA CELESTE
                        </h2>
                        <span className="text-xs text-slate-600 font-mono tracking-widest font-black uppercase">
                          STUDIO DI DIRETTA SINCRO
                        </span>
                      </div>

                      <div className="my-[40px]">
                        {/* Golden Circle Logo */}
                        <div className="w-16 h-14 rounded-full border-2 border-yellow-500 bg-yellow-50 text-[10px] font-serif tracking-widest font-bold text-yellow-600 flex flex-col items-center justify-center mx-auto shadow-md select-none">
                          <span className="leading-none block font-black">ORO</span>
                          <span className="text-[6.5px] leading-none block font-sans tracking-wide">EDIZIONI</span>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-4 mt-4">
                        <p className="text-[10px] font-mono text-slate-700 leading-none">
                          AUTORE: <span className="font-bold text-black uppercase">LUCA FALACE</span>
                        </p>
                        <p className="text-[8.5px] font-mono text-slate-500 tracking-wider mt-1">
                          EDITORE: O.R.O. EDIZIONI • ANNO 2005
                        </p>
                      </div>
                    </div>
                  ) : readerPage === 1 && selectedBook.id === 'book-tu-sei' ? (
                    <div className="py-10 text-center flex flex-col justify-between min-h-[350px] border-4 border-double border-[#0066CC]/30 rounded-2xl p-6 bg-blue-50/20 max-w-sm mx-auto shadow-inner relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#0066CC]/15 rounded-xl pointer-events-none" />
                      <div>
                        <span className="text-[10px] font-mono text-[#0066CC] tracking-widest uppercase block mb-6 font-black">
                          • MANUALE DI INDAGINE INTERIORE •
                        </span>
                        <h2 className="text-3xl font-serif font-black text-black leading-tight tracking-wide mb-2 uppercase">
                          TU SEI
                        </h2>
                        <span className="text-[10px] text-slate-600 font-mono tracking-wider font-bold block mb-1">
                          SINCRONISMI, COINCIDENZE, SINCRONICITÀ
                        </span>
                      </div>

                      <div className="my-[40px]">
                        {/* SCS Emblem */}
                        <div className="w-16 h-14 rounded-full border-2 border-yellow-500 bg-yellow-50 text-[10px] font-serif tracking-widest font-bold text-yellow-600 flex flex-col items-center justify-center mx-auto shadow-md select-none">
                          <span className="leading-none block font-black text-[9px]">S.C.S</span>
                          <span className="text-[5.5px] leading-none block font-sans tracking-wide uppercase">STUDIO CREATIVO</span>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-4 mt-4">
                        <p className="text-[10px] font-mono text-slate-700 leading-none">
                          AUTORE: <span className="font-bold text-black uppercase">LUCA FALACE</span>
                        </p>
                        <p className="text-[8.5px] font-mono text-slate-500 tracking-wider mt-1">
                          EDITORE: YOUCANPRINT / ESPRESSO • ANNO 2005 / 2011
                        </p>
                      </div>
                    </div>
                  ) : readerPage === 1 && selectedBook.id === 'book-archetipi-simboli' ? (
                    <div className="py-10 text-center flex flex-col justify-between min-h-[350px] border-4 border-double border-amber-600/30 rounded-2xl p-6 bg-amber-50/20 max-w-sm mx-auto shadow-inner relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 border border-amber-600/15 rounded-xl pointer-events-none" />
                      <div>
                        <span className="text-[10px] font-mono text-amber-700 tracking-widest uppercase block mb-6 font-black">
                          • SINCRONISMO CREATIVO •
                        </span>
                        <h1 className="text-2xl font-serif font-black text-amber-950 leading-tight tracking-wide mb-2 uppercase">
                          ARCHETIPI, SIMBOLI E SINCRONICITÀ
                        </h1>
                        <span className="text-[9px] text-amber-800 font-mono tracking-wider font-bold block mb-1">
                          MANIFESTARE CON GLI EVENTI PARALLELI
                        </span>
                      </div>

                      <div className="my-[40px]">
                        <div className="w-16 h-14 rounded-full border-2 border-amber-500 bg-amber-50 text-[10px] font-serif tracking-widest font-bold text-amber-600 flex flex-col items-center justify-center mx-auto shadow-md select-none">
                          <span className="leading-none block font-black text-[9px]">AIC</span>
                          <span className="text-[5.5px] leading-none block font-sans tracking-wide uppercase">ARTE &amp; SCIENZA</span>
                        </div>
                      </div>

                      <div className="border-t border-amber-200 pt-4 mt-4">
                        <p className="text-[10px] font-mono text-amber-900 leading-none">
                          AUTORE: <span className="font-bold text-black uppercase">LUCA FALACE</span>
                        </p>
                        <p className="text-[8.5px] font-mono text-amber-600 tracking-wider mt-1">
                          EDITORE: CENTRO CULTURALE ARTE &amp; SCIENZA • ANNO 2005
                        </p>
                      </div>
                    </div>
                  ) : readerPage === 1 && selectedBook.id === 'book-archetipi-vol3' ? (
                    <div className="py-10 text-center flex flex-col justify-between min-h-[350px] border-4 border-double border-purple-600/30 rounded-2xl p-6 bg-purple-50/20 max-w-sm mx-auto shadow-inner relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 border border-purple-600/15 rounded-xl pointer-events-none" />
                      <div>
                        <span className="text-[10px] font-mono text-purple-700 tracking-widest uppercase block mb-6 font-black">
                          • LAPIS PHILOSOPHORUM •
                        </span>
                        <h1 className="text-2xl font-serif font-black text-purple-950 leading-tight tracking-wide mb-2 uppercase">
                          ARCHETIPI, SIMBOLI, SINCRONICITÀ
                        </h1>
                        <span className="text-[10px] text-purple-800 font-mono tracking-wider font-bold block mb-1">
                          ALCHIMIA SPIRITUALE • VOLUME III
                        </span>
                      </div>

                      <div className="my-[40px]">
                        <div className="w-16 h-14 rounded-full border-2 border-purple-500 bg-purple-50 text-[10px] font-serif tracking-widest font-bold text-purple-600 flex flex-col items-center justify-center mx-auto shadow-md select-none">
                          <span className="leading-none block font-black text-[9px]">VOL. III</span>
                          <span className="text-[5.5px] leading-none block font-sans tracking-wide uppercase text-purple-500">ALCHIMIA</span>
                        </div>
                      </div>

                      <div className="border-t border-purple-200 pt-4 mt-4">
                        <p className="text-[10px] font-mono text-purple-900 leading-none">
                          AUTORE: <span className="font-bold text-black uppercase">LUCA FALACE</span>
                        </p>
                        <p className="text-[8.5px] font-mono text-purple-600 tracking-wider mt-1">
                          EDITORE: CENTRO CULTURALE ARTE &amp; SCIENZA • ANNO 2005
                        </p>
                      </div>
                    </div>
                  ) : readerPage === 1 && selectedBook.id === 'book-mythos-spazio' ? (
                    <div className="py-10 text-center flex flex-col justify-between min-h-[350px] border-4 border-double border-yellow-600/30 rounded-2xl p-6 bg-yellow-50/20 max-w-sm mx-auto shadow-inner relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 border border-yellow-600/15 rounded-xl pointer-events-none" />
                      <div>
                        <span className="text-[10px] font-mono text-[#0066CC] tracking-widest uppercase block mb-6 font-black">
                          • MYTHOS, SPAZIO E TEMPO •
                        </span>
                        <h2 className="text-2xl font-serif font-black text-amber-950 leading-tight tracking-wide mb-2 uppercase">
                          LA CONOSCENZA EVOLUTIVA
                        </h2>
                        <span className="text-[10px] text-slate-600 font-mono tracking-wider font-bold block mb-1">
                          COINCIDENZE NELL'ARTE, MITI E LEGGENDE
                        </span>
                      </div>

                      <div className="my-[40px]">
                        <div className="w-16 h-14 rounded-full border-2 border-yellow-500 bg-yellow-50 text-[10px] font-serif tracking-widest font-bold text-yellow-600 flex flex-col items-center justify-center mx-auto shadow-md select-none">
                          <span className="leading-none block font-black text-[9px]">MYTHOS</span>
                          <span className="text-[5.5px] leading-none block font-sans tracking-wide uppercase text-yellow-600">VOL. II</span>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-4 mt-4">
                        <p className="text-[10px] font-mono text-slate-700 leading-none">
                          AUTORE: <span className="font-bold text-black uppercase">LUCA FALACE</span>
                        </p>
                        <p className="text-[8.5px] font-mono text-slate-500 tracking-wider mt-1">
                          EDITORE: BOOKS ON DEMAND • ANNO 2018
                        </p>
                      </div>
                    </div>
                  ) : readerPage === 17 && (selectedBook.id === 'book-celeste' || selectedBook.id === 'book-celeste-ristampa') ? (
                    /* Page 17 consultation block style for L'Opera Celeste */
                    <div className="text-center py-6 space-y-4">
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto border-2 border-red-300">
                        <Lock className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-serif font-black text-base uppercase text-red-950 tracking-wide">
                        LIMITE DI ANTEPRIMA RAGGIUNTO
                      </h4>
                      
                      <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto font-sans">
                        La riproduzione parziale di questa monografia statale (pagine 1–16) adibita alla valorizzazione scientifica si ferma qui per accordi commerciali. L'Opera Celeste è tutelata da copyright SBN statale in Firenze e Roma.
                      </p>

                      <div className="p-4 bg-white border-2 border-black rounded-2xl max-w-sm mx-auto shadow-sm space-y-3">
                        <div className="text-[9px] font-mono text-[#0066CC] font-bold block uppercase leading-none">
                          Incentivo Sviluppo &amp; Acquisto
                        </div>
                        <h5 className="font-serif font-bold text-xs text-slate-800 leading-snug">
                          Acquista la copia originale completa per consultare i 41 schemi idraulici, le 12 Rivelazioni, ed il Saggio clinico.
                        </h5>
                        
                        <div className="pt-2 flex flex-col gap-2">
                          <a
                            href={selectedBook.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-[#0066CC] hover:bg-black text-white text-xs font-mono font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Acquista su Payhip</span>
                          </a>
                          
                          <a
                            href="https://www.amazon.it/gp/product/B008KA6PPQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-350 text-xs font-mono font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 uppercase transition-all active:scale-95 cursor-pointer"
                          >
                            <span className="text-yellow-500 font-serif">a</span>
                            <span>Acquista su Amazon</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : readerPage === 17 && selectedBook.id === 'book-tu-sei' ? (
                    /* Page 17 consultation block style for TU SEI */
                    <div className="text-center py-6 space-y-4">
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto border-2 border-red-300">
                        <Lock className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-serif font-black text-base uppercase text-red-950 tracking-wide">
                        ANTEPRIMA EDITORIALE COMPLETA
                      </h4>
                      
                      <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto font-sans">
                        La riproduzione parziale di questa monografia statale (pagine 1–16) adibita alla valorizzazione scientifica si ferma qui per accordi commerciali. Il saggio «TU SEI: Sincronismi, Coincidenze, Sincronicità» è tutelato e depositato SIAE Olafs.
                      </p>

                      <div className="p-4 bg-white border-2 border-black rounded-2xl max-w-sm mx-auto shadow-sm space-y-3">
                        <div className="text-[9px] font-mono text-[#0066CC] font-bold block uppercase leading-none">
                          Incentivo Sviluppo &amp; Acquisto
                        </div>
                        <h5 className="font-serif font-bold text-xs text-slate-800 leading-snug">
                          Acquista la copia originale completa per consultare i 10 capitoli integrali, il Compendio degli Eventi Paralleli, ed il Saggio clinico.
                        </h5>
                        
                        <div className="pt-2 flex flex-col gap-2">
                          <a
                            href={selectedBook.link || "https://payhip.com/LucArtStudio"}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-[#0066CC] hover:bg-black text-white text-xs font-mono font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Acquista su Payhip</span>
                          </a>
                          
                          <a
                            href="https://www.amazon.it/TU-SEI-Sincronismi-Coincidenze-Sincronicit%C3%A0/dp/8866181292"
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-350 text-xs font-mono font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 uppercase transition-all active:scale-95 cursor-pointer"
                          >
                            <span className="text-yellow-500 font-serif">a</span>
                            <span>Acquista su Amazon</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : readerPage === 17 && selectedBook.id === 'book-archetipi-simboli' ? (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto border-2 border-red-300">
                        <Lock className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-serif font-black text-base uppercase text-red-950 tracking-wide">
                        LIMITE DI ANTEPRIMA RAGGIUNTO
                      </h4>
                      
                      <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto font-sans">
                        La riproduzione parziale di questa monografia statale (pagine 1–16) si ferma qui per accordi editoriali. Il saggio «ARCHETIPI, SIMBOLI E SINCRONICITÀ» è registrato e tutelato SIAE OLAF.
                      </p>

                      <div className="p-4 bg-white border-2 border-black rounded-2xl max-w-sm mx-auto shadow-sm space-y-3">
                        <div className="text-[9px] font-mono text-[#0066CC] font-bold block uppercase leading-none">
                          Opera Completa per lo Studio dei Sincronismi
                        </div>
                        <h5 className="font-serif font-bold text-xs text-slate-800 leading-snug">
                          Acquista la copia originale completa per consultare i 12 capitoli originali e l'esposizione clinica sul Sincronismo Creativo.
                        </h5>
                        
                        <div className="pt-2 flex flex-col gap-2">
                          <a
                            href={selectedBook.link || "https://payhip.com/LucArtStudio"}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-[#0066CC] hover:bg-black text-white text-xs font-mono font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Acquista su Payhip</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : readerPage === 17 && selectedBook.id === 'book-archetipi-vol3' ? (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto border-2 border-red-300">
                        <Lock className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-serif font-black text-base uppercase text-red-950 tracking-wide">
                        LIMITE DI ANTEPRIMA RAGGIUNTO
                      </h4>
                      
                      <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto font-sans">
                        La riproduzione parziale di questa monografia statale (pagine 1–16) si ferma qui per accordi editoriali. Il volume «ARCHETIPI, SIMBOLI, SINCRONICITÀ VOL. III» è depositato SIAE OLAF.
                      </p>

                      <div className="p-4 bg-white border-2 border-black rounded-2xl max-w-sm mx-auto shadow-sm space-y-3">
                        <div className="text-[9px] font-mono text-[#0066CC] font-bold block uppercase leading-none">
                          Lapis Philosophorum - Alchimia Spirituale
                        </div>
                        <h5 className="font-serif font-bold text-xs text-slate-800 leading-snug">
                          Acquista il testo integrale comprensivo degli studi comparativi Cabala-Chakra, le meditazioni Kundalini e il Saggio sul Risveglio.
                        </h5>
                        
                        <div className="pt-2 flex flex-col gap-2">
                          <a
                            href={selectedBook.link || "https://payhip.com/LucArtStudio"}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-[#0066CC] hover:bg-black text-white text-xs font-mono font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Acquista su Payhip</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : readerPage === 17 && selectedBook.id === 'book-mythos-spazio' ? (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto border-2 border-red-300">
                        <Lock className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-serif font-black text-base uppercase text-red-950 tracking-wide">
                        LIMITE DI ANTEPRIMA RAGGIUNTO
                      </h4>
                      
                      <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto font-sans">
                        La riproduzione parziale di questa monografia statale (pagine 1–16) adibita alla valorizzazione scientifica si ferma qui per accordi commerciali SBN.
                      </p>

                      <div className="p-4 bg-white border-2 border-black rounded-2xl max-w-sm mx-auto shadow-sm space-y-3">
                        <div className="text-[9px] font-mono text-[#0066CC] font-bold block uppercase leading-none">
                          La Conoscenza Evolutiva
                        </div>
                        <h5 className="font-serif font-bold text-xs text-slate-800 leading-snug">
                          Acquista la copia originale per consultare la Cronologia Evolutiva completa e lo studio comparato sui miti degli angeli e antiche civiltà.
                        </h5>
                        
                        <div className="pt-2 flex flex-col gap-2">
                          <a
                            href={selectedBook.link || "https://payhip.com/LucArtStudio"}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="bg-[#0066CC] hover:bg-black text-white text-xs font-mono font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Acquista su Payhip</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    activePageData.content
                  )}

                </div>
              </div>
            </div>

            {/* Bottom Navigation & Buy bar */}
            <div className={`px-5 py-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0 shadow-lg ${
              readerTheme === 'sepia' ? 'border-[#E6DEC9] bg-[#F3ECE1]' : readerTheme === 'dark' ? 'border-zinc-800 bg-[#1D1D20]' : 'border-slate-100 bg-slate-50'
            }`}>
              
              {/* Pages indicators */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setReaderPage(Math.max(1, readerPage - 1));
                    document.getElementById('book-content-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={readerPage === 1}
                  className="px-3.5 py-1.5 bg-white border border-slate-300 hover:border-black rounded-lg text-xs font-mono font-bold text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer select-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="text-xs font-mono font-bold text-slate-700 px-3 py-1 bg-white border border-slate-200 rounded-md">
                  Pagina <span className="text-[#0066CC] font-bold">{readerPage}</span> di {currentBookPages.length}
                </span>

                <button
                  onClick={() => {
                    setReaderPage(Math.min(currentBookPages.length, readerPage + 1));
                    document.getElementById('book-content-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={readerPage === currentBookPages.length}
                  className="px-3.5 py-1.5 bg-white border border-slate-300 hover:border-black rounded-lg text-xs font-mono font-bold text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer select-none"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Buying incentive Call to Action */}
              <div className="flex items-center gap-3">
                {selectedBook.link && (
                  <a
                    href={selectedBook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="px-5 py-2 bg-[#0066CC] hover:bg-black text-white text-xs font-mono font-bold rounded-lg uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all hover:scale-103 active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-white" />
                    <span>Acquista Testo Completo</span>
                  </a>
                )}
                <span className="text-[10px] font-mono text-[#0066CC] font-black uppercase text-center shrink-0 border border-dashed border-[#0066CC]/30 px-2 py-1 rounded">
                  ★ SBN COERENTE
                </span>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
