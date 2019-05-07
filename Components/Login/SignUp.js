import React from 'react';
import { StyleSheet, 
        View,
        ImageBackground } from 'react-native';
import { connect} from 'react-redux';

import PhoneNumber from './PhoneNumber';

class SignUp extends React.Component {
  static navigationOptions={
    header: null
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ImageBackground source={require("../../assets/joker.jpg")} style={styles.container}>
        {/* Start of PhoneNumber Component */}
        <View>
          <PhoneNumber />
       </View>
        {/* End of PhoneNumber Component */}
      </ImageBackground>
    );
  }
} 

export default connect() (SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  }
});
