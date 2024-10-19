import styles from "./styles.module.css";

function Question({ id, question, answers, selectedAnswer, onAnswerSelect }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`question-${id}`} // Уникальное имя для группы радио-кнопок
                value={answer}
                checked={selectedAnswer === answer} // Управляемое состояние
                onChange={() => onAnswerSelect(id, answer)} // Обработчик изменения
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
