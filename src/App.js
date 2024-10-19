import "./App.css";
import Question from "./components/question";
import { useSelector, useDispatch } from "react-redux";
import Result from "./components/result";
import {
  answerQuestion,
  submitAnswer,
} from "./features/questionnaire/questionnaireSlice";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.data);

  const handleAnswerSelect = (questionId, answer) => {
    dispatch(answerQuestion({ questionId, answer }));
  };

  return (
    <div className="App">
      {questions.map((quest) => {
        return (
          <Question
            key={quest.id}
            {...quest}
            onAnswerSelect={handleAnswerSelect} // Передаем обработчик выбора ответа
          />
        );
      })}

      <button onClick={() => dispatch(submitAnswer())}>Submit</button>
      <Result />
    </div>
  );
}

export default App;
