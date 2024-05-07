import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import ForgetPassword from './screens/ForgotPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import InsideAppScreen from './screens/InsideAppScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitle: 'Login' }} />
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} options={{ headerTitle: 'Forget Password' }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: 'Register' }} />
        <Stack.Screen name="InsideAppScreen" component={InsideAppScreen} options={{ headerShown: false }} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
