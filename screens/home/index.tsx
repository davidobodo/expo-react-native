import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, FlatList, ImageBackground } from "react-native";
import { Button } from "../../components/atoms";
import { Filter, Cards, CartCount } from "../../components/composites";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import PRODUCTS from "../../data/products";
import { IMAGES } from "../../constants";
import { styles } from "./styles";
import { useCartCount } from "../../hooks";

export default function HomeScreen({ navigation }) {
	const onSelectProduct = (data) => {
		navigation.navigate("ProductDetails", {
			data,
		});
	};
	const onGoToCart = () => {
		navigation.navigate("Cart");
	};

	const { cartCount } = useCartCount();
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden={false} style="dark" />
			{/* ----------------- */}
			{/* NAVBAR */}
			{/* ----------------- */}
			<View style={styles.navContainer}>
				<Text style={styles.navLabel}>Bungkusa</Text>
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<CartCount count={cartCount} />
					<Ionicons name="notifications-outline" size={24} color="black" />
				</View>
			</View>

			{/* ----------------- */}
			{/* SEARCH */}
			{/* ----------------- */}
			<View style={styles.searchContaier}>
				<View style={styles.searchInputContainer}>
					<Ionicons name="search-outline" size={24} color="black" />
					<TextInput placeholder="" />
				</View>
				{/* <Pressable
					style={{
						width: 40,
						height: 40,
						backgroundColor: "#C5F177",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "50%",
					}}
					onPress={() => {}}
				>
					<Feather name="filter" size={24} color="black" />
				</Pressable> */}
			</View>

			{/* ----------------- */}
			{/* SMALL BANNER */}
			{/* ----------------- */}
			<View style={styles.bannerContainer}>
				<View style={styles.bannerOverlay}></View>
				<ImageBackground source={{ uri: IMAGES[0] }} style={styles.bannerBgImage}>
					<Text style={styles.bannerTitle}>Men's fashion collection</Text>
					<Text style={styles.bannerSubtitle}>Discount up to 60%</Text>
				</ImageBackground>
			</View>
			{/* ----------------- */}
			{/* PRODUCTS FILTER */}
			{/* ----------------- */}
			<Filter />

			{/* ----------------- */}
			{/* PRODUCTS */}
			{/* ----------------- */}
			<FlatList
				data={PRODUCTS}
				numColumns={2}
				keyExtractor={(item) => item.id as unknown as string}
				renderItem={({ item, index }) => {
					const { id, title, price, color, img } = item;
					const isEven = index % 2 === 0;

					return (
						<View
							key={id}
							style={{
								width: "50%",
								marginRight: isEven ? 10 : 0,
								marginLeft: isEven ? 0 : 10,
								marginBottom: 20,
							}}
						>
							<Cards.Product
								key={id}
								onPress={() => onSelectProduct(item)}
								title={title}
								price={price}
								color={color}
								img={img}
							/>
						</View>
					);
				}}
			/>

			{/* {PRODUCTS.map((item) => {
				const { id, title, price, color } = item;
				return <Cards.Product key={id} onPress={() => onSelectProduct(item)} title={title} price={price} color={color} />;
			})} */}
		</SafeAreaView>
	);
}
