import React from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("./loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
};


const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 90
  }
});
export default Loader;
