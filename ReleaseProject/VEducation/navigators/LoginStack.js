import React from 'react';
//React navigation
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import Tabs from './Tabs';
import EditProfile from '../screens/EditProfile';
//Colors
import { Colors } from '../components/styles';
const { primary, tertiary, background } = Colors;

//Stack
const Stack = createNativeStackNavigator();
// Fix grey bar on bottom of screen
const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};
//credentials context
import { CredentialsContext } from '../components/CredentialsContext';
import SearchResult from '../screens/SearchResult';

export default LoginStack = () => {
  return (
    // <CredentialsContext.Consumer>
    //   {({ storedCredentials }) => (
    //     <NavigationContainer theme={NavigationTheme}>
    //       <Stack.Navigator
    //         screenOptions={{
    //           headerStyle: {
    //             backgroundColor: 'transparent',
    //           },
    //           headerTintColor: tertiary,
    //           headerTransparent: true,
    //           headerTitle: '',
    //           headerLeftContainerStyle: {
    //             paddingLeft: 20,
    //           },
    //         }}
    //       >
    //         {storedCredentials ? (<Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} />) : (
    //           <>
    //             <Stack.Screen name="Login" component={Login} />
    //             <Stack.Screen name="Signup" component={Signup} />
    //           </>
    //         )}
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   )}
    // </CredentialsContext.Consumer>
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer theme={NavigationTheme}>
          <Stack.Navigator>
            {storedCredentials ? (<>
              <Stack.Screen name="Tabs" component={Tabs} />
              <Stack.Screen name="SearchResult" component={SearchResult} />
              <Stack.Screen name="Edit Profile" component={EditProfile} />
            </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}