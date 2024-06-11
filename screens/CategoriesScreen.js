import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";


function CategoriesScreen({navigation}) {
    const renderCategoryItem = (itemData) => {
        const pressHandle = () => {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandle} />
    }
    return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} numColumns={2} />
}

export default CategoriesScreen;