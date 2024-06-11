import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
        <Pressable style={({pressed}) => [
            styles.buttonStyle, 
            { opacity: pressed ? 0.5 : 1 }
        ] } android_ripple={{
            color: "lightgrey",
        }}
        onPress={onPress}
        >
            <View style={[styles.innerContainer, {
        backgroundColor: color
    }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
buttonStyle: {
    flex: 1,
},
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontWeight: "bold",
    fontSize: 22,
  }
});

export default CategoryGridTitle;