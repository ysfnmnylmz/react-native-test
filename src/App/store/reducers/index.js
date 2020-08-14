import {combineReducers} from 'redux';
import leaguesReducer from './leagues';
import matchesReducer from './matches';
import teamsReducer from './teams';
import preMatchesReducer from './prematches';

export default combineReducers({
    leaguesReducer,
    matchesReducer,
    teamsReducer,
    preMatchesReducer
});
