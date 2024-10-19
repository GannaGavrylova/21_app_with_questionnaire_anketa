import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      question: "Вопрос ...?",
      answers: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"],
      selectedAnswer: null, // Выбранный пользователем ответ
    },
    {
      id: 2,
      question: "Вопрос ...?",
      answers: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"],
      selectedAnswer: null,
    },
    {
      id: 3,
      question: "Вопрос...",
      answers: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"],
      selectedAnswer: null,
    },
    {
      id: 4,
      question: "Вопос...?",
      answers: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"],
      selectedAnswer: null,
    },
    {
      id: 5,
      question: "Вопрос...?",
      answers: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"],
      selectedAnswer: null,
    },
  ],
  result: [], // Добавляем поле для хранения результата
  score: 0, // Баллы, на основе которых будет рассчитана оценка в звёздах
};
const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    // Действие для выбора ответа на вопрос
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      // Находим вопрос по его id и обновляем выбранный ответ
      const question = state.data.find((q) => q.id === questionId);
      if (question) {
        question.selectedAnswer = answer;
      }
    },
    // Действие для отправки ответов (сохранение результатов)
    submitAnswer: (state) => {
      // Допустим, результатом будет список выбранных ответов
      state.result = state.data.map((q) => ({
        question: q.question,
        selectedAnswer: q.selectedAnswer || "Ответ не выбран",
      }));
      let totalScore = 0;
      state.data.forEach((q) => {
        if (q.selectedAnswer === "Отлично") {
          totalScore += 5;
        } else if (
          q.selectedAnswer === "Отлично" ||
          q.selectedAnswer === "Хорошо"
        ) {
          totalScore += 4;
        } else if (
          q.selectedAnswer === "Хорошо" ||
          q.selectedAnswer === "Удовлетворительно"
        ) {
          totalScore += 3;
        } else if (
          q.selectedAnswer === "Удовлетворительно" ||
          q.selectedAnswer === "Плохо"
        ) {
          totalScore += 2;
        } else {
          totalScore = 1;
        }
      });
      state.score = Math.min(Math.ceil(totalScore / state.data.length), 5); // Рассчитываем итоговую оценку от 1 до 5
    },
  },
});

// Экспортируем действия для использования в компонентах
export const { answerQuestion, submitAnswer } = questionnaireSlice.actions;
// Экспортируем редьюсер для добавления в store
export default questionnaireSlice.reducer;
