"use client";

import { useState } from "react";
import { botData, Topic, Question } from "../data/botData";

export default function SpiritualBot({
  onClose,
}: {
  onClose?: () => void;
}) {

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [expanded, setExpanded] = useState(false);

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
      {!selectedTopic && (
        <div>
          {botData.map((topic) => (
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
              onClick={() => setSelectedTopic(topic)}
            >
              {topic.title}
            </div>
          ))}
        </div>
      )}

      {/* QUESTIONS */}
      {selectedTopic && !selectedQuestion && (
        <div>
          {selectedTopic.questions.map((q) => (
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
          <h4>{selectedQuestion.text}</h4>
          <p
            style={{
              color: "#8903ef",
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
