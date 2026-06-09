import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, GraduationCap, RefreshCw, MessageSquare, ShieldCheck, ArrowRight, Volume2, VolumeX, X } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Unified formatter for scientific papers and mathematical equations
function formatMessage(content: string, isAi: boolean = true) {
  // Helper to format mathematical greek letters, powers, and indices in plain text
  const formatScientificMathSymbols = (plain: string): React.ReactNode[] => {
    let processed = plain
      .replace(/\\tau|tau/g, 'τ')
      .replace(/\\lambda|lambda/g, 'λ')
      .replace(/\\phi|phi/g, 'φ')
      .replace(/\\pi|pi/g, 'π')
      .replace(/\\approx/g, '≈')
      .replace(/\\cdot|\\times/g, '•')
      .replace(/\\eta/g, 'η')
      .replace(/\\gamma|gamma/g, 'γ')
      .replace(/\\theta|theta/g, 'θ')
      .replace(/\\omega/g, 'ω')
      .replace(/\\delta|delta/g, 'δ')
      .replace(/\\Delta|Delta/g, 'Δ')
      .replace(/\\sigma|sigma/g, 'σ')
      .replace(/\\epsilon/g, 'ε');

    const regex = /([a-zA-Z0-9α-ωΑ-Ω=+\-*/<>]+)(\^([a-zA-Z0-9\-+*/]+)|\_([a-zA-Z0-9\-+*/]+))/g;
    const partsArray: React.ReactNode[] = [];
    let lastPos = 0;
    let indexId = 0;
    let localMatch;
    
    while ((localMatch = regex.exec(processed)) !== null) {
      const matchIdx = localMatch.index;
      if (matchIdx > lastPos) {
        partsArray.push(<span key={`text-${indexId++}`}>{processed.substring(lastPos, matchIdx)}</span>);
      }
      
      const base = localMatch[1];
      const sup = localMatch[3];
      const sub = localMatch[4];
      
      partsArray.push(
        <span key={`math-${indexId++}`} className="font-serif italic mx-0.5 inline-block">
          <span className="font-semibold">{base}</span>
          {sup && <sup className="text-[10px] sub font-sans not-italic font-bold ml-0.2">{sup}</sup>}
          {sub && <sub className="text-[9px] sub font-sans not-italic font-normal ml-0.2">{sub}</sub>}
        </span>
      );
      
      lastPos = regex.lastIndex;
    }
    
    if (lastPos < processed.length) {
      partsArray.push(<span key="text-end">{processed.substring(lastPos)}</span>);
    }
    
    return partsArray;
  };

  const renderMathematicalPart = (str: string): React.ReactNode => {
    const subSupRegex = /([a-zA-Z0-9α-ωΑ-Ω=+\-*/]+)(\^\{?([a-zA-Z0-9\-+*/]+)\}?|\_\{?([a-zA-Z0-9\-+*/]+)\}?)/g;
    const items: React.ReactNode[] = [];
    let curIdx = 0;
    let m;
    let safety = 0;
    
    while ((m = subSupRegex.exec(str)) !== null && safety++ < 100) {
      if (m.index > curIdx) {
        items.push(<span key={curIdx}>{str.substring(curIdx, m.index)}</span>);
      }
      
      const baseVal = m[1];
      const supVal = m[3];
      const subVal = m[4];
      
      items.push(
        <span key={`subsup-${m.index}`} className="inline-block font-serif italic">
          <span className="font-semibold">{baseVal}</span>
          {supVal && <sup className="text-[10px] italic leading-none font-sans font-bold select-all">{supVal}</sup>}
          {subVal && <sub className="text-[9px] not-italic leading-none font-sans font-normal ml-[1px] select-all">{subVal}</sub>}
        </span>
      );
      curIdx = subSupRegex.lastIndex;
    }
    if (curIdx < str.length) {
      items.push(<span key="end">{str.substring(curIdx)}</span>);
    }
    return <span className="font-serif italic text-sm sm:text-base tracking-wide flex items-center leading-normal gap-[2px]">{items}</span>;
  };

  // Dedicated Math formula renderer for standard LaTeX / schoolbook formulas
  const renderLaTexMathSymbols = (mathStr: string): React.ReactNode => {
    let cleaned = mathStr
      .replace(/\\/g, '')
      .replace(/approx/g, ' ≈ ')
      .replace(/cdot/g, ' • ')
      .replace(/times/g, ' • ')
      .replace(/sqrt\{([^}]+)\}/g, '√$1')
      .replace(/sqrt/g, '√')
      .replace(/tau/g, 'τ')
      .replace(/lambda/g, 'λ')
      .replace(/phi/g, 'φ')
      .replace(/pi/g, 'π')
      .replace(/gamma/g, 'γ')
      .replace(/Schumann/g, 'Schumann')
      .replace(/dec/g, 'dec');

    const fracRegex = /frac\{([^}]+)\}\{([^}]+)\}/;
    const fracMatch = cleaned.match(fracRegex);
    if (fracMatch) {
      const num = fracMatch[1];
      const den = fracMatch[2];
      return (
        <span className="inline-flex flex-col items-center justify-center text-center leading-none mx-1 font-serif italic text-sm">
          <span className="border-b border-black/40 pb-0.5 px-1">{renderMathematicalPart(num)}</span>
          <span className="text-[10px] pt-0.5 leading-none px-1">{renderMathematicalPart(den)}</span>
        </span>
      );
    }

    return renderMathematicalPart(cleaned);
  };

  const renderTextSegment = (text: string): React.ReactNode[] => {
    const tokens: { type: string; content: string }[] = [{ type: 'text', content: text }];
    
    const splitTokens = (
      type: string,
      regex: RegExp,
      mapper?: (m: string[]) => string
    ) => {
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type !== 'text') continue;
        const currentText = tokens[i].content;
        const parts: { type: string; content: string }[] = [];
        let match;
        let lastIndex = 0;
        regex.lastIndex = 0;
        
        while ((match = regex.exec(currentText)) !== null) {
          if (match.index > lastIndex) {
            parts.push({ type: 'text', content: currentText.substring(lastIndex, match.index) });
          }
          const matchedVal = mapper ? mapper(match) : match[1] || match[0];
          parts.push({ type, content: matchedVal });
          lastIndex = regex.lastIndex;
        }
        
        if (lastIndex < currentText.length) {
          parts.push({ type: 'text', content: currentText.substring(lastIndex) });
        }
        
        tokens.splice(i, 1, ...parts);
        i += parts.length - 1;
      }
    };

    // 1. Double dollars/brackets for block math: $$...$$ or \[...\]
    splitTokens('displayMath', /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]/g, (m) => m[1] || m[2]);
    
    // 2. Inline code / math backticks: `...`
    splitTokens('inlineMath', /`([^`]+)`/g, (m) => m[1]);
    
    // 3. Single dollars or backslashed parens for inline math: $...$ or \(...\)
    splitTokens('inlineMath', /\$([^$]+?)\$|\\\(([\s\S]+?)\\\)/g, (m) => m[1] || m[2]);

    // 4. Bold: **...** or __...__
    splitTokens('bold', /\*\*([^*]+?)\*\*|__([^_]+?)__/g, (m) => m[1] || m[2]);

    // 5. Italic: *...* or _..._
    splitTokens('italic', /\*([^*]+?)\*|_([^_]+?)_/g, (m) => m[1] || m[2]);

    return tokens.map((tok, index) => {
      if (tok.type === 'displayMath') {
        return (
          <div key={`dmath-${index}`} className={`my-3 py-2 px-4 ${isAi ? 'bg-blue-50/50' : 'bg-white/10 border-white/20'} border rounded-lg text-center flex flex-col items-center justify-center select-all shadow-sm`}>
            <span className={`font-serif italic font-semibold text-lg ${isAi ? 'text-[#0066CC]' : 'text-amber-300'}`}>
              {renderLaTexMathSymbols(tok.content)}
            </span>
          </div>
        );
      }
      
      if (tok.type === 'inlineMath') {
        return (
          <span key={`imath-${index}`} className={`font-serif italic font-semibold ${isAi ? 'text-[#0066CC] bg-blue-50/50 border-blue-100/50' : 'text-amber-200 bg-white/15 border-white/20'} px-1.5 py-0.5 rounded border mx-1 inline-flex items-center gap-0.5 select-all leading-none`}>
            {renderLaTexMathSymbols(tok.content)}
          </span>
        );
      }
      
      if (tok.type === 'bold') {
        return (
          <strong key={`bold-${index}`} className={`font-extrabold ${isAi ? 'text-[#0066CC]' : 'text-white'} px-0.5 font-sans`}>
            {formatScientificMathSymbols(tok.content)}
          </strong>
        );
      }
      
      if (tok.type === 'italic') {
        return (
          <em key={`italic-${index}`} className={`italic ${isAi ? 'text-neutral-800' : 'text-slate-100'} px-0.5 font-serif`}>
            {formatScientificMathSymbols(tok.content)}
          </em>
        );
      }
      
      return <React.Fragment key={`text-${index}`}>{formatScientificMathSymbols(tok.content)}</React.Fragment>;
    });
  };

  const lines = content.split('\n');
  return (
    <div className="space-y-1.5 select-text font-sans">
      {lines.map((line, idx) => {
        if (!line.trim()) {
          return <div key={idx} className="h-1.5" />;
        }
        
        let displayLine = line;
        const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ') || line.trim().startsWith('• ');
        if (isBullet) {
          displayLine = line.trim().replace(/^[\*\-\•]\s+/, '');
          return (
            <div key={idx} className={`flex gap-2 ml-4 my-1 font-sans leading-relaxed ${isAi ? 'text-black' : 'text-white'}`}>
              <span className={`${isAi ? 'text-[#0066CC]' : 'text-amber-300'} font-bold text-sm select-none`}>•</span>
              <span className="flex-1 text-xs sm:text-sm font-sans tracking-wide">{renderTextSegment(displayLine)}</span>
            </div>
          );
        }
        
        return (
          <p key={idx} className={`leading-relaxed text-xs sm:text-sm my-1 ${isAi ? 'text-black' : 'text-white'} font-sans tracking-wide`}>
            {renderTextSegment(displayLine)}
          </p>
        );
      })}
    </div>
  );
}

export default function AiAssistant({ 
  preselectedTopic, 
  onClearPreselected,
  onClose
}: { 
  preselectedTopic: string | null; 
  onClearPreselected: () => void;
  onClose?: () => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Benvenuto nel portale della Fondazione Falace. Sono l'Assistente Scientifico AIC sintonizzato sull'archivio della fondazione. Posso spiegarti nei minimi dettagli la Teoria del Sincronismo Creativo, chiarire le tesi fisiche della Gold Trilogy depositata presso il CERN Zenodo o descrivere i dispositivi e brevetti registrati (come AIC-SYNC o GeniusOm). Come posso supportare la tua ricerca oggi?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [speakingMsgIndex, setSpeakingMsgIndex] = useState<number | null>(null);
  const [isAutoSpeak, setIsAutoSpeak] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const SUGGESTED_QUERIES = [
    { text: "Spiegami il brevetto AIC-SYNC©", label: "Brevetto AIC-SYNC" },
    { text: "Quali sono i DOI dei libri depositati con il CERN?", label: "DOI CERN Trilogia" },
    { text: "Parlami di GeniusOm a Shark Tank ed Ecomondo", label: "GeniusOm Story" },
    { text: "Cos'è l'allineamento di fase isocronica?", label: "Sincronismo Creativo" }
  ];

  // If a topic is selected outside (e.g. from the books catalog)
  useEffect(() => {
    if (preselectedTopic) {
      handleSendPrompt(`Forniscimi un'analisi accademica estesa sul seguente volume: "${preselectedTopic}"`);
      onClearPreselected();
    }
  }, [preselectedTopic]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Audio speech synthesis helper
  const speakText = (text: string, index: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (speakingMsgIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingMsgIndex(null);
      return;
    }

    window.speechSynthesis.cancel(); // cancel any ongoing speech

    // Clean markdown-like text elements to read cleanly
    const cleaned = text
      .replace(/[#*`_]/g, '')
      .replace(/[\n\r]+/g, ' ');

    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = 'it-IT';

    // Get voices and search for Italian
    const voices = window.speechSynthesis.getVoices();
    const italianVoice = voices.find(v => v.lang.startsWith('it'));
    if (italianVoice) {
      utterance.voice = italianVoice;
    }

    utterance.onend = () => {
      setSpeakingMsgIndex(null);
    };

    utterance.onerror = () => {
      setSpeakingMsgIndex(null);
    };

    setSpeakingMsgIndex(index);
    window.speechSynthesis.speak(utterance);
  };

  // Manage automatic speech when a new message from the assistant arrives
  useEffect(() => {
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === 'assistant' && isAutoSpeak) {
        // Delay slightly for natural completion
        const timer = setTimeout(() => {
          speakText(lastMsg.content, messages.length - 1);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [messages, isAutoSpeak]);

  // Clean voice when component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSendPrompt = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });

      const data = await response.json();
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.text || "Si è verificato un ritardo nella sintonizzazione elettrofisiologica. Per favore riprova tra poco." 
        }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "La chiamata scientifica ha riscontrato un'eccezione temporanea. Verifica la connessione o l'API key." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const val = inputValue;
    setInputValue('');
    handleSendPrompt(val);
  };

  const handleResetChat = () => {
    // stop speech if any is speaking
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setSpeakingMsgIndex(null);

    setMessages([
      {
        role: 'assistant',
        content: "Archivio sintonizzato correttamente. Sono pronto per analizzare nuove tesi scientifiche o chiarire dettagli brevettuali. Cosa desideri approfondire?"
      }
    ]);
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden" id="researcher-chat">
      {/* Decorative gradient top bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0066CC] via-[#3399FF] to-[#0066CC]" />
      
      {/* Panel header */}
      <div className="px-6 py-4.5 border-b border-[#0066CC] bg-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1 px-2 bg-[#0066CC] text-white rounded-lg text-xs font-mono font-bold animate-pulse">
            AIC AI
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-black font-sans flex items-center gap-1.5">
              <span>Saggio AI Sincronico</span>
            </h3>
            <span className="text-[10px] text-black font-mono font-semibold">Sintonizzato su 49 Monografie ed Invenzioni del Registro SBN</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Automatic Vocal Reading Toggle */}
          <button
            onClick={() => {
              if (isAutoSpeak) {
                if (typeof window !== 'undefined' && window.speechSynthesis) {
                  window.speechSynthesis.cancel();
                }
                setSpeakingMsgIndex(null);
              }
              setIsAutoSpeak(!isAutoSpeak);
            }}
            className={`p-2 rounded-lg cursor-pointer transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              isAutoSpeak 
                ? 'text-[#0066CC] bg-white border-2 border-[#0066CC] hover:bg-white border-2 border-[#0066CC] border border-[#0066CC]' 
                : 'text-black border border-transparent hover:text-black hover:bg-white'
            }`}
            title={isAutoSpeak ? "Disattiva Lettura Vocale Automatica" : "Attiva Lettura Vocale Automatica"}
          >
            {isAutoSpeak ? (
              <Volume2 className="w-4 h-4 text-[#0066CC] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
            <span className="hidden sm:inline font-sans text-[10px] uppercase font-bold tracking-wider">
              {isAutoSpeak ? "Voce ON" : "Voce OFF"}
            </span>
          </button>

          <button 
            onClick={handleResetChat}
            className="p-2 text-black border border-transparent hover:text-black rounded-lg hover:bg-white cursor-pointer transition-colors"
            title="Ripristina Sintonizzazione"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {onClose && (
            <button 
              onClick={onClose}
              className="p-2 text-black border border-transparent hover:text-red-600 rounded-lg hover:bg-red-50 cursor-pointer transition-colors"
              title="Chiudi conversazione"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => {
          const isAi = msg.role === 'assistant';
          return (
            <div 
              key={i} 
              className={`flex ${isAi ? 'justify-start' : 'justify-end'} animate-fade-in`}
            >
              <div className={`flex items-center gap-2 max-w-[85%] ${isAi ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  isAi 
                    ? 'bg-white border border-[#0066CC] text-black rounded-tl-none font-sans ' 
                    : 'bg-[#0066CC] text-white font-medium rounded-tr-none  font-sans border border-black/20'
                }`}>
                  {/* Tone indicator labels */}
                  {isAi && (
                    <span className="text-[9px] font-mono text-[#0066CC] block mb-1.5 font-bold uppercase tracking-wider">
                      FALACE ACADEMIC CONSULTATION ENGINE
                    </span>
                  )}
                  
                  {/* Message text */}
                  <div className="leading-relaxed">
                    {formatMessage(msg.content, isAi)}
                  </div>
                </div>

                {isAi && (
                  <button
                    onClick={() => speakText(msg.content, i)}
                    className={`p-2 rounded-xl border transition-all cursor-pointer  shrink-0 flex items-center justify-center ${
                      speakingMsgIndex === i
                        ? 'bg-[#0066CC] text-white border-[#0066CC] animate-pulse scale-105'
                        : 'bg-white text-black hover:text-black border-[#0066CC] hover:border-[#0066CC]'
                    }`}
                    title={speakingMsgIndex === i ? "Interrompi lettura vocale" : "Leggi a voce alta"}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-[#0066CC] rounded-2xl rounded-tl-none p-4 max-w-[85%]">
              <span className="text-[9px] font-mono text-[#0066CC] block mb-2 font-bold uppercase tracking-wider animate-pulse">
                Sintonizzazione dei Sincronismi...
              </span>
              <div className="flex items-center gap-1.5 py-1">
                <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-[#3399FF] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input panel & suggestions */}
      <div className="border-t border-[#0066CC] bg-white/55 p-4 space-y-3">
        {/* Helper query tags */}
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTED_QUERIES.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendPrompt(q.text)}
              className="text-[10px] font-sans px-2.5 py-1 bg-white hover:bg-white border border-[#0066CC] text-black hover:text-black rounded-lg transition-colors cursor-pointer font-bold "
            >
              {q.label}
            </button>
          ))}
        </div>

        {/* Submit Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 relative">
          <input
            type="text"
            placeholder="Interroga sui libri, il Campo di Hertz, i brevetti o la fisica..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={loading}
            className="flex-1 bg-white border border-[#0066CC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#0066CC] disabled:opacity-50 "
          />
          <button
            type="submit"
            disabled={loading || !inputValue.trim()}
            className="bg-[#0066CC] hover:bg-black text-white p-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-colors  disabled:opacity-50 flex items-center justify-center gap-1"
          >
            <Send className="w-4 h-4 cursor-pointer" />
          </button>
        </form>
      </div>
    </div>
  );
}
