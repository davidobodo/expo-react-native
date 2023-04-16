import { IMAGES } from "../../constants/index";
import { TProduct } from "../../types/product";

const data: TProduct[] = [
	{
		title: "Shirt",
		price: 10,
		color: "red",
		id: 1,
	},
	{
		title: "Shoe",
		price: 20,
		color: "blue",
		id: 2,
	},
	{
		title: "Trouser",
		price: 30,
		color: "black",
		id: 3,
	},
	{
		title: "Hat",
		price: 40,
		color: "green",
		id: 4,
	},
	{
		title: "Skirt",
		price: 50,
		color: "orange",
		id: 5,
	},
	{
		title: "Skirt2",
		price: 50,
		color: "orange",
		id: 6,
	},
	{
		title: "Skirt3",
		price: 50,
		color: "orange",
		id: 7,
	},
	{
		title: "Skirt4",
		price: 50,
		color: "orange",
		id: 8,
	},
	{
		title: "Shirt",
		price: 10,
		color: "red",
		id: 10,
	},
	{
		title: "Shoe",
		price: 20,
		color: "blue",
		id: 20,
	},
	{
		title: "Trouser",
		price: 30,
		color: "black",
		id: 30,
	},
	{
		title: "Hat",
		price: 40,
		color: "green",
		id: 40,
	},
	{
		title: "Skirt",
		price: 50,
		color: "orange",
		id: 50,
	},
	{
		title: "Skirt2",
		price: 50,
		color: "orange",
		id: 60,
	},
	{
		title: "Skirt3",
		price: 50,
		color: "orange",
		id: 70,
	},
	{
		title: "Skirt4",
		price: 50,
		color: "orange",
		id: 80,
	},
];

const _data = data.map((item) => {
	const max = IMAGES.length - 1;
	const min = 0;
	const rand = Math.floor(Math.random() * (max - min + 1)) + min;
	return {
		...item,
		img: IMAGES[rand],
	};
});

export default _data;
