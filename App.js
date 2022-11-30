import { Provider } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { store } from './src/store/store';
// import BenefitScreen from './src/screens/BenefitScreen/BenefitScreen';
// import { benefitsArray } from './src/helpers/benefitsArray';
// import { LogIn } from './src/components/LogIn';
// import { RegisterUser } from './src/components/RegisterUser';
// import { styles } from './appStyles';
// import { BenefitDataBase } from './src/components/BenefitDatabase';
// import UserProfileScreen from './src/screens/UserProfileScreen/UserProfileScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useState } from 'react';

export default function App() {
  // const [isStaff, setIsStaff] = useState(true);
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Provider store={store}> */}
          <Stack.Screen name="Home" component={HomeScreen} store={store}/>
        {/* </Provider> */}
      </Stack.Navigator>
      </NavigationContainer>
  );
}

{/* <ScrollView>
  <View>
    <HomeScreen isStaff={isStaff} />
</View>
</ScrollView> */}
{/* <View style={styles.container}>
  <BenefitScreen {...benefitsArray} />
</View> */}
{/* <View>
  <LogIn /> 
  <RegisterUser />
</View> */}
{/* <View>
  <UserProfileScreen />
</View> */}
{/* <View>
  <BenefitDataBase />
</View> */}