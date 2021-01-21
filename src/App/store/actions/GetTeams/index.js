import { GET_TEAMS, GET_TEAMS_FAIL, GET_TEAMS_SUCCESS } from './type';
import api from '../../../lib/api';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'

export const getTeams = (home_id, away_id) => async (dispatch) => {
    await dispatch(getDataRequest(GET_TEAMS));
    try {
        const response = await api.get(`teams/?home_id=${home_id}&away_id=${away_id}`);
        const payload = await response.data;
        await dispatch(getDataSuccess(GET_TEAMS_SUCCESS, payload));
    } catch (error) {
        dispatch(getDataFail(GET_TEAMS_FAIL, error));
    }
};
