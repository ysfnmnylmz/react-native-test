import {GET_LEAGUES, GET_LEAGUES_SUCCESS, GET_LEAGUES_FAIL} from '../actions/GetLeagues/type';

const INITIAL_STATE = {
  league_loading: false,
  league_error: null,
  league_data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_LEAGUES:
      return {...state, league_loading: true};
    case GET_LEAGUES_FAIL:
      return {...state, league_loading: false, league_error: payload};
    case GET_LEAGUES_SUCCESS:
      return {...state, league_loading: false, league_data: payload};
    default:
      return state;
  }
}
