import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Content, Card, CardItem, Body, Text } from 'native-base';

function SummaryStats({ home, away, leagueData }) {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    }, [isLoading])
    if (isLoading) {
        return (
            <View>
                <Text>Lütfen Bekleyiniz...</Text>
            </View>
        )
    } else {
        return (
            <ScrollView>
                <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Card style={{ width: '32%' }}>
                        <CardItem header style={{ backgroundColor: '#333', height:15 }}>
                            <Text style={{ fontSize: 12, color: 'white' }}>0.5 Üstü</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight:'bold' }}>{`${String((home.stats.seasonOver05Percentage_overall + away.stats.seasonOver05Percentage_overall)/2).substring(0,2)}%`}</Text>
                                    <Text style={{ fontSize: 12 }}>{`League: ${leagueData.seasonOver05Percentage_overall}%`}</Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ width: '32%' }}>
                        <CardItem header style={{ backgroundColor: '#333', height:15 }}>
                            <Text style={{ fontSize: 12, color: 'white' }}>1.5 Üstü</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight:'bold' }}>{`${String((home.stats.seasonOver15Percentage_overall + away.stats.seasonOver15Percentage_overall)/2).substring(0,2)}%`}</Text>
                                    <Text style={{ fontSize: 12 }}>{`League: ${leagueData.seasonOver15Percentage_overall}%`}</Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ width: '32%' }}>
                        <CardItem header style={{ backgroundColor: '#333', height:15 }}>
                            <Text style={{ fontSize: 12, color: 'white' }}>2.5 Üstü</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight:'bold' }}>{`${String((home.stats.seasonOver25Percentage_overall + away.stats.seasonOver25Percentage_overall)/2).substring(0,2)}%`}</Text>
                                    <Text style={{ fontSize: 12 }}>{`League: ${leagueData.seasonOver25Percentage_overall}%`}</Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ width: '32%' }}>
                        <CardItem header style={{ backgroundColor: '#333', height:15 }}>
                            <Text style={{ fontSize: 12, color: 'white' }}>Ort. Gol</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight:'bold' }}>{`${String((parseFloat(home.stats.seasonAVG_overall) + parseFloat(away.stats.seasonAVG_overall))/2).substring(0,4)}`}</Text>
                                    <Text style={{ fontSize: 12 }}>{`League: ${leagueData.seasonAVG_overall}`}</Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ width: '32%' }}>
                        <CardItem header style={{ backgroundColor: '#333', height:15 }}>
                            <Text style={{ fontSize: 12, color: 'white' }}>Karşılıklı Gol</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight:'bold' }}>{`${String((home.stats.seasonBTTSPercentage_overall + away.stats.seasonBTTSPercentage_overall)/2).substring(0,2)}%`}</Text>
                                    <Text style={{ fontSize: 12 }}>{`League: ${leagueData.seasonBTTSPercentage}%`}</Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Text note style={{fontSize:7}}>*Özet istatistikler <Text style={{fontSize:7,color:'#333', fontWeight:'bold'}}>{home.name}</Text> ve <Text style={{fontSize:7,color:'#333', fontWeight:'bold'}}>{away.name}</Text> takımlarının istatistiklerinin karşılaştırılması sonucu çıkarılmıştır.</Text>
            </ScrollView>
        )
    }
}

export default SummaryStats;
