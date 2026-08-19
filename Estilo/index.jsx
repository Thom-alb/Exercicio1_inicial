import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    containerSimples: {
        flex: 1,
    },
    containerLista: {
        flex: 1,
        alignItems: 'center',
        width: '98%',
        marginBottom: 70,
        backgroundColor: '#fff',
    },
    containerDados: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#f2f5f9',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f2f5f9',
    },
    logo: {
        width: 300,
        height: 280,
        marginLeft: 50,
        marginBottom: 5,
        resizeMode: 'contain',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 25,
    },
    menuContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 20,
    },
    cardSimples: {
        padding: 10,
        margin: 10,
    },
    cardBotao: {
        width: '85%',
        backgroundColor: '#fff',
        paddingVertical: 18,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    cardIcon: {
        width: 40,
        height: 40,
        marginLeft: 55,
        marginRight: 15,
        tintColor: '#007bff',
    },
    cardTexto: {
        fontSize: 20,
        color: '#333',
        fonteWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        marginBottom: 10,
    },
    rowSelectInput: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    TextInputSelect: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 15,
        color: '#333',
        width: '20%'
    },
    inputLabel: {
        width: '20%',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333',
    },
    inputEnd: {
        width: '70%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    inputLabelEnd: {
        width: '30%',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333',
    },

    inputData: {
        width: '27%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    inputLabelData: {
        width: '37%',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333',
    },
    button: {
        backgroundColor: '#11114F',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonTextSalvar: {
        fontFamily: 'Arial',
        fontSize: 17,
        textAlign: 'center',
        paddingTop: 8,
        color: '#ffffff'
    },
    buttonTextSalvar2: {
        fontFamily: 'Arial',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '850',
        paddingTop: 8,
        color: '#000'
    },
    buttonSalvar: {
        width: '35%',
        margin: 10,
        borderRadius: 20,
        height: 40,
        backgroundColor: '#154360'
    },
    buttonSalvar2: {
        width: '35%',
        margin: 10,
        borderRadius: 20,
        height: 40,
        backgroundColor: '#E5E7EB'
    },
    itemText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    cardLista: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        elevation: 3, // Android
        shadowColor: '#000', // iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    linhaInfo: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 5,
    },
    valor: {
        fontSize: 16,
        color: '#555',
    },
});