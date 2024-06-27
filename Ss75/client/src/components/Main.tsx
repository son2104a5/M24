import ListProduct from "./ListProduct";
import ShoppingCart from "./ShoppingCart";

export default function Main() {
  return (
    <div className="flex justify-evenly items-center w-screen h-screen">
        <ListProduct />
        <ShoppingCart />
    </div>
  )
}
