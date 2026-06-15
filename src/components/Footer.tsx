import React from 'react';
import { FOUNDATION_METADATA } from '../data/archiveData.js';
import { Landmark, ShieldCheck, Mail, Globe, MapPin, Scale, Database } from 'lucide-react';
import { downloadBackupXml, downloadSiteBlueprint, downloadSiteBlueprintTxt } from '../utils/exportData.js';

export default function Footer() {
  return (
    <footer className="bg-[#003b71] text-white border-t border-white/10 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top sector: logo and credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/20 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white flex items-center justify-center text-[#003b71] font-serif font-black text-xs rounded-xs">
                FF
              </div>
              <div>
                <span className="font-serif font-bold text-xs uppercase tracking-widest text-white block leading-none">
                  {FOUNDATION_METADATA.denomination_it}
                </span>
                <span className="text-[8px] font-mono text-white block mt-1 uppercase">
                  PATRIMONIO DELLE ATTIVITÀ INTELLETTIVE CREATIVE NEI RIGUARDI DELLE ARTI E DELLE SCIENZE
                </span>
              </div>
            </div>
            <p className="text-[11px] text-white leading-relaxed font-serif italic">
              "Salvaguardia, archiviazione logica, sistematizzazione rigorosa e divulgazione globale del patrimonio artistico, scientifico e brevettuale del Fondatore."
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-white tracking-widest font-black mb-3.5 border-b border-white/20 pb-1.5 uppercase">
              INFORMAZIONI GENERALI
            </h4>
            <ul className="space-y-2 text-[11px] font-mono uppercase tracking-wide">
              <li className="flex items-center gap-2 text-white">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>Sede: Archivio Storico Falace</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <Mail className="w-3.5 h-3.5 text-white" />
                <a href={`mailto:${FOUNDATION_METADATA.email}`} className="hover:text-white/90 hover:underline transition-colors">
                  {FOUNDATION_METADATA.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white">
                <Scale className="w-3.5 h-3.5 text-white" />
                <span>ATECO {FOUNDATION_METADATA.ateco_code}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-white tracking-widest font-black mb-3.5 border-b border-white/20 pb-1.5 uppercase">
              REGISTRI NAZIONALI
            </h4>
            <ul className="space-y-2 text-[11px] text-white font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white"></span>
                <span>1. MiBAC / MiC — Deposito Legale Opere &amp; Libri</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white"></span>
                <span>2. UIBM — Brevetti d'Invenzione Industriale</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white"></span>
                <span>3. OPAC SBN-ISBN — Catalogazione Libri Statali</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white"></span>
                <span>4. CERN Zenodo — Registro Digitale DOI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white"></span>
                <span>5. Dds Discoteca di Stato — Deposito Audiovisivo</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white"></span>
                <span>6. Museo MAXXI — Catalogo d'Arte Contemporanea</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom sector: standard disclaimer bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white">
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={downloadBackupXml}
              className="px-3 py-1 bg-white/5 hover:bg-white/12 border border-white/10 rounded font-mono text-[9px] uppercase tracking-wider text-white/70 hover:text-white transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
              title="Scarica il database completo del sito in formato HTML strutturato, compatibile con Microsoft Excel"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse border border-emerald-300"></span>
              <span>Esporta Database (HTML / Excel)</span>
            </button>

            <button
              onClick={downloadSiteBlueprintTxt}
              className="px-3 py-1 bg-white/5 hover:bg-white/12 border border-white/10 rounded font-mono text-[9px] uppercase tracking-wider text-white/70 hover:text-white transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
              title="Scarica tutti i codici sorgente del sito in formato piano .TXT (100% compatibile per Gemini, ChatGPT, Claude senza limiti di formato)"
            >
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse border border-amber-300"></span>
              <span>Esporta Codici (.TXT Universale AI)</span>
            </button>

            <button
              onClick={downloadSiteBlueprint}
              className="px-3 py-1 bg-white/5 hover:bg-white/12 border border-white/10 rounded font-mono text-[9px] uppercase tracking-wider text-white/70 hover:text-white transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
              title="Scarica l'intera struttura in file JSON leggibile per importazioni dirette"
            >
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse border border-sky-300"></span>
              <span>Esporta Struttura (.JSON)</span>
            </button>
          </div>

          <div className="text-center md:text-right space-y-1">
            <span className="block uppercase tracking-wider text-[8.5px] text-white font-black">
              © {new Date().getFullYear()} Fondazione Falace. Tutti i diritti riservati.
            </span>
            <span className="block text-[8px] text-white/90">
              Sito di studio, ricerca e consultazione dell'Archivio Storico della Fondazione Falace.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
