import React, { useState } from 'react';
import { Tv, Play, ExternalLink, Film, Award, HelpCircle, ShieldCheck } from 'lucide-react';

interface MediaClip {
  id: string;
  channel: string;
  showTitle: string;
  year: number;
  highlightText: string;
  description: string;
  url: string;
}

export default function FatherVideos() {
  const [activeClipId, setActiveClipId] = useState<string>("cli-1");
  const [showSimulatedPlayer, setShowSimulatedPlayer] = useState<boolean>(false);

  const mediaClips: MediaClip[] = [
    {
      id: "cli-1",
      channel: "RAI 1 (ANNATA 1995)",
      showTitle: "RAI 1 – I Cervelloni (Annata 1995)",
      year: 1995,
      highlightText: "CONDOTTO DA PAOLO BONOLIS CON LA PARTECIPAZIONE DI ANTONELLA CLERICI",
      description: "Vincitore del Primo Premio assoluto nella trasmissione televisiva di punta 'I Cervelloni' speciale brevetti di Rai Uno, grazie alla presentazione scientifica e dimostrazione pratica dell'invenzione d'epoca: la prima lampada a risparmio energetico al mondo.",
      url: "https://photos.app.goo.gl/Vt5mJctaZbYGTQaYA"
    },
    {
      id: "cli-2",
      channel: "CANALE 5 (ANNATA 1995)",
      showTitle: "Mediaset Canale 5 – Maurizio Costanzo Show (Annata 1995)",
      year: 1995,
      highlightText: "PRESENTATO DA MAURIZIO COSTANZO",
      description: "Intervista e dimostrazione nel celebre teatro del Maurizio Costanzo Show su Canale Cinque, offrendo al pubblico nazionale una dimostrazione empirica del primato italiano di Lucio Falace sull'asse dell'isocronia e del risparmio d'illuminazione fluorescente compressa.",
      url: "https://photos.app.goo.gl/Vt5mJctaZbYGTQaYA"
    }
  ];

  const currentClip = mediaClips.find(c => c.id === activeClipId) || mediaClips[0];

  // Dummy 26 screenshots from the original historical analog capture video file (Page 5 & Page 6)
  const historicalCapturesCount = 26;

  return (
    <div id="father-videos-section" className="bg-white border border-[#0066CC] rounded-2xl p-6 sm:p-8  transition-all duration-300">
      
      {/* Decorative Title */}
      <div className="flex items-center gap-3.5 border-b border-[#0066CC] pb-5 mb-6">
        <div className="p-3 bg-red-50 border border-red-100 rounded-2xl text-red-700">
          <Film className="w-6.5 h-6.5 animate-pulse" />
        </div>
        <div>
          <span className="text-[9px] font-mono text-[#0066CC] uppercase tracking-wider block font-bold">
            06 • ARCHIVIO STORICO TELEVISIVO • ANNO 1995
          </span>
          <h3 className="font-serif font-black text-lg text-black tracking-wide uppercase mt-0.5 leading-tight">
            Presenza Televisiva Storica (Anni 90)
          </h3>
        </div>
      </div>

      <p className="text-xs text-black leading-relaxed mb-6 font-sans">
        Di seguito sono catalogati ed incorporati i documenti televisivi d'epoca che attestano l'anteriorità brevettuale e l'invenzione della prima lampada a risparmio energetico ad opera di <strong>Lucio Falace</strong>. I flussi video originali sono stati digitalizzati con rigore storiografico per salvaguardare la priorità energetica nazionale dell'ente.
      </p>

      {/* Grid of the 2 Broadcast Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {mediaClips.map((clip) => (
          <div 
            key={clip.id}
            onClick={() => {
              setActiveClipId(clip.id);
              setShowSimulatedPlayer(true);
            }}
            className={`border rounded-xl p-5 cursor-pointer transition-all flex flex-col justify-between ${
              activeClipId === clip.id
                ? 'border-[#0066CC] bg-white  ring-2 ring-[#0066CC]/15'
                : 'border-[#0066CC] bg-white hover:border-[#0066CC] hover:-xs'
            }`}
          >
            <div>
              <div className="flex justify-between items-center text-[9px] font-mono text-black mb-2 border-b border-black pb-1.5 uppercase font-bold">
                <span>{clip.channel}</span>
                <span className="text-[#0066CC]">VIDEO STORICO</span>
              </div>
              
              <h4 className="font-serif font-extrabold text-black uppercase text-[12px] tracking-wide mb-1 leading-snug">
                {clip.showTitle}
              </h4>
              <p className="text-[9px] font-mono text-[#0066CC] uppercase font-bold tracking-wider leading-tight mb-3">
                {clip.highlightText}
              </p>
              
              <p className="text-[10.5px] text-black leading-relaxed font-sans mb-4 text-justify line-clamp-4">
                {clip.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-50 pt-3 mt-1.5">
              <span className="text-[8.5px] font-mono text-[#0066CC] font-bold">INTEGRAZIONE CERTIFICATA</span>
              <button
                className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-black border border-[#0066CC] px-3.5 py-1.5 rounded bg-white border border-black text-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                <span>APRI RIPRODUTTORE</span>
                <span className="font-sans">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Simulated Media Player Panel */}
      {showSimulatedPlayer && (
        <div className="bg-[#0b172a] border-2 border-[#0066CC] rounded-2xl p-5 mb-8 text-white relative overflow-hidden  animate-fade-in">
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4 text-[10px] font-mono">
            <span className="text-slate-300 uppercase font-bold tracking-wider">Riproduttore Analogico Storico</span>
            <span className="text-[#0066CC] font-extrabold tracking-widest">{currentClip.channel}</span>
          </div>

          {/* Virtual TV Frame screen with grain loading */}
          <div className="aspect-video bg-black/90 border border-white/10 rounded-xl relative flex flex-col items-center justify-center p-4  overflow-hidden">
            {/* Ambient vignette retro glass filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0  pointer-events-none mix-blend-overlay z-10 animate-pulse" />
            
            {/* TV Screen scan lines overlay effect */}
            <div className="absolute inset-0  bg-[size:100%_4px] pointer-events-none z-10" />

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#C29D38] to-[#3399FF] flex items-center justify-center border-2 border-white/20  cursor-pointer transform hover:scale-105 active:scale-95 transition-transform z-20 group">
              <Play className="w-7.5 h-7.5 text-black fill-current translate-x-0.5" />
            </div>

            <div className="mt-4 text-center max-w-sm z-20">
              <span className="text-[8px] font-mono tracking-widest text-[#0066CC] uppercase block mb-1">
                AVVIA DIGITALIZZAZIONE FLUSSO
              </span>
              <span className="text-[11.5px] font-serif font-black uppercase tracking-wide text-[#EAF6FF]">
                {currentClip.showTitle}
              </span>
            </div>

            {/* Quick stats on bottom video strip */}
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[7.5px] font-mono text-black z-20 border-t border-white/5 pt-2">
              <span>FORMATO: PAL BETACAM analogico</span>
              <span>ISOCRONIA Hz: AGGANCIO COMPENSATO 8Hz</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mt-5">
            <p className="text-[11.5px] text-slate-300 leading-relaxed font-sans max-w-lg text-justify italic">
              "L'estratto video include lo storico riscontro dei misuratori hertziani durante la trasmissione e la reazione di approvazione dei conduttori televisivi storiografici nazionali."
            </p>
            
            <a 
              href={currentClip.url}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-black bg-[#0066CC] hover:bg-blue-750 text-white px-4 py-2 rounded-lg transition-all border border-[#3399FF]/20 cursor-pointer shrink-0"
            >
              <span>APRI ALBUM SU GOOGLE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Grid of 26 Captures / Screenshots of Lucio Falace (Page 5 & Page 6) */}
      <div className="border-t border-[#0066CC] pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-serif font-extrabold text-black uppercase text-[11.5px] tracking-wide">
              Archivio Fotografico Integrato – Lucio Falace
            </h4>
            <span className="text-[9px] font-mono text-black uppercase tracking-wide block">
              La galleria dei prototipi storici, documentazioni e brevetti originali
            </span>
          </div>
          
          <a
            href="https://photos.app.goo.gl/Vt5mJctaZbYGTQaYA"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="px-3.5 py-1.5 rounded-lg border border-[#0066CC] bg-white hover:bg-[#EAE6DF]/15 text-xs text-black font-mono font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>VEDI ALBUM ORIGINALE</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#0066CC]" />
          </a>
        </div>

        {/* 26-photo retro screen-capture lattice grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-2">
          {Array.from({ length: historicalCapturesCount }).map((_, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-video bg-neutral-900 border border-[#0066CC] rounded overflow-hidden  flex items-center justify-center transition-all hover:scale-102 hover:border-[#0066CC]"
            >
              {/* Simulated retro low-res TV clip mock frame */}
              <div className="absolute inset-0 bg-radial-gradient brightness-75 select-none" />
              
              {/* Scanline overlay */}
              <div className="absolute inset-0  bg-[size:100%_3px] pointer-events-none " />
              
              {/* Simple vintage test filter or image outline */}
              <div className="absolute inset-1 border border-white/5 bg-[#000000]/10 flex items-center justify-center text-center select-none">
                <span className="text-[8px] font-mono text-white/40 group-hover:text-[#0066CC]/90 transition-colors select-none font-bold">
                  DIAPOSITIVA
                </span>
              </div>

              {/* Gold retro caption label of photo count */}
              <span className="absolute bottom-1 right-1 px-1 bg-black/75 rounded text-[7.5px] font-mono text-slate-300 select-none">
                #{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
