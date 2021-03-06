import React from 'react';
import { ScrollView, View } from 'react-native';
import { Content, Card, CardItem, Body, Text } from 'native-base';
import * as Localization from "expo-localization";

const MatchPotential = ({ match })=> {
    return (
        <ScrollView>
            <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Card style={{ width: '32%' }}>
                    <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? '0.5 Üstü' : 'Over 0.5'}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.fontStyle]}>{`${match.o05_potential}%`}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{ width: '32%' }}>
                    <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? '1.5 Üstü' : 'Over 1.5'}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.fontStyle]}>{`${match.o15_potential}%`}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{ width: '32%' }}>
                    <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? '2.5 Üstü' : 'Over 2.5'}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.fontStyle]}>{`${match.o25_potential}%`}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{ width: '32%' }}>
                    <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? 'İY 0.5 Üstü' : 'FH Over 0.5'}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.fontStyle]}>{`${match.o05HT_potential}%`}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{ width: '32%' }}>
                    <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? 'İY 1.5 Üstü' : 'FH Over 1.5'}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.fontStyle]}>{`${match.o15HT_potential}%`}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{ width: '32%' }}>
                <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                    <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? 'Karşılıklı Gol' : 'BTTS'}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[styles.fontStyle]}>{`${match.btts_potential}%`}</Text>
                        </View>
                    </Body>
                </CardItem>
            </Card>
                <Card style={{ width: '48%' }}>
                    <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? 'Korner Beklentisi' : 'Corners Potential'}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.fontStyle]}>{`${match.corners_potential}`}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{ width: '48%' }}>
                    <CardItem header style={{ backgroundColor: '#333', height: 15 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>{Localization.locale === 'tr-TR' ? 'Kart Beklentisi' : 'Cards Potential'}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.fontStyle]}>{`${match.cards_potential}`}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </ScrollView>
    );
}
const styles = {
    fontStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    fontSuccess: {
        color: 'green'
    },
    fontMaybe: {
        color: 'yellow'
    },
    fontDanger: {
        color: 'green'
    },
}
export default MatchPotential;
