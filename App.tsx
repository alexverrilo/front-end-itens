import React from 'react';
import ProfileScreen from './src/screens/profile';
import ItemScreen from './src/screens/item';
import LoginScreen from './src/screens/login';
import MainScreen from './src/screens/main';
import EditarItemScreen from './src/screens/editarItem';
import NovoItemScreen from './src/screens/novoItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './src/models/item';


const App: React.FC = () => {

  const Stack = createNativeStackNavigator()

  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Item' component={ItemScreen}/>
        <Stack.Screen name='EditarItem' component={EditarItemScreen}/>
        <Stack.Screen name='NovoItem' component={NovoItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type StackParams = {
  Main: undefined,
  Login: undefined,
  Item: {item: Item},
  EditarItem: {item: Item},
  NovoItem: undefined,
};

export default App;