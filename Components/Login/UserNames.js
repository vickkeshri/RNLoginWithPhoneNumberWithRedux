import React from 'react';
import { StyleSheet,
        TextInput, 
        View,Text } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux';
import { postFirsNameToRedux, postlastNameToRedux} from './../../Store/Actions/UserNamesActions'

class UserNames extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
  }

  setFirstName = (value) => {
    let fNamePayload = value;
    this.props.postFName(fNamePayload)
    
  }

  setLastName = (value) => {
    // this.props.dispatch({
    //   type:"SET_LAST_NAME",
    //   data:value
    // });
    let lNamePayload = value;
    this.props.postLName(lNamePayload)
  }

  render() {
    return (
     <View style={styles.container}>

     {/* Start of First Name */}
     <View style={styles.inputView}>
     <Entypo name="user" size={24} color={"white"} style={styles.imageStyle} />
        <TextInput 
        style={styles.inputWidth}
        placeholder="Enter your first name *"
        placeholderTextColor="#fff"
        multiline={false}
        onChangeText={this.setFirstName}/>
     </View>
     <View style={styles.lineView}></View>
     {/* End of First Name */}

      {/* Start of Last Name */}
      <View style={styles.inputView}>
        <Entypo name="pencil" size={24} color={"white"} style={styles.imageStyle} />
        <TextInput 
        style={styles.inputWidth}
        placeholder="Enter your last name "
        placeholderTextColor="#fff"
        multiline={false}
        onChangeText={this.setLastName}/>
     </View>
     <View style={styles.lineView}></View>
     {/* End of Last Name */}
      <View>
        <Text style={{color:"white"}}>{this.props.fname}</Text>
      </View>
     </View>
    );
  }
} 


const mapDispatchToProps = (dispatch)=> {

  return {
    postFName: function(data) {
      dispatch(postFirsNameToRedux(data))
    },
    postLName: function(data) {
      dispatch(postlastNameToRedux(data))
    }
  }
};

export default connect(null, mapDispatchToProps)(UserNames);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  inputView:{
      flexDirection: "row",
      marginTop: 5,
      marginLeft:10,
      marginRight: 10
  },
  imageStyle:{
    width: "16%",
  },
  inputWidth: {
      width: "84%",
      fontSize:16,
      color: "white"
  },
  lineView:{
    marginTop: 5,
    width: "95%",
    borderBottomWidth: 2,
    borderBottomColor: "white"
  }

});
