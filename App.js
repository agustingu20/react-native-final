import { View } from 'react-native';
import { styles } from './appStyles';
import EmailLogin from './src/components/LogIn/EmailLogin';
import GoogleLogIn from './src/components/LogIn/GoogleLogIn';

export default function App() {
  return (
    <View style={styles.container}>
      <EmailLogin/>
      <GoogleLogIn/>
    </View>
  );
}
