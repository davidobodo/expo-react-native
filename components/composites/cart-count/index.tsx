import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function CartCount({ count }: { count: number }) {
	const navigation = useNavigation();
	return (
		<Pressable
			onPress={() => {
				navigation.navigate("Cart");
			}}
		>
			<View
				style={{
					position: "relative",
					marginRight: 10,
				}}
			>
				<View
					style={{
						width: 16,
						height: 16,
						backgroundColor: "red",
						alignItems: "center",
						justifyContent: "center",
						position: "absolute",
						right: -4,
						top: -6,
						zIndex: 2,
						borderRadius: 30,
					}}
				>
					<Text
						style={{
							color: "#fff",
							fontSize: 12,
						}}
					>
						{count}
					</Text>
				</View>
				<AntDesign name="shoppingcart" size={24} color="black" />
			</View>
		</Pressable>
	);
}
