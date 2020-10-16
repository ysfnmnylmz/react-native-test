import {GET_COUNTRY_LIST, GET_COUNTRY_LIST_FAIL, GET_COUNTRY_LIST_SUCCESS} from './type';
import api from '../../../lib/api';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'

export const getCountries = () => async (dispatch) => {
  await dispatch(getDataRequest(GET_COUNTRY_LIST));
  try {
    const response = await api.get(`leagues-lists/`);
    const payload = await response.data;
    await dispatch(getDataSuccess(GET_COUNTRY_LIST_SUCCESS, payload));
  } catch (error) {
    dispatch(getDataFail(GET_COUNTRY_LIST_FAIL, error));
  }
};
