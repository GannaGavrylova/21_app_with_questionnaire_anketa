import { configureStore } from "@reduxjs/toolkit";
import questionnaire from "./features/questionnaire/questionnaireSlice";

const store = configureStore({
  reducer: {
    questionnaire,
  },
});

export default store;
