import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Pressable } from "react-native";
import { Button } from "../../components/atoms";
import { CartCount, Rating } from "../../components/composites";
import { styles } from "./styles";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { useCartCount, useUpdateCart } from "../../hooks";

export default function ProductDetails({ route, navigation }) {
	const { data } = route.params;
	const { id, title, color, price, description = "This is the description for this product", img } = data;

	const { onAddToCart } = useUpdateCart();

	const onGotoCart = () => {
		navigation.navigate("Intro");
	};

	const onGoBack = () => {
		navigation.goBack();
	};

	const { cartCount } = useCartCount();
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

					<CartCount count={cartCount} />
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
				<Button text="Add to cart" onPress={() => onAddToCart(data)} />
			</View>
			{/* <Button text="Clear cart" onPress={onClearCart} />
			<Button text="Go to cart" onPress={onGotoCart} /> */}
		</View>
	);
}
