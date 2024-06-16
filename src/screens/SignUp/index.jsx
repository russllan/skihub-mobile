import React from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text, TextInput } from "react-native";
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

function SignUp() {

    const { SignOut, SignUp, isError } = useAuth()

    const [phoneNumber, setphoneNumber] = useState("");
    const [password, setPassword] = useState("");


    const { width, height } = Dimensions.get('window');

    const USER = {
        phoneNumber: phoneNumber,
        password: password,
        role: "user",
        isBanned: false
    }

    const onSubmit = async (data) => {
        const res = await SignUp(data)
        return res
    }


    return (
        <View style={[{ height: height, backgroundColor: '#222', position: "relative" }]}>
            <Image style={[{ width: width, resizeMode: "cover", height: height }]} source={require("../../../assets/authbg.png")} />
            <View style={[styles.footer, { bottom: "20%" }]}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        {isError ? "Error" : "Sign Up"}
                    </Text>
                    <TextInput onChangeText={setphoneNumber} style={styles.input} placeholder='Enter Your Phone Number' />
                    <TextInput onChangeText={setPassword} style={styles.input} placeholder='Enter Password' secureTextEntry={true} />

                    <TouchableOpacity onPress={() => onSubmit(USER)} style={[styles.footerBtn, { backgroundColor: "white" }]}>
                        <Text style={styles.footerBtnText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => SignOut()} style={[styles.footerBtn, { backgroundColor: "#222", borderColor: "white", borderWidth: 1 }]}>
                        <Text style={[styles.footerBtnText, { color: "white" }]}>Sign Uot</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "90%",
        gap: 20,
        flexDirection: "column",
        alignItems: "center"
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
    },
    title: {
        fontSize: 40,
        color: "white",
        fontWeight: "700"
    },
    input: {
        borderColor: "white",
        borderWidth: 2,
        width: "100%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "white",
        padding: 10,
        fontSize: 20
    }
})


export default SignUp