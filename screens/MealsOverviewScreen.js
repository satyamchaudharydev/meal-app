import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const selectedCategory = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);
  const renderMealItem = (itemData) => {
    const pressHandle = () => {
      navigation.navigate('DetailScreen', {
        mealId: itemData.item.id,
      });
    }
    const properties = {
      text: itemData.item.title,
      image: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      onPress: pressHandle,
    };
    return <MealItem {...properties} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={selectedCategory}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    }
});