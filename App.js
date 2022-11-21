import { Provider } from 'react-redux';
import { View } from 'react-native';
import { store } from './src/store/store';
import { styles } from './appStyles';
import CarouselCard from './src/components/CarouselCard/CarouselCard';
import BenefitScreen from './src/screens/BenefitScreen/BenefitScreen';
import { benefitsArray } from './src/helpers/benefitsArray';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CarouselCard />
        <BenefitScreen {...benefitsArray} />
      </View>
    </Provider>
  );
}
