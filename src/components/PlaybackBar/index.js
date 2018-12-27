import React from 'react';
import Slider from "react-native-slider";
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native-easy-layout-view';

const PlaybackBar = () => {
  return (
    <View flex spread>
      <Slider
        style={{ height: 8 }}
        minimumTrackTintColor='white'
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
      />

      <View row spread>
      <Text style={styles.text}>0:35</Text>
      <Text style={styles.text}>2:30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 10,
    letterSpacing: 0.38,
  },
  trackStyle: {
    backgroundColor: '#c3c3c3',
    height: 1
  },
  thumbStyle: {
    backgroundColor: 'white',
    height: 7,
    width: 7
  },
});

export default PlaybackBar;
