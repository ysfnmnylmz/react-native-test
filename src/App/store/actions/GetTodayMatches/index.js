import { GET_TODAY_MATCHES, GET_TODAY_MATCHES_FAIL, GET_TODAY_MATCHES_SUCCESS } from './type';
import api from '../../../lib/api';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'

export const getTodayMatches = () => async (dispatch) => {
  await dispatch(getDataRequest(GET_TODAY_MATCHES));
  try {
    const response = await api.get(`todays-matches/`);
    const payload = await response.data;
    await dispatch(getDataSuccess(GET_TODAY_MATCHES_SUCCESS, payload));
  } catch (error) {
    dispatch(getDataFail(GET_TODAY_MATCHES_FAIL, error));
  }
};
