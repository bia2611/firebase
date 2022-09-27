import React from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'


export default function Cadastrar(){

return(
    <View style={styles.container}>  
        <View style={styles.containerInputs}>
            <Text style={styles.titulo}> Cadastro de Alunos</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} placeholder="Digite o nome"/>

            <Text style={styles.label}>Idade:</Text>
            <TextInput style={styles.input} placeholder="Digite sua idade"/>

            <Text style={styles.label}>Nota 1:</Text>
            <TextInput style={styles.input} placeholder="Digite a primeira nota"/>

            <Text style={styles.label}>Nota 2:</Text>
            <TextInput style={styles.input} placeholder="Digite a segunda nota"/>

            <Text style={styles.label}>Nota 3:</Text>
            <TextInput style={styles.input} placeholder="Digite a terceira nota"/>

            <Text style={styles.label}>Imagem:</Text>
            <TextInput style={styles.input} placeholder="Cole o link com a foto do aluno"/>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        
    </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    containerInputs:{
        flex: 1,
        padding: 10,
    },
    titulo: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 50,
    },
    label:{
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
    },
    input:{
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
    },
    botao:{
        width: 250,
        padding: 10,
        marginTop: 25,
        backgroundColor: '#FD9F20',
        color: '#000',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textoBotao:{
        fontSize: 16,

    }

})

