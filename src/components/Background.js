import React from 'react';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo';
import { View } from 'react-native-easy-layout-view';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#19163B', '#264188']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.0, 0.99]}
      style={{ flex: 1 }}
    >
      <View flex style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
        {children}
      </View>
    </LinearGradient>
  );
};

export default Background;
