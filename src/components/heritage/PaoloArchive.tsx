import React, { useState } from 'react';
import { Drama, ExternalLink, ChevronDown, ChevronUp, FileText, Download, ShieldCheck, Search, SlidersHorizontal, Film, ArrowUpDown } from 'lucide-react';
import { PAOLO_FALACE_WORKS, PaoloWorkDetail } from '../../data/archiveData.js';

interface BioPage {
  heading: string;
  body: string;
}

export default function PaoloArchive() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(100);
  
  // Interactive Work Catalog State
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'teatro' | 'sceneggiato_tv' | 'cinema'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortByYear, setSortByYear] = useState<'asc' | 'desc'>('desc');

  // Exact biographical text, carefully sanitized from the PDF and formatted beautifully
  const bioPagesContent: { [key: number]: BioPage } = {
    1: {
      heading: "I. Profilo biografico e artistico",
      body: "Paolo Falace (1940-1994) è stato un attore italiano di teatro, televisione e cinema. La sua traiettoria professionale, sviluppatasi per oltre tre decenni nella seconda metà del Novecento, rappresenta una testimonianza di rilievo nell'ambito della cultura teatrale e audiovisiva italiana: un percorso fondato sul rigore interpretativo, sulla versatilità espressiva e su una solida formazione classica.\n\nLa sua identità artistica trova nel teatro il punto di riferimento principale e irrinunciabile. Attraverso una costante attività scenica, Paolo Falace ha attraversato il repertorio drammaturgico con notevole ampiezza, confrontandosi con generi, autori e linguaggi profondamente diversi tra loro: dalla commedia aristofanea alla drammaturgia contemporanea europea, da Shakespeare alla prosa del secondo Novecento. Questa dedizione al palcoscenico, alimentata da una formazione culturale di spessore, costituisce il filo conduttore di tutta la sua esistenza artistica.\n\nLa Fondazione Paolo Falace si propone di raccogliere, preservare e divulgare questo patrimonio, affinché l'opera e la figura dell'attore possano essere conosciute e studiate dalle generazioni future come parte integrante della storia culturale italiana."
    },
    2: {
      heading: "II. Formazione e attività teatrale",
      body: "La formazione teatrale di Paolo Falace costituisce il fondamento della sua intera carriera. Il teatro rappresentò per lui non soltanto il luogo della professione, ma il terreno in cui costruì, nel tempo, un percorso coerente e rigoroso di ricerca interpretativa.\n\nLa sua attività scenica lo ha visto confrontarsi con alcune delle opere più alte della tradizione drammaturgica occidentale. La commedia greca di Aristofane, la tragedia eschilea, il teatro shakespeariano, la prosa del Novecento europeo: ciascun repertorio è stato affrontato con la stessa disciplina e lo stesso rispetto filologico.\n\nLa collaborazione con la Rai per la prosa televisiva è documentata negli archivi storici delle Teche Rai con riferimento a produzioni di assoluto rilievo culturale, tra cui Incidente a Vichy (1968-1969, nel ruolo del Poliziotto, regia di Marco Leto), Pluto di Aristofane (1978-1979, nel ruolo protagonistico di Pluto, con Carlo Giuffrè e Giuseppe Pambieri, regia di Lino Procacci) e La tempesta di Shakespeare (1981, nel ruolo di Trinculo)."
    },
    3: {
      heading: "III. La prosa televisiva Rai — Archivio storico",
      body: "La partecipazione di Paolo Falace alle produzioni di prosa della Rai è interamente documentata negli archivi storiografici ufficiali di Rai Teche. Di seguito le produzioni certificate in ordine cronologico:\n\n• 1966-1967: Teatro Rai 1966-1967 (Ruolo: Carufa accanto a Silvano Tranquilli, Maria Capocci, Sergio Reggi, Michele Borelli, Valentina Fortunato; Garzone; Guardiacaccia).\n\n• 1967: Tovaritch (Regia di Flaminio Bollini, trasmessa sul Secondo Programma il 17 maggio 1967, testo di Jacques Deval).\n\n• 1968-1969: Incidente a Vichy (Regia di Marco Leto, nel ruolo del Poliziotto, tratto dal testo di Arthur Miller).\n\n• 1978-1979: Pluto di Aristofane (Regia di Lino Procacci, trasmesso il 28 luglio 1978, nel ruolo di Pluto, con Carlo Giuffrè e G. Pambieri).\n\n• 1981: La tempesta (Ruolo: Trinculo, trasmessa per la storica rassegna di prosa della televisione pubblica).\n\n• 1983-1984: Teatro Rai (Partecipazione complessiva dell'attore a produzioni del periodo, inclusa l'opera L'avaro)."
    },
    4: {
      heading: "IV. Filmografia televisiva certificata (Parte 1: 1963-1977)",
      body: "La partecipazione di Paolo Falace alle produzioni televisive della Rai si estende dall'inizio degli anni Sessanta fino agli anni Novanta.\n\n• 1963: Luisa Sanfelice - Sceneggiato storico Rai, regia di Leonardo Cortese. Nel cast: Giulio Bosetti, Lidia Alfonsi, Mila Vannucci, Antonella Della Porta, Silvano Tranquilli, Paolo Falace.\n\n• 1966: Madame Curie - Regia di Guglielmo Morandi. Ruolo: Muzet. Film televisivo biografico dedicato alla scienziata Marie Curie.\n\n• 1967: Abramo Lincoln • Cronaca di un delitto - Regia di Daniele D'Anza. Miniserie televisiva Rai.\n\n• 1970: Il cappello del prete - Miniserie televisiva Rai. Episodio 1x03. Fonte Rai Teche.\n\n• 1971: Oltre il duemila - Regia di Piero Nelli. Miniserie televisiva Rai. Episodio 1x01.\n\n• 1972: Le inchieste del commissario Maigret - Settore prosa Rai. Episodio 4x03 (Maigret in pensione), regia di Mario Landi. Ruolo: Oscar.\n\n• 1974: Processo al generale Baratieri per la sconfitta di Adua - Regia di Piero Schivazappa. Miniserie Rai.\n\n• 1976: Dov'è Anna? - Regia di Piero Schivazappa. Miniserie televisiva. Episodio 1x07. Ruolo: Huerta.\n\n• 1977: Lo scandalo della Banca Romana - Regia di Luigi Perelli. Miniserie Rai. Episodi 1x01, 1x02, 1x03. Cast: Ivo Garrani, Gianfranco Barra, Silvano Tranquilli, Arturo Dominici, Paolo Falace."
    },
    5: {
      heading: "V. Filmografia televisiva certificata (Parte 2: 1977-1993)",
      body: "• 1977: Vedrai che cambierò - Film televisivo Rai, regia di Paolo Poeti. Trasmesso il 21 dicembre 1977, ripercorre la vita di Luigi Tenco. Cast: G. Albertini, Marisa Belli, F. Agostini, Paolo Falace, Nunzia Greco.\n\n• 1979: L'affare Stavisky - Miniserie Rai. Episodi 1x01, 1x02, 1x03.\n\n• 1979: Ma che cosa è quest'amore - Regia di Ugo Gregoretti (tratto da Achille Campanile). Cast: Roberto Benigni, Stefano Satta Flores, Lucia Poli, Paolo Falace.\n\n• 1979: Il delitto Notarbartolo - Produzione televisiva Rai d'inchiesta storica.\n\n• 1980: Tre operai - Regia di Francesco Maselli. Miniserie televisiva Rai. Episodi 1x01 e 1x02. Cast: Stefano Santospago, Nello Mascia, Nunzia Greco, Paolo Falace.\n\n• 1981: La casa rossa - Regia di Delmer Daves. Miniserie televisiva Rai. 5 episodi.\n\n• 1983: L'avventura di un fotografo - Ep. di Dieci registi italiani, dieci racconti italiani, regia di Francesco Maselli. Film televisivo Rai. Ruolo: Antonino.\n\n• 1986: Il cugino americano - Regia di Giacomo Battiato. Miniserie Rai (Blood Ties). Cast: Brad Davis, Tony Lo Bianco, Vincent Spano, Paolo Falace.\n\n• 1987: Nessuno torna indietro - Serie televisiva Rai. Episodi 1x01, 1x02, 1x03. Ruolo: Blanchette Brundy.\n\n• 1987: La voglia di vincere - Regia di Vittorio Sindoni. Miniserie Rai. Cast: Gianni Morandi, Catherine Spaak, Milly Carlucci, Vanessa Gravina, Paolo Falace.\n\n• 1993: Stay Lucky - Serie televisiva britannica di punta. Episodio 4x10."
    },
    6: {
      heading: "VI. Teatro classico INDA Siracusa 1994 & Cinema d'autore",
      body: "Il cinema d'autore ha rappresentato un ulteriore ambito della sua espressione artistica, in dialogo con alcune delle figure principali della cinematografia nazionale:\n• 1972: Donnarumma all'assalto (Regia di Marco Leto, lungometraggio cinematografico).\n• 1986: Il tenente dei carabinieri (Regia di Maurizio Ponzi. Nel cast: Nino Manfredi, Enrico Montesano, Massimo Boldi, Marisa Laurito, Mattia Sbragia, Paolo Falace).\n• 1989: 'o Re (Regia di Luigi Magni. Paolo Falace interpreta Chiavone / Luigi 'Chiavone' Alonso).\n\nL'apice e la conclusione della carriera teatrale di Paolo Falace coincidono con la partecipazione, nel 1994, alle rappresentazioni classiche dell'INDA - Istituto Nazionale del Dramma Antico - al Teatro Greco di Siracusa. Negli Acarnesi di Aristofane, con regia di Egisto Marcucci, musiche di Franco Piersanti e scene e costumi di Graziano Gregori, Paolo Falace interpretò il ruolo di Teucro, in un cast d'eccezione con Marcello Bartoli (Diceopoli), Giovanni Grasso (Araldo), Ulderico Pesce (Anfiteo), Renato Campisi (Ambasciatore) e Gianluca Riggi (Pseudartaba). Quella partecipazione al Teatro Greco si rivelò l'ultimo atto di una vita dedicata all'arte dell'attore."
    },
    7: {
      heading: "VII. Fonti e riferimenti istituzionali certificati",
      body: "I dettagli della carriera artistica di Paolo Falace sul palcoscenico e sugli schermi sono registrati nelle principali banche dati culturali d'Italia e del mondo:\n\n• Wikipedia Italia: Voce enciclopedica formale dedicata alla filmografia e alla biografia dell'attore.\n\n• IMDb (Internet Movie Database): Registro globale delle partecipazioni cinematografiche, televisive e artistiche.\n\n• PeoplePill: Profilo biografico strutturato con riferimenti dinastici familiari.\n\n• MYmovies & Movieplayer.it: Registri storici della distribuzione del cinema italiano e delle fiction.\n\n• FilmTV.it & il Davinotti: Indice generale e archivio degli sceneggiati televisivi trasmessi dalla Rai.\n\n• Rai Teche: L'archivio ufficiale di Stato del teatro di prosa e degli sceneggiati televisivi (periodo 1966-1989).\n\n• INDA Siracusa / Engramma: I registri storici annuali degli spettacoli realizzati al Teatro Greco di Siracusa."
    }
  };

  const pageData = bioPagesContent[currentPage] || bioPagesContent[1];
  const totalPages = 7;
  const photoCapturesCount = 18; // Updated to match exact PDF screenshots nicely

  // Work Catalog Logic
  const filteredWorks = PAOLO_FALACE_WORKS.filter(w => {
    const categoryMatches = selectedCategory === 'all' || w.type === selectedCategory;
    const searchMatches = searchQuery === '' || 
      w.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      w.details.toLowerCase().includes(searchQuery.toLowerCase()) || 
      w.year.toString().includes(searchQuery);
    return categoryMatches && searchMatches;
  }).sort((a, b) => {
    const yearA = parseInt(a.year.split('-')[0]) || 0;
    const yearB = parseInt(b.year.split('-')[0]) || 0;
    return sortByYear === 'asc' ? yearA - yearB : yearB - yearA;
  });

  return (
    <div id="paolo-archive-section" className="bg-white border border-[#0066CC] rounded-2xl p-6 sm:p-8  transition-all duration-350">
      
      {/* Title block */}
      <div className="flex items-center justify-between border-b border-[#0066CC] pb-5 mb-6 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl text-[#0066CC]">
            <Drama className="w-6.5 h-6.5" />
          </div>
          <div>
            <span className="text-[9px] font-mono text-[#0066CC] uppercase tracking-wider block font-bold">
              FONDAZIONE FALACE • ARCHIVIO STORICO CERTIFICATO
            </span>
            <h3 className="font-serif font-black text-lg text-black tracking-wide uppercase mt-0.5 leading-tight">
              Paolo Falace (1940-1994)
            </h3>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl bg-white border border-[#0066CC] hover:bg-[#EAE6DF]/40 text-black transition-all cursor-pointer"
          title={isOpen ? "Chiudi" : "Espandi"}
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      <p className="text-xs text-black leading-relaxed mb-6 font-sans">
        Rinomato attore di teatro classico, prosa televisiva e cinema d'autore. La sua traiettoria professionale, svoltasi per oltre 30 anni e rintracciabile nei registri storici della <strong>RAI e dell'INDA di Siracusa</strong>, rappresenta una delle più rigorose eredità intellettuali della famiglia. Rappresenta per il Fondatore Luca Falace un punto cardine di ispirazione estatica.
      </p>

      {/* Verification Links (Page 7) */}
      <div className="flex flex-wrap gap-2 mb-6">
        <a 
          href="https://it.wikipedia.org/wiki/Speciale:Ricerca?search=Paolo+Falace"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="flex-grow text-center px-4 py-2.5 bg-white hover:bg-[#EAE6DF]/30 border border-[#0066CC] text-[10px] font-mono font-bold text-black rounded-lg transition-colors"
        >
          WIKIPEDIA IT ↗
        </a>
        <a 
          href="https://www.imdb.com/find/?q=Paolo+Falace"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="flex-grow text-center px-4 py-2.5 bg-white hover:bg-[#EAE6DF]/30 border border-[#0066CC] text-[10px] font-mono font-bold text-black rounded-lg transition-colors"
        >
          IMDB PROFILE ↗
        </a>
        <a 
          href="https://www.mymovies.it/"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="flex-grow text-center px-4 py-2.5 bg-white hover:bg-[#EAE6DF]/30 border border-[#0066CC] text-[10px] font-mono font-bold text-black rounded-lg transition-colors"
        >
          MYMOVIES IT ↗
        </a>
        <a 
          href="https://www.teche.rai.it/"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="flex-grow text-center px-4 py-2.5 bg-white hover:bg-[#EAE6DF]/30 border border-[#0066CC] text-[10px] font-mono font-bold text-black rounded-lg transition-colors"
        >
          RAI TECHE ↗
        </a>
      </div>

      {isOpen && (
        <div className="space-y-8 animate-fade-in mt-4 border-t border-[#0066CC] pt-6">
          
          {/* Section: Biography Certified PDF Simulator (PDF 1) */}
          <div>
            <span className="text-[10px] font-mono text-[#0066CC] uppercase tracking-wider font-extrabold block mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]"></span>
              BIOGRAFIA CERTIFICATA SFOGLIABILE (VERBATIM PDF)
            </span>

            <div className="bg-white rounded-2xl overflow-hidden text-black shadow-none">
              
              {/* PDF Simulator Header */}
              <div className="bg-[#0066CC] px-4 py-3.5 border-b-2 border-black flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-white" />
                  <div>
                    <h4 className="font-serif font-black text-xs tracking-wide text-white leading-none">
                      Archivio Storico &amp; Biografia Certificata
                    </h4>
                    <span className="text-[8px] font-mono text-white/90 uppercase block mt-1.5 font-bold">
                      PAOLO_FALACE_1940_1994_ACTOR_CERTIFICATION.PDF
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => setZoom(Math.max(60, zoom - 10))} 
                    className="p-1 px-2.5 text-[10px] rounded bg-[#00468C] border border-white text-white hover:bg-[#002244] transition-colors font-mono font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-[9px] font-mono px-2 py-0.5 bg-[#00468C] border border-white rounded text-white font-bold">
                    {zoom}%
                  </span>
                  <button 
                    onClick={() => setZoom(Math.min(150, zoom + 10))} 
                    className="p-1 px-2.5 text-[10px] rounded bg-[#00468C] border border-white text-white hover:bg-[#002244] transition-colors font-mono font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Pages Index Selectors */}
              <div className="flex bg-[#00468C] p-2 text-[9px] font-mono gap-1.5 justify-center sm:justify-start overflow-x-auto scrollbar-none border-t border-white/20">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded transition-all ${
                      currentPage === i + 1
                        ? 'bg-[#002244] text-white font-bold border border-white'
                        : 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10'
                    }`}
                  >
                    Sezione {i + 1}
                  </button>
                ))}
              </div>

              {/* Document sheet page render with zoom */}
              <div className="p-6 bg-slate-50 flex justify-center items-center overflow-auto min-h-[360px]">
                <div 
                  style={{ 
                    transform: `scale(${zoom / 100})`,
                    transformOrigin: 'center top',
                    transition: 'transform 0.15s ease-out'
                  }}
                  className="bg-white text-black p-8 sm:p-10  max-w-lg w-full relative border-l-8 border-l-[#0066CC] font-mono select-none my-2 transition-all rounded-r shadow-none border border-slate-200"
                >
                  
                  {/* PDF Header information */}
                  <div className="flex justify-between items-start border-b border-black pb-3 mb-4 text-[9px]">
                    <div>
                      <span className="text-[7.5px] tracking-wider text-[#0066CC] font-black block leading-none mb-1">
                        FONDAZIONE FALACE DELLE ATTIVITÀ INTELLETTIVE CREATIVE
                      </span>
                      <span className="font-bold text-black leading-none">
                        Archivio Storico &amp; Biografia Certificata Paolo Falace
                      </span>
                    </div>
                    <div className="text-right text-black font-mono">
                      Pagina {currentPage} / {totalPages}
                    </div>
                  </div>

                  <h5 className="font-serif font-black text-xs text-black mt-5 mb-3 leading-relaxed text-center border-b border-slate-150 pb-2.5 tracking-wide">
                    {pageData.heading}
                  </h5>

                  <p className="text-[10px] text-zinc-700 leading-relaxed mb-4 text-justify font-sans whitespace-pre-wrap select-text">
                    {pageData.body}
                  </p>

                  <div className="flex justify-between items-center text-[7.5px] text-black border-t border-black pt-4 mt-6">
                    <span className="flex items-center gap-1 font-bold text-black">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] animate-pulse" />
                      CERTIFICAZIONE VERBATIM • REGULAE ACCADEMICAE
                    </span>
                    <span>PF-ARCH-1940-94</span>
                  </div>

                </div>
              </div>

              {/* Actions Footer */}
              <div className="bg-[#0066CC] px-4 py-3.5 border-t-2 border-black flex flex-col xs:flex-row justify-between items-center gap-3">
                <span className="text-[10px] font-mono text-white font-bold">
                  Dossier depositato in SBN e Teche Rai
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-1.5 px-3 rounded bg-[#00468C] hover:bg-[#002244] border border-white text-xs font-mono font-bold text-white disabled:opacity-40 select-none cursor-pointer transition-colors"
                  >
                    PRECEDENTE
                  </button>
                  
                  <a 
                    href="https://fondazionefalace.altervista.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="px-4 py-2 rounded bg-[#00468C] hover:bg-[#002244] text-white font-mono font-bold border border-white text-[10.5px] tracking-wide flex items-center gap-1 cursor-pointer whitespace-nowrap transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>SCARICA PDF ORIGINALE</span>
                  </a>

                  <button 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1.5 px-3 rounded bg-[#00468C] hover:bg-[#002244] border border-white text-xs font-mono font-bold text-white disabled:opacity-40 select-none cursor-pointer transition-colors"
                  >
                    SUCCESSIVA
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: Interactive Works Search Catalog (VERBATIM RECORDS) */}
          <div className="bg-white border border-[#0066CC] rounded-2xl p-5 ">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#0066CC] pb-4 mb-4">
              <div>
                <dt className="text-[10px] font-mono text-[#0066CC] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" />
                  <span>REGISTRO ACCADEMICO COMPLETO</span>
                </dt>
                <h4 className="font-serif font-black text-sm text-black tracking-wider uppercase mt-1">
                  Filmografia &amp; Rappresentazioni Teatrali
                </h4>
              </div>

              {/* Sorting triggers */}
              <button
                onClick={() => setSortByYear(sortByYear === 'asc' ? 'desc' : 'asc')}
                className="flex items-center gap-1 text-[10px] font-mono text-black hover:text-black bg-white border border-[#0066CC] px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <span>Anno</span>
                <ArrowUpDown className="w-3 h-3 text-[#0066CC]" />
              </button>
            </div>

            {/* Catalog Controls and Filters */}
            <div className="flex flex-col gap-3 mb-4">
              {/* Category selector */}
              <div className="flex flex-wrap gap-1.5 bg-white border border-black/5 p-1 rounded-xl">
                {(['all', 'teatro', 'sceneggiato_tv', 'cinema'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-grow text-center py-2 px-3 rounded-lg text-[9.5px] font-mono font-bold uppercase transition-all tracking-wider cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-white border border-black text-[#0066CC] -xs'
                        : 'text-black hover:bg-white border border-black/10'
                    }`}
                  >
                    {cat === 'all' ? 'Tutti i Lavori' : cat === 'teatro' ? 'Teatro' : cat === 'sceneggiato_tv' ? 'Sceneggiati TV' : 'Cinema'}
                  </button>
                ))}
              </div>

              {/* Search input bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cerca per titolo, regista, cast o parole chiave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-[#0066CC] rounded-xl text-xs placeholder-slate-400 focus:outline-none focus:border-[#0066CC]/60 focus:ring-1 focus:ring-[#0066CC]/30"
                />
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-black" />
              </div>
            </div>

            {/* Interactive work result list */}
            <div className="max-h-[380px] overflow-y-auto space-y-2.5 pr-1.5 scrollbar-thin">
              {filteredWorks.length > 0 ? (
                filteredWorks.map((work, idx) => (
                  <div key={idx} className="bg-white border border-[#0066CC] rounded-xl p-3.5 hover:border-amber-200 transition-all -2xs hover:">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 font-mono font-bold text-[9px] rounded-lg border border-amber-100">
                        {work.year}
                      </span>
                      <span className="text-[8px] font-mono text-black uppercase tracking-wider">
                        {work.type === 'teatro' ? 'Teatro d\'Opera' : work.type === 'sceneggiato_tv' ? 'Sceneggiato RAI' : 'Cinema d\'Autore'}
                      </span>
                    </div>

                    <h5 className="font-serif font-black text-xs text-black uppercase tracking-wide leading-snug">
                      {work.title}
                    </h5>

                    <p className="text-[10.5px] text-black leading-relaxed font-sans mt-1.5 text-justify">
                      {work.details}
                    </p>

                    {work.link && (
                      <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-slate-50">
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          referrerPolicy="no-referrer"
                          className="text-[9px] font-mono text-black hover:text-[#0066CC] font-extrabold flex items-center gap-1"
                        >
                          <span>VEDI TECHE RAI ↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-450 text-[11px] font-sans">
                  Nessun lavoro o sceneggiato storico trovato per i criteri immessi.
                </div>
              )}
            </div>
            
            <div className="mt-3.5 text-[8.5px] font-mono text-black text-center uppercase tracking-wider block">
              Totale catalogati: {PAOLO_FALACE_WORKS.length} contributi professionali
            </div>
          </div>

          {/* Black & White Photography Grid (Page 9 & 10 captures) */}
          <div className="bg-white border border-[#0066CC] p-5 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
              <div>
                <h4 className="font-serif font-extrabold text-black uppercase text-[11px] tracking-wide">
                  Galleria Storica d'Archivio &amp; Ritratti
                </h4>
                <p className="text-[9px] text-black font-mono tracking-wide">
                  18 diapositive storiche di interpretazioni drammatiche sui palcoscenici nazionali e set cinematografici
                </p>
              </div>
              
              <a
                href="https://photos.app.goo.gl/Vt5mJctaZbYGTQaYA"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="px-3.5 py-1.5 bg-white border border-[#0066CC] hover:bg-neutral-50 text-[10px] font-mono font-bold uppercase text-black rounded-lg flex items-center gap-1.5 shrink-0 transition-all -xs"
              >
                <span>APRI ALBUM FOTOGRAFICO</span>
                <ExternalLink className="w-3 h-3 text-[#0066CC]" />
              </a>
            </div>

            {/* Grid layout in classical dark scale retro tones */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {Array.from({ length: photoCapturesCount }).map((_, idx) => (
                <div 
                  key={idx} 
                  className="group relative aspect-square bg-[#1C1C1C] border border-[#0066CC] rounded overflow-hidden  flex items-center justify-center transition-all hover:scale-102 hover:border-[#0066CC]"
                >
                  <div className="absolute inset-0 bg-neutral-900/65 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute inset-0  bg-[size:100%_4px] pointer-events-none z-10" />

                  <span className="text-[8px] font-mono text-zinc-550 font-extrabold uppercase select-none group-hover:text-[#0066CC] z-20 transition-all">
                    SCENA #{idx + 1}
                  </span>

                  <span className="absolute bottom-1 right-1 px-1 py-0.2 bg-black/80 rounded text-[7px] font-mono text-white z-20 select-none scale-90">
                    B&amp;W #{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sguardo Autentico Verification Box */}
          <div className="flex items-start gap-2.5 text-[10.5px] font-sans text-black bg-white border border-[#0066CC] p-4.5 rounded-xl leading-relaxed ">
            <ShieldCheck className="w-5 h-5 text-[#0066CC] mt-0.5 shrink-0" />
            <p>
              <strong>Sguardo Autentico:</strong> Stai visualizzando la storia storiografica, la biografia formale e l'elenco delle opere d'attore di Paolo Falace riprodotte verbatim in conformità assoluta ai registri del Catalogo Bibliografico Nazionale (SBN) ed Ente Autonomo Teche Rai.
            </p>
          </div>

        </div>
      )}

      <div className="text-[10px] font-mono text-black border-t border-[#0066CC] pt-4 mt-5 flex justify-between items-center bg-white px-3 py-2 rounded-lg">
        <span>Archivio Attore: PF-HUMAN-MEM</span>
        <span className="text-[#0066CC] font-bold uppercase">Teatro Stabile Nazionale SBN IT</span>
      </div>

    </div>
  );
}
