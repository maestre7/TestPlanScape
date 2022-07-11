
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./app/screens/Login/LoginScreen"
import Register from "./app/screens/Register/RegisterScreen"
import Tap from "./app/screens/Tap/TapScreen" 

const Stack = createNativeStackNavigator();

export default function App() {
  return (<SafeAreaView style={styles.app}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen 
            name="Register" 
            component={Register} 
          />
          <Stack.Screen 
            name="Tap"
            component={Tap} 
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    width: "60%",
    marginLeft: "21%",
    marginTop: "14%",
})
