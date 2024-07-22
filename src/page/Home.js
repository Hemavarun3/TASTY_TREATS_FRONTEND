import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardFeature from "../component/CardFeature";
import homebur from '../assest/home-burger.jpg';
import { Link } from 'react-router-dom';
import { setDataProduct } from "../redux/productSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products/allProducts`);
        const resData = await res.json();
        dispatch(setDataProduct(resData));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const loadingArrayFeature = new Array(10).fill(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="px-8 md:px-32 pt-20 flex flex-col bg-maincolor text-white space-y-10">
      <div className="w-full flex flex-col space-y-16 md:space-y-0 md:flex-row">
        <div className="flex space-y-8 flex-col pt-32 px-11 sm:py-16 md:my-3">
          <div>
            <h3 className="text-4xl font-semibold">Welcome To TastyTreats</h3>
          </div>
          <div>
            <h1 className="text-5xl font-semibold">Special Tasty Fastfood</h1>
          </div>
          <div>
            <p className="text-lg font-semibold">
              Keep it easy with simple and delicious recipes from make-ahead lunches and mid-week meals to fuss-free sides.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-main2color rounded-2xl text-lg font-semibold">
              <Link to={"menu"} className="no-underline text-white">Order Now</Link>
            </button>
            <button className="px-6 py-2 bg-main2color rounded-2xl text-lg font-semibold">
              <Link to={"cart"} className="no-underline text-white">Cart</Link>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 p-10 md:p-6 z-5 flex items-center">
          <img src={homebur} alt="imag" className="rounded-3xl" />
        </div>
      </div>

      <div className="space-y-4 md:px-12">
        <div className="flex p-4 items-center justify-center">
          <h2 className="font-bold text-xl text-main2color">MOST SELLING PRODUCTS</h2>
        </div>

        <Slider {...settings}>
          {loading
            ? loadingArrayFeature.map((_, index) => (
                <div key={index + "cartLoading"} className="p-4">
                  <CardFeature loading="Loading..." />
                </div>
              ))
            : productData.slice(0, 4).map((el) => (
                <div key={el._id} className="p-4">
                  <CardFeature
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                    style={{ color: "black", textDecoration: "none" }}
                  />
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
