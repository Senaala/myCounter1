import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Create
//Create native Stack
//sayfalar arası yonlendırme yapması için koydum
const Stack=createNativeStackNavigator();


//Function
export default function App() {
  return (
    //View taslak kısmıdır.
    <View style={styles.container}>
      <Text>Ana Sayfaya Hoş Geldiniz!</Text>
      {/* <StatusBar style="auto" /> */}
    <NavigationContainer>
      <Stack.Navigator>
        
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
//Style
//taslakta kullanacağım stil 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
