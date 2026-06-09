import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import AiAssistant from './components/AiAssistant.js';
import MusicPlayer from './components/MusicPlayer.js';

// Heritage folder components
import AirTherapy from './components/heritage/AirTherapy.js';
import DynastyHistory from './components/heritage/DynastyHistory.js';
import FatherPatents from './components/heritage/FatherPatents.js';
import FatherVideos from './components/heritage/FatherVideos.js';
import PaoloArchive from './components/heritage/PaoloArchive.js';
import PDFViewerSimulator from './components/heritage/PDFViewerSimulator.js';

// Sections folder components
import AboutSection from './components/sections/AboutSection.js';
import ArchiveContactSection from './components/sections/ArchiveContactSection.js';
import FondazioneAicSection from './components/sections/FondazioneAicSection.js';
import FondazioneFalaceSection from './components/sections/FondazioneFalaceSection.js';
import HomeSection from './components/sections/HomeSection.js';
import InventionsSection from './components/sections/InventionsSection.js';
import TheorySection from './components/sections/TheorySection.js';
import WorksSection from './components/sections/WorksSection.js';
import BooksSection from './components/BooksSection.js';
import DepartmentsSection from './components/sections/DepartmentsSection.js';
import BibliotecaDigitale from './components/BibliotecaDigitale.js';

// Base components
import AudioHarmonizer from './components/AudioHarmonizer.js';
import BiographyOverlay from './components/BiographyOverlay.js';
import Catalogs from './components/Catalogs.js';
import DocumentariView from './components/DocumentariView.js';
import ArchivioDocumentari from './components/ArchivioDocumentari.js';
import EntrepreneurshipView from './components/EntrepreneurshipView.js';
import Footer from './components/Footer.js';
import Foundations from './components/Foundations.js';
import FutureProjects from './components/FutureProjects.js';
import MediaArchive from './components/MediaArchive.js';
import PatternConnector from './components/PatternConnector.js';
import TheoryAIC from './components/TheoryAIC.js';
import TheoryAICUnifiedField from './components/TheoryAICUnifiedField.js';
import ZenodoPaper from './components/ZenodoPaper.js';

import { Sparkles, Library, FileText, Layers, ShieldCheck, X } from 'lucide-react';

