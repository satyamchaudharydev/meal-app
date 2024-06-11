import { View,Text, Image, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";

function DetailScreen({route, navigation}){
    const { mealId} = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="Favorite" onPress={() => {}} />
            )
        })
    
    }, [navigation])
   return (
        <View>
            <Image
                style={styles.image} 
                source={{
                    uri: selectedMeal.imageUrl
                }} 
            />
            <Text style={styles.title}>
                {selectedMeal.title}
            </Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability} 
                textStyle={{
                    color: "#111"
                }}
            />

            <Text style={styles.subtitleContainer} >Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient, index) => (
                <Text style={styles.subtitle} key={index}>{ingredient}</Text>
            ))}    
            <Text style={styles.subtitleContainer}>Steps</Text>
            {selectedMeal.steps.map((step, index) => (
                <Text style={styles.subtitle}  key={index}>{step}</Text>
            ))}

        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center"
    },
    subtitleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginVertical: 8,
        padding: 8
    }

});

export default DetailScreen;