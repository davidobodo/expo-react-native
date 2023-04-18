import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";

type ItemData = {
	id: string;
	title: string;
};

const DATA: ItemData[] = Array.from({ length: 30 }).map((_, index) => ({
	id: Math.random() * 1000,
	title: "Item" + index,
}));

type ItemProps = {
	item: ItemData;
	onPress: () => void;
	backgroundColor: string;
	textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
		<Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
	</TouchableOpacity>
);

const containerSpacing = 16;
const itemSpacing = 32;
const columns = 2;
const itemWidth = Dimensions.get("window").width / 2 - containerSpacing - itemSpacing / 2;

const App = () => {
	const [selectedId, setSelectedId] = useState();

	const renderItem = ({ item }: { item: ItemData }) => {
		const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
		const color = item.id === selectedId ? "white" : "black";

		return (
			<Item item={item} onPress={() => setSelectedId(item.id)} backgroundColor={backgroundColor} textColor={color} />
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				numColumns={columns}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
				ListHeaderComponent={<View style={styles.headerContainer}></View>}
				// stickyHeaderIndices={[0]} // uncommenting this makes the header sticky
				contentContainerStyle={styles.contentContainerStyle}
				ItemSeparatorComponent={<View style={styles.separator} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	contentContainerStyle: {
		paddingHorizontal: containerSpacing,
	},
	headerContainer: {
		height: 200,
		backgroundColor: "red",
		marginBottom: 32,
	},
	separator: {
		height: 16,
	},
	item: {
		width: itemWidth,
		marginRight: itemSpacing,
		height: 200,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 32,
	},
});

export default App;
