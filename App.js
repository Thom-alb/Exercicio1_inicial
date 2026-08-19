import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import Pessoa from './src/Pessoa';
import ListaPessoas from './src/Pessoa/ListaPessoas';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pessoa" component={Pessoa} />
        <Stack.Screen name="Lista de Pessoas" component={ListaPessoas}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

