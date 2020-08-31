import React from 'react';
import { View, Image } from 'react-native';
import { leagues } from '../lib/constants';
import { Content, Card, CardItem, Body, Text, Right } from 'native-base';

function SelectCountry() {
    return(
        <Content>
            {console.log(leagues)}
            {leagues.map((league, index) => 
                (
                    <Card>
                        <CardItem>
                            <View>
                                {/* <Image source={flag} style={{width:50, height:50}}/> */}
                                <Text>{league}</Text>
                            </View>
                        </CardItem>
                    </Card>
                )
            )}
        </Content>
    )
};

export default SelectCountry;
