import {GET_MATCHES, GET_MATCHES_FAIL, GET_MATCHES_SUCCESS} from './type';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'
import api from '../../../lib/api';

export const getMatches = (league_id) => async (dispatch) => {
  await dispatch(getDataRequest(GET_MATCHES));
  console.log('getMatches')
  try {
    const response = await api.get(`matches/`);
    const payload = await response.data;
    await dispatch(getDataSuccess(GET_MATCHES_SUCCESS, payload));
    return payload;
  } catch (error) {
    dispatch(getDataFail(GET_MATCHES_FAIL, error));
    return error;
  }
};
