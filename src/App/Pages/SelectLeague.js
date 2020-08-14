import React from 'react';
import { Text, View,Button } from 'react-native';

function SelectLeague({ params, navigation }) {
    return (
        <View>
            <Button title={'Premier League'} onPress={() => navigation.navigate('Home')} />
        </View>
    )
};

export default SelectLeague;
