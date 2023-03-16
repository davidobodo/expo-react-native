import HomeScreen from "./screens/home";
import IntroScreen from "./screens/intro";
import ProductDetailsScreen from "./screens/product-details";
import CartScreen from "./screens/cart";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
		"Ubuntu-medium": require("./assets/fonts/Ubuntu-Light.ttf"),
		"Ubuntu-regular": require("./assets/fonts/Ubuntu-Medium.ttf"),
		"Ubuntu-light": require("./assets/fonts/Ubuntu-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<RecoilRoot>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Intro">
					<Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
					<Stack.Screen name="Cart" component={CartScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</RecoilRoot>
	);
}
