import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import Estilo from '../../Estilo';

import DadosGerais from './Geral';
import Endereco from './Endereco';
import Telefone from './Telefone';

export default function Pessoa(props) {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={Estilo.containerSimples}>
            <View style={Estilo.cardSimples}>
                <Text style={Estilo.cardTexto}>Cadastro de Pessoa</Text>
            </View>

            <Tab.Navigator>
                <Tab.Screen name="Dados Gerais" children={() => <DadosGerais{...props} />} />
                <Tab.Screen name="Endereços" children={() => <Endereco{...props} />} />
                <Tab.Screen name="Telefones" children={() => <Telefone{...props} />} />
            </Tab.Navigator>
        </View>
    );
}