import { View, Text, TextInput, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Estilo from '../../Estilo';
import { Masks } from 'react-native-mask-input';

import { formata_BR_data, formatarDataBanco } from '../Utilitario/Utilitario';

//Componentes
import TextoInput from '../../Componente/TextoInput';
import TextoMask from '../../Componente/TextoMask';
import DataInput from '../../Componente/DataInput';
import BotoesAba from '../../Componente/BotoesAba';

import { getPessoa, putPessoa, postPessoa } from '../Servico/BD/Pessoa';


export default function DadosGerais(props) {

    const [idPessoa, setidPessoa] = useState(props.route.params?.idPessoa || 0);
    const [Cpf, setCpf] = useState('');
    const [Nome, setNome] = useState('');
    const [Rg, setRg] = useState('');
    const [DataNascimento, setDataNascimento] = useState('');

    useEffect(() => {
        ListarPessoa();
    }, [])

    const salvar = () => {
        if (idPessoa === 0) {
            postPessoa({
                nome: Nome,
                rg: Rg,
                cpf: Cpf,
                DataNascimento: formatarDataBanco(DataNascimento)
            }).then((resposta) => {
                setidPessoa(resposta.idPessoa);
                Alert.alert('Sucesso', 'Pessoa cadastrada com sucesso');
            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            putPessoa({
                idPessoa: idPessoa,
                nome: Nome,
                rg: Rg,
                cpf: Cpf,
                DataNascimento: formatarDataBanco(DataNascimento)                
            }).then((resposta) => {
                Alert.alert('Sucesso', 'Pessoa Alterada com sucesso');
            }).catch((error) => {
                console.log(error);
            });
        }

    }

    const ListarPessoa = () => {
        if (idPessoa > 0) {
            getPessoa(idPessoa).then((response) => {
                if (response && response.idPessoa > 0) {
                    setCpf(response.cpf);
                    setNome(response.nome);
                    setRg(response.rg);
                    setidPessoa(response.idPessoa);
                    setDataNascimento(formata_BR_data(response.dtanascimento));
                }
            }).catch((erro) => { console.log(erro); });
        }
    }

    const cancelar = () => {
        if (idPessoa > 0) {
            ListarPessoa();
        }
        else {
            LimparDados();
        }
    }

    const LimparDados = () => {
        setCpf('');
        setDataNascimento('');
        setNome('');
        setRg('');
    }


    return (
        <View style={Estilo.containerDados}>

            <TextoInput
                texto="Nome"
                placeholder="Digite seu nome"
                maxLength={100}
                value={Nome}
                onChangeText={setNome} />

            <TextoInput
                texto="Rg"
                placeholder="Digite seu rg"
                maxLength={20}
                value={Rg}
                onChangeText={setRg} />

            <TextoMask
                texto="CPF"
                placeholder="Digite seu CPF/CNPJ"
                maxLength={20}
                mask={Masks.BRL_CPF_CNPJ}
                keyboardType="numeric"
                value={Cpf}
                onChangeText={setCpf} />

            <DataInput
                texto="Data Nascimento"
                placeholder="Data"
                value={DataNascimento}
                onChangeText={setDataNascimento} />

            <BotoesAba onPress={salvar} onPress2={cancelar} />

        </View>

    );
}