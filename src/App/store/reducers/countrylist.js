import {GET_COUNTRY_LIST, GET_COUNTRY_LIST_FAIL, GET_COUNTRY_LIST_SUCCESS} from '../actions/GetCountryList/type';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_COUNTRY_LIST:
      return {...state, loading: true}
    case GET_COUNTRY_LIST_FAIL:
      return {...state, loading: false, error: payload};
    case GET_COUNTRY_LIST_SUCCESS:
      return {...state, loading: false, data: payload};
    default:
      return state;
  }
}
