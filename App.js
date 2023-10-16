//Routing
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import ButtonCounter from './src/component/ButtonCounter';
import AppText from './src/component/AppText';

//Create
//Create native Stack
//sayfalar arası yonlendırme yapması için koydum
const Stack=createNativeStackNavigator();


//Function
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* sayfadaki başlıklar options kısmında yazanlar. */}
      <Stack.Screen name='Home' 		  component={HomeScreen} 		  options={{title:'Ana Sayfa'}}/>
      <Stack.Screen name='HomeOther' 	component={HomeOther} 		  options={{title:'Home Other'}}/> 
      <Stack.Screen name="Counter"   component={ButtonCounter} options={{ title: "WELCOME TO COUNTER APP" }} />
      <Stack.Screen name='AppText' 	  component={AppText} 		    options={{title:'Text Alanı'}}/>
      <Stack.Screen name='MyProfile'  component={ProfileScreen} 	options={{title:'My Profile(Profilim)'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

//Home Ayrı bir ekran gibi
// SAYFALAR
// style={{marginBottom:10}}
//Home
const HomeScreen=({navigation,route})=>{
  return(
    <View >
      <View style={{marginBottom:20}}>
      <Button color='pink'  title='MyProfile 'onPress={() => navigation.navigate('MyProfile', { name: 'İstanbul' })} />
      </View>
     {/* <Text>Sena Ala Kılıç</Text> */}
     <View style={{marginBottom:20}}>
      <Button  color='orange'  title='HomeOther'onPress={() => navigation.navigate('HomeOther', { name: 'HomeOther' })} />
      </View>
     
     <Button color='orange'  title='AppText'  onPress={() => navigation.navigate('AppText',   { name: 'AppText' })} />
     <Button color='orange'  title='Counter'  onPress={() => navigation.navigate('Counter',   { name: 'Counter' })} />
   
    </View>

  );
} 

// ProfileScreen
const ProfileScreen = ({ navigation,route }) => {
  return <Text> Profilime sayfama Hoş3213 geldiniz {route.params.name}  </Text>
}
// HomeOther
const HomeOther = ({ navigation,route }) => {
  return <Text> Home Other Page  {route.params.name}</Text>
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

export default App;