import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ProductCard({ onPress, title, price, color }) {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<View style={{ ...styles.image, backgroundColor: color }}>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.price}>
				<Text>${price}</Text>
			</View>
			<Text>Product</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: 24,
		color: "#fff",
	},
	image: {
		backgroundColor: "red",
		height: 100,
	},
	price: {
		marginBottom: 4,
	},
});
