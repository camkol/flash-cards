import "./styles.css";
import React, { useState } from "react";

// Define the App component as a default export
export default function App() {
  return (
    <div className="App">
      {/* Render the FlashCards component within a div with class name "App" */}
      <FlashCards />
    </div>
  );
}

// Define an array of flashcard questions and answers
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

// Define the FlashCards component
function FlashCards() {
  // Declare a state variable 'selectedId' and a function 'setSelectedId'
  const [selectedId, setSelectedId] = useState(null);

  // Function to handle click events on flashcards
  function handleClick(id) {
    // Toggle the selectedId state based on the clicked flashcard
    setSelectedId(id !== selectedId ? id : null);
  }

  // Render the FlashCards component
  return (
    <div className="flashcards">
      {/* Map over the 'questions' array to render each flashcard */}
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          // Apply conditional class "selected" based on the selectedId state
          className={question.id === selectedId ? "selected" : ""}
        >
          {/* Display either the question or answer based on selectedId state */}
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
