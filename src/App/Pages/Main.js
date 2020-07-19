import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsPage from './DetailsPage';
import LeagueHeader from '../Components/Common/LeagueHeader';
import { connect, useStore } from 'react-redux';
import { getData } from '../store/actions/GetLeagues';
import { Text } from 'native-base';

const Stack = createStackNavigator();
function Main(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);

    const store = useStore();
    useEffect(() => {
        props.getData();
        setLoading(true)
    }, [data])
    if (!loading) {
        return (
            <Text>Loading...</Text>
        )
    }
    else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" options={{ title: <LeagueHeader data={store.getState().leaguesReducer.league_data} /> }}>{props => <HomeScreen {...props} teams={teams} data={data} matches={matches} />}</Stack.Screen>
                    <Stack.Screen name="Details" options={{ title: <LeagueHeader data={store.getState().leaguesReducer.league_data} /> }}>{props => <DetailsPage {...props} />}</Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
};

const mapStateToProps = (state) => ({ leaguesReducer: state.leagues });

const mapDispatchToProps = { getData };


export default connect(mapStateToProps, mapDispatchToProps)(Main);
