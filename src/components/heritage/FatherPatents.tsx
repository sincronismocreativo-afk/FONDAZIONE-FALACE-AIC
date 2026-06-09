import React, { useState } from 'react';
import { Award, Cpu, ShieldCheck, ExternalLink, ChevronDown, ChevronUp, FileText, Download, Search, Info, Landmark, Layers, Sparkles, Filter } from 'lucide-react';
import { LUCIO_FALACE_PATENTS, FatherPatentDetail } from '../../data/archiveData.js';

interface PdfDoc {
  id: string;
  filename: string;
  title: string;
  tagline: string;
  pagesCount: number;
  pagesContent: {
    [key: number]: {
      heading: string;
      body: string;
      tableData?: { col1: string; col2: string }[];
    }
  };
}

export default function FatherPatents() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'pdf-simulator' | 'datatable'>('pdf-simulator');
  const [activePdfId, setActivePdfId] = useState<string>("pdf-1");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(100);

  // Search & Filter State for WIPO 46 Patents Table
  const [patentSearch, setPatentSearch] = useState<string>('');
  const [patentOfficeFilter, setPatentOfficeFilter] = useState<string>('all');
  const [patentYearFilter, setPatentYearFilter] = useState<string>('all');

  // Exact verbatim storiographical layout from PDF 1 ("Dinastia Falace") and PDF 4 ("Aeromassaggiatore Scheda")
  const pdfDocuments: PdfDoc[] = [
    {
      id: "pdf-1",
      filename: "PDF1_ASSE_SCIENTIFICO_E_INVENTIVO_DINASTIA_FALACE.PDF",
      title: "Asse Scientifico e Inventivo — Dinastia Falace",
      tagline: "Quarant'anni di Innovazione Generazionale • Trasmissione di Sapere",
      pagesCount: 5,
      pagesContent: {
        1: {
          heading: "LA DINASTIA FALACE: QUARANT'ANNI DI INNOVAZIONE GENERAZIONALE",
          body: "La storia scientifica e inventiva della famiglia Falace non nasce da un'intuizione isolata. Si sviluppa lungo un arco di quarant'anni attraverso una trasmissione diretta di conoscenza tecnica tra padre e figlio, tra elettronica e meccanica, tra circuiti e fluidi, tra la mente che progetta i segnali e le mani che costruiscono le macchine.\n\nAl centro di questa storia ci sono tre figure: Lucio Falace, perito elettronico e inventore di respiro internazionale; Luca Falace, suo figlio, erede e continuatore della tradizione inventiva in chiave meccanica e poi teorica; e la Fondazione Falace delle Attività Intellettive Creative, che nasce per custodire, valorizzare e trasmettere questo patrimonio alle generazioni future.\n\nLa Fondazione non è un progetto nuovo. È il compimento logico e naturale di quarant'anni di ricerca applicata, validata dallo Stato Italiano e dagli uffici brevettuali internazionali.",
          tableData: [
            { col1: "Lucio Falace (Perito Elettronico)", col2: "Apportava la padronanza dell'elettronica di potenza, dei circuiti logici e della modulazione del segnale. La 'mente' elettronica del sistema." },
            { col1: "Luca Falace (Ergon-Robotica)", col2: "Contribuiva con le competenze in cinematica, dinamica dei fluidi ed ergonomia applicata. La struttura fisica e il movimento della macchina." }
          ]
        },
        2: {
          heading: "LE RADICI DELLA CIBERNETICA DI FAMIGLIA: GLI ANNI OTTANTA",
          body: "Il punto di origine si colloca negli anni Ottanta, quando l'Italia attraversava la sua età dell'oro della robotica sperimentale e della cibernetica applicata. In questo contesto, Lucio Falace e suo figlio Luca avviano congiuntamente lo studio e la progettazione di un sistema robotico pionieristico.\n\nIl motore comune era la cibernetica: la scienza che indaga i meccanismi di controllo e comunicazione negli organismi viventi e nelle macchine. I due operavano come un sistema integrato e complementare.\n\nQuesto nucleo di ricerca non era semplice passione hobbistica. Era ricerca sperimentale sul campo che anticipava di decenni l'integrazione tra hardware, biologia e controllo cognitivo che oggi definiamo meccatronica avanzata.\n\nDa quel primo robot degli anni Ottanta si può tracciare una linea evolutiva diretta verso tutte le invvenzioni successive: dall'Aeromassaggiatore (automazione dei flussi d'aria), al Compattatore GeniusOm (robotica applicata ai flussi urbani), fino all'Eco-Tuta Termodinamica (esoscheletro bioclimatico) e al sistema AIC-Sync (cibernetica cognitiva)."
        },
        3: {
          heading: "LUCIO FALACE: IL PATRIMONIO ESTERNO ED ENERGETICO",
          body: "Lucio Falace, fondatore della United Light Electronics Ltd, ha costruito nel corso della sua vita un patrimonio brevettuale di oltre 46 invenzioni internazionali depositate presso il WIPO Patentscope, dominando il campo dell'elettronica di potenza, della modulazione d'onda e dell'illuminotecnica applicata.\n\nIl suo lavoro ha attraversato decenni di innovazione nel settore energetico e dei dispositivi di controllo elettronico, con registrazioni in Italia, Singapore, Turchia e presso gli uffici PCT internazionali.\n\nLe sue invenzioni non rimasero confinate ai soli laboratori: la sua capacità brevettistica raggiunse il grande pubblico nazionale attraverso alcune delle trasmissioni televisive d'eccellenza del periodo d'oro dei media, come 'I Cervelloni' su Mediaset con Paolo Bonolis (dove si distinse vincendo il primo premio) ed ospitate nel Maurizio Costanzo Show, contribuendo alla cultura dell'innovazione tecnologica italiana."
        },
        4: {
          heading: "LUCA FALACE: IL PERCORSO INVENTIVO DEL FONDATORE",
          body: "Il Dott. Luca Falace si forma come Perito Meccanico con specializzazione in Ergon-Robotica, percorso in piena continuità con la tradizione inventiva paterna. La sua formazione tecnica copre la cinematica, la dinamica dei fluidi e l'ergonomia applicata, fondamenta di tutte le sue invenzioni pneumatiche.\n\nLa successiva laurea in Lettere con specializzazione in Storia dell'Arte e Antropologia Culturale non rappresenta una contraddizione. È la svolta che rende possibile la Teoria del Sincronismo Creativo. Senza la precisione cinematica non nascono il Compattatore GeniusOm né l'Eco-Tuta. Senza la comprensione antropologica non nasce il Sistema AIC-Sync.\n\nNel corso della sua prima fase inventiva, il Dott. Luca Falace concepisce e sviluppa il progetto dell'Aeromassaggiatore (prima applicazione mondiale della Terapia dell'Aria). Per non creare sovrapposizioni o rivalità economiche con il padre Lucio, scelse deliberatamente di intestare formalmente il brevetto alla sorella Viviana Falace e alla madre Anna De Martino: 'Non ti preoccupare, intestalo a Viviana. Non voglio entrare in competizione con papi.' Un supremo atto di rispetto filiale."
        },
        5: {
          heading: "VALIDAZIONE MINISTERIALE: 41 INVENZIONI A DATA CERTA",
          body: "A blindare legalmente l'attività inventiva multidisciplinare del Dott. Luca Falace interviene il deposito ufficiale presso il Ministero per i Beni e le Attività Culturali e per il Turismo (MiBACT), Direzione Generale Biblioteche e Istituti Culturali - Servizio II (Diritto d'Autore).\n\n• Volume depositato: 'INVENZIONI E BREVETTI DI LUCA FALACE: I CODICI FDL DELLE INVENZIONI'.\n• Codice ISBN: 978-1731477064.\n• Data di pubblicazione: 15 Novembre 2018 (Leipzig, Amazon Distribution).\n• Deposito MiBACT: Prot. 07/02/2020 Registro Pubblico Generale delle Opere Protette.\n• Legge di riferimento: Art. 103-105, L. 633/1941 Protezione del Diritto d'Autore.\n\nCon questo verbale, lo Stato Italiano certifica ufficialmente la patrimonialità e la paternità intellettuale di 41 invenzioni realizzate dal 1998 al 2018."
        }
      }
    },
    {
      id: "pdf-2",
      filename: "PDF2_SCHEDA_TECNICA_BREVETTUALE_AEROMASSAGGIATORE.PDF",
      title: "Scheda Tecnica — Aero-Massaggiatore & Terapia dell'Aria",
      tagline: "Specifiche originali del brevetto UIBM e tesi di anteriorità",
      pagesCount: 4,
      pagesContent: {
        1: {
          heading: "SCHEDA TECNICA E BREVETTUALE: AEROMASSAGGIATORE",
          body: "Il Dispositivo Aeromassaggiatore rappresenta la prima applicazione mondiale della Terapia dell'Aria: un macchinario progettato per trattare l'epidermide e i tessuti sottostanti tramite getti d'aria compressa ad impulsi calibrati, con variazioni di frequenza, intensità, temperatura ed umidità.\n\n• Idea e Invenzione: Dott. Luca Falace.\n• Creazione e Ingegnerizzazione: Lucio Falace (padre, Perito Elettronico).\n• Design e Pubblicità: Viviana Falace (sorella).\n• Produzione Commerciale: Promoitalia S.p.a con il marchio Prokaire.\n• Deposito UIBM: Verbale NA2004A000063 in data 11/11/2004.\n• Brevetto Internazionale: WO2006051414A1.\n\nLa paternità intellettuale dell'invenzione è del Dott. Luca Falace, documentata fin dal 1998 e certificata dalla pubblicazione nel volume 'L'Opera Celeste' (2005) anteriore alla data del deposito brevettuale.",
        },
        2: {
          heading: "IL CORPO UMANO E IL CONTATTO CON L'ARIA",
          body: "Questa macchina utilizza l'Aria, uno degli elementi più importanti presenti in Natura, per il benessere del corpo. Il massaggio ad aria è un sistema innovativo, unico al mondo, nato su queste basi.\n\n'La magia della mia geniale idea è stata quella di rendere questo unico elemento impalpabile, etereo, sottoforma di un flusso invisibile materiale, grazie alla canalizzazione dello stesso elemento. Il quale viene compresso, regolarizzato e indirizzato su qualsiasi zona del corpo umano.' — Dott. Luca Falace, 2010.\n\nNel contesto filosofico l'Aria è l'elemento etereo primordiale che massaggia il corpo, ricollegato alla tradizione spirituale del quarto chakra (il cuore, centro dell'equilibrio), stimolando il Prana o Ki attraverso flussi d'aria calibrata."
        },
        3: {
          heading: "SINTESI DEI QUATTRO PILASTRI INVENTIVI",
          body: "L'asse inventivo della famiglia si consolida attorno a quattro invenzioni pilastro:\n\n1. Il Dispositivo Aeromassaggiatore (Terapia dell'Aria, 2004) - Trattamento dei tessuti mediante flussi pneumocorporali.\n\n2. Il Compattatore Multiplo Pneumatico GeniusOm (2013) - Macchinario per rifiuti urbani differenziati, premiato a Ecomondo 2014, con trattativa da 250 mila euro conclusa a Shark Tank.\n\n3. L'Eco-Tuta Integrale Termodinamica Climatizzata (2018) - Esoscheletro termoregolato passivo ed attivo per fini protettivi di emergenza.\n\n4. Il Sistema AIC-Sync (Cibernetica Cognitiva) - Monitoraggio e induzione dei picchi creativi in tempo reale mediante bio-feedback strutturati."
        },
        4: {
          heading: "VALORE LEGALE DEL BREVETTO INDUSTRIALE",
          body: "Di fronte ad obiezioni superficiali accademiche, la Fondazione stabilisce quanto segue:\n\nNel diritto industriale internazionale (regolato dagli uffici WIPO, PCT e UIBM) un brevetto viene concesso esclusivamente se l'invenzione soddisfa requisiti estremamente rigorosi d'esame tecnico:\n\n1. Novità assoluta (l'invenzione non deve esistere in alcuna parte del mondo).\n2. Attività inventiva (non deve essere ovvia per un perito del ramo).\n3. Applicabilità industriale (deve poter essere fabbricata o utilizzata).\n\nGli uffici brevettuali internazionali valutano la validità ingegneristica e l'innovazione scientifica tangibile del progetto, costituendo una prova giuridica inattaccabile di competenza tecnica superiore."
        }
      }
    }
  ];

  const currentPdf = pdfDocuments.find(p => p.id === activePdfId) || pdfDocuments[0];
  const maxPages = currentPdf.pagesCount;
  const pageData = currentPdf.pagesContent[currentPage] || currentPdf.pagesContent[1];

  const handlePageChange = (p: number) => {
    if (p >= 1 && p <= maxPages) {
      setCurrentPage(p);
    }
  };

  const selectPdf = (id: string) => {
    setActivePdfId(id);
    setCurrentPage(1);
  };

  // Filter 46 patents of Lucio Falace
  const filteredPatents = LUCIO_FALACE_PATENTS.filter(pat => {
    const matchesSearch = patentSearch === '' || 
      pat.code.toLowerCase().includes(patentSearch.toLowerCase()) || 
      pat.title.toLowerCase().includes(patentSearch.toLowerCase()) ||
      pat.year.toString().includes(patentSearch);
    
    const matchesOffice = patentOfficeFilter === 'all' || pat.office === patentOfficeFilter;
    const matchesYear = patentYearFilter === 'all' || pat.year.toString() === patentYearFilter;
    
    return matchesSearch && matchesOffice && matchesYear;
  });

  // Extract unique offices and years for filtering dropdowns
  const uniqueOffices = ['all', ...new Set(LUCIO_FALACE_PATENTS.map(p => p.office))];
  const uniqueYears = ['all', ...new Set(LUCIO_FALACE_PATENTS.map(p => p.year.toString()))].sort();

  return (
    <div id="father-patents-section" className="bg-white border border-[#0066CC] rounded-2xl p-6 sm:p-8  transition-all duration-300">
      
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-[#0066CC] pb-5 mb-6 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-2xl text-black">
            <Cpu className="w-6.5 h-6.5 animate-pulse" />
          </div>
          <div>
            <span className="text-[9px] font-mono text-[#0066CC] uppercase tracking-wider block font-bold">
              ASSE STORICO COGNITIVO • DINASTIA INVENTIVA
            </span>
            <h3 className="font-serif font-black text-lg text-black tracking-wide uppercase mt-0.5 leading-tight">
              Lucio Falace &amp; Dinastia
            </h3>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl bg-white border border-[#0066CC] hover:bg-[#EAE6DF]/40 text-black transition-all cursor-pointer"
          title={isOpen ? "Chiudi dettagli" : "Mostra dettagli"}
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      <p className="text-xs text-black leading-relaxed mb-6 font-sans">
        Il patrimonio di famiglia vanta <strong>oltre 46 brevetti internazionali</strong> depositati presso il <strong>WIPO Patentscope e Google Patents</strong>, dominando la modulazione d'onda, l'illuminotecnica e le scienze cibernetiche fin dagli anni Ottanta. Qui viene riprodotto verbatim l'intero asse storiografico e l'inventario integrale per tutele ed esplorazione accademica.
      </p>

      {/* Explorer Mode Selectors */}
      <div className="flex bg-white border border-[#0066CC] p-1.5 rounded-xl gap-2 mb-6">
        <button
          onClick={() => setActiveTab('pdf-simulator')}
          className={`flex-grow text-center py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
            activeTab === 'pdf-simulator'
              ? 'bg-white border border-black text-[#0066CC] '
              : 'text-black hover:bg-[#EAE6DF]/30'
          }`}
        >
          📄 Memorie &amp; Sguardo Autentico (PDF)
        </button>
        <button
          onClick={() => setActiveTab('datatable')}
          className={`flex-grow text-center py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
            activeTab === 'datatable'
              ? 'bg-white border border-black text-[#0066CC] '
              : 'text-black hover:bg-[#EAE6DF]/30'
          }`}
        >
          🔬 Registro WIPO dei 46 Brevetti Paterni
        </button>
      </div>

      {isOpen && (
        <div className="space-y-6 animate-fade-in mt-4">
          
          {/* TAB 1: PDF Simulator */}
          {activeTab === 'pdf-simulator' && (
            <div className="space-y-5">
              <span className="text-[10px] font-mono text-[#0066CC] uppercase tracking-wider font-extrabold block mb-1">
                DOSSIER STORICI SFOGLIABILI (COPIE VERBATIM CERTIFICATE)
              </span>

              <div className="bg-white rounded-2xl overflow-hidden text-black shadow-none">
                
                {/* Simulator Header Bar */}
                <div className="bg-[#0066CC] px-4 py-3.5 border-b-2 border-black flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-white" />
                    <div>
                      <h4 className="font-serif font-black text-xs tracking-wide text-white leading-none">
                        {currentPdf.title}
                      </h4>
                      <span className="text-[8px] font-mono text-white/90 uppercase block mt-1.5 leading-none">
                        {currentPdf.filename}
                      </span>
                    </div>
                  </div>

                  {/* Zoom Controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => setZoom(Math.max(60, zoom - 10))} 
                      className="p-1 px-2.5 text-[10px] rounded bg-[#00468C] border border-white text-white hover:bg-[#002244] transition-colors font-mono font-bold"
                    >
                      -
                    </button>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-[#00468C] border border-white rounded text-white font-bold">
                      {zoom}%
                    </span>
                    <button 
                      onClick={() => setZoom(Math.min(150, zoom + 10))} 
                      className="p-1 px-2.5 text-[10px] rounded bg-[#00468C] border border-white text-white hover:bg-[#002244] transition-colors font-mono font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Document Selector Tabs */}
                <div className="flex bg-[#00468C] text-[9.5px] font-mono font-bold uppercase tracking-wider scrollbar-none overflow-x-auto p-1 gap-0.5">
                  {pdfDocuments.map((doc, idx) => (
                    <button
                      key={doc.id}
                      onClick={() => selectPdf(doc.id)}
                      className={`px-4 py-2.5 rounded shrink-0 transition-colors cursor-pointer ${
                        activePdfId === doc.id 
                          ? 'bg-[#002244] text-white font-bold border-b-2 border-white' 
                          : 'bg-transparent text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {idx === 0 ? "Asse & Cibernetica" : "Scheda Aeromassaggiatore"}
                    </button>
                  ))}
                </div>

                {/* PDF Page Navigation */}
                <div className="flex bg-[#00468C] p-2 text-[9px] font-mono justify-center sm:justify-start flex-wrap gap-1.5 border-t border-white/20">
                  {Array.from({ length: maxPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-2.5 py-1 rounded transition-all ${
                        currentPage === i + 1
                          ? 'bg-[#002244] text-white font-bold border border-white'
                          : 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10'
                      }`}
                    >
                      Pagina {i + 1}
                    </button>
                  ))}
                </div>

                {/* Main Sheet Page Layer with zoom */}
                <div className="p-6 bg-slate-50 flex justify-center items-center overflow-auto min-h-[350px]">
                  <div 
                    style={{ 
                      transform: `scale(${zoom / 100})`,
                      transformOrigin: 'center top',
                      transition: 'transform 0.15s ease-out'
                    }}
                    className="bg-white text-black p-8 sm:p-10  max-w-lg w-full relative border-l-8 border-l-[#0066CC] font-mono select-none my-2 transition-all rounded-r"
                  >
                    
                    {/* Watermark logo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none">
                      <span className="text-4xl font-serif font-black rotate-45 border-4 border-slate-900 p-4 leading-none text-center">
                        FONDAZIONE<br />FALACE
                      </span>
                    </div>

                    {/* PDF header details */}
                    <div className="flex justify-between items-start border-b border-black pb-3 mb-4 text-[9px]">
                      <div>
                        <span className="text-[7.5px] tracking-wider text-[#0066CC] font-black uppercase block leading-none mb-1">
                          FONDAZIONE FALACE DELLE ATTIVITÀ INTELLETTIVE CREATIVE
                        </span>
                        <span className="font-bold text-black leading-none block mt-0.5 uppercase">
                          STUDI COGNITIVI E DEPOSITO CERTIFICATO D'INGEGNO
                        </span>
                      </div>
                      <div className="text-right text-black font-mono shrink-0 ml-2">
                        PAG. {currentPage} / {maxPages}
                      </div>
                    </div>

                    <h5 className="font-serif font-black text-xs text-[#0a1a36] mt-4 mb-3 leading-relaxed text-center border-b border-slate-150 pb-2.5 uppercase tracking-wide">
                      {pageData.heading}
                    </h5>

                    <p className="text-[10px] text-black leading-relaxed mb-5 whitespace-pre-wrap font-sans text-justify select-text">
                      {pageData.body}
                    </p>

                    {/* Render tableData if available */}
                    {pageData.tableData && (
                      <div className="border border-black rounded-lg overflow-hidden my-4 text-[9px] font-sans">
                        <table className="w-full text-left text-black border-collapse">
                          <thead>
                            <tr className="bg-white text-black font-bold border-b border-black uppercase text-[8px] tracking-wider">
                              <th className="p-2 border-r border-[#0066CC]">CONTRIBUTO TECNICO</th>
                              <th className="p-2">SPECIFICHE</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pageData.tableData.map((row, r_idx) => (
                              <tr key={r_idx} className="border-b border-black hover:bg-white/50 transition-colors">
                                <td className="p-2 border-r border-black font-black text-black bg-white/20">{row.col1}</td>
                                <td className="p-2 italic select-text">"{row.col2}"</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Legal signature stamp */}
                    <div className="flex justify-between items-center text-[7.5px] text-black border-t border-black pt-4 mt-6 font-mono font-medium">
                      <span className="flex items-center gap-1 font-bold text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                        CERTIFICAZIONE MINISTERIALE UFFICIALE REGOB [OK]
                      </span>
                      <span>REF: FF-PAT-{activePdfId.toUpperCase()}</span>
                    </div>

                  </div>
                </div>

                {/* Simulated Viewer Footer Bar */}
                <div className="bg-[#0066CC] px-4 py-3 border-t-2 border-black flex flex-col xs:flex-row justify-between items-center gap-3">
                  <span className="text-[10px] font-mono text-white font-bold">
                    Sguardo Autentico • {currentPage} di {maxPages} Pagg
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-1 px-3 rounded bg-[#00468C] hover:bg-[#002244] border border-white text-xs font-mono font-bold text-white disabled:opacity-40 select-none cursor-pointer transition-colors"
                    >
                      PRECEDENTE
                    </button>
                    
                    <a 
                      href="https://fondazionefalace.altervista.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded bg-[#00468C] hover:bg-[#002244] text-white font-mono font-bold border border-white text-[10.5px] tracking-wide flex items-center gap-1 cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>SCARICA PDF</span>
                    </a>

                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === maxPages}
                      className="p-1 px-3 rounded bg-[#00468C] hover:bg-[#002244] border border-white text-xs font-mono font-bold text-white disabled:opacity-40 select-none cursor-pointer transition-colors"
                    >
                      SUCCESSIVA
                    </button>
                  </div>
                </div>

              </div>

              {/* Alert box instructions */}
              <div className="flex items-start gap-2.5 text-[10.5px] font-sans text-black bg-white border border-[#0066CC] p-4.5 rounded-xl leading-relaxed ">
                <ShieldCheck className="w-5 h-5 text-indigo-700 mt-0.5 shrink-0" />
                <p>
                  <strong>Sguardo Autentico:</strong> Stai sfogliando i documenti editi riprodotti verbatim in fedeltà storiografica assoluta. Usa il pulsante rosso <strong>'SCARICA PDF'</strong> per prelevare il documento ufficiale d'epoca.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Verbatim WIPO patents table database */}
          {activeTab === 'datatable' && (
            <div className="bg-white border border-[#0066CC] rounded-2xl p-5  space-y-4">
              <div className="border-b border-[#0066CC] pb-3">
                <dt className="text-[10px] font-mono text-[#0066CC] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>REGISTRO GENERALE WIPO ED UIBM</span>
                </dt>
                <h4 className="font-serif font-black text-sm text-black tracking-wider uppercase mt-1">
                  Corpus Brevettuale Integrale • 46 Invenzioni di Lucio Falace
                </h4>
              </div>

              {/* Advanced Filter controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cerca brevetto (es. anti-shock, 1995)..."
                    value={patentSearch}
                    onChange={(e) => setPatentSearch(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-white border border-[#0066CC] rounded-xl text-xs placeholder-slate-400 focus:outline-none focus:border-[#0066CC]/60 focus:ring-1 focus:ring-[#0066CC]/30"
                  />
                  <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-black" />
                </div>

                {/* Office Filter */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-black uppercase shrink-0">Ufficio:</span>
                  <select
                    value={patentOfficeFilter}
                    onChange={(e) => setPatentOfficeFilter(e.target.value)}
                    className="w-full text-xs bg-white border border-[#0066CC] py-2 px-2.5 rounded-xl focus:outline-none focus:border-[#C8A85B]"
                  >
                    {uniqueOffices.map((office) => (
                      <option key={office} value={office}>
                        {office === 'all' ? 'Tutti gli Uffici' : `Ufficio ${office}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year Filter */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-black uppercase shrink-0">Anno:</span>
                  <select
                    value={patentYearFilter}
                    onChange={(e) => setPatentYearFilter(e.target.value)}
                    className="w-full text-xs bg-white border border-[#0066CC] py-2 px-2.5 rounded-xl focus:outline-none focus:border-[#C8A85B]"
                  >
                    <option value="all">Tutti gli anni</option>
                    {uniqueYears.filter(y => y !== 'all').map((year) => (
                      <option key={year} value={year}>
                        Anno {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Data Table */}
              <div className="border border-[#0066CC] rounded-xl overflow-hidden bg-white -2xs">
                <div className="overflow-x-auto max-h-[360px] scrollbar-thin">
                  <table className="w-full text-left border-collapse font-sans text-xs">
                    <thead>
                      <tr className="bg-white border border-black text-[#0066CC] text-[9px] font-mono font-bold uppercase tracking-wider sticky top-0 z-10">
                        <th className="p-3 border-b border-black w-12 text-center">N°</th>
                        <th className="p-3 border-b border-black w-32">Codice Brevetto</th>
                        <th className="p-3 border-b border-black">Titolo / Specifiche d'Invenzione</th>
                        <th className="p-3 border-b border-black w-16 text-center">Ufficio</th>
                        <th className="p-3 border-b border-black w-16 text-center">Anno</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE6DF]">
                      {filteredPatents.length > 0 ? (
                        filteredPatents.map((p, idx) => (
                          <tr key={p.num} className="hover:bg-white/50 transition-colors">
                            <td className="p-3 font-mono text-black font-bold text-center border-r border-[#0066CC]/40 bg-white/30">
                              {p.num}
                            </td>
                            <td className="p-3 font-mono font-black text-black select-text">
                              {p.code}
                            </td>
                            <td className="p-3 leading-relaxed text-slate-655 font-medium select-text">
                              {p.title}
                            </td>
                            <td className="p-3 font-mono text-center">
                              <span className={`px-2 py-0.5 rounded text-[9.5px] font-black uppercase ${
                                p.office === 'WO' 
                                  ? 'bg-white border border-black/10 text-black' 
                                  : p.office === 'IT' 
                                    ? 'bg-emerald-50 text-emerald-800' 
                                    : 'bg-neutral-100 text-neutral-800'
                              }`}>
                                {p.office}
                              </span>
                            </td>
                            <td className="p-3 font-mono font-bold text-center text-black">
                              {p.year}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-black font-sans italic">
                            Nessun brevetto corrispondente ai filtri impostati.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-black bg-white border border-[#0066CC] px-3.5 py-2.5 rounded-xl">
                <span>Database certificato sincronizzato WIPO ST.3</span>
                <span className="text-[#0066CC] font-extrabold">BREVETTI TROVATI: {filteredPatents.length} DI 46</span>
              </div>
            </div>
          )}

        </div>
      )}

      <div className="text-[10px] font-mono text-black border-t border-[#0066CC] pt-4 mt-5 flex justify-between items-center bg-white px-3 py-2 rounded-lg">
        <span>Archivio Inventore: LF-PAT-HIST</span>
        <span className="text-[#0066CC] font-bold uppercase">Patrimonio UIBM &amp; WIPO Certificato</span>
      </div>

    </div>
  );
}
