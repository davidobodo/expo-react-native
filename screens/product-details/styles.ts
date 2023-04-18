import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 24,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		position: "absolute",
		top: 60,
		zIndex: 2,
		width: "100%",
	},
	headerGoBack: {
		backgroundColor: "#fff",
	},
	headerTitle: {
		fontSize: 24,
	},
	imageWrapper: {
		height: "65%",
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
		overflow: "hidden",
		position: "relative",
		marginBottom: 10,
	},
	image: {
		// borderBottomLeftRadius: 40,
		// borderBottomRightRadius: 40,
		height: "100%",
		width: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},

	titleAndPrice: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	ratingWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	description: {},
	price: {
		fontSize: 16,
	},
	cta: {
		position: "absolute",
		bottom: 10,
		width: "100%",
	},
});
