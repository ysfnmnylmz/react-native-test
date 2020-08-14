import {GET_PRE_MATCHES, GET_PRE_MATCHES_FAIL, GET_PRE_MATCHES_SUCCESS} from './type';
import api from '../../../lib/api';

export const getDataRequest = (type) => ({type});

export const getDataFail = (type, error) => ({type, payload: error});

export const getDataSuccess = (type, data) => ({type, payload: data});

export const getPreMatches = (match_id) => async (dispatch) => {
  await dispatch(getDataRequest(GET_PRE_MATCHES));
  try {
    const response = await api.get(`pre-matches/?match_id=${match_id}`);
    const payload = await response.data;
    await dispatch(getDataSuccess(GET_PRE_MATCHES_SUCCESS, payload));
  } catch (error) {
    dispatch(getDataFail(GET_PRE_MATCHES_FAIL, error));
  }
};
