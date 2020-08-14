import {GET_LEAGUES, GET_LEAGUES_FAIL, GET_LEAGUES_SUCCESS} from './type';
import api from '../../../lib/api';

export const getDataRequest = (type) => ({type});

export const getDataFail = (type, error) => ({type, payload: error});

export const getDataSuccess = (type, data) => ({type, payload: data});

export const getData = (id) => async (dispatch) => {
  await dispatch(getDataRequest(GET_LEAGUES));
  try {
    const response = await api.get(`leagues/?id=${id}`);
    const payload = await response.data;
    await dispatch(getDataSuccess(GET_LEAGUES_SUCCESS, payload));
  } catch (error) {
    dispatch(getDataFail(GET_LEAGUES_FAIL, error));
  }
};
