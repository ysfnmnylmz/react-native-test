import {GET_MATCHES, GET_MATCHES_FAIL, GET_MATCHES_SUCCESS} from './type';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'
import api from '../../../lib/api';

export const getMatches = (league_id) => async (dispatch) => {
  await dispatch(getDataRequest(GET_MATCHES));
  try {
    const response = await api.get(`matches/?league_id=${league_id}`);
    const payload = await response.data;
    await dispatch(getDataSuccess(GET_MATCHES_SUCCESS, payload));
  } catch (error) {
    dispatch(getDataFail(GET_MATCHES_FAIL, error));
  }
};
