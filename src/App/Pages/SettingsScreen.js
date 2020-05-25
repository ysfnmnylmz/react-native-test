import React from 'react';
import { Text, View } from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base'

const SettingsScreen = (props) => (
    <Container style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Content contentContainerStyle={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text>Settings Screen</Text>
        </Content>
    </Container>
);

export default SettingsScreen;
