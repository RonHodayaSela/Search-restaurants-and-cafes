// screens/ProfileScreen.jsx

import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = ({ route }) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

export default ProfileScreen;
