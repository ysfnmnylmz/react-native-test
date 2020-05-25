import React, {useEffect, useState} from 'react';
import { View,TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Left, Text, Thumbnail } from 'native-base'
import Axios from 'axios';



function HomeScreen(props){
    const [data, setData] = useState({});
    useEffect(() =>{
        async function getTest() {
            try {
                const response = await Axios('https://api.footystats.org/league-season?key=test85g57&season_id=2012');
                setData(response)
            } catch (error){
                console.log(error)
            }
        }
        getTest();
    }, [])
    return(
        <Container style={{flex: 1, alignItems:'stretch'}}>
            <Content contentContainerStyle={{alignItems:'center',justifyContent:'center'}}>
                <Image style={{width:100, height:100}} source={{uri: `${data.data.data.image}`}}/>
            </Content>
        </Container>
)};

export default HomeScreen;
