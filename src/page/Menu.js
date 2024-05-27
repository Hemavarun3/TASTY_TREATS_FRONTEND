import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide.js";
import { useEffect } from "react";
import { setDataProduct } from "../redux/productSlide.js";


const Menu = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.productList);

  
  useEffect(()=>{
    (async ()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products/allProducts`)
      const resData = await res.json();
      dispatch(setDataProduct(resData))
    })()
  },[dispatch]);

  if (!productData || productData.length === 0) {
    return <div>Loading...</div>;
  }
  const productDisplay = productData[0];

  
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay))
  };

  const handleBuy = ()=>{
    dispatch(addCartItem(productDisplay))
      navigate("/cart")
  }
  
  return (
    <div className="mt-10 flex flex-col p-16">
    
      <div className="w-full max-w-xl m-auto p-1 md:p-4  md:flex bg-yellow-600 rounded-xl text-white flex flex-col md:flex-row">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full rounded-xl"
            alt={{productDisplay}}
          />
        </div>
        <div className="flex flex-col gap-1 p-10 md:p-10">
          <h3 className="font-semibold  capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className=" text-2xl">{productDisplay.category}</p>
          <p className=" font-bold md:text-2xl">
            <span className="text-red-500 ">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
          <button onClick={handleBuy} className="bg-main2color py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
          <button onClick={handleAddCartProduct} className="bg-main2color py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Add Cart</button>
          </div>
        </div>
      </div>

      <div className="md:p-8 p-2">
          <AllProduct heading={"Related Product"}/>
      </div>
    </div>
  );
};

export default Menu;
