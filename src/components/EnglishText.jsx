import loginGuard from "./loginGuard";

const Question = (props) => {
  return (
    <>
      <h1>{props.question}</h1>
      <ul>
        {props.answers.map((answer, index) => {
          return props.activeIndex === index ? (
            <li key={index} style={{ color: "blue" }}>
              {answer}
            </li>
          ) : (
            <li key={index}>{answer}</li>
          );
        })}
      </ul>
      <button>Send</button>
    </>
  );
};

const EnglishTest = () => {
  const question = {
    question: "question text",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  };

  return (
    <div>
      <Question {...question} activeIndex={3} />
    </div>
  );
};

export default loginGuard(EnglishTest);
