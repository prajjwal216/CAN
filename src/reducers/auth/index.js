import GLOBALS from '../../constants';
const { FONTS, COLORS, URL, ACTION_TYPE } = GLOBALS;
const initialState = {
  isLoggedIn: false,
  isLoading: false,
  loginData: null,
  listState: [],
  isFirsttime : true
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SET_LOGIN:
      return {...state, loginData: action.payload,isLoggedIn:true};
    case 'add':
      return { ...state, total: action.payload.num1 + action.payload.num2 };
    case 'addLoginData':
      return { ...state, loginData: action.payload };
    case 'addEvent':
      return { ...state, event_list: action.payload };
    case ACTION_TYPE.SET_USER:
      return { ...state, isLoading: action.payload };
    case ACTION_TYPE.SET_USER:
      return { ...state, isLoading: action.payload };
    case ACTION_TYPE.TOGGLE_LOADER:
      return { ...state, isLoading: action.payload };
    case ACTION_TYPE.STATE_LIST:
      return { ...state, listState: action.payload };
      case ACTION_TYPE.RESET_FIRST_TIME:
      return { ...state, isFirsttime:false };
    case ACTION_TYPE.AUTH_RESET:
      return {
        isLoggedIn: false,
        isLoading: false,
        loginData: null,
        listState: [],
      };

    default:
      return state;
  }
}
export default authReducer;
