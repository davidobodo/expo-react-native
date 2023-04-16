import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// margin: 6,
		backgroundColor: "#F5F5F0",
	},
	navContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 16,
		marginBottom: 10,
		// marginHorizontal: 10,
	},
	navLabel: {
		fontSize: 30,
	},

	searchContaier: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		marginBottom: 16,
		// marginHorizontal: 6,
	},
	searchInputContainer: {
		flexDirection: "row",
		backgroundColor: "#fff",
		padding: 8,
		borderRadius: 20,
		flex: 1,
	},
	bannerContainer: {
		marginBottom: 15,
		backgroundColor: "black",
		borderRadius: 20,
		overflow: "hidden",
		position: "relative",
		// marginHorizontal: 6,
	},
	bannerOverlay: {
		backgroundColor: "linear-gradient(to right, red , yellow)",
		width: "100%",
		height: "100%",
		position: "absolute",
		zIndex: 10,
		top: 0,
		left: 0,
	},
	bannerBgImage: {
		padding: "5% 40%",
	},
	bannerTitle: {
		fontSize: 20,
		color: "#fff",
		marginBottom: 20,
	},
	bannerSubtitle: {
		fontSize: 14,
		color: "#fff",
	},
});
