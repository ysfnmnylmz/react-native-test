import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {LeagueHeader} from '../Components/Common';

import {getData, getMatches, getTeams} from '../store/actions'
import {getAnnouncements} from "../store/actions/GetAnnouncements";
import {getAppSettings} from "../store/actions/GetAppSettings"
import TodayMatches from "./TodayMatches";
import TodayDetail from "./TodayDetail";
import Reward from "../Components/Reward";

import * as Localization from 'expo-localization';
import MatchList from "../Components/MatchList";

const Stack = createStackNavigator();

const Main = (props) => {
  useEffect(() => {
    // props.getAnnouncements({active:'true', date:moment().format('YYYY-MM-DD')}).then(response => setLoading(false))
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Main'
                        options={{title: <LeagueHeader data={{name_tr: 'Main'}}/>}}>{props =>
              <MatchList {...props} />}</Stack.Screen>
        <Stack.Screen name='TodayMatches'
                      options={{
                        title: <LeagueHeader data={{name_tr:Localization.locale === 'tr-TR' ? 'Maç Programı': 'Match Schedule'}}/>
                      }}>{props =>
          <TodayMatches {...props} />}</Stack.Screen>
        <Stack.Screen name='MatchDetail'
                      options={{
                        title: <LeagueHeader data={{name_tr: Localization.locale === 'tr-TR' ? 'Maç Detayı': 'Match Detail'}}/>
                      }}>{props =>
          <TodayDetail {...props} />}</Stack.Screen>
        <Stack.Screen name='Reward'
                      options={{title: <LeagueHeader data={{name_tr: Localization.locale === 'tr-TR' ? 'Skor Tahmini': 'Score Prediction'}}/>}}>{props =>
          <Reward {...props} />}</Stack.Screen>
      </Stack.Navigator>
      {/*{loading || <AnnouncementsAlert data={announcementsReducer.data}/>}*/}
    </NavigationContainer>
  )

}

const mapStateToProps = (state) => ({
  leaguesReducer: state.leagues,
  matchesReducer: state.matches,
  teamsReducer: state.teams,
  announcementsReducer: state.announcementsReducer,
  appSettingsReducer: state.appSettingsReducer
});

const mapDispatchToProps = {getData, getMatches, getTeams, getAnnouncements, getAppSettings};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
