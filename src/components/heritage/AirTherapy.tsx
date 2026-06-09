import React, { useState } from 'react';
import { Wind, Cpu, ShieldAlert, CheckCircle, Clock, FileCheck, Layers, HelpCircle } from 'lucide-react';

export default function AirTherapy() {
  const [pulseFreq, setPulseFreq] = useState(12);
  const [isActive, setIsActive] = useState(false);
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(0);

  const timelineSteps = [
    {
      year: "1998",
      title: "Il Concepimento Intuitivo",
      desc: "Il Dott. Luca Falace concepisce l'idea della 'Terapia dell'Aria' basando la stimolazione biologica su flussi d'aria modulati e compressioni controllate in campane di risonanza."
    },
    {
      year: "2004",
      title: "Deposito Brevettuale UIBM",
      desc: "Deposito ufficiale del brevetto d'invenzione industriale presso l'UIBM con verbale NA2004A000063 in data 11/11/2004. Ingegnerizzazione co-curata da Lucio Falace."
    },
    {
      year: "2005",
      title: "Tesi di Anteriorità 'L'Opera Celeste'",
      desc: "Pubblicazione dettagliata del principio terapeutico nel volume 'L'Opera Celeste'. Questa opera garantisce per legge la priorità e la tesi di anteriorità del Dott. Luca Falace."
    },
    {
      year: "2006",
      title: "Estensione Internazionale PCT",
      desc: "Pubblicazione internazionale del brevetto d'invenzione PCT con codice WO2006051414A1, registrato a Ginevra e distribuito commercialmente con il marchio Prokaire."
    }
  ];

  return (
    <div className="bg-white border border-[#0066CC] rounded-2xl p-6  space-y-6">
      
      {/* Header and Title */}
      <div className="flex items-center gap-3 border-b border-[#0066CC] pb-4">
        <div className="p-2 bg-amber-50 border border-amber-100 rounded-xl">
          <Wind className="w-5 h-5 text-[#0066CC]" />
        </div>
        <div>
          <h3 className="font-serif font-black text-sm text-black tracking-wide uppercase">
            Aero-Massaggiatore Meccanico
          </h3>
          <p className="text-[9px] font-mono text-[#0066CC] uppercase tracking-wider block font-bold mt-0.5">
            Terapia dell'Aria • Brevetto WO2006051414A1
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-655 leading-relaxed font-sans text-justify">
        Ideato dal <strong>Dott. Luca Falace</strong> nel 1998 e ingegnerizzato con la competenza tecnica elettronica di <strong>Lucio Falace</strong>, questo pionieristico dispositivo pneumatico a campana eroga micro-impulsi d'aria per stimolare l'epidermide in corrispondenza del quarto chakra corporeo.
      </p>

      {/* Simulator Unit */}
      <div className="bg-white border border-[#0066CC] rounded-xl p-4.5 space-y-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#0066CC]" />
          <span className="text-[10px] font-mono font-bold text-black uppercase tracking-wider">
            Consolle di Modulazione d'Aria
          </span>
        </div>

        <div>
          <label className="flex justify-between text-[10px] font-mono text-black uppercase pb-1.5 font-bold">
            <span>Frequenza d'Aria Compressa</span>
            <span className="text-[#0066CC]">{pulseFreq} Hz ({pulseFreq < 13 ? 'Rapsodia Theta' : pulseFreq < 20 ? 'Ottava Alfa' : 'Ottava Beta'})</span>
          </label>
          
          <input 
            type="range" 
            min="8" 
            max="24" 
            value={pulseFreq} 
            onChange={(e) => setPulseFreq(Number(e.target.value))}
            className="w-full h-1.5 bg-[#EAE6DF] rounded-lg appearance-none cursor-pointer accent-[#0066CC] mb-1" 
          />
          <span className="text-[8.5px] text-black block font-mono">
            Rapportato ai cicli di risonanza solare ed endocranica
          </span>
        </div>

        <div className="flex justify-between items-center bg-white border border-[#0066CC] p-3 rounded-lg">
          <span className="text-[10.5px] font-sans font-bold text-black">Stato del Circuito</span>
          <button 
            onClick={() => setIsActive(!isActive)}
            className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              isActive 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white border border-black text-[#0066CC] hover:bg-[#1C3E75]'
            }`}
          >
            {isActive ? '● IN FUNZIONE (SIMULATO)' : 'ATTIVA EMISSIONE'}
          </button>
        </div>

        {isActive && (
          <div className="flex items-start gap-2 text-[10px] font-sans text-emerald-800 bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-lg animate-pulse">
            <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
            <div>
              <p className="font-bold">Ciclo Attivo a {pulseFreq} Hz</p>
              <p className="text-[9px] text-emerald-700 leading-normal mt-0.5 font-mono select-none">
                Erogazione di getti d'aria termodinamica sinusoidale con andamento ad onde d'urto isocroniche. Campana FDL accoppiata.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Timeline of Development */}
      <div className="border border-[#0066CC] rounded-xl p-4 bg-white space-y-3">
        <span className="text-[9.5px] font-mono text-[#0066CC] uppercase tracking-wider font-black block flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>CRONISTORIA DI ANTERIORITÀ (1998-2006)</span>
        </span>

        <p className="text-[9.5px] text-black font-sans leading-normal">
          Seleziona gli anni storici per visualizzare la tutela cronologica stabilità dagli uffici brevettuali mondiali:
        </p>

        {/* Timeline Buttons */}
        <div className="grid grid-cols-4 gap-1">
          {timelineSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTimelineStep(idx)}
              className={`py-1.5 rounded-lg font-mono font-black text-xs transition-all cursor-pointer ${
                activeTimelineStep === idx
                  ? 'bg-white border border-black text-[#0066CC] border border-[#0066CC]'
                  : 'bg-white text-black border border-[#0066CC] hover:bg-white'
              }`}
            >
              {step.year}
            </button>
          ))}
        </div>

        {/* Selected Step Description */}
        <div className="bg-white border border-[#0066CC] p-3 rounded-lg animate-fade-in text-[10.5px]">
          <h5 className="font-serif font-black text-black uppercase mb-1 flex items-center gap-1 text-[11px]">
            <FileCheck className="w-3.5 h-3.5 text-[#0066CC]" />
            <span>{timelineSteps[activeTimelineStep].title}</span>
          </h5>
          <p className="text-black leading-relaxed font-sans text-justify">
            {timelineSteps[activeTimelineStep].desc}
          </p>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="flex gap-2 text-[9px] font-mono text-black border-t border-[#0066CC] pt-3.5">
        <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-[#0066CC]" />
        <span>Terapia dell'Aria è un marchio registrato e tutelato. I dati storici sono depositati in via permanente SBN IT.</span>
      </div>

    </div>
  );
}
