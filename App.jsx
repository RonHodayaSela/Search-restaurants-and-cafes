// import {Text, View, Button} from 'react-native';
// function App(){
//     return(
//         <View>
//             <View>
//                 <Text style={{fontSize:30, color:'red'}}>Hi hi</Text>
//             </View>
//             <View>
//                 <Text style={{fontSize:30}}>Hi hi</Text>
//             </View>
//             <View>
//                 <Button
//                     title="press here"
//                     color = "blue"
//                     onPress={()=>console.log("press")}
//                 />
//             </View>
//         </View>
//     )
// }
// export default App;

// App.jsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import the screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
