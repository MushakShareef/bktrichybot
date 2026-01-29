export type Topic = {
  id: string;
  title: string;
  questions: Question[];
};

export type Question = {
  id: string;
  text: string;
  answer: string;
};

export const botData: Topic[] = [
  {
    id: "rajyoga",
    title: "ராஜயோகம்",
    questions: [
      {
        id: "what-is-rajyoga",
        text: "ராஜயோகம் என்றால் என்ன?",
        answer:
          "ராஜயோகம் என்பது ஆத்மாவும் பரமாத்மாவும் நினைவின் மூலம் தொடர்பு கொள்ளும் ஒரு ஆன்மிக பயிற்சியாகும். இது மன அமைதி, சக்தி மற்றும் தெளிவை அளிக்கிறது.",
      },
      {
        id: "benefits-rajyoga",
        text: "ராஜயோகத்தின் பயன்கள் என்ன?",
        answer:
          "ராஜயோகத்தின் மூலம் மன அழுத்தம் குறையும், உறவுகளில் சமநிலை ஏற்படும், வாழ்க்கையில் அமைதி மற்றும் நோக்கத்துடன் வாழ முடியும்.",
      },
    ],
  },
  {
    id: "soul",
    title: "ஆத்ம ஞானம்",
    questions: [
      {
        id: "what-is-soul",
        text: "ஆத்மா என்றால் என்ன?",
        answer:
          "ஆத்மா என்பது உடலல்ல. அது சிந்திக்கும், உணரும், அனுபவிக்கும் ஒளியின் புள்ளியாகும். நான் ஒரு ஆத்மா என்ற உணர்வே ஆன்மிக வாழ்க்கையின் அடிப்படை.",
      },
    ],
  },
];
