import {combineReducers} from 'redux';
import leaguesReducer from './leagues';
import matchesReducer from './matches';
import teamsReducer from './teams';
import preMatchesReducer from './prematches';
import announcementsReducer from "./announcements";
import countryListReducer from './countrylist';
import todayMatchesReducer from './todaymatches';
import otherDaysMatchesReducer from './otherdaysmatches';
import appSettingsReducer from './appsettings';
import betTypeReducer from './bettypes';

export default combineReducers({
    leaguesReducer,
    matchesReducer,
    teamsReducer,
    preMatchesReducer,
    announcementsReducer,
    countryListReducer,
    todayMatchesReducer,
    otherDaysMatchesReducer,
    appSettingsReducer,
    betTypeReducer
});
