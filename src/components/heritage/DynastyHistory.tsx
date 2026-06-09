import React from 'react';
import { Award, Landmark, History, FileText } from 'lucide-react';

export default function DynastyHistory() {
  return (
    <div className="bg-white border border-[#0066CC] rounded-2xl p-6 ">
      <div className="flex items-center gap-3 border-b border-[#0066CC] pb-4 mb-4">
        <div className="p-2 bg-white border border-[#0066CC] rounded-xl animate-pulse">
          <History className="w-5 h-5 text-[#0066CC]" />
        </div>
        <div>
          <h3 className="font-serif font-black text-sm text-black tracking-wide uppercase">
            Dinastia dell'Ingegno Falace
          </h3>
          <p className="text-[10px] font-mono text-[#0066CC] uppercase tracking-wider">
            Tradizione e Codici FDL • Generazioni d'Invenzione
          </p>
        </div>
      </div>

      <p className="text-xs text-black leading-relaxed mb-4">
        La <strong>Scuola d'Ingegno Falace</strong> fonda le sue radici storiche nella tradizione inventiva familiare, tramandata attraverso generazioni e codificata ufficialmente nei <strong>Codici FDL (Falace Dynamic Logic)</strong>. Questa matrice logica sancisce che l'atto creativo-artistico e la modellazione meccanica differenziale sono manifestazioni isocroniche di una medesima risonanza intellettiva superiore.
      </p>

      <div className="space-y-3.5 mb-4">
        <div className="flex gap-3 bg-white border border-[#0066CC] p-3 rounded-xl">
          <Landmark className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-black block mb-0.5">Origine e Filosofia Operativa</span>
            <p className="text-black text-[11px] leading-relaxed">
              Dall'eredità e dalla biblioteca archivistica di famiglia si estraggono i 41 schemi funzionali originari di sistemi idraulici e termici a compensazione magnetica.
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-white border border-[#0066CC] p-3 rounded-xl">
          <FileText className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-black block mb-0.5">I Codici FDL e Brevettazione</span>
            <p className="text-black text-[11px] leading-relaxed">
              Sistemi logici isocronici registrati nel tempo presso l'UIBM per promuovere lo sviluppo sostenibile dell'uomo, della società e dell'ambiente.
            </p>
          </div>
        </div>
      </div>

      <div className="p-3 bg-white border border-black rounded-xl text-center border border-[#0066CC]">
        <span className="text-[10px] font-mono text-[#0066CC] font-bold block uppercase tracking-wider mb-1">
          Rilevare l'Isocronismo d'Ingegno
        </span>
        <span className="text-[9px] font-mono text-[#E2DDD5]/85 block">
          Codice Identificazione Interno: FDL-DYNASTY-2026-REG
        </span>
      </div>
    </div>
  );
}
