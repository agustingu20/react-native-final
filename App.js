import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { store } from './src/store/store';
import { HomeScreen } from './src/screens/HomeScreen';
import { UserProfile } from './src/screens/UserProfileScreen';
import BenefitsScreen from './src/screens/BenefitsScreen/BenefitsScreen';
import SelectedBenefitScreen from './src/screens/SelectedBenefitScreen/SelectedBenefitScreen';
import RegisterUser from './src/components/RegisterUser/RegisterUser';
import LogIn from './src/components/LogIn/LogIn';

const StackComponent = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Benefits"
        component={BenefitsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectedBenefit"
        component={SelectedBenefitScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
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
            component={StackComponent}
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

<Tab.Screen
            name="Register"
            component={RegisterUser}
            options={{
              headerShown: false,
              tabBarActiveTintColor: '#C83C45',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="star"
                  color={color}
                  size={30}
                />
              ),
            }}
          />

<Tab.Screen
            name="LogIn"
            component={LogIn}
            options={{
              headerShown: false,
              tabBarActiveTintColor: '#C83C45',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="star"
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
