"use client";

import { useState, useEffect } from "react";
import SpiritualBot from "./components/SpiritualBot";



export default function Home() {
  const [showMobileBot, setShowMobileBot] = useState(false);


  const [showHint, setShowHint] = useState(false);
  useEffect(() => {
  const hasSeenHint = localStorage.getItem("baba_hint_seen");
  if (!hasSeenHint) {
    setShowHint(true);
  }
}, []);



  return (
    <>
      {/* ===== Page Layout ===== */}
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        
        {/* ===== Landing Content ===== */}
        <main className="w-full lg:w-[70%] p-5 leading-[1.8] rounded-xl bg-[var(--card)]">

          <h1 
            style={{
              fontSize: "20px",
              marginBottom: "8px",
              fontWeight: 600,
            }}
                    >
            பிரம்மா குமாரிகள் – ஞான போட்
          </h1>

          <p className="text-[12px] text-[var(--text)] opacity-70 mb-6">
            ஆன்மிக ஞானத்திற்கான ஒரு அமைதியான வழிகாட்டி
          </p>

          <p>
            இந்த உலகம் வேகமாக ஓடிக்கொண்டிருக்கிறது.  
            மனது கேள்விகளால் நிறைந்திருக்கிறது.  
            <br />
            <strong>நான் யார்? என் வாழ்க்கையின் நோக்கம் என்ன? அமைதி எங்கே?</strong>
          </p>

          <p>
            இந்த “ஞான போட்”  
            உங்களுக்கான பதில்களைத் தேடி ஓடச்செய்யாது.  
            மாறாக,  
            உங்களை உங்களிடம் திரும்ப அழைத்துச் செல்லும்.
          </p>

          <h3 className="mt-8">
            இந்த ஞான போட் என்ன செய்கிறது?
          </h3>

          <p>
            இது ஒரு சாதாரண கேள்வி–பதில் அமைப்பு அல்ல.  
            இது ஒரு <strong>ஆன்மிக சிந்தனை வழிகாட்டி</strong>.
          </p>

          <p>
            நீங்கள் ஒரு தலைப்பைத் தேர்ந்தெடுக்கலாம்.  
            ஒரு கேள்வியில் தங்கலாம்.  
            பதிலைப் படித்து,  
            சற்று அமைதியாக உள் நோக்கி சிந்திக்கலாம்.
          </p>

          <p>
            இங்கே வேகம் இல்லை.  
            அவசரம் இல்லை.  
            <strong>உங்களுக்கும், உங்கள் மனதுக்கும் நேரம் இருக்கிறது.</strong>
          </p>

          <p className="mt-8 italic text-[var(--text)] opacity-70">
            சற்று நின்று, சிந்தித்து, உங்களை நினைவுகூருங்கள்.
          </p>
        </main>

        {/* ===== Desktop Bot (ONLY desktop) ===== */}
        <div className="hidden sm:block sm:w-[30%] sticky top-[90px]">
          <SpiritualBot />
        </div>
      </div>

      {/* ===== Mobile Floating Baba Button ===== */}
      <style jsx>{`
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounceSlow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>

      <style jsx>{`
        @keyframes babaGlow {
          0% {
            box-shadow: 0 0 0px rgba(137, 3, 239, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 16px rgba(137, 3, 239, 0.6);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 0px rgba(137, 3, 239, 0.4);
            transform: scale(1);
          }
        }

        .animate-baba-glow {
          animation: babaGlow 3.5s ease-in-out infinite;
        }
      `}</style>




      {showHint && (
        <div className="sm:hidden fixed bottom-[90px] right-6 z-[1001] flex flex-col items-center animate-bounceSlow w-[42px]">

          
          {/* Small Baba on top */}
          <div className="w-full aspect-square rounded-full bg-[#8903ef] shadow flex items-center justify-center mb-1">
            <img
              src="/images/baba2.png"
              alt="Baba Hint"
              className="w-5 h-5 object-contain"
            />
          </div>

          {/* Text bubble */}
          <div className="bg-[#8903ef] text-white text-xs px-2 py-2 rounded-lg shadow mb-1 flex flex-col items-center leading-tight">
            <span>A</span>
            <span>s</span>
            <span>k</span>
            <span>m</span>
            <span>e</span>
          </div>


          {/* Arrow */}
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#8903ef]" />
        </div>
      )}


      <div
        onClick={() => {
          setShowMobileBot(true);
          setShowHint(false);
          localStorage.setItem("baba_hint_seen", "yes");
        }}
        className="sm:hidden fixed bottom-5 right-5 w-[56px] h-[56px] rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer z-[1000] animate-baba-glow"
        title="Ask Baba"
      >
        <img
          src="/images/baba1.png"
          alt="Baba"
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* ===== Mobile Bot Overlay (Centered) ===== */}
      {showMobileBot && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-[999] flex items-center justify-center">
          <div className="bg-white w-full max-w-md h-[90%] rounded-lg overflow-hidden relative">
            <SpiritualBot onClose={() => setShowMobileBot(false)} />
          </div>
        </div>
      )}
    </>
  );
}
