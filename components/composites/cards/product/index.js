import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";

export default function ProductCard({ onPress, title, price, color, img }) {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<ImageBackground source={{ uri: img }} style={{ ...styles.image, backgroundColor: color }}></ImageBackground>
			<View style={styles.price}>
				<Text>${price}</Text>
			</View>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		// width: "50%",
	},

	image: {
		backgroundColor: "red",
		height: 220,
		borderRadius: 20,
		overflow: "hidden",
		marginBottom: 6,
	},
	price: {
		marginBottom: 4,
	},
	title: {
		fontSize: 18,
	},
});
