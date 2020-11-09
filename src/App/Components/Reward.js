import React, {useEffect, useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from "react-native";
import {AdMobRewarded} from "expo-ads-admob";
import scoreboard from "../../../assets/icons/scoreboard.png";
import * as Localization from "expo-localization";

const Reward = (props) => {
  const [reward, setReward] = useState(false)
  const [closed, setClosed] = useState(false)
  const {match} = props.route.params
  const showRewarded = async () => {
    await AdMobRewarded.setAdUnitID('ca-app-pub-4742367558871759/4723104251'); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync({servePersonalizedAds: true});
    await AdMobRewarded.showAdAsync();
  }
  const rewardedResult = () => (
    <>
      <View style={styles.board}>
        <Image style={styles.teamLogo}
               source={{uri: `https://cdn.footystats.org/img/${match.home_image}`}}/>
        <Text style={styles.score}>{match.score.score}</Text>
        <Image style={styles.teamLogo}
               source={{uri: `https://cdn.footystats.org/img/${match.away_image}`}}/>
      </View>
      <View style={styles.board}>
        <Text
          style={{textAlign: 'center'}}>{Localization.locale === 'tr-TR' ?`${match.home_name} ve ${match.away_name} arasında yapılacak olan maç için skor tahminimizdir.`: `It is our score prediction for the match between ${match.home_name} and ${match.away_name}.`}</Text>
      </View>
    </>)
  const isNotReward = () =>
    (<>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>
          {Localization.locale === 'tr-TR' ?
            'Skor tahminimizi görebilmek için yan tarafta bulunan alana tıklayarak çıkan reklamı izlemeniz gerekmektedir.' :
            'In order to see our score estimation, you need to watch the ad that appears by clicking the field on the side.'}
        </Text>
        <View style={{
          borderBottomLeftRadius: 50,
          borderTopLeftRadius: 50,
          alignSelf: 'flex-end',
          height: 75,
          width: 80,
          borderWidth: 1,
          borderColor: '#333',
          backgroundColor: 'rgba(0,0,0,0)',
        }}>
          <TouchableOpacity
            onPress={() => showRewarded()}
            style={{
              borderRadius: 50,
              position: 'absolute',
              top: 0,
              alignSelf: 'flex-end',
              height: 70,
              width: 70,
              left: 0,
              backgroundColor: 'rgba(255,255,255,1)'
            }}
          >
            <Image source={scoreboard} style={{
              padding: 1, borderWidth: 1,
              borderColor: '#333', borderRadius: 100, width: 73, height: 73
            }}/>
          </TouchableOpacity>
        </View>
      </View>
    </>)

  useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () =>
      setReward(true)
    );
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", () =>
      showRewarded()
    );
    AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () =>
      console.log("rewardedVideoDidFailToLoad")
    );
    AdMobRewarded.addEventListener("rewardedVideoDidOpen", () =>
      console.log("rewardedVideoDidOpen")
    );
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () =>
      setClosed(true)
    );
    AdMobRewarded.addEventListener("rewardedVideoWillLeaveApplication", () =>
      console.log("rewardedVideoWillLeaveApplication")
    );
    !closed && showRewarded()
  }, [])
  return (
    <View style={{flex:1, alignItems:'center'}}>
      {reward && rewardedResult()}
      {(!reward && closed) && isNotReward()}
    </View>
  );
};

export default Reward;


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
