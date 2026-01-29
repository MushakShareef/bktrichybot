"use client";


type Language = "ta" | "en";


type Props = {
  selected: Language;
  onSelect: (lang: Language) => void;
};

export default function LanguageSelector({ selected, onSelect }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select Language</h3>

      <button onClick={() => onSelect("ta")}>தமிழ்</button>{" "}
      <button onClick={() => onSelect("en")}>English</button>{" "}
      
    </div>
  );
}
