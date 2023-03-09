import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/atoms";

export default function ProductDetails({ route }) {
	const { data } = route.params;
	const { id, title, color, price } = data;

	const onAddToCart = () => {};
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<View style={{ ...styles.image, backgroundColor: color }}></View>
			<Text style={styles.price}>{price}</Text>

			<Button text="Add to cart" onPress={onAddToCart} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: 24,
	},
	image: {
		height: 200,
	},
	price: {
		marginBottom: 4,
		fontSize: 20,
	},
});
