import {GET_TEAMS, GET_TEAMS_SUCCESS, GET_TEAMS_FAIL} from '../actions/GetTeams/type';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_TEAMS:
      return {...state, loading: true};
    case GET_TEAMS_FAIL:
      return {...state, loading: false, error: payload};
    case GET_TEAMS_SUCCESS:
      return {...state, loading: false, data: payload};
    default:
      return state;
  }
}
