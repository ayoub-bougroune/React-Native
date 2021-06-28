import 'react-native-gesture-handler';
import React from 'react'
import  MainNavigator from './src/navigation/mainNavigator'
import firebase from 'firebase'
import { Provider } from 'react-redux';
import store from './src/store/store';


const firebaseConfig = {
  apiKey : "AIzaSyAP_Ran0zickSzadGnJXTmkGRScZuoNcOU" ,  
  authDomain : "parkingfinder-6321f.firebaseapp.com" ,  
  DatabaseURL : "https://parkingfinder-6321f-default-rtdb.firebaseio.com" ,  
  projectId : "parkingfinder-6321f" ,   
  storageBucket : "parkingfinder-6321f.appspot.com" ,   
  messagingSenderId : "955958422328" , 
  appId : "1: 955958422328: web: 10a29d2f94058cc7e2afcd"
};

firebase.initializeApp(firebaseConfig);


const App = (props) => (
    <Provider store={store}>
       <MainNavigator />
    </Provider>
);

export default App;