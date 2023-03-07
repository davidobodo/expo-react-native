import { StyleSheet, Text, Pressable } from "react-native";

export default function Button({ text, onPress }) {
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "black",
		alignItems: "center",
		padding: 15,
		borderRadius: 20,
	},
	buttonText: {
		color: "#fff",
	},
});
