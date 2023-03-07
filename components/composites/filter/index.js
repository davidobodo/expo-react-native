import { View, Text, Pressable, StyleSheet, FlatList, SafeAreaView } from "react-native";

const FILTERS = [
	{
		label: "Jacket",
		id: "1",
	},
	{
		label: "Jumpers",
		id: "2",
	},
	{
		label: "Shoes",
		id: "3",
	},
	{
		label: "Jeans",
		id: "4",
	},
	{
		label: "Ties",
		id: "5",
	},
];

const Item = ({ title }) => {
	return (
		<Pressable style={filterStyle.item}>
			<Text style={filterStyle.title}>{title}</Text>
		</Pressable>
	);
};

export default function Filter() {
	return (
		<SafeAreaView>
			<FlatList
				horizontal={true}
				data={FILTERS}
				renderItem={({ item }) => {
					return <Item title={item.label} />;
				}}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});

const filterStyle = StyleSheet.create({
	item: {
		backgroundColor: "#cbf5dd",
		padding: 2,
		borderRadius: 10,
	},
});
