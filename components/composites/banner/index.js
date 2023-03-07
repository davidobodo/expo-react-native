import { StyleSheet, Text, View } from "react-native";

export default function Banner() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Men's fashion collection</Text>
			<Text style={styles.subtitle}>Discount up to 60%</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		borderRadius: 30,
		padding: "5% 40%",
	},

	title: {
		fontSize: 20,
		color: "#fff",
		marginBottom: 20,
	},
	subtitle: {
		fontSize: 14,
		color: "#fff",
	},
});
