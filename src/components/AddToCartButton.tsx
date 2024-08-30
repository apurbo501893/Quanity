"use client";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/shofySlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import { toast } from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

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
  const [existingProduct, setExistingtProduct] = useState<ProductType | null>(
    null
  );
  const { cart } = useSelector((state: StateType) => state.shopy);

  useEffect(() => {
    const availableProduct = cart.find((item) => item.id === product?.id);
    if (availableProduct) {
      setExistingtProduct(availableProduct);
    }
  }, [cart, product?.id]);

  const handleAdd = () => {
    dispatch(increaseQuantity(product?.id));
    toast.success(`${product?.title.substring(0, 10)}... added successfully`);
  };

  const handleMinus = () => {
    if (existingProduct?.quantity! > 1) {
      dispatch(decreaseQuantity(product?.id));
      toast.success(`Quantity decreased successfully!`);
    } else {
      toast.error(`Quantity can't be less than 1!`);
    }
  };
  return (
    <>
      {existingProduct ? (
        <div
          className="flex item-center justify-between
      h-10 rounded-md text-black"
        >
          <button
            onClick={handleMinus}
            disabled={existingProduct?.quantity === 1}
            className="bg-green-400 text-black h-full w-10 flex items-center justify-center rounded-md py-2
          border hover:border-cyan-500 hover:bg-sky-400 duration-200 disabled:text-white disabled:bg-red-500"
          >
            <FaMinus />
          </button>
          <p className="text-base font-bold">{existingProduct?.quantity}</p>
          <button
            onClick={handleAdd}
            className="bg-green-400 text-black h-full w-10 flex items-center justify-center rounded-md py-2
          border hover:border-cyan-500 hover:bg-sky-400 duration-200"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2"
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
