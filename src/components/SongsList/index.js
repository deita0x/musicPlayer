import React from 'react';
import { ScrollView } from 'react-native';

import Song from './Song';

const SongsList = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Song length={4.14}>1. Knives Out</Song>
      <Song odd length={2.14}>2. Karma Police</Song>
      <Song length={3.01}>3. Fake Plastic Trees</Song>
      <Song odd length={3.14}>4. No Surprises</Song>

      <Song length={4.14}>1. Knives Out</Song>
      <Song odd length={2.14}>2. Karma Police</Song>
      <Song length={3.01}>3. Fake Plastic Trees</Song>
      <Song odd length={3.14}>4. No Surprises</Song>

      <Song length={4.14}>1. Knives Out</Song>
      <Song odd length={2.14}>2. Karma Police</Song>
      <Song length={3.01}>3. Fake Plastic Trees</Song>
      <Song odd length={3.14}>4. No Surprises</Song>
    </ScrollView>
  );
};

export default SongsList;
