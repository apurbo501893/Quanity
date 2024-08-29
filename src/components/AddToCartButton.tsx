"use client";

import { addToCart } from "@/redux/shofySlice";
import { useDispatch } from "react-redux";
import { ProductType } from "../../type";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import cartAmount from "../components/ui/CartAmount";
import CartAmount from "../components/ui/CartAmount";
interface PropsType {
  product?: ProductType;
}

const AddToCartButton = ({ product }: PropsType) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(
        `${product?.title.substring(0, 10)}... added successfully!`
      );
    }
  };
  const [amount, setamount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };
  const setIncrease = () => {
    amount < 4 ? setamount(amount + 1) : setamount(4);
  };
  return (
    <>
      <CartAmount
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <button
        onClick={handleAddToCart}
        className="bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2"
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
