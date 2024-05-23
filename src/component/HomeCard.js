import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="bg-yellow-500 shadow-md p-2 rounded h-96 w-auto">
      {name ? (
        <>
          <Link to={`/menu`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })} >
            <div className="w-40 min-h-[150px]">
              <img src={image} className="h-64 w-64" alt="imag" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
              {name}
            </h3>
            <p className="text-center text-slate-500  font-medium">
              {category}
            </p>
            <p className="text-center font-bold">
              <span className="text-red-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
