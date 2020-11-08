import React, {useEffect, useState} from 'react';
import {Button, Image, TouchableOpacity, View} from 'react-native';
import {Content, Tab, Tabs, ScrollableTab} from 'native-base';
import {SummaryStats, PreviousResults, FormTab, TeamTable, MatchPotential} from '../Components/Tabs'
import {useStore, connect} from "react-redux";
import {getData} from '../store/actions/GetLeagues';
import {getMatches} from '../store/actions/GetMatches';
import {getTeams} from '../store/actions/GetTeams';
import {Loader} from "../Components/Common";
import {AdMobInterstitial, AdMobBanner} from "expo-ads-admob";
import scoreboard from '../../../assets/icons/scoreboard.png'

const TodayDetail = (props) => {
  const [home, setHome] = useState(null)
  const [away, setAway] = useState(null)
  const [homePrematches, setHomeprematches] = useState([])
  const [awayPrematches, setAwayprematches] = useState([])
  const [adReady, setAdready] = useState(false);
  const [loading, setLoading] = useState(false)
  const {match} = props.route.params
  const store = useStore();

  const insterstitialAdId = 'ca-app-pub-4742367558871759/2009627266'
  const {leaguesReducer, matchesReducer, teamsReducer, announcementsReducer} = store.getState()
  const setTeams = (teams) => {
    teams.map((team) => {
        (match.homeID === team.id) && setHome(team);
        (match.awayID === team.id) && setAway(team);
      }
    )
  }
  useEffect(() => {
    AdMobInterstitial.setAdUnitID(insterstitialAdId);
    AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
    const ready = AdMobInterstitial.getIsReadyAsync();
    AdMobInterstitial.addEventListener('interstitialDidLoad',
      () => AdMobInterstitial.showAdAsync()
    );

    AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
      () => setAdready(false)
    );

    AdMobInterstitial.addEventListener('interstitialDidOpen',
      () => console.log('did open'))
    AdMobInterstitial.addEventListener('interstitialDidClose',
      () => setAdready(true)
    );
    AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
      () => console.log('interstitialWillLeaveApplication')
    );
    loading || props.getData(match.competition_id).then(response => {
      props.getTeams(match.competition_id)
        .then(response => {
          props.getMatches(match.competition_id)
            .then(resp => setLoading(true))
        });
    })
    teamsReducer.data && setTeams(teamsReducer.data)
    away && matchesReducer.data.map((preMatch) => {
        if (preMatch.status === 'complete') {
          if (home.stats.seasonMatchesPlayed_overall - 5 > 0) {
            if (preMatch.game_week > (home.stats.seasonMatchesPlayed_overall - 5)) {
              preMatch.homeID === home.id && setHomeprematches(prevState => [...prevState, preMatch]);
              preMatch.awayID === home.id && setHomeprematches(prevState => [...prevState, preMatch]);
            }
            if (preMatch.game_week > (away.stats.seasonMatchesPlayed_overall - 5)) {
              preMatch.homeID === away.id && setAwayprematches(prevState => [...prevState, preMatch]);
              preMatch.awayID === away.id && setAwayprematches(prevState => [...prevState, preMatch]);
            }
          } else {
            if (preMatch.game_week <= (home.stats.seasonMatchesPlayed_overall)) {
              preMatch.homeID === home.id && setHomeprematches(prevState => [...prevState, preMatch]);
              preMatch.awayID === home.id && setHomeprematches(prevState => [...prevState, preMatch]);
            }
            if (preMatch.game_week <= (away.stats.seasonMatchesPlayed_overall)) {
              preMatch.homeID === away.id && setAwayprematches(prevState => [...prevState, preMatch]);
              preMatch.awayID === away.id && setAwayprematches(prevState => [...prevState, preMatch]);
            }
          }
        }
      }
    );
    homePrematches && homePrematches.filter(item => item)
    awayPrematches && awayPrematches.filter(item => item)
  }, [loading, teamsReducer.data, matchesReducer.data, leaguesReducer.data, away, home])
  if (home) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Tabs locked={false} tabContainerStyle={{height: 30}} tabBarUnderlineStyle={{height: 2}}
                renderTabBar={() => <ScrollableTab/>}>
            <Tab heading={match ? match.home_name : 'Evsahibi Takım'}>
              <TeamTable team={home && home} league={leaguesReducer[0] && leaguesReducer[0]}/>
            </Tab>
            <Tab heading={match ? match.away_name : 'Deplasman Takım'}>
              <TeamTable team={away && away} league={leaguesReducer[0] && leaguesReducer[0]}/>
            </Tab>
          </Tabs>
          {match.score && (
              <View style={{
                borderBottomLeftRadius: 50,
                borderTopLeftRadius: 50,
                position: 'absolute',
                top: '15%',
                alignSelf: 'flex-end',
                height: 75,
                width: 80,
                borderWidth:1,
                borderColor:'#333',
                backgroundColor: 'rgba(0,0,0,0)',
              }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Reward', {
                  match: match,
                })}
                  style={{
                  borderRadius: 50,
                  position: 'absolute',
                  top: 0,
                  alignSelf: 'flex-end',
                  height: 70,
                  width: 70,
                  left: 0,
                  backgroundColor: 'rgba(255,255,255,1)'
                }}
                >
                  <Image source={scoreboard} style={{padding:1, borderWidth:1,
                    borderColor:'#333',borderRadius:100,width:73, height:73}}/>
                </TouchableOpacity>
              </View>
          )}
        </Content>
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Tabs locked={true} tabBarUnderlineStyle={{height: 2}} renderTabBar={() => <ScrollableTab/>}>
            <Tab heading="Aralarındaki Maçlar">
              <PreviousResults id={match.id} home={home && home} away={away && away} match={match}/>
            </Tab>
            <Tab heading="Özet İstatistikler">
              <SummaryStats home={home && home} away={away && away}
                            leagueData={leaguesReducer[0] && leaguesReducer[0]}/>
            </Tab>
            <Tab heading="Form">
              <FormTab home={home && home} match={match} away={away && away} homePrematches={homePrematches}
                       awayPrematches={awayPrematches} leagueData={leaguesReducer[0] && leaguesReducer[0]}/>
            </Tab>
            <Tab heading="Maç Beklentisi">
              <MatchPotential home={home && home} match={match} away={away && away}/>
            </Tab>
          </Tabs>
        </Content>
      </View>
    )
  } else {
    return <Loader/>
  }
};

const mapStateToProps = (state) => ({
  leaguesReducer: state.leagues,
  matchesReducer: state.matches,
  teamsReducer: state.teams
});

const mapDispatchToProps = {getData, getMatches, getTeams};


export default connect(mapStateToProps, mapDispatchToProps)(TodayDetail);
