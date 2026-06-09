import React, { useState } from 'react';
import { TV_DOC_SHOWS } from '../data/archiveData.js';
import { Tv, Play, ExternalLink } from 'lucide-react';

export default function DocumentariView() {
  const [activeShow, setActiveShow] = useState(0);

  const current = TV_DOC_SHOWS[activeShow];

  return (
    <div id="documentaries" className="bg-white border border-[#0066CC] rounded-2xl p-6 ">
      <div className="flex items-center gap-3 border-b border-[#0066CC] pb-4 mb-4">
        <div className="p-2 bg-white border border-[#0066CC] rounded-xl text-[#0066CC]">
          <Tv className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif font-black text-sm text-black tracking-wider uppercase">
            Documentari &amp; Televisione Nazionale
          </h3>
          <p className="text-[10px] font-mono text-[#0066CC] uppercase tracking-wider font-bold">
            Rai • Mediaset • Premi d'Impresa
          </p>
        </div>
      </div>

      <p className="text-xs text-black leading-relaxed mb-4">
        Rassegna storiografica dei passaggi radiotelevisivi nazionali italiani in cui la figura del Dott. Luca Falace si è adoperata per la tutela ambientale e la divulgazione dei codici scientifici di risonanza.
      </p>

      {/* Screen Player Simulator */}
      <div className="bg-white border border-[#0066CC] rounded-xl p-5 mb-4 text-black text-center relative overflow-hidden min-h-[140px] flex flex-col justify-between">
        <div className="absolute top-3 right-3 bg-[#0066CC] text-white px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase ">
          RAI 2/MEDIASET TRASM
        </div>

        <div>
          <span className="text-[10px] font-mono text-[#0066CC] block mb-1 font-bold uppercase">
            CANALE SELEZIONATO: {current.topics}
          </span>
          <h4 className="font-serif font-bold text-sm text-black uppercase tracking-wide leading-snug">
            {current.title}
          </h4>
        </div>

        <div className="mt-4">
          <a
            href={current.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-1.5 bg-[#0066CC] hover:bg-black text-white px-4 py-2 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider  transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Riproduci Servizio d'epoca</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Selector Scroll */}
      <div className="space-y-2 max-h-[160px] overflow-y-auto">
        {TV_DOC_SHOWS.map((show, idx) => (
          <button
            key={idx}
            onClick={() => setActiveShow(idx)}
            className={`w-full text-left px-3.5 py-2 rounded-xl text-xs border transition-all flex justify-between items-center cursor-pointer ${
              activeShow === idx 
                ? 'bg-white border-[#0066CC] text-[#0066CC] font-bold' 
                : 'border-[#0066CC] hover:border-[#0066CC] text-black hover:text-black bg-white'
            }`}
          >
            <span className="truncate">{show.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
