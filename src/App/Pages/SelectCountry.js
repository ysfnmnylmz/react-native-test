import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { countries, symbol } from '../lib/constants';
import { Content, Card, CardItem, Text } from 'native-base';
import {AnnouncementsAlert} from "../Components/Common";

function SelectCountry(props) {
    return (
        <Content contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {countries.map((country, index) =>
                (
                    <Card style={{ width: '48%' }} key={String(index)}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('SelectLeague',{country})}>
                            <CardItem >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={symbol(country)} style={{ width: 100, height: 100 }} />
                                    <Text style={{ textTransform: 'capitalize' }}>{country}</Text>
                                </View>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                )
            )}
        </Content>
    )
};

export default SelectCountry;
