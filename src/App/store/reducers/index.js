import {combineReducers} from 'redux';
import leaguesReducer from './leagues';
import matchesReducer from './matches';
import teamsReducer from './teams';

export default combineReducers({
    leaguesReducer,
    matchesReducer,
    teamsReducer
});
