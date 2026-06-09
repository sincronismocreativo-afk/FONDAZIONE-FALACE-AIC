import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Clock, 
  X, 
  Briefcase, 
  FileCheck, 
  Layers, 
  GraduationCap, 
  TrendingUp, 
  Compass, 
  ExternalLink,
  ShieldCheck,
  Radio,
  FileText
} from 'lucide-react';

export default function BiographyOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'education' | 'awards' | 'patents'>('profile');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3 bg-[#0066CC] hover:bg-black text-white border-2 border-black rounded-lg font-bold font-sans text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2 hover:-translate-y-0.5"
      >
        <Award className="w-4 h-4 animate-pulse" />
        <span>Vedi Biografia &amp; Curriculum Vitae Sincronico</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in px-4">
          <div className="bg-white border-4 border-[#0066CC] rounded-2xl w-full max-w-2xl overflow-hidden flex flex-col h-[90vh] max-h-[700px]">
            
            {/* Academic Header */}
            <div className="bg-[#0066CC] text-white px-6 py-4 border-b-2 border-black flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-lg text-white border border-white/15">
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif font-black text-xs tracking-wider text-white">
                    Curriculum Vitae Certificato
                  </h4>
                  <p className="text-[9px] font-mono text-white/95">
                    Dott. Luca Falace — Fondazione Falace
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Quick Profile Panel */}
            <div className="bg-white border-b border-[#0066CC] p-5 shrink-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h3 className="font-serif font-black text-lg text-black leading-tight">
                    Dott. Luca Falace
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-[9px] font-mono bg-white border border-black/10 text-black font-bold px-2 py-0.5 rounded">
                      ATECO 72.20.00: R&amp;S Umanistica
                    </span>
                    <span className="text-[9px] font-mono bg-white border-2 border-[#0066CC] text-[#9F802B] font-bold px-2 py-0.5 rounded">
                      Fondatore Fondazione AIC
                    </span>
                  </div>
                </div>
                <div className="text-right text-[9px] sm:text-[10px] font-mono text-black bg-white border border-[#0066CC] px-3 py-1.5 rounded-lg  max-w-full sm:max-w-md">
                  <span className="font-bold text-[#0066CC]">Tutela 6 Enti:</span> MiC/MiBAC • UIBM • OPAC SBN-ISBN • CERN Zenodo • Dds • MAXXI
                </div>
              </div>
            </div>

            {/* Custom Sub-Navigation Tabs */}
            <div className="flex border-b border-[#0066CC] bg-white/50 overflow-x-auto text-[10.5px] font-mono font-bold tracking-wider scrollbar-none shrink-0">
              <button
                onClick={() => setActiveSubTab('profile')}
                className={`flex-1 min-w-[120px] px-4 py-3 text-center border-r border-[#0066CC] transition-colors cursor-pointer ${
                  activeSubTab === 'profile' 
                    ? 'bg-white text-[#0066CC] border-t-2 border-t-[#0066CC] border-b-2 border-b-transparent' 
                    : 'text-black hover:bg-white border-b border-b-[#EAE6DF]'
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Profilo
                </span>
              </button>
              <button
                onClick={() => setActiveSubTab('education')}
                className={`flex-1 min-w-[120px] px-4 py-3 text-center border-r border-[#0066CC] transition-colors cursor-pointer ${
                  activeSubTab === 'education' 
                    ? 'bg-white text-[#0066CC] border-t-2 border-t-[#0066CC] border-b-2 border-b-transparent' 
                    : 'text-black hover:bg-white border-b border-b-[#EAE6DF]'
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Istruzione
                </span>
              </button>
              <button
                onClick={() => setActiveSubTab('awards')}
                className={`flex-1 min-w-[120px] px-4 py-3 text-center border-r border-[#0066CC] transition-colors cursor-pointer ${
                  activeSubTab === 'awards' 
                    ? 'bg-white text-[#0066CC] border-t-2 border-t-[#0066CC] border-b-2 border-b-transparent' 
                    : 'text-black hover:bg-white border-b border-b-[#EAE6DF]'
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Premi &amp; TV
                </span>
              </button>
              <button
                onClick={() => setActiveSubTab('patents')}
                className={`flex-1 min-w-[120px] px-4 py-3 text-center transition-colors cursor-pointer ${
                  activeSubTab === 'patents' 
                    ? 'bg-white text-[#0066CC] border-t-2 border-t-[#0066CC] border-b-2 border-b-transparent' 
                    : 'text-black hover:bg-white border-b border-b-[#EAE6DF]'
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Brevetti
                </span>
              </button>
            </div>

            {/* Scrollable Curriculum Content */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6 text-xs text-black leading-relaxed font-sans">
              
              {/* Profile / Presentazione Tab */}
              {activeSubTab === 'profile' && (
                <div className="space-y-4 animate-fade-in text-justify">
                  <div className="border-l-4 border-l-[#0066CC] pl-4 py-1 italic text-black bg-white rounded-r-lg">
                    "Luca Falace è ricercatore indipendente, storico dell'arte, docente, inventore e imprenditore con un percorso intellettuale e professionale documentato che abbraccia oltre quarant'anni di attività."
                  </div>
                  <p>
                    Ha sviluppato un approccio interdisciplinare unico che integra ricerca antropologica, produzione artistica sperimentale, innovazione tecnologica, brevetti industriali e attività imprenditoriale nel settore dell'estetica e delle scienze della coscienza.
                  </p>
                  <p>
                    Questo percorso di oltre vent'anni ha trovato il suo sbocco accademico d'eccellenza nella formulazione fisica della <strong>Teoria del Campo Unificato AIC-EC</strong>, formalizzata nei volumi scientifici depositati stabilmente sul repository permanente <strong>CERN Zenodo (2024–2025)</strong> e dotati di riscontro isocronico DOI.
                  </p>
                  
                  <div className="bg-white p-4 rounded-xl border border-[#0066CC] space-y-2.5 mt-4">
                    <h5 className="font-serif font-bold text-xs text-black tracking-wide">
                      Ambito di Competenza ATECO 72.2
                    </h5>
                    <ul className="space-y-1.5 text-[11px] text-black font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0066CC] font-bold">•</span>
                        <span>Sistematizzazione concettuale del Campo Unificato (S = φ(f))</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0066CC] font-bold">•</span>
                        <span>Archiviazione logica cartacea e digitalizzazione permanente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0066CC] font-bold">•</span>
                        <span>Ideazione, design e strutturazione di brevetti ad alta efficienza green</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Education & Academic Credentials */}
              {activeSubTab === 'education' && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Laurea */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 rounded-full bg-white border border-black text-[#0066CC] border border-[#0066CC] flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="w-0.5 h-16 bg-[#EAE6DF]" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-[#0066CC] font-bold block">1998 – 2004 • Laurea Magistrale</span>
                      <h4 className="font-serif font-black text-black text-xs tracking-wide mt-0.5">
                        Laurea Magistrale in Conservazione dei Beni Culturali
                      </h4>
                      <p className="text-black text-[11px] font-mono mt-0.5">
                        Dottore Magistrale • Facoltà di Lettere • Storico Artistico Contemporaneo
                      </p>
                      <p className="text-[#656E7B] mt-1 text-[11px]">
                        <strong>Tesi:</strong> "Annotazioni e considerazioni sulla divinazione" • <strong>Ambito:</strong> Antropologia Culturale, simbologia mitologica, fenomenologia delle divinazioni.
                      </p>
                    </div>
                  </div>

                  {/* Diploma Perito */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] border border-[#0066CC] flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="w-0.5 h-16 bg-[#EAE6DF]" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-black font-bold block">1985 – 1991 • Diploma Tecnico</span>
                      <h4 className="font-serif font-extrabold text-[#0066CC] text-xs tracking-wide mt-0.5">
                        Diploma di Perito Tecnico Industriale
                      </h4>
                      <p className="text-black text-[11px] mt-0.5">
                        Specializzazione: Meccanica con focalizzazione in Robotica ed Ergon-Robotica
                      </p>
                      <p className="text-[#656E7B] mt-1 text-[11px]">
                        Fornisce le accurate competenze industriali e ingegneristiche applicate allo sviluppo e disegno dei successivi 41 prototipi ed invenzioni della dinastia scientifica Falace.
                      </p>
                    </div>
                  </div>

                  {/* CFU FIT */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0066CC] border border-[#0066CC] flex items-center justify-center">
                        <Radio className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-black font-bold block">2017 – 2018 • Crediti Formativi Accademici</span>
                      <h4 className="font-serif font-extrabold text-[#0066CC] text-xs tracking-wide mt-0.5">
                        Crediti Formativi Universitari — 24 CFU FIT
                      </h4>
                      <p className="text-black text-[11px] mt-0.5">
                        Università degli Studi • Facoltà di Scienze della Formazione
                      </p>
                      <p className="text-[#656E7B] mt-1 text-[11px]">
                        Coordinamento didattico: Pedagogia Speciale e Didattica per l'Inclusione (30/30 con Lode) • Fondamenti di Didattica per l'Insegnamento (30/30 con Lode) • Antropologia Culturale (28/30).
                      </p>
                    </div>
                  </div>

                  {/* Teaching History */}
                  <div className="p-4 bg-white border border-[#0066CC] rounded-xl">
                    <h5 className="font-serif font-bold text-xs text-black tracking-wide mb-2">
                      Esperienza di Docenza d'Aula (2005 – 2016)
                    </h5>
                    <p className="text-[11px] text-black leading-relaxed mb-2">
                      Ha esercitato la docenza in <strong>Storia dell'Arte</strong> ed estetica integrando metodologie transdisciplinari quali archetipi junghiani, fenomenologia, storia delle tradizioni:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-black">
                      <div>• Istituto Newton (Liceo)</div>
                      <div>• Istituto Jervolino (Liceo)</div>
                      <div>• Istituto Superiore Futura</div>
                      <div>• Istituto Nobel (Liceo)</div>
                    </div>
                  </div>

                </div>
              )}

              {/* Awards, Recognitions & TV shows */}
              {activeSubTab === 'awards' && (
                <div className="space-y-4 animate-fade-in">
                  
                  <div className="grid grid-cols-1 gap-3.5">
                    
                    <div className="p-4 bg-white border border-[#0066CC] rounded-xl">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-[#0066CC] font-mono">Anno 2014</span>
                        <span className="bg-emerald-100 text-emerald-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">PRESIDENTE REPUBBLICA</span>
                      </div>
                      <h4 className="font-serif font-bold text-xs text-black tracking-wide mt-1">
                        Premio Nazionale Ecomondo Green Economy
                      </h4>
                      <p className="text-[11px] text-black mt-1">
                        Vincitore del premio per la "Migliore Invenzione e Brevetto Industriale" nel settore della sostenibilità ambientale ed economia circolare con adesione del Presidente della Repubblica per il dispositivo GeniusOm.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#0066CC] rounded-xl">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-[#0066CC] font-mono">Anno 2015</span>
                        <span className="bg-blue-100 text-blue-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">MEDIASET ITALIA 1</span>
                      </div>
                      <h4 className="font-serif font-bold text-xs text-black tracking-wide mt-1">
                        Vittoria a Shark Tank Italia
                      </h4>
                      <p className="text-[11px] text-black mt-1">
                        Premiato con offerta straordinaria e investimento formale confermato di <strong>€250.000</strong> per la prototipazione e diffusione commerciale del compattatore domestico multifunzionale.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#0066CC] rounded-xl">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-[#0066CC] font-mono">Anno 2017</span>
                        <span className="bg-red-100 text-red-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">RAI DUE NAZIONALE</span>
                      </div>
                      <h4 className="font-serif font-bold text-xs text-black tracking-wide mt-1">
                        Presentazione Rai 2 • "I Fatti Vostri"
                      </h4>
                      <p className="text-[11px] text-black mt-1">
                        Ospite televisivo ufficiale in diretta con Giancarlo Magalli per illustrare e dmostrare pubblicamente il funzionamento della compattazione organica.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#0066CC] rounded-xl">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-[#0066CC] font-mono">Anno 2025</span>
                        <span className="bg-white border border-black text-[#0066CC] text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">CERN ZENODO</span>
                      </div>
                      <h4 className="font-serif font-bold text-xs text-black tracking-wide mt-1">
                        Pubblicazione Teoria della Coscienza
                      </h4>
                      <p className="text-[11px] text-black mt-1">
                        Archiviazione permanente e rilascio isocronico degli indici DOI per i quattro volumi della trilogia scientifica di fisica teorica e risonanza hertziana biologica.
                      </p>
                    </div>

                  </div>

                </div>
              )}

              {/* Patents & Registered Inventions Tab */}
              {activeSubTab === 'patents' && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-black text-[11px]">
                    Essendo erede di una dinastia familiare di inventori affermata a tre generazioni, il Dott. Luca Falace ha registrato personalmente 41 invenzioni logiche e instaurato 3 brevetti industriali d'impatto elevato:
                  </p>

                  <div className="space-y-3 font-mono text-[11px]">
                    
                    <div className="p-3.5 border border-[#0066CC] bg-white rounded-xl flex gap-3">
                      <FileCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[8.5px] font-bold bg-white text-black px-1 py-0.5 rounded">Brevetto UIBM 1</span>
                        <h5 className="font-sans font-black text-xs text-black mt-1 leading-snug">
                          Aeromassaggiatore ad Aria Sincronizzato
                        </h5>
                        <p className="text-black text-[9px] mt-0.5">Codice: ITNA20040063A1 • Deposito: 26 marzo 2004</p>
                        <p className="font-sans text-[#656E7B] mt-1 text-[11px]">
                          Pannello con micro-ugelli vibranti che emettono impulsi ad aria con andamenti fisici oscillatori tra 8Hz e 24Hz. Sviluppato e distribuito in 30 esemplari commerciali esclusivi.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 border border-[#0066CC] bg-white rounded-xl flex gap-3">
                      <FileCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[8.5px] font-bold bg-[#0066CC] text-white px-1 py-0.5 rounded">Brevetto UIBM 2 • Green</span>
                        <h5 className="font-sans font-black text-xs text-black mt-1 leading-snug">
                          GeniusOm — Compattatore Domestico Multiplo
                        </h5>
                        <p className="text-black text-[9px] mt-0.5">Codice: ITNA20130029A1 • Deposito: 22 maggio 2013</p>
                        <p className="font-sans text-[#656E7B] mt-1 text-[11px]">
                          Pneumatico differenziatore con riduzione della massa volumetrica del 90%. Progettato con ex ingegneri NASA ed investito da Fabio Cannavale. Offerto in licenza umanitaria.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 border border-[#0066CC] bg-white rounded-xl flex gap-3">
                      <FileCheck className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[8.5px] font-bold bg-white border border-black text-[#0066CC] px-1 py-0.5 rounded">Brevetto UIBM 3 • Umanitario</span>
                        <h5 className="font-sans font-black text-xs text-black mt-1 leading-snug">
                          Eco-Tuta Termodinamica Climatizzata
                        </h5>
                        <p className="text-black text-[9px] mt-0.5">Codice: IT201800003616U1 • Deposito: 16 febbraio 2018</p>
                        <p className="font-sans text-[#656E7B] mt-1 text-[11px]">
                          Tuta auto-alimentata con canali idraulici per impieghi in contesti termici estremi. Donata formalmente e gratuitamente al Movimento Europeo Italia per scopi di protezione civile durante la pandemia COVID-19.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* Validation Disclaimer banner */}
            <div className="bg-white px-6 py-3 border-t border-[#0066CC] flex flex-col md:flex-row justify-between items-center gap-3 shrink-0 text-[10px] font-mono text-black">
              <span className="flex items-center flex-wrap gap-1.5 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Tutela 6 Enti: MiBAC • UIBM • OPAC SBN-ISBN • CERN Zenodo • Dds Discoteca • MAXXI</span>
              </span>
              <span className="text-[9px] text-[#0066CC] font-black">
                REGISTRO DIRITTI D'AUTORE AIC © 2005-2026
              </span>
            </div>

            {/* Bottom Actions footer */}
            <div className="bg-white border-t border-black px-6 py-4 flex justify-between items-center shrink-0">
              <span className="text-[10px] font-mono text-black">
                FDL Falace Design Lab • Tutti i diritti protetti
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-white border border-black hover:bg-[#0066CC] hover:text-white text-[#0066CC] text-xs font-black tracking-wider rounded-lg transition-all cursor-pointer"
              >
                Chiudi Biografia
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
