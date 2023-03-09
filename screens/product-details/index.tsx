import { View, Text, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { Button } from "../../components/atoms";
import { cartState } from "../../store";

export default function ProductDetails({ route }) {
	const [cart, setCart] = useRecoilState(cartState);
	const { data } = route.params;
	const { id, title, color, price } = data;

	function onAddNewItem() {
		const updatedCart = [...cart, { ...data, quantity: 1 }];
		setCart(updatedCart);
	}

	const onAddToCart = () => {
		//Item could possibly already exists
		if (cart.length > 0) {
			const productInCart = cart.find((item) => item.id === id);
			if (productInCart) {
				const clonedCart = JSON.parse(JSON.stringify(cart));
				const position = cart.findIndex((item) => item.id === id);
				productInCart.quantity++;
				clonedCart.splice(position, 1, productInCart);
				setCart(clonedCart);
			} else {
				//Add new item
				onAddNewItem();
			}
		} else {
			//Add new item
			onAddNewItem();
		}
	};

	const onClearCart = () => {
		setCart([]);
	};
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<View style={{ ...styles.image, backgroundColor: color }}></View>
			<Text style={styles.price}>{price}</Text>

			<Button text="Add to cart" onPress={onAddToCart} />
			<Button text="Clear cart" onPress={onClearCart} />
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
