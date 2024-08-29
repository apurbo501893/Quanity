import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmount = ({
  amount,
  setDecrease,
  setIncrease,
}: {
  amount: number;
  setDecrease: () => void;
  setIncrease: () => void;
}) => {
  return (
    <div>
      <div>
        <button
          onClick={() => setDecrease()}
          className="w-20 h-10 bg-sky-400 text-center justify-items-center ml-1"
        >
          <FaMinus />
        </button>
        <span className="text-center">{amount}</span>
        <button
          onClick={() => setIncrease()}
          className="w-20 h-10 bg-sky-400 text-center justify-items-center"
        >
          <FaPlus className="items-center justify-center" />
        </button>
      </div>
    </div>
  );
};

export default CartAmount;
