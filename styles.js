import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    header:{
        fontSize:23,
        color:"white",
        width:'75%',
        textAlign:"center",
        marginTop:60,
        fontWeight:"larger"
    },
    child:{
        padding:50, 
        alignItems:"center",
        display:"flex",
        flexDirection:"row"
    },
    input:{
        borderBottomColor:"black",
        borderBottomWidth:2,
        padding:15,
        color:"blue",
        marginRight:15,
        borderColor:"red",
        borderRadius:5
    },
    btn:{
        width:"150",
        borderRadius:10,
        padding:3,
        borderColor:"white"
    },
    img:{
        alignItems:"center"
    },
    action:{
        padding:50, 
        alignContent:"center",
        display:"flex",
        flexDirection:"row",
        margin:10,
    },
    btns:{
        width:"50",
        marginTop:10,
    }
});

export default styles;