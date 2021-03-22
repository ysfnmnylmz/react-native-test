import {GET_APP_SETTINGS, GET_APP_SETTINGS_FAIL, GET_APP_SETTINGS_SUCCESS} from './type';
import api from '../../../lib/api';
import {getDataRequest, getDataSuccess, getDataFail} from '../../../lib/helpers'

export const getAppSettings = () => async (dispatch) => {
  await dispatch(getDataRequest(GET_APP_SETTINGS));
  try {
    const response = await api.get(`app-settings/`);
    const payload = await response.data;
    console.log('TEST', payload)
    await dispatch(getDataSuccess(GET_APP_SETTINGS_SUCCESS, payload));
  } catch (error) {
    dispatch(getDataFail(GET_APP_SETTINGS_FAIL, error));
  }
};
