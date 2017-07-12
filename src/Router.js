import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import LoginContainer from './Login/LoginContainer'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={LoginContainer} title="Login" initial/>
    </Router>
  )
}

export default RouterComponent