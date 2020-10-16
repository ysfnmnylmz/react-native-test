import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {HomeScreen, DetailsPage, SelectCountry, SelectLeague} from './index'

import { LeagueHeader} from '../Components/Common';

import {getData, getMatches, getTeams} from '../store/actions'
import {getAnnouncements} from "../store/actions/GetAnnouncements";

const Stack = createStackNavigator();

function Main(props) {
    /*const store = useStore();*/
    useEffect(() => {
        // props.getAnnouncements({active:'true', date:moment().format('YYYY-MM-DD')}).then(response => setLoading(false))
    },[])

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
            {/*{loading || <AnnouncementsAlert data={announcementsReducer.data}/>}*/}
        </NavigationContainer>
    )

}

const mapStateToProps = (state) => ({
    leaguesReducer: state.leagues,
    matchesReducer: state.matches,
    teamsReducer: state.teams,
    announcementsReducer: state.announcementsReducer
});

const mapDispatchToProps = {getData, getMatches, getTeams, getAnnouncements};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
