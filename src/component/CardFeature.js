import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlide";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id: id,
      name: name,
      price: price,
      category: category,
      image: image,
    }));
  };

  return (
    <div className="px-4 py-6  bg-yellow-600 rounded-lg shadow-md">
      {image ? (
        <>
          <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="no-underline">
            <div className="flex justify-center items-center">
              <img src={image} className="h-48 w-48  rounded-md" alt="product" />
            </div>
            <h3 className="font-semibold text-white capitalize text-lg mt-4 whitespace-nowrap overflow-hidden"> {name} </h3>
            <p className="text-white font-medium">{category}</p>
            <p className="font-bold text-white mt-2">
              <span className="text-yellow-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
          <button className="bg-main2color py-2 mt-4 rounded-md hover:bg-yellow-600 w-full text-white font-semibold" onClick={handleAddCartProduct} >
            Add to Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p className="text-gray-300">{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
