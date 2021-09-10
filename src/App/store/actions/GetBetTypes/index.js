import {GET_BET_TYPES, GET_BET_TYPES_FAIL, GET_BET_TYPES_SUCCESS} from './type';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'
import api from '../../../lib/api';

export const getBetTypes = () => async (dispatch) => {
    await dispatch(getDataRequest(GET_BET_TYPES));
    try {
        const response = await api.get(`bet-type/`);
        const payload = await response.data;
        await dispatch(getDataSuccess(GET_BET_TYPES_SUCCESS, payload));
        return payload;
    } catch (error) {
        dispatch(getDataFail(GET_BET_TYPES_FAIL, error));
        return error;
    }
};
