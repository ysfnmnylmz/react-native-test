import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Left, Thumbnail, Body, Image, Text, Right } from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


function TeamTable({ team, league }) {
    let headData = ['İstatistikler', 'Toplam', 'Evinde', 'Deplasmanda']
    let dataTable = [
        ['Kazandı(%)', team.stats.winPercentage_overall, team.stats.winPercentage_home, team.stats.winPercentage_away],
        ['Toplam Gol Ort.', team.stats.seasonAVG_overall, team.stats.seasonAVG_home, team.stats.seasonAVG_away],
        ['A. Gol Ort.', team.stats.seasonScoredAVG_overall, team.stats.seasonScoredAVG_home, team.stats.seasonScoredAVG_away],
        ['Y. Gol Ort.', team.stats.seasonConcededAVG_overall, team.stats.seasonConcededAVG_home, team.stats.seasonConcededAVG_away],
        ['KG Var(%)', team.stats.seasonBTTSPercentage_overall, team.stats.seasonBTTSPercentage_home, team.stats.seasonBTTSPercentage_away],
        ['G. Yemediği(%)', team.stats.seasonCSPercentage_overall, team.stats.seasonCSPercentage_home, team.stats.seasonCSPercentage_away],
        ['G. Atamadığı(%)', team.stats.seasonFTSPercentage_overall, team.stats.seasonFTSPercentage_home, team.stats.seasonFTSPercentage_away],
        ['xG', team.stats.xg_for_avg_overall, team.stats.xg_for_avg_home, team.stats.xg_for_avg_away],
        ['xGY', team.stats.xg_against_avg_overall, team.stats.xg_against_avg_home, team.stats.xg_against_avg_away]
    ];
    return (
        <ScrollView>
            <Content>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: `${team.image}` }} />
                        <Body>
                            <Text>{team.name}</Text>
                            <Text note>{`Sıralama: ${team.table_position}/${league.clubNum}`}</Text>
                            <Text note>{league.name}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Thumbnail source={{ uri: `${league.image}` }} />
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#7a7a7a' }}>
                            <Row data={headData} style={styles.HeadStyle} textStyle={styles.TableText} />
                            <Rows data={dataTable} textStyle={styles.TableText} />
                        </Table>
                    </View>
                </CardItem>
            </Content>
        </ScrollView>
    )
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
