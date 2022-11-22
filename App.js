import { View } from 'react-native';
import { styles } from './appStyles';
import CarouselCard from './src/components/CarouselCard/CarouselCard';
import { RegisterUser } from './src/components/RegisterUser';

export default function App() {
  return (
    <View style={styles.container}>
      <CarouselCard />
      <RegisterUser />
    </View>
  );
}
