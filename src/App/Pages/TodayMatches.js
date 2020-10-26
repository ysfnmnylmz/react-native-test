import React, {useEffect, useState} from 'react';
import {View, Image, Button, TouchableOpacity} from 'react-native';
import {useStore, connect} from 'react-redux';
import {Content, Card, CardItem, Body, Text} from 'native-base';
import {getTodayMatches} from "../store/actions/GetTodayMatches";
import {Loader} from "../Components/Common";
import {AdMobBanner} from "expo-ads-admob";
import moment from "moment";

const TodayMatches = (props) => {
  const [loading, setLoading] = useState(false)
  const store = useStore();
  const bannerAdd = 'ca-app-pub-4742367558871759/4679018010'
  const {leaguesReducer, matchesReducer, teamsReducer, todayMatchesReducer} = store.getState()
  useEffect(() => {
    todayMatchesReducer.data || props.getTodayMatches().then(response => setLoading(true))
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
              return (
                <View key={match.id}>
                  <Card>
                    <TouchableOpacity onPress={() => props.navigation.navigate('MatchDetail', {
                      match: match,
                    })}>
                      <CardItem style={styles.matchCard}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <Image style={styles.teamLogo}
                                 source={{uri: `https://cdn.footystats.org/img/${match.home_image}`}}/>
                          <Body>
                            <Text style={styles.teamName}>{match.home_name}</Text>
                          </Body>
                        </View>
                        {match.status === 'complete' ? (
                          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text note
                                  style={{fontSize: 10}}>{`${moment.unix(match.date_unix).format("DD MMMM")}`}</Text>
                            <Text note style={{fontSize: 12}}>{`${match.homeGoalCount} - ${match.awayGoalCount}`}</Text>
                          </View>

                        ) : (
                          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text note style={{fontSize: 10}}>{moment.unix(match.date_unix).format("DD MMMM")}</Text>
                            <Text note style={{fontSize: 12}}>{moment.unix(match.date_unix).format('HH:mm')}</Text>
                          </View>
                        )}
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <Body>
                            <Text style={styles.teamName}>{match.away_name}</Text>
                          </Body>
                          <Image style={styles.teamLogo}
                                 source={{uri: `https://cdn.footystats.org/img/${match.away_image}`}}/>
                        </View>
                      </CardItem>
                    </TouchableOpacity>
                  </Card>
                </View>
              )
            })
          )}
        </Content>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={bannerAdd} // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds={true} // true or false
        />
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
