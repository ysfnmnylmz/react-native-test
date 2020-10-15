import React from 'react';
import { Alert } from 'react-native';

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
    return (<>{data && alert(data[0])}</>);
};

export default AnnouncementsAlert;
