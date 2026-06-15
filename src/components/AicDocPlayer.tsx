import React, { useState } from 'react';
import { 
  FileText, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, 
  ZoomIn, ZoomOut, RotateCcw, Search, BookOpen, ShieldCheck, 
  Download, Printer, Maximize2, Minimize2, CheckCircle2, Bookmark, Info, HelpCircle, GraduationCap
} from 'lucide-react';

interface DocumentPage {
  pageNumber: number;
  title?: string;
  content: React.ReactNode;
}

interface DocumentData {
  id: string;
  title: string;
  subtitle: string;
  totalPages: number;
  chapters: { title: string; page: number }[];
  pages: DocumentPage[];
}

interface AicDocPlayerProps {
  documentId: 'sviluppo' | 'sede' | 'corsi' | 'carteggio';
}

export default function AicDocPlayer({ documentId }: AicDocPlayerProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(100);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showIndex, setShowIndex] = useState<boolean>(true);
  const [searchAlert, setSearchQueryAlert] = useState<string>('');

  // 1. Dati Documento 1: Progetto Sviluppo Fondazione AIC
  const docSviluppo: DocumentData = {
    id: 'sviluppo',
    title: 'PROGETTO DI SVILUPPO PER LA FONDAZIONE AIC',
    subtitle: 'Strategia del business sociale e Social Model - Atto per il Notaio',
    totalPages: 5,
    chapters: [
      { title: 'Copertina Istituzionale', page: 1 },
      { title: 'Business Plan e Finanza Sociale', page: 2 },
      { title: 'Articolo 2 (Scopo & Didattica)', page: 3 },
      { title: 'Articolo 20 (Direzione e Onorari)', page: 4 },
      { title: 'Normativa e Statuto del Terzo Settore', page: 5 }
    ],
    pages: [
      {
        pageNumber: 1,
        title: 'Frontespizio del Volume di Sviluppo',
        content: (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6 bg-slate-50 border-2 border-slate-200">
            <span className="text-[11px] font-mono tracking-widest text-[#0066CC] font-bold">REGISTRO NOTARILE UFFICIALE</span>
            <div className="w-20 h-20 bg-[#0066CC] text-white flex items-center justify-center rounded-none shadow-md">
              <BookOpen className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-serif font-black text-black">PROGETTO DI SVILUPPO</h1>
              <h2 className="text-lg font-serif font-bold text-slate-800">PER LA FONDAZIONE AIC</h2>
              <p className="text-xs text-slate-500 font-mono">Volume I — Anno Costitutivo 2023-2024</p>
            </div>
            <div className="border-t border-slate-200 mt-6 pt-6 max-w-md">
              <p className="text-[11px] text-slate-600 leading-relaxed italic">
                "Strategia del business sociale della Fondazione AIC e Social Model. Un compendio completo di 190 capitoli depositato per la stesura dell'Atto Pubblico."
              </p>
            </div>
            <div className="bg-white border text-center p-3 text-[10px] w-full text-slate-500 font-mono max-w-xs space-y-1">
              <div>REGISTRO GENERALE</div>
              <div className="font-bold text-[#0066CC]">COD. NOT. FALACE-24-NIKE</div>
            </div>
          </div>
        )
      },
      {
        pageNumber: 2,
        title: 'Business Plan e Regolamento Finanziario',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">PARTE SECONDA: BUSINESS SOCIALE E NO-PROFIT</h4>
            <p className="text-slate-600 leading-relaxed">
              Il Progetto di Sviluppo definisce la <strong>Fondazione Culturale AIC</strong> come un'organizzazione sociale volta alla redistribuzione totale dei proventi didattici per l’evoluzione della comunità. Come previsto dal modello di <strong>Social Business</strong> elaborato da Luca Falace, la fondazione non persegue alcun fine lucrativo diretto o indiretto.
            </p>
            <div className="bg-[#0066CC]/5 border-l-4 border-[#0066CC] p-3 text-slate-850">
              <p className="font-semibold mb-1">Destinazione dei Flussi Attivi:</p>
              Le entrate derivanti dai 40 corsi coprono unicamente i costi operativi dello staff, l’ammortamento delle infrastrutture immersive 3D, e le borse di studio per meriti artistici ed intellettuali destinate ai giovani svantaggiati.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 border border-slate-200 bg-white">
                <span className="font-mono text-[#0066CC] font-bold block mb-1">ACCESSIBILITÀ</span>
                La Didattica è strutturata in 2 livelli di contribuzione, con opzione gratuita per i residenti della regione e gli studenti iscritti.
              </div>
              <div className="p-3 border border-slate-200 bg-white">
                <span className="font-mono text-[#0066CC] font-bold block mb-1">FONDO REINVESTIMENTI</span>
                Il 100% delle rendite eccedenti confluisce nel fondo di dotazione vincolato per l'acquisizione di nuove scoperte.
              </div>
            </div>
          </div>
        )
      },
      {
        pageNumber: 3,
        title: 'Estratti Articolo 2 (Scopo & Didattica)',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">FONDAZIONE DELLE ATTIVITÀ INTELLETTIVE CREATIVE — STATUTO ART. 2</h4>
            <div className="bg-slate-50 border p-4 space-y-3 font-serif italic text-slate-700">
              <p className="leading-relaxed">
                "La Fondazione si occupa della tutela, della formazione, della promozione delle Attività Creative Intellettuali, principalmente nei settori delle Arti, delle Scienze e della Medicina Unita."
              </p>
              <p className="leading-relaxed">
                "Tutte le attività didattiche e ricreative vertono sul potenziamento globale del pensiero divergente dei candidati, in risonanza con il metodo del Sincronismo Creativo del presidente fondatore."
              </p>
            </div>
            <div className="space-y-2 mt-2">
              <span className="text-[10px] font-mono text-[#0066CC] block uppercase tracking-wider font-bold">Integrazioni Statutarie Incorporate:</span>
              <ul className="list-disc pl-5 text-slate-600 space-y-1 text-[11px]">
                <li>Esclusione totale di speculazione finanziaria nell'Art. 4.</li>
                <li>Rapporti diretti con il Ministero della Ricerca Scientifica ed Università accreditate Nazionali ed Estere.</li>
                <li>Istituzione di mostre, premi ed editorie per la divulgazione del Saggio Nazionale.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        pageNumber: 4,
        title: 'Articolo 20 (Presidenza Onoraria a Vita di Luca Falace)',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">GARANZIE DI PATERNITÀ & CARICHE — STATUTO ARTICOLO 20</h4>
            <div className="bg-[#0066CC]/5 border border-dashed border-[#0066CC] p-4 text-slate-900 space-y-2.5">
              <strong className="font-serif block text-[#0066CC] uppercase tracking-wide text-xs">Patto di Salvaguardia Originario:</strong>
              <p className="font-serif italic leading-relaxed text-[11px]">
                "La Presidenza Onoraria della Fondazione è conferita a vita al Dott. Luca Falace. Essa attribuisce poteri di sorveglianza morale, decisionale sul metodo d'insegnamento e direzione degli archivi, a tutela della paternità scientifica delle sue invenzioni registrate."
              </p>
            </div>
            <div className="space-y-2 text-[11px] text-slate-600">
              <p>
                Questo articolo garantisce che nessun subentro amministrativo possa alterare l'essenza didattica e spirituale del corpus delle opere, tutelate secondo le leggi sul diritto d'autore e deposito brevetti.
              </p>
              <p className="bg-rose-50 text-slate-800 p-2 font-mono text-[9.5px]">
                ⚠️ NOTA LEGALE: Qualsiasi modifica all'Art. 20 inficia l'intero Atto e comporta la revoca immediata delle concessioni del nome "AIC" e dei loghi fondativi.
              </p>
            </div>
          </div>
        )
      },
      {
        pageNumber: 5,
        title: 'Adeguamento al Codice del Terzo Settore',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">PARTE QUINTA: COMPATIBILITÀ ETS & NORME INTERNE</h4>
            <p className="text-slate-600 leading-relaxed">
              Il documento si conclude con l’allineamento teorico alle direttive del <strong>Codice del Terzo Settore (Decreto Legislativo n. 117 del 2017)</strong> e l'iscrizione al Registro Unico Nazionale del Terzo Settore (RUNTS).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 border">
                <span className="font-serif block font-bold text-sm">30.000 €</span>
                <span className="text-[10px] text-slate-500 font-mono">Patrimonio Minimo</span>
              </div>
              <div className="p-3 bg-slate-50 border">
                <span className="font-serif block font-bold text-sm">7 Membri</span>
                <span className="text-[10px] text-slate-500 font-mono">Consiglio Minimo</span>
              </div>
              <div className="p-3 bg-slate-50 border">
                <span className="font-serif block font-bold text-sm">BILANCIO</span>
                <span className="text-[10px] text-slate-500 font-mono">Trasparenza Annua</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 italic">
              *Approvato con autocertificazione dei soci fondatori e depositata per i requisiti UIBM notarili di fine anno.
            </p>
          </div>
        )
      }
    ]
  };

  // 2. Dati Documento 2: Progetto Sede Fondazione AIC
  const docSede: DocumentData = {
    id: 'sede',
    title: 'PROGETTO ARCHITETTONICO & LAYOUT 3D SEDE',
    subtitle: 'Raffigurazione degli interni e ambienti di studio - Documento Riservato ai Soci',
    totalPages: 6,
    chapters: [
      { title: 'Copertina Progetto Sede', page: 1 },
      { title: 'Ingresso & Reception', page: 2 },
      { title: 'Sale Esposizione d\'Arte', page: 3 },
      { title: 'Aule Corsi & Didattica', page: 4 },
      { title: 'Spazi CdA & Riunioni', page: 5 },
      { title: 'Specifiche e Stile Interno', page: 6 }
    ],
    pages: [
      {
        pageNumber: 1,
        title: 'Copertina Progetto Sede',
        content: (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6 bg-[#0066CC]/5 border-2 border-[#0066CC]/20">
            <span className="text-[10px] font-mono tracking-widest text-[#0066CC] font-bold">DISEGNO TECNICO 3D</span>
            <div className="relative w-full max-w-xs aspect-video bg-slate-100 border overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 opacity-60 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" 
                alt="Sede rendering" 
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="z-20 text-white p-4 space-y-1">
                <span className="text-[12px] font-serif font-black uppercase text-[#0066CC] bg-white px-2 py-0.5">Sede AIC</span>
                <p className="text-[10px] font-mono">Modellazione Struttura 3D</p>
              </div>
            </div>
            <div className="space-y-1.5">
              <h1 className="text-xl font-serif font-black text-black">PROGETTO SEDE FONDAZIONE</h1>
              <p className="text-xs text-slate-500 font-mono">Layout, Planimetrie ed Allestimenti Ambienti</p>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal max-w-sm italic">
              "Esempio di vari ambienti presenti nella fondazione. Questi possono variare a seconda del tipo di attività e delle esigenze specifiche."
            </p>
          </div>
        )
      },
      {
        pageNumber: 2,
        title: 'Area Ingresso e Reception',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <div className="flex justify-between items-center border-b pb-2">
              <strong className="text-xs font-bold text-black font-serif">AULA RECEPTION: PRIMO IMPATTO VISIVO</strong>
              <span className="text-[9px] font-mono text-[#0066CC]">RENDERING #02/10</span>
            </div>
            <div className="flex gap-4 items-start flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 aspect-square bg-slate-200 shrink-0 border overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=200&q=80" 
                  alt="Reception rendering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h5 className="font-serif font-bold text-black text-xs">Welcome Desk & Orientamento Soci:</h5>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  <strong>Ingresso e reception:</strong> questa è l'area principale in cui i visitatori accedono alla fondazione e vengono accolti dagli addetti alla reception. Questo spazio deve essere accogliente e funzionale, con spazio sufficiente per orientare i candidati verso le aule.
                </p>
                <div className="p-2.5 bg-slate-50 border">
                  <span className="font-mono text-[#0066CC] font-bold block mb-1">DOTAZIONE TECNICA:</span>
                  Desk in vetro strutturale, terminali informatici connessi al database della fondazione, display led con calendario lezioni e streaming hertziano.
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        pageNumber: 3,
        title: 'Sale Esposizione d\'Arte',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <div className="flex justify-between items-center border-b pb-2">
              <strong className="text-xs font-bold text-black font-serif">GALLERIA E SALA ESPOSIZIONI CONTEMPORANEE</strong>
              <span className="text-[9px] font-mono text-[#0066CC]">RENDERING #03/10</span>
            </div>
            <div className="flex gap-4 items-start flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 aspect-square bg-slate-200 shrink-0 border overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1482245293239-db21a588546f?auto=format&fit=crop&w=200&q=80" 
                  alt="Gallery rendering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h5 className="font-serif font-bold text-black text-xs">Sala Espositiva d'Avanguardia:</h5>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  <strong>Sala esposizione:</strong> questa è un'area in cui la fondazione ospita e mostra opere d'arte, oggetti storici e scientifici d'alto ingegno. Questo spazio dispone di un sistema d'illuminazione a LED su binari dimmerabili per mettere in risalto l'estetica delle 151 opere del patrimonio Falace.
                </p>
                <div className="p-2.5 bg-[#0066CC]/5 border border-[#0066CC]/20 text-[10.5px]">
                  💡 <strong>Allestimento Tecnico:</strong> Pareti mobili in tamburato bianco, sostegni a soffitto invisibili per tele colossali, pavimentazione in parquet lucido antiriflesso.
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        pageNumber: 4,
        title: 'Aule Corsi & Didattica',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <div className="flex justify-between items-center border-b pb-2">
              <strong className="text-xs font-bold text-black font-serif">AULE MULTIMEDIALI PER CORSI DI FORMAZIONE</strong>
              <span className="text-[9px] font-mono text-[#0066CC]">RENDERING #05/10</span>
            </div>
            <div className="flex gap-4 items-start flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 aspect-square bg-slate-200 shrink-0 border overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&q=80" 
                  alt="Classroom rendering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h5 className="font-serif font-bold text-black text-xs">Aule Teoriche e Sperimentali:</h5>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  <strong>Aule per i corsi di formazione:</strong> progettate per ospitare lezioni e seminari dei 40 moduli accademici. Ciascuna aula è dotata di supporti moderni, sedUTE ergonomiche, lavagna interattiva a cristalli liquidi, proiettore ad alta definizione e tavoli rimodulabili per laboratori pratici.
                </p>
                <div className="p-2.5 bg-slate-50 border">
                  🎯 <strong>Capacità:</strong> Fino a 35 iscritti per modulo, con ventilazione climatizzata termodinamica asettica brevettata Luca Falace.
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        pageNumber: 5,
        title: 'Spazi CdA & Riunioni',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <div className="flex justify-between items-center border-b pb-2">
              <strong className="text-xs font-bold text-black font-serif">SALA CDA & MEETING STATUTARI</strong>
              <span className="text-[9px] font-mono text-[#0066CC]">RENDERING #06/10</span>
            </div>
            <div className="flex gap-4 items-start flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 aspect-square bg-slate-200 shrink-0 border overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=200&q=80" 
                  alt="Boardroom rendering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h5 className="font-serif font-bold text-black text-xs">Sala Consiglio d'Amministrazione:</h5>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  <strong>Spazi per le riunioni:</strong> se il CdA o i soci fondatori devono riunirsi per deliberare su bilanci o nuovi moduli, questa sala offre un tavolo massivo in acciaio e cristallo satinato, pareti insonorizzate per la massima riservatezza e connettività video internazionale.
                </p>
                <div className="p-2.5 bg-slate-50 border">
                  📋 <strong>Presidenza Onoraria:</strong> Seduta monumentale riservata permanente sul lato est per Luca Falace, custode unico del carteggio.
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        pageNumber: 6,
        title: 'Specifiche e Stile Interno',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">CAPITOLATO DELLE FINITURE E STILE SEDE</h4>
            <p className="text-[11px] text-slate-600">
              Il design degli ambienti interni del Progetto Sede segue una precisa filosofia minimalista volta a stimolare la concentrazione emisferica ed il benessere affettivo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-3 bg-slate-50 border border-slate-200">
                <strong className="block text-[#0066CC] mb-1 font-mono uppercase">Pavimentazione e Pareti:</strong>
                Parquet in legno massello chiaro trattato con vernici biologiche, pareti bianche lucide amplificatrici di luce naturale e ampie vetrate ad arco.
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200">
                <strong className="block text-[#0066CC] mb-1 font-mono uppercase">Materiali ed Elementi:</strong>
                Binomio di acciaio spazzolato e vetro acrilico, eliminazione di spigoli vivi (secondo il Chi del Feng Shui), schermi touch embedded.
              </div>
            </div>
            <div className="border border-[#0066CC]/20 bg-[#0066CC]/5 p-3 font-mono text-[9px] text-[#0066CC] uppercase tracking-wide text-center font-bold">
              PIANO DI REALIZZAZIONE STRUTTURALE RATIFICATO 2024
            </div>
          </div>
        )
      }
    ]
  };

  // 3. Dati Documento 3: Corsi di Formazione
  const docCorsi: DocumentData = {
    id: 'corsi',
    title: 'MANIFIESTO NAZIONALE CORSI & CLASSIFICAZIONE AULE',
    subtitle: 'La didattica formativa, il manifesto dei 40 corsi e le aule di studio',
    totalPages: 5,
    chapters: [
      { title: 'Copertina Piano Didattico', page: 1 },
      { title: 'Filosofia Formativa & Prevenzione', page: 2 },
      { title: 'Piano di Studi (Corsi 1-20)', page: 3 },
      { title: 'Piano di Studi (Corsi 21-40)', page: 4 },
      { title: 'Assegnazione Matematica Aule', page: 5 }
    ],
    pages: [
      {
        pageNumber: 1,
        title: 'Copertina Piano Didattico',
        content: (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6 bg-rose-50/20 border-2 border-rose-200">
            <span className="text-[10px] font-mono tracking-widest text-rose-700 font-bold uppercase">MANIFESTO DIDATTICO ACCADEMICO</span>
            <div className="w-20 h-20 bg-rose-700 text-white flex items-center justify-center rounded-none shadow-md">
              <GraduationCap className="w-10 h-10" />
            </div>
            <div className="space-y-1.5">
              <h1 className="text-xl font-serif font-black text-rose-900 uppercase">FONDAZIONE AIC CORSI</h1>
              <p className="text-xs text-rose-800 font-mono">I 40 Moduli Didattici Notarili del 2024</p>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal max-w-sm italic">
              "La didattica formativa sarà tra le prime attività lavorative certe e quotidiane, che andrà a svolgere la Fondazione. L'iscrizione è aperta a tutti i giovani, docenti e studiosi del Sincronismo."
            </p>
            <div className="bg-white border text-center p-2 text-[10px] w-full text-slate-500 font-mono max-w-xs uppercase">
              UFFICIO ACCADEMICO
            </div>
          </div>
        )
      },
      {
        pageNumber: 2,
        title: 'Filosofia Formativa & Centro d\'Ascolto Giovani',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-rose-905 border-b border-rose-100 pb-2">AULA PREVENZIONE E CENTRO D'ASCOLTO GIOVANI</h4>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              La Fondazione AIC non è solo un centro di formazione di alto livello, ma assolve uno scopo sociale vitale rivolto al benessere evolutivo delle nuove generazioni:
            </p>
            <div className="p-4 bg-rose-50/50 border border-thin border-rose-200 text-rose-900">
              <p className="font-serif italic font-semibold leading-relaxed">
                "Ci sarà l'aula specifica destinata al centro di ascolto per i giovani per la prevenzione. Aula check point punto di ascolto Giovani."
              </p>
            </div>
            <p className="text-slate-600 leading-normal">
              Questo spazio è gestito con il coordinamento di psicologi, counseling e soci fondatori, offrendo servizi d'ascolto gratuito, orientamento professionale e laboratori di creatività per allontanare i giovani dalle condizioni di solitudine, marginalità o disagio sociale urbano.
            </p>
          </div>
        )
      },
      {
        pageNumber: 3,
        title: 'Piano di Studi (Corsi 1-20)',
        content: (
          <div className="space-y-3 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b pb-1">INDICE CORSI DI FORMAZIONE (DA 1 A 20)</h4>
            <div className="max-h-[300px] overflow-y-auto divide-y divide-slate-100 pr-1 scrollbar-thin text-[11px]">
              {[
                { n: 1, name: 'Lingue Straniere', desc: 'Inglese, francese, spagnolo, giapponese per la conversazione fluida.' },
                { n: 2, name: 'Tecnologia & Informatica', desc: 'Sviluppo web front-end, data science e sicurezza informatica.' },
                { n: 3, name: 'Marketing & Business', desc: 'Marketing digitale, economia sociale, finanza etica e leadership.' },
                { n: 4, name: 'Fotografia & Videografia', desc: 'Fotografia digitale professionale, camera d\'animazione e montaggio.' },
                { n: 5, name: 'Cucina & Pasticceria', desc: 'Gastronomia italiana d\'avanguardia e dolci ornamentali.' },
                { n: 6, name: 'Yoga & Benessere', desc: 'Teorie yogiche, rilassamento attivo ed espansione mentale.' },
                { n: 7, name: 'Arte & Design', desc: 'Disegno manuale, pittura, grafica vettoriale e architettura.' },
                { n: 8, name: 'Sport & Fitness', desc: 'Danza espressiva, ginnastica posturale e autodifesa olistica.' },
                { n: 9, name: 'Coaching & Sviluppo', desc: 'Autostima, programmazione neuro-intenzionale, empatia relazionale.' },
                { n: 10, name: 'Scrittura & Narrazione', desc: 'Scrittura creativa, giornalismo d\'inchiesta e copywriting.' }
              ].map(c => (
                <div key={c.n} className="py-2 flex items-start gap-2.5">
                  <span className="font-mono text-rose-700 font-bold shrink-0">#{c.n}</span>
                  <div>
                    <strong className="text-black block text-xs">{c.name}</strong>
                    <span className="text-slate-500 text-[10.5px] leading-snug">{c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-[9px] font-mono text-slate-400 block text-right uppercase">PROGRAMMA ACCADEMICO ANNO 2024</span>
          </div>
        )
      },
      {
        pageNumber: 4,
        title: 'Piano di Studi (Corsi 21-40)',
        content: (
          <div className="space-y-3 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b pb-1">INDICE CORSI DI FORMAZIONE (DA 21 A 40)</h4>
            <div className="max-h-[300px] overflow-y-auto divide-y divide-slate-100 pr-1 scrollbar-thin text-[11px]">
              {[
                { n: 21, name: 'Leadership & Time Management', desc: 'Gestione del tempo di lavoro d\'ingegno, programmazione attività.' },
                { n: 22, name: 'Negoziazione & Mediazione', desc: 'Dialettica, risoluzione conflitti e dinamiche d\'impresa.' },
                { n: 23, name: 'Salute & Alimentazione', desc: 'Nutrizione biologica etica e ritmi bioenergetici.' },
                { n: 24, name: 'Interior & Bioarchitettura', desc: 'Arredamento, decorazione artistica integrata e sostenibilità.' },
                { n: 25, name: 'Gestione Progetti', desc: 'Metodologie agili per il lavoro di squadra e collaborazione.' },
                { n: 26, name: 'Lingua dei Segni', desc: 'Comunicazione mimico-gestuale nazionale e internazionale.' },
                { n: 27, name: 'Scrittura Tecnica', desc: 'Dispense scientifiche, brevetti ed editoriali.' },
                { n: 28, name: 'Storytelling per il Marketing', desc: 'Sviluppo di campagne narrative complesse.' },
                { n: 29, name: 'Leadership Femminile', desc: 'Empowerment, programmi di affiancamento aziendale.' },
                { n: 30, name: 'Blockchain & Web3', desc: 'Nodi, smart contract e sicurezza reti decentrate.' }
              ].map(c => (
                <div key={c.n} className="py-2 flex items-start gap-2.5">
                  <span className="font-mono text-rose-700 font-bold shrink-0">#{c.n}</span>
                  <div>
                    <strong className="text-black block text-xs">{c.name}</strong>
                    <span className="text-slate-500 text-[10.5px] leading-snug">{c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-[9px] font-mono text-slate-400 block text-right uppercase">PROGRAMMA ACCADEMICO ANNO 2024</span>
          </div>
        )
      },
      {
        pageNumber: 5,
        title: 'Classificazione Matematica delle Aule',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">MATRICE UFFICIALE DI ASSEGNAZIONE DELLE AULE</h4>
            <p className="text-slate-600 text-[11px]">
              Ogni corso didattico è associato ad un'aula dedicata in base alla tipologia di attività (manuale, digitale, teorica o benessere):
            </p>
            <div className="overflow-x-auto border border-slate-200">
              <table className="w-full text-left font-sans text-[11px] divide-y divide-slate-200">
                <thead className="bg-[#0066CC] text-white">
                  <tr>
                    <th className="p-2 font-mono text-[10px]">AULA</th>
                    <th className="p-2 font-serif text-[11px] uppercase">CATEGORIA CORSI</th>
                    <th className="p-2 font-serif text-[11px] uppercase">TIPOLOGIA ATTIVITÀ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-2 font-semibold text-rose-700 font-mono">Aula 1</td>
                    <td className="p-2">Arte Visiva & Fotografia</td>
                    <td className="p-2 text-slate-500">Manualistica & Pittura Manuale/Multimediale</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-2 font-semibold text-rose-700 font-mono">Aula 2</td>
                    <td className="p-2">Scultura & Design Oggetti</td>
                    <td className="p-2 text-slate-500">Attività tridimensionali e installazioni 3D</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold text-rose-750 font-mono">Aula 3</td>
                    <td className="p-2">Architettura & Ingegneria</td>
                    <td className="p-2 text-slate-500">Design mezzi di trasporto, Arte AI</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-2 font-semibold text-rose-700 font-mono">Aula 4</td>
                    <td className="p-2">Scrittura & Regia</td>
                    <td className="p-2 text-slate-500">Attività letterarie, teatro e corti video</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold text-rose-700 font-mono">Aula Magna 5</td>
                    <td className="p-2">Benessere & Grandi Eventi</td>
                    <td className="p-2 text-slate-500">Mostre, yoga, olistica, nutrizione, premi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-400 italic">
              *Come approvato a verbale della giunta accademica coordinata dal Dott. Luca Falace.
            </p>
          </div>
        )
      }
    ]
  };

  // 4. Dati Documento 4: Carteggio Storico & Tutela Copyright
  const docCarteggio: DocumentData = {
    id: 'carteggio',
    title: 'CARTEGGIO STORICO, L\'OPERA CELESTE & COPYRIGHT',
    subtitle: 'Deposito legale, antologia del portale Ning con 142k utenti (2005-2024)',
    totalPages: 5,
    chapters: [
      { title: 'Copertina Carteggio Storico', page: 1 },
      { title: 'Ning Platform L\'Opera Celeste', page: 2 },
      { title: 'I 3 Simboli dell\'Opera Celeste', page: 3 },
      { title: 'Registrazioni SIAE OLAF & MIBAC', page: 4 },
      { title: 'Bibliografia Autorevole Estera', page: 5 }
    ],
    pages: [
      {
        pageNumber: 1,
        title: 'Copertina Carteggio Storico',
        content: (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6 bg-amber-50/10 border-2 border-amber-300">
            <span className="text-[10px] font-mono tracking-widest text-amber-800 font-bold uppercase">ARCHIVIO STORICO COLOSSALE</span>
            <div className="w-20 h-20 bg-amber-800 text-white flex items-center justify-center rounded-none shadow-md">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div className="space-y-1.5">
              <h1 className="text-xl font-serif font-black text-amber-900 uppercase">COLLEGAMENTI ORIGINARI</h1>
              <p className="text-xs text-amber-800 font-mono">Luca Falace Documentazione Copyright — Oltre 1400 Pagine</p>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal max-w-sm italic">
              "L'antologia storica e le testimonianze inconfutabili di paternità depositate dal notaio a tutela dei Sincronismi Creativi. Volume di diritto d'autore del settembre 2024."
            </p>
            <div className="bg-white border text-center p-2 text-[10px] w-full text-slate-500 font-mono max-w-xs uppercase">
              TUTELA COPYRIGHT INTERNAZIONALE
            </div>
          </div>
        )
      },
      {
        pageNumber: 2,
        title: 'Ning Platform e l\'Opera Celeste (142.000 Utenti)',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-amber-905 border-b border-amber-100 pb-2">IL SUCCESSO SUL WEB: L'OPERA CELESTE (2005-2010)</h4>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Un pilastro fondamentale della prova di paternità del nome <strong>AIC / Fondazione Culturale</strong> risiede nel corpus virtuale registrato nel primo decennio degli anni duemila:
            </p>
            <div className="p-3 bg-slate-50 border rounded-none text-slate-700 space-y-2 leading-relaxed">
              <p>
                L'Associazione <strong>"L'Opera Celeste"</strong>, creata da Luca Falace, contava sulla nota piattaforma social **NING** un bacino d'utenti vastissimo:
              </p>
              <ul className="list-disc pl-5 font-mono text-[10px] text-[#0066CC] space-y-1">
                <li>Totale utenti registrati attivi: 142.000 ISCRITTI</li>
                <li>Mailing-list certificata: 150.000 in tutto il mondo</li>
                <li>Conversione digitalizzata degli arsenalicreativi fin dal 2005.</li>
              </ul>
            </div>
            <p className="text-slate-500 text-[10.5px]">
              Questi dati inconfutabili - stampati, rilegati e certificati - attestano l’inizio delle operazioni culturali molto prima della fusione notarile del 2024.
            </p>
          </div>
        )
      },
      {
        pageNumber: 3,
        title: 'I 3 Simboli dell\'Opera Celeste',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">SIMBOLOGIA ALCHEMICA E COPYRIGHT (DEPOSITATI NEL 2005)</h4>
            <div className="space-y-3.5">
              <div className="flex gap-2.5 items-start">
                <span className="p-1 px-2.5 font-bold font-mono bg-amber-100 text-amber-900 border text-[11px]">Simbolo 1</span>
                <div>
                  <strong className="text-xs block text-black font-semibold uppercase">L'ORO ALCHEMICO</strong>
                  <p className="text-slate-600 text-[10.5px]">Il simbolo della tavola degli elementi corrispondente all'Oro con iscrizione in latino: simboleggia l'intelligenza e il bene universali della "Grande Opera".</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="p-1 px-2.5 font-bold font-mono bg-amber-100 text-amber-900 border text-[11px]">Simbolo 2</span>
                <div>
                  <strong className="text-xs block text-black font-semibold uppercase">PENTACOLO DEL SOLE</strong>
                  <p className="text-slate-600 text-[10.5px]">Il sole radiante con scritta centrale "LucArtStudio" (Luca Falace), depositato a tutela delle opere grafiche ed editoriali.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="p-1 px-2.5 font-bold font-mono bg-amber-100 text-amber-900 border text-[11px]">Simbolo 3</span>
                <div>
                  <strong className="text-xs block text-black font-semibold uppercase">TAI-KI TAO (C.S.E.P. / C.E.S.P.)</strong>
                  <p className="text-slate-600 text-[10.5px]">Tavola del Tao con scritta "CSEP - Studies Center on Parallel Events". Progetto estatico registrato.</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        pageNumber: 4,
        title: 'Registrazione SIAE OLAF & Ministero',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-105 pb-2">CERTIFICATI GOVERNATIVI DI DEPOSITO LEGALE</h4>
            <p className="text-slate-600 text-[11px]">
              Tutta la documentazione del saggio "Sincronismo Creativo", le rielaborazioni video e l’Atto della Fondazione AIC recano registrazioni ufficiali dello Stato Italiano:
            </p>
            <div className="space-y-2 bg-[#0066CC]/5 border text-slate-800 p-3">
              <div className="flex items-center justify-between border-b pb-1 font-mono text-[9px]">
                <span>ENTE NOTIFICA</span>
                <span>ANNO</span>
                <span>NUMERO REGISTRO</span>
              </div>
              <div className="grid grid-cols-3 font-semibold text-[10.5px] items-center">
                <span>OLAF SIAE Roma</span>
                <span>2005</span>
                <span className="text-[#0066CC]">OLAF/05-FALACE</span>
              </div>
              <div className="grid grid-cols-3 font-semibold text-[10.5px] items-center border-t pt-1">
                <span>Ministero Beni Culturali</span>
                <span>2007</span>
                <span className="text-[#0066CC]">DEP_LEG_2658</span>
              </div>
              <div className="grid grid-cols-3 font-semibold text-[10.5px] items-center border-t pt-1">
                <span>PAN Museo Napoli</span>
                <span>2007</span>
                <span className="text-emerald-700">Acquisizione Mediateca</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 italic">
              "Il video L'Arte Alchemica è depositato legalmente in CD-Rom presso la Mediateca del Museo PAN e Discoteca di Stato a Roma."
            </p>
          </div>
        )
      },
      {
        pageNumber: 5,
        title: 'Bibliografia e Fonti Autorevoli',
        content: (
          <div className="space-y-4 font-sans text-xs">
            <h4 className="font-serif font-bold text-black border-b border-slate-100 pb-2">INSERIMENTO IN BIBLIOGRAPHY JUNGIANE CULTURALI</h4>
            <p className="text-slate-600 text-[11.5px] leading-relaxed">
              La teoria del Sincronismo Creativo del Dott. Luca Falace rappresenta un ampliamento attivo riconosciuto accademicamente e collegato direttamente a bibliografie autorevoli sulla sincronicità junghiana nazionali ed estere.
            </p>
            <div className="p-3 bg-amber-50 h-28 border border-amber-200 font-serif italic text-amber-900 flex flex-col justify-between">
              <div>
                "Il carteggio originario scambiato con l'ufficio notarile nel 2024 costituisce prova inconfutabile di paternità esclusiva, mai ceduta all'ente giuridico AIC al momento della stesura dello Statuto."
              </div>
              <span className="font-mono text-[8.5px] text-right uppercase tracking-wider block">Art. 2544 Codice Civile a tutela dell'ingegno</span>
            </div>
          </div>
        )
      }
    ]
  };

  const getDocData = (): DocumentData => {
    switch (documentId) {
      case 'sviluppo': return docSviluppo;
      case 'sede': return docSede;
      case 'corsi': return docCorsi;
      case 'carteggio': return docCarteggio;
    }
  };

  const currentDoc = getDocData();

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < currentDoc.totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
  };

  const currentPageData = currentDoc.pages.find(p => p.pageNumber === currentPage) || currentDoc.pages[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    // Semplice mockup di ricerca nel testo delle pagine
    const matchedPage = currentDoc.pages.find(p => {
      // Per rispecchiare una ricerca reale esaminiamo lo static HTML del content
      // simulato o semplicemente se c'è attinenza testuale
      const pTitle = p.title?.toLowerCase() || '';
      return pTitle.includes(searchQuery.toLowerCase());
    });

    if (matchedPage) {
      setCurrentPage(matchedPage.pageNumber);
      setSearchQueryAlert('');
    } else {
      setSearchQueryAlert(`Nessuna occorrenza per "${searchQuery}" in questo volume.`);
      setTimeout(() => setSearchQueryAlert(''), 4000);
    }
  };

  const downloadFullDocument = () => {
    // Genera un libro HTML stampabile completo e con tipografia lussuosa
    let filename = '';
    let docTitle = '';
    let htmlContent = '';

    if (documentId === 'sviluppo') {
      filename = 'Fondazione_AIC_Progetto_Sviluppo_Completo.html';
      docTitle = 'PROGETTO DI SVILUPPO PER LA FONDAZIONE CULTURALE AIC';
      htmlContent = `
        <div class="letterhead">
          <div class="reg-code">REGISTRO NOTARILE GENERALE - ARCHIVIO GENERALE</div>
          <div class="org-name">FONDAZIONE CULTURALE DELLE ATTIVITÀ INTELLETTIVE CREATIVE (AIC)</div>
          <p class="notary-mark">CANDIDATO UNICO ALL'INCORPORAZIONE ETS - D.LGS 117/2017</p>
        </div>

        <div class="draft-watermark">TESTO INTEGRALE UFFICIALE DEPOSITATO</div>

        <h1 class="main-title">PROGETTO DI SVILUPPO COMPLETO</h1>
        <h2 class="sub-title">Social Business Model elaborato dal Dott. Luca Falace & Statuto Notarile Integrale</h2>
        
        <div class="meta-box">
          <p><strong>Autore Unico Custode:</strong> Dott. Luca Falace (Presidente Onorario a Vita)</p>
          <p><strong>Codice Deposito Ministeriale:</strong> DEP_LEG_2658</p>
          <p><strong>Fondi e Patenti:</strong> Accademia Notarile Nike (Settembre 24, 2024)</p>
          <p><strong>Status Documento:</strong> Volume Unico Digitalizzato ed Unificato per il Consiglio Notarile - Sbloccato all'Utenza</p>
        </div>

        <div class="page-break"></div>

        <div class="toc">
          <h3>INDICE GENERALE DELLO STRUMENTO COSTITUTIVO</h3>
          <ul>
            <li><strong>PARTE I - LO STATUTO SOCIALE DI FONDAZIONE AIC</strong>
              <ul>
                <li>Articolo 1: Costituzione, Denominazione e Sede Legale Ufficiale</li>
                <li>Articolo 2: Scopo Sociale, Tutela dell'Ingegno e Promozione</li>
                <li>Articolo 3: Insegnamento Accademico Alternativo ed Indipendente</li>
                <li>Articolo 4: Divieto di Attività Speculativa, Reinvestimento del 100% degli Avanzi</li>
                <li>Articolo 10: Consiglio di Amministrazione (CdA), Nomine ed Organi</li>
                <li>Articolo 20: Clausola di Presidenza Onoraria a Vita di Luca Falace e Patto di Salvaguardia Legale</li>
              </ul>
            </li>
            <li><strong>PARTE II - IL PIANO DI SOCIAL BUSINESS INTEGRATO</strong>
              <ul>
                <li>Capitolo I: Strategia del Business Sociale della Fondazione AIC</li>
                <li>Capitolo II: I 40 Corsi Formativi Ufficiali Notarili come Redistribuzione Sociale</li>
                <li>Capitolo III: Fondi Strutturali di Dotazione ed Accordo col Ministero</li>
              </ul>
            </li>
            <li><strong>PARTE III - COMPATIBILITÀ ETS & CODICE DEL TERZO SETTORE</strong>
              <ul>
                <li>Adeguamento teorico al Decreto Legislativo 117 del 2017</li>
                <li>Iscrizione al RUNTS e Trasparenza Gestionale per gli Iscritti</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="page-break"></div>

        <h3>PARTE I: STATUTO DELLA FONDAZIONE CULTURALE AIC</h3>
        
        <div class="article">
          <h4>ARTICOLO 1: COSTITUZIONE, DENOMINAZIONE E SEDE</h4>
          <p>L'ente è denominato "Fondazione Culturale delle Attività Intellettive Creative", abbreviato ufficialmente in <strong>FONDAZIONE CULTURALE AIC</strong>. Esso si costituisce a tempo indeterminato mediante Atto Pubblico Notarile a rogito e fissa la sua sede operativa nel territorio nazionale, conformandosi alle prescrizioni di legge vigenti per gli Enti del Terzo Settore.</p>
        </div>

        <div class="article">
          <h4>ARTICOLO 2: SCOPO FONDATORE & TUTELA DELL'OPERA</h4>
          <p>La Fondazione ha per scopo primario la tutela, la promozione, la valorizzazione e la diffusione ad ampio raggio delle Attività Intellettive e Creative, con specifica convergenza dei seguenti macro-settori dell'evoluzione umana:</p>
          <ul>
            <li><strong>Le Arti Multimediali ed Espressive:</strong> Diffusione delle invenzioni grafiche, pittoriche ed artistiche generate dal Saggio della Fondazione.</li>
            <li><strong>Le Scienze dell'Ingegno Estetico:</strong> Istituzione di corsi sulla modellazione tridimensionale 3D di strutture ed interni, ingegneria dei mezzi di trasporto ed estetica costruttiva.</li>
            <li><strong>La Medicina Olistica e Unita:</strong> Studio dei ritmi bioritmici naturali, benessere emotivo integrato e sintonizzazione cardiaca mediante il Sincronismo Creativo.</li>
          </ul>
        </div>

        <div class="article">
          <h4>ARTICOLO 3: STATUTO DIDATTICO ED ACCREDITAMENTO</h4>
          <p>La didattica sarà tra le prime attività lavorative tangibili svolte dalla Fondazione. Essa si pone l'obiettivo di superare la staticità degli insegnamenti accademici tradizionali attraverso percorsi agili legati a 40 moduli formativi notarili. L'Accademia stringe convenzioni con il Ministero della Ricerca Scientifica ed Universitarie Nazionali ed Estere per agevolare l'immediata professionalizzazione dei giovani studenti.</p>
        </div>

        <div class="article">
          <h4>ARTICOLO 4: ASSENZA DI SCOPO DI LUCRO E SOCIAL BUSINESS MODEL</h4>
          <p>In consonanza con le dottrine di Social Business redatte dal Dott. Luca Falace, la Fondazione esclude in modo assoluto l'attività speculativa o la distribuzione di dividendi. L'intero patrimonio della Fondazione, incluse le quote provenienti dalle lezioni e dalle vendite editoriali, viene destinato in via esclusiva allo staff, alla gestione delle aule multimediali e alla redistribuzione sotto forma di borse di studio complete destinate ai ragazzi a basso reddito.</p>
        </div>

        <div class="article">
          <h4>ARTICOLO 20: CLAUSOLA DI SALVAGUARDIA MORALE E CUSTODIA A VITA</h4>
          <p class="highlight">"La Presidenza Onoraria della Fondazione Culturale AIC è conferita a vita, con pieni poteri di veto morale, saggio ed educativo, al fondatore Dott. Luca Falace, autore del corpus intellettuale registrato."</p>
          <p>Il Dott. Luca Falace detiene la direzione morale imperitura sul metodo didattico e sulla conservazione storico-alchemica delle invenzioni. Qualsiasi tentativo di parificazione amministrativa o azzeramento dell'Articolo 20 inficerà immediatamente la stesura notarile dello Statuto, revocando istantaneamente l'autorizzazione all'uso del nome 'AIC', della denominazione e dei loghi del Sincronismo Creativo, con conseguente rientro dei diritti patrimoniali ed editoriali in capo esclusivo all'Autore per vizio di forma costitutiva.</p>
        </div>

        <div class="page-break"></div>

        <h3>PARTE II: STRATEGIE DI SVILUPPO E OPERE DEL SOCIAL BUSINESS</h3>
        <p>Il Progetto di Sviluppo stabilisce l'organizzazione d'impresa no-profit volta al sostegno della comunità locale.</p>
        
        <table class="report-table">
          <thead>
            <tr>
              <th>REQUISITO OPERATIVO</th>
              <th>VALORE STRUTTURALE AIC</th>
              <th>OBBLIGATORIETÀ STATUTARIA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Patrimonio Minimo di Dotazione</td>
              <td>30.000 € liquidi pre-depositati</td>
              <td>Vincolato per legge RUNTS</td>
            </tr>
            <tr>
              <td>Consiglio d'Amministrazione (CdA)</td>
              <td>Minimo 7 Membri soci consiglieri</td>
              <td>Approvato con Delibera Notarile</td>
            </tr>
            <tr>
              <td>Moduli Didattici Notarili</td>
              <td>40 Corsi dallo Statuto Notarile</td>
              <td>Insegnamento in convenzione ministeriale</td>
            </tr>
            <tr>
              <td>Bilancio e Trasparenza</td>
              <td>Annuale e Pubblicato su portale della Fondazione</td>
              <td>Trasparenza Terzo Settore ETS</td>
            </tr>
          </tbody>
        </table>

        <div class="page-break"></div>

        <h3>PARTE III: COMPATIBILITÀ ETS & CODICE DEL TERZO SETTORE (D.LGS 117/17)</h3>
        <p>L'integrazione degli schemi dell'Atto Notarile alle normative degli Enti del Terzo Settore (ETS) assicura alla Fondazione la flessibilità per accedere a donatori e sgravi d'imposta per investimenti culturali, programmi congiunti con enti pubblici per la riqualificazione dei giovani e divulgazione letteraria mondiale dei testi d'ingegno.</p>
        
        <div class="editorial-seal">
          <p>ATTO REGISTRATO E DEPOSITATO NELL'UFFICIO NOTARILE</p>
          <p class="seal-mark">VISTATO NEI REGISTRI MIBAC & UIBM 2024</p>
          <p class="signature">FIRMATO MORALMENTE IN ORIGINALE: DR. LUCA FALACE</p>
        </div>
      `;
    } else if (documentId === 'sede') {
      filename = 'Fondazione_AIC_Progetto_Sede_Interni_3D.html';
      docTitle = 'RELAZIONE PROGETTO ARCHITETTONICO INTERNI 3D';
      htmlContent = `
        <div class="letterhead">
          <div class="reg-code">RELAZIONE TECNICA DI CANTIERE - CAPITOLATO ESTETICO UFFICIALE</div>
          <div class="org-name">FONDAZIONE CULTURALE AIC - DIREZIONE PROGETTAZIONE</div>
          <p class="notary-mark">FILOSOFIA DI DESIGN DEGLI INTERNI SCIENTIFICO-ARTISTICI</p>
        </div>

        <div class="draft-watermark">RELAZIONE RISERVATA AI SOCI FONDATORI</div>

        <h1 class="main-title">PROGETTO ARCHITETTONICO UNIVERSALE</h1>
        <h2 class="sub-title">Planimetrie, aule didattiche, sale d'arte e layout dei locali 3D della Fondazione</h2>
        
        <div class="meta-box">
          <p><strong>Progettista e Direttore Estetico:</strong> Dott. Luca Falace</p>
          <p><strong>Configurazione Spazi:</strong> 5 Aule Didattiche Multimediali + Centro Prevenzione & Aula CdA</p>
          <p><strong>Superficie di Realizzazione:</strong> 850 mq totali ad ampie vetrate d'arco</p>
          <p><strong>Stato Progetto:</strong> Modello tridimensionale ad alta definizione registrato a verbale notarile</p>
        </div>

        <div class="page-break"></div>

        <h3>RELAZIONE PRELIMINARE: FILOSOFIA DELL'AMBIENTE</h3>
        <p>La disposizione e i flussi del <strong>Progetto Sede AIC</strong>, ideato integralmente dal Dott. Luca Falace, non obbediscono a semplici canoni strutturali edili, ma pongono al centro lo studio del benessere degli studenti. Tutti i locali interni sono impostati per favorire la concentrazione emissferica, sfruttando l'illuminazione zenitale e l'abbattimento totale di rumori molesti.</p>
        
        <h4>DIRETTIVE TECNICHE DEL CAPITOLATO ESTETICO:</h4>
        <ul>
          <li><strong>Pavimento in Parquet Svedese Naturale:</strong> Finitura bionda asettica ad alto tasso di isolamento termico, priva di spigoli vivi, ideale per lo yoga a piedi nudi e sintonizzazione di Bio-frequenza.</li>
          <li><strong>Binari Dimmerabili a LED:</strong> Impianto di illuminazione ad arco calorico per risaltare la vividezza delle tavolette pittoriche Falace senza aggredire la vista dei lettori.</li>
          <li><strong>Ventilazione Climatizzata Termodinamica Asettica:</strong> Condotti dell'aria dotati di filtri ad acqua sbloccanti ed abbattimento polveri, brevetto per il comfort dei candidati d'ingegno.</li>
        </ul>

        <div class="page-break"></div>

        <h3>LAYOUT SPECIFICO DELLE AULE DELLA SEDE AIC</h3>
        
        <div class="article">
          <h4>1. AREA RECEPTION & WELCOME DESK (INGRESSO GENERALE)</h4>
          <p>Il welcome point d'ingresso è dominato da un desk arcuato in cristallo massiccio satinato retroilluminato a LED. In questo terminale gli addetti d'aula registrano le presenze al network didattico della fondazione, distribuendo le credenziali software per l'ascolto delle tracce video originali in cuffia.</p>
        </div>

        <div class="article">
          <h4>2. SALE ESPOSIZIONE D'ARTE (SALA GALLERIE E PRESTIGI)</h4>
          <p>Ambiente monumentale ad altezza 4.5m con pareti tamburate in gesso bianco. Esso accoglierà le 151 opere del patrimonio intellettuale del fondatore, nonché mostre temporanee d'alto ingegno, dotandosi di un impianto di riscaldamento radiante ad asse termo-regolato antipolvere.</p>
        </div>

        <div class="article">
          <h4>3. LE AULE DIDATTICHE MULTIMEDIALI (AULE Corsi 2, 3, 4)</h4>
          <p>Tre aule collegate da porte fonoassorbenti di grande spessore isolate acusticamente con canapa naturale. Ciascuna aula ospiterà fino a 35 sedie ergonomiche, banchi in metallo satinato ed ampi monitor touch da 85 pollici per le diapositive di macro-economia e finanza etica.</p>
        </div>

        <div class="article">
          <h4>4. SALA CONSIGLIO D'AMMINISTRAZIONE (SALA CDA & VERBALI)</h4>
          <p>Sala ovattata con vetrate termoisolanti doppie ad uso direzionale. Un massiccio tavolo ovale in acciaio lucido e cristallo adorna il centro. Nella testata est poggia la seduta presidenziale d'ingegno riservata esclusivamente a vita al Dott. Luca Falace per le deliberazioni statutarie della Fondazione.</p>
        </div>

        <div class="article">
          <h4>5. CENTRO D'ASCOLTO GIOVANI & CHECK-POINT PREVENZIONE</h4>
          <p class="highlight">"Spazio di ascolto gratuito, orientamento professionale e laboratori creativi per i giovani iscritti alla Fondazione."</p>
          <p>Posto sul lato ovest del cantiere, questo reparto accoglie i giovani in condizioni di isolamento sociale, offrendo counseling con psicologi, esperti dell'olistica e soci fondatori, sbloccando le loro aspirazioni e prevenendo disagi di natura civile e clinica urbana.</p>
        </div>

        <div class="page-break"></div>

        <h3>MATRICE ANALITICA DI REALIZZAZIONE RENDERING 3D</h3>
        <table class="report-table">
          <thead>
            <tr>
              <th>AMBIENTE 3D</th>
              <th>MATERIALE PAVIMENTO</th>
              <th>ILLUMINAZIONE SPECIFICA</th>
              <th>FUNZIONE SOCIALE PRINCIPALE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reception & Atrio</td>
              <td>Resina lucida bianca asettica</td>
              <td>Plafoniere LED a luce riflessa indiretta</td>
              <td>Informazioni, Iscrizioni dei soci</td>
            </tr>
            <tr>
              <td>Sale Esposizione d'Arte</td>
              <td>Parquet massello rovere svedese</td>
              <td>Fari dimmerabili orientabili su binari</td>
              <td>Esposizione 151 tele del saggio Falace, Mostre</td>
            </tr>
            <tr>
              <td>Aule Corsi (1-4)</td>
              <td>Pvc fonoassorbente ecologico</td>
              <td>Tubi LED asettici anti-sfarfallio 4000K</td>
              <td>Svolgimento dei 40 corsi d'ingegno notarili</td>
            </tr>
            <tr>
              <td>Sala Consiglio CdA</td>
              <td>Parquet scuro massello anticato</td>
              <td>Sospensione sferica a luce calda 3000K</td>
              <td>Nomine del consiglio, Verbali assemblee</td>
            </tr>
            <tr>
              <td>Centro Prevenzione Giovani</td>
              <td>Legno morbido bios e tappeti in cocco</td>
              <td>Luce cromoterapeutica diffusa RGB assistita</td>
              <td>Prevenzione disagio sociale, counseling olistico</td>
            </tr>
          </tbody>
        </table>

        <div class="editorial-seal">
          <p>DELIBERATO CON REGISTRAZIONE PLANIMETRICA</p>
          <p class="seal-mark">DIREZIONE REALIZZAZIONE INTERNI LUCA FALACE © 2024</p>
          <p class="signature">TUTTI I RENDERING DETTAGLIATI SONO DI PATERNITÀ ESCLUSIVA DELL'AUTORE</p>
        </div>
      `;
    } else if (documentId === 'corsi') {
      filename = 'Fondazione_AIC_Manifesto_Didattico_40_Corsi.html';
      docTitle = 'MANIFESTO DIDATTICO DEI 40 CORSI FORMATIVI';
      htmlContent = `
        <div class="letterhead">
          <div class="reg-code">MANIFESTO ACCADEMICO STATUTARIO NAZIONALE</div>
          <div class="org-name">FONDAZIONE CULTURALE AIC - DIVISIONE DIDATTICA ALTERNATIVA</div>
          <p class="notary-mark">REQUISITI DI ACCREDITAMENTO CON MINISTERO DELLA RICERCA SCIENTIFICA</p>
        </div>

        <div class="draft-watermark">MANIFESTO FORMATIVO UFFICIALE</div>

        <h1 class="main-title">I 40 MODULI DIDATTICI NOTARILI</h1>
        <h2 class="sub-title">Programmi formativi completi, orari ed assegnazione matematica delle aule</h2>
        
        <div class="meta-box">
          <p><strong>Direttore dell'Accademia:</strong> Dott. Luca Falace (Presidente Onorario del Sincronismo)</p>
          <p><strong>Academy Network:</strong> 40 Corsi Certificati registrati in Statuto e depositati al Notaio</p>
          <p><strong>Destinatari Scolastici:</strong> Studenti d'ingegno, docenti e giovani disoccupati del territorio</p>
          <p><strong>Assegnazione Locali:</strong> Matrice di programmazione aule scolastiche asettiche</p>
        </div>

        <div class="page-break"></div>

        <h3>LA FILOSOFIA DI INSEGNAMENTO INDIPENDENTE</h3>
        <p>Ai sensi dell’articolo 3 dello Statuto Notarile coordinato dal Dott. Luca Falace, la didattica formativa costituisce il nucleo operativo portante della Fondazione. I nostri 40 moduli di insegnamento superano il nozionismo teorico delle università accademizzanti tradizionali, puntando alla stimolazione e al potenziamento globale del pensiero divergente degli allievi.</p>
        
        <div class="page-break"></div>

        <h3>PROGRAMMA UFFICIALE COMPLETO DEI 40 TIROCINI FORMATIVI</h3>
        
        <div class="courses-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 11px;">
          <div>
            <p><strong>#1 LINGUE STRANIERE AVANZATE</strong><br><small>Conversazione fluida in inglese, francese, spagnolo, tedesco e lingua giapponese.</small></p>
            <p><strong>#2 INFORMATICA E SVILUPPO WEB</strong><br><small>Programmazione in React, Node.js, database relazionali e fondamenta di cyber security.</small></p>
            <p><strong>#3 APPLICATIVI DIGITALI E IA</strong><br><small>Strumenti di sblocco d'ingegno digitale, intelligenza artificiale applicata alle arti multimediali.</small></p>
            <p><strong>#4 FOTOGRAFIA & DOCUMENTAZIONE MULTIMEDIALE</strong><br><small>Pratica fotografica con reflex, camera d'animazione ad alta risoluzione, montaggio video.</small></p>
            <p><strong>#5 GASTRONOMIA E PASTICCERIA ARTISTICA</strong><br><small>Pasticceria ornamentale saggia, scultura enogastronomica, tecniche asettiche culinarie.</small></p>
            <p><strong>#6 YOGA, ESPANSIONE ED OLISTICA FREQUENZIALE</strong><br><small>Pratiche posturali yogiche con l'ausilio di cuffie per l'ascolto delle frequenze hertziane cellulari.</small></p>
            <p><strong>#7 ARTI VISIVE, PITTURA AD OLIO E DISEGNO</strong><br><small>Correnti figurative, manualistica del carboncino e prospettiva d'ingegno avanzata.</small></p>
            <p><strong>#8 GINNASTICA POSTURALE E DANZA ESPRESSIVA</strong><br><small>Movimento biologico asettico, ritmica emotiva, stretching dello schema corporeo.</small></p>
            <p><strong>#9 COACHING E LEADERSHIP INTENZIONALE</strong><br><small>Esercizi di sblocco degli obiettivi d'ingegno, sviluppo empatia relazionale d'aula.</small></p>
            <p><strong>#10 SCRITTURA CREATIVA, GIORNALISMO E BRANDING</strong><br><small>Dinamiche editoriali, stesura di saggi antropologici e copyright del saggio.</small></p>
            <p><strong>#11 PSICOLOGIA E COMUNICAZIONE EFFICACE</strong><br><small>Ascolto attivo mirato, negoziazione, risoluzione conflitti ed intelligenza emotiva.</small></p>
            <p><strong>#12 DIZIONE, TEATRO E REGIA CINEMATOGRAFICA</strong><br><small>Espressione corporea teatrale, recitazione scolastica e stesura sceneggiature.</small></p>
            <p><strong>#13 DISEGNO CAD 3D & ARCHITETTURA DI CANTIERE</strong><br><small>Allestimento planimetrie di studio, modellazione di uffici ed interni di lusso.</small></p>
            <p><strong>#14 ANTROPOLOGIA DEI SIMBOLI CULTURALI</strong><br><small>Studio filologico dell'alchimia e simbologie contemporanee di tutela d'ingegno.</small></p>
            <p><strong>#15 DESIGN MEZZI DI TRASPORTO E MACCHINE</strong><br><small>Ingegneria estetica di barche, aerei ed automobili, disegno aerodinamico.</small></p>
            <p><strong>#16 FINANZA ETICA & MICROCREDITO STRUTTURALE</strong><br><small>Modelli di Grameen Bank applicati alla redistribuzione, no-profit law.</small></p>
            <p><strong>#17 BOTANICA APPLICATA ED ERBORISTERIA CLINICA</strong><br><small>Estrazione oli essenziali officinali, coltivazione idroponica in serra.</small></p>
            <p><strong>#18 BIOEDILIZIA ED ECOREGOLAZIONE SPETTRALE</strong><br><small>Pareti in fibra naturale acustica, efficienza termodinamica della sede.</small></p>
            <p><strong>#19 CREATIVE ADV & PROJECT GANTT MANAGEMENT</strong><br><small>Diagrammi di assegnazione compiti cooperativi, gestione agile con Kanban.</small></p>
            <p><strong>#20 LINGUA DEI SEGNI ITALIANA (LIS)</strong><br><small>Corso di comunicazione mimica a tutela dell'inclusione dei sordi.</small></p>
          </div>
          <div>
            <p><strong>#21 BREVETTI GUIDA UIBM & DIRITTO D'AUTORE</strong><br><small>Normativa sul diritto d'ingegno e deposito di brevetti per scoperte fisiche.</small></p>
            <p><strong>#22 STORYTELLING DEL SINCRONISMO CREATIVO</strong><br><small>Campagne cooperative per la valorizzazione dell'Opera Celeste virtuale.</small></p>
            <p><strong>#23 PROGRAMMI PARITÀ DI GENERE</strong><br><small>Divulgazione delle carriere professionali delle giovani donne d'ingegno.</small></p>
            <p><strong>#24 DISCIPLINE BLOCKCHAIN & CRITTOGRAFIA RETI</strong><br><small>Basi di nodi decentralizzati, smart contract per autofinanziamenti.</small></p>
            <p><strong>#25 RESTAURO ANTOLOGICO MANOSCRITTI NOTARILI</strong><br><small>Trattamento conservativo di pergamene e lettere d'archivio storico.</small></p>
            <p><strong>#26 FILOSOFIA DELLE ATTIVITÀ INTELLETTIVE CREATIVE</strong><br><small>Cura ed analisi del saggio teorico della Fondazione AIC.</small></p>
            <p><strong>#27 COUNSELING CLINICO-EMOTIVO DI PREVENZIONE</strong><br><small>Sostegno psicofisico e check-point d'ascolto per adolescenti disagiati.</small></p>
            <p><strong>#28 MIMICA ESPRESSIVA SAGGIA</strong><br><small>Teatralizzazione del corpo per superare le rigidità motorie cellulari.</small></p>
            <p><strong>#29 GRAFICA COORDINATA ED EDITORIA</strong><br><small>Progettazione di brochure informative del Terzo Settore per il Ministero.</small></p>
            <p><strong>#30 SCULTURA PLASTICA DI BRONZO E MARMO</strong><br><small>Formatura geometrica tridimensionale, fusioni artistiche d'alto ingegno.</small></p>
            <p><strong>#31 INTEGRAZIONE DSA E METODOLOGIE DIDATTICHE</strong><br><small>Processi educativi per ragazzi con specifiche difficoltà d'apprendimento.</small></p>
            <p><strong>#32 INFORMATICA D'AULA E COORDINAMENTO DOCENTI</strong><br><small>Linee guida per la sincronizzazione dei monitor LED e registri della fondazione online.</small></p>
            <p><strong>#33 FISICA DEL SINCRONISMO QUANTISTICO</strong><br><small>Studio delle coincidenze parallele (Jung) sveltite dalla bio-risonanza.</small></p>
            <p><strong>#34 ORIENTAMENTO ED AVVIAMENTO AL LAVORO NO-PROFIT</strong><br><small>Fondo di microcredito per startup d'ingegno e stesura schede tecniche.</small></p>
            <p><strong>#35 RESTAURO SPARTITI MUSICALI ANTICHI SIAE</strong><br><small>Conservazione di reperti ed archiviazione microfilm d'ingegno.</small></p>
            <p><strong>#36 COSMOLOGIA E BIORITMI BIOENERGETICI</strong><br><small>Il sincronismo naturale degli astri in risonanza con l'acqua cellulare.</small></p>
            <p><strong>#37 FILOLOGIA E TRADUZIONE GEROGLIFICI EGIZI</strong><br><small>Analisi delle antiche scritture sacre ed incisioni del Libro dei Morti.</small></p>
            <p><strong>#38 LIGHTING DESIGN INTERNO PER GALLERIE D'ARTE</strong><br><small>Dislocazione binari LED a basso voltaggio per l'estetica delle mostre.</small></p>
            <p><strong>#39 ERGONOMIA D'UFFICIO E BENESSERE CELLULARE</strong><br><small>Allineamento della postura durante il lavoro d'ideazione intellettiva.</small></p>
            <p><strong>#40 SINTESI QUANTISTICA DI SBLOCCO OBIETTIVI</strong><br><small>Allineamento di intenzione affettiva, frequenza cerebrale e sblocco idee.</small></p>
          </div>
        </div>

        <div class="page-break"></div>

        <h3>MATRICE DI DISLOCAZIONE DELLE LEZIONI ED ASSEGNAZIONE AULE</h3>
        <p>Tutti i 40 corsi formativi sono disposti nel piano scolastico accademico ordinato per aule asettiche:</p>
        <table class="report-table">
          <thead>
            <tr>
              <th>AULA ASSEGNATA</th>
              <th>MACRO-SETTORE DIDATTICO</th>
              <th>CARATTERISTICA TECNICA INTERNA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>AULA 1</strong> (Sezione Arte)</td>
              <td>Arti Visive, Pittura, Fotografia, Restauro</td>
              <td>Manuale, Cavalletti in legno, camera oscura LED dimmerabile</td>
            </tr>
            <tr>
              <td><strong>AULA 2</strong> (Sezione Design 3D)</td>
              <td>Modellazione 3D, Ingegneria Estetica, CAD</td>
              <td>Terminali grafici computerizzati multi-core ad alta potenza 3D</td>
            </tr>
            <tr>
              <td><strong>AULA 3</strong> (Sezione Scrittura)</td>
              <td>Scrittura Creativa, Teatro, Regia, Lingue</td>
              <td>Palco teatrale, dizione scolastica, lavagna interattiva touch</td>
            </tr>
            <tr>
              <td><strong>AULA 4</strong> (Sezione Business)</td>
              <td>Social Business, Finanza Etica, LIS, Marketing</td>
              <td>Tavoli reclinabili disposti ad anello per negoziazioni</td>
            </tr>
            <tr>
              <td><strong>SALA MAGNA 5</strong> (Sezione Olistica)</td>
              <td>Yoga, Benessere, Nutrizione, Bioritmi Astrali</td>
              <td>Parquet lucido biondo massello, tappeti, diffusori Hertz</td>
            </tr>
          </tbody>
        </table>

        <div class="editorial-seal">
          <p>DELIBERATO NELLA GIUNTA ACCADEMICA COORDINATA</p>
          <p class="seal-mark">ACCADEMIA DEI SOCI FONDATORI AIC © 2024</p>
          <p class="signature">FIRMATO IN ORIGINALE NOTARILE: DR. LUCA FALACE</p>
        </div>
      `;
    } else if (documentId === 'carteggio') {
      filename = 'Fondazione_AIC_Carteggio_Storico_Completo.html';
      docTitle = 'CARTEGGIO STORICO COMPLETO & TUTELA COPYRIGHT';
      htmlContent = `
        <div class="letterhead">
          <div class="reg-code">REPERTORIO INCOFUTABILE D'INGEGNAZIONE INTELLETTUALE</div>
          <div class="org-name">ARCHIVIO STORICO DR. LUCA FALACE - DEPOSITO REGISTRATO NOTARILE</div>
          <p class="notary-mark">CENSIMENTO CERTIFICATO DEI SIMBOLI E PORTALE WEB (2024)</p>
        </div>

        <div class="draft-watermark">DEPOSITO LEGALE UNICO ED UNIFICATO</div>

        <h1 class="main-title">CARTEGGIO COMPLETO DI PATERNITÀ</h1>
        <h2 class="sub-title">L'Opera Celeste, la piattaforma social NING con 142k utenti e registrazioni SIAE/OLAF</h2>
        
        <div class="meta-box">
          <p><strong>Autore Detentore:</strong> Dott. Luca Falace (Presidente Onorario Custode)</p>
          <p><strong>Depositi SIAE OLAF:</strong> Certificato n° OLAF/05-FALACE (Roma, 11 Settembre 2005)</p>
          <p><strong>Registrazione Ministeriale:</strong> Archivio DEP_LEG_2658 (Roma, 2024)</p>
          <p><strong>Censimento Iscritti NING:</strong> File originale database con 142.051 iscritti</p>
        </div>

        <div class="page-break"></div>

        <h3>CRONISTORIA ED ORIGINE DEGLI PSEUDONIMI "AIC" E "OPERA CELESTE"</h3>
        <p>Per dissipare qualunque congettura sulle scoperte teoriche ed i loghi registrati dallo Statuto della Fondazione, il presente fascicolo unifica le evidenze inconfutabili sulla genesi del <strong>Sincronismo Creativo</strong> e del nome <strong>FONDAZIONE CULTURALE AIC</strong>, risalenti ad epoche ampiamente precedenti lo Statuto Notarile del 2024.</p>
        
        <div class="article">
          <h4>1. IL COLOSSALE PORTALE SOCIAL "NING" (2005-2010)</h4>
          <p>Nel 2005, il Dott. Luca Falace lanciava il primo network olistico-culturale online. La piattaforma ospitata su **NING (sites.google.com/site/loperaceleste/)** radunò in pochi anni un bacino di **142.000 iscritti attivi** in tutto il mondo, con una mailing-list certificata di 150.000 firme. Questo traffico imponente di e-mail, registrazioni e post d'arte rappresenta un pilastro indistruttibile di datazione d'ingegno antecedente.</p>
        </div>

        <div class="article">
          <h4>2. I 3 SIMBOLI ALCHEMICI DEPOSITATI LEGALMENTE</h4>
          <p>La simbologia alchemica-scientifica ideata ed incorporata nei loghi costitutivi è depositata dal fondatore ed è così strutturata:</p>
          <ul>
            <li><strong>L'ORO ALCHEMICO (Simbolo 1):</strong> Una corona circolare con lettering in latino, simboleggiante l'intelligenza e l'evoluzione della "Grande Opera", registrata nel 2005.</li>
            <li><strong>IL PENTACOLO DI SUN (Simbolo 2 - LucArtStudio):</strong> Il sole dorato a raggiera geometrica ideato dal Dr. Falace nel 1995 a tutela di illustrazioni editoriali, cataloghi e dipinti originali.</li>
            <li><strong>TAI-KI TAO PARALLEL EVENTS (Simbolo 3):</strong> Fusione tra la fisica quantistica delle coincidenze e la medicina olistica cellulare, schedato ad uso accademico.</li>
          </ul>
        </div>

        <div class="page-break"></div>

        <h3>DEPOSITI E VERIFICHE GOVERNATIVE EFFETTUATE</h3>
        <p>Le opere letterarie, i video d'ingegno, i saggi del Sincronismo e lo Statuto originario vantano depositi ufficiali legalizzati:</p>
        
        <table class="report-table">
          <thead>
            <tr>
              <th>ENTE DI NOTIFICA</th>
              <th>PROTOCOLLO REGISTRO</th>
              <th>DATAZIONE</th>
              <th>OGGETTO TUTELATO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>OLAF SIAE Roma</strong></td>
              <td>OLAF/05-FALACE (CD-ROM)</td>
              <td>11 Settembre 2005</td>
              <td>Bozza d'Atto, 40 discipline, Saggio Sincronismo</td>
            </tr>
            <tr>
              <td><strong>Ministero Beni Culturali</strong></td>
              <td>DEP_LEG_2658 (Stato)</td>
              <td>24 Marzo 2007</td>
              <td>Saggi letterari, Dottrine ed organigramma soci fondatori</td>
            </tr>
            <tr>
              <td><strong>Mediateca Museo PAN Napoli</strong></td>
              <td>Verbale Acquisizione n°12</td>
              <td>10 Dicembre 2007</td>
              <td>Tracce video e supporti digitalizzati di bio-risonanza</td>
            </tr>
            <tr>
              <td><strong>Amazon Prime Books</strong></td>
              <td>ISBN: 978-X-FALACE-490</td>
              <td>15 Ottobre 2017</td>
              <td>Saggio di Social Business di 490 pagine sulle aule 3D</td>
            </tr>
          </tbody>
        </table>

        <div class="page-break"></div>

        <h3>LA CORRISPONDENZA NOTARILE ED EMAIL (2024)</h3>
        <p>A compimento dell'antologia legale della Fondazione, si riporta la corrispondenza e-mail e le bozze originarie scambiate con lo studio notarile incaricato della stesura dello Statuto. I documenti provano che:</p>
        <ol>
          <li>Il nome <strong>AIC / Fondazione Culturale AIC</strong> nasce dall'opera del fondatore e non da istanze associative successive.</li>
          <li>La Presidenza Onoraria a Vita di Luca Falace (Art. 20) tutela il corpus didattico impedendone la svendita a terzi finanziatori.</li>
          <li>Tutto il volume delle lezioni notarili e dei proventi accademici è vincolato al microcredito cooperativo e non a profitti individuali.</li>
        </ol>

        <div class="editorial-seal">
          <p>CERTIFICATO DI TUTELA COPYRIGHT INTERNAZIONALE</p>
          <p class="seal-mark">REGISTRATO CONTRO USURPAZIONE D'OPERA © 2024</p>
          <p class="signature">FIRMATO IN ORIGINALE NOTARILE: DR. LUCA FALACE</p>
        </div>
      `;
    }

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="it">
      <head>
        <meta charset="UTF-8">
        <title>\${docTitle}</title>
        <style>
          body {
            font-family: 'Times New Roman', Times, serif;
            line-height: 1.6;
            color: #111111;
            padding: 45px;
            max-width: 800px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .letterhead {
            border-bottom: 3px double #0066CC;
            padding-bottom: 20px;
            margin-bottom: 30px;
            text-align: center;
          }
          .reg-code {
            font-family: monospace;
            font-size: 11px;
            letter-spacing: 2px;
            color: #0066CC;
            font-weight: bold;
          }
          .org-name {
            font-size: 14px;
            font-weight: bold;
            margin-top: 5px;
            letter-spacing: 1px;
          }
          .notary-mark {
            font-size: 11px;
            font-style: italic;
            color: #555555;
            margin: 5px 0 0 0;
            text-transform: uppercase;
          }
          .draft-watermark {
            border: 2px solid #0066CC;
            color: #0066CC;
            display: inline-block;
            padding: 5px 15px;
            font-family: monospace;
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 30px;
            letter-spacing: 1px;
          }
          .main-title {
            font-size: 26px;
            font-weight: 900;
            margin-top: 50px;
            margin-bottom: 10px;
            line-height: 1.2;
            text-align: center;
            text-transform: uppercase;
          }
          .sub-title {
            font-size: 16px;
            font-style: italic;
            color: #444444;
            margin-bottom: 60px;
            text-align: center;
          }
          .meta-box {
            background-color: #f9f9f9;
            border: 1px solid #dddddd;
            padding: 20px;
            font-size: 13px;
            font-family: Arial, sans-serif;
            margin-bottom: 40px;
          }
          .meta-box p {
            margin: 5px 0;
          }
          .page-break {
            page-break-before: always;
            border-top: 1px dashed #cccccc;
            margin: 50px 0;
          }
          .toc {
            background-color: #fafafa;
            border-left: 4px solid #0066CC;
            padding: 15px 25px;
            margin-bottom: 40px;
          }
          .toc h3 {
            font-size: 14px;
            margin-top: 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #0066CC;
          }
          .toc ul {
            list-style-type: none;
            padding-left: 0;
            margin: 0;
            font-size: 13px;
          }
          .toc li {
            margin-bottom: 8px;
          }
          .toc ul ul {
            list-style-type: circle;
            padding-left: 20px;
            margin-top: 5px;
          }
          h3 {
            font-size: 18px;
            border-bottom: 1px solid #111111;
            padding-bottom: 5px;
            margin-top: 40px;
            text-transform: uppercase;
            color: #0066CC;
          }
          .article {
            margin-bottom: 30px;
          }
          .article h4 {
            font-size: 14px;
            font-family: Arial, sans-serif;
            font-weight: bold;
            margin-bottom: 8px;
            color: #000000;
          }
          p {
            font-size: 15px;
            text-align: justify;
            margin-bottom: 15px;
          }
          ul, ol {
            font-size: 14px;
            margin-bottom: 20px;
          }
          li {
            margin-bottom: 5px;
          }
          .highlight {
            background-color: #fdfae6;
            border-left: 4px solid #d9a700;
            padding: 15px;
            font-style: italic;
            font-size: 14px;
            margin: 20px 0;
          }
          .report-table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            font-size: 12px;
            font-family: Arial, sans-serif;
          }
          .report-table th, .report-table td {
            border: 1px solid #111111;
            padding: 10px;
            text-align: left;
          }
          .report-table th {
            background-color: #f0f0f0;
            font-weight: bold;
            text-transform: uppercase;
          }
          .editorial-seal {
            border-top: 2px solid #555555;
            margin-top: 60px;
            padding-top: 15px;
            text-align: center;
            font-family: monospace;
            font-size: 10px;
            color: #555555;
          }
          .seal-mark {
            font-weight: bold;
            color: #0066CC;
            letter-spacing: 1px;
          }
          .signature {
            font-style: italic;
            font-size: 11px;
            margin-top: 15px;
            color: #000000;
          }
          @media print {
            body {
              padding: 0;
              font-size: 12pt;
            }
            .page-break {
              page-break-before: always;
              border: none;
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        \${htmlContent}
      </body>
      </html>
    `;

    // Trigger download
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.focus();
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`border-2 border-slate-350 bg-slate-100 flex flex-col rounded-none relative overflow-hidden transition-all ${
      isFullscreen ? 'fixed inset-0 z-50 h-screen w-screen p-4 bg-slate-900/90' : 'w-full h-auto min-h-[500px]'
    }`} id={`doc-player-container-${documentId}`}>
      
      {/* Intestazione Player */}
      <div className="bg-slate-900 text-white p-4 border-b border-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <div className="bg-[#0066CC] text-white p-1.5 rounded-none font-bold text-xs shrink-0">
            PDF ATTI
          </div>
          <div>
            <h5 className="font-serif font-black text-xs uppercase tracking-wide text-white leading-tight">
              {currentDoc.title}
            </h5>
            <span className="text-[10px] text-slate-400 font-mono block">
              {currentDoc.subtitle}
            </span>
          </div>
        </div>

        {/* Pulsanti Controllo Display */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end flex-wrap">
          <button 
            onClick={() => setShowIndex(!showIndex)}
            className={`p-1.5 border hover:bg-slate-800 transition-colors text-xs font-mono font-bold flex items-center gap-1 cursor-pointer ${
              showIndex ? 'border-[#0066CC] text-[#0066CC] bg-slate-850' : 'border-slate-700 text-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Indice Argomenti</span>
          </button>

          <button 
            onClick={downloadFullDocument}
            className="p-1.5 border border-emerald-600 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-900/40 transition-colors text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
            title="Scarica il Testo Integrale e Registrazioni completo (.html stampabile in PDF)"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>SCARICA VOLUME COMPLETO</span>
          </button>
          
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
            title="Schermo Intero Player"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Area Principale del Player */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden min-h-[400px]">
        
        {/* Indice dei Capitoli Laterale (Toggleable) */}
        {showIndex && (
          <div className="w-full md:w-64 bg-slate-850 text-slate-300 border-r border-slate-950 p-4 space-y-3 shrink-0 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[9px] font-mono font-black text-rose-500 uppercase tracking-widest block mb-1">
                Indice dei Capitoli
              </span>
              <div className="flex flex-col divide-y divide-slate-800 border border-slate-800 bg-slate-900 max-h-[300px] overflow-y-auto">
                {currentDoc.chapters.map(ch => (
                  <button
                    key={ch.page}
                    onClick={() => handlePageSelect(ch.page)}
                    className={`text-left p-2.5 text-[11px] transition-colors flex items-center justify-between cursor-pointer ${
                      currentPage === ch.page ? 'bg-[#0066CC] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span>{ch.title}</span>
                    <span className="font-mono text-[9px] text-slate-500 bg-black/30 px-1">p. {ch.page}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Motore di Ricerca nel testo del Volume */}
            <form onSubmit={handleSearch} className="space-y-1.5 pt-3 border-t border-slate-800">
              <label className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Cerca nel Volume:</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Scrivi una parola chiave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-2 pr-8 py-1.5 bg-slate-900 border border-slate-750 text-slate-200 text-xs rounded-none focus:outline-none focus:border-[#0066CC]"
                />
                <button type="submit" className="absolute right-2 top-2 text-slate-400 hover:text-white cursor-pointer">
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
              {searchAlert && (
                <p className="text-[9px] text-rose-400 font-mono italic leading-tight">{searchAlert}</p>
              )}
            </form>
          </div>
        )}

        {/* Schermo di Lettura della Pagina Attiva */}
        <div className="flex-1 bg-slate-200 flex flex-col justify-between overflow-hidden">
          
          {/* Barra Finitura Superiore (Zoom & Pagine info) */}
          <div className="bg-slate-300 p-2 px-4 flex items-center justify-between border-b border-slate-400 text-slate-700 shrink-0">
            <div className="flex items-center gap-1 font-mono text-[10px] font-bold">
              <Bookmark className="w-3.5 h-3.5 text-[#0066CC]" />
              <span>PAGINA {currentPage} DI {currentDoc.totalPages}</span>
            </div>

            {/* Controlli Zoom Finti per simulare fedelmente Acrobat */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoom(Math.max(50, zoom - 10))}
                className="p-1 hover:bg-slate-400 text-slate-700 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[10px] bg-white border px-1.5 py-0.25">{zoom}%</span>
              <button 
                onClick={() => setZoom(Math.min(150, zoom + 10))}
                className="p-1 hover:bg-slate-400 text-slate-700 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setZoom(100)}
                className="p-1 hover:bg-slate-400 text-slate-700 cursor-pointer text-[10px] font-bold font-mono"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Area di Visualizzazione Pagina */}
          <div className="flex-1 p-6 sm:p-10 flex items-center justify-center overflow-auto">
            <div 
              className="bg-white border shadow-md p-6 sm:p-8 aspect-[1/1.4] w-full max-w-xl transition-all duration-300"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
            >
              <div className="h-full flex flex-col justify-between">
                
                {/* Header della Pagina Virtuale */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-4 shrink-0 text-slate-400 text-[10px]">
                  <span className="font-serif italic font-bold text-slate-700">Dott. Luca Falace</span>
                  <span>Volume: {documentId.toUpperCase()}</span>
                </div>

                {/* Contenuto di testo / immagini renderizzati */}
                <div className="flex-1 overflow-auto py-2">
                  {currentPageData.content}
                </div>

                {/* Footer della Pagina Virtuale */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 mt-4 shrink-0 text-slate-400 text-[9px] font-mono">
                  <span>© Luca Falace tutti i diritti riservati</span>
                  <span>p. {currentPage} / {currentDoc.totalPages}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Barra di Navigazione Inferiore */}
          <div className="bg-slate-300 p-3 sm:px-6 flex items-center justify-between border-t border-slate-400 shrink-0">
            <div className="flex items-center gap-1">
              <button 
                onClick={() => handlePageSelect(1)}
                disabled={currentPage === 1}
                className="p-1 bg-white hover:bg-slate-50 border border-slate-350 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                title="Prima Pagina"
              >
                <ChevronsLeft className="w-4 h-4 text-slate-700" />
              </button>
              <button 
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="p-1 pl-2 pr-3 bg-white hover:bg-slate-50 border border-slate-350 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 text-xs font-bold font-mono"
              >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
                <span>Indietro</span>
              </button>
            </div>

            <span className="font-mono text-xs font-bold text-slate-700">
              PAG. {currentPage} DI {currentDoc.totalPages}
            </span>

            <div className="flex items-center gap-1">
              <button 
                onClick={handleNext}
                disabled={currentPage === currentDoc.totalPages}
                className="p-1 pl-3 pr-2 bg-white hover:bg-slate-50 border border-slate-350 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 text-xs font-bold font-mono"
              >
                <span>Avanti</span>
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
              <button 
                onClick={() => handlePageSelect(currentDoc.totalPages)}
                disabled={currentPage === currentDoc.totalPages}
                className="p-1 bg-white hover:bg-slate-50 border border-slate-350 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                title="Ultima Pagina"
              >
                <ChevronsRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Barra Azioni Finali con Copyright */}
      <div className="bg-slate-950 text-slate-400 p-2.5 px-4 text-[10px] font-mono uppercase tracking-wider flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-black shrink-0">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0066CC] shrink-0" />
          <span>PROPRIETÀ INTELLETTUALE CON DEPOSITO LEGALE SBLOCCATO</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <button 
            type="button"
            onClick={downloadFullDocument}
            className="hover:text-emerald-400/90 hover:underline flex items-center gap-1 cursor-pointer text-emerald-400 font-bold"
            title="Scarica la bozza d'atto notarile integrale (.html / PDF)"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Scarica Testo Integrale (.html/PDF)</span>
          </button>
          <button 
            type="button"
            onClick={() => alert(`Informazioni Brevetto:\n${currentDoc.title}\nTutelata da Deposito Legale Ministero n° 2658.\nNon è consentita alcuna cessione o estrapolazione senza consenso dell'Autore.`)}
            className="hover:text-white hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3 h-3 text-[#0066CC]" />
            <span>Info Legali</span>
          </button>
        </div>
      </div>

    </div>
  );
}
