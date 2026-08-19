import {View, Text, TextInput} from 'react-native';
import Estilo from '../Estilo';

export default function TextoInput({texto, maxLength, placeholder,value , onChangeText, estiloLabel, estiloinput})
 {
    return(
        <View style={Estilo.row}>
            <Text style={[Estilo.inputLabel, estiloLabel]}>{texto}</Text>
            <TextInput 
                style={[Estilo.input, estiloinput]} 
                maxLength={maxLength}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}/>
        </View>
    );

}