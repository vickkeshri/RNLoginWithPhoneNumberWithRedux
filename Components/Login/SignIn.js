import React from 'react';
import { StyleSheet, 
        Text, 
        View,
        TouchableOpacity,
        ImageBackground } from 'react-native';
import UserNames from './UserNames';
import PhoneNumber from './PhoneNumber';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  static navigationOptions={
    header: null
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ImageBackground source={require("../../assets/batman3.jpg")}
      imageStyle={{ resizeMode: "stretch"}} 
      style={styles.container}>
      {/* Start of UserNames Component */}
      <View>
        <UserNames />
      </View>
      {/* End of UserNames Component */}

      {/* Start of PhoneNumber Component */}
      <View>
      <PhoneNumber  />
      </View>
      {/* End of PhoneNumber Component */}
      </ImageBackground>
    );
  }
} 

export default connect() (SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  }
});
