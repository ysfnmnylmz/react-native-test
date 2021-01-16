import { DELETE_ERROR } from './type';
import {getDataSuccess} from '../../../lib/helpers'

export const resetError = () => async (dispatch) => {
    await dispatch(getDataSuccess(DELETE_ERROR, null));
};
