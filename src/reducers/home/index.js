import GLOBALS from '../../constants';
const {FONTS, COLORS, URL, ACTION_TYPE} = GLOBALS;
const initialState = {
  mandateList: [],
  activeCalendarEvent: [],
  referralData: '',
  saveReferralData: [],
  portfolioList: [],
  profileList: [],
  allReferralList: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.ACTIVE_MANDATE:
      return {...state, mandateList: action.payload};
    case ACTION_TYPE.CALENDAR:
      return {...state, activeCalendarEvent: action.payload};
    case ACTION_TYPE.CALENDAREVE:
      return {...state, activeCalendar: action.payload};
    case ACTION_TYPE.SAVE_REFERRAL_LIST:
      return {...state, allReferralList: action.payload};
    case ACTION_TYPE.MY_PROFILE:
      return {...state, profileList: action.payload};
    case ACTION_TYPE.PORTFOLIO:
      return {...state, portfolioList: action.payload};
    case ACTION_TYPE.HOME_RESET:
      return {
        mandateList: [],
        activeCalendarEvent: [],
        referralData: '',
        saveReferralData: [],
        portfolioList: [],
        profileList: [],
        allReferralList: [],
      };

    default:
      return state;
  }
}
export default homeReducer;
