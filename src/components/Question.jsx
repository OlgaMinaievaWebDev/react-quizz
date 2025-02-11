import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import questions from "../questions";
import { useState } from "react";

function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
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
        isCorrect: null,
      });
    }, 1000);
  }
  return (
    <div id="questions">
      <QuestionTimer timeout={1000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
