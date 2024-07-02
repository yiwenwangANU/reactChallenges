import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuiz();
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={(e) => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={(e) => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
