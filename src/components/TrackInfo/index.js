import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native-easy-layout-view';

const TrackInfo = () => {
  return (
    <View flex centerH spread>
      <Text style={styles.song}>Knives out</Text>
      <Text style={styles.artist}>Radiohead</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  song: {
    color: 'white',
    fontSize: 28,
    letterSpacing: 1.08
  },
  artist: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 0.69
  }
});

export default TrackInfo;
