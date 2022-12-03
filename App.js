import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { store } from './src/store/store';
// import { ScrollView, View } from 'react-native';
// import BenefitScreen from './src/screens/BenefitScreen/BenefitScreen';
// import { benefitsArray } from './src/helpers/benefitsArray';
// import { LogIn } from './src/components/LogIn';
// import { RegisterUser } from './src/components/RegisterUser';
// import { styles } from './appStyles';
// import { BenefitDataBase } from './src/components/BenefitDatabase';
// import UserProfileScreen from './src/screens/UserProfileScreen/UserProfileScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { BenefitScreen } from './src/screens/BenefitScreen';
import { UserProfile } from './src/screens/UserProfileScreen';

export default function App() {
  // const [isStaff, setIsStaff] = useState(true);
  // const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarActiveTintColor: '#C83C45',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Benefits"
            component={BenefitScreen}
            options={{
              headerShown: false,
              tabBarActiveTintColor: '#C83C45',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="gift" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={UserProfile}
            options={{
              headerShown: false,
              tabBarActiveTintColor: '#C83C45',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={30}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
