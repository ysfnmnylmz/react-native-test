import React, {useEffect, useState} from 'react';
import {View, Image, Button, StatusBar} from 'react-native';
import {useStore, connect} from 'react-redux';
import {Content, Card, CardItem, Body, Text, Right} from 'native-base';
import {getData} from '../store/actions/GetLeagues';
import {getMatches} from '../store/actions/GetMatches';
import {getTeams} from '../store/actions/GetTeams';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Loader} from "../Components/Common";

const win = require('../../../assets/icons/win.png');
const loss = require('../../../assets/icons/loss.png');
const draw = require('../../../assets/icons/draw.png');
const scored = require('../../../assets/icons/scored.png');
const conceced = require('../../../assets/icons/conceced.png');

const HomeScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const store = useStore();
  const {leaguesReducer, matchesReducer, teamsReducer, announcementsReducer} = store.getState()
  useEffect(() => {
    const {id} = props.route.params;
    leaguesReducer.data || props.getData(id).then(response => {
      props.getTeams(id)
        .then(response => {
          props.getMatches(id).then(response => {
            setLoading(true)
          });
        });
    });
  },[])
  const LeftActions = (match, matchTeams) => {
    let home = {};
    if (match.homeID === matchTeams[0].id) {
      home = matchTeams[0]
    } else {
      home = matchTeams[1]
    }
    return (
      <CardItem style={{backgroundColor: '#ebfff8', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={conceced}/>
            <Text style={styles.dataText}>{home.stats.seasonConcededNum_home}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={scored}/>
            <Text style={styles.dataText}>{home.stats.seasonScoredNum_home}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={loss}/>
            <Text style={styles.dataText}>{home.stats.seasonLossesNum_home}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={draw}/>
            <Text style={styles.dataText}>{home.stats.seasonDrawsNum_home}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={win}/>
            <Text style={styles.dataText}>{home.stats.seasonWinsNum_home}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={{width: 40, height: 40}} source={{uri: `${home.image}`}}/>
          </Body>
        </View>
      </CardItem>
    )
  }
  const RightActions = (match, matchTeams) => {
    let away = {};
    if (match.awayID === matchTeams[0].id) {
      away = matchTeams[0]
    } else {
      away = matchTeams[1]
    }
    return (
      <CardItem style={{backgroundColor: '#fffbeb', flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Body style={styles.flexColumn}>
            <Image style={{width: 40, height: 40}} source={{uri: `${away.image}`}}/>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={win}/>
            <Text style={styles.dataText}>{away.stats.seasonWinsNum_away}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={draw}/>
            <Text style={styles.dataText}>{away.stats.seasonDrawsNum_away}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={loss}/>
            <Text style={styles.dataText}>{away.stats.seasonLossesNum_away}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={scored}/>
            <Text style={styles.dataText}>{away.stats.seasonScoredNum_away}</Text>
          </Body>
          <Body style={styles.flexColumn}>
            <Image style={styles.icons} source={conceced}/>
            <Text style={styles.dataText}>{away.stats.seasonConcededNum_away}</Text>
          </Body>
        </View>
      </CardItem>
    )
  }
  if (!loading) {
    return (
      <Loader/>
    )
  } else {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        {leaguesReducer[0] && (
          <Content contentContainerStyle={{justifyContent: 'center'}}>
            {matchesReducer.data && (
              matchesReducer.data.map((match) => {
                if (leaguesReducer[0].game_week === match.game_week) {
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
                        <Swipeable
                          renderLeftActions={() => LeftActions(match, matchTeams)}
                          renderRightActions={() => RightActions(match, matchTeams)}>
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
                                match: match,
                                matchTeamsData: matchTeams,
                                leagueData: leaguesReducer[0],
                                fullMatches: matchesReducer.data
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
                        </Swipeable>
                      </Card>
                    </View>
                  )
                }
              })
            )}
          </Content>
        )}
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
  leaguesReducer: state.leagues,
  matchesReducer: state.matches,
  teamsReducer: state.teams
});

const mapDispatchToProps = {getData, getMatches, getTeams};


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
