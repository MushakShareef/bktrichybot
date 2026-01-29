"use client";

type Question = {
  id: string;
  question: string;
  video?: string;
};

type Props = {
  questions: Question[];
  onSelect: (q: Question) => void;
};

export default function QuestionList({ questions, onSelect }: Props) {
  return (
    <div>
      <h3>Questions</h3>

      {questions.map((q) => (
        <div
          key={q.id}
          onClick={() => {
            
            onSelect(q);
          }}
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #999",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          {q.question}
        </div>
      ))}
    </div>
  );
}
