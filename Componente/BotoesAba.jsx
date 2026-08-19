import {View, Text, TouchableOpacity} from 'react-native';
import Estilo from '../Estilo';

export default function BotoesAba({onPress,onPress2, labelbutton1, labelbutton2}) {

    return (
        <View style={Estilo.row}>

            <TouchableOpacity 
                style={labelbutton1 === "Editar" ? 
                            Estilo.buttonSalvar2 : Estilo.buttonSalvar}
                activeOpacity={0.7}
                onPress= {onPress}
            >
                <Text style={labelbutton1 === "Editar" ? 
                    Estilo.buttonTextSalvar2 : Estilo.buttonTextSalvar}>
                    {labelbutton1 || 'Salvar'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={labelbutton2 === "Deletar" ? 
                            Estilo.buttonSalvar2 : Estilo.buttonSalvar}
                activeOpacity={0.7}
                onPress= {onPress2}
            >
                <Text style={labelbutton2 === "Deletar" ? 
                    Estilo.buttonTextSalvar2 : Estilo.buttonTextSalvar}>
                    {labelbutton2 || 'Cancelar'}
                </Text>
            </TouchableOpacity>

        </View>
    );


}