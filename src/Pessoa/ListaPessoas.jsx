import { View, Text, ActivityIndicator, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";

import Estilo from "../../Estilo";

import { getPessoas } from "../Servico/BD/Pessoa";

// Componentes
import FlatListComponent from "../../Componente/FlatList";
import BotoesAba from "../../Componente/BotoesAba";

export default function ListaPessoas(props) {

    const [loding , setloding] = useState(false);
    const [ListaPessoas, setListaPessoas] = useState([]);

    useEffect(() => {
        ListaPessoa();
    }, [])

    const ListaPessoa = () => {
        setloding(true);
        getPessoas().then((response) => {         
            setListaPessoas(response);
        }).finally(()=> {
            setloding(false);
        })
    }

    const EditarItem = (item) => {
        props.navigation.navigate('Pessoa', {idPessoa: item.idPessoa});
    }

    return (
        <View style={Estilo.containerDados}>
            <Text style={Estilo.cardTexto}>Lista de Pessoas </Text>

            <BotoesAba 
              onPress={() => {props.navigation.navigate('Pessoa')}} 
              onPress2={() => { props.navigation.navigate('Home')}} 
              labelbutton1="Novo"
              labelbutton2="Retornar"
             />

            {loding ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) 
            : (
                <FlatListComponent 
                    data= {ListaPessoas}
                    coluna = {({item}) => (
                        <Pressable onPress={() => EditarItem(item)} >
                            <View style={Estilo.row}>
                                <View style= {Estilo.cardLista} >
                                    <View style = {Estilo.linhaInfo}>
                                        <Image source={require('../../assets/pessoa.png')} style={Estilo.cardIcon} />
                                        <View style={Estilo.containerSimples}>
                                             <View style = {Estilo.linhaInfo}>
                                                <Text style={Estilo.label}> Nome : </Text>
                                                <Text style={Estilo.valor}>{item.nome}</Text>
                                             </View>

                                             <View style = {Estilo.linhaInfo}>
                                                <Text style={Estilo.label}> CPF : </Text>
                                                <Text style={Estilo.valor}>{item.cpf}</Text>
                                             </View>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            )}




        </View>
    )


}
