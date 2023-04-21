import { useRecoilState } from "recoil";
import { cartState } from "../../store";

export default function useUpdateCart() {
	const [cart, setCart] = useRecoilState(cartState);

	function onAddNewItem(newData) {
		const updatedCart = [...cart, newData];
		setCart(updatedCart);
	}

	const onAddToCart = (data) => {
		//Item could possibly already exists
		if (cart.length > 0) {
			const productInCart = cart.find((item) => item.id === data.id);
			if (productInCart) {
				const clonedCart = JSON.parse(JSON.stringify(cart));
				const position = cart.findIndex((item) => item.id === data.id);
				productInCart.quantity++;
				clonedCart.splice(position, 1, productInCart);
				setCart(clonedCart);
			} else {
				//Add new item
				onAddNewItem({ ...data, quantity: 1 });
			}
		} else {
			//Add new item
			onAddNewItem({ ...data, quantity: 1 });
		}
	};

	return {
		onAddToCart,
	};
}
