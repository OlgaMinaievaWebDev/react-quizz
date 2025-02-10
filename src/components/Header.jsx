import logo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="ReactQuiz" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;
