import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native";
import Meal from "../models/meal";
import MealDetails from "./MealDetails";

function MealItem({text, image, duration, complexity, affordability, onPress}) {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{
                color: "lightgrey"
            }}
            style={({pressed}) => [
                styles.buttonPressed,
                { opacity: pressed ? 0.5 : 1 }
            ]}
            onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: image
                        }} />
                        <Text style={styles.title}>{text}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </Pressable>
           
        </View>
       
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#fff",
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10

    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        overflow: "hidden",
        borderRadius: 8,
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center"
    },
   
});