"use client";


type Language = "ta" | "en";


type Props = {
  selected: Language;
  onChange: (lang: Language) => void;
};

export default function LanguageSelector({ selected, onChange }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select Language</h3>

      <button onClick={() => onChange("ta")}>தமிழ்</button>{" "}
     
      
    </div>
  );
}
