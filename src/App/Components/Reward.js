import React, {useEffect, useState} from 'react';
import {Button, Text, View} from "react-native";
import {AdMobRewarded} from "expo-ads-admob";

const Reward = (props) => {
  const [reward, setReward] = useState(false)
  const [score, setScore] = useState(true)
  const showRewarded=async ()=> {
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }
  const rewardedResult =()=> {
    props.navigation.navigate('TodayMatches')
  }
  useEffect(()=>
  {
    if(score) {
      AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () =>
        setReward(true)
      );
      AdMobRewarded.addEventListener("rewardedVideoDidLoad", () =>
        console.log("rewardedVideoDidLoad")
      );
      AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () =>
        console.log("rewardedVideoDidFailToLoad")
      );
      AdMobRewarded.addEventListener("rewardedVideoDidOpen", () =>
        console.log("rewardedVideoDidOpen")
      );
      AdMobRewarded.addEventListener("rewardedVideoDidClose", () =>
        console.log("rewardedVideoDidClose")
      );
      AdMobRewarded.addEventListener("rewardedVideoWillLeaveApplication", () =>
        console.log("rewardedVideoWillLeaveApplication")
      );
    }
  })
  return (
    <View>
      <Button title="Rewarded"
              onPress={showRewarded}/>
      {reward && rewardedResult()}
    </View>
  );
};

export default Reward;
