import {GET_TEAMS, GET_TEAMS_SUCCESS, GET_TEAMS_FAIL} from '../actions/GetTeams/type';

const INITIAL_STATE = {
  teams_loading: false,
  teams_error: null,
  teams_data: null,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_TEAMS:
      return state.teams_loading = true;
    case GET_TEAMS_FAIL:
      return state.teams_error = false, state.teams_error = payload;
    case GET_TEAMS_SUCCESS:
      return state.teams_data = false, state.teams_data = payload;
    default:
      return state;
  }
}
