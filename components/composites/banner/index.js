import { StyleSheet, Text, View } from "react-native";

export default function Banner() {
	return (
		<View>
			<Text>Men's fashion collection</Text>
			<Text>Discount up to 60%</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
	},
});
