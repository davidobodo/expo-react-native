import { TProduct } from "../product";

type TCartItem = {
	quantity: number;
} & TProduct;

export type { TCartItem };
