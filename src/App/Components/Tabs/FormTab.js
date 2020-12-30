import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Content, Card, CardItem, Body, Text} from 'native-base';
import NumberStats from './NumberStats';
import {Loader} from "../Common";
import * as Localization from 'expo-localization'

const FormTab = ({homePrematches, awayPrematches, home, away, leagueData, match}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [loading])
  const SwipeActions = (team, match) => {
    return (
      <NumberStats team={team} match={match} styles={styles}/>
    )
  }
  if (loading) {
    return (
      <Loader/>
    )
  } else {
    return (
      <Content contentContainerStyle={{flex: 1, flexDirection: 'row'}}>
        <Swipeable containerStyle={{width: '50%'}} renderRightActions={() => SwipeActions(home, match)}>
          <Card style={{height: '97%'}}>
            <CardItem header style={{backgroundColor: '#333', height: 50}}>
              <Text style={{fontSize: 10, color: 'white'}}>{home.name}</Text>
            </CardItem>
            <ScrollView>
              <CardItem>
                <Body>
                  <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
                    <Image style={{width: 50, height: 50}} source={{uri: `${home.image}`}}/>
                    <View style={{flex: 1, flexDirection: 'row', marginBottom: 25}}>
                      {homePrematches.map((preMatch, i) => {
                        if (i < 5) {
                          return (
                            <View
                              style={String(preMatch.winningTeam) === String(home.id).substring(0, String(home.id).length - 4) ? styles.win : preMatch.winningTeam == "-1" ? styles.draw : styles.lost}
                              key={String(i)}>
                              <Text
                                style={styles.textStyle}>{preMatch.winningTeam == "-1" ? Localization.locale === 'tr-TR' ? "B" : 'D' : String(preMatch.winningTeam) === String(home.id).substring(0, String(home.id).length - 4) ? Localization.locale === 'tr-TR' ? "G" : 'W' : Localization.locale === 'tr-TR' ? "M" : 'L'}</Text>
                            </View>
                          )
                        }
                      })}
                    </View>
                    {homePrematches.map((prevMatch, i) => {
                      if (i < 5) {
                        return (
                          <View style={styles.row} key={String(i)}>
                            <Image style={styles.prevMatchImage}
                                   source={{uri: `https://cdn.footystats.org/img/${prevMatch.home_image}`}}/>
                            <View style={styles.column}>
                              <Text
                                style={styles.FtimeScore}>{`${prevMatch.homeGoalCount} - ${prevMatch.awayGoalCount}`}</Text>
                              <Text
                                style={styles.HtimeScore}>{`${prevMatch.ht_goals_team_a} - ${prevMatch.ht_goals_team_b}`}</Text>
                            </View>
                            <Image style={styles.prevMatchImage}
                                   source={{uri: `https://cdn.footystats.org/img/${prevMatch.away_image}`}}/>
                          </View>
                        )
                      }
                    })}
                  </View>
                </Body>
              </CardItem>
            </ScrollView>
          </Card>
        </Swipeable>
        <Swipeable containerStyle={{width: '50%'}} renderRightActions={() => SwipeActions(away, match)}>
          <Card style={{height: '97%'}}>
            <CardItem header style={{backgroundColor: '#333', height: 50}}>
              <Text style={{fontSize: 10, color: 'white'}}>{away.name}</Text>
            </CardItem>
            <ScrollView>
              <CardItem>
                <Body>
                  <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
                    <Image style={{width: 50, height: 50}} source={{uri: `${away.image}`}}/>
                    <View style={{flex: 1, flexDirection: 'row', marginBottom: 25}}>
                      {awayPrematches.map((preMatch, i) => {
                        if (i < 5) {
                          return (
                            <View
                              style={String(preMatch.winningTeam) === String(away.id).substring(0, String(away.id).length - 4) ? styles.win : preMatch.winningTeam == "-1" ? styles.draw : styles.lost}
                              key={String(i)}>
                              <Text
                                style={styles.textStyle}>{preMatch.winningTeam == "-1" ? Localization.locale === 'tr-TR' ? "B" : 'D' : String(preMatch.winningTeam) === String(home.id).substring(0, String(home.id).length - 4) ? Localization.locale === 'tr-TR' ? "G" : 'W' : Localization.locale === 'tr-TR' ? "M" : 'L'}</Text>
                            </View>)
                        }
                      })}
                    </View>
                    {awayPrematches.map((prevMatch, i) => {
                      if (i < 5) {
                        return (
                          <View style={styles.row} key={String(i)}>
                            <Image style={styles.prevMatchImage}
                                   source={{uri: `https://cdn.footystats.org/img/${prevMatch.home_image}`}}/>
                            <View style={styles.column}>
                              <Text
                                style={styles.FtimeScore}>{`${prevMatch.homeGoalCount} - ${prevMatch.awayGoalCount}`}</Text>
                              <Text
                                style={styles.HtimeScore}>{`${prevMatch.ht_goals_team_a} - ${prevMatch.ht_goals_team_b}`}</Text>
                            </View>
                            <Image style={styles.prevMatchImage}
                                   source={{uri: `https://cdn.footystats.org/img/${prevMatch.away_image}`}}/>
                          </View>
                        )
                      }
                    })}
                  </View>
                </Body>
              </CardItem>
            </ScrollView>
          </Card>
        </Swipeable>
      </Content>
    )
  }
}
const styles = {
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyConten: 'center',
  },
  prevMatchImage: {
    width: 25,
    height: 25,
  },
  HtimeScore: {
    textAlign: 'center',
    fontSize: 8,
  },
  FtimeScore: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold'
  },
  win: {
    backgroundColor: 'green',
    width: 15,
    height: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  draw: {
    backgroundColor: 'orange',
    width: 15,
    height: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  lost: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
  }
}
export default FormTab;
