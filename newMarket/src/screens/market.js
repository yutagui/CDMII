import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import imagemTopo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

export default function Market(){
    return<>
        <Image source={imagemTopo} style={styles.imagemTopo}/>
        <Text style={styles.cestaCarnes}> Cesta de Carnes </Text>

        <View style={styles.acougue}>
            <Image source={logo} style={styles.imagemAcougue}/>
            <Text style={styles.nomeAcougue}>Açougue do Osmar</Text>
        </View>

        <Text style={styles.descricaoAcougue}>
            As melhores e mais selecionadas carnes, com produção própria, direto do nosso 
            pasto para a sua mesa!
        </Text>

        <Text style={styles.precoCesta}>
            R$278,00
        </Text>

        <TouchableOpacity style={styles.botaoComprar}>
            <Text style={styles.textoBotao}>  
                Comprar
            </Text>
        </TouchableOpacity>
    </>
}   