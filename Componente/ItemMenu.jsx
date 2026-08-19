import {Text, Image, TouchableOpacity} from 'react-native';
import Estilo from '../Estilo';

export default function ItemMenu({texto, imagem, onPress}) {

    return(
        <TouchableOpacity
            style={Estilo.cardBotao}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image
                source={imagem}
                style={Estilo.cardIcon}
            />
            <Text style={Estilo.cardTexto}>{texto}</Text>
        </TouchableOpacity>
    );

}