import loginGuard from "./loginGuard";
import { useState } from "react";

const Question = (props) => {
  return (
    <>
      <h1>{props.question}</h1>
      <ul>
        {props.answers.map((answer, index) => {
          return props.activeIndex === index ? (
            <li
              key={index}
              style={{ color: "blue" }}
              onClick={() => {
                props.onSelectAnswer(index);
              }}
            >
              {answer}
            </li>
          ) : (
            <li
              key={index}
              onClick={() => {
                props.onSelectAnswer(index);
              }}
            >
              {answer}
            </li>
          );
        })}
      </ul>
      <button>Send</button>
    </>
  );
};

const EnglishTest = () => {
  const [question, setQuestion] = useState({
    question: "question text",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  });

  const [activeIndex, setActiveIndex] = useState(-1);

  const onSelectAnswer = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Question
        {...question}
        activeIndex={activeIndex}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

export default loginGuard(EnglishTest);
