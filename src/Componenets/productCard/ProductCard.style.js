import React from 'react'
import { StyleSheet,useWindowDimensions } from 'react-native'


export default StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        padding:5,
        borderRadius:10,
        backgroundColor:"gray",
    },
    Image:{
        margin:5,
        width:150,
        height:150,
        resizeMode:"contain",
        backgroundColor:"white",
        borderRadius:20,
    },
    productTitle:{
        fontSize:16,
        fontWeight:'bold',
        padding:5,
        color:"black",
        flex:1,
    },
    productPrice:{        
        fontSize:14,
        padding:5,
        color:"lightgray",
    },
})
