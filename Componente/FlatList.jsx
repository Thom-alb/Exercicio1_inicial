import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Estilo from '../Estilo';

export default function FlatListComponent({data, coluna}) {

    return (
        <View style={Estilo.containerLista}>
            <FlatList
                data = {data}
                renderItem= {({item}) => (
                  <View style={Estilo.itemLista}>
                        {coluna({item})}
                  </View>
                )}
                keyExtractor={(item, index)=> index.toString()}
                ListEmptyComponent ={<Text style={Estilo.itemText}>Nenhum dado encotrado</Text>}
                style= {{flex:1, width: '90%'}}
            />
        </View>
    );

}