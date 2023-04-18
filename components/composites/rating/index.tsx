import StarRating from "react-native-star-rating";

export default function Rating({ count }: { count: number }) {
	return (
		<StarRating
			disabled={true}
			maxStars={5}
			rating={count}
			selectedStar={(rating) => () => console.log(rating, "IN HERE")}
		/>
	);
}
