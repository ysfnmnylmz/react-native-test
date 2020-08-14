import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container } from 'native-base';

const LeagueHeader = (props) => (
<Text>{props.data ? (props.data.name_tr ? props.data.name_tr : props.data.english_name): 'Data Yüklenemedi.'}</Text>
);

export default LeagueHeader;
