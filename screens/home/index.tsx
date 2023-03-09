import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/atoms";
import { Banner, Filter, Cards } from "../../components/composites";
import PRODUCTS from "../../data/products";
export default function HomeScreen({ navigation }) {
	const onSelectProduct = (data) => {
		navigation.navigate("ProductDetails", {
			data,
		});
	};
	return (
		<View style={styles.container}>
			<View style={styles.bannerContainer}>
				<Banner />
			</View>
			<Filter />

			{PRODUCTS.map((item) => {
				const { id, title, price, color } = item;
				return <Cards.Product key={id} onPress={() => onSelectProduct(item)} title={title} price={price} color={color} />;
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
