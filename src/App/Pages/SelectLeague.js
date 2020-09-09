import React,{useState, useEffect} from 'react';
import { AdMobInterstitial, AdMobBanner } from 'expo-ads-admob';
import { leagues,symbol } from '../lib/constants';
import { View, Image, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Text } from 'native-base';

function SelectLeague(props) {
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
            {leagues.map(league => {
                if (league.country === route.params.country) {
                    return (league.leagues.map((lig, index) =>
                        (
                            <Card style={{ width: '48%' }} key={String(index)}>
                                <TouchableOpacity onPress={() => navigation.navigate(('Home'), { id: lig.id })}>
                                    <CardItem >
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={symbol(route.params.country+'-'+lig.name)} style={{ width: 100, height: 100 }} />
                                            <Text style={{ textTransform: 'capitalize' }}>{lig.name}</Text>
                                        </View>
                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        )
                    ))
                }
            }
            )}
        </Content>
    )
};

export default SelectLeague;
