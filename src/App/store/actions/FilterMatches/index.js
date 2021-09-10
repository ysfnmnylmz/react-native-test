import {GET_MATCHES, GET_MATCHES_FAIL, GET_MATCHES_SUCCESS} from '../GetMatches/type';
import {FILTER_MATCHES_SUCCESS} from './type';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'

export const filterMatches = (data) => async (dispatch) => {
    try {
        await dispatch(getDataSuccess(FILTER_MATCHES_SUCCESS, data));
        return data;
    } catch (error) {
        return error;
    }
};
