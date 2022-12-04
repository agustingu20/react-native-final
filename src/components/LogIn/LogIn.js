import { View } from 'react-native';
import EmailLogin from './EmailLogin';
import GoogleLogIn from '../GoogleLogIn/GoogleLogIn';
import { styles } from '../GoogleLogIn/googleLogInStyle';

const LogIn = () => {
  return (
    <View style={styles.container}>
        <EmailLogin/>
        <GoogleLogIn/>
    </View>
  );
};

export default LogIn;
