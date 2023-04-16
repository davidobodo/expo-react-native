import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "../../components/atoms";
import { IMAGES } from "../../constants";
export default function IntroScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />
			<ImagesSection />
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
		justifyContent: "flex-end",
	},
	bottom: {
		backgroundColor: "#fefefe",
		padding: 16,
		paddingTop: 30,
		paddingBottom: 30,
	},
	subtitle: {
		marginBottom: 6,
		fontFamily: "Ubuntu-light",
	},
	title: {
		fontSize: 24,
		marginBottom: 40,
		fontFamily: "Ubuntu-bold",
	},
});

function ImagesSection() {
	return (
		<View style={imagesStyles.container}>
			<View style={{ ...imagesStyles.section, justifyContent: "center" }}>
				{[1, 2, 3].map((item, i) => {
					return (
						<View key={i} style={{ ...imagesStyles.image, height: "50%" }}>
							<ImageBackground source={{ uri: IMAGES[i + 2] }} style={{ height: "100%", width: "100%" }}></ImageBackground>
						</View>
					);
				})}
			</View>

			<View style={{ ...imagesStyles.section, justifyContent: "center" }}>
				{[1, 2].map((item, i) => {
					return (
						<View key={i} style={{ ...imagesStyles.image, height: "70%" }}>
							<ImageBackground source={{ uri: IMAGES[i] }} style={{ height: "100%", width: "100%" }}></ImageBackground>
						</View>
					);
				})}
			</View>

			<View style={{ ...imagesStyles.section, justifyContent: "center" }}>
				{[1, 2, 3].map((item, i) => {
					return (
						<View key={i} style={{ ...imagesStyles.image, height: "50%" }}>
							<ImageBackground source={{ uri: IMAGES[i + 2] }} style={{ height: "100%", width: "100%" }}></ImageBackground>
						</View>
					);
				})}
			</View>
		</View>
	);
}

const imagesStyles = StyleSheet.create({
	container: {
		// backgroundColor: "yellow",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		gap: 10,
	},
	section: {
		// backgroundColor: "green",
		width: "70%",
		gap: 10,
	},
	image: {
		height: 40,
		backgroundColor: "black",
		borderRadius: 30,
		overflow: "hidden",
		// flex: 1,
	},
});
