import React, {useEffect, useState} from 'react';
import {Button, ScrollView, View} from "react-native";
import {getMatches} from '../store/actions/GetMatches'
import {connect, useStore} from "react-redux";
import {Loader, MatchCard} from "./Common";
import {getBetTypes} from "../store/actions/GetBetTypes";
import {filterMatches} from "../store/actions/FilterMatches";
import {AdMobBanner, AdMobInterstitial} from "expo-ads-admob";


const MatchList = (props) => {
    const [state, setState] = useState(false)
    const store = useStore();

    const insterstitialAdId = 'ca-app-pub-4742367558871759/2009627266'
    const bannerAdd = 'ca-app-pub-4742367558871759/4679018010'
    // const insterstitialAdId = 'ca-app-pub-3940256099942544/1033173712'
    const {matchesReducer, betTypeReducer} = store.getState()

    const _fetchAds = () => {
        AdMobInterstitial.setAdUnitID(insterstitialAdId);
        AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
        const ready = AdMobInterstitial.getIsReadyAsync();
        AdMobInterstitial.addEventListener('interstitialDidLoad',
            () => AdMobInterstitial.showAdAsync()
        );
        AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
            () => console.log('fail to load')
        );
        AdMobInterstitial.addEventListener('interstitialDidOpen',
            () => console.log('did open'))
        AdMobInterstitial.addEventListener('interstitialDidClose',
            () => console.log('did close')
        );
        AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
            () => console.log('interstitialWillLeaveApplication')
        );
    }
    const filterHandler = async (t) => {
        let newMatch;
        if(t !== 'All') {
            newMatch = await matchesReducer.initial.filter((match) => match.bet_type.name === t)
        }else{
            newMatch = await matchesReducer.initial
        }
        await _fetchAds()
        await props.filterMatches(newMatch)
    }
    const _fetchDatas = async () => {
        await props.getMatches()
        await props.getBetTypes()
        await setState(true)
        await _fetchAds()
    }
    useEffect(() => {
        matchesReducer.data || _fetchDatas()
    }, [])
    /*useEffect(()=>{
        _fetchAds()
    })*/
    if (state) {
        return (
            <View>
                <ScrollView horizontal={true} style={{flexDirection: 'row', paddingVertical: 5, height:60}}>
                    {betTypeReducer.data.map((x, i) => <Button key={String(i)} title={x.name}
                                                               onPress={() => filterHandler(x.name)}/>)}
                </ScrollView>
                <ScrollView style={{marginBottom: 50}}>
                    <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID={bannerAdd}
                        servePersonalizedAds={true}
                    />
                    {matchesReducer.data.map((m, i) => <MatchCard match={m} key={String(i)} index={i}/>)}
                </ScrollView>
            </View>
        );
    } else {
        return (<Loader/>)
    }
};

const mapStateToProps = (state) => ({state});
const mapDispatchToProps = {getMatches, getBetTypes, filterMatches};

export default connect(mapStateToProps, mapDispatchToProps)(MatchList);


const styles = {
    board: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '20%',
        marginHorizontal: 10
    },
    score: {
        fontSize: 55,
        color: '#333'
    },
    teamLogo: {
        width: 100,
        height: 100
    }
}
