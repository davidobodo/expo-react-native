import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/atoms";
export default function IntroScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.bottom}>
				<Text style={styles.subtitle}>New fashion collection</Text>
				<Text style={styles.title}>Start discovering your unique fashion style</Text>

				<Button text="Get started" onPress={() => navigation.navigate("Home")} />
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
});
