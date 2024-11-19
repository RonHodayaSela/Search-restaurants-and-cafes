// screens/HomeScreen.jsx

import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup', { name: 'Jane' })}
      />
      
    </View>
  );
};

export default HomeScreen;
