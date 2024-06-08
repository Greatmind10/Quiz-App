import { useState } from "react";
import { resultInitialState } from "./constants";
import AnswerTimer from "./AnswerTimer/AnswerTimer";

const Quiz = ({ questions }) => {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [answerIdz, setAnswerIdz] = useState(null);
  const [answer, setNewAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  //line 12 is for displaying the total question asked, length of the question will give us this
  //the answer to each question is displaced as a list with the <ul> tag by mapping through the choices
  const { question, choices, correctAnswer } = questions[currentquestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdz(index);
    if (answer === correctAnswer) {
      setNewAnswer(true);
    } else {
      setNewAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdz(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentquestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };
  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };
  const handleTimeUp = () => {};

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <AnswerTimer duration={10} onTimeUp={handleTimeUp} />

          <span className="active-question-no">{currentquestion + 1}</span>
          <span className="total-questions">/{questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdz === index ? "selected-answer" : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdz === null}>
              {currentquestion === questions.length - 1 ? "finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question:<span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span>{result.score}</span>
          </p>
          <p>
            Correct Answers:<span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span>{result.wrongAnswers}</span>
          </p>
          <button
            onClick={onTryAgain}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              height: "30px",
              borderRadius: "5px",
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};
export default Quiz;
