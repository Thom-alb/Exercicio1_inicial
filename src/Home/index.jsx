import { View, Text, Image, TouchableOpacity } from 'react-native';
import Estilo from '../../Estilo';

//Componentes
import ItemMenu from '../../Componente/ItemMenu';

export default function Home(props) {

    const AbrirPessoa = () => {
        props.navigation.navigate('Lista de Pessoas');
    }

    return (
        <View style={Estilo.containerSimples}>
            <Image source={require('../../assets/logo.png')} style={Estilo.logo} />

            <View style={Estilo.menuContainer}>

                <ItemMenu 
                    texto="Pessoa" 
                    imagem={require('../../assets/pessoa.png')}
                    onPress={AbrirPessoa} />   
 
            </View>

        </View>
    );
}