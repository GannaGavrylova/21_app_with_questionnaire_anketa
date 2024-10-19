import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Result() {
  const result = useSelector((state) => state.questionnaire.result);
  const score = useSelector((state) => state.questionnaire.score); // Получаем итоговый балл
  if (!result || result.length === 0) {
    return <p>Ответов пока нет. Пожалуйста, завершите анкету</p>;
  }
  return (
    <div>
      <h2>Ваша оценка: </h2>
      <p>{score} из 5</p>
      {/* <h2>Ваша ответы: </h2>
      <ul>
        {result.map((res, index) => (
          <li key={index}>
            <strong>{res.question}: </strong> {res.selectedAnswer}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Result;
