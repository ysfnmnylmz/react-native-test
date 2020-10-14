import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, useStore} from 'react-redux';
import {Text} from 'native-base';

import {HomeScreen, DetailsPage, SelectCountry, SelectLeague} from './index'

import {LeagueHeader} from '../Components/Common';

import {getData, getMatches, getTeams} from '../store/actions'

const Stack = createStackNavigator();

function Main(props) {
    const [loading, setLoading] = useState(false)
    const store = useStore();
    // useEffect(() => {
    //     props.getData('2012');
    //     props.getTeams('2012');
    //     props.getMatches('2012').then(response => {setLoading(true)});
    // },[])
    const {leaguesReducer, matchesReducer, teamsReducer} = store.getState()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='SelectCountry'
                              options={{title: <LeagueHeader data={{name_tr: 'Ülke Seçiniz'}}/>}}>{props =>
                    <SelectCountry {...props} />}</Stack.Screen>
                <Stack.Screen name='SelectLeague'
                              options={{title: <LeagueHeader data={{name_tr: 'Lig Seçiniz'}}/>}}>{props =>
                    <SelectLeague {...props} />}</Stack.Screen>
                <Stack.Screen name="Home" options={{title: <LeagueHeader data={{name_tr: 'Maçlar'}}/>}}>{props =>
                    <HomeScreen {...props} />}</Stack.Screen>
                <Stack.Screen name="Details" options={{title: <LeagueHeader data={{name_tr: 'Maç Detayı'}}/>}}>{props =>
                    <DetailsPage {...props} />}</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

const mapStateToProps = (state) => ({
    leaguesReducer: state.leagues,
    matchesReducer: state.matches,
    teamsReducer: state.teams
});

const mapDispatchToProps = {getData, getMatches, getTeams};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
