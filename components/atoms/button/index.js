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
		padding: 20,
		borderRadius: 40,
	},
	buttonText: {
		color: "#fff",
		fontFamily: "Ubuntu-regular",
	},
});
