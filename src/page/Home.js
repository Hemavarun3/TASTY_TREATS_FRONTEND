import React, { useRef,useEffect } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import homebur from '../assest/home-burger.jpg'
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProduct from "../component/AllProduct";
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { setDataProduct } from "../redux/productSlide";


const Home = () => {
  
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.productList);

  
  useEffect(()=>{
    (async ()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products/allProducts`)
      const resData = await res.json();
      dispatch(setDataProduct(resData))
    })()
  },[dispatch]);


  const slideProductRef = useRef();
  if (!productData || productData.length === 0) {
    return <div>Loading...</div>;
  }
 

  
  

  const loadingArrayFeature = new Array(10).fill(null);

  
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="px-8 md:px-32 pt-20 flex flex-col bg-maincolor text-white space-y-10">




      <div className="w-full flex flex-col space-y-16  md:space-y-0 md:flex-row">
        <div className="flex space-y-2 flex-col pt-32 px-11 sm:py-16 md:my-3">
          <div>
            <h3>  Welcome To TastyTreats </h3>
          </div>
          <div>
            <h1> Special Tasty Fastfood. </h1>
          </div>
          <div>
            <p>
              Keep it ease with simple and delicious recipies from make-ahead launches and mid-week meals to free fuss slides
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-main2color rounded-2xl"><Link to={"menu"} className="no-underline text-white">Order Now</Link></button>
            <button className="px-4 py-2 bg-main2color rounded-2xl"><Link to={"cart"} className="no-underline text-white">Cart</Link></button>
          </div>
        </div>
        <div className="md:w-1/2  p-10 md:p-6 z-5 flex items-center">
          <img src={homebur} alt="imag" className="rounded-3xl"></img>
        </div>
      </div>






      <div className="space-y-4">


        <div className="flex  p-4 items-center justify-between">
          <div>
            <h2 className="font-bold text-xl text-main2color"> ALL PRODUCTS </h2>
          </div>
          <div className="flex gap-4">
            <button  onClick={preveProduct} className="bg-main2color text-lg  p-1 rounded" > <GrPrevious /> </button>
            <button onClick={nextProduct} className="bg-main2color text-lg p-1 rounded " > <GrNext /> </button>
          </div>
        </div>

        <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef} >
          {productData.length>0
            ? productData.map((el) => {
              return (
                <CardFeature
                  key={el._id + "Evening Special"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                  style={{ color: "black", textDecoration: "none" }} />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>


      </div>


      <div>
        <AllProduct heading={"Related Product"} />
      </div>

    </div>
  );
};

export default Home;
