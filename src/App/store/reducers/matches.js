import {GET_MATCHES, GET_MATCHES_SUCCESS, GET_MATCHES_FAIL} from '../actions/GetMatches/type';

const INITIAL_STATE = {
  matches_loading: false,
  matches_error: null,
  matches_data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_MATCHES:
      return state.matches_loading = true;
    case GET_MATCHES_FAIL:
      return state.matches_loading = false, state.matches_error = payload;
    case GET_MATCHES_SUCCESS:
      return state.matches_loading = false, state.matches_data = payload;
    default:
      return state;
  }
}
