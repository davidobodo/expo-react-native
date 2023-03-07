import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />

			<View style={styles.bottom}>
				<Text style={styles.subtitle}>New fashion collection</Text>
				<Text style={styles.title}>Start discovering your unique fashion style</Text>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Get started</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "flex-end",
	},
	bottom: {
		backgroundColor: "red",
		height: "33%",
		padding: 20,
	},
	subtitle: {
		marginBottom: 10,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
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
