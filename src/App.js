import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Was ist die Hauptstadt von Deutschland?",
      answerOptions: [
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Essen", isCorrect: false },
        { answerText: "Hamburg", isCorrect: true },
        { answerText: "Köln", isCorrect: false },
      ],
    },
    {
      questionText: "Wer ist der CEO von Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "Wer hat das Iphone erfunden?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "Wie viele Harry Potter Bücher gibt es?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "Wie weit ist es von Berlin nach New York?",
      answerOptions: [
        { answerText: "6.381 km", isCorrect: true },
        { answerText: "5.678 km", isCorrect: false },
        { answerText: "10.523 km", isCorrect: false },
        { answerText: "8.255 km", isCorrect: false },
      ],
    },
    {
      questionText:
        "Wenn es in Berlin 15:30 ist wie spät ist es in Phuket(Thailand)?",
      answerOptions: [
        { answerText: "21:30 Uhr", isCorrect: false },
        { answerText: "23:30 Uhr", isCorrect: false },
        { answerText: "3:30 Uhr", isCorrect: false },
        { answerText: "5:30 Uhr", isCorrect: true },
      ],
    },
    {
      questionText:
        "Welcher Planet unseres Sonnensystems ist der Sonne am nächsten?“?",
      answerOptions: [
        { answerText: "Mars", isCorrect: false },
        { answerText: "Mond", isCorrect: false },
        { answerText: "Merkur", isCorrect: true },
        { answerText: "Jupiter", isCorrect: false },
      ],
    },
    {
      questionText: "Wie viele Knochen hat ein Erwachsenenkörper?",
      answerOptions: [
        { answerText: "188", isCorrect: false },
        { answerText: "206", isCorrect: true },
        { answerText: "320", isCorrect: false },
        { answerText: "156", isCorrect: false },
      ],
    },
    {
      questionText: "Wie lang ist der Äquator?",
      answerOptions: [
        { answerText: "Rund 60.800 km", isCorrect: false },
        { answerText: "Rund 50.870 km", isCorrect: false },
        { answerText: "Rund 80.250 km", isCorrect: false },
        { answerText: "Rund 40.070 km", isCorrect: true },
      ],
    },
    {
      questionText: "Wie hoch ist der Rekord beim Luftanhalten?",
      answerOptions: [
        { answerText: "20 Min. und 16 Sek.", isCorrect: false },
        { answerText: "18 Min. und 41 Sek.", isCorrect: false },
        { answerText: "24 Min. und 33 Sek", isCorrect: true },
        { answerText: "28 Min. und 22 Sek", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Du hast {score} von {questions.length} Fragen richtig beantwortet.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Frage {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
