import { useRecoilValue } from "recoil";
import { cartState } from "../../store";

export default function useCartCount() {
	const cart = useRecoilValue(cartState);

	return {
		cartCount: cart.length,
	};
}
