import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Content, CardItem, Left, Thumbnail, Body, Image, Text, Right} from 'native-base';
import {Table,  Row, Rows} from 'react-native-table-component';
import {Loader} from "../Common";
import * as Localization from "expo-localization";


const TeamTable = ({team, league}) => {
  console.log(team.stats)
  let headData = Localization.locale === 'tr-TR' ? ['İstatistikler', 'Toplam', 'Evinde', 'Deplasmanda']:['Statistics', 'Total', 'Home', 'Away']
  let dataTable = [
    [Localization.locale==='tr-TR' ? 'Kazandı' : 'Win', team.stats.seasonWinsNum_overall, team.stats.seasonWinsNum_home, team.stats.seasonWinsNum_away],
    [Localization.locale==='tr-TR' ? 'Berabere' : 'Draw', team.stats.seasonDrawsNum_overall, team.stats.seasonDrawsNum_home, team.stats.seasonDrawsNum_away],
    [Localization.locale==='tr-TR' ? 'Yenildi' : 'Lose', team.stats.seasonLossesNum_overall, team.stats.seasonLossesNum_home, team.stats.seasonLossesNum_away],
    [Localization.locale==='tr-TR' ?'Toplam Gol Ort.': 'Goal Avg.', team.stats.seasonAVG_overall, team.stats.seasonAVG_home, team.stats.seasonAVG_away],
    [Localization.locale==='tr-TR' ?'A. Gol Ort.': 'Goal Scored Avg.', team.stats.seasonScoredAVG_overall, team.stats.seasonScoredAVG_home, team.stats.seasonScoredAVG_away],
    [Localization.locale==='tr-TR' ?'Y. Gol Ort.': 'Goal Conceded Avg.', team.stats.seasonConcededAVG_overall, team.stats.seasonConcededAVG_home, team.stats.seasonConcededAVG_away],
    [Localization.locale==='tr-TR' ?'KG Var': 'BTTS', team.stats.seasonBTTS_overall, team.stats.seasonBTTS_home, team.stats.seasonBTTS_away],
    [Localization.locale==='tr-TR' ?'G. Yemediği': 'Clean Sheet', team.stats.seasonCS_overall, team.stats.seasonCS_home, team.stats.seasonCS_away],
    [Localization.locale==='tr-TR' ?'G. Atamadığı': 'Failed to Score', team.stats.seasonFTS_overall, team.stats.seasonFTS_home, team.stats.seasonFTS_away],
    ['xG', team.stats.xg_for_avg_overall, team.stats.xg_for_avg_home, team.stats.xg_for_avg_away],
    ['xGY', team.stats.xg_against_avg_overall, team.stats.xg_against_avg_home, team.stats.xg_against_avg_away]
  ];
  if(league){
  return (
    <ScrollView>
      <Content>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: `${team.image}`}}/>
            <Body>
              <Text>{team.name}</Text>
              <Text note>{Localization.locale === 'tr-TR' ? `Sıralama: ${team.table_position}/${league.clubNum}`: `Position: ${team.table_position}/${league.clubNum}`}</Text>
              <Text note>{league.name}</Text>
            </Body>
          </Left>
          <Right>
            <Thumbnail source={{uri: `${league.image}`}}/>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#7a7a7a'}}>
              <Row data={headData} style={styles.HeadStyle} textStyle={styles.TableText}/>
              <Rows data={dataTable} textStyle={styles.TableText}/>
            </Table>
          </View>
        </CardItem>
      </Content>
    </ScrollView>
  )
  }else{
    return(<Loader/>)
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  HeadStyle: {
    height: 35,
    alignContent: "center",
    backgroundColor: 'rgba(240,240,240,1)'
  },
  TableText: {
    margin: 2,
    fontSize: 12,
    textAlign: 'center',
  }
});
export default TeamTable;
