import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container } from 'native-base';

const LeagueHeader = ({data}) => (
<Text>{data.name_tr ? data.name_tr : data.english_name}</Text>
);

export default LeagueHeader;
