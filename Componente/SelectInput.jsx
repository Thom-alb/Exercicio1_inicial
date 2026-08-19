import {View, Text, TextInput} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Estilo from '../Estilo';

export default function SelectInput({texto, ListaDados, setSelected}){

    return (
        <View style={Estilo.rowSelectInput}>
            <Text style={Estilo.TextInputSelect}>{texto}</Text>
            <View style={{flex: 1 , marginRight: 10}}>
                <SelectList
                  placeholder='Selecione uma opção'
                  dropdownItemStyles={{marginBottom: 20}}
                  style={Estilo.input}
                  data= {ListaDados}
                  save="key"
                  label="value"
                  setSelected={setSelected}   
                />
            </View>
        </View>
    )

}