import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { store } from './src/store/store';
import { HomeScreen } from './src/screens/HomeScreen';
import BenefitsScreen from './src/screens/BenefitsScreen/BenefitsScreen';
import SelectedBenefitScreen from './src/screens/SelectedBenefitScreen/SelectedBenefitScreen';
import UserProfileScreen from './src/screens/UserProfileScreen/UserProfileScreen';
import LogInScreen from './src/screens/LogInScreen.js/LogInScreen';
import RegisterUser from './src/screens/RegisterUserScreen/RegisterUser';
import ResetPswScreen from './src/screens/ResetPswScreen/ResetPswScreen';

const StackComponent = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='BenefitsList'
        component={BenefitsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='SelectedBenefit'
        component={SelectedBenefitScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const StackScreenLog = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
      name='logIn'
      options={{
        headerShown: false,
      }}
      component={LogInScreen}
      />
      <Stack.Screen
      name='Cambiar Contraseña'
      options={{
        headerShown: false,
      }}
      component={ResetPswScreen}
      />
    </Stack.Navigator>
  );
};

export function App() {
  const Tab = createBottomTabNavigator();
  const { token } = useSelector((state) => state);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {token.value && <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#C83C45',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={30} />
            ),
          }}
        />}

        {token.value && <Tab.Screen
          name='Benefits'
          component={StackComponent}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#C83C45',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='gift' color={color} size={size} />
            ),
          }}
        />}

        {!token.value && <Tab.Screen
          name='LogIn'
          component={StackScreenLog}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#C83C45',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='login' color={color} size={30} />
            ),
          }}
        />}

        {token.value ? (
          <Tab.Screen
            name='Profile'
            component={UserProfileScreen}
            options={{
              headerShown: false,
              tabBarActiveTintColor: '#C83C45',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name='account'
                  color={color}
                  size={30}
                />
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name='Register'
            component={RegisterUser}
            options={{
              headerShown: false,
              tabBarActiveTintColor: '#C83C45',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name='file-sign'
                  color={color}
                  size={30}
                />
              ),
            }}
          />
        )}
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
