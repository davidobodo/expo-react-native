import { atom } from "recoil";
import { TCartItem } from "../types/cart";

const cartState = atom<TCartItem[]>({
	key: "cartState",
	default: [],
});

export { cartState };
