import { View } from "react-native";

function List({ data }) {
  return (
    data.map((item) => {
        <View key={item}>
            <Text>{item}</Text>
        </View> 
    })
    
  );
}
export default List;