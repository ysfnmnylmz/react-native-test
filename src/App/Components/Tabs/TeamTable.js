import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Content, CardItem, Left, Thumbnail, Body, Image, Text, Right} from 'native-base';
import {Table,  Row, Rows} from 'react-native-table-component';
import {Loader} from "../Common";
import * as Localization from "expo-localization";


const TeamTable = ({team, league}) => {
  let headData = Localization.locale === 'tr-TR' ? ['İstatistikler', 'Toplam', 'Evinde', 'Deplasmanda']:['Statistics', 'Total', 'Home', 'Away']
  let dataTable = [
    [Localization.locale==='tr-TR' ? 'Kazandı(%)' : 'Win(%)', team.stats.winPercentage_overall, team.stats.winPercentage_home, team.stats.winPercentage_away],
    [Localization.locale==='tr-TR' ?'Toplam Gol Ort.': 'Goal Avg.', team.stats.seasonAVG_overall, team.stats.seasonAVG_home, team.stats.seasonAVG_away],
    [Localization.locale==='tr-TR' ?'A. Gol Ort.': 'Goal Scored Avg.', team.stats.seasonScoredAVG_overall, team.stats.seasonScoredAVG_home, team.stats.seasonScoredAVG_away],
    [Localization.locale==='tr-TR' ?'Y. Gol Ort.': 'Goal Conceded Avg.', team.stats.seasonConcededAVG_overall, team.stats.seasonConcededAVG_home, team.stats.seasonConcededAVG_away],
    [Localization.locale==='tr-TR' ?'KG Var(%)': 'BTTS(%)', team.stats.seasonBTTSPercentage_overall, team.stats.seasonBTTSPercentage_home, team.stats.seasonBTTSPercentage_away],
    [Localization.locale==='tr-TR' ?'G. Yemediği(%)': 'Clean Sheet(%)', team.stats.seasonCSPercentage_overall, team.stats.seasonCSPercentage_home, team.stats.seasonCSPercentage_away],
    [Localization.locale==='tr-TR' ?'G. Atamadığı(%)': 'Failed to Score(%)', team.stats.seasonFTSPercentage_overall, team.stats.seasonFTSPercentage_home, team.stats.seasonFTSPercentage_away],
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
