import {View, Text} from 'react-native';
import MaskInput from 'react-native-mask-input';
import Estilo from '../Estilo';

export default function TextoMask({texto, maxLength, placeholder, 
                                   onChangeText, keyboardType, mask, value}){

    return (
        <View style={Estilo.row}>
            <Text style={Estilo.inputLabel}>{texto}</Text>
            <MaskInput style={Estilo.input}
                maxLength={maxLength}
                placeholder={placeholder}
                value= {value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                mask = {mask}
            />
        </View>
    );

}