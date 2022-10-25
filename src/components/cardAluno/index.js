import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CardAluno(){
    return (

        <View style ={style.container}>
            <Image style={style.imagem} source = {{uri: "https://nova-escola-producao.s3.amazonaws.com/tunxSkGu84NNEkscfMQUVeRzZD62xuejkA7ZhCD79kyDMjHzpWW2b7MgT62N/menina-faz-exercicio-no-caderno-na-escola.jpg"}}></Image>
            <Text>Maria</Text>
        </View>
);

}

const style = StyleSheet.create ({
    container :{
        marginHorizontal: 5,
        marginTop: 5,
        backgroundColor: 'yellow',
        width: 200,
        height: 200
    },

    imagem :{
        width: '100%',
        height: '100%'

    }

})