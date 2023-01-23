const URL = {
  BASE_URL: 'http://54.190.192.105:9185/angel/',
  LOGIN: 'investor_login',
  ACTIVE_MANDATE: 'mandate/list',
  RESET_PASSWORD: 'resetlink_investor',
  REGISTER: 'add_Investor',
  REFERRAL: 'add/referral',
  SAVE_REFERRAL: 'referral/list_by_mandate?user_mandate=',
  CALENDAR: 'getEventtillDate',
  CHANGE_PASSWORD: 'update-password',
  PORTFOLIO: 'get_all_portfolio',
  FORUM_CATEGORY: 'get_all_forum_Category',
  FORUM_CATEGORY_QUESTION: 'quetion_data_by_category?category_id=',
  STATE_LIST: 'get_all_state',
  MYPROFILE: 'loggedin_user_dataByid?_id=',
  UPDATE_PROFILE: 'update_Investor',
  FORUM_ADD_QUESTION: 'add_quetion',
  GET_QUESTION: 'quetion_data_by_id?_id=',
  FORUM_ADD_RESPONSE: 'update_question_data',
};

module.exports = URL;
