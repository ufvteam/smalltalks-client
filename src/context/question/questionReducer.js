import {
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  SET_CURRENT_QUESTION,
  CLEAR_CURRENT_QUESTION,
  FILTER_QUESTIONS,
  CLEAR_FILTER,
} from '../types';

const questionReducer = (state, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };

    case UPDATE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.questionId === action.payload.questionId
            ? action.payload
            : question
        ),
      };

    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.questionId !== action.payload
        ),
      };

    case SET_CURRENT_QUESTION:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT_QUESTION:
      return {
        ...state,
        current: null,
      };

    case FILTER_QUESTIONS:
      return {
        ...state,
        filtered: state.questions.filter((question) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return question.title.match(regex) || question.content.match(regex);
        }),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default questionReducer;
