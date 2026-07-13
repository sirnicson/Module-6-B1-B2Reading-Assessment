import React, { useState } from 'react';

const styles = `
  .itep-scrollbar::-webkit-scrollbar { width: 8px; }
  .itep-scrollbar::-webkit-scrollbar-track { background: #1F1F1F; }
  .itep-scrollbar::-webkit-scrollbar-thumb { background-color: #4B5563; border-radius: 4px; }
`;

const PASSAGES = [
  {
    id: "accounting",
    title: "Part 1: Fundamentals of Corporate Accounting (B1)",
    text: [
      "Paragraph 1: Accounting is the process of tracking a business's money. It helps owners see if they are making a profit or losing money.",
      "Paragraph 2: Every company uses a balance sheet to list what they own, known as assets. They also list what they owe, which are called liabilities.",
      "Paragraph 3: Revenue is the money earned from selling products. Expenses are the costs of running the business, like rent or paying employees.",
      "Paragraph 4: Accountants follow rules called GAAP. These rules make sure that financial reports are clear and consistent for everyone to read.",
      "Paragraph 5: By studying these reports, managers can make better plans. Good records help a business grow safely and avoid bad financial choices."
    ],
    questions: [
      { id: "acc-1", prompt: "Q1 (Vocabulary): The word 'tracking' in Paragraph 1 is closest in meaning to:", options: ["Following", "Monitoring", "Hiding", "Creating"], correctAnswer: 1, explanation: "Correct. Tracking implies monitoring or keeping a record of something." },
      { id: "acc-2", prompt: "Q2 (Detail): What does a balance sheet specifically list?", options: ["Future plans", "Employee salaries", "Assets and liabilities", "Product sales"], correctAnswer: 2, explanation: "Correct. Paragraph 2 mentions the balance sheet lists assets and liabilities." },
      { id: "acc-3", prompt: "Q3 (Negative Fact): According to the text, which is NOT mentioned as a business expense?", options: ["Rent", "Employee wages", "Selling products", "Operating costs"], correctAnswer: 2, explanation: "Correct. Revenue comes from selling products; the others are mentioned as costs." },
      { id: "acc-4", prompt: "Q4 (Inference): Why are GAAP rules important?", options: ["To lower taxes", "To make financial reports consistent", "To increase revenue", "To hire more accountants"], correctAnswer: 1, explanation: "Correct. Paragraph 4 states they make reports clear and consistent." },
      { id: "acc-5", prompt: "Q5 (Main Idea): What is the primary focus of the passage?", options: ["The history of GAAP", "The importance of good accounting", "How to pay rent", "The definition of revenue"], correctAnswer: 1, explanation: "Correct. The passage explains how accounting tracks business health and aids planning." },
      { id: "acc-6", prompt: "Q6 (Detail): What is the term for money earned from selling products?", options: ["Profit", "Asset", "Revenue", "Expense"], correctAnswer: 2, explanation: "Correct. Revenue is defined as money earned from sales in Paragraph 3." },
      { id: "acc-7", prompt: "Q7 (Inference): What happens if a company ignores its records?", options: ["It grows faster", "It might make bad financial choices", "It pays more taxes", "It sells more products"], correctAnswer: 1, explanation: "Correct. Paragraph 5 says records help avoid bad choices." },
      { id: "acc-8", prompt: "Q8 (Detail): Who uses accounting reports to make plans?", options: ["Customers", "Managers", "Competitors", "Investors"], correctAnswer: 1, explanation: "Correct. Paragraph 5 mentions that managers use reports to make plans." },
      { id: "acc-9", prompt: "Q9 (Vocabulary): 'Consistent' in Paragraph 4 means:", options: ["Uniform", "Changing", "Expensive", "Difficult"], correctAnswer: 0, explanation: "Correct. Consistent means the same or uniform." },
      { id: "acc-10", prompt: "Q10 (Inference): A company's 'liabilities' are:", options: ["Money they own", "Money they owe", "Money they save", "Money they invest"], correctAnswer: 1, explanation: "Correct. Liabilities are defined as what a company owes." }
    ]
  },
  {
    id: "spiders",
    title: "Part 2: The Biological Complexity of Spiders (B2)",
    text: [
      "Paragraph 1: Spiders, members of the order Araneae, are distinguished by eight legs and the production of silk. Unlike insects, they lack antennae and possess two primary body segments.",
      "Paragraph 2: Silk production is highly advanced. Specialized glands secrete liquid protein that hardens rapidly upon exposure to air, forming structural webs or protective cocoons.",
      "Paragraph 3: Sensory perception relies heavily on vibration and tactile stimuli. Trichobothria, minute hairs on their legs, detect subtle environmental shifts, compensating for limited visual acuity.",
      "Paragraph 4: Most species are apex predators within their niche, utilizing complex venom to immobilize prey. This venom often contains enzymes evolved specifically for metabolic disruption.",
      "Paragraph 5: Despite their ecological necessity in population control, arachnids often elicit irrational fear. Nonetheless, their role in maintaining biodiversity is essential to global stability."
    ],
    questions: [
      { id: "spid-1", prompt: "Q1 (Vocabulary): 'Distinguished' in Paragraph 1 means:", options: ["Known for", "Similar to", "Hidden by", "Confused with"], correctAnswer: 0, explanation: "Correct. To be distinguished by something means to be known for it." },
      { id: "spid-2", prompt: "Q2 (Detail): Which body parts do spiders lack?", options: ["Legs", "Segments", "Antennae", "Glands"], correctAnswer: 2, explanation: "Correct. Paragraph 1 states they lack antennae." },
      { id: "spid-3", prompt: "Q3 (Detail): What is used to harden spider silk?", options: ["Heat", "Exposure to air", "Water", "Chemical additives"], correctAnswer: 1, explanation: "Correct. Paragraph 2 states liquid protein hardens upon exposure to air." },
      { id: "spid-4", prompt: "Q4 (Inference): Why are trichobothria important?", options: ["For eating", "For detecting vibrations", "For producing silk", "For flying"], correctAnswer: 1, explanation: "Correct. They detect environmental shifts/vibrations." },
      { id: "spid-5", prompt: "Q5 (Vocabulary): 'Limited visual acuity' refers to:", options: ["Great eyesight", "Poor vision", "Color blindness", "Ability to see far"], correctAnswer: 1, explanation: "Correct. Limited acuity means vision is not very sharp." },
      { id: "spid-6", prompt: "Q6 (Rhetorical): Why does the author mention apex predators?", options: ["To show they eat insects", "To describe their hunting status", "To explain their fear", "To list their body parts"], correctAnswer: 1, explanation: "Correct. It describes their position in the food chain." },
      { id: "spid-7", prompt: "Q7 (Negative Fact): According to the text, which is true about spider venom?", options: ["It immobilizes prey", "It is used for silk", "It causes no reaction", "It is only for defense"], correctAnswer: 0, explanation: "Correct. Paragraph 4 mentions venom immobilizes prey." },
      { id: "spid-8", prompt: "Q8 (Detail): What role do spiders play in ecology?", options: ["Destroying biodiversity", "Population control", "Creating soil", "Growing plants"], correctAnswer: 1, explanation: "Correct. Paragraph 5 identifies their role in population control." },
      { id: "spid-9", prompt: "Q9 (Vocabulary): 'Irrational' in Paragraph 5 means:", options: ["Logical", "Understandable", "Without reason", "Scientific"], correctAnswer: 2, explanation: "Correct. Irrational means not based on reason." },
      { id: "spid-10", prompt: "Q10 (Inference): Arachnids are described as essential for:", options: ["Global stability", "Human health", "Building homes", "Producing protein"], correctAnswer: 0, explanation: "Correct. Paragraph 5 links their role to global stability." }
    ]
  }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('PREPARE');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [qIdx, setQIdx] = useState(0);

  const allQuestions = PASSAGES.flatMap(p => p.questions);
  const activeQuestion = allQuestions[qIdx];
  const activePassage = PASSAGES.find(p => p.questions.includes(activeQuestion));

  const handleSelect = (ansIdx) => {
    if (selectedAnswers[activeQuestion.id] === undefined) {
      setSelectedAnswers({ ...selectedAnswers, [activeQuestion.id]: ansIdx });
    }
  };

  const isLocked = selectedAnswers[activeQuestion.id] !== undefined;

  return (
    <div className="flex flex-col h-screen bg-[#1a1a1a] text-gray-200">
      <style>{styles}</style>
      <header className="h-14 bg-blue-700 flex items-center px-6 font-bold shadow-md">iTEP Reading Assessment</header>
      <main className="flex-grow p-6 overflow-hidden flex flex-col">
        {currentScreen === 'PREPARE' && (
          <div className="text-center p-20"><button onClick={() => setCurrentScreen('TEST')} className="bg-blue-600 px-8 py-4 rounded font-bold text-white hover:bg-blue-500 transition">Start Assessment</button></div>
        )}
        {currentScreen === 'TEST' && (
          <div className="flex flex-grow gap-6 overflow-hidden">
            <div className="w-1/2 bg-gray-900 p-6 rounded overflow-y-auto itep-scrollbar">
              <h2 className="text-xl font-bold mb-4 text-blue-300">{activePassage.title}</h2>
              {activePassage.text.map((p, i) => <p key={i} className="mb-4 text-sm leading-relaxed">{p}</p>)}
            </div>
            <div className="w-1/2 p-6 bg-gray-900 rounded flex flex-col gap-4 overflow-y-auto itep-scrollbar">
              <h2 className="font-bold text-lg">{activeQuestion.prompt}</h2>
              {activeQuestion.options.map((opt, i) => {
                const isSelected = selectedAnswers[activeQuestion.id] === i;
                const isCorrect = i === activeQuestion.correctAnswer;
                let btnClass = "p-4 border rounded text-left transition ";
                if (isLocked) {
                  btnClass += (isSelected || isCorrect) ? (isCorrect ? "bg-green-900 border-green-500" : "bg-red-900 border-red-500") : "border-gray-700 opacity-50";
                } else {
                  btnClass += "border-gray-700 hover:bg-gray-800";
                }
                return <button key={i} disabled={isLocked} onClick={() => handleSelect(i)} className={btnClass}>{opt}</button>;
              })}
              {isLocked && <div className="p-4 bg-gray-800 rounded border-l-4 border-blue-500 mt-2 text-sm">{activeQuestion.explanation}</div>}
              <div className="flex gap-4 mt-auto pt-6">
                <button disabled={qIdx === 0} onClick={() => setQIdx(qIdx - 1)} className="px-6 py-2 bg-gray-700 rounded disabled:opacity-50">Back</button>
                {qIdx < allQuestions.length - 1 ? (
                  <button onClick={() => setQIdx(qIdx + 1)} className="px-6 py-2 bg-blue-600 rounded">Next</button>
                ) : (
                  <button onClick={() => setCurrentScreen('RESULTS')} className="px-6 py-2 bg-green-600 rounded">Finish</button>
                )}
              </div>
            </div>
          </div>
        )}
        {currentScreen === 'RESULTS' && (
          <div className="text-center p-20">
            <h2 className="text-2xl mb-4 font-bold">Assessment Complete</h2>
            <p className="text-xl">Total Questions Answered: {Object.keys(selectedAnswers).length} / {allQuestions.length}</p>
            <button onClick={() => window.location.reload()} className="mt-8 bg-gray-700 px-6 py-2 rounded">Restart</button>
          </div>
        )}
      </main>
    </div>
  );
}
