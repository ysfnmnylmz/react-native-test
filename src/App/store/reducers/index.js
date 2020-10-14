import {combineReducers} from 'redux';
import leaguesReducer from './leagues';
import matchesReducer from './matches';
import teamsReducer from './teams';
import preMatchesReducer from './prematches';
import announcementsReducer from "./announcements";

export default combineReducers({
    leaguesReducer,
    matchesReducer,
    teamsReducer,
    preMatchesReducer,
    announcementsReducer
});
