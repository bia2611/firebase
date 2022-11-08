import React from 'react'
import { useRoute } from '@react-navigation/native';

import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native'




export default function Detalhes(){

    const routes = useRoute();

    function Media(nota1, nota2, nota3){
        var media= 0;
        const aprovado = "aprovado"
        const reprovado = "reprovado"
        media = (nota1+nota2+nota3)/3

        if (media>6) {
            return aprovado
        } else {
            return reprovado
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Informações </Text>
            <Image source={{uri: routes.params?.dados.imagem}} />
            
            <View style={styles.containerInfo}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.info}>{routes.params?.dados.nome}</Text>
            </View>
            
            <View style={styles.containerInfo}>
                <Text style={styles.label}>Nota1:</Text>
                <Text style={styles.info}>{routes.params?.dados.nota1}</Text>
            </View>
            
            <View style={styles.containerInfo}>
                <Text style={styles.label}>Nota2:</Text>
                <Text style={styles.info}>{routes.params?.dados.nota2}</Text>
            </View>
            
            <View style={styles.containerInfo}>
                <Text style={styles.label}>Nota3:</Text>
                <Text style={styles.info}>{routes.params?.dados.nota3}</Text>
            </View>

            <Text>{Media(routes.params?.dados.nota1, routes.params?.dados.nota2, routes.params?.dados.nota3)}</Text>           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 5,
    },

    containerInfo:{
        flexDirection: 'row',
    },

    titulo: {
        fontSize: 30,
        textAlign: 'center',
    },

    imagem: {
        width: 200,
        height: 200,
    },

    label: {
        fontSize: 20,
        marginBottom: 10,
    },

    info:{
        fontSize: 20,
        marginLeft: 15, 
    }
}
)