import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {countries, symbol} from '../lib/constants';
import {Content, Card, CardItem, Text} from 'native-base';
import {AnnouncementsAlert, Loader} from "../Components/Common";
import {getCountries} from "../store/actions/GetCountryList";
import {connect, useStore} from "react-redux";

function SelectCountry(props) {
  const store = useStore();
  const {countryListReducer} = store.getState()
  useEffect(() => {
    props.getCountries()
  }, [])
  return (
    <>
      {
        !countryListReducer.data ? <Loader/> :
        <Content contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {countryListReducer.data.map((item) => (
            <Card style={{width: '48%'}} key={String(item.id)}>
              <TouchableOpacity onPress={() => props.navigation.navigate('SelectLeague', {item: item.leagues})}>
                <CardItem>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={item.image} style={{width: 100, height: 100}}/>
                    <Text style={{textTransform: 'capitalize'}}>{item.country}</Text>
                  </View>
                </CardItem>
              </TouchableOpacity>
            </Card>
          ))}
        </Content>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  countryListReducer: state.countryListReducer
});

const mapDispatchToProps = {getCountries};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCountry);
