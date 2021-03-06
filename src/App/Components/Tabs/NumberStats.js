import React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import * as Localization from 'expo-localization'

const NumberStats = ({ team, match, styles }) => {
    return (
        <ScrollView style={{ borderWidth: 1, borderColor: '#7a7a7a', borderRadius: 2,paddingLeft:10, margin: 5 }}>
          {Localization.locale === 'tr-TR' ?
            <>
            <Image style={{marginLeft:'35%', width: 50, height: 50}} source={{ uri: `${team.image}` }} />
            <Text style={{marginLeft:'20%'}}>{team.name}</Text>
            <Text style={statsStyles.Text}>{`Attığı Gol: ${team.stats.seasonGoals_overall}`}</Text>
            <Text style={statsStyles.Text}>{`Yediği Gol: ${team.stats.seasonConceded_overall}`}</Text>
            <Text style={statsStyles.Text}>{`Kazandığı Maç Sayısı: ${team.stats.seasonWinsNum_overall}`}</Text>
            <Text style={statsStyles.Text}>{`Berabere Biten Maç Sayısı: ${team.stats.seasonDrawsNum_overall}`}</Text>
            <Text style={statsStyles.Text}>{`Kaybettiği Maç Sayısı: ${team.stats.seasonLossesNum_overall}`}</Text>
            <Text style={statsStyles.Text}>{`Gol Yemediği Maç Sayısı: ${team.stats.seasonCS_overall}`}</Text>
            <Text style={statsStyles.Text}>{`Gol Atamadığı Maç Sayısı: ${team.stats.seasonFTS_overall}`}</Text>
            <Text style={statsStyles.Text}>{`KG Olan Maç Sayısı: ${team.stats.seasonBTTS_overall}`}</Text>
            <Text style={statsStyles.Text}>{`İY Önde Maç Sayısı: ${team.stats.leadingAtHT_overall}`}</Text>
            <Text style={statsStyles.Text}>{`İY Berabere Maç Sayısı: ${team.stats.drawingAtHT_overall}`}</Text>
            <Text style={statsStyles.Text}>{`İY Geride Maç Sayısı: ${team.stats.trailingAtHT_overall}`}</Text>
            <Text style={statsStyles.Text}>{`İY Gol Yemediği Maç Sayısı: ${team.stats.seasonCSHT_overall}`}</Text>
            <Text style={statsStyles.Text}>{`İY Gol Atamadığı Maç Sayısı: ${team.stats.seasonFTS_overall}`}</Text>
            <Text style={statsStyles.Text}>{`İY Attığı Ort. Gol Sayısı: ${team.stats.scoredAVGHT_overall}`}</Text>
            <Text style={statsStyles.Text}>{`İY Yediği Ort. Gol Sayısı: ${team.stats.concededAVGHT_overall}`}</Text>
            <Text style={statsStyles.Text}>{`0-15 Dk arası A.Gol:${team.stats.goals_scored_min_0_to_15} Y.Gol ${team.stats.goals_conceded_min_0_to_15}`}</Text>
            <Text style={statsStyles.Text}>{`16-30 Dk arası A.Gol:${team.stats.goals_scored_min_16_to_30} Y.Gol ${team.stats.goals_conceded_min_16_to_30}`}</Text>
            <Text style={statsStyles.Text}>{`31-45 Dk arası A.Gol:${team.stats.goals_scored_min_31_to_45} Y.Gol ${team.stats.goals_conceded_min_31_to_45}`}</Text>
            <Text style={statsStyles.Text}>{`46-60 Dk arası A.Gol:${team.stats.goals_scored_min_46_to_60} Y.Gol ${team.stats.goals_conceded_min_46_to_60}`}</Text>
            <Text style={statsStyles.Text}>{`61-75 Dk arası A.Gol:${team.stats.goals_scored_min_61_to_75} Y.Gol ${team.stats.goals_conceded_min_61_to_75}`}</Text>
            <Text style={statsStyles.Text}>{`76-90 Dk arası A.Gol:${team.stats.goals_scored_min_76_to_90} Y.Gol ${team.stats.goals_conceded_min_76_to_90}`}</Text>
            </>
            :
            <>
              <Image style={{marginLeft:'35%', width: 50, height: 50}} source={{ uri: `${team.image}` }} />
              <Text style={{marginLeft:'20%'}}>{team.name}</Text>
              <Text style={statsStyles.Text}>{`Goal Scored: ${team.stats.seasonGoals_overall}`}</Text>
              <Text style={statsStyles.Text}>{`Goal Conceded: ${team.stats.seasonConceded_overall}`}</Text>
              <Text style={statsStyles.Text}>{`Win: ${team.stats.seasonWinsNum_overall}`}</Text>
              <Text style={statsStyles.Text}>{`Draw: ${team.stats.seasonDrawsNum_overall}`}</Text>
              <Text style={statsStyles.Text}>{`Lost: ${team.stats.seasonLossesNum_overall}`}</Text>
              <Text style={statsStyles.Text}>{`Clean Sheet: ${team.stats.seasonCS_overall}`}</Text>
              <Text style={statsStyles.Text}>{`Failed to Score: ${team.stats.seasonFTS_overall}`}</Text>
              <Text style={statsStyles.Text}>{`BTTS Matches: ${team.stats.seasonBTTS_overall}`}</Text>
              <Text style={statsStyles.Text}>{`First Half Win: ${team.stats.leadingAtHT_overall}`}</Text>
              <Text style={statsStyles.Text}>{`First Half Draw: ${team.stats.drawingAtHT_overall}`}</Text>
              <Text style={statsStyles.Text}>{`First Half Lost: ${team.stats.trailingAtHT_overall}`}</Text>
              <Text style={statsStyles.Text}>{`First Half CS: ${team.stats.seasonCSHT_overall}`}</Text>
              <Text style={statsStyles.Text}>{`First Half FTS: ${team.stats.seasonFTS_overall}`}</Text>
              <Text style={statsStyles.Text}>{`First Half Avg. Scored: ${team.stats.scoredAVGHT_overall}`}</Text>
              <Text style={statsStyles.Text}>{`First Half Avg. Conceded: ${team.stats.concededAVGHT_overall}`}</Text>
              <Text style={statsStyles.Text}>{`0-15 Min. Scored:${team.stats.goals_scored_min_0_to_15} Conceded ${team.stats.goals_conceded_min_0_to_15}`}</Text>
              <Text style={statsStyles.Text}>{`16-30 Min. Scored:${team.stats.goals_scored_min_16_to_30} Conceded ${team.stats.goals_conceded_min_16_to_30}`}</Text>
              <Text style={statsStyles.Text}>{`31-45 Min. Scored:${team.stats.goals_scored_min_31_to_45} Conceded ${team.stats.goals_conceded_min_31_to_45}`}</Text>
              <Text style={statsStyles.Text}>{`46-60 Min. Scored:${team.stats.goals_scored_min_46_to_60} Conceded ${team.stats.goals_conceded_min_46_to_60}`}</Text>
              <Text style={statsStyles.Text}>{`61-75 Min. Scored:${team.stats.goals_scored_min_61_to_75} Conceded ${team.stats.goals_conceded_min_61_to_75}`}</Text>
              <Text style={statsStyles.Text}>{`76-90 Min. Scored:${team.stats.goals_scored_min_76_to_90} Conceded ${team.stats.goals_conceded_min_76_to_90}`}</Text>
            </>
          }
        </ScrollView>
    );
}

const statsStyles = {
    Text: {
        fontSize: 11,
    }
}

export default NumberStats;
