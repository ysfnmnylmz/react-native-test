import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {connect, useStore} from 'react-redux';
import {Body, Card, CardItem, Content, ScrollableTab, Tab, Tabs, Text} from 'native-base';
import {getTodayMatches} from "../store/actions/GetTodayMatches";
import {getOtherDaysMatches} from "../store/actions/OtherDaysMatches";
import {Loader} from "../Components/Common";
import {AdMobBanner} from "expo-ads-admob";
import moment from "moment";
import {Icon} from 'react-native-elements'
import * as Localization from 'expo-localization';


const TodayMatches = (props) => {
  moment.locale(Localization.locale.substring(0, 2))
  const [loading, setLoading] = useState(false)
  const store = useStore();
  const bannerAdd = 'ca-app-pub-4742367558871759/4679018010'
  const {todayMatchesReducer, otherDaysMatchesReducer} = store.getState()
  /*const getToken= async ()=>{
    const token =  (await Notifications.getDevicePushTokenAsync()).data
  }*/
  const returnDay = (day) => moment().add(day, "days").format('YYYY-MM-DD')
  const returnOtherMatches = async day => {
    await props.getOtherDaysMatches(returnDay(day))
    await props.getOtherDaysMatches(returnDay(day + 1))
    await props.getOtherDaysMatches(returnDay(day + 3))
    await props.getOtherDaysMatches(returnDay(day + 4))
  }
  const compare = (a, b) => {
    const bandA = a.date_unix;
    const bandB = b.date_unix;

    let comparison = 0;
    if (bandA < bandB) {
      comparison = -1;
    } else if (bandA > bandB) {
      comparison = 1;
    }
    return comparison;
  }
  useEffect(() => {
    todayMatchesReducer.data || props.getTodayMatches()
      .then(response => setLoading(true))
    returnOtherMatches(-2)
  }, [])

  if (!loading) {
    return (
      <Loader/>
    )
  } else {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <Tabs
          initialPage={2}
          tabBarPosition={'top'}
          locked={false}
          tabContainerStyle={{height: 30}}
          tabBarUnderlineStyle={{height: 1}}
          renderTabBar={() => <ScrollableTab/>}>
          <Tab heading={moment().add(-2, "days").format('DD MMMM')}>
            <Content contentContainerStyle={{justifyContent: 'center'}}>
              {otherDaysMatchesReducer.data && (
                otherDaysMatchesReducer.data.sort(compare).map((match) => {
                  if (match.match_date === returnDay(-2)) {
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
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{`${moment.unix(match.date_unix).format("DD MMMM")}`}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{`${match.homeGoalCount} - ${match.awayGoalCount}`}</Text>
                                </View>

                              ) : (
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{moment.unix(match.date_unix).format("DD MMMM")}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{match.status === 'suspended' ? Localization.locale === 'tr-TR' ? 'ERTELENDİ' : 'SUSPENDED' : moment.unix(match.date_unix).format('HH:mm')}</Text>
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
                  }
                })
              )}
            </Content>
          </Tab>
          <Tab heading={'Dün'}>
            <Content contentContainerStyle={{justifyContent: 'center'}}>
              {otherDaysMatchesReducer.data && (
                otherDaysMatchesReducer.data.sort(compare).map((match) => {
                  if (match.match_date === returnDay(-1)) {
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
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{`${moment.unix(match.date_unix).format("DD MMMM")}`}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{`${match.homeGoalCount} - ${match.awayGoalCount}`}</Text>
                                </View>

                              ) : (
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{moment.unix(match.date_unix).format("DD MMMM")}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{match.status === 'suspended' ? Localization.locale === 'tr-TR' ? 'ERTELENDİ' : 'SUSPENDED' : moment.unix(match.date_unix).format('HH:mm')}</Text>
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
                  }
                })
              )}
            </Content>
          </Tab>
          <Tab heading={'Bugün'}>
            <Content contentContainerStyle={{justifyContent: 'center'}}>
              {todayMatchesReducer.data && (
                todayMatchesReducer.data.sort(compare).map((match) => {
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
                                {match.score && <Icon
                                  name='star'
                                  type='font-awesome'
                                  color='#F0C238'
                                  size={15}
                                />}
                                <Text note
                                      style={{fontSize: 10}}>{`${moment.unix(match.date_unix).format("DD MMMM")}`}</Text>
                                <Text note
                                      style={{fontSize: 12}}>{`${match.homeGoalCount} - ${match.awayGoalCount}`}</Text>
                              </View>

                            ) : (
                              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                {match.score && <Icon
                                  name='star'
                                  type='font-awesome'
                                  color='#F0C238'
                                  size={15}
                                />}
                                <Text note
                                      style={{fontSize: 10}}>{moment.unix(match.date_unix).format("DD MMMM")}</Text>
                                <Text note
                                      style={{fontSize: 12}}>{match.status === 'suspended' ? Localization.locale === 'tr-TR' ? 'ERTELENDİ' : 'SUSPENDED' : moment.unix(match.date_unix).format('HH:mm')}</Text>
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
          </Tab>
          <Tab heading={'Yarın'}>
            <Content contentContainerStyle={{justifyContent: 'center'}}>
              {otherDaysMatchesReducer.data && (
                otherDaysMatchesReducer.data.sort(compare).map((match) => {
                  if (match.match_date === returnDay(+1)) {
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
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{`${moment.unix(match.date_unix).format("DD MMMM")}`}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{`${match.homeGoalCount} - ${match.awayGoalCount}`}</Text>
                                </View>

                              ) : (
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{moment.unix(match.date_unix).format("DD MMMM")}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{match.status === 'suspended' ? Localization.locale === 'tr-TR' ? 'ERTELENDİ' : 'SUSPENDED' : moment.unix(match.date_unix).format('HH:mm')}</Text>
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
                  }
                })
              )}
            </Content>
          </Tab>
          <Tab heading={moment().add(+2, "days").format('DD MMMM')}>
            <Content contentContainerStyle={{justifyContent: 'center'}}>
              {otherDaysMatchesReducer.data && (
                otherDaysMatchesReducer.data.sort(compare).map((match) => {
                  if (match.match_date === returnDay(+2)) {
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
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{`${moment.unix(match.date_unix).format("DD MMMM")}`}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{`${match.homeGoalCount} - ${match.awayGoalCount}`}</Text>
                                </View>

                              ) : (
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                  {match.score && <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='#F0C238'
                                    size={15}
                                  />}
                                  <Text note
                                        style={{fontSize: 10}}>{moment.unix(match.date_unix).format("DD MMMM")}</Text>
                                  <Text note
                                        style={{fontSize: 12}}>{match.status === 'suspended' ? Localization.locale === 'tr-TR' ? 'ERTELENDİ' : 'SUSPENDED' : moment.unix(match.date_unix).format('HH:mm')}</Text>
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
                  }
                })
              )}
            </Content>
          </Tab>
        </Tabs>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={bannerAdd}
          servePersonalizedAds={true}
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
  todayMatchesReducer: state.todayMatchesReducer,
  otherDaysMatchesReducer: state.otherDaysMatchesReducer
});

const mapDispatchToProps = {getTodayMatches, getOtherDaysMatches};


export default connect(mapStateToProps, mapDispatchToProps)(TodayMatches);
