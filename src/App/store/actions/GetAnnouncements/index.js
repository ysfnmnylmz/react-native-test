import {GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_FAIL, GET_ANNOUNCEMENTS_SUCCESS} from './type';
import api from '../../../lib/api';
import {getDataRequest,getDataSuccess,getDataFail} from '../../../lib/helpers'

export const getAnnouncements = (data) => async (dispatch) => {
    const {active, date} = data
    await dispatch(getDataRequest(GET_ANNOUNCEMENTS));
    try {
        let response
        if(data){
            response = await api.get(`announcements/?active=${active}&date=${date}`);
        }else{
            response = await api.get(`announcements/`);
        }
        const payload = await response.data;
        await dispatch(getDataSuccess(GET_ANNOUNCEMENTS_SUCCESS, payload));
    } catch (error) {
        dispatch(getDataFail(GET_ANNOUNCEMENTS_FAIL, error));
    }
};
