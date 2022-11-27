import { Provider } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { store } from './src/store/store';
import BenefitScreen from './src/screens/BenefitScreen/BenefitScreen';
import { benefitsArray } from './src/helpers/benefitsArray';
import { LogIn } from './src/components/LogIn';
// import { RegisterUser } from './src/components/RegisterUser';
import { styles } from './appStyles';
import UserProfileScreen from './src/screens/UserProfileScreen/UserProfileScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { useState } from 'react';

export default function App() {
  const [isStaff, setIsStaff] = useState(true);

  return (
    <Provider store={store}>
      <ScrollView>
        <View>
          <HomeScreen isStaff={isStaff}/>
        </View>
        <View style={styles.container}>
          <BenefitScreen {...benefitsArray} />
        </View>
        <View>
          <LogIn />
          {/* <RegisterUser /> */}
        </View>
        <View>
          <UserProfileScreen />
        </View>
      </ScrollView>
    </Provider>
  );
}
