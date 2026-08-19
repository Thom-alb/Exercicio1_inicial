import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Estilo from '../../Estilo';
import { Masks } from 'react-native-mask-input';

//Compontes
import TextoInput from '../../Componente/TextoInput';
import BotoesAba from '../../Componente/BotoesAba';
import FlatListComponent from '../../Componente/FlatList';
import TextoMask from '../../Componente/TextoMask';
import SelectInput from '../../Componente/SelectInput';

export default function Telefone() {

    const [Telefone, setTelefone] = useState('');
    const [TipoTelefone, setTipoTelefone] = useState('');

    const ListaTipoTelefone = [
        { key: 1, value: 'Celular' },
        { key: 2, value: 'Residencial' },
        { key: 3, value: 'Comercial' },
        { key: 4, value: 'Recado' },
        { key: 5, value: 'Outros' }
    ];

    const ListaTelefone = [
        { key: 1, telefone: '123456789', tipo: 'Celular' },
        { key: 2, telefone: '987654321', tipo: 'Residencial' },
    ];

    const salvar = () => {

    }

    const cancelar = () => {

    }

    const EditarItem = (item) => {

    }

    const deletarItem = (item) => {

    }


    return (
        <View style={Estilo.containerDados}>

            <TextoMask
                texto="Telefone"
                placeholder="Digite seu telefone"
                maxLength={20}
                mask = {Masks.BRL_PHONE}
                keyboardType="numeric"
                value={Telefone}
                onChangeText={setTelefone} />

            <SelectInput
                texto="Tipo de Telefone"
                ListaDados={ListaTipoTelefone}
                setSelected={setTipoTelefone}
            />

            <BotoesAba onPress={salvar} onPress2={cancelar} /> 

            <FlatListComponent
                dados={ListaTelefone}
                coluna={( {item}) => (
                    <View style={Estilo.cardLista}>
                        <View style={Estilo.linhaInfo}>
                            <Text style={Estilo.label}>Telefone:</Text>
                            <Text style={Estilo.valor}>{item.telefone} </Text>
                        </View>
                        <View style={Estilo.linhaInfo}>
                            <Text style={Estilo.label}>Tipo de Telefone:</Text>
                            <Text style={Estilo.valor}>{item.tipo} </Text>
                        </View>

                        <BotoesAba 
                            onPress={() => editar(item)} 
                            onPress2={() => deletar (item)} 
                            labelbutton1="Editar"
                            labelbutton2="Deletar"/>
                    </View>
                )}
            />


        </View>
    );
}