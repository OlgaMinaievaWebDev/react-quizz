import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import questions from "../questions";
import { useState } from "react";

function Question({ key, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: questions[key].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }
  return (
    <div id="questions">
      <QuestionTimer timeout={1000} onTimeout={onSkipAnswer} />
      <h2>{questions[key].text}</h2>
      <Answers
        answers={questions[key].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
