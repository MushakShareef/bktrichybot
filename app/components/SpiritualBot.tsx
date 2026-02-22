"use client";

import { useState } from "react";
import { useEffect } from "react";
import { botData, Topic, Question } from "../data/botData";

export default function SpiritualBot({
  onClose,
}: {
  onClose?: () => void;
}) {

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [stage, setStage] = useState<"welcome" | "invite" | "affirmation" | "calm" | "yogi" | "instruction" | "topics">("welcome");
  const [calmIndex, setCalmIndex] = useState(0);
  const [yogiFadeOut, setYogiFadeOut] = useState(false);

    const calmLines = [
      "Pause yourself for peace.",
      "No urgent.",
      "No hurry.",
      "No fast.",
      "Calm down yourself.",
      "Relax."
    ];


  useEffect(() => {
    if (stage === "welcome") {
      const timer = setTimeout(() => {
        setStage("invite");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
      if (stage === "affirmation") {
        const timer = setTimeout(() => {
          setStage("calm");
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [stage]);

    useEffect(() => {
      if (stage === "calm" && calmIndex < calmLines.length - 1) {
        const timer = setTimeout(() => {
          setCalmIndex(prev => prev + 1);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [stage, calmIndex]);


    useEffect(() => {
      if (stage === "calm" && calmIndex === calmLines.length - 1) {
        const timer = setTimeout(() => {
          setStage("yogi");
        }, 2500);

        return () => clearTimeout(timer);
      }
    }, [stage, calmIndex]);


    useEffect(() => {
        if (stage === "instruction") {
          const timer = setTimeout(() => {
            setStage("topics");
          }, 3000);

          return () => clearTimeout(timer);
        }
      }, [stage]);


  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [expanded, setExpanded] = useState(false);
  const [visibleTopicCount, setVisibleTopicCount] = useState(0);
  useEffect(() => {
      if (stage === "topics" && visibleTopicCount < botData.length) {
        const timer = setTimeout(() => {
          setVisibleTopicCount(prev => prev + 1);
        }, 800);

        return () => clearTimeout(timer);
      }
    }, [stage, visibleTopicCount]);
      
  const [visibleQuestionCount, setVisibleQuestionCount] = useState(0);
  useEffect(() => {
      if (selectedTopic && visibleQuestionCount < selectedTopic.questions.length) {
        const timer = setTimeout(() => {
          setVisibleQuestionCount(prev => prev + 1);
        }, 800);

        return () => clearTimeout(timer);
      }
    }, [selectedTopic, visibleQuestionCount]);





  return (
    <div
    style={{
        border: "1px solid #8903ef",
        borderRadius: "12px",
        padding: "18px",
        background: "#fcfcfc",
        maxHeight: "70vh",
        overflow: "auto",
        boxShadow: "0 4px 12px rgba(124,58,237,0.15)",
    }}
    >

      {/* Bot Header */}
      {/* Bot Header */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#8903ef",
    color: "#ffffff",
    padding: "12px 14px",
    borderRadius: "10px 10px 0 0",
    marginBottom: "12px",
  }}
>
  {/* Centered Title */}
  <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        flex: 1,
        textAlign: "center",
        fontWeight: "600",
      }}
    >
      <img
        src="/images/baba2.png"
        alt="Baba"
        style={{
          width: "22px",
          height: "22px",
          objectFit: "contain",
        }}
      />
      <span>Your Spiritual Guide</span>
    </div>

    {/* Close Button */}
    {onClose && (
      <button
        onClick={onClose}
        style={{
          fontSize: "18px",
          background: "none",
          border: "none",
          color: "#ffffff",
          cursor: "pointer",
          marginLeft: "8px",
        }}
      >
        ✕
      </button>
    )}
  </div>



      {/* HOME / BACK */}
      {(selectedTopic || selectedQuestion) && (
        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => {
            setSelectedTopic(null);
            setSelectedQuestion(null);
          }}
          style={{
            background: "none",
            border: "none",
            color: "#8903ef",
            cursor: "pointer",
            fontSize: "13px",
            padding: 0,
          }}
          >
            Home
          </button>

          {selectedQuestion && (
            <button
              onClick={() => {
                setSelectedQuestion(null);
                setExpanded(false);
              }}
              style={{
                marginLeft: "8px",
                background: "none",
                border: "none",
                color: "#8903ef",
                cursor: "pointer",
                fontSize: "13px",
                padding: 0,
              }}
            >
              Back
            </button>
          )}

        </div>
      )}

      {/* TOPICS */}
      {(stage === "welcome" || stage === "invite") && (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px]">

        <div className="text-center text-lg md:text-xl text-[#8903ef] animate-slowFadeIn mb-8">
          Welcome. Hope all is well.
        </div>

        <div className="h-[40px] flex items-center justify-center">
          <button
            onClick={() => setStage("affirmation")}
            className={`px-6 py-2 rounded-full bg-[#8903ef] text-white text-sm md:text-base shadow-md transition-opacity duration-1000 cursor-pointer ${
              stage === "invite" ? "opacity-100" : "opacity-0"
            }`}
          >
            Shall we begin?
          </button>
        </div>

      </div>
    )}
    {stage === "affirmation" && (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <div className="text-center text-lg md:text-xl text-[#8903ef] animate-slowFadeIn">
          Great… Let us walk slowly together.
        </div>
      </div>
    )}



    {stage === "calm" && (
        <div className="flex items-center justify-center h-full min-h-[300px]">
          <div className="text-center text-lg md:text-xl text-[#8903ef] animate-slowFadeIn">
            {calmLines[calmIndex]}
          </div>
        </div>
      )}

      {stage === "yogi" && (
        <div className="flex items-center justify-center h-full min-h-[300px]">
          <video
            src="/videos/yogi.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => {
              setYogiFadeOut(true);
              setTimeout(() => {
                setStage("instruction");
              }, 3000);
            }}
            className={`w-64 md:w-80 ${
              yogiFadeOut ? "animate-slowFadeOut" : "animate-slowFadeIn"
            }`}
          />
        </div>
      )}

      {stage === "instruction" && (
        <div className="flex items-center justify-center h-full min-h-[300px]">
          <div className="text-center text-lg md:text-xl text-[#8903ef] animate-slowFadeIn">
            When ready, choose your topic.
          </div>
        </div>
      )}
                
      {stage === "topics" && !selectedTopic && (
        <div>
          {botData.slice(0, visibleTopicCount).map((topic, index) => (
            <div
              key={topic.id}
              style={{
                padding: "10px",
                border: "1px solid #8903ef",
                borderRadius: "8px",
                marginBottom: "10px",
                cursor: "pointer",
                background: "#ffffff",
                color: "#8903ef",
                boxShadow: "0 2px 6px rgba(137,3,239,0.12)",
              }}
              onClick={() => {
                setSelectedTopic(topic);
                setVisibleQuestionCount(0);
              }}
            >
              {topic.title}
            </div>
          ))}
        </div>
      )}

      {/* QUESTIONS */}
      {selectedTopic && !selectedQuestion && (
        <div>
          {selectedTopic.questions.slice(0, visibleQuestionCount).map((q) => (
            <div
              key={q.id}
              style={{
                padding: "10px",
                border: "1px solid #8903ef",
                borderRadius: "8px",
                marginBottom: "10px",
                cursor: "pointer",
                background: "#ffffff",
                color: "#8903ef",
                boxShadow: "0 2px 6px rgba(137,3,239,0.12)",
              }}
              onClick={() => setSelectedQuestion(q)}
            >
              {q.text}
            </div>
          ))}
        </div>
      )}

      {/* ANSWER */}
      {selectedQuestion && (
        <div>
          <h4
            style={{
              color: "#1e2a38",   // ✅ dark blue with black
              fontWeight: "600",
            }}
          >
            {selectedQuestion.text}
          </h4>
          <p
            style={{
              color: "#8903ef",   // ✅ THIS IS THE FIX
              lineHeight: "1.7",
              fontSize: "14px",
              marginTop: "6px",
            }}
          >
            {expanded
              ? selectedQuestion.answer
              : selectedQuestion.answer.slice(0, 120) + "..."}
          </p>

          {selectedQuestion.answer.length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: "none",
                border: "none",
                color: "#8903ef",
                cursor: "pointer",
                fontSize: "13px",
                marginTop: "6px",
                padding: 0,
              }}
            >

              {expanded ? "Less" : "More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}