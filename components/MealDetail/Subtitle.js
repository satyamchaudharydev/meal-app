import {Text, StyleSheet} from 'react-native';

function Subtitle({text}){
    return <Text style={styles.subtitleContainer} >{text}</Text>

}
const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginVertical: 8,
        padding: 8
    }
})
export default  Subtitle;