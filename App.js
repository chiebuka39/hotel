import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/screens/Landing.page'
// import CarouselPage from './src/screens/carousel/carousel.page'
import LoginPage from './src/screens/login/login.page'
import SingupPage from './src/screens/signup/Signup.page'
import Explore from './src/screens/explore/explore.page'
import Profile from './src/screens/profile/profile'
import SelectedHotel from './src/screens/selectedhotel/selectedhotel.page'
const App =() => (
  <View style={styles.container}>
    {/* <CarouselPage/> */}
    {/* <LandingPage/> */}
    {/* <LoginPage/> */}
    {/* <SingupPage/> */}
    {/* <Explore/> */}
    {/* <Profile/> */}
    <SelectedHotel/>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;