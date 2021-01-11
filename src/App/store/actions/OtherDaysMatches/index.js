import { GET_OTHER_DAYS_MATCHES, GET_OTHER_DAYS_MATCHES_FAIL, GET_OTHER_DAYS_MATCHES_SUCCESS } from './type';
import api from '../../../lib/api';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'

export const getOtherDaysMatches = (date) => async (dispatch) => {
  await dispatch(getDataRequest(GET_OTHER_DAYS_MATCHES));
  try {
    console.log('TEST',date)
    const response = await api.get(`todays-matches/?date=${date}`);
    const payload = await response.data;
    await dispatch(getDataSuccess(GET_OTHER_DAYS_MATCHES_SUCCESS, payload,date));
  } catch (error) {
    dispatch(getDataFail(GET_OTHER_DAYS_MATCHES_FAIL, error));
  }
};
