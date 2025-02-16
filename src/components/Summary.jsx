import quizCompleteImg from "../assets/quiz-complete.png";
import questions from "../questions";

function Summary({ userAnswer }) {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === questions[index].answers[0]
  );

  const skippedAnswerShare = (skippedAnswers.length / userAnswer.length) * 100;
  const correctAnswerShare = (correctAnswers.length / userAnswer.length) * 100;
  const wrongAnswersShare = 100 - skippedAnswerShare - correctAnswerShare;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Completed Image" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className="user-answer">{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
