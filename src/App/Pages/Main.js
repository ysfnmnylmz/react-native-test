import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsPage from './DetailsPage';
import SelectLeague from './SelectLeague';
import LeagueHeader from '../Components/Common/LeagueHeader';
import { connect, useStore } from 'react-redux';
import { getData } from '../store/actions/GetLeagues';
import { getMatches } from '../store/actions/GetMatches';
import { getTeams } from '../store/actions/GetTeams';
import { Text } from 'native-base';

const Stack = createStackNavigator();
function Main(props) {
    const store = useStore();
    useEffect(() => {
        props.getData();
        props.getMatches();
        props.getTeams('2012');
    })
    const { leaguesReducer, matchesReducer, teamsReducer } = store.getState()
    if (leaguesReducer.league_loading) {
        return (
            <Text>Loading...</Text>
        )
    }
    else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='SelectLeague' options={{title: <LeagueHeader data={leaguesReducer[0]} />}}>{props => <SelectLeague {...props} />}</Stack.Screen>
                    <Stack.Screen name="Home" options={{ title: <LeagueHeader data={leaguesReducer[0]} /> }}>{props => <HomeScreen {...props} teams={teamsReducer} data={leaguesReducer[0]} matches={matchesReducer} />}</Stack.Screen>
                    <Stack.Screen name="Details" options={{ title: <LeagueHeader data={leaguesReducer[0]} /> }}>{props => <DetailsPage {...props} />}</Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
};

const mapStateToProps = (state) => ({ 
    leaguesReducer: state.leagues, 
    matchesReducer: state.matches,
    teamsReducer: state.teams
});

const mapDispatchToProps = { getData, getMatches, getTeams };


export default connect(mapStateToProps, mapDispatchToProps)(Main);
