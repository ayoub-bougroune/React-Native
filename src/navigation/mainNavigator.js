import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { connect } from 'react-redux';
import DetailsScreen from "../screens/Dashboard/DetailsScreen";
import Dashboard from "../screens/Dashboard/Dashboard";
import Login from "../screens/LoginScreen/LoginScreen";
import Register from "../screens/RegistrationScreen/RegistrationScreen"
const Stack = createStackNavigator();


const MainNavigator = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
 return (
    <NavigationContainer>
    <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="dash" component={Dashboard} />
          <Stack.Screen name="detail" component={DetailsScreen} />  
    </Stack.Navigator>
  </NavigationContainer>
 );
};

export default MainNavigator