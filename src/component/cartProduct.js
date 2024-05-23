import React from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCartItem, increaseQty, decreaseQty } from "../redux/productSlide";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch()

  return (
    <div className="bg-yellow-600 p-6 flex flex-col md:flex-row items-center text-white gap-4 font-semibold rounded-2xl w-full">
      <div className="p-3  rounded overflow-hidden md:w-1/2">
        <img src={image} className="h-44 w-48 rounded-md " alt="imag" />
      </div>
      <div className="flex flex-col  w-full md:w-1/2">
        <div className="flex justify-between">
          <h3 className="font-semibold  capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div className="cursor-pointer  hover:text-red-500" onClick={() => dispatch(deleteCartItem(id))}>
            <AiFillDelete />
          </div>
        </div>
        <p className=" font-medium ">{category}</p>
        <p className=" font-bold text-base">
          <span className="text-red-500 ">₹</span>
          <span>{price}</span>
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 items-center">
            <button onClick={() => dispatch(increaseQty(id))} className="bg-slate-300 py-1 rounded hover:bg-slate-400 p-1">
              <TbPlus />
            </button>
            <p className="font-semibold pt-3">{qty}</p>
            <button onClick={() => dispatch(decreaseQty(id))} className="bg-slate-300 py-1 rounded hover:bg-slate-400 p-1">
              <TbMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total:</p>
            <p><span className="text-red-500">₹</span>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
