import React from 'react';
import { StyleSheet, 
        Text, 
        TouchableOpacity,
        ImageBackground } from 'react-native';

class Registration extends React.Component {
    static navigationOptions={
        header: null    
    }
  render() {
    return (
      <ImageBackground source={require("../../assets/batman2.jpg")} style={styles.container}>

        {/* start of SignIn */}
        <TouchableOpacity style={styles.textViewStyle}>
        <Text style={styles.textStyle}  onPress={ () => this.props.navigation.navigate("SignIn")}>
            SignIn
        </Text>
        </TouchableOpacity>
        {/* End of SignIn */}

        {/* start of SignUp */}
        <TouchableOpacity style={styles.textViewStyle} onPress={ () => this.props.navigation.navigate("SignUp")}>
        <Text style={styles.textStyle}>
            SignUp
        </Text>
        </TouchableOpacity>
        {/* End of SignUp */}
       
      </ImageBackground>
    );
  }
} 

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textViewStyle:{
    marginTop: 20,
    width: "80%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    padding: 20
  },
  textStyle:{
      textAlign: "center",
      fontSize: 20,
      color: "white"
  }
});
