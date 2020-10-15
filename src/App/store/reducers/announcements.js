import {GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_FAIL, GET_ANNOUNCEMENTS_SUCCESS} from '../actions/GetAnnouncements/type';

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: null,
};

export default function (state = INITIAL_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_ANNOUNCEMENTS:
            return {...state, loading : true}
        case GET_ANNOUNCEMENTS_FAIL:
            return {...state, loading : false, error : payload}
        case GET_ANNOUNCEMENTS_SUCCESS:
            return {...state, loading : false, data : payload}
        default:
            return state;
    }
}
