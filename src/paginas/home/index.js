import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect}from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';
import CardAluno from '../../components/cardAluno';
import firebase from '../../firebaseConnection';


export default function Home(){
const [alunos, setAlunos] = useState([]);

useEffect(()=> {
    async function buscarAluno(){
        await firebase.database().ref('Alunos').on('value',(snapshot) =>{
            snapshot.forEach((childItem)=>{

                var data = {
                    key : childItem.key,
                    nome: childItem.val().Nome,
                    nota1: childItem.val().Nota1,
                    nota2: childItem.val().Nota2,
                    nota3: childItem.val().Nota3,
                    imagem: childItem.val().Imagem
                }

                setAlunos(alunos=>[...alunos, data]);
            })
        })
    }

    buscarAluno();
    }, [])

    return(
        <View style = {{alignItems:'center'}}>

            <Text>Lista de Alunos</Text>
                
            <FlatList 
                data={alunos}
                numColumns={2}
                keyExtractor={(item)=> item.key}
                renderItem={({item}) => <CardAluno />}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'green',
        width:'80%',
        alignItems:"center",
        marginTop:10
    }

}
)