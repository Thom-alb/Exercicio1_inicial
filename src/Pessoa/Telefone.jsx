import { View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import Estilo from "../../Estilo";
import axios from "axios";
import { Masks } from "react-native-mask-input";

//Compontes
import TextoInput from "../../Componente/TextoInput";
import BotoesAba from "../../Componente/BotoesAba";
import FlatListComponent from "../../Componente/FlatList";
import TextoMask from "../../Componente/TextoMask";
import SelectInput from "../../Componente/SelectInput";

import { BaseURL } from "../Utilitario/Utilitario";
import { Login } from "../Servico/BD/Login";

export default function Telefone(props) {
  const [idPessoa, setidPessoa] = useState(props.route.params?.idPessoa || 0);
  const [Telefone, setTelefone] = useState("");
  const [TipoTelefone, setTipoTelefone] = useState("");
  const [DDD, setDDD] = useState("");
  const [isLoding, setloding] = useState(false);
  const [ListaTelefone, setListaTelefone] = useState([]);

  const ListaTipoTelefone = [
    { key: 1, value: "Celular" },
    { key: 2, value: "Residencial" },
    { key: 3, value: "Comercial" },
    { key: 4, value: "Recado" },
    { key: 5, value: "Outros" },
  ];

  useEffect(() => {
    ListarTelefone();
  }, []);

  const ListarTelefone = () => {
    setloding(true);
    getTelefone(idPessoa)
      .then((response) => {
        setListaTelefone(response);
      })
      .finally(() => {
        setloding(false);
      });
  };

  const salvar = async (telefone) => {
    try {
      const token = await Login();

      if (!token) {
        console.error("Token de autenticação não disponível");
        return;
      }
      console.log("Dados enviados:", Telefone);
      console.log(BaseURL);
      const response = await axios.post(
        `${BaseURL}/IncluirTelefone`,
        telefone,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log("Erro ao acessar o serviço de post de Endereco", error);
      return null;
    }
  };

  const cancelar = () => {
    setTelefone("");
    setDDD("");
    setTipoTelefone(0);
  };

  const getTelefone = async (idPessoa) => {
    try {
      const token = await Login();

      if (!token) {
        console.error("Token de autenticação não disponível");
        return [];
      }

      const resposta = await fetch(`${BaseURL}/ListaTelefones/${idPessoa}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      });

      console.log("Status: ", resposta.status);

      const dados = await resposta.json();

      console.log(idPessoa);

      console.log(dados);

      return dados;
    } catch (error) {
      console.log("Erro ao acessar o serviço de pessoa", error);
      return null;
    }
  };

  const EditarItem = (item) => {};

  const deleteItem = async (idTelefone) => {
    const token = await Login(); 

    if (!token) {
        console.error('Token de autenticação não disponível.');
        return [];
    }

    const response = await axios.delete(`${BaseUrl}/ExcluirTelefone/${idTelefone}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.token}`
        }
    });

    return response.data;
}

  return (
    <View style={Estilo.containerDados}>
      <TextoMask
        texto="Telefone"
        placeholder="Digite seu telefone"
        maxLength={20}
        mask={Masks.BRL_PHONE}
        keyboardType="numeric"
        value={Telefone}
        onChangeText={setTelefone}
      />

      <SelectInput
        texto="Tipo de Telefone"
        ListaDados={ListaTipoTelefone}
        setSelected={setTipoTelefone}
      />

      <BotoesAba onPress={salvar} onPress2={cancelar} />

      <FlatListComponent
        dados={ListaTelefone}
        coluna={({ item }) => (
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
