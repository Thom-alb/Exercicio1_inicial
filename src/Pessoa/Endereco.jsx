import { View, Text, Alert } from "react-native";
import { useEffect, useState } from "react";
import Estilo from "../../Estilo";

import TextoInput from "../../Componente/TextoInput";
import BotoesAba from "../../Componente/BotoesAba";
import FlatListComponent from "../../Componente/FlatList";

import { BaseURL } from "../Utilitario/Utilitario";
import { Login } from "../Servico/BD/Login";

export default function Endereco(props) {

  const [idPessoa, setidPessoa] = useState(props.route.params?.idPessoa || 0);
  const [Endereco, setEndereco] = useState("");
  const [Numero, setNumero] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [Cidade, setCidade] = useState("");
  const [keyEmEdicao, setKeyEmEdicao] = useState(null);
  const [isLoding, setloding] = useState(false);
  const [ListaEndereco, setListaEndereco] = useState([]);

  useEffect(() => {
    ListarEndereco();
  }, []);

  const ListarEndereco = () => {
    setloding(true);
    getEndereco(idPessoa).then((response) => {
      setListaEndereco(response);
    }).finally(() => {
      setloding(false);
    })
  };

  const cancelar = () => {
    setEndereco("");
    setNumero("");
    setComplemento("");
    setCidade("");
    setKeyEmEdicao(null);
  };

  const salvar = async (Endereco, Cidade, Complemento, Numero, idPessoa) => {

    try {
      const token = await Login();

      if (!token) {
        console.error('Token de autenticação não disponível');
        return [];
      }

      const resposta = await fetch(`${BaseURL}/IncluirEndereco`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`
        },
        body: JSON.stringify({
          Endereco: Endereco,
          Cidade: Cidade,
          Complemento: Complemento,
          Numero: Numero,
          idPessoa: idPessoa
        })
      });

      const dados = await resposta.json();
      console.log(resposta.status);

      console.log(dados);
      cancelar();
      ListarEndereco();

      return await dados;

    }
    catch (error) {
      console.log('Erro ao acessar o serviço de post de Endereco', error);
      return null;
    }
  };

  const getEndereco = async (idPessoa) => {
    try {
      const token = await Login();

      if (!token) {
        console.error('Token de autenticação não disponível');
        return [];
      }

      const resposta = await fetch(`${BaseURL}/ListaEnderecos/${idPessoa}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`
        }
      });

      console.log("Status: ", resposta.status);

      const dados = await resposta.json();

      console.log(idPessoa);


      console.log(dados);

      return dados;
    }
    catch (error) {
      console.log('Erro ao acessar o serviço de pessoa', error);
      return null;
    }
  };


  const editar = async (Endereco, Cidade, Complemento, Numero, idEndereco) => {
    try {
      const token = await Login();

      if (!token) {
        console.error('Token de autenticação não disponível');
        return [];
      }

      Endereco = Endereco.trim().length > 0 ? Endereco : undefined;
      Cidade = Cidade.trim().length > 0 ? Cidade : undefined;
      Complemento = Complemento.trim().length > 0 ? Complemento : undefined;
      Numero = Numero.trim().length > 0 ? Numero : undefined;

      const resposta = await fetch(`${BaseURL}/AlterarEndereco/${idEndereco}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`
        },
        body: JSON.stringify({
          Endereco: Endereco,
          Cidade: Cidade,
          Complemento: Complemento,
          Numero: Numero,
          idEndereco: idEndereco
        })
      });

      console.log(resposta.status);
      ListarEndereco();
      

      return await resposta.json();

    }
    catch (error) {
      console.log('Erro ao acessar o serviço de put de Endereco', error);
      return null;
    }
  };

  const deletar = async (item) => {
    try {
      const token = await Login();

      if (!token) {
        console.error("Token de autenticação não disponível");
        return null;
      }

      const resposta = await fetch(`${BaseURL}/DeletarEndereco/${item.key}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.token || token}`,
        },
      });

      if (!resposta.ok) {
        console.error(`Erro ao deletar endereço: ${resposta.status} ${resposta.statusText}`);
        return null;
      }

      if (resposta.status === 204) {
        return true;
      }

      return await resposta.json();
    } catch (error) {
      console.error("Erro ao acessar o serviço de deleção de endereço", error);
      return null;
    }
  };

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

      <BotoesAba onPress={() => salvar(Endereco, Cidade, Complemento, Numero, idPessoa)} onPress2={cancelar} />

      <FlatListComponent
        data={ListaEndereco}
        coluna={({ item }) => (
          <View style={Estilo.cardLista}>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Endereço:</Text>
              <Text style={Estilo.valor}>{item.Endereco}</Text>
            </View>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Número:</Text>
              <Text style={Estilo.valor}>{item.Numero}</Text>
            </View>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Complemento:</Text>
              <Text style={Estilo.valor}>{item.Complemento}</Text>
            </View>

            <BotoesAba
              onPress={() => editar(Endereco, Cidade, Complemento, Numero, item.idEndereco)}
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