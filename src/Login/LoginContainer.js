//import libraries for making a component
import React from 'react';
import { Image, View } from 'react-native';
import FbLoginButton from './FbLoginButton';


//Make a component
const LoginContainer = () => {
    return (<div>
        
        <Image source ={{uri:'https://bumbcdn.com/aco/bumble.com/v2/-/moxie/i/sz___size__/logo_huge.6.png'}} resizeMode = "contain" style={{width:100, height:30}} />
    
        {/* <FbLoginButton/> */}
        
    </div>
    
)
}

// const styles = {
//     viewStyle: {
//         backgroundColor: '#F8f8f8'
//     }
// }
export default LoginContainer;