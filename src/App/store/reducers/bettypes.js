import {GET_BET_TYPES, GET_BET_TYPES_FAIL, GET_BET_TYPES_SUCCESS} from '../actions/GetBetTypes/type';

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: null,
};

export default function (state = INITIAL_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_BET_TYPES:
            return {...state, loading: true}
        case GET_BET_TYPES_FAIL:
            return {...state, loading: false, error: payload};
        case GET_BET_TYPES_SUCCESS:
            return {...state, loading: false, data: payload};
        default:
            return state;
    }
}
