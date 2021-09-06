import {Body, Card, CardItem} from "native-base";
import {Image, Text, View} from "react-native";
import React from "react";
import {hexToRgb} from "../../lib/helpers";

const percent = (p) => {
    if (p.length > 3) {
        let n = Number(p.substring(0, 3))
        return n / 100
    } else if (p.length === 3) {
        let n = Number(p.substring(0, 2))
        return n / 100
    } else {
        let n = Number(p.substring(0, 1))
        return n / 100
    }
}
const MatchCard = ({match}) => {
    return (
        <Card>
            <CardItem style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: `rgba(${hexToRgb(match.bet_type.color).r},${hexToRgb(match.bet_type.color).g},${hexToRgb(match.bet_type.color).b},${percent(match.percent)})`
            }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image style={{width: 30, height: 30}}
                           source={{uri: `http://192.168.43.194:7362/media/scoreboard.png`}}/>
                    <Body>
                        <Text style={{fontSize: 12, textAlign: 'center'}}>{match.formatted_date}</Text>
                    </Body>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 12}}>{match.name}</Text></View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/*<Text note style={{fontSize: 14, marginRight: 10}}></Text>*/}
                        <Text note style={{fontSize: 14}}>{match.type}</Text>
                        {/*<Text note style={{fontSize: 14, marginLeft: 10}}></Text>*/}
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Body>
                        <Text style={{fontSize: 12, textAlign: 'center'}}>{match.percent}</Text>
                    </Body>
                </View>
            </CardItem>
        </Card>
    )
}

export default MatchCard
