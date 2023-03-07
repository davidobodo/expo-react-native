import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ProductCard({ onPress }) {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<View style={styles.image}></View>
			<View style={styles.price}>
				<Text>$36</Text>
			</View>
			<Text>Product</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {},
	image: {
		backgroundColor: "red",
		height: 200,
	},
	price: {
		marginBottom: 4,
	},
});
