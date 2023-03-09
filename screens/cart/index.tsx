import { View, Text, StyleSheet, SafeAreaView, FlatList, Pressable } from "react-native";
import { useRecoilState } from "recoil";
import { Button } from "../../components/atoms";
import { cartState } from "../../store";
import { TCartItem } from "../../types/cart";

function Item({ title, price, quantity, color }: TCartItem) {
	return (
		<View style={itemStyle.item}>
			<Text>{title}</Text>
			<Text>{price}</Text>
			<Text>{quantity}</Text>
		</View>
	);
}

export default function Cart({ route, navigation }) {
	const [cart, setCart] = useRecoilState(cartState);

	const onGoHome = () => {
		navigation.navigate("Home");
	};
	return (
		<View>
			<SafeAreaView>
				<FlatList
					data={cart}
					renderItem={({ item }) => {
						const { title, price, quantity, color, id } = item;
						return <Item title={title} price={price} quantity={quantity} color={color} id={id} />;
					}}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
			<Button text="Go home" onPress={onGoHome} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: 24,
	},
	image: {
		height: 200,
	},
	price: {
		marginBottom: 4,
		fontSize: 20,
	},
});

const itemStyle = StyleSheet.create({
	item: {
		backgroundColor: "#cbf5dd",
		padding: 2,
		borderRadius: 10,
		height: 200,
		marginBottom: 20,
	},
});
