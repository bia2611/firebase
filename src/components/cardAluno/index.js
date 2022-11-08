import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardAluno({data}){
    const navigation = useNavigation();

    function IrDetalhes(){
        navigation.navigate('Detalhes',{dados: data})
    }
    
    return (

        <TouchableOpacity onPress={IrDetalhes} style ={style.container}>
            <Image style={style.imagem} source = {{uri: data.imagem}}></Image>
            <Text style={style.nome}>{data.nome}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create ({
    container :{
        marginHorizontal: 5,
        marginTop: 5,
        marginVertical: 5,
        backgroundColor: 'transparent',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',  
        borderColor: 'black',
        borderWidth: 1,
    },

    imagem :{
        width: '100%',
        height: '85%',   
    },

    nome: {
        fontSize: 20,
        textAlign: 'center',
    }

})