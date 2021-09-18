import {Body, Card, CardItem} from "native-base";
import {Image, Text, View} from "react-native";
import React from "react";
import {AdMobBanner} from "expo-ads-admob";

const MatchCard = ({match, index}) => {
    const bannerAdd = 'ca-app-pub-4742367558871759/4679018010'
    return (
        <Card>
            <CardItem style={[styles.card, {borderColor: `${match.bet_type.color ?match.bet_type.color: 'black'}`}]}>
                <View style={[styles.column]}>
                    <Image style={[styles.image]}
                           source={{uri: `http://85.95.240.192/media/${match.bet_type.slug}.png`}}/>
                    <View style={[styles.matchTitle]}>
                        <Body style={[styles.matchTitle.Body]}>
                            <Text style={[styles.matchTitle.Body.Name]}>{match.name ? match.name : '--'}</Text>
                        </Body>
                    </View>
                    <View style={[styles.row]}>
                        <View style={[styles.row]}>
                            <Body>
                                <Text style={[styles.matchDetail.stat]}>{match.type ? match.type : '--'}</Text>
                            </Body>
                        </View>
                        <View style={[styles.row]}>
                            <Body>
                                <Text style={[styles.matchDetail.stat, {fontWeight: 'bold'}]}>{match.bet_type.slug !== 'offside' ? match.bet_type.percent_title : '--'}</Text>
                                <Text style={[styles.matchDetail.stat, {fontWeight: 'bold'}, {color: `${match.bet_type.color ?match.bet_type.color: 'red'}`}]}>{match.bet_type.slug !== 'offside' ? match.percent : '--'}</Text>
                            </Body>
                        </View>
                        <View style={[styles.row]}>
                            <Body>
                                <Text style={[styles.matchDetail.stat, {fontWeight: 'bold'}]}>{match.bet_type.slug !== 'offside' ? (match.stat ? match.bet_type.display_name : '--') : match.bet_type.percent_title}</Text>
                                <Text style={[styles.matchDetail.stat, {fontWeight: 'bold'}, {color: `${match.bet_type.color ?match.bet_type.color: 'red'}`}]}>{match.bet_type.slug !== 'offside' ? (match.stat ? match.stat : '--') : match.percent}</Text>
                            </Body>
                        </View>
                        <View style={[styles.row]}>
                            <Body>
                                <Text style={[styles.matchDetail.stat, {fontWeight: 'bold'}]}>{'Match Date'}</Text>
                                <Text style={[styles.matchDetail.stat]}>{match.formatted_date ? match.formatted_date : '--'}</Text>
                            </Body>
                        </View>
                    </View>
                </View>
            </CardItem>
        </Card>
    )
}
const styles = {
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        borderLeftWidth: 10,
        borderStyle: 'solid',
    },
    matchTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        Body: {
            alignItems: 'center',
            paddingVertical: 5,
            Name: {
                fontSize: 12,
                textAlign: 'center'
            }
        }
    },
    matchDetail: {
        stat: {
            fontSize: 12,
            textAlign: 'center'
        }
    },
    image: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        left: 5
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    column: {
        flex: 1,
        flexDirection: 'column'
    }
}
export default MatchCard
