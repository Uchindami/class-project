import { View, Text, sytlesheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
    return (
        <View style>
            <Link href={"./AbelNgera"}>go to abel's page</Link>
            <Link href={"./lewis"}>go to lewis's page</Link>
            <Link href={"./mihowa"}>go to mihowa's page</Link>
        </View>
    )

    Const; style = StyleSheet.create({
        container: {
            flex: 1,
            padding: 5
        },
        Link: {
            fontweight: 30,
            color: 'blue'
        }
    })
}






