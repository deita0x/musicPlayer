import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-easy-layout-view';

const Song = ({ odd = false, length, children }) => {
  return (
    <View height-40 style={odd ? styles.odd : null}>
      <TouchableOpacity style={{ flex: 1, marginHorizontal: 25 }}>
        <View flex row centerV spread>
          <Text style={styles.text}>{children}</Text>
          <Text style={styles.text}>{length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 0.54,
  },
  odd: {
    backgroundColor: 'rgba(14,29,71,0.4)'
  }
});

export default Song;
