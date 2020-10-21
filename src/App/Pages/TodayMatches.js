import React, {useEffect, useState} from 'react';
import {View, Image, Button} from 'react-native';
import {useStore, connect} from 'react-redux';
import {Content, Card, CardItem, Body, Text} from 'native-base';
import {getTodayMatches} from "../store/actions/GetTodayMatches";
import {Loader} from "../Components/Common";

const TodayMatches = (props) => {
  const [loading, setLoading] = useState(false)
  const store = useStore();
  const {leaguesReducer, matchesReducer, teamsReducer, todayMatchesReducer} = store.getState()
  useEffect(() => {
    todayMatchesReducer.data || props.getTodayMatches().then(response=> setLoading(true))
  }, [])

  if (!loading) {
    return (
      <Loader/>
    )
  } else {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <Content contentContainerStyle={{justifyContent: 'center'}}>
          {todayMatchesReducer.data && (
            todayMatchesReducer.data.map((match) => {
              let matchTeams = [];
              teamsReducer.data && (
                teamsReducer.data.map((team) => {
                  (match.homeID === team.id) && matchTeams.push(team);
                  (match.awayID === team.id) && matchTeams.push(team);
                })
              )
              return (
                <View key={match.id}>
                  <Card>
                    <CardItem style={styles.matchCard}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image style={styles.teamLogo}
                               source={{uri: `https://cdn.footystats.org/img/${match.home_image}`}}/>
                        <Body>
                          <Text style={styles.teamName}>{match.home_name}</Text>
                        </Body>
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text note style={{fontSize: 8}}>Hafta</Text>
                        <Text note style={{fontSize: 10}}>{match.game_week}</Text>
                        <Button title={'Detay'} onPress={() => props.navigation.navigate('Details', {
                          match: match
                        })}/>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Body>
                          <Text style={styles.teamName}>{match.away_name}</Text>
                        </Body>
                        <Image style={styles.teamLogo}
                               source={{uri: `https://cdn.footystats.org/img/${match.away_image}`}}/>
                      </View>
                    </CardItem>
                  </Card>
                </View>
              )
            })
          )}
        </Content>
      </View>
    )
  }
};

const styles = {
  flexColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  icons: {
    width: 15,
    height: 15
  },
  dataText: {
    fontSize: 12
  },
  matchCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  teamName: {
    fontSize: 12,
    textAlign: 'center'
  },
  teamLogo: {
    width: 40,
    height: 40
  }
}

const mapStateToProps = (state) => ({
  todayMatchesReducer: state.todayMatchesReducer
});

const mapDispatchToProps = {getTodayMatches};


export default connect(mapStateToProps, mapDispatchToProps)(TodayMatches);
