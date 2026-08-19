import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import MaskInput, {Masks} from 'react-native-mask-input';
import DateTimePicker from '@react-native-community/datetimepicker';
import Estilo from '../Estilo';

export default function DataInput({texto, placeholder, value, onChangeText}) {

    const [show, setShow] = useState(false);

    const parseDate = (dateString) => {
        if (!dateString) return new Date();

        const [day, month, year] = dateString.split('/');   
        
        if (!day || !month || !year) return new Date();
        
        return new Date(year, month-1, day);
    }

    const dataatual = parseDate(value);

    const onChange = (event, selectedDate) => {
        setShow(false);
        if (selectedDate) {
            onChangeText(selectedDate.toLocaleDateString('pt-BR'));
        }
    }


    return (
        <View style={Estilo.row}>
            <Text style={Estilo.inputLabelData}>{texto}</Text>
            <MaskInput 
                style={Estilo.inputData}
                placeholder={placeholder}
                value= {value}
                onChangeText = {onChangeText}
                keyboardType = "numeric"
                mask={Masks.DATE_DDMMYYYY} />
            <TouchableOpacity 
                style={Estilo.button} 
                activeOpacity={0.7}
                onPress = {() => setShow(true)} >
                <Text style={Estilo.buttonText}>Selecionar Data</Text>   
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                  value={dataatual}
                  mode="date"
                  display="default"
                  onValueChange= {onChange} />
            )}

        </View>
    );


}