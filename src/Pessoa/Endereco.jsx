import { View, Text, Alert } from "react-native";
import { useEffect, useState } from "react";
import Estilo from "../../Estilo";

import TextoInput from "../../Componente/TextoInput";
import BotoesAba from "../../Componente/BotoesAba";
import FlatListComponent from "../../Componente/FlatList";

import { BaseURL } from "../Utilitario/Utilitario";
import { Login } from "../Servico/BD/Login";

export default function Endereco() {
  const [Endereco, setEndereco] = useState("");
  const [Numero, setNumero] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [Cidade, setCidade] = useState("");
  const [keyEmEdicao, setKeyEmEdicao] = useState(null); // Controla se estamos editando um item

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

  const cancelar = () => {
    setEndereco("");
    setNumero("");
    setComplemento("");
    setCidade("");
    setKeyEmEdicao(null); // Reseta o modo de edição
  };

  // Preenche os campos para o usuário alterar antes de disparar o PUT
  const carregarParaEdicao = (item) => {
    setKeyEmEdicao(item.key);
    setEndereco(item.endereco);
    setNumero(item.numero);
    setComplemento(item.complemento || "");
    setCidade(item.cidade);
  };

  const salvar = async () => {
    try {
      const token = await Login();

      if (!token) {
        console.error("Token de autenticação não disponível");
        return null;
      }

      const resposta = await fetch(`${BaseURL}/IncluirEndereco`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token || token}`,
        },
        body: JSON.stringify({
          Endereco,
          Cidade,
          Complemento,
          Numero,
        }),
      });

      if (!resposta.ok) {
        console.error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
        return null;
      }

      cancelar(); // Limpa os campos após salvar
      return await resposta.json();
    } catch (error) {
      console.error("Erro ao acessar o serviço de inclusão de endereço", error);
      return null;
    }
  };

  const editar = async () => {
    try {
      const token = await Login();

      if (!token) {
        console.error("Token de autenticação não disponível");
        return null;
      }

      const resposta = await fetch(`${BaseURL}/AtualizarEndereco`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token || token}`,
        },
        body: JSON.stringify({
          Id: keyEmEdicao,
          Endereco,
          Numero,
          Complemento,
          Cidade,
        }),
      });

      if (!resposta.ok) {
        console.error(`Erro ao atualizar endereço: ${resposta.status} ${resposta.statusText}`);
        return null;
      }

      cancelar();
      return await resposta.json();
    } catch (error) {
      console.error("Erro ao acessar o serviço de atualização de endereço", error);
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

  const handleAcaoSalvar = () => {
    if (keyEmEdicao) {
      editar();
    } else {
      salvar();
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

      <BotoesAba onPress={handleAcaoSalvar} onPress2={cancelar} />

      <FlatListComponent
        data={ListaEndereco}
        coluna={({ item }) => (
          <View style={Estilo.cardLista}>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Endereço:</Text>
              <Text style={Estilo.valor}>{item.endereco}</Text>
            </View>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Número:</Text>
              <Text style={Estilo.valor}>{item.numero}</Text>
            </View>
            <View style={Estilo.linhaInfo}>
              <Text style={Estilo.label}>Complemento:</Text>
              <Text style={Estilo.valor}>{item.complemento}</Text>
            </View>

            <BotoesAba
              onPress={() => carregarParaEdicao(item)}
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