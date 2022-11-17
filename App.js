import { View } from 'react-native';
import { styles } from './appStyles';
import BenefitsCard from './src/components/BenefitsCard/BenefitsCard';

export default function App() {
  return (
    <View style={styles.container}>
      <BenefitsCard />
    </View>
  );
}
