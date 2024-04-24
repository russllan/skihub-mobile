import React from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from "react-native";

function SignUp() {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={[{ height: height, backgroundColor: '#222', position: "relative" }]}>
            <Image style={[{ width: width, resizeMode: "cover", height: height }]} source={require("../../../assets/authbg.png")} />
            <View style={[styles.footer, { bottom: "20%" }]}>
                <View style={styles.wrapper}>
                    <Text>
                        hello
                    </Text>
                    <TouchableOpacity style={[styles.footerBtn, { backgroundColor: "white" }]}>
                        <Text style={styles.footerBtnText}>Войти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.footerBtn, { backgroundColor: "#222", borderColor: "white", borderWidth: 1 }]}>
                        <Text style={[styles.footerBtnText, { color: "white" }]}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "90%",
        gap: 20
    },
    footer: {
        flexDirection: "column",
        position: 'absolute',
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
    },

    footerBtn: {
        width: "100%",
        borderRadius: 100,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15,
    },
    footerBtnText: {
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        color: "#444"
    }
})


export default SignUp