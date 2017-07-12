import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './ducks/userReducer';
import conversationReducer from './ducks/conversationsReducer';
// import firebase from 'firebase';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';
import Router from './Router';

class App extends Component {
  // componentWillMount() {
  //   const config = {
  //     apiKey: 'AIzaSyBR4FTGiOcTZ5OBNi6thE0KhCDR3PaOtQM',
  //     authDomain: 'manager-2328b.firebaseapp.com',
  //     databaseURL: 'https://manager-2328b.firebaseio.com',
  //     storageBucket: 'manager-2328b.appspot.com',
  //     messagingSenderId: '193075244299'
  //   };
  //
  //   firebase.initializeApp(config);
  // }

  render() {
    const store = createStore(combineReducers({userReducer, conversationReducer}), {});
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;