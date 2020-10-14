import React, {useEffect} from 'react';
import { Text, View, Image, Alert } from 'react-native';
import {Container} from 'native-base';
import {getAnnouncements} from "../../store/actions";

const AnnouncementsAlert = ({data}) => {
    const alert = (data) =>
        Alert.alert(
            data.title,
            data.description,
            [
                { text: "Tamam", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    return (<>{alert(data[0])}</>);
};

export default AnnouncementsAlert;
