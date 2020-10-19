import {GET_MATCHES, GET_MATCHES_SUCCESS, GET_MATCHES_FAIL} from '../actions/GetMatches/type';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_MATCHES:
      return {...state, loading: true};
    case GET_MATCHES_FAIL:
      return {...state, loading: false, error: payload};
    case GET_MATCHES_SUCCESS:
      return {...state, loading: false, data: payload};
    default:
      return state;
  }
}
