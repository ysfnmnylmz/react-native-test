import {GET_OTHER_DAYS_MATCHES,GET_OTHER_DAYS_MATCHES_FAIL,GET_OTHER_DAYS_MATCHES_SUCCESS} from '../actions/OtherDaysMatches/type';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload,date} = action;
  switch (type) {
    case GET_OTHER_DAYS_MATCHES:
      return {...state, loading: true};
    case GET_OTHER_DAYS_MATCHES_FAIL:
      return {...state, loading: false, error: payload};
    case GET_OTHER_DAYS_MATCHES_SUCCESS:
      const newData = state.data ? state.data.concat(payload): payload
      return {...state, loading: false, data: newData};
    default:
      return state;
  }
}
