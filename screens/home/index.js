import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/atoms";
import { Banner, Filter, Cards } from "../../components/composites";
export default function HomeScreen({ navigation }) {
	const onSelectProduct = (id) => {
		console.log(id);
	};
	return (
		<View style={styles.container}>
			<View style={styles.bannerContainer}>
				<Banner />
			</View>
			<Filter />

			{[1, 2, 3, 4, 5, 6].map((item) => {
				return <Cards.Product key={item} onPress={() => onSelectProduct(item)} />;
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 6,
	},
	bannerContainer: {
		marginBottom: 15,
	},
});
