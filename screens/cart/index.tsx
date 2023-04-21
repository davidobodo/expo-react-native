import { View, Text, StyleSheet, SafeAreaView, FlatList, Pressable, ImageBackground } from "react-native";
import { useRecoilState } from "recoil";
import { Button } from "../../components/atoms";
import { cartState } from "../../store";
import { TCartItem } from "../../types/cart";
import { styles, itemStyle } from "./styles";

function Item({ title, price, quantity, color, img, onIncrease, onDecrease, id }: TCartItem) {
	console.log(img, "====TEH IMAGE");
	return (
		<View style={itemStyle.item}>
			<View style={itemStyle.itemImageWrapper}>
				<ImageBackground source={{ uri: img }} style={itemStyle.itemImage}></ImageBackground>
			</View>
			<View style={itemStyle.middle}>
				<Text style={itemStyle.title}>{title}</Text>
				<Text style={itemStyle.price}>{price}</Text>
			</View>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					gap: 4,
				}}
			>
				<Pressable onPress={() => onDecrease(id)} style={itemStyle.cta}>
					<Text style={itemStyle.ctaText}>-</Text>
				</Pressable>
				<Text>{quantity}</Text>
				<Pressable onPress={() => onIncrease(id)} style={itemStyle.cta}>
					<Text style={itemStyle.ctaText}>+</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default function Cart({ route, navigation }) {
	const [cart, setCart] = useRecoilState(cartState);

	const onGoHome = () => {
		navigation.navigate("Home");
	};

	console.log(cart, "THE CART");
	const onIncrease = (id: string) => {};
	const onDecrease = (id: string) => {};
	return (
		<View>
			<SafeAreaView>
				<FlatList
					data={cart}
					renderItem={({ item }) => {
						const { title, price, quantity, color, id, img } = item;
						return (
							<Item
								title={title}
								price={price}
								quantity={quantity}
								color={color}
								id={id}
								img={img}
								onIncrease={onIncrease}
								onDecrease={onDecrease}
							/>
						);
					}}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
			<Button text="Go home" onPress={onGoHome} />
		</View>
	);
}
