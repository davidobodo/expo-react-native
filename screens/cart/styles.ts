import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: 24,
	},
	image: {
		// height: 100,
	},
	price: {
		marginBottom: 4,
		fontSize: 20,
	},
});

const itemStyle = StyleSheet.create({
	item: {
		borderColor: "red",
		borderWidth: 2,
		borderRadius: 10,
		height: 100,
		marginBottom: 20,
		flexDirection: "row",
		padding: 2,
		paddingRight: 20,
	},
	itemImageWrapper: {
		width: 100,
		marginRight: 20,
		// backgroundColor: "red",
	},
	middle: {
		flex: 1,
	},
	title: {
		fontSize: 24,
	},
	price: {
		fontSize: 18,
	},
	itemImage: {
		width: "100%",
		height: "100%",
	},
	cta: {
		width: 24,
		height: 24,
		borderRadius: 30,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
	},
	ctaText: {
		color: "#fff",
	},
});

export { styles, itemStyle };
