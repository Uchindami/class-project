import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


export default function index() {
    return (
        <View style>
            <Link href={"./AbelNgara"}>go to abel's page</Link>
            <Link href={"./lewis"}>go to lewis's page</Link>
            <Link href={"./mihowa"}>go to mihowa's page</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    Link:{
        frontWeight: 30,
        color:'blue'
    }
})