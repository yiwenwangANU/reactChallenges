import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
function Questions() {
  const { questions, index, answer, dispatch } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Questions;
