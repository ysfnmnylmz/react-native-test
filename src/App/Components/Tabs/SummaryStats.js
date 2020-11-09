import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {Content, Card, CardItem, Body, Text} from 'native-base';
import {Loader} from "../Common";
import * as Localization from 'expo-localization'

const SummaryStats = ({home, away, leagueData}) => {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [isLoading])
  if (isLoading) {
    return (
      <Loader/>
    )
  } else {
    return (
      <ScrollView>
        <Content contentContainerStyle={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Card style={{width: '32%'}}>
            <CardItem header style={{backgroundColor: '#333', height: 15}}>
              <Text style={{
                fontSize: 12,
                color: 'white'
              }}>{Localization.locale === 'tr-TR' ? '0.5 Üstü' : 'Over 0.5'}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                  }}>{`${Number((home.stats.seasonOver05Percentage_overall + away.stats.seasonOver05Percentage_overall) / 2).toFixed(0)}%`}</Text>
                  <Text
                    style={{fontSize: 12}}>{`${Localization.locale === 'tr-TR' ? `Lig Ort.: ${leagueData.seasonOver05Percentage_overall}%`
                    : `League Avg.: ${leagueData.seasonOver05Percentage_overall}%`}`}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card style={{width: '32%'}}>
            <CardItem header style={{backgroundColor: '#333', height: 15}}>
              <Text style={{
                fontSize: 12,
                color: 'white'
              }}>{Localization.locale === 'tr-TR' ? '1.5 Üstü' : 'Over 1.5'}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                  }}>{`${Number((home.stats.seasonOver15Percentage_overall + away.stats.seasonOver15Percentage_overall) / 2).toFixed(0)}%`}</Text>
                  <Text
                    style={{fontSize: 12}}>{`${Localization.locale === 'tr-TR' ? `Lig Ort.: ${leagueData.seasonOver15Percentage_overall}%`
                    : `League Avg.: ${leagueData.seasonOver15Percentage_overall}%`}`}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card style={{width: '32%'}}>
            <CardItem header style={{backgroundColor: '#333', height: 15}}>
              <Text style={{
                fontSize: 12,
                color: 'white'
              }}>{Localization.locale === 'tr-TR' ? '2.5 Üstü' : 'Over 2.5'} </Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                  }}>{`${Number((home.stats.seasonOver25Percentage_overall + away.stats.seasonOver25Percentage_overall) / 2).toFixed(0)}%`}</Text>
                  <Text
                    style={{fontSize: 12}}>{`${Localization.locale === 'tr-TR' ? `Lig Ort.: ${leagueData.seasonOver25Percentage_overall}%`
                    : `League Avg.: ${leagueData.seasonOver25Percentage_overall}%`}`}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card style={{width: '32%'}}>
            <CardItem header style={{backgroundColor: '#333', height: 15}}>
              <Text style={{fontSize: 12, color: 'white'}}>{Localization.locale === 'tr-TR'?'Ort. Gol': 'Avg. Goals'}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                  }}>{`${String((parseFloat(home.stats.seasonAVG_overall) + parseFloat(away.stats.seasonAVG_overall)) / 2).substring(0, 4)}`}</Text>
                  <Text
                    style={{fontSize: 12}}>{`${Localization.locale === 'tr-TR' ? `Lig Ort.: ${leagueData.seasonAVG_overall}%`
                    : `League Avg.: ${leagueData.seasonAVG_overall}%`}`}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card style={{width: '32%'}}>
            <CardItem header style={{backgroundColor: '#333', height: 15}}>
              <Text style={{
                fontSize: 12,
                color: 'white'
              }}>{Localization.locale === 'tr-TR' ? 'Karşılıklı Gol' : 'BTTS'}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                  }}>{`${Number((home.stats.seasonBTTSPercentage_overall + away.stats.seasonBTTSPercentage_overall) / 2).toFixed(0)}%`}</Text>
                  <Text
                    style={{fontSize: 12}}>{`${Localization.locale === 'tr-TR' ? `Lig Ort.: ${leagueData.seasonBTTSPercentage}%`
                    : `League Avg.: ${leagueData.seasonBTTSPercentage}%`}`}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
        {Localization.locale === 'tr-TR' ? <Text note style={{fontSize: 7}}>*Özet istatistikler <Text
            style={{fontSize: 7, color: '#333', fontWeight: 'bold'}}>{home.name}</Text> ve <Text
            style={{fontSize: 7, color: '#333', fontWeight: 'bold'}}>{away.name}</Text> takımlarının istatistiklerinin
            karşılaştırılması sonucu çıkarılmıştır.</Text>
          :<Text note style={{fontSize: 7}}>*Summary statistics are derived from the comparison of statistics of teams <Text
            style={{fontSize: 7, color: '#333', fontWeight: 'bold'}}>{home.name}</Text> and <Text
            style={{fontSize: 7, color: '#333', fontWeight: 'bold'}}>{away.name}</Text>
          </Text>
        }

      </ScrollView>
    )
  }
}

export default SummaryStats;
