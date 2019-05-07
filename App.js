import React from 'react';
import { createStackNavigator, createAppContainer,withNavigation } from 'react-navigation';
import { Provider } from 'react-redux';


import Registration from './Components/Login/Registration';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';
import Home from './Components/Home/Home';
import allStore from './Store/StoreAll';


const stackContainer = createStackNavigator({
  "Registration" : withNavigation(Registration),
  "SignUp" : withNavigation(SignUp),
  "SignIn" : withNavigation(SignIn),
  "Home": withNavigation(Home)
},
{
  initialRouteName : "Registration"
})

const AppContainer = createAppContainer(stackContainer)



class App extends React.Component {
  render() {
    return (
     <Provider store={allStore}>
       <AppContainer />
     </Provider>
    );
  }
}

export default App;

