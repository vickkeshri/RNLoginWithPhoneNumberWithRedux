import React from 'react';
import { StyleSheet,
        TouchableOpacity,
        TextInput, 
        Text,
        View } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux';
import { withNavigation} from 'react-navigation';

import DeviceInfo from 'react-native-device-info';
import CountryPicker , { getAllCountries } from 'react-native-country-picker-modal';
import { postPhoneNumberToRedux, postOtpToRedux } from './../../Store/Actions/userPhoneNumberActions'

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const PNF = require('google-libphonenumber').PhoneNumberFormat;


class PhoneNumber extends React.Component {
  constructor(props){
    super(props);
    const deviceInfo = DeviceInfo.getDeviceCountry;
    const allCountries = getAllCountries();

    let cca2 = deviceInfo;
    let callingCode = null;

      if(!cca2 || !callingCode) {
        cca2 = 'IN'
        callingCode = '91'
      } else {
        callingCode = allCountries.callingCode
      }

      this.state = {
        cca2,
        callingCode,
        phoneNumber: "",
        showFlag: false,
        otp: ""
      
      }
      this.setPhoneNumber = this.setPhoneNumber.bind(this);
      this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
      this.setOtp = this.setOtp.bind(this);
      this.validateOtp = this.validateOtp.bind(this);
      

  }

  setPhoneNumber = (value) => {
    let ph = value;
    this.props.postPhoneNumber(ph)
  }

  validatePhoneNumber = () => {
   
    console.log(this.props.reduxPhoneNumber)
    if(this.props.reduxPhoneNumber.length == 0) {
      alert("Phone number can not be empty")
    } else{
      const number = phoneUtil.parseAndKeepRawInput(this.props.reduxPhoneNumber, this.state.cca2)
      console.log(number)
      if(!phoneUtil.isValidNumber(number)) {
        alert("Invalid phone number")
      } else{
        this.props.postPhoneNumber(this.state.phoneNumber)
        this.setState({showFlag: true})
      }
    }
  }

  setOtp = (value) => {
    this.setState({
      otp: value
    })
    this.props.postOtp(this.state.otp);
  }

  validateOtp = () => {
    let otp = this.state.otp;
    if(this.state.otp.length == 0) {
      alert("Otp can not be empty")
    } else if(otp.length>4 || otp.length<4) {
      alert("Otp can be of 4 digits")
    } else{
      this.props.navigation.navigate("Home")
    }
  }

  render() {
    return (
     <View style={styles.container}>

     {/* Start of Phone Number */}
     <View style={{marginTop: 20, flexDirection: "row"}}>
     <View style={{width: "18%"}}>
     <CountryPicker
              onChange={value => {
              this.setState({ cca2: value.cca2, callingCode: value.callingCode })
            }}
            cca2={this.state.cca2}
            translation="eng"
          />
          </View>
    
        <TextInput 
        style={{ width: "67%", fontSize:16,color: "white"}}
        placeholder="Enter your Phone number *"
        keyboardType='numeric'
        placeholderTextColor="#fff"
        multiline={false}
        onChangeText={this.setPhoneNumber}/>

        <AntDesign name="arrowright" size={24} color={"white"} style={{width: "15%"}}
         onPress= { ()=> this.validatePhoneNumber()}/>
        
     </View>
     <View style={styles.lineView}></View>
     {/* End of Phone Number */}
    
    {
      this.state.showFlag ? 
      // Star of otp
      <View style={{alignItems: "center"}}><View style={styles.inputView}>
      <Entypo name="pencil" size={24} color={"white"} style={styles.imageStyle} />
      <TextInput 
      style={styles.inputWidth}
      placeholder="Enter Otp * "
      keyboardType='numeric'
      placeholderTextColor="#fff"
      multiline={false}
      onChangeText={this.setOtp}/>
   </View>
   <View style={styles.lineView}></View>
   {/* End of Otp */}
   {/* start of login button */}
   <TouchableOpacity
    style={styles.textViewStyle} 
    onPress={ ()=> this.validateOtp()}>
       <Text style={styles.textStyle}> Login </Text>
   </TouchableOpacity></View>:<View></View>
  //  End of login button
    }

     </View>
    );
  }
} 

const matchStateToProps = (state) => {
  return {
    reduxPhoneNumber: state.UserPhoneNumberReducers.phoneNumber
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    postPhoneNumber: function(data) {
      dispatch(postPhoneNumberToRedux(data))
    },
    postOtp: function(data) {
      dispatch(postOtpToRedux(data))
    }
  }
}

export default connect(matchStateToProps, mapDispatchToProps)  (withNavigation (PhoneNumber));

const styles = StyleSheet.create({
  container:{
    alignItems: 'center'
  },
  inputView:{
      flexDirection: "row",
      marginTop: 5,
      marginLeft:10,
      marginRight: 10
  },
  imageStyle:{
    width: "16%"
  },
  inputWidth:{
      width: "84%",
      fontSize:16,
      color: "white"
  },
  lineView:{
    marginTop: 5,
    width: "95%",
    borderBottomWidth: 2,
    borderBottomColor: "white"
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
