import React from 'react';
import { StyleSheet, 
        Text, 
        View,
        TouchableOpacity,
        ImageBackground } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {this.props.fName }
       </Text>
       <Text style={styles.textStyle}>
          {this.props.lName }
       </Text>
       <Text style={styles.textStyle}>
          {this.props.phoneNumber }
       </Text>
       <Text style={styles.textStyle}>
          {this.props.otp }
       </Text>
      </View>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    fName: state.UserNameReducers.firstName,
    lName: state.UserNameReducers.lastName,
    phoneNumber: state.UserPhoneNumberReducers.phoneNumber,
    otp: state.UserPhoneNumberReducers.otp
  }
}

export default connect(mapStateToProps) (Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textStyle:{
      fontSize: 20,
      fontWeight: "700"
  }
});
