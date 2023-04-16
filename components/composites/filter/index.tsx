import { View, Text, Pressable, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";
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
	{
		label: "Ties2",
		id: "6",
	},
	{
		label: "Ties3",
		id: "7",
	},
	{
		label: "Ties4",
		id: "8",
	},
	{
		label: "Ties5",
		id: "9",
	},
];

const Item = ({ title, active }) => {
	return (
		<Pressable style={{ ...filterStyle.item, backgroundColor: active ? "#C5F177" : "#fff" }}>
			<Text>{title}</Text>
		</Pressable>
	);
};

export default function Filter() {
	const [active, setActive] = useState(1);
	return (
		<SafeAreaView>
			<FlatList
				style={{ marginBottom: 14, paddingHorizontal: 6 }}
				horizontal={true}
				data={FILTERS}
				ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
				renderItem={({ item, index }) => {
					return <Item title={item.label} active={index === active} />;
				}}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});

const filterStyle = StyleSheet.create({
	item: {
		backgroundColor: "#C5F177",
		paddingHorizontal: 28,
		paddingVertical: 8,
		borderRadius: 20,
	},
});
