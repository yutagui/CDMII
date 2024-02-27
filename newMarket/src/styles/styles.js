import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    imagemTopo:{
        width: width,
        height: 578/768 * width,
    },
    cestaCarnes:{
        color: "red",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign: "center",
    },
    acougue:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeAcougue:{
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 12,
        lineHeight: 40
    },
    imagemAcougue:{
        width: 42,
        height: 42
    },
    descricaoAcougue:{
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
        paddingHorizontal:12
    },
    precoCesta:{
        color: "#8B0000",
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 8,
        lineHeight: 42,
        paddingHorizontal: 12
    },
    botaoComprar:{
        margin: 10,
        backgroundColor: "#8B0000",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    },
})