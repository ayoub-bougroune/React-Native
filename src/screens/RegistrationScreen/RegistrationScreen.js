import React, {useContext, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from 'firebase'
import { connect } from 'react-redux'

import styles from './styles'


const RegistrationScreen = (props) => {
  const [fullName, setFullName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [isLoading, setLoading] = useState(false);


  const onFooterLinkPress = () => {
     props.navigation.navigate('login')
  }

 
  const onRegisterPress = () => {
    if(fullName && email && password && confirmPassword)
     if(password === confirmPassword) {
         setLoading(true);
         firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
          .then(({ user }) => {
              user.updateProfile({displayName: fullName});

              firebase
              .database()
              .ref()
              .child("users/")
              .child(user.uid)
              .set({ fullName, password, email })
              .then(() => {
                setLoading(false);
                props.navigation.navigate("dash")
              });
         })
        }
     else alert('Password invalid');
  };

  return (
    <ImageBackground source={require('../../../assets/car.jpg')} style={{ flex: 1 }}blurRadius={1.5} >
    <View style={styles.container}>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <Image
            style={styles.logo}
            source={require('../../../assets/logoP.png')}
        />
        <TextInput
            style={styles.input}
            placeholder='Full Name'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder='E-mail'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder='Confirm Password'
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        <TouchableOpacity
            style={styles.button}
            onPress={() => onRegisterPress()}>
            <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
            <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
        </View>
    </KeyboardAwareScrollView>
</View>
</ImageBackground>
  )
}

export default RegistrationScreen

