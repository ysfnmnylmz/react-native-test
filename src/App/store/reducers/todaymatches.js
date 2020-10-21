import {GET_TODAY_MATCHES, GET_TODAY_MATCHES_SUCCESS, GET_TODAY_MATCHES_FAIL} from '../actions/GetTodayMatches/type';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_TODAY_MATCHES:
      return {...state, loading: true};
    case GET_TODAY_MATCHES_FAIL:
      return {...state, loading: false, error: payload};
    case GET_TODAY_MATCHES_SUCCESS:
      return {...state, loading: false, data: payload};
    default:
      return state;
  }
}
