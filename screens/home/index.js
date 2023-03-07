import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/atoms";
import { Banner } from "../../components/composites";
export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			{/* <StatusBar style="auto" /> */}
			<Text style={styles.subtitle}>Home screen </Text>
			<Banner />
			{/* <Button text="Go to intro" onPress={() => navigation.navigate("Intro")} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});
