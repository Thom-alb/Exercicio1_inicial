import { View, Text, Alert } from "react-native";
import { useEffect, useState } from "react";
import Estilo from "../../Estilo";

//Compontes

import TextoInput from "../../Componente/TextoInput";
import BotoesAba from "../../Componente/BotoesAba";
import FlatListComponent from "../../Componente/FlatList";

import { BaseURL } from "../Utilitario/Utilitario";
import { Login } from "../Servico/BD/Login";


export default function Endereco() {
  const salvar = async () => {
  try {
    const token = await Login();

    if (!token || !token.token) {
      console.error("Token de autenticação não disponível");
      return null; 
    }

    const resposta = await fetch(`${BaseURL}/IncluirEndereco`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        Endereco: Endereco,
        Cidade: Cidade,
        Complemento: Complemento,
        Numero: Numero,
        idPessoa: token.idPessoa || 1
      }),
    });

    if (!resposta.ok) {
      throw new Error(`Erro no servidor: ${resposta.status}`);
    }
    ListaEndereco();

    return await resposta.json();

  } catch (error) {
    console.log("Erro ao acessar o serviço de inclusão de endereço", error);
    return null;
  }
};


  const cancelar = () => {};

  const editar = (item) => {};

  const deletar = (item) => {};

  const ListaEndereco = [
    {
      key: 1,
      endereco: "Rua A",
      numero: "123",
      complemento: "Apto 1",
      cidade: "Cidade A",
    },
    {
      key: 2,
      endereco: "Rua B",
      numero: "456",
      complemento: "Casa",
      cidade: "Cidade B",
    },
  ];

  const [Endereco, setEndereco] = useState("");
  const [Numero, setNumero] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [Cidade, setCidade] = useState("");

  return (
    <View style={Estilo.containerDados}>
      <TextoInput
        texto="Endereço"
        placeholder="Digite seu endereço"
        maxLength={100}
        value={Endereco}
        onChangeText={setEndereco}
      />

      <TextoInput
        texto="Número"
        placeholder="Digite seu número"
        maxLength={10}
        value={Numero}
        onChangeText={setNumero}
      />

      <TextoInput
        texto="Complemento"
        placeholder="Digite seu complemento"
        maxLength={100}
        estiloLabel={Estilo.inputLabelEnd}
        estiloinput={Estilo.inputEnd}
        value={Complemento}
        onChangeText={setComplemento}
      />

      <TextoInput
        texto="Cidade"
        placeholder="Digite sua Cidade"
        maxLength={100}
        value={Cidade}
        onChangeText={setCidade}
      />

      <BotoesAba onPress={salvar} onPress2={cancelar} />

      <FlatListComponent
        dados={ListaEndereco}
        coluna={({ item }) => (
          <View style={Estilo.cardLista}>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Endereço:</Text>
              <Text style={Estilo.valor}>{item.endereco} </Text>
            </View>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Número:</Text>
              <Text style={Estilo.valor}>{item.numero} </Text>
            </View>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Complemento:</Text>
              <Text style={Estilo.valor}>{item.complemento} </Text>
            </View>

            <BotoesAba
              onPress={() => editar(item)}
              onPress2={() => deletar(item)}
              labelbutton1="Editar"
              labelbutton2="Deletar"
            />
          </View>
        )}
      />
    </View>
  );
}
