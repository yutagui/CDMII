import React from "react";
import { TextInput, Text, Image, View, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import logo from '../../assets/logo.png';

export default function Login(){
    return<>
    <View style={{ alignItems: 'center'}}>
        <Image source={logo} style={styles.logoLogin}/>
    </View>
    
    <Text style={styles.textoCheck}>Açougue do Osmar</Text>

    <View>
        <TextInput style={styles.input} placeholder="Digite seu login aqui" placeholderTextColor={'#A9A9A9'} />
        <TextInput style={styles.input} placeholder="Digite a sua senha aqui" placeholderTextColor={'#A9A9A9'}/>
    </View>

    <View>
        <TouchableOpacity style={styles.botaoComprar}>
                        <Text style={styles.textoBotao}>
                            Logar
                        </Text>
        </TouchableOpacity>
    </View>

    <View style={{alignItems:"center"}}>
        <Text>
            Crie sua conta agora mesmo! 
        </Text>

        <Text style={styles.textoCadastrar}>
            Cadastre-se
        </Text>
    </View>
    </>
}