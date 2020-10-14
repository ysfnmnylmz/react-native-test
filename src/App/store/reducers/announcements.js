import {GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_FAIL, GET_ANNOUNCEMENTS_SUCCESS} from '../actions/GetAnnouncements/type';

const INITIAL_STATE = {
    announcements_loading: false,
    announcements_error: null,
    announcements_data: null,
};

export default function (state = INITIAL_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_ANNOUNCEMENTS:
            return state.announcements_loading = true;
        case GET_ANNOUNCEMENTS_FAIL:
            return state.announcements_loading = false, state.announcements_error = payload;
        case GET_ANNOUNCEMENTS_SUCCESS:
            return state.announcements_loading = false, state.announcements_data = payload;
        default:
            return state;
    }
}
