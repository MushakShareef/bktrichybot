"use client";

import type { Language } from "../types";

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
      <button onClick={() => onSelect("hi")}>हिंदी</button>
    </div>
  );
}
