import { Provider } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { store } from './src/store/store';
import CarouselCard from './src/components/CarouselCard/CarouselCard';
import BenefitScreen from './src/screens/BenefitScreen/BenefitScreen';
import { benefitsArray } from './src/helpers/benefitsArray';
import { LogIn } from './src/components/LogIn';
// import { RegisterUser } from './src/components/RegisterUser';
import { styles } from './appStyles';
import UserProfileScreen from './src/screens/UserProfileScreen/UserProfileScreen';
import OutstandingBenefit from './src/components/OustandingBenefit/OutstandingBenefit';

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView>
        <View>
          <OutstandingBenefit />
        </View>
        <View style={styles.container}>
          <CarouselCard />
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