type MainTab = 'institution' | 'departments' | 'patents' | 'catalog' | 'heritage' | 'music_lab' | 'documentaries' | 'library' | 'cern_zenodo';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('institution');
  const [selectedBookForAi, setSelectedBookForAi] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleAskAboutBook = (bookTitle: string) => {
    setSelectedBookForAi(bookTitle);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between selection:bg-white selection:text-black font-sans antialiased">
      {/* 0. Sticky Top Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onOpenAiChat={() => setIsChatOpen(true)} />

      {/* 1. Header Hero Panel with dynamic name label mapping */}
      <HomeSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Main Workspace Layout */}
      <main id="main-workspace-layout" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 w-full flex-grow">
        
        {/* Active main tab view - spans 9 columns on desktop */}
        <div className="lg:col-span-9 flex flex-col gap-10">
          
          {activeTab === 'institution' && (
            <div className="space-y-10 animate-fade-in">
              <FondazioneFalaceSection />
              <FondazioneAicSection />
              <AboutSection />
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-pulse" />
                  <span className="text-[10.5px] font-mono text-[#0066CC] uppercase tracking-widest font-black">
                    Sfoglia il Curriculum Vitae &amp; Biografia Certificata (PDF Ufficiale)
                  </span>
                </div>
                <PDFViewerSimulator defaultDocIndex={3} />
              </div>

              <BiographyOverlay />
              <ArchiveContactSection />
            </div>
          )}

          {activeTab === 'departments' && (
            <div className="space-y-10 animate-fade-in">
              <DepartmentsSection setActiveTab={setActiveTab} />
            </div>
          )}

          {activeTab === 'patents' && (
            <div className="space-y-10 animate-fade-in">
              <TheorySection />
              <TheoryAIC />
              <TheoryAICUnifiedField />
              <InventionsSection />
              <PatternConnector />
              <EntrepreneurshipView />
              <AirTherapy />
              <DynastyHistory />
            </div>
          )}

          {activeTab === 'catalog' && (
            <div className="space-y-10 animate-fade-in">
              <WorksSection />
              <BooksSection onAskAboutBook={handleAskAboutBook} />
              <Catalogs />
              <Foundations />
              <PDFViewerSimulator />
            </div>
          )}

          {activeTab === 'cern_zenodo' && (
            <div className="space-y-10 animate-fade-in">
              <ZenodoPaper />
            </div>
          )}

          {activeTab === 'heritage' && (
            <div className="space-y-10 animate-fade-in">
              <FatherPatents />
              <FatherVideos />
              <PaoloArchive />
              <DocumentariView />
              <MediaArchive />
              <FutureProjects />
            </div>
          )}

          {activeTab === 'music_lab' && (
            <div className="space-y-10 animate-fade-in">
              <AudioHarmonizer />
              <MusicPlayer />
            </div>
          )}

          {activeTab === 'documentaries' && (
            <div className="space-y-10 animate-fade-in">
              <ArchivioDocumentari />
            </div>
          )}

          {activeTab === 'library' && (
            <div className="space-y-10 animate-fade-in">
              <BibliotecaDigitale />
            </div>
          )}

        </div>

        {/* Right Sticky Column (Side controls) - spans 3 columns on desktop */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 self-start flex flex-col gap-8">
          
          {/* Quick Stats Certification stamps */}
          <div className="bg-white border border-black p-5 rounded-none text-black ">
            <span className="text-[8px] font-mono tracking-widest text-[#0066CC] uppercase block mb-3 font-bold">
              Registro Integrato Garanzie
            </span>
            <div className="space-y-2.5 text-[10.5px] font-sans">
              <div className="flex justify-between items-center pb-2 border-b border-black">
                <span className="text-black">1. MiC / MiBAC (Tutela &amp; Diritto d'Autore)</span>
                <span className="font-mono text-[#0066CC] font-bold">250 Opere d'Arte</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-black">
                <span className="text-black">2. UIBM (Brevetti Ministeriali Sincronismo)</span>
                <span className="font-mono text-[#0066CC] font-bold">3 Brevetti</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-black">
                <span className="text-black">3. OPAC SBN-ISBN (Catalogazione Libri)</span>
                <span className="font-mono text-[#0066CC] font-bold">49 Monografie</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-black">
                <span className="text-black">4. CERN Zenodo (Archivio Digitale DOI)</span>
                <span className="font-mono text-[#0066CC] font-bold">3 Pubblicazioni</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-black">
                <span className="text-black">5. Dds Discoteca di Stato (Registrazioni)</span>
                <span className="font-mono text-[#0066CC] font-bold font-black">Audio &amp; Video</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-black">6. Museo MAXXI (Deposito Contemporaneo)</span>
                <span className="font-mono text-[#0066CC] font-bold font-black">Opere Catalogate</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* 3. Refined Signature Footer */}
      <Footer />

      {/* Centered Modal Overlay for AI Chat - Guarantees perfect alignment and responsive layout on all devices */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setIsChatOpen(false)}
        >
          <div 
            className="w-full max-w-3xl h-[85vh] sm:h-[650px] bg-white border-2 border-[#0066CC] rounded-2xl shadow-2xl flex flex-col relative animate-scale-up overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <AiAssistant 
              preselectedTopic={selectedBookForAi} 
              onClearPreselected={() => setSelectedBookForAi(null)} 
              onClose={() => setIsChatOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Floating Circular Trigger button always accessible at the bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Circular Toggle Button representing official Sages/Advisors */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="pointer-events-auto w-9.5 h-9.5 bg-[#0066CC] border text-white rounded-full flex items-center justify-center hover:bg-black hover:scale-105 transition-all duration-300 relative group cursor-pointer focus:outline-none"
          title={isChatOpen ? "Chiudi Assistente AI" : "Chiedi all'Assistente AI Sincronico"}
          id="researcher-chat"
        >
          {isChatOpen ? (
            <X className="w-4 h-4 transform rotate-90 transition-transform duration-300" />
          ) : (
            <>
              <span className="absolute -top-1 -right-1 w-3.2 h-3.2 bg-red-600 rounded-full flex items-center justify-center text-[7px] font-mono font-bold text-white uppercase animate-pulse">
                AIC
              </span>
              <Sparkles className="w-4 h-4" />
            </>
          )}

          {/* Hovering label text for user guidance */}
          <span className="absolute right-12 bg-white border border-black text-black text-[9px] font-mono uppercase font-black tracking-widest px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block select-none">
            Chiedi all'AI Sincronica
          </span>
        </button>
      </div>
    </div>
  );
}
