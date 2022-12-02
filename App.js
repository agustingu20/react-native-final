// import { Provider } from 'react-redux';
// import { ScrollView, View } from 'react-native';
// import { store } from './src/store/store';
// import BenefitScreen from './src/screens/BenefitScreen/BenefitScreen';
// import { benefitsArray } from './src/helpers/benefitsArray';
// import { LogIn } from './src/components/LogIn';
// import { RegisterUser } from './src/components/RegisterUser';
// import { styles } from './appStyles';
// import { BenefitDataBase } from './src/components/BenefitDatabase';
// import UserProfileScreen from './src/screens/UserProfileScreen/UserProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/HomeScreen';
import { BenefitScreen } from './src/screens/BenefitScreen';
import { UserProfile } from './src/screens/UserProfileScreen';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  // const [isStaff, setIsStaff] = useState(true);
  // const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home"
      component={HomeScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Benefits"
      component={BenefitScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="gift" color={color} size={size} />
        ),
       }} />
      <Tab.Screen name="Profile"
      component={UserProfile}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
       }} />

    </Tab.Navigator>

      </NavigationContainer>
  );
}


{/* <ScrollView>
  <View>
    <HomeScreen isStaff={isStaff} />
</View>
</ScrollView> 
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