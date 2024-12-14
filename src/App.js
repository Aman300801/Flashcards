import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedQues, setSelectedQues] = useState(0);
  return (
    <div className="flashcards">
      {questions.map((ques) => (
        <div
          key={ques.id}
          style={selectedQues === ques.id ? { background: "red" } : undefined}
          onClick={(e) =>
            setSelectedQues(selectedQues !== ques.id ? ques.id : null)
          }
        >
          <p>{selectedQues === ques.id ? ques.answer : ques.question}</p>
        </div>
      ))}
    </div>
  );
}