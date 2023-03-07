import HomeScreen from "./screens/home";
import IntroScreen from "./screens/intro";
import ProductDetailsScreen from "./screens/product-details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Intro">
				<Stack.Screen name="Intro" component={IntroScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
