import React from 'react';
import { leagues,symbol } from '../lib/constants';
import { View, Image, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Text } from 'native-base';

function SelectLeague(props) {
    const { navigation, route } = props
    return (
        <Content contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {leagues.map(league => {
                if (league.country === route.params.country) {
                    return (league.leagues.map((lig, index) =>
                        (
                            <Card style={{ width: '48%' }} key={String(index)}>
                                <TouchableOpacity onPress={() => navigation.navigate(('Home'), { id: lig.id })}>
                                    <CardItem >
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={symbol(route.params.country+'-'+lig.name)} style={{ width: 100, height: 100 }} />
                                            <Text style={{ textTransform: 'capitalize' }}>{lig.name}</Text>
                                        </View>
                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        )
                    ))
                }
            }
            )}
        </Content>
    )
};

export default SelectLeague;
