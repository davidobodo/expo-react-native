import { View, Text } from "react-native";

export default function ProductDetails({ route }) {
	return (
		<View>
			<Text>A PRODUCT PAGE {route.params.id}</Text>
		</View>
	);
}
