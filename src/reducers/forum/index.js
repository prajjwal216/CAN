import GLOBALS from '../../constants';
const {ACTION_TYPE} = GLOBALS;
const initialState = {
  forumCategories: [],
  selectedCategory: null,
  selectedCategoryQuestion: [],
  selectedQuestionResponse: null,
  selectedQuetionId: null,
};

function forumReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SET_FORUM_CATEGORY:
      return {...state, forumCategories: action.payload};
    case ACTION_TYPE.SET_SELECTED_FORUM:
      return {...state, selectedCategory: action.payload};
    case ACTION_TYPE.SET_SELECTED_FORUM_QUES:
      return {...state, selectedCategoryQuestion: action.payload};
    case ACTION_TYPE.SET_QUESTION_FOR_RESPONSE:
      return {...state, selectedQuestionResponse: action.payload};
    case ACTION_TYPE.GET_QUESTION:
      return {...state, selectedQuetionId: action.payload};
    case ACTION_TYPE.FORUM_RESET:
      return {
        forumCategories: [],
        selectedCategory: null,
        selectedCategoryQuestion: [],
        selectedQuestionResponse: null,
        selectedQuetionId: null,
      };
    default:
      return state;
  }
}
export default forumReducer;
