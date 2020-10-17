import React,{useState, useEffect} from 'react';
import { AdMobInterstitial, AdMobBanner } from 'expo-ads-admob';
import { View, Image, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Text } from 'native-base';

const SelectLeague = (props) => {
    const { navigation, route } = props
    const [adReady, setAdready] = useState(false);
    const insterstitialAdId = 'ca-app-pub-4742367558871759/2009627266'
    useEffect(()=>{
        AdMobInterstitial.setAdUnitID(insterstitialAdId);
        AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        const ready = AdMobInterstitial.getIsReadyAsync();
        AdMobInterstitial.addEventListener('interstitialDidLoad',
            () => AdMobInterstitial.showAdAsync()
        );

        AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
            () => setAdready(false)
        );

        AdMobInterstitial.addEventListener('interstitialDidOpen',
            () => setAdready(true)
        );
        AdMobInterstitial.addEventListener('interstitialDidClose',
            () => setAdready(true)
        );
        AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
            () => console.log('interstitialWillLeaveApplication')
        );
    },[])
    return (
        <Content contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {route.params.item.map((league) => (
              <Card style={{ width: '48%' }} key={String(league.id)}>
                  <TouchableOpacity onPress={() => navigation.navigate(('Home'), { id: league.code })}>
                      <CardItem >
                          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Image source={{uri:league.image}} style={{ width: 100, height: 100 }} />
                              <Text style={{ textTransform: 'capitalize' }}>{league.name}</Text>
                          </View>
                      </CardItem>
                  </TouchableOpacity>
              </Card>
            ))}
        </Content>
    )
};

export default SelectLeague;
