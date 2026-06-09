import React, { useState } from 'react';
import { FileText, ZoomIn, ZoomOut, RotateCw, Download, FileCheck, Award, Sparkles, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { ARCHIVIO_STORICO_PAGES } from '../../data/archivioStoricoPdf.js';
import { BIOGRAFIA_PAGES } from '../../data/biografiaPdfData.js';

interface MockDocument {
  title: string;
  doi: string;
  pages: number;
  author: string;
  textHighlights: string[];
  certifyingBody: string;
}

export default function PDFViewerSimulator({ defaultDocIndex = 0 }: { defaultDocIndex?: number }) {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [activeDocIndex, setActiveDocIndex] = useState(defaultDocIndex);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const mockDocuments: MockDocument[] = [
    {
      title: "Interazione Psicofisica con il Campo Unificato AIC-EC-HZ (Volume III)",
      doi: "10.5281/zenodo.20414984",
      pages: 312,
      author: "Dott. Luca Falace",
      certifyingBody: "CERN Zenodo Scientific Repository",
      textHighlights: [
        "S = φ(f) - Legge Universale dell'Isocronismo d'Ingegno",
        "Sezione IV: Accoppiamento isocronico e risonanza d'onda bio-elettrica",
        "Appendice C: Matrice di riscontro clinico su 200 soggetti EEG simultanei"
      ]
    },
    {
      title: "Teoria Generale del Sincronismo Creativo (Volume I)",
      doi: "10.5281/zenodo.17080308",
      pages: 482,
      author: "Dott. Luca Falace",
      certifyingBody: "CERN Zenodo Repository",
      textHighlights: [
        "Teoria del Campo Unificato delle Attività Intellettive",
        "Algoritmizzazione e classificazione dei 9 Livelli di Sincronicità",
        "Dispositivi e tutele industriali correlate ad AIC_SYNC"
      ]
    },
    {
      title: "Trattato sull'Energia Creativa e Spettro Hertziano (Volume II)",
      doi: "10.5281/zenodo.17041593",
      pages: 295,
      author: "Dott. Luca Falace",
      certifyingBody: "CERN Zenodo Gold Trilogy",
      textHighlights: [
        "Frequenze Hertziane Solari e accordatura a 432Hz",
        "Campi magnetici integrati e polarizzazione biologica coerente",
        "Analisi matematica del segnale termodinamico compresso FDL"
      ]
    },
    {
      title: "Biografia & Curriculum Vitae Certificato — Dott. Luca Falace (ATECO 72.2)",
      doi: "OPAC SBN IT\\ICCU",
      pages: 6,
      author: "Dott. Luca Falace",
      certifyingBody: "Registro e Depositi Ufficiali • Pubblicazione Integrale",
      textHighlights: [] // Displays full book pages directly
    },
    {
      title: "Archivio Storico Fondazione AIC — Struttura Cronologica (2005–2025)",
      doi: "NA2004A000063 (UIBM)",
      pages: 20,
      author: "Dott. Luca Falace",
      certifyingBody: "Archivio Storico Fondazione AIC • Pubblicazione Integrale",
      textHighlights: [] // Displays full book pages directly
    }
  ];

  const currentDoc = mockDocuments[activeDocIndex];

  // Adjust page number if exceeding boundaries of switching document
  const handleDocChange = (idx: number) => {
    setActiveDocIndex(idx);
    setCurrentPageNum(1);
  };

  const selectedPageContent = activeDocIndex === 3
    ? BIOGRAFIA_PAGES.find(p => p.pageNumber === currentPageNum)?.content || ''
    : activeDocIndex === 4
    ? ARCHIVIO_STORICO_PAGES.find(p => p.pageNumber === currentPageNum)?.content || ''
    : '';

  const totalPages = activeDocIndex === 3 ? 6 : activeDocIndex === 4 ? 20 : 1;

  return (
    <div className="bg-white rounded-2xl overflow-hidden text-black shadow-none">
      {/* Header Bar */}
      <div className="bg-[#0066CC] px-5 py-3.5 border-b-2 border-black flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-white" />
          <div>
            <h4 className="font-serif font-semibold text-xs tracking-wide text-white">
              Simulatore Certificati SBN &amp; Archivio Storico
            </h4>
            <p className="text-[9px] font-mono text-white/90">
              Visualizzatore Isocronico di Documenti Istituzionali Autorizzati
            </p>
          </div>
        </div>

        {/* Zoom & Rotate Controls */}
        <div className="flex items-center gap-2 text-white">
          <button 
            onClick={() => setZoom(Math.max(60, zoom - 10))} 
            className="p-1 px-1.5 rounded bg-[#00468C] hover:bg-[#002244] border border-white text-white transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5 text-white" />
          </button>
          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#00468C] border border-white rounded text-white font-bold">
            {zoom}%
          </span>
          <button 
            onClick={() => setZoom(Math.min(150, zoom + 10))} 
            className="p-1 px-1.5 rounded bg-[#00468C] hover:bg-[#002244] border border-white text-white transition-colors cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5 text-white" />
          </button>
          <button 
            onClick={() => setRotation((rotation + 90) % 360)} 
            className="p-1 px-1.5 rounded bg-[#00468C] hover:bg-[#002244] border border-white text-white transition-colors ml-1 cursor-pointer"
            title="Rotate Page"
          >
            <RotateCw className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="flex bg-[#00468C] overflow-x-auto text-[10px] sm:text-[10.5px] font-mono font-bold tracking-wider scrollbar-none gap-0.5 p-1">
        {mockDocuments.map((doc, idx) => (
          <button
            key={idx}
            onClick={() => handleDocChange(idx)}
            className={`px-4 py-2.5 rounded shrink-0 transition-all cursor-pointer uppercase ${
              activeDocIndex === idx 
                ? 'bg-[#002244] text-white font-bold border-b-2 border-white' 
                : 'bg-transparent text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {idx === 3 ? "La Biografia (6 Pagg)" : idx === 4 ? "Archivio Storico (20 B)" : `Vol. ${idx + 1}`}
          </button>
        ))}
      </div>

      {/* PDF Page Area */}
      <div className="p-6 bg-slate-50 flex flex-col justify-center items-center overflow-auto min-h-[360px]">
        
        {/* Biography & Archivio Storico Specific Page Nav Bar at Top */}
        {(activeDocIndex === 3 || activeDocIndex === 4) && (
          <div className="mb-4 flex items-center gap-3 bg-[#00468C] border border-white/20 p-2 rounded-lg text-xs font-mono shadow-none text-white">
            <button 
              disabled={currentPageNum <= 1}
              onClick={() => setCurrentPageNum(p => Math.max(1, p - 1))}
              className="p-1 border border-white bg-[#002244] hover:bg-black text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <span className="text-white font-semibold min-w-[70px] text-center">
              PAGINA {currentPageNum} / {totalPages}
            </span>
            <button 
              disabled={currentPageNum >= totalPages}
              onClick={() => setCurrentPageNum(p => Math.min(totalPages, p + 1))}
              className="p-1 border border-white bg-[#002244] hover:bg-black text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
            
            {/* Direct Page Select */}
            <select
              value={currentPageNum}
              onChange={(e) => setCurrentPageNum(Number(e.target.value))}
              className="bg-[#002244] text-white border border-white outline-none px-2 py-0.5 cursor-pointer font-bold rounded"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <option key={num} value={num} className="bg-[#002244] text-white">Pagina {num}</option>
              ))}
            </select>
          </div>
        )}

        <div 
          style={{ 
            transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease-in-out'
          }}
          className="bg-white text-black p-8 rounded max-w-xl w-full relative border-l-8 border-l-[#0066CC] font-sans select-text border border-[#0066CC] shadow-none"
        >
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-3xl font-serif font-semibold rotate-45 border-4 border-[#0066CC]/20 p-4 tracking-widest text-center text-[#0066CC]">
              FONDAZIONE FALACE
            </span>
          </div>

          {/* Academic Header */}
          <div className="flex justify-between items-start border-b border-black pb-3 mb-4 text-[9px] font-mono text-black">
            <div>
              <span className="text-[7.5px] tracking-widest text-[#0066CC] font-semibold block">
                {activeDocIndex === 3 ? "Curriculum Vitae Certificato" : "Archivio Storico Fondazione AIC"}
              </span>
              <span className="text-[8.5px] font-bold text-black">
                © 2005–2026 Luca Falace — Tutti i diritti riservati
              </span>
            </div>
            <div className="text-right">
              {activeDocIndex === 3 || activeDocIndex === 4 ? (
                <>{activeDocIndex === 3 ? "REG-SBN-BIOGRAFIA" : "NA2004A000063"}<br />PAGINA {currentPageNum} / {totalPages}</>
              ) : (
                <>DOI: {currentDoc.doi}<br />PAGG. {currentDoc.pages}</>
              )}
            </div>
          </div>

          <h5 className="font-serif font-semibold text-sm text-black mb-3 leading-snug tracking-wide border-b border-black pb-2 text-left">
            {currentDoc.title}
          </h5>

          {activeDocIndex < 3 ? (
            <>
              <p className="text-[10px] font-mono text-black mb-4 pb-2 border-b border-dashed border-black text-left">
                Autore: <strong className="text-black font-sans">{currentDoc.author}</strong> • Depositato in via permanente con riscontro isocronico.
              </p>

              <div className="space-y-2.5 mb-6 text-black text-[10.5px] leading-relaxed text-left">
                <div className="flex items-center gap-1 text-[#0066CC] font-mono font-semibold text-[8.5px]">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>Estratti Notevoli di Rigore Scientifico:</span>
                </div>
                {currentDoc.textHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white border border-black p-2 rounded">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066CC] shrink-0 mt-1.5" />
                    <span className="italic">"{hl}"</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-4 mb-6 text-black text-[11px] leading-relaxed text-justify font-sans">
              <div className="p-1 px-2 border-l-2 border-[#0066CC] bg-white text-[9px] font-mono text-black tracking-wider mb-2.5 text-left">
                Documento Ufficiale Riservato ad Uso Istituzionale • Pagina {currentPageNum} di {totalPages}
              </div>
              
              {selectedPageContent.split('\n\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null;
                // Check if paragraph is heading
                const isHeading = paragraph.startsWith('I.') || 
                                  paragraph.startsWith('II.') || 
                                  paragraph.startsWith('III.') || 
                                  paragraph.startsWith('IV.') || 
                                  paragraph.startsWith('V.') || 
                                  paragraph.startsWith('VI.') || 
                                  paragraph.startsWith('VII.') || 
                                  paragraph.startsWith('VIII.') || 
                                  paragraph.startsWith('IX.') || 
                                  paragraph.match(/^[A-Z\s,–():.—&]{6,50}$/) || 
                                  paragraph.startsWith('PROGETTO FONDAZIONE') ||
                                  paragraph.startsWith('Dott. LUCA FALACE') ||
                                  paragraph.startsWith('Premi e Riconocimenti') ||
                                  paragraph.startsWith('Presentazione') ||
                                  paragraph.startsWith('Formazione') ||
                                  paragraph.startsWith('Laurea Magistrale') ||
                                  paragraph.startsWith('Diploma di Perito') ||
                                  paragraph.startsWith('Crediti Formativi') ||
                                  paragraph.startsWith('Attività Imprenditoriale') ||
                                  paragraph.startsWith('Formazione e Direzione') ||
                                  paragraph.startsWith('GeniusOm Srls') ||
                                  paragraph.startsWith('AIC-SYNC – Brevetto') ||
                                  paragraph.startsWith('Insegnamento') ||
                                  paragraph.startsWith('Istituti e Anni') ||
                                  paragraph.startsWith('Materie e Ambiti') ||
                                  paragraph.startsWith('Ricerca Scientifica:') ||
                                  paragraph.startsWith('Il Metodo AIC') ||
                                  paragraph.startsWith('Produzione Artistica') ||
                                  paragraph.startsWith('Mostre, Esposizioni') ||
                                  paragraph.startsWith('Sperimentazione Scientifica') ||
                                  paragraph.startsWith('Invenzioni e Brevetti') ||
                                  paragraph.startsWith('Brevetti Registrati UIBM') ||
                                  paragraph.startsWith('Depositi Istituzionali') ||
                                  paragraph.startsWith('Depositi presso il Ministero') ||
                                  paragraph.startsWith('Depositi Scientifici') ||
                                  paragraph.startsWith('Identità del Progetto') || 
                                  paragraph.startsWith('Formazione e Contesto') || 
                                  paragraph.startsWith('Formazione Accademica') || 
                                  paragraph.startsWith('1995–2004 — Le Origini') || 
                                  paragraph.startsWith('2005 — Anno Fondativo') || 
                                  paragraph.startsWith('2007–2010 — Sviluppo') || 
                                  paragraph.startsWith('2011–2012 — Approfondimento') || 
                                  paragraph.startsWith('2013 — Anno di Consolidamento') || 
                                  paragraph.startsWith('2014 — Anno dei') || 
                                  paragraph.startsWith('2015 — Shark Tank') || 
                                  paragraph.startsWith('2016 — Approvazione') || 
                                  paragraph.startsWith('2017 — RAI 2') || 
                                  paragraph.startsWith('2018–2019 — Brevetto') || 
                                  paragraph.startsWith('2020 — Donazione') || 
                                  paragraph.startsWith('2021–2022 — Verso') || 
                                  paragraph.startsWith('2023 — Reclutamento') || 
                                  paragraph.startsWith('2024 — Costituzione') || 
                                  paragraph.startsWith('2025 — Produzione') || 
                                  paragraph.startsWith('Principi Fondamentali') || 
                                  paragraph.startsWith('Prove di Proprietà') || 
                                  paragraph.startsWith('Vincoli di Utilizzo') || 
                                  paragraph.startsWith('Attività della') || 
                                  paragraph.startsWith('Attività Didattiche') || 
                                  paragraph.startsWith('Altre Attività') || 
                                  paragraph.startsWith('Definizione e Originalità') || 
                                  paragraph.startsWith('Le Attività Intellettive') || 
                                  paragraph.startsWith('Tutela della Teoria') || 
                                  paragraph.startsWith('Sintesi delle Competence') || 
                                  paragraph.startsWith('Contributi Museali') || 
                                  paragraph.startsWith('Promozione Artistica') || 
                                  paragraph.startsWith('Opere Fondamentali') || 
                                  paragraph.startsWith('Trattato sul Campo') || 
                                  paragraph.startsWith('Tutte le Opere') || 
                                  paragraph.startsWith('Siti Web Ufficiali') || 
                                  paragraph.startsWith('Profili Social') || 
                                  paragraph.startsWith('Brevetti — Google') || 
                                  paragraph.startsWith('Documentazione Premi') || 
                                  paragraph.startsWith('Archivio Biblioteche') || 
                                  paragraph.startsWith('© 2005');
                
                return (
                  <p 
                    key={index} 
                    className={isHeading 
                      ? "font-serif font-semibold text-xs text-black tracking-wide pt-2 pb-1 text-left border-b border-dashed border-black" 
                      : "text-[10px] leading-relaxed text-justify"
                    }
                  >
                    {paragraph.split('\n').map((line, lIdx) => (
                      <React.Fragment key={lIdx}>
                        {line}
                        {lIdx < paragraph.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                );
              })}
            </div>
          )}

          <div className="flex justify-between items-center text-[7.5px] font-mono text-black border-t border-black pt-3 mt-4">
            <span className="flex items-center gap-1 font-bold text-emerald-700">
              <FileCheck className="w-3.5 h-3.5" />
              <span>{activeDocIndex >= 3 ? "Stato: Archivio Integrato Certificato" : "Stato: Deposito Autorizzato CERN Zenodo"}</span>
            </span>
            <span>IDENTIFICATIVO REG: FF-DOC-{activeDocIndex === 3 ? "BIOGRAFIA" : activeDocIndex === 4 ? "A_STORICO" : `VOL-${activeDocIndex + 1}-SBN`}</span>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-[#0066CC] px-5 py-3 flex flex-col xs:flex-row justify-between items-center gap-2">
        <span className="text-[9.5px] font-mono text-white font-bold">
          {activeDocIndex === 3 ? "Ufficio Bibliografico SBN • Catalogo Autore Certificato" : activeDocIndex === 4 ? "Ufficio Bibliografico Fondazione AIC • Struttura 2005–2025" : "Ufficio Biblioteconomico SBN • DOI Certificato"}
        </span>
        <a 
          href={activeDocIndex >= 3 
            ? "https://fondazioneaic.altervista.org"
            : `https://zenodo.org/records/${currentDoc.doi.split('/').pop()}`
          }
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold bg-transparent hover:bg-[#002244] text-white border border-white px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer uppercase"
        >
          <Download className="w-3.5 h-3.5 text-white" />
          <span>{activeDocIndex >= 3 ? "Apri Portale Storico" : "Scarica PDF Originale"}</span>
        </a>
      </div>
    </div>
  );
}
