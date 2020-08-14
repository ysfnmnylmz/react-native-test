import { GET_TEAMS, GET_TEAMS_FAIL, GET_TEAMS_SUCCESS } from './type';
import api from '../../../lib/api';

export const getDataRequest = (type) => ({ type });

export const getDataFail = (type, error) => ({ type, payload: error });

export const getDataSuccess = (type, data) => ({ type, payload: data });

export const getTeams = (league_id) => async (dispatch) => {
    await dispatch(getDataRequest(GET_TEAMS));
    try {
        const response = await api.get(`teams/?league_id=${league_id}`);
        const payload = await response.data;
        await dispatch(getDataSuccess(GET_TEAMS_SUCCESS, payload));
    } catch (error) {
        dispatch(getDataFail(GET_TEAMS_FAIL, error));
    }
};
