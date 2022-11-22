import { View } from 'react-native';
import EmailLogin from './EmailLogin';
import GoogleLogIn from './GoogleLogIn';
import { styles } from './logInStyles';

const LogIn = () => {
  return (
    <View style={styles.container}>
        <EmailLogin/>
        <GoogleLogIn/>
    </View>
  );
};

export default LogIn;
