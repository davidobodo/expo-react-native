import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Pressable } from "react-native";
import { useRecoilState } from "recoil";
import { Button } from "../../components/atoms";
import { Rating } from "../../components/composites";
import { cartState } from "../../store";
import { styles } from "./styles";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";

export default function ProductDetails({ route, navigation }) {
	const [cart, setCart] = useRecoilState(cartState);
	const { data } = route.params;
	const { id, title, color, price, description = "This is the description for this product", img } = data;

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

	const onGotoCart = () => {
		navigation.navigate("Intro");
	};

	const onGoBack = () => {
		navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<StatusBar hidden={false} />
			{/* <Text style={styles.title}>{title}</Text> */}
			<View style={{ ...styles.imageWrapper, backgroundColor: color }}>
				{/* <SafeAreaView style={{ ...styles.imageWrapper, backgroundColor: color }}> */}
				<View style={styles.header}>
					<Pressable onPress={onGoBack} style={styles.headerGoBack}>
						<Ionicons name="chevron-back-sharp" size={24} color="black" />
					</Pressable>
					<Text style={styles.headerTitle}>Order Details</Text>
					<Pressable>
						<Octicons name="kebab-horizontal" size={24} color="black" />
					</Pressable>
				</View>

				<ImageBackground source={{ uri: img }} style={styles.image}></ImageBackground>
				{/* </SafeAreaView> */}
			</View>
			<View style={styles.titleAndPrice}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.price}>${price}</Text>
			</View>

			<View style={styles.ratingWrapper}>
				<Rating count={4} />
				<Text>{4}</Text>
			</View>
			<Text style={styles.description}>{description}</Text>

			<View style={styles.cta}>
				<Button text="Add to cart" onPress={onAddToCart} />
			</View>
			{/* <Button text="Clear cart" onPress={onClearCart} />
			<Button text="Go to cart" onPress={onGotoCart} /> */}
		</View>
	);
}
