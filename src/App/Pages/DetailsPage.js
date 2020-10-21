import React from 'react';
import { View } from 'react-native';
import { Content, Tab, Tabs, ScrollableTab } from 'native-base';
import {SummaryStats, PreviousResults, FormTab, TeamTable, MatchPotential} from '../Components/Tabs'

const DetailsPage =({ route, navigation })=> {
  const { matchTeamsData, match, leagueData, fullMatches } = route.params;
  console.log(route.params)
  let homePrematches = [];
  let awayPrematches = [];
  let home = {};
  let away = {};
  if (match.homeID === matchTeamsData[0].id) {
    home = matchTeamsData[0]
    away = matchTeamsData[1]
  } else {
    away = matchTeamsData[0]
    home = matchTeamsData[1]
  }
  fullMatches.map((preMatch) => {
    if (preMatch.status === 'complete') {
      if (preMatch.game_week > (home.stats.seasonMatchesPlayed_overall - 5)) {
        preMatch.homeID === home.id && homePrematches.push(preMatch);
        preMatch.awayID === home.id && homePrematches.push(preMatch);
      }
      if (preMatch.game_week > (away.stats.seasonMatchesPlayed_overall - 5)) {
        preMatch.homeID === away.id && awayPrematches.push(preMatch);
        preMatch.awayID === away.id && awayPrematches.push(preMatch);
      }
    }
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tabs tabContainerStyle={{ height: 30 }} tabBarUnderlineStyle={{ height: 2 }}>
          <Tab heading={home.name}>
            <TeamTable team={home} league={leagueData} />
          </Tab>
          <Tab heading={away.name}>
            <TeamTable team={away} league={leagueData} />
          </Tab>
        </Tabs>
      </Content>
      <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Tabs locked={true} tabBarUnderlineStyle={{ height: 2 }} renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Aralarındaki Maçlar">
            <PreviousResults id={match.id} home={home} away={away} match={match} />
          </Tab>
          <Tab heading="Özet İstatistikler">
            <SummaryStats home={home} away={away} leagueData={leagueData} />
          </Tab>
          <Tab heading="Form">
            <FormTab home={home} match={match} away={away} homePrematches={homePrematches} awayPrematches={awayPrematches} leagueData={leagueData} />
          </Tab>
          <Tab heading="Maç Beklentisi">
            <MatchPotential home={home} match={match} away={away} />
          </Tab>
        </Tabs>
      </Content>
    </View>
  )
};

export default DetailsPage;
