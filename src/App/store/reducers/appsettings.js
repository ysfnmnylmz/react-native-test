import {GET_APP_SETTINGS, GET_APP_SETTINGS_FAIL, GET_APP_SETTINGS_SUCCESS} from '../actions/GetAppSettings/type';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_APP_SETTINGS:
      return {...state, loading : true}
    case GET_APP_SETTINGS_FAIL:
      return {...state, loading : false, error : payload}
    case GET_APP_SETTINGS_SUCCESS:
      return {...state, loading : false, data : payload}
    default:
      return state;
  }
}
