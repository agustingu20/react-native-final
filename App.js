import { View } from 'react-native';
import { styles } from './appStyles';
import CarouselCard from './src/components/CarouselCard/CarouselCard';

export default function App() {
  return (
    <View style={styles.container}>
      <CarouselCard />
    </View>
  );
}
