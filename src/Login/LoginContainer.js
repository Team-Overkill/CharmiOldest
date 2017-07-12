//import libraries for making a component
import React from 'react';
import { Image } from 'react-native';


//Make a component
const LoginContainer = () => {
    return (<Image source ={{uri:'https://bumbcdn.com/aco/bumble.com/v2/-/moxie/i/sz___size__/logo_huge.6.png'}} resizeMode = "contain" style={{width:100, height:30}} /> )
}

export default LoginContainer;